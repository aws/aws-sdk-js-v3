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
import { CreateTableInput, CreateTableOutput } from "../models/models_0";
import {
  deserializeAws_json1_0CreateTableCommand,
  serializeAws_json1_0CreateTableCommand,
} from "../protocols/Aws_json1_0";

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
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The operation conflicts with the resource's availability. For example, you
 *             attempted to recreate an existing table, or tried to delete a table currently in the
 *                 <code>CREATING</code> state.</p>
 *
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
    return serializeAws_json1_0CreateTableCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateTableCommandOutput> {
    return deserializeAws_json1_0CreateTableCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
