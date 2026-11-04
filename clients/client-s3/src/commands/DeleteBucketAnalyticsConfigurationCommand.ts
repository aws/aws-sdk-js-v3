// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep3, _mw4, command } from "../commandBuilder";
import type { DeleteBucketAnalyticsConfigurationRequest } from "../models/models_0";
import { DeleteBucketAnalyticsConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteBucketAnalyticsConfigurationCommand}.
 */
export interface DeleteBucketAnalyticsConfigurationCommandInput extends DeleteBucketAnalyticsConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteBucketAnalyticsConfigurationCommand}.
 */
export interface DeleteBucketAnalyticsConfigurationCommandOutput extends __MetadataBearer {}

/**
 * > **Note:** This operation is not supported for directory buckets.
 *
 * Deletes an analytics configuration for the bucket (specified by the analytics configuration ID).
 *
 * To use this operation, you must have permissions to perform the `s3:PutAnalyticsConfiguration` action. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see [Permissions Related to Bucket Subresource Operations](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources) and [Managing Access Permissions to Your Amazon S3 Resources](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-access-control.html).
 *
 * For information about the Amazon S3 analytics feature, see [Amazon S3 Analytics – Storage Class Analysis](https://docs.aws.amazon.com/AmazonS3/latest/dev/analytics-storage-class.html).
 *
 * The following operations are related to `DeleteBucketAnalyticsConfiguration`:
 *
 * - [GetBucketAnalyticsConfiguration](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketAnalyticsConfiguration.html)
 * - [ListBucketAnalyticsConfigurations](https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListBucketAnalyticsConfigurations.html)
 * - [PutBucketAnalyticsConfiguration](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketAnalyticsConfiguration.html)
 *
 * > **Important:** You must URL encode any signed header values that contain spaces. For example, if your header value is `my file.txt`, containing two spaces after `my`, you must URL encode this value to `my%20%20file.txt`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, DeleteBucketAnalyticsConfigurationCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, DeleteBucketAnalyticsConfigurationCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * // import type { S3ClientConfig } from "@aws-sdk/client-s3";
 * const config = {}; // type is S3ClientConfig
 * const client = new S3Client(config);
 * const input = { // DeleteBucketAnalyticsConfigurationRequest
 *   Bucket: "STRING_VALUE", // required
 *   Id: "STRING_VALUE", // required
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new DeleteBucketAnalyticsConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteBucketAnalyticsConfigurationCommandInput - {@link DeleteBucketAnalyticsConfigurationCommandInput}
 * @returns {@link DeleteBucketAnalyticsConfigurationCommandOutput}
 * @see {@link DeleteBucketAnalyticsConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteBucketAnalyticsConfigurationCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 *
 * Base exception class for all service exceptions from S3 service.
 *
 * @public
 */
export class DeleteBucketAnalyticsConfigurationCommand extends command<DeleteBucketAnalyticsConfigurationCommandInput, DeleteBucketAnalyticsConfigurationCommandOutput>(
  _ep3,
  _mw4,
  "DeleteBucketAnalyticsConfiguration",
  DeleteBucketAnalyticsConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteBucketAnalyticsConfigurationRequest;
      output: {};
    };
    sdk: {
      input: DeleteBucketAnalyticsConfigurationCommandInput;
      output: DeleteBucketAnalyticsConfigurationCommandOutput;
    };
  };
}
