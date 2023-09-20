// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { UpdateGlobalTableInput, UpdateGlobalTableOutput } from "../models/models_0";
import { de_UpdateGlobalTableCommand, se_UpdateGlobalTableCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateGlobalTableCommand}.
 */
export interface UpdateGlobalTableCommandInput extends UpdateGlobalTableInput {}
/**
 * @public
 *
 * The output of {@link UpdateGlobalTableCommand}.
 */
export interface UpdateGlobalTableCommandOutput extends UpdateGlobalTableOutput, __MetadataBearer {}

/**
 * @public
 * <p>Adds or removes replicas in the specified global table. The global table must already
 *             exist to be able to use this operation. Any replica to be added must be empty, have the
 *             same name as the global table, have the same key schema, have DynamoDB Streams enabled,
 *             and have the same provisioned and maximum write capacity units.</p>
 *          <important>
 *             <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V1.html">Version
 *                 2017.11.29 (Legacy)</a> of global tables. We recommend using
 *                 <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21 (Current)</a>
 *                 when creating new global tables, as it provides greater flexibility, higher efficiency and consumes less write capacity than
 *                 2017.11.29 (Legacy). To determine which version you are using, see
 *                 <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.DetermineVersion.html">Determining the version</a>.
 *                 To update existing global tables from version 2017.11.29 (Legacy) to version
 *                 2019.11.21 (Current), see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/V2globaltables_upgrade.html">
 *                     Updating global tables</a>.
 *             </p>
 *          </important>
 *          <note>
 *             <p>
 *                 This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V1.html">Version
 *                     2017.11.29</a> of global tables. If you are using global tables <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version
 *                         2019.11.21</a> you can use <a href="https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeTable.html">DescribeTable</a> instead.
 *             </p>
 *             <p>
 *                 Although you can use <code>UpdateGlobalTable</code> to add replicas and remove
 *                 replicas in a single request, for simplicity we recommend that you issue separate
 *                 requests for adding or removing replicas.
 *             </p>
 *          </note>
 *          <p> If global secondary indexes are specified, then the following conditions must also be
 *             met: </p>
 *          <ul>
 *             <li>
 *                <p> The global secondary indexes must have the same name. </p>
 *             </li>
 *             <li>
 *                <p> The global secondary indexes must have the same hash key and sort key (if
 *                     present). </p>
 *             </li>
 *             <li>
 *                <p> The global secondary indexes must have the same provisioned and maximum write
 *                     capacity units. </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, UpdateGlobalTableCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, UpdateGlobalTableCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const input = { // UpdateGlobalTableInput
 *   GlobalTableName: "STRING_VALUE", // required
 *   ReplicaUpdates: [ // ReplicaUpdateList // required
 *     { // ReplicaUpdate
 *       Create: { // CreateReplicaAction
 *         RegionName: "STRING_VALUE", // required
 *       },
 *       Delete: { // DeleteReplicaAction
 *         RegionName: "STRING_VALUE", // required
 *       },
 *     },
 *   ],
 * };
 * const command = new UpdateGlobalTableCommand(input);
 * const response = await client.send(command);
 * // { // UpdateGlobalTableOutput
 * //   GlobalTableDescription: { // GlobalTableDescription
 * //     ReplicationGroup: [ // ReplicaDescriptionList
 * //       { // ReplicaDescription
 * //         RegionName: "STRING_VALUE",
 * //         ReplicaStatus: "CREATING" || "CREATION_FAILED" || "UPDATING" || "DELETING" || "ACTIVE" || "REGION_DISABLED" || "INACCESSIBLE_ENCRYPTION_CREDENTIALS",
 * //         ReplicaStatusDescription: "STRING_VALUE",
 * //         ReplicaStatusPercentProgress: "STRING_VALUE",
 * //         KMSMasterKeyId: "STRING_VALUE",
 * //         ProvisionedThroughputOverride: { // ProvisionedThroughputOverride
 * //           ReadCapacityUnits: Number("long"),
 * //         },
 * //         GlobalSecondaryIndexes: [ // ReplicaGlobalSecondaryIndexDescriptionList
 * //           { // ReplicaGlobalSecondaryIndexDescription
 * //             IndexName: "STRING_VALUE",
 * //             ProvisionedThroughputOverride: {
 * //               ReadCapacityUnits: Number("long"),
 * //             },
 * //           },
 * //         ],
 * //         ReplicaInaccessibleDateTime: new Date("TIMESTAMP"),
 * //         ReplicaTableClassSummary: { // TableClassSummary
 * //           TableClass: "STANDARD" || "STANDARD_INFREQUENT_ACCESS",
 * //           LastUpdateDateTime: new Date("TIMESTAMP"),
 * //         },
 * //       },
 * //     ],
 * //     GlobalTableArn: "STRING_VALUE",
 * //     CreationDateTime: new Date("TIMESTAMP"),
 * //     GlobalTableStatus: "CREATING" || "ACTIVE" || "DELETING" || "UPDATING",
 * //     GlobalTableName: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateGlobalTableCommandInput - {@link UpdateGlobalTableCommandInput}
 * @returns {@link UpdateGlobalTableCommandOutput}
 * @see {@link UpdateGlobalTableCommandInput} for command's `input` shape.
 * @see {@link UpdateGlobalTableCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for DynamoDBClient's `config` shape.
 *
 * @throws {@link GlobalTableNotFoundException} (client fault)
 *  <p>The specified global table does not exist.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidEndpointException} (client fault)
 *
 * @throws {@link ReplicaAlreadyExistsException} (client fault)
 *  <p>The specified replica is already part of the global table.</p>
 *
 * @throws {@link ReplicaNotFoundException} (client fault)
 *  <p>The specified replica is no longer part of the global table.</p>
 *
 * @throws {@link TableNotFoundException} (client fault)
 *  <p>A source table with the name <code>TableName</code> does not currently exist within
 *             the subscriber's account or the subscriber is operating in the wrong Amazon Web Services Region.</p>
 *
 * @throws {@link DynamoDBServiceException}
 * <p>Base exception class for all service exceptions from DynamoDB service.</p>
 *
 */
export class UpdateGlobalTableCommand extends $Command<
  UpdateGlobalTableCommandInput,
  UpdateGlobalTableCommandOutput,
  DynamoDBClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: UpdateGlobalTableCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateGlobalTableCommandInput, UpdateGlobalTableCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateGlobalTableCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DynamoDBClient";
    const commandName = "UpdateGlobalTableCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "DynamoDB_20120810",
        operation: "UpdateGlobalTable",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: UpdateGlobalTableCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateGlobalTableCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateGlobalTableCommandOutput> {
    return de_UpdateGlobalTableCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
