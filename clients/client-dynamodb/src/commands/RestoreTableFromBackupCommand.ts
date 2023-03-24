// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { RestoreTableFromBackupInput, RestoreTableFromBackupOutput } from "../models/models_0";
import {
  deserializeAws_json1_0RestoreTableFromBackupCommand,
  serializeAws_json1_0RestoreTableFromBackupCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 *
 * The input for {@link RestoreTableFromBackupCommand}.
 */
export interface RestoreTableFromBackupCommandInput extends RestoreTableFromBackupInput {}
/**
 * @public
 *
 * The output of {@link RestoreTableFromBackupCommand}.
 */
export interface RestoreTableFromBackupCommandOutput extends RestoreTableFromBackupOutput, __MetadataBearer {}

/**
 * @public
 * <p>Creates a new table from an existing backup. Any number of users can execute up to 4
 *             concurrent restores (any type of restore) in a given account. </p>
 *          <p>You can call <code>RestoreTableFromBackup</code> at a maximum rate of 10 times per
 *             second.</p>
 *          <p>You must manually set up the following on the restored table:</p>
 *          <ul>
 *             <li>
 *                <p>Auto scaling policies</p>
 *             </li>
 *             <li>
 *                <p>IAM policies</p>
 *             </li>
 *             <li>
 *                <p>Amazon CloudWatch metrics and alarms</p>
 *             </li>
 *             <li>
 *                <p>Tags</p>
 *             </li>
 *             <li>
 *                <p>Stream settings</p>
 *             </li>
 *             <li>
 *                <p>Time to Live (TTL) settings</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, RestoreTableFromBackupCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, RestoreTableFromBackupCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const input = {
 *   TargetTableName: "STRING_VALUE", // required
 *   BackupArn: "STRING_VALUE", // required
 *   BillingModeOverride: "PROVISIONED" || "PAY_PER_REQUEST",
 *   GlobalSecondaryIndexOverride: [
 *     {
 *       IndexName: "STRING_VALUE", // required
 *       KeySchema: [ // required
 *         {
 *           AttributeName: "STRING_VALUE", // required
 *           KeyType: "HASH" || "RANGE", // required
 *         },
 *       ],
 *       Projection: {
 *         ProjectionType: "ALL" || "KEYS_ONLY" || "INCLUDE",
 *         NonKeyAttributes: [
 *           "STRING_VALUE",
 *         ],
 *       },
 *       ProvisionedThroughput: {
 *         ReadCapacityUnits: Number("long"), // required
 *         WriteCapacityUnits: Number("long"), // required
 *       },
 *     },
 *   ],
 *   LocalSecondaryIndexOverride: [
 *     {
 *       IndexName: "STRING_VALUE", // required
 *       KeySchema: [ // required
 *         {
 *           AttributeName: "STRING_VALUE", // required
 *           KeyType: "HASH" || "RANGE", // required
 *         },
 *       ],
 *       Projection: {
 *         ProjectionType: "ALL" || "KEYS_ONLY" || "INCLUDE",
 *         NonKeyAttributes: [
 *           "STRING_VALUE",
 *         ],
 *       },
 *     },
 *   ],
 *   ProvisionedThroughputOverride: {
 *     ReadCapacityUnits: Number("long"), // required
 *     WriteCapacityUnits: Number("long"), // required
 *   },
 *   SSESpecificationOverride: {
 *     Enabled: true || false,
 *     SSEType: "AES256" || "KMS",
 *     KMSMasterKeyId: "STRING_VALUE",
 *   },
 * };
 * const command = new RestoreTableFromBackupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param RestoreTableFromBackupCommandInput - {@link RestoreTableFromBackupCommandInput}
 * @returns {@link RestoreTableFromBackupCommandOutput}
 * @see {@link RestoreTableFromBackupCommandInput} for command's `input` shape.
 * @see {@link RestoreTableFromBackupCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for DynamoDBClient's `config` shape.
 *
 * @throws {@link BackupInUseException} (client fault)
 *  <p>There is another ongoing conflicting backup control plane operation on the table.
 *             The backup is either being created, deleted or restored to a table.</p>
 *
 * @throws {@link BackupNotFoundException} (client fault)
 *  <p>Backup not found for the given BackupARN. </p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidEndpointException} (client fault)
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>There is no limit to the number of daily on-demand backups that can be taken. </p>
 *          <p>For most purposes, up to 500 simultaneous table operations are allowed per account. These operations
 *             include <code>CreateTable</code>, <code>UpdateTable</code>,
 *                 <code>DeleteTable</code>,<code>UpdateTimeToLive</code>,
 *                 <code>RestoreTableFromBackup</code>, and <code>RestoreTableToPointInTime</code>. </p>
 *          <p>When you are creating a table with one or more secondary
 *             indexes, you can have up to 250 such requests running at a time. However, if the table or
 *             index specifications are complex, then DynamoDB might temporarily reduce the number
 *             of concurrent operations.</p>
 *          <p>When importing into DynamoDB, up to 50 simultaneous import table operations are allowed per account.</p>
 *          <p>There is a soft account quota of 2,500 tables.</p>
 *
 * @throws {@link TableAlreadyExistsException} (client fault)
 *  <p>A target table with the specified name already exists. </p>
 *
 * @throws {@link TableInUseException} (client fault)
 *  <p>A target table with the specified name is either being created or deleted.
 *         </p>
 *
 *
 */
export class RestoreTableFromBackupCommand extends $Command<
  RestoreTableFromBackupCommandInput,
  RestoreTableFromBackupCommandOutput,
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
  constructor(readonly input: RestoreTableFromBackupCommandInput) {
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
  ): Handler<RestoreTableFromBackupCommandInput, RestoreTableFromBackupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RestoreTableFromBackupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DynamoDBClient";
    const commandName = "RestoreTableFromBackupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: RestoreTableFromBackupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0RestoreTableFromBackupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RestoreTableFromBackupCommandOutput> {
    return deserializeAws_json1_0RestoreTableFromBackupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
