// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep3, _mw3, command } from "../commandBuilder";
import type { PutBucketCorsRequest } from "../models/models_0";
import { PutBucketCors$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutBucketCorsCommand}.
 */
export interface PutBucketCorsCommandInput extends PutBucketCorsRequest {}
/**
 * @public
 *
 * The output of {@link PutBucketCorsCommand}.
 */
export interface PutBucketCorsCommandOutput extends __MetadataBearer {}

/**
 * > **Note:** This operation is not supported for directory buckets.
 *
 * Sets the `cors` configuration for your bucket. If the configuration exists, Amazon S3 replaces it.
 *
 * To use this operation, you must be allowed to perform the `s3:PutBucketCORS` action. By default, the bucket owner has this permission and can grant it to others.
 *
 * You set this configuration on a bucket so that the bucket can service cross-origin requests. For example, you might want to enable a request whose origin is `http://www.example.com` to access your Amazon S3 bucket at `my.example.bucket.com` by using the browser's `XMLHttpRequest` capability.
 *
 * To enable cross-origin resource sharing (CORS) on a bucket, you add the `cors` subresource to the bucket. The `cors` subresource is an XML document in which you configure rules that identify origins and the HTTP methods that can be executed on your bucket. The document is limited to 64 KB in size.
 *
 * When Amazon S3 receives a cross-origin request (or a pre-flight OPTIONS request) against a bucket, it evaluates the `cors` configuration on the bucket and uses the first `CORSRule` rule that matches the incoming browser request to enable a cross-origin request. For a rule to match, the following conditions must be met:
 *
 * - The request's `Origin` header must match `AllowedOrigin` elements.
 * - The request method (for example, GET, PUT, HEAD, and so on) or the `Access-Control-Request-Method` header in case of a pre-flight `OPTIONS` request must be one of the `AllowedMethod` elements.
 * - Every header specified in the `Access-Control-Request-Headers` request header of a pre-flight request must match an `AllowedHeader` element.
 *
 * For more information about CORS, go to [Enabling Cross-Origin Resource Sharing](https://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html) in the *Amazon S3 User Guide*.
 *
 * The following operations are related to `PutBucketCors`:
 *
 * - [GetBucketCors](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketCors.html)
 * - [DeleteBucketCors](https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketCors.html)
 * - [RESTOPTIONSobject](https://docs.aws.amazon.com/AmazonS3/latest/API/RESTOPTIONSobject.html)
 *
 * > **Important:** You must URL encode any signed header values that contain spaces. For example, if your header value is `my file.txt`, containing two spaces after `my`, you must URL encode this value to `my%20%20file.txt`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, PutBucketCorsCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, PutBucketCorsCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * // import type { S3ClientConfig } from "@aws-sdk/client-s3";
 * const config = {}; // type is S3ClientConfig
 * const client = new S3Client(config);
 * const input = { // PutBucketCorsRequest
 *   Bucket: "STRING_VALUE", // required
 *   CORSConfiguration: { // CORSConfiguration
 *     CORSRules: [ // CORSRules // required
 *       { // CORSRule
 *         ID: "STRING_VALUE",
 *         AllowedHeaders: [ // AllowedHeaders
 *           "STRING_VALUE",
 *         ],
 *         AllowedMethods: [ // AllowedMethods // required
 *           "STRING_VALUE",
 *         ],
 *         AllowedOrigins: [ // AllowedOrigins // required
 *           "STRING_VALUE",
 *         ],
 *         ExposeHeaders: [ // ExposeHeaders
 *           "STRING_VALUE",
 *         ],
 *         MaxAgeSeconds: Number("int"),
 *       },
 *     ],
 *   },
 *   ContentMD5: "STRING_VALUE",
 *   ChecksumAlgorithm: "CRC32" || "CRC32C" || "SHA1" || "SHA256" || "CRC64NVME" || "SHA512" || "MD5" || "XXHASH64" || "XXHASH3" || "XXHASH128",
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new PutBucketCorsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutBucketCorsCommandInput - {@link PutBucketCorsCommandInput}
 * @returns {@link PutBucketCorsCommandOutput}
 * @see {@link PutBucketCorsCommandInput} for command's `input` shape.
 * @see {@link PutBucketCorsCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 *
 * Base exception class for all service exceptions from S3 service.
 *
 * @example To set cors configuration on a bucket.
 * ```javascript
 * // The following example enables PUT, POST, and DELETE requests from www.example.com, and enables GET requests from any domain.
 * const input = {
 *   Bucket: "",
 *   CORSConfiguration: {
 *     CORSRules: [
 *       {
 *         AllowedHeaders: [
 *           "*"
 *         ],
 *         AllowedMethods: [
 *           "PUT",
 *           "POST",
 *           "DELETE"
 *         ],
 *         AllowedOrigins: [
 *           "http://www.example.com"
 *         ],
 *         ExposeHeaders: [
 *           "x-amz-server-side-encryption"
 *         ],
 *         MaxAgeSeconds: 3000
 *       },
 *       {
 *         AllowedHeaders: [
 *           "Authorization"
 *         ],
 *         AllowedMethods: [
 *           "GET"
 *         ],
 *         AllowedOrigins: [
 *           "*"
 *         ],
 *         MaxAgeSeconds: 3000
 *       }
 *     ]
 *   },
 *   ContentMD5: ""
 * };
 * const command = new PutBucketCorsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class PutBucketCorsCommand extends command<PutBucketCorsCommandInput, PutBucketCorsCommandOutput>(
  _ep3,
  _mw3,
  "PutBucketCors",
  PutBucketCors$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutBucketCorsRequest;
      output: {};
    };
    sdk: {
      input: PutBucketCorsCommandInput;
      output: PutBucketCorsCommandOutput;
    };
  };
}
