// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep7, _mw0, command } from "../commandBuilder";
import type { ListDirectoryBucketsOutput, ListDirectoryBucketsRequest } from "../models/models_0";
import { ListDirectoryBuckets$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListDirectoryBucketsCommand}.
 */
export interface ListDirectoryBucketsCommandInput extends ListDirectoryBucketsRequest {}
/**
 * @public
 *
 * The output of {@link ListDirectoryBucketsCommand}.
 */
export interface ListDirectoryBucketsCommandOutput extends ListDirectoryBucketsOutput, __MetadataBearer {}

/**
 * Returns a list of all Amazon S3 directory buckets owned by the authenticated sender of the request. For more information about directory buckets, see [Directory buckets](https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-buckets-overview.html) in the *Amazon S3 User Guide*.
 *
 * > **Note:** **Directory buckets** - For directory buckets, you must make requests for this API operation to the Regional endpoint. These endpoints support path-style requests in the format `https://s3express-control.region-code.amazonaws.com/bucket-name`. Virtual-hosted-style requests aren't supported. For more information about endpoints in Availability Zones, see [Regional and Zonal endpoints for directory buckets in Availability Zones](https://docs.aws.amazon.com/AmazonS3/latest/userguide/endpoint-directory-buckets-AZ.html) in the *Amazon S3 User Guide*. For more information about endpoints in Local Zones, see [Concepts for directory buckets in Local Zones](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-lzs-for-directory-buckets.html) in the *Amazon S3 User Guide*.
 *
 * - **Permissions**
 *
 *   You must have the `s3express:ListAllMyDirectoryBuckets` permission in an IAM identity-based policy instead of a bucket policy. Cross-account access to this API operation isn't supported. This operation can only be performed by the Amazon Web Services account that owns the resource. For more information about directory bucket policies and permissions, see [Amazon Web Services Identity and Access Management (IAM) for S3 Express One Zone](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-express-security-iam.html) in the *Amazon S3 User Guide*.
 *
 * - **HTTP Host header syntax**
 *
 *   **Directory buckets** - The HTTP Host header syntax is `s3express-control.region.amazonaws.com`.
 *
 * > **Note:** The `BucketRegion` response element is not part of the `ListDirectoryBuckets` Response Syntax.
 *
 * > **Important:** You must URL encode any signed header values that contain spaces. For example, if your header value is `my file.txt`, containing two spaces after `my`, you must URL encode this value to `my%20%20file.txt`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, ListDirectoryBucketsCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, ListDirectoryBucketsCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * // import type { S3ClientConfig } from "@aws-sdk/client-s3";
 * const config = {}; // type is S3ClientConfig
 * const client = new S3Client(config);
 * const input = { // ListDirectoryBucketsRequest
 *   ContinuationToken: "STRING_VALUE",
 *   MaxDirectoryBuckets: Number("int"),
 * };
 * const command = new ListDirectoryBucketsCommand(input);
 * const response = await client.send(command);
 * // { // ListDirectoryBucketsOutput
 * //   Buckets: [ // Buckets
 * //     { // Bucket
 * //       Name: "STRING_VALUE",
 * //       CreationDate: new Date("TIMESTAMP"),
 * //       BucketRegion: "STRING_VALUE",
 * //       BucketArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   ContinuationToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDirectoryBucketsCommandInput - {@link ListDirectoryBucketsCommandInput}
 * @returns {@link ListDirectoryBucketsCommandOutput}
 * @see {@link ListDirectoryBucketsCommandInput} for command's `input` shape.
 * @see {@link ListDirectoryBucketsCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 *
 * Base exception class for all service exceptions from S3 service.
 *
 * @public
 */
export class ListDirectoryBucketsCommand extends command<ListDirectoryBucketsCommandInput, ListDirectoryBucketsCommandOutput>(
  _ep7,
  _mw0,
  "ListDirectoryBuckets",
  ListDirectoryBuckets$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDirectoryBucketsRequest;
      output: ListDirectoryBucketsOutput;
    };
    sdk: {
      input: ListDirectoryBucketsCommandInput;
      output: ListDirectoryBucketsCommandOutput;
    };
  };
}
