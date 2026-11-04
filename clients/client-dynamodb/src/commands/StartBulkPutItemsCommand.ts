// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep3, _mw0, command } from "../commandBuilder";
import type { StartBulkPutItemsInput, StartBulkPutItemsOutput } from "../models/models_0";
import { StartBulkPutItems$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartBulkPutItemsCommand}.
 */
export interface StartBulkPutItemsCommandInput extends StartBulkPutItemsInput {}
/**
 * @public
 *
 * The output of {@link StartBulkPutItemsCommand}.
 */
export interface StartBulkPutItemsCommandOutput extends StartBulkPutItemsOutput, __MetadataBearer {}

/**
 * <p>Starts an asynchronous bulk operation that reads items from Amazon S3 and
 *             writes them to an existing DynamoDB table, so you can efficiently load or
 *             migrate large datasets.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, StartBulkPutItemsCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, StartBulkPutItemsCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * // import type { DynamoDBClientConfig } from "@aws-sdk/client-dynamodb";
 * const config = {}; // type is DynamoDBClientConfig
 * const client = new DynamoDBClient(config);
 * const input = { // StartBulkPutItemsInput
 *   ClientToken: "STRING_VALUE",
 *   InputS3Configuration: { // InputS3Configuration
 *     S3BucketOwner: "STRING_VALUE",
 *     S3Bucket: "STRING_VALUE", // required
 *     S3KeyPrefix: "STRING_VALUE",
 *     InputFormat: "DYNAMODB_JSON" || "ION", // required
 *     InputCompressionType: "GZIP" || "ZSTD" || "NONE",
 *   },
 *   OutputS3Configuration: { // OutputS3Configuration
 *     S3BucketOwner: "STRING_VALUE",
 *     S3Bucket: "STRING_VALUE",
 *     S3KeyPrefix: "STRING_VALUE",
 *     S3SseAlgorithm: "AES256" || "KMS",
 *     S3SseKmsKeyId: "STRING_VALUE",
 *     OutputType: [ // OutputTypeList // required
 *       "ERROR" || "CONDITION_CHECK_FAILURE",
 *     ],
 *   },
 *   TableName: "STRING_VALUE", // required
 *   MaxWriteRequestUnits: Number("long"),
 *   PerformanceTier: "STANDARD" || "ACCELERATED",
 * };
 * const command = new StartBulkPutItemsCommand(input);
 * const response = await client.send(command);
 * // { // StartBulkPutItemsOutput
 * //   BulkOperationDescription: { // BulkOperationDescription
 * //     BulkOperationArn: "STRING_VALUE",
 * //     BulkOperationStatus: "IN_PROGRESS" || "COMPLETED" || "COMPLETED_WITH_ERRORS" || "CANCELLING" || "CANCELLED" || "FAILED",
 * //     TableDetails: [ // BulkOperationTableDetails
 * //       { // BulkOperationTableDetail
 * //         TableName: "STRING_VALUE",
 * //         TableId: "STRING_VALUE",
 * //       },
 * //     ],
 * //     ClientToken: "STRING_VALUE",
 * //     InputS3Configuration: { // InputS3Configuration
 * //       S3BucketOwner: "STRING_VALUE",
 * //       S3Bucket: "STRING_VALUE", // required
 * //       S3KeyPrefix: "STRING_VALUE",
 * //       InputFormat: "DYNAMODB_JSON" || "ION", // required
 * //       InputCompressionType: "GZIP" || "ZSTD" || "NONE",
 * //     },
 * //     OutputS3Configuration: { // OutputS3Configuration
 * //       S3BucketOwner: "STRING_VALUE",
 * //       S3Bucket: "STRING_VALUE",
 * //       S3KeyPrefix: "STRING_VALUE",
 * //       S3SseAlgorithm: "AES256" || "KMS",
 * //       S3SseKmsKeyId: "STRING_VALUE",
 * //       OutputType: [ // OutputTypeList // required
 * //         "ERROR" || "CONDITION_CHECK_FAILURE",
 * //       ],
 * //     },
 * //     StartTime: new Date("TIMESTAMP"),
 * //     EndTime: new Date("TIMESTAMP"),
 * //     ProcessedItemCount: Number("long"),
 * //     ProcessedInputBytes: Number("long"),
 * //     TotalInputBytes: Number("long"),
 * //     BulkOperationUsage: [ // BulkOperationUsageMultiple
 * //       { // BulkOperationUsage
 * //         TableName: "STRING_VALUE",
 * //         BulkPutBytes: Number("long"),
 * //         Table: { // BulkOperationBytes
 * //           BulkPutBytes: Number("long"),
 * //         },
 * //         LocalSecondaryIndexes: { // SecondaryIndexesBulkBytesMap
 * //           "<keys>": {
 * //             BulkPutBytes: Number("long"),
 * //           },
 * //         },
 * //         GlobalSecondaryIndexes: {
 * //           "<keys>": {
 * //             BulkPutBytes: Number("long"),
 * //           },
 * //         },
 * //         VectorIndexes: { // VectorIndexesBulkVectorBytesMap
 * //           "<keys>": { // BulkOperationVectorBytes
 * //             BulkPutVectorBytes: Number("long"),
 * //           },
 * //         },
 * //       },
 * //     ],
 * //     FailedItemCount: Number("long"),
 * //     FailureCode: "STRING_VALUE",
 * //     FailureMessage: "STRING_VALUE",
 * //     MaxWriteRequestUnits: Number("long"),
 * //     PerformanceTier: "STANDARD" || "ACCELERATED",
 * //   },
 * // };
 *
 * ```
 *
 * @param StartBulkPutItemsCommandInput - {@link StartBulkPutItemsCommandInput}
 * @returns {@link StartBulkPutItemsCommandOutput}
 * @see {@link StartBulkPutItemsCommandInput} for command's `input` shape.
 * @see {@link StartBulkPutItemsCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for DynamoDBClient's `config` shape.
 *
 * @throws {@link IdempotentParameterMismatchException} (client fault)
 *  <p>DynamoDB rejected the request because you retried a request with a
 *             different payload but with an idempotent token that was already used.</p>
 *
 * @throws {@link InvalidEndpointException} (client fault)
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>There is no limit to the number of daily on-demand backups that can be taken. </p>
 *          <p>For most purposes, up to 500 simultaneous table operations are allowed per account.
 *             These operations include <code>CreateTable</code>, <code>UpdateTable</code>,
 *                 <code>DeleteTable</code>,<code>UpdateTimeToLive</code>,
 *                 <code>RestoreTableFromBackup</code>, and <code>RestoreTableToPointInTime</code>. </p>
 *          <p>When you are creating a table with one or more secondary indexes, you can have up
 *             to 250 such requests running at a time. However, if the table or index specifications
 *             are complex, then DynamoDB might temporarily reduce the number of concurrent
 *             operations.</p>
 *          <p>When importing into DynamoDB, up to 50 simultaneous import table operations are
 *             allowed per account.</p>
 *          <p>There is a soft account quota of 2,500 tables.</p>
 *          <p>GetRecords was called with a value of more than 1000 for the limit request
 *             parameter.</p>
 *          <p>More than 2 processes are reading from the same streams shard at the same time.
 *             Exceeding this limit may result in request throttling.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The operation conflicts with the resource's availability. For example:</p>
 *          <ul>
 *             <li>
 *                <p>You attempted to recreate an existing table.</p>
 *             </li>
 *             <li>
 *                <p>You tried to delete a table currently in the <code>CREATING</code>
 *                     state.</p>
 *             </li>
 *             <li>
 *                <p>You tried to update a resource that was already being updated.</p>
 *             </li>
 *          </ul>
 *          <p>When appropriate, wait for the ongoing update to complete and attempt the request
 *             again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The operation tried to access a nonexistent table or index. The resource might not
 *             be specified correctly, or its status might not be <code>ACTIVE</code>.</p>
 *
 * @throws {@link DynamoDBServiceException}
 * <p>Base exception class for all service exceptions from DynamoDB service.</p>
 *
 *
 * @public
 */
export class StartBulkPutItemsCommand extends command<StartBulkPutItemsCommandInput, StartBulkPutItemsCommandOutput>(
  _ep3,
  _mw0,
  "StartBulkPutItems",
  StartBulkPutItems$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartBulkPutItemsInput;
      output: StartBulkPutItemsOutput;
    };
    sdk: {
      input: StartBulkPutItemsCommandInput;
      output: StartBulkPutItemsCommandOutput;
    };
  };
}
