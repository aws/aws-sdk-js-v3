// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep2, _mw0, command } from "../commandBuilder";
import type { DescribeBulkOperationInput, DescribeBulkOperationOutput } from "../models/models_0";
import { DescribeBulkOperation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeBulkOperationCommand}.
 */
export interface DescribeBulkOperationCommandInput extends DescribeBulkOperationInput {}
/**
 * @public
 *
 * The output of {@link DescribeBulkOperationCommand}.
 */
export interface DescribeBulkOperationCommandOutput extends DescribeBulkOperationOutput, __MetadataBearer {}

/**
 * <p>Describes the specified bulk operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, DescribeBulkOperationCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, DescribeBulkOperationCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * // import type { DynamoDBClientConfig } from "@aws-sdk/client-dynamodb";
 * const config = {}; // type is DynamoDBClientConfig
 * const client = new DynamoDBClient(config);
 * const input = { // DescribeBulkOperationInput
 *   BulkOperationArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeBulkOperationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeBulkOperationOutput
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
 * @param DescribeBulkOperationCommandInput - {@link DescribeBulkOperationCommandInput}
 * @returns {@link DescribeBulkOperationCommandOutput}
 * @see {@link DescribeBulkOperationCommandInput} for command's `input` shape.
 * @see {@link DescribeBulkOperationCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for DynamoDBClient's `config` shape.
 *
 * @throws {@link InvalidEndpointException} (client fault)
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
export class DescribeBulkOperationCommand extends command<DescribeBulkOperationCommandInput, DescribeBulkOperationCommandOutput>(
  _ep2,
  _mw0,
  "DescribeBulkOperation",
  DescribeBulkOperation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeBulkOperationInput;
      output: DescribeBulkOperationOutput;
    };
    sdk: {
      input: DescribeBulkOperationCommandInput;
      output: DescribeBulkOperationCommandOutput;
    };
  };
}
