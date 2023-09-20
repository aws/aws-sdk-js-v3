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
import { ImportTableInput, ImportTableOutput } from "../models/models_0";
import { de_ImportTableCommand, se_ImportTableCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ImportTableCommand}.
 */
export interface ImportTableCommandInput extends ImportTableInput {}
/**
 * @public
 *
 * The output of {@link ImportTableCommand}.
 */
export interface ImportTableCommandOutput extends ImportTableOutput, __MetadataBearer {}

/**
 * @public
 * <p> Imports table data from an S3 bucket. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, ImportTableCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, ImportTableCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const input = { // ImportTableInput
 *   ClientToken: "STRING_VALUE",
 *   S3BucketSource: { // S3BucketSource
 *     S3BucketOwner: "STRING_VALUE",
 *     S3Bucket: "STRING_VALUE", // required
 *     S3KeyPrefix: "STRING_VALUE",
 *   },
 *   InputFormat: "DYNAMODB_JSON" || "ION" || "CSV", // required
 *   InputFormatOptions: { // InputFormatOptions
 *     Csv: { // CsvOptions
 *       Delimiter: "STRING_VALUE",
 *       HeaderList: [ // CsvHeaderList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 *   InputCompressionType: "GZIP" || "ZSTD" || "NONE",
 *   TableCreationParameters: { // TableCreationParameters
 *     TableName: "STRING_VALUE", // required
 *     AttributeDefinitions: [ // AttributeDefinitions // required
 *       { // AttributeDefinition
 *         AttributeName: "STRING_VALUE", // required
 *         AttributeType: "S" || "N" || "B", // required
 *       },
 *     ],
 *     KeySchema: [ // KeySchema // required
 *       { // KeySchemaElement
 *         AttributeName: "STRING_VALUE", // required
 *         KeyType: "HASH" || "RANGE", // required
 *       },
 *     ],
 *     BillingMode: "PROVISIONED" || "PAY_PER_REQUEST",
 *     ProvisionedThroughput: { // ProvisionedThroughput
 *       ReadCapacityUnits: Number("long"), // required
 *       WriteCapacityUnits: Number("long"), // required
 *     },
 *     SSESpecification: { // SSESpecification
 *       Enabled: true || false,
 *       SSEType: "AES256" || "KMS",
 *       KMSMasterKeyId: "STRING_VALUE",
 *     },
 *     GlobalSecondaryIndexes: [ // GlobalSecondaryIndexList
 *       { // GlobalSecondaryIndex
 *         IndexName: "STRING_VALUE", // required
 *         KeySchema: [ // required
 *           {
 *             AttributeName: "STRING_VALUE", // required
 *             KeyType: "HASH" || "RANGE", // required
 *           },
 *         ],
 *         Projection: { // Projection
 *           ProjectionType: "ALL" || "KEYS_ONLY" || "INCLUDE",
 *           NonKeyAttributes: [ // NonKeyAttributeNameList
 *             "STRING_VALUE",
 *           ],
 *         },
 *         ProvisionedThroughput: {
 *           ReadCapacityUnits: Number("long"), // required
 *           WriteCapacityUnits: Number("long"), // required
 *         },
 *       },
 *     ],
 *   },
 * };
 * const command = new ImportTableCommand(input);
 * const response = await client.send(command);
 * // { // ImportTableOutput
 * //   ImportTableDescription: { // ImportTableDescription
 * //     ImportArn: "STRING_VALUE",
 * //     ImportStatus: "IN_PROGRESS" || "COMPLETED" || "CANCELLING" || "CANCELLED" || "FAILED",
 * //     TableArn: "STRING_VALUE",
 * //     TableId: "STRING_VALUE",
 * //     ClientToken: "STRING_VALUE",
 * //     S3BucketSource: { // S3BucketSource
 * //       S3BucketOwner: "STRING_VALUE",
 * //       S3Bucket: "STRING_VALUE", // required
 * //       S3KeyPrefix: "STRING_VALUE",
 * //     },
 * //     ErrorCount: Number("long"),
 * //     CloudWatchLogGroupArn: "STRING_VALUE",
 * //     InputFormat: "DYNAMODB_JSON" || "ION" || "CSV",
 * //     InputFormatOptions: { // InputFormatOptions
 * //       Csv: { // CsvOptions
 * //         Delimiter: "STRING_VALUE",
 * //         HeaderList: [ // CsvHeaderList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //     InputCompressionType: "GZIP" || "ZSTD" || "NONE",
 * //     TableCreationParameters: { // TableCreationParameters
 * //       TableName: "STRING_VALUE", // required
 * //       AttributeDefinitions: [ // AttributeDefinitions // required
 * //         { // AttributeDefinition
 * //           AttributeName: "STRING_VALUE", // required
 * //           AttributeType: "S" || "N" || "B", // required
 * //         },
 * //       ],
 * //       KeySchema: [ // KeySchema // required
 * //         { // KeySchemaElement
 * //           AttributeName: "STRING_VALUE", // required
 * //           KeyType: "HASH" || "RANGE", // required
 * //         },
 * //       ],
 * //       BillingMode: "PROVISIONED" || "PAY_PER_REQUEST",
 * //       ProvisionedThroughput: { // ProvisionedThroughput
 * //         ReadCapacityUnits: Number("long"), // required
 * //         WriteCapacityUnits: Number("long"), // required
 * //       },
 * //       SSESpecification: { // SSESpecification
 * //         Enabled: true || false,
 * //         SSEType: "AES256" || "KMS",
 * //         KMSMasterKeyId: "STRING_VALUE",
 * //       },
 * //       GlobalSecondaryIndexes: [ // GlobalSecondaryIndexList
 * //         { // GlobalSecondaryIndex
 * //           IndexName: "STRING_VALUE", // required
 * //           KeySchema: [ // required
 * //             {
 * //               AttributeName: "STRING_VALUE", // required
 * //               KeyType: "HASH" || "RANGE", // required
 * //             },
 * //           ],
 * //           Projection: { // Projection
 * //             ProjectionType: "ALL" || "KEYS_ONLY" || "INCLUDE",
 * //             NonKeyAttributes: [ // NonKeyAttributeNameList
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //           ProvisionedThroughput: {
 * //             ReadCapacityUnits: Number("long"), // required
 * //             WriteCapacityUnits: Number("long"), // required
 * //           },
 * //         },
 * //       ],
 * //     },
 * //     StartTime: new Date("TIMESTAMP"),
 * //     EndTime: new Date("TIMESTAMP"),
 * //     ProcessedSizeBytes: Number("long"),
 * //     ProcessedItemCount: Number("long"),
 * //     ImportedItemCount: Number("long"),
 * //     FailureCode: "STRING_VALUE",
 * //     FailureMessage: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param ImportTableCommandInput - {@link ImportTableCommandInput}
 * @returns {@link ImportTableCommandOutput}
 * @see {@link ImportTableCommandInput} for command's `input` shape.
 * @see {@link ImportTableCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for DynamoDBClient's `config` shape.
 *
 * @throws {@link ImportConflictException} (client fault)
 *  <p>
 *             There was a conflict when importing from the specified S3 source.
 *             This can occur when the current import conflicts with a previous import request
 *             that had the same client token.
 *             </p>
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
 */
export class ImportTableCommand extends $Command<
  ImportTableCommandInput,
  ImportTableCommandOutput,
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
  constructor(readonly input: ImportTableCommandInput) {
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
  ): Handler<ImportTableCommandInput, ImportTableCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ImportTableCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DynamoDBClient";
    const commandName = "ImportTableCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "DynamoDB_20120810",
        operation: "ImportTable",
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
  private serialize(input: ImportTableCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ImportTableCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ImportTableCommandOutput> {
    return de_ImportTableCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
