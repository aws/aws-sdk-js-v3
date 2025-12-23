// smithy-typescript generated code
import { getFlexibleChecksumsPlugin } from "@aws-sdk/middleware-flexible-checksums";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { PutBucketAbacRequest } from "../models/models_0";
import type { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { PutBucketAbac$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutBucketAbacCommand}.
 */
export interface PutBucketAbacCommandInput extends PutBucketAbacRequest {}
/**
 * @public
 *
 * The output of {@link PutBucketAbacCommand}.
 */
export interface PutBucketAbacCommandOutput extends __MetadataBearer {}

/**
 * <p>Sets the attribute-based access control (ABAC) property of the general purpose bucket. You must have <code>s3:PutBucketABAC</code> permission to perform this action. When you enable ABAC, you can use tags for access control on your buckets. Additionally, when ABAC is enabled, you must use the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_TagResource.html">TagResource</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_UntagResource.html">UntagResource</a> actions to manage tags on your buckets. You can nolonger use the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketTagging.html">PutBucketTagging</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketTagging.html">DeleteBucketTagging</a> actions to tag your bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/buckets-tagging-enable-abac.html">Enabling ABAC in general purpose buckets</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, PutBucketAbacCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, PutBucketAbacCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * // import type { S3ClientConfig } from "@aws-sdk/client-s3";
 * const config = {}; // type is S3ClientConfig
 * const client = new S3Client(config);
 * const input = { // PutBucketAbacRequest
 *   Bucket: "STRING_VALUE", // required
 *   ContentMD5: "STRING_VALUE",
 *   ChecksumAlgorithm: "CRC32" || "CRC32C" || "SHA1" || "SHA256" || "CRC64NVME",
 *   ExpectedBucketOwner: "STRING_VALUE",
 *   AbacStatus: { // AbacStatus
 *     Status: "Enabled" || "Disabled",
 *   },
 * };
 * const command = new PutBucketAbacCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutBucketAbacCommandInput - {@link PutBucketAbacCommandInput}
 * @returns {@link PutBucketAbacCommandOutput}
 * @see {@link PutBucketAbacCommandInput} for command's `input` shape.
 * @see {@link PutBucketAbacCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 *
 * @public
 */
export class PutBucketAbacCommand extends $Command
  .classBuilder<
    PutBucketAbacCommandInput,
    PutBucketAbacCommandOutput,
    S3ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
    Bucket: { type: "contextParams", name: "Bucket" },
  })
  .m(function (this: any, Command: any, cs: any, config: S3ClientResolvedConfig, o: any) {
    return [
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getFlexibleChecksumsPlugin(config, {
        requestAlgorithmMember: {'httpHeader': 'x-amz-sdk-checksum-algorithm', 'name': 'ChecksumAlgorithm'},
        requestChecksumRequired: false,
      }),
    ];
  })
  .s("AmazonS3", "PutBucketAbac", {})
  .n("S3Client", "PutBucketAbacCommand")
  .sc(PutBucketAbac$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutBucketAbacRequest;
      output: {};
    };
    sdk: {
      input: PutBucketAbacCommandInput;
      output: PutBucketAbacCommandOutput;
    };
  };
}
