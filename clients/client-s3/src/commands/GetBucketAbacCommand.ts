// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep5, _mw0, command } from "../commandBuilder";
import type { GetBucketAbacOutput, GetBucketAbacRequest } from "../models/models_0";
import { GetBucketAbac$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetBucketAbacCommand}.
 */
export interface GetBucketAbacCommandInput extends GetBucketAbacRequest {}
/**
 * @public
 *
 * The output of {@link GetBucketAbacCommand}.
 */
export interface GetBucketAbacCommandOutput extends GetBucketAbacOutput, __MetadataBearer {}

/**
 * <p>Returns the attribute-based access control (ABAC) property of the general purpose bucket. If ABAC is enabled on your bucket, you can use tags on the bucket for access control. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/buckets-tagging-enable-abac.html">Enabling ABAC in general purpose buckets</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, GetBucketAbacCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, GetBucketAbacCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * // import type { S3ClientConfig } from "@aws-sdk/client-s3";
 * const config = {}; // type is S3ClientConfig
 * const client = new S3Client(config);
 * const input = { // GetBucketAbacRequest
 *   Bucket: "STRING_VALUE", // required
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new GetBucketAbacCommand(input);
 * const response = await client.send(command);
 * // { // GetBucketAbacOutput
 * //   AbacStatus: { // AbacStatus
 * //     Status: "Enabled" || "Disabled",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetBucketAbacCommandInput - {@link GetBucketAbacCommandInput}
 * @returns {@link GetBucketAbacCommandOutput}
 * @see {@link GetBucketAbacCommandInput} for command's `input` shape.
 * @see {@link GetBucketAbacCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 *
 * @public
 */
export class GetBucketAbacCommand extends command<GetBucketAbacCommandInput, GetBucketAbacCommandOutput>(
  _ep5,
  _mw0,
  "GetBucketAbac",
  GetBucketAbac$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBucketAbacRequest;
      output: GetBucketAbacOutput;
    };
    sdk: {
      input: GetBucketAbacCommandInput;
      output: GetBucketAbacCommandOutput;
    };
  };
}
