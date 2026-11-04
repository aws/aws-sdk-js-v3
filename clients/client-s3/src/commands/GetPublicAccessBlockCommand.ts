// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep3, _mw0, command } from "../commandBuilder";
import type { GetPublicAccessBlockOutput, GetPublicAccessBlockRequest } from "../models/models_0";
import { GetPublicAccessBlock$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetPublicAccessBlockCommand}.
 */
export interface GetPublicAccessBlockCommandInput extends GetPublicAccessBlockRequest {}
/**
 * @public
 *
 * The output of {@link GetPublicAccessBlockCommand}.
 */
export interface GetPublicAccessBlockCommandOutput extends GetPublicAccessBlockOutput, __MetadataBearer {}

/**
 * > **Note:** This operation is not supported for directory buckets.
 *
 * Retrieves the `PublicAccessBlock` configuration for an Amazon S3 bucket. This operation returns the bucket-level configuration only. To understand the effective public access behavior, you must also consider account-level settings (which may inherit from organization-level policies). To use this operation, you must have the `s3:GetBucketPublicAccessBlock` permission. For more information about Amazon S3 permissions, see [Specifying Permissions in a Policy](https://docs.aws.amazon.com/AmazonS3/latest/dev/using-with-s3-actions.html).
 *
 * > **Important:** When Amazon S3 evaluates the `PublicAccessBlock` configuration for a bucket or an object, it checks the `PublicAccessBlock` configuration for both the bucket (or the bucket that contains the object) and the bucket owner's account. Account-level settings automatically inherit from organization-level policies when present. If the `PublicAccessBlock` settings are different between the bucket and the account, Amazon S3 uses the most restrictive combination of the bucket-level and account-level settings.
 *
 * For more information about when Amazon S3 considers a bucket or an object public, see [The Meaning of "Public"](https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status).
 *
 * The following operations are related to `GetPublicAccessBlock`:
 *
 * - [Using Amazon S3 Block Public Access](https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html)
 * - [PutPublicAccessBlock](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutPublicAccessBlock.html)
 * - [GetPublicAccessBlock](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetPublicAccessBlock.html)
 * - [DeletePublicAccessBlock](https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeletePublicAccessBlock.html)
 *
 * > **Important:** You must URL encode any signed header values that contain spaces. For example, if your header value is `my file.txt`, containing two spaces after `my`, you must URL encode this value to `my%20%20file.txt`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, GetPublicAccessBlockCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, GetPublicAccessBlockCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * // import type { S3ClientConfig } from "@aws-sdk/client-s3";
 * const config = {}; // type is S3ClientConfig
 * const client = new S3Client(config);
 * const input = { // GetPublicAccessBlockRequest
 *   Bucket: "STRING_VALUE", // required
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new GetPublicAccessBlockCommand(input);
 * const response = await client.send(command);
 * // { // GetPublicAccessBlockOutput
 * //   PublicAccessBlockConfiguration: { // PublicAccessBlockConfiguration
 * //     BlockPublicAcls: true || false,
 * //     IgnorePublicAcls: true || false,
 * //     BlockPublicPolicy: true || false,
 * //     RestrictPublicBuckets: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param GetPublicAccessBlockCommandInput - {@link GetPublicAccessBlockCommandInput}
 * @returns {@link GetPublicAccessBlockCommandOutput}
 * @see {@link GetPublicAccessBlockCommandInput} for command's `input` shape.
 * @see {@link GetPublicAccessBlockCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 *
 * Base exception class for all service exceptions from S3 service.
 *
 * @public
 */
export class GetPublicAccessBlockCommand extends command<GetPublicAccessBlockCommandInput, GetPublicAccessBlockCommandOutput>(
  _ep3,
  _mw0,
  "GetPublicAccessBlock",
  GetPublicAccessBlock$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPublicAccessBlockRequest;
      output: GetPublicAccessBlockOutput;
    };
    sdk: {
      input: GetPublicAccessBlockCommandInput;
      output: GetPublicAccessBlockCommandOutput;
    };
  };
}
