// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep3, _mw4, command } from "../commandBuilder";
import type { DeleteBucketMetadataTableConfigurationRequest } from "../models/models_0";
import { DeleteBucketMetadataTableConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteBucketMetadataTableConfigurationCommand}.
 */
export interface DeleteBucketMetadataTableConfigurationCommandInput extends DeleteBucketMetadataTableConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteBucketMetadataTableConfigurationCommand}.
 */
export interface DeleteBucketMetadataTableConfigurationCommandOutput extends __MetadataBearer {}

/**
 * > **Important:**
 * >
 * > We recommend that you delete your S3 Metadata configurations by using the V2 [DeleteBucketMetadataTableConfiguration](https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketMetadataTableConfiguration.html) API operation. We no longer recommend using the V1 `DeleteBucketMetadataTableConfiguration` API operation.
 * >
 * > If you created your S3 Metadata configuration before July 15, 2025, we recommend that you delete and re-create your configuration by using [CreateBucketMetadataConfiguration](https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucketMetadataConfiguration.html) so that you can expire journal table records and create a live inventory table.
 *
 * Deletes a V1 S3 Metadata configuration from a general purpose bucket. For more information, see [Accelerating data discovery with S3 Metadata](https://docs.aws.amazon.com/AmazonS3/latest/userguide/metadata-tables-overview.html) in the *Amazon S3 User Guide*.
 *
 * > **Note:**
 * >
 * > You can use the V2 `DeleteBucketMetadataConfiguration` API operation with V1 or V2 metadata table configurations. However, if you try to use the V1 `DeleteBucketMetadataTableConfiguration` API operation with V2 configurations, you will receive an HTTP `405 Method Not Allowed` error.
 * >
 * > Make sure that you update your processes to use the new V2 API operations (`CreateBucketMetadataConfiguration`, `GetBucketMetadataConfiguration`, and `DeleteBucketMetadataConfiguration`) instead of the V1 API operations.
 *
 * - **Permissions**
 *
 *   To use this operation, you must have the `s3:DeleteBucketMetadataTableConfiguration` permission. For more information, see [Setting up permissions for configuring metadata tables](https://docs.aws.amazon.com/AmazonS3/latest/userguide/metadata-tables-permissions.html) in the *Amazon S3 User Guide*.
 *
 * The following operations are related to `DeleteBucketMetadataTableConfiguration`:
 *
 * - [CreateBucketMetadataTableConfiguration](https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucketMetadataTableConfiguration.html)
 * - [GetBucketMetadataTableConfiguration](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketMetadataTableConfiguration.html)
 *
 * > **Important:** You must URL encode any signed header values that contain spaces. For example, if your header value is `my file.txt`, containing two spaces after `my`, you must URL encode this value to `my%20%20file.txt`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, DeleteBucketMetadataTableConfigurationCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, DeleteBucketMetadataTableConfigurationCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * // import type { S3ClientConfig } from "@aws-sdk/client-s3";
 * const config = {}; // type is S3ClientConfig
 * const client = new S3Client(config);
 * const input = { // DeleteBucketMetadataTableConfigurationRequest
 *   Bucket: "STRING_VALUE", // required
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new DeleteBucketMetadataTableConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteBucketMetadataTableConfigurationCommandInput - {@link DeleteBucketMetadataTableConfigurationCommandInput}
 * @returns {@link DeleteBucketMetadataTableConfigurationCommandOutput}
 * @see {@link DeleteBucketMetadataTableConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteBucketMetadataTableConfigurationCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 *
 * Base exception class for all service exceptions from S3 service.
 *
 * @public
 */
export class DeleteBucketMetadataTableConfigurationCommand extends command<DeleteBucketMetadataTableConfigurationCommandInput, DeleteBucketMetadataTableConfigurationCommandOutput>(
  _ep3,
  _mw4,
  "DeleteBucketMetadataTableConfiguration",
  DeleteBucketMetadataTableConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteBucketMetadataTableConfigurationRequest;
      output: {};
    };
    sdk: {
      input: DeleteBucketMetadataTableConfigurationCommandInput;
      output: DeleteBucketMetadataTableConfigurationCommandOutput;
    };
  };
}
