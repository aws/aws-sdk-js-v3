// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep3, _mw0, command } from "../commandBuilder";
import type { GetBucketOwnershipControlsOutput, GetBucketOwnershipControlsRequest } from "../models/models_0";
import { GetBucketOwnershipControls$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetBucketOwnershipControlsCommand}.
 */
export interface GetBucketOwnershipControlsCommandInput extends GetBucketOwnershipControlsRequest {}
/**
 * @public
 *
 * The output of {@link GetBucketOwnershipControlsCommand}.
 */
export interface GetBucketOwnershipControlsCommandOutput extends GetBucketOwnershipControlsOutput, __MetadataBearer {}

/**
 * > **Note:** This operation is not supported for directory buckets.
 *
 * Retrieves `OwnershipControls` for an Amazon S3 bucket. To use this operation, you must have the `s3:GetBucketOwnershipControls` permission. For more information about Amazon S3 permissions, see [Specifying permissions in a policy](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-with-s3-actions.html).
 *
 * > **Note:**
 * >
 * > A bucket doesn't have `OwnershipControls` settings in the following cases:
 * >
 * > - The bucket was created before the `BucketOwnerEnforced` ownership setting was introduced and you've never explicitly applied this value
 * > - You've manually deleted the bucket ownership control value using the `DeleteBucketOwnershipControls` API operation.
 * >
 * > By default, Amazon S3 sets `OwnershipControls` for all newly created buckets.
 *
 * For information about Amazon S3 Object Ownership, see [Using Object Ownership](https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html).
 *
 * The following operations are related to `GetBucketOwnershipControls`:
 *
 * - PutBucketOwnershipControls
 * - DeleteBucketOwnershipControls
 *
 * > **Important:** You must URL encode any signed header values that contain spaces. For example, if your header value is `my file.txt`, containing two spaces after `my`, you must URL encode this value to `my%20%20file.txt`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, GetBucketOwnershipControlsCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, GetBucketOwnershipControlsCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * // import type { S3ClientConfig } from "@aws-sdk/client-s3";
 * const config = {}; // type is S3ClientConfig
 * const client = new S3Client(config);
 * const input = { // GetBucketOwnershipControlsRequest
 *   Bucket: "STRING_VALUE", // required
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new GetBucketOwnershipControlsCommand(input);
 * const response = await client.send(command);
 * // { // GetBucketOwnershipControlsOutput
 * //   OwnershipControls: { // OwnershipControls
 * //     Rules: [ // OwnershipControlsRules // required
 * //       { // OwnershipControlsRule
 * //         ObjectOwnership: "BucketOwnerPreferred" || "ObjectWriter" || "BucketOwnerEnforced", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetBucketOwnershipControlsCommandInput - {@link GetBucketOwnershipControlsCommandInput}
 * @returns {@link GetBucketOwnershipControlsCommandOutput}
 * @see {@link GetBucketOwnershipControlsCommandInput} for command's `input` shape.
 * @see {@link GetBucketOwnershipControlsCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 *
 * Base exception class for all service exceptions from S3 service.
 *
 * @public
 */
export class GetBucketOwnershipControlsCommand extends command<GetBucketOwnershipControlsCommandInput, GetBucketOwnershipControlsCommandOutput>(
  _ep3,
  _mw0,
  "GetBucketOwnershipControls",
  GetBucketOwnershipControls$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBucketOwnershipControlsRequest;
      output: GetBucketOwnershipControlsOutput;
    };
    sdk: {
      input: GetBucketOwnershipControlsCommandInput;
      output: GetBucketOwnershipControlsCommandOutput;
    };
  };
}
