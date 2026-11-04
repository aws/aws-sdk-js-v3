// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep3, _mw4, command } from "../commandBuilder";
import type { DeletePublicAccessBlockRequest } from "../models/models_0";
import { DeletePublicAccessBlock$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeletePublicAccessBlockCommand}.
 */
export interface DeletePublicAccessBlockCommandInput extends DeletePublicAccessBlockRequest {}
/**
 * @public
 *
 * The output of {@link DeletePublicAccessBlockCommand}.
 */
export interface DeletePublicAccessBlockCommandOutput extends __MetadataBearer {}

/**
 * > **Note:** This operation is not supported for directory buckets.
 *
 * Removes the `PublicAccessBlock` configuration for an Amazon S3 bucket. This operation removes the bucket-level configuration only. The effective public access behavior will still be governed by account-level settings (which may inherit from organization-level policies). To use this operation, you must have the `s3:PutBucketPublicAccessBlock` permission. For more information about permissions, see [Permissions Related to Bucket Subresource Operations](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources) and [Managing Access Permissions to Your Amazon S3 Resources](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-access-control.html).
 *
 * The following operations are related to `DeletePublicAccessBlock`:
 *
 * - [Using Amazon S3 Block Public Access](https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html)
 * - [GetPublicAccessBlock](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetPublicAccessBlock.html)
 * - [PutPublicAccessBlock](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutPublicAccessBlock.html)
 * - [GetBucketPolicyStatus](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketPolicyStatus.html)
 *
 * > **Important:** You must URL encode any signed header values that contain spaces. For example, if your header value is `my file.txt`, containing two spaces after `my`, you must URL encode this value to `my%20%20file.txt`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, DeletePublicAccessBlockCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, DeletePublicAccessBlockCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * // import type { S3ClientConfig } from "@aws-sdk/client-s3";
 * const config = {}; // type is S3ClientConfig
 * const client = new S3Client(config);
 * const input = { // DeletePublicAccessBlockRequest
 *   Bucket: "STRING_VALUE", // required
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new DeletePublicAccessBlockCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeletePublicAccessBlockCommandInput - {@link DeletePublicAccessBlockCommandInput}
 * @returns {@link DeletePublicAccessBlockCommandOutput}
 * @see {@link DeletePublicAccessBlockCommandInput} for command's `input` shape.
 * @see {@link DeletePublicAccessBlockCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 *
 * Base exception class for all service exceptions from S3 service.
 *
 * @public
 */
export class DeletePublicAccessBlockCommand extends command<DeletePublicAccessBlockCommandInput, DeletePublicAccessBlockCommandOutput>(
  _ep3,
  _mw4,
  "DeletePublicAccessBlock",
  DeletePublicAccessBlock$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeletePublicAccessBlockRequest;
      output: {};
    };
    sdk: {
      input: DeletePublicAccessBlockCommandInput;
      output: DeletePublicAccessBlockCommandOutput;
    };
  };
}
