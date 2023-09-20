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
import { CreateTableInput, CreateTableOutput } from "../models/models_0";
import { de_CreateTableCommand, se_CreateTableCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateTableCommand}.
 */
export interface CreateTableCommandInput extends CreateTableInput {}
/**
 * @public
 *
 * The output of {@link CreateTableCommand}.
 */
export interface CreateTableCommandOutput extends CreateTableOutput, __MetadataBearer {}

/**
 * @public
 * <p>The <code>CreateTable</code> operation adds a new table to your account. In an Amazon Web Services account, table names must be unique within each Region. That is, you can
 *             have two tables with same name if you create the tables in different Regions.</p>
 *          <p>
 *             <code>CreateTable</code> is an asynchronous operation. Upon receiving a
 *                 <code>CreateTable</code> request, DynamoDB immediately returns a response with a
 *                 <code>TableStatus</code> of <code>CREATING</code>. After the table is created,
 *             DynamoDB sets the <code>TableStatus</code> to <code>ACTIVE</code>. You can perform read
 *             and write operations only on an <code>ACTIVE</code> table. </p>
 *          <p>You can optionally define secondary indexes on the new table, as part of the
 *                 <code>CreateTable</code> operation. If you want to create multiple tables with
 *             secondary indexes on them, you must create the tables sequentially. Only one table with
 *             secondary indexes can be in the <code>CREATING</code> state at any given time.</p>
 *          <p>You can use the <code>DescribeTable</code> action to check the table status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, CreateTableCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, CreateTableCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const input = { // CreateTableInput
 *   AttributeDefinitions: [ // AttributeDefinitions // required
 *     { // AttributeDefinition
 *       AttributeName: "STRING_VALUE", // required
 *       AttributeType: "S" || "N" || "B", // required
 *     },
 *   ],
 *   TableName: "STRING_VALUE", // required
 *   KeySchema: [ // KeySchema // required
 *     { // KeySchemaElement
 *       AttributeName: "STRING_VALUE", // required
 *       KeyType: "HASH" || "RANGE", // required
 *     },
 *   ],
 *   LocalSecondaryIndexes: [ // LocalSecondaryIndexList
 *     { // LocalSecondaryIndex
 *       IndexName: "STRING_VALUE", // required
 *       KeySchema: [ // required
 *         {
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
 *     },
 *   ],
 *   GlobalSecondaryIndexes: [ // GlobalSecondaryIndexList
 *     { // GlobalSecondaryIndex
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
 *       ProvisionedThroughput: { // ProvisionedThroughput
 *         ReadCapacityUnits: Number("long"), // required
 *         WriteCapacityUnits: Number("long"), // required
 *       },
 *     },
 *   ],
 *   BillingMode: "PROVISIONED" || "PAY_PER_REQUEST",
 *   ProvisionedThroughput: {
 *     ReadCapacityUnits: Number("long"), // required
 *     WriteCapacityUnits: Number("long"), // required
 *   },
 *   StreamSpecification: { // StreamSpecification
 *     StreamEnabled: true || false, // required
 *     StreamViewType: "NEW_IMAGE" || "OLD_IMAGE" || "NEW_AND_OLD_IMAGES" || "KEYS_ONLY",
 *   },
 *   SSESpecification: { // SSESpecification
 *     Enabled: true || false,
 *     SSEType: "AES256" || "KMS",
 *     KMSMasterKeyId: "STRING_VALUE",
 *   },
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   TableClass: "STANDARD" || "STANDARD_INFREQUENT_ACCESS",
 *   DeletionProtectionEnabled: true || false,
 * };
 * const command = new CreateTableCommand(input);
 * const response = await client.send(command);
 * // { // CreateTableOutput
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
 * @param CreateTableCommandInput - {@link CreateTableCommandInput}
 * @returns {@link CreateTableCommandOutput}
 * @see {@link CreateTableCommandInput} for command's `input` shape.
 * @see {@link CreateTableCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for DynamoDBClient's `config` shape.
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
 *          <p>GetRecords was called with a value of more than 1000 for the limit request parameter.</p>
 *          <p>More than 2 processes are reading from the same streams shard at the same time. Exceeding
 *             this limit may result in request throttling.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The operation conflicts with the resource's availability. For example, you
 *             attempted to recreate an existing table, or tried to delete a table currently in the
 *                 <code>CREATING</code> state.</p>
 *
 * @throws {@link DynamoDBServiceException}
 * <p>Base exception class for all service exceptions from DynamoDB service.</p>
 *
 * @example To create a table
 * ```javascript
 * // This example creates a table named Music.
 * const input = {
 *   "AttributeDefinitions": [
 *     {
 *       "AttributeName": "Artist",
 *       "AttributeType": "S"
 *     },
 *     {
 *       "AttributeName": "SongTitle",
 *       "AttributeType": "S"
 *     }
 *   ],
 *   "KeySchema": [
 *     {
 *       "AttributeName": "Artist",
 *       "KeyType": "HASH"
 *     },
 *     {
 *       "AttributeName": "SongTitle",
 *       "KeyType": "RANGE"
 *     }
 *   ],
 *   "ProvisionedThroughput": {
 *     "ReadCapacityUnits": 5,
 *     "WriteCapacityUnits": 5
 *   },
 *   "TableName": "Music"
 * };
 * const command = new CreateTableCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "TableDescription": {
 *     "AttributeDefinitions": [
 *       {
 *         "AttributeName": "Artist",
 *         "AttributeType": "S"
 *       },
 *       {
 *         "AttributeName": "SongTitle",
 *         "AttributeType": "S"
 *       }
 *     ],
 *     "CreationDateTime": "1421866952.062",
 *     "ItemCount": 0,
 *     "KeySchema": [
 *       {
 *         "AttributeName": "Artist",
 *         "KeyType": "HASH"
 *       },
 *       {
 *         "AttributeName": "SongTitle",
 *         "KeyType": "RANGE"
 *       }
 *     ],
 *     "ProvisionedThroughput": {
 *       "ReadCapacityUnits": 5,
 *       "WriteCapacityUnits": 5
 *     },
 *     "TableName": "Music",
 *     "TableSizeBytes": 0,
 *     "TableStatus": "CREATING"
 *   }
 * }
 * *\/
 * // example id: to-create-a-table-1476116291743
 * ```
 *
 */
export class CreateTableCommand extends $Command<
  CreateTableCommandInput,
  CreateTableCommandOutput,
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
  constructor(readonly input: CreateTableCommandInput) {
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
  ): Handler<CreateTableCommandInput, CreateTableCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateTableCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DynamoDBClient";
    const commandName = "CreateTableCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "DynamoDB_20120810",
        operation: "CreateTable",
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
  private serialize(input: CreateTableCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateTableCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateTableCommandOutput> {
    return de_CreateTableCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
