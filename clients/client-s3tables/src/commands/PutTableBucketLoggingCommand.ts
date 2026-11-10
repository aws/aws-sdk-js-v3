// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutTableBucketLoggingRequest } from "../models/models_0";
import { PutTableBucketLogging$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutTableBucketLoggingCommand}.
 */
export interface PutTableBucketLoggingCommandInput extends PutTableBucketLoggingRequest {}
/**
 * @public
 *
 * The output of {@link PutTableBucketLoggingCommand}.
 */
export interface PutTableBucketLoggingCommandOutput extends __MetadataBearer {}

/**
 * <p>Sets, updates, or removes the server access logging configuration for a table bucket. When logging is enabled, Amazon S3 delivers a record of the requests made to the table bucket and its tables to the target general purpose bucket that you specify. To disable logging, call this operation with an empty <code>tableBucketLoggingStatus</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-tables-server-logs.html">Server access logging for table buckets</a> in the <i>Amazon Simple Storage Service User Guide</i>.</p> <dl> <dt>Permissions</dt> <dd> <p>You must have the <code>s3tables:PutTableBucketLogging</code> permission to use this operation.</p> </dd> </dl>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3TablesClient, PutTableBucketLoggingCommand } from "@aws-sdk/client-s3tables"; // ES Modules import
 * // const { S3TablesClient, PutTableBucketLoggingCommand } = require("@aws-sdk/client-s3tables"); // CommonJS import
 * // import type { S3TablesClientConfig } from "@aws-sdk/client-s3tables";
 * const config = {}; // type is S3TablesClientConfig
 * const client = new S3TablesClient(config);
 * const input = { // PutTableBucketLoggingRequest
 *   tableBucketARN: "STRING_VALUE", // required
 *   tableBucketLoggingStatus: { // TableBucketLoggingStatus
 *     loggingEnabled: { // LoggingEnabled
 *       targetBucket: "STRING_VALUE", // required
 *       targetPrefix: "STRING_VALUE", // required
 *       targetObjectKeyFormat: { // TargetObjectKeyFormat
 *         partitionedPrefix: { // PartitionedPrefix
 *           partitionDateSource: "EventTime" || "DeliveryTime", // required
 *         },
 *       },
 *     },
 *   },
 * };
 * const command = new PutTableBucketLoggingCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutTableBucketLoggingCommandInput - {@link PutTableBucketLoggingCommandInput}
 * @returns {@link PutTableBucketLoggingCommandOutput}
 * @see {@link PutTableBucketLoggingCommandInput} for command's `input` shape.
 * @see {@link PutTableBucketLoggingCommandOutput} for command's `response` shape.
 * @see {@link S3TablesClientResolvedConfig | config} for S3TablesClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is invalid or malformed.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request failed because there is a conflict with a previous write. You can retry the request.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The caller isn't authorized to make the request.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>The request failed due to an internal server error.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The request was rejected because the specified resource could not be found.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link S3TablesServiceException}
 * <p>Base exception class for all service exceptions from S3Tables service.</p>
 *
 *
 * @example To enable server access logging for a table bucket
 * ```javascript
 * // The following example enables server access logging for a table bucket. Logs are delivered to the specified general purpose bucket, with object keys partitioned by the time of the logged events.
 * const input = {
 *   tableBucketARN: "arn:aws:s3tables:us-east-1:111122223333:bucket/amzn-s3-demo-table-bucket",
 *   tableBucketLoggingStatus: {
 *     loggingEnabled: {
 *       targetBucket: "amzn-s3-demo-destination-bucket",
 *       targetObjectKeyFormat: {
 *         partitionedPrefix: {
 *           partitionDateSource: "EventTime"
 *         }
 *       },
 *       targetPrefix: "logs/"
 *     }
 *   }
 * };
 * const command = new PutTableBucketLoggingCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @example To disable server access logging for a table bucket
 * ```javascript
 * // The following example disables server access logging for a table bucket by specifying an empty logging status.
 * const input = {
 *   tableBucketARN: "arn:aws:s3tables:us-east-1:111122223333:bucket/amzn-s3-demo-table-bucket",
 *   tableBucketLoggingStatus:   { /* empty *\/ }
 * };
 * const command = new PutTableBucketLoggingCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class PutTableBucketLoggingCommand extends command<PutTableBucketLoggingCommandInput, PutTableBucketLoggingCommandOutput>(
  _ep0,
  _mw0,
  "PutTableBucketLogging",
  PutTableBucketLogging$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutTableBucketLoggingRequest;
      output: {};
    };
    sdk: {
      input: PutTableBucketLoggingCommandInput;
      output: PutTableBucketLoggingCommandOutput;
    };
  };
}
