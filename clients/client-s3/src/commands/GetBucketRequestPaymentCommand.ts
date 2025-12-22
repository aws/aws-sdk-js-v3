// smithy-typescript generated code
import { getThrow200ExceptionsPlugin } from "@aws-sdk/middleware-sdk-s3";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetBucketRequestPaymentOutput, GetBucketRequestPaymentRequest } from "../models/models_0";
import type { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { GetBucketRequestPayment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetBucketRequestPaymentCommand}.
 */
export interface GetBucketRequestPaymentCommandInput extends GetBucketRequestPaymentRequest {}
/**
 * @public
 *
 * The output of {@link GetBucketRequestPaymentCommand}.
 */
export interface GetBucketRequestPaymentCommandOutput extends GetBucketRequestPaymentOutput, __MetadataBearer {}

/**
 * <note>
 *             <p>This operation is not supported for directory buckets.</p>
 *          </note>
 *          <p>Returns the request payment configuration of a bucket. To use this version of the operation, you
 *       must be the bucket owner. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/RequesterPaysBuckets.html">Requester Pays Buckets</a>.</p>
 *          <p>The following operations are related to <code>GetBucketRequestPayment</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListObjects.html">ListObjects</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <important>
 *             <p>You must URL encode any signed header values that contain spaces. For example, if your header value is <code>my  file.txt</code>, containing two spaces after <code>my</code>, you must URL encode this value to <code>my%20%20file.txt</code>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, GetBucketRequestPaymentCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, GetBucketRequestPaymentCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * // import type { S3ClientConfig } from "@aws-sdk/client-s3";
 * const config = {}; // type is S3ClientConfig
 * const client = new S3Client(config);
 * const input = { // GetBucketRequestPaymentRequest
 *   Bucket: "STRING_VALUE", // required
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new GetBucketRequestPaymentCommand(input);
 * const response = await client.send(command);
 * // { // GetBucketRequestPaymentOutput
 * //   Payer: "Requester" || "BucketOwner",
 * // };
 *
 * ```
 *
 * @param GetBucketRequestPaymentCommandInput - {@link GetBucketRequestPaymentCommandInput}
 * @returns {@link GetBucketRequestPaymentCommandOutput}
 * @see {@link GetBucketRequestPaymentCommandInput} for command's `input` shape.
 * @see {@link GetBucketRequestPaymentCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 *
 * @example To get bucket versioning configuration
 * ```javascript
 * // The following example retrieves bucket versioning configuration.
 * const input = {
 *   Bucket: "examplebucket"
 * };
 * const command = new GetBucketRequestPaymentCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Payer: "BucketOwner"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetBucketRequestPaymentCommand extends $Command
  .classBuilder<
    GetBucketRequestPaymentCommandInput,
    GetBucketRequestPaymentCommandOutput,
    S3ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
    UseS3ExpressControlEndpoint: { type: "staticContextParams", value: true },
    Bucket: { type: "contextParams", name: "Bucket" },
  })
  .m(function (this: any, Command: any, cs: any, config: S3ClientResolvedConfig, o: any) {
    return [
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getThrow200ExceptionsPlugin(config),
    ];
  })
  .s("AmazonS3", "GetBucketRequestPayment", {})
  .n("S3Client", "GetBucketRequestPaymentCommand")
  .sc(GetBucketRequestPayment$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBucketRequestPaymentRequest;
      output: GetBucketRequestPaymentOutput;
    };
    sdk: {
      input: GetBucketRequestPaymentCommandInput;
      output: GetBucketRequestPaymentCommandOutput;
    };
  };
}
