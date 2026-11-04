// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep3, _mw0, command } from "../commandBuilder";
import type { GetBucketPolicyStatusOutput, GetBucketPolicyStatusRequest } from "../models/models_0";
import { GetBucketPolicyStatus$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetBucketPolicyStatusCommand}.
 */
export interface GetBucketPolicyStatusCommandInput extends GetBucketPolicyStatusRequest {}
/**
 * @public
 *
 * The output of {@link GetBucketPolicyStatusCommand}.
 */
export interface GetBucketPolicyStatusCommandOutput extends GetBucketPolicyStatusOutput, __MetadataBearer {}

/**
 * > **Note:** This operation is not supported for directory buckets.
 *
 * Retrieves the policy status for an Amazon S3 bucket, indicating whether the bucket is public. In order to use this operation, you must have the `s3:GetBucketPolicyStatus` permission. For more information about Amazon S3 permissions, see [Specifying Permissions in a Policy](https://docs.aws.amazon.com/AmazonS3/latest/dev/using-with-s3-actions.html).
 *
 * For more information about when Amazon S3 considers a bucket public, see [The Meaning of "Public"](https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status).
 *
 * The following operations are related to `GetBucketPolicyStatus`:
 *
 * - [Using Amazon S3 Block Public Access](https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html)
 * - [GetPublicAccessBlock](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetPublicAccessBlock.html)
 * - [PutPublicAccessBlock](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutPublicAccessBlock.html)
 * - [DeletePublicAccessBlock](https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeletePublicAccessBlock.html)
 *
 * > **Important:** You must URL encode any signed header values that contain spaces. For example, if your header value is `my file.txt`, containing two spaces after `my`, you must URL encode this value to `my%20%20file.txt`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, GetBucketPolicyStatusCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, GetBucketPolicyStatusCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * // import type { S3ClientConfig } from "@aws-sdk/client-s3";
 * const config = {}; // type is S3ClientConfig
 * const client = new S3Client(config);
 * const input = { // GetBucketPolicyStatusRequest
 *   Bucket: "STRING_VALUE", // required
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new GetBucketPolicyStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetBucketPolicyStatusOutput
 * //   PolicyStatus: { // PolicyStatus
 * //     IsPublic: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param GetBucketPolicyStatusCommandInput - {@link GetBucketPolicyStatusCommandInput}
 * @returns {@link GetBucketPolicyStatusCommandOutput}
 * @see {@link GetBucketPolicyStatusCommandInput} for command's `input` shape.
 * @see {@link GetBucketPolicyStatusCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 *
 * Base exception class for all service exceptions from S3 service.
 *
 * @public
 */
export class GetBucketPolicyStatusCommand extends command<GetBucketPolicyStatusCommandInput, GetBucketPolicyStatusCommandOutput>(
  _ep3,
  _mw0,
  "GetBucketPolicyStatus",
  GetBucketPolicyStatus$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBucketPolicyStatusRequest;
      output: GetBucketPolicyStatusOutput;
    };
    sdk: {
      input: GetBucketPolicyStatusCommandInput;
      output: GetBucketPolicyStatusCommandOutput;
    };
  };
}
