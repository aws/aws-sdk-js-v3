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
import { RestoreTableToPointInTimeInput, RestoreTableToPointInTimeOutput } from "../models/models_0";
import { de_RestoreTableToPointInTimeCommand, se_RestoreTableToPointInTimeCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link RestoreTableToPointInTimeCommand}.
 */
export interface RestoreTableToPointInTimeCommandInput extends RestoreTableToPointInTimeInput {}
/**
 * @public
 *
 * The output of {@link RestoreTableToPointInTimeCommand}.
 */
export interface RestoreTableToPointInTimeCommandOutput extends RestoreTableToPointInTimeOutput, __MetadataBearer {}

/**
 * @public
 * <p>Restores the specified table to the specified point in time within
 *                 <code>EarliestRestorableDateTime</code> and <code>LatestRestorableDateTime</code>.
 *             You can restore your table to any point in time during the last 35 days. Any number of
 *             users can execute up to 4 concurrent restores (any type of restore) in a given account. </p>
 *          <p> When you restore using point in time recovery, DynamoDB restores your table data to
 *             the state based on the selected date and time (day:hour:minute:second) to a new table. </p>
 *          <p> Along with data, the following are also included on the new restored table using
 *             point in time recovery: </p>
 *          <ul>
 *             <li>
 *                <p>Global secondary indexes (GSIs)</p>
 *             </li>
 *             <li>
 *                <p>Local secondary indexes (LSIs)</p>
 *             </li>
 *             <li>
 *                <p>Provisioned read and write capacity</p>
 *             </li>
 *             <li>
 *                <p>Encryption settings</p>
 *                <important>
 *                   <p> All these settings come from the current settings of the source table at
 *                         the time of restore. </p>
 *                </important>
 *             </li>
 *          </ul>
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
 *             <li>
 *                <p>Point in time recovery settings</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, RestoreTableToPointInTimeCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, RestoreTableToPointInTimeCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const input = { // RestoreTableToPointInTimeInput
 *   SourceTableArn: "STRING_VALUE",
 *   SourceTableName: "STRING_VALUE",
 *   TargetTableName: "STRING_VALUE", // required
 *   UseLatestRestorableTime: true || false,
 *   RestoreDateTime: new Date("TIMESTAMP"),
 *   BillingModeOverride: "PROVISIONED" || "PAY_PER_REQUEST",
 *   GlobalSecondaryIndexOverride: [ // GlobalSecondaryIndexList
 *     { // GlobalSecondaryIndex
 *       IndexName: "STRING_VALUE", // required
 *       KeySchema: [ // KeySchema // required
 *         { // KeySchemaElement
 *           AttributeName: "STRING_VALUE", // required
 *           KeyType: "HASH" || "RANGE", // required
 *         },
 *       ],
 *       Projection: { // Projection
 *         ProjectionType: "ALL" || "KEYS_ONLY" || "INCLUDE",
 *         NonKeyAttributes: [ // NonKeyAttributeNameList
 *           "STRING_VALUE",
 *         ],
 *       },
 *       ProvisionedThroughput: { // ProvisionedThroughput
 *         ReadCapacityUnits: Number("long"), // required
 *         WriteCapacityUnits: Number("long"), // required
 *       },
 *     },
 *   ],
 *   LocalSecondaryIndexOverride: [ // LocalSecondaryIndexList
 *     { // LocalSecondaryIndex
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
 *   SSESpecificationOverride: { // SSESpecification
 *     Enabled: true || false,
 *     SSEType: "AES256" || "KMS",
 *     KMSMasterKeyId: "STRING_VALUE",
 *   },
 * };
 * const command = new RestoreTableToPointInTimeCommand(input);
 * const response = await client.send(command);
 * // { // RestoreTableToPointInTimeOutput
 * //   TableDescription: { // TableDescription
 * //     AttributeDefinitions: [ // AttributeDefinitions
 * //       { // AttributeDefinition
 * //         AttributeName: "STRING_VALUE", // required
 * //         AttributeType: "S" || "N" || "B", // required
 * //       },
 * //     ],
 * //     TableName: "STRING_VALUE",
 * //     KeySchema: [ // KeySchema
 * //       { // KeySchemaElement
 * //         AttributeName: "STRING_VALUE", // required
 * //         KeyType: "HASH" || "RANGE", // required
 * //       },
 * //     ],
 * //     TableStatus: "CREATING" || "UPDATING" || "DELETING" || "ACTIVE" || "INACCESSIBLE_ENCRYPTION_CREDENTIALS" || "ARCHIVING" || "ARCHIVED",
 * //     CreationDateTime: new Date("TIMESTAMP"),
 * //     ProvisionedThroughput: { // ProvisionedThroughputDescription
 * //       LastIncreaseDateTime: new Date("TIMESTAMP"),
 * //       LastDecreaseDateTime: new Date("TIMESTAMP"),
 * //       NumberOfDecreasesToday: Number("long"),
 * //       ReadCapacityUnits: Number("long"),
 * //       WriteCapacityUnits: Number("long"),
 * //     },
 * //     TableSizeBytes: Number("long"),
 * //     ItemCount: Number("long"),
 * //     TableArn: "STRING_VALUE",
 * //     TableId: "STRING_VALUE",
 * //     BillingModeSummary: { // BillingModeSummary
 * //       BillingMode: "PROVISIONED" || "PAY_PER_REQUEST",
 * //       LastUpdateToPayPerRequestDateTime: new Date("TIMESTAMP"),
 * //     },
 * //     LocalSecondaryIndexes: [ // LocalSecondaryIndexDescriptionList
 * //       { // LocalSecondaryIndexDescription
 * //         IndexName: "STRING_VALUE",
 * //         KeySchema: [
 * //           {
 * //             AttributeName: "STRING_VALUE", // required
 * //             KeyType: "HASH" || "RANGE", // required
 * //           },
 * //         ],
 * //         Projection: { // Projection
 * //           ProjectionType: "ALL" || "KEYS_ONLY" || "INCLUDE",
 * //           NonKeyAttributes: [ // NonKeyAttributeNameList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         IndexSizeBytes: Number("long"),
 * //         ItemCount: Number("long"),
 * //         IndexArn: "STRING_VALUE",
 * //       },
 * //     ],
 * //     GlobalSecondaryIndexes: [ // GlobalSecondaryIndexDescriptionList
 * //       { // GlobalSecondaryIndexDescription
 * //         IndexName: "STRING_VALUE",
 * //         KeySchema: [
 * //           {
 * //             AttributeName: "STRING_VALUE", // required
 * //             KeyType: "HASH" || "RANGE", // required
 * //           },
 * //         ],
 * //         Projection: {
 * //           ProjectionType: "ALL" || "KEYS_ONLY" || "INCLUDE",
 * //           NonKeyAttributes: [
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         IndexStatus: "CREATING" || "UPDATING" || "DELETING" || "ACTIVE",
 * //         Backfilling: true || false,
 * //         ProvisionedThroughput: {
 * //           LastIncreaseDateTime: new Date("TIMESTAMP"),
 * //           LastDecreaseDateTime: new Date("TIMESTAMP"),
 * //           NumberOfDecreasesToday: Number("long"),
 * //           ReadCapacityUnits: Number("long"),
 * //           WriteCapacityUnits: Number("long"),
 * //         },
 * //         IndexSizeBytes: Number("long"),
 * //         ItemCount: Number("long"),
 * //         IndexArn: "STRING_VALUE",
 * //       },
 * //     ],
 * //     StreamSpecification: { // StreamSpecification
 * //       StreamEnabled: true || false, // required
 * //       StreamViewType: "NEW_IMAGE" || "OLD_IMAGE" || "NEW_AND_OLD_IMAGES" || "KEYS_ONLY",
 * //     },
 * //     LatestStreamLabel: "STRING_VALUE",
 * //     LatestStreamArn: "STRING_VALUE",
 * //     GlobalTableVersion: "STRING_VALUE",
 * //     Replicas: [ // ReplicaDescriptionList
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
 * //     RestoreSummary: { // RestoreSummary
 * //       SourceBackupArn: "STRING_VALUE",
 * //       SourceTableArn: "STRING_VALUE",
 * //       RestoreDateTime: new Date("TIMESTAMP"), // required
 * //       RestoreInProgress: true || false, // required
 * //     },
 * //     SSEDescription: { // SSEDescription
 * //       Status: "ENABLING" || "ENABLED" || "DISABLING" || "DISABLED" || "UPDATING",
 * //       SSEType: "AES256" || "KMS",
 * //       KMSMasterKeyArn: "STRING_VALUE",
 * //       InaccessibleEncryptionDateTime: new Date("TIMESTAMP"),
 * //     },
 * //     ArchivalSummary: { // ArchivalSummary
 * //       ArchivalDateTime: new Date("TIMESTAMP"),
 * //       ArchivalReason: "STRING_VALUE",
 * //       ArchivalBackupArn: "STRING_VALUE",
 * //     },
 * //     TableClassSummary: {
 * //       TableClass: "STANDARD" || "STANDARD_INFREQUENT_ACCESS",
 * //       LastUpdateDateTime: new Date("TIMESTAMP"),
 * //     },
 * //     DeletionProtectionEnabled: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param RestoreTableToPointInTimeCommandInput - {@link RestoreTableToPointInTimeCommandInput}
 * @returns {@link RestoreTableToPointInTimeCommandOutput}
 * @see {@link RestoreTableToPointInTimeCommandInput} for command's `input` shape.
 * @see {@link RestoreTableToPointInTimeCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for DynamoDBClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidEndpointException} (client fault)
 *
 * @throws {@link InvalidRestoreTimeException} (client fault)
 *  <p>An invalid restore time was specified. RestoreDateTime must be between
 *             EarliestRestorableDateTime and LatestRestorableDateTime.</p>
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
 *          <p>GetRecords was called with a value of more than 1000 for the limit request parameter.</p>
 *          <p>More than 2 processes are reading from the same streams shard at the same time. Exceeding
 *             this limit may result in request throttling.</p>
 *
 * @throws {@link PointInTimeRecoveryUnavailableException} (client fault)
 *  <p>Point in time recovery has not yet been enabled for this source table.</p>
 *
 * @throws {@link TableAlreadyExistsException} (client fault)
 *  <p>A target table with the specified name already exists. </p>
 *
 * @throws {@link TableInUseException} (client fault)
 *  <p>A target table with the specified name is either being created or deleted.
 *         </p>
 *
 * @throws {@link TableNotFoundException} (client fault)
 *  <p>A source table with the name <code>TableName</code> does not currently exist within
 *             the subscriber's account or the subscriber is operating in the wrong Amazon Web Services Region.</p>
 *
 * @throws {@link DynamoDBServiceException}
 * <p>Base exception class for all service exceptions from DynamoDB service.</p>
 *
 */
export class RestoreTableToPointInTimeCommand extends $Command<
  RestoreTableToPointInTimeCommandInput,
  RestoreTableToPointInTimeCommandOutput,
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
  constructor(readonly input: RestoreTableToPointInTimeCommandInput) {
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
  ): Handler<RestoreTableToPointInTimeCommandInput, RestoreTableToPointInTimeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RestoreTableToPointInTimeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DynamoDBClient";
    const commandName = "RestoreTableToPointInTimeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "DynamoDB_20120810",
        operation: "RestoreTableToPointInTime",
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
  private serialize(input: RestoreTableToPointInTimeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_RestoreTableToPointInTimeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RestoreTableToPointInTimeCommandOutput> {
    return de_RestoreTableToPointInTimeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
