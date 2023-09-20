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

import { CreateDBClusterSnapshotMessage, CreateDBClusterSnapshotResult } from "../models/models_0";
import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import { de_CreateDBClusterSnapshotCommand, se_CreateDBClusterSnapshotCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateDBClusterSnapshotCommand}.
 */
export interface CreateDBClusterSnapshotCommandInput extends CreateDBClusterSnapshotMessage {}
/**
 * @public
 *
 * The output of {@link CreateDBClusterSnapshotCommand}.
 */
export interface CreateDBClusterSnapshotCommandOutput extends CreateDBClusterSnapshotResult, __MetadataBearer {}

/**
 * @public
 * <p>Creates a snapshot of a DB cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, CreateDBClusterSnapshotCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, CreateDBClusterSnapshotCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
 * const input = { // CreateDBClusterSnapshotMessage
 *   DBClusterSnapshotIdentifier: "STRING_VALUE", // required
 *   DBClusterIdentifier: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateDBClusterSnapshotCommand(input);
 * const response = await client.send(command);
 * // { // CreateDBClusterSnapshotResult
 * //   DBClusterSnapshot: { // DBClusterSnapshot
 * //     AvailabilityZones: [ // AvailabilityZones
 * //       "STRING_VALUE",
 * //     ],
 * //     DBClusterSnapshotIdentifier: "STRING_VALUE",
 * //     DBClusterIdentifier: "STRING_VALUE",
 * //     SnapshotCreateTime: new Date("TIMESTAMP"),
 * //     Engine: "STRING_VALUE",
 * //     AllocatedStorage: Number("int"),
 * //     Status: "STRING_VALUE",
 * //     Port: Number("int"),
 * //     VpcId: "STRING_VALUE",
 * //     ClusterCreateTime: new Date("TIMESTAMP"),
 * //     MasterUsername: "STRING_VALUE",
 * //     EngineVersion: "STRING_VALUE",
 * //     LicenseModel: "STRING_VALUE",
 * //     SnapshotType: "STRING_VALUE",
 * //     PercentProgress: Number("int"),
 * //     StorageEncrypted: true || false,
 * //     KmsKeyId: "STRING_VALUE",
 * //     DBClusterSnapshotArn: "STRING_VALUE",
 * //     SourceDBClusterSnapshotArn: "STRING_VALUE",
 * //     IAMDatabaseAuthenticationEnabled: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateDBClusterSnapshotCommandInput - {@link CreateDBClusterSnapshotCommandInput}
 * @returns {@link CreateDBClusterSnapshotCommandOutput}
 * @see {@link CreateDBClusterSnapshotCommandInput} for command's `input` shape.
 * @see {@link CreateDBClusterSnapshotCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for NeptuneClient's `config` shape.
 *
 * @throws {@link DBClusterNotFoundFault} (client fault)
 *  <p>
 *             <i>DBClusterIdentifier</i> does not refer to an existing DB cluster.</p>
 *
 * @throws {@link DBClusterSnapshotAlreadyExistsFault} (client fault)
 *  <p>User already has a DB cluster snapshot with the given identifier.</p>
 *
 * @throws {@link InvalidDBClusterSnapshotStateFault} (client fault)
 *  <p>The supplied value is not a valid DB cluster snapshot state.</p>
 *
 * @throws {@link InvalidDBClusterStateFault} (client fault)
 *  <p>The DB cluster is not in a valid state.</p>
 *
 * @throws {@link SnapshotQuotaExceededFault} (client fault)
 *  <p>Request would result in user exceeding the allowed number of DB snapshots.</p>
 *
 * @throws {@link NeptuneServiceException}
 * <p>Base exception class for all service exceptions from Neptune service.</p>
 *
 */
export class CreateDBClusterSnapshotCommand extends $Command<
  CreateDBClusterSnapshotCommandInput,
  CreateDBClusterSnapshotCommandOutput,
  NeptuneClientResolvedConfig
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
  constructor(readonly input: CreateDBClusterSnapshotCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NeptuneClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateDBClusterSnapshotCommandInput, CreateDBClusterSnapshotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateDBClusterSnapshotCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NeptuneClient";
    const commandName = "CreateDBClusterSnapshotCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonRDSv19",
        operation: "CreateDBClusterSnapshot",
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
  private serialize(input: CreateDBClusterSnapshotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateDBClusterSnapshotCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDBClusterSnapshotCommandOutput> {
    return de_CreateDBClusterSnapshotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
