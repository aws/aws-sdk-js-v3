// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep3, _mw0, command } from "../commandBuilder";
import type { GetBucketCorsOutput, GetBucketCorsRequest } from "../models/models_0";
import { GetBucketCors$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetBucketCorsCommand}.
 */
export interface GetBucketCorsCommandInput extends GetBucketCorsRequest {}
/**
 * @public
 *
 * The output of {@link GetBucketCorsCommand}.
 */
export interface GetBucketCorsCommandOutput extends GetBucketCorsOutput, __MetadataBearer {}

/**
 * > **Note:** This operation is not supported for directory buckets.
 *
 * Returns the Cross-Origin Resource Sharing (CORS) configuration information set for the bucket.
 *
 * To use this operation, you must have permission to perform the `s3:GetBucketCORS` action. By default, the bucket owner has this permission and can grant it to others.
 *
 * When you use this API operation with an access point, provide the alias of the access point in place of the bucket name.
 *
 * When you use this API operation with an Object Lambda access point, provide the alias of the Object Lambda access point in place of the bucket name. If the Object Lambda access point alias in a request is not valid, the error code `InvalidAccessPointAliasError` is returned. For more information about `InvalidAccessPointAliasError`, see [List of Error Codes](https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html#ErrorCodeList).
 *
 * For more information about CORS, see [Enabling Cross-Origin Resource Sharing](https://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html).
 *
 * The following operations are related to `GetBucketCors`:
 *
 * - [PutBucketCors](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketCors.html)
 * - [DeleteBucketCors](https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketCors.html)
 *
 * > **Important:** You must URL encode any signed header values that contain spaces. For example, if your header value is `my file.txt`, containing two spaces after `my`, you must URL encode this value to `my%20%20file.txt`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, GetBucketCorsCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, GetBucketCorsCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * // import type { S3ClientConfig } from "@aws-sdk/client-s3";
 * const config = {}; // type is S3ClientConfig
 * const client = new S3Client(config);
 * const input = { // GetBucketCorsRequest
 *   Bucket: "STRING_VALUE", // required
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new GetBucketCorsCommand(input);
 * const response = await client.send(command);
 * // { // GetBucketCorsOutput
 * //   CORSRules: [ // CORSRules
 * //     { // CORSRule
 * //       ID: "STRING_VALUE",
 * //       AllowedHeaders: [ // AllowedHeaders
 * //         "STRING_VALUE",
 * //       ],
 * //       AllowedMethods: [ // AllowedMethods // required
 * //         "STRING_VALUE",
 * //       ],
 * //       AllowedOrigins: [ // AllowedOrigins // required
 * //         "STRING_VALUE",
 * //       ],
 * //       ExposeHeaders: [ // ExposeHeaders
 * //         "STRING_VALUE",
 * //       ],
 * //       MaxAgeSeconds: Number("int"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetBucketCorsCommandInput - {@link GetBucketCorsCommandInput}
 * @returns {@link GetBucketCorsCommandOutput}
 * @see {@link GetBucketCorsCommandInput} for command's `input` shape.
 * @see {@link GetBucketCorsCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 *
 * Base exception class for all service exceptions from S3 service.
 *
 * @example To get cors configuration set on a bucket
 * ```javascript
 * // The following example returns cross-origin resource sharing (CORS) configuration set on a bucket.
 * const input = {
 *   Bucket: "examplebucket"
 * };
 * const command = new GetBucketCorsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   CORSRules: [
 *     {
 *       AllowedHeaders: [
 *         "Authorization"
 *       ],
 *       AllowedMethods: [
 *         "GET"
 *       ],
 *       AllowedOrigins: [
 *         "*"
 *       ],
 *       MaxAgeSeconds: 3000
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetBucketCorsCommand extends command<GetBucketCorsCommandInput, GetBucketCorsCommandOutput>(
  _ep3,
  _mw0,
  "GetBucketCors",
  GetBucketCors$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBucketCorsRequest;
      output: GetBucketCorsOutput;
    };
    sdk: {
      input: GetBucketCorsCommandInput;
      output: GetBucketCorsCommandOutput;
    };
  };
}
