// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep3, _mw4, command } from "../commandBuilder";
import type { DeleteBucketOwnershipControlsRequest } from "../models/models_0";
import { DeleteBucketOwnershipControls$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteBucketOwnershipControlsCommand}.
 */
export interface DeleteBucketOwnershipControlsCommandInput extends DeleteBucketOwnershipControlsRequest {}
/**
 * @public
 *
 * The output of {@link DeleteBucketOwnershipControlsCommand}.
 */
export interface DeleteBucketOwnershipControlsCommandOutput extends __MetadataBearer {}

/**
 * > **Note:** This operation is not supported for directory buckets.
 *
 * Removes `OwnershipControls` for an Amazon S3 bucket. To use this operation, you must have the `s3:PutBucketOwnershipControls` permission. For more information about Amazon S3 permissions, see [Specifying Permissions in a Policy](https://docs.aws.amazon.com/AmazonS3/latest/dev/using-with-s3-actions.html).
 *
 * For information about Amazon S3 Object Ownership, see [Using Object Ownership](https://docs.aws.amazon.com/AmazonS3/latest/dev/about-object-ownership.html).
 *
 * The following operations are related to `DeleteBucketOwnershipControls`:
 *
 * - GetBucketOwnershipControls
 * - PutBucketOwnershipControls
 *
 * > **Important:** You must URL encode any signed header values that contain spaces. For example, if your header value is `my file.txt`, containing two spaces after `my`, you must URL encode this value to `my%20%20file.txt`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, DeleteBucketOwnershipControlsCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, DeleteBucketOwnershipControlsCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * // import type { S3ClientConfig } from "@aws-sdk/client-s3";
 * const config = {}; // type is S3ClientConfig
 * const client = new S3Client(config);
 * const input = { // DeleteBucketOwnershipControlsRequest
 *   Bucket: "STRING_VALUE", // required
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new DeleteBucketOwnershipControlsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteBucketOwnershipControlsCommandInput - {@link DeleteBucketOwnershipControlsCommandInput}
 * @returns {@link DeleteBucketOwnershipControlsCommandOutput}
 * @see {@link DeleteBucketOwnershipControlsCommandInput} for command's `input` shape.
 * @see {@link DeleteBucketOwnershipControlsCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 *
 * Base exception class for all service exceptions from S3 service.
 *
 * @public
 */
export class DeleteBucketOwnershipControlsCommand extends command<DeleteBucketOwnershipControlsCommandInput, DeleteBucketOwnershipControlsCommandOutput>(
  _ep3,
  _mw4,
  "DeleteBucketOwnershipControls",
  DeleteBucketOwnershipControls$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteBucketOwnershipControlsRequest;
      output: {};
    };
    sdk: {
      input: DeleteBucketOwnershipControlsCommandInput;
      output: DeleteBucketOwnershipControlsCommandOutput;
    };
  };
}
