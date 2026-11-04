// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep6, _mw0, command } from "../commandBuilder";
import type { ListBucketsOutput, ListBucketsRequest } from "../models/models_0";
import { ListBuckets$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListBucketsCommand}.
 */
export interface ListBucketsCommandInput extends ListBucketsRequest {}
/**
 * @public
 *
 * The output of {@link ListBucketsCommand}.
 */
export interface ListBucketsCommandOutput extends ListBucketsOutput, __MetadataBearer {}

/**
 * > **Note:** This operation is not supported for directory buckets.
 *
 * Returns a list of all buckets owned by the authenticated sender of the request. To grant IAM permission to use this operation, you must add the `s3:ListAllMyBuckets` policy action.
 *
 * For information about Amazon S3 buckets, see [Creating, configuring, and working with Amazon S3 buckets](https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-buckets-s3.html).
 *
 * > **Important:** We strongly recommend using only paginated `ListBuckets` requests. Unpaginated `ListBuckets` requests are only supported for Amazon Web Services accounts set to the default general purpose bucket quota of 10,000. If you have an approved general purpose bucket quota above 10,000, you must send paginated `ListBuckets` requests to list your account’s buckets. All unpaginated `ListBuckets` requests will be rejected for Amazon Web Services accounts with a general purpose bucket quota greater than 10,000.
 *
 * > **Important:** You must URL encode any signed header values that contain spaces. For example, if your header value is `my file.txt`, containing two spaces after `my`, you must URL encode this value to `my%20%20file.txt`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, ListBucketsCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, ListBucketsCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * // import type { S3ClientConfig } from "@aws-sdk/client-s3";
 * const config = {}; // type is S3ClientConfig
 * const client = new S3Client(config);
 * const input = { // ListBucketsRequest
 *   MaxBuckets: Number("int"),
 *   ContinuationToken: "STRING_VALUE",
 *   Prefix: "STRING_VALUE",
 *   BucketRegion: "STRING_VALUE",
 * };
 * const command = new ListBucketsCommand(input);
 * const response = await client.send(command);
 * // { // ListBucketsOutput
 * //   Buckets: [ // Buckets
 * //     { // Bucket
 * //       Name: "STRING_VALUE",
 * //       CreationDate: new Date("TIMESTAMP"),
 * //       BucketRegion: "STRING_VALUE",
 * //       BucketArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Owner: { // Owner
 * //     DisplayName: "STRING_VALUE",
 * //     ID: "STRING_VALUE",
 * //   },
 * //   ContinuationToken: "STRING_VALUE",
 * //   Prefix: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListBucketsCommandInput - {@link ListBucketsCommandInput}
 * @returns {@link ListBucketsCommandOutput}
 * @see {@link ListBucketsCommandInput} for command's `input` shape.
 * @see {@link ListBucketsCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 *
 * Base exception class for all service exceptions from S3 service.
 *
 * @example To list all buckets
 * ```javascript
 * // The following example returns all the buckets owned by the sender of this request.
 * const input = { /* empty *\/ };
 * const command = new ListBucketsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Buckets: [
 *     {
 *       CreationDate: "2012-02-15T21:03:02.000Z",
 *       Name: "examplebucket"
 *     },
 *     {
 *       CreationDate: "2011-07-24T19:33:50.000Z",
 *       Name: "examplebucket2"
 *     },
 *     {
 *       CreationDate: "2010-12-17T00:56:49.000Z",
 *       Name: "examplebucket3"
 *     }
 *   ],
 *   Owner: {
 *     DisplayName: "own-display-name",
 *     ID: "examplee7a2f25102679df27bb0ae12b3f85be6f290b936c4393484be31"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListBucketsCommand extends command<ListBucketsCommandInput, ListBucketsCommandOutput>(
  _ep6,
  _mw0,
  "ListBuckets",
  ListBuckets$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListBucketsRequest;
      output: ListBucketsOutput;
    };
    sdk: {
      input: ListBucketsCommandInput;
      output: ListBucketsCommandOutput;
    };
  };
}
