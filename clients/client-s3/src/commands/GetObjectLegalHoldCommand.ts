// smithy-typescript generated code
import { getThrow200ExceptionsPlugin } from "@aws-sdk/middleware-sdk-s3";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetObjectLegalHoldOutput, GetObjectLegalHoldRequest } from "../models/models_0";
import type { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { GetObjectLegalHold$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetObjectLegalHoldCommand}.
 */
export interface GetObjectLegalHoldCommandInput extends GetObjectLegalHoldRequest {}
/**
 * @public
 *
 * The output of {@link GetObjectLegalHoldCommand}.
 */
export interface GetObjectLegalHoldCommandOutput extends GetObjectLegalHoldOutput, __MetadataBearer {}

/**
 * <note>
 *             <p>This operation is not supported for directory buckets.</p>
 *          </note>
 *          <p>Gets an object's current legal hold status. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock.html">Locking Objects</a>.</p>
 *          <p>This functionality is not supported for Amazon S3 on Outposts.</p>
 *          <p>The following action is related to <code>GetObjectLegalHold</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectAttributes.html">GetObjectAttributes</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <important>
 *             <p>You must URL encode any signed header values that contain spaces. For example, if your header value is <code>my  file.txt</code>, containing two spaces after <code>my</code>, you must URL encode this value to <code>my%20%20file.txt</code>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, GetObjectLegalHoldCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, GetObjectLegalHoldCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * // import type { S3ClientConfig } from "@aws-sdk/client-s3";
 * const config = {}; // type is S3ClientConfig
 * const client = new S3Client(config);
 * const input = { // GetObjectLegalHoldRequest
 *   Bucket: "STRING_VALUE", // required
 *   Key: "STRING_VALUE", // required
 *   VersionId: "STRING_VALUE",
 *   RequestPayer: "requester",
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new GetObjectLegalHoldCommand(input);
 * const response = await client.send(command);
 * // { // GetObjectLegalHoldOutput
 * //   LegalHold: { // ObjectLockLegalHold
 * //     Status: "ON" || "OFF",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetObjectLegalHoldCommandInput - {@link GetObjectLegalHoldCommandInput}
 * @returns {@link GetObjectLegalHoldCommandOutput}
 * @see {@link GetObjectLegalHoldCommandInput} for command's `input` shape.
 * @see {@link GetObjectLegalHoldCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 *
 * @public
 */
export class GetObjectLegalHoldCommand extends $Command
  .classBuilder<
    GetObjectLegalHoldCommandInput,
    GetObjectLegalHoldCommandOutput,
    S3ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
    Bucket: { type: "contextParams", name: "Bucket" },
  })
  .m(function (this: any, Command: any, cs: any, config: S3ClientResolvedConfig, o: any) {
    return [
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getThrow200ExceptionsPlugin(config),
    ];
  })
  .s("AmazonS3", "GetObjectLegalHold", {})
  .n("S3Client", "GetObjectLegalHoldCommand")
  .sc(GetObjectLegalHold$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetObjectLegalHoldRequest;
      output: GetObjectLegalHoldOutput;
    };
    sdk: {
      input: GetObjectLegalHoldCommandInput;
      output: GetObjectLegalHoldCommandOutput;
    };
  };
}
