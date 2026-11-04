// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep3, _mw4, command } from "../commandBuilder";
import type { DeleteBucketMetadataConfigurationRequest } from "../models/models_0";
import { DeleteBucketMetadataConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteBucketMetadataConfigurationCommand}.
 */
export interface DeleteBucketMetadataConfigurationCommandInput extends DeleteBucketMetadataConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteBucketMetadataConfigurationCommand}.
 */
export interface DeleteBucketMetadataConfigurationCommandOutput extends __MetadataBearer {}

/**
 * Deletes an S3 Metadata configuration from a general purpose bucket. For more information, see [Accelerating data discovery with S3 Metadata](https://docs.aws.amazon.com/AmazonS3/latest/userguide/metadata-tables-overview.html) in the *Amazon S3 User Guide*.
 *
 * > **Note:** You can use the V2 `DeleteBucketMetadataConfiguration` API operation with V1 or V2 metadata configurations. However, if you try to use the V1 `DeleteBucketMetadataTableConfiguration` API operation with V2 configurations, you will receive an HTTP `405 Method Not Allowed` error.
 *
 * - **Permissions**
 *
 *   To use this operation, you must have the `s3:DeleteBucketMetadataTableConfiguration` permission. For more information, see [Setting up permissions for configuring metadata tables](https://docs.aws.amazon.com/AmazonS3/latest/userguide/metadata-tables-permissions.html) in the *Amazon S3 User Guide*.
 *
 *   > **Note:** The IAM policy action name is the same for the V1 and V2 API operations.
 *
 * The following operations are related to `DeleteBucketMetadataConfiguration`:
 *
 * - [CreateBucketMetadataConfiguration](https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucketMetadataConfiguration.html)
 * - [GetBucketMetadataConfiguration](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketMetadataConfiguration.html)
 * - [UpdateBucketMetadataInventoryTableConfiguration](https://docs.aws.amazon.com/AmazonS3/latest/API/API_UpdateBucketMetadataInventoryTableConfiguration.html)
 * - [UpdateBucketMetadataJournalTableConfiguration](https://docs.aws.amazon.com/AmazonS3/latest/API/API_UpdateBucketMetadataJournalTableConfiguration.html)
 *
 * > **Important:** You must URL encode any signed header values that contain spaces. For example, if your header value is `my file.txt`, containing two spaces after `my`, you must URL encode this value to `my%20%20file.txt`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, DeleteBucketMetadataConfigurationCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, DeleteBucketMetadataConfigurationCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * // import type { S3ClientConfig } from "@aws-sdk/client-s3";
 * const config = {}; // type is S3ClientConfig
 * const client = new S3Client(config);
 * const input = { // DeleteBucketMetadataConfigurationRequest
 *   Bucket: "STRING_VALUE", // required
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new DeleteBucketMetadataConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteBucketMetadataConfigurationCommandInput - {@link DeleteBucketMetadataConfigurationCommandInput}
 * @returns {@link DeleteBucketMetadataConfigurationCommandOutput}
 * @see {@link DeleteBucketMetadataConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteBucketMetadataConfigurationCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 *
 * Base exception class for all service exceptions from S3 service.
 *
 * @public
 */
export class DeleteBucketMetadataConfigurationCommand extends command<DeleteBucketMetadataConfigurationCommandInput, DeleteBucketMetadataConfigurationCommandOutput>(
  _ep3,
  _mw4,
  "DeleteBucketMetadataConfiguration",
  DeleteBucketMetadataConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteBucketMetadataConfigurationRequest;
      output: {};
    };
    sdk: {
      input: DeleteBucketMetadataConfigurationCommandInput;
      output: DeleteBucketMetadataConfigurationCommandOutput;
    };
  };
}
