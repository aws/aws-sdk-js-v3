// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep3, _mw9, command } from "../commandBuilder";
import type { PutBucketAccelerateConfigurationRequest } from "../models/models_0";
import { PutBucketAccelerateConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutBucketAccelerateConfigurationCommand}.
 */
export interface PutBucketAccelerateConfigurationCommandInput extends PutBucketAccelerateConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link PutBucketAccelerateConfigurationCommand}.
 */
export interface PutBucketAccelerateConfigurationCommandOutput extends __MetadataBearer {}

/**
 * > **Note:** This operation is not supported for directory buckets.
 *
 * Sets the accelerate configuration of an existing bucket. Amazon S3 Transfer Acceleration is a bucket-level feature that enables you to perform faster data transfers to Amazon S3.
 *
 * To use this operation, you must have permission to perform the `s3:PutAccelerateConfiguration` action. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see [Permissions Related to Bucket Subresource Operations](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources) and [Managing Access Permissions to Your Amazon S3 Resources](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-access-control.html).
 *
 * The Transfer Acceleration state of a bucket can be set to one of the following two values:
 *
 * - Enabled – Enables accelerated data transfers to the bucket.
 * - Suspended – Disables accelerated data transfers to the bucket.
 *
 * The [GetBucketAccelerateConfiguration](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketAccelerateConfiguration.html) action returns the transfer acceleration state of a bucket.
 *
 * After setting the Transfer Acceleration state of a bucket to Enabled, it might take up to thirty minutes before the data transfer rates to the bucket increase.
 *
 * The name of the bucket used for Transfer Acceleration must be DNS-compliant and must not contain periods (".").
 *
 * For more information about transfer acceleration, see [Transfer Acceleration](https://docs.aws.amazon.com/AmazonS3/latest/dev/transfer-acceleration.html).
 *
 * The following operations are related to `PutBucketAccelerateConfiguration`:
 *
 * - [GetBucketAccelerateConfiguration](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketAccelerateConfiguration.html)
 * - [CreateBucket](https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html)
 *
 * > **Important:** You must URL encode any signed header values that contain spaces. For example, if your header value is `my file.txt`, containing two spaces after `my`, you must URL encode this value to `my%20%20file.txt`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, PutBucketAccelerateConfigurationCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, PutBucketAccelerateConfigurationCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * // import type { S3ClientConfig } from "@aws-sdk/client-s3";
 * const config = {}; // type is S3ClientConfig
 * const client = new S3Client(config);
 * const input = { // PutBucketAccelerateConfigurationRequest
 *   Bucket: "STRING_VALUE", // required
 *   AccelerateConfiguration: { // AccelerateConfiguration
 *     Status: "Enabled" || "Suspended",
 *   },
 *   ExpectedBucketOwner: "STRING_VALUE",
 *   ChecksumAlgorithm: "CRC32" || "CRC32C" || "SHA1" || "SHA256" || "CRC64NVME" || "SHA512" || "MD5" || "XXHASH64" || "XXHASH3" || "XXHASH128",
 * };
 * const command = new PutBucketAccelerateConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutBucketAccelerateConfigurationCommandInput - {@link PutBucketAccelerateConfigurationCommandInput}
 * @returns {@link PutBucketAccelerateConfigurationCommandOutput}
 * @see {@link PutBucketAccelerateConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutBucketAccelerateConfigurationCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 *
 * Base exception class for all service exceptions from S3 service.
 *
 * @public
 */
export class PutBucketAccelerateConfigurationCommand extends command<PutBucketAccelerateConfigurationCommandInput, PutBucketAccelerateConfigurationCommandOutput>(
  _ep3,
  _mw9,
  "PutBucketAccelerateConfiguration",
  PutBucketAccelerateConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutBucketAccelerateConfigurationRequest;
      output: {};
    };
    sdk: {
      input: PutBucketAccelerateConfigurationCommandInput;
      output: PutBucketAccelerateConfigurationCommandOutput;
    };
  };
}
