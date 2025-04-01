// smithy-typescript generated code
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetBucketVersioningRequest, GetBucketVersioningResult } from "../models/models_0";
import { de_GetBucketVersioningCommand, se_GetBucketVersioningCommand } from "../protocols/Aws_restXml";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetBucketVersioningCommand}.
 */
export interface GetBucketVersioningCommandInput extends GetBucketVersioningRequest {}
/**
 * @public
 *
 * The output of {@link GetBucketVersioningCommand}.
 */
export interface GetBucketVersioningCommandOutput extends GetBucketVersioningResult, __MetadataBearer {}

/**
 * <note>
 *             <p>This operation returns the versioning state
 *             for
 *             S3 on Outposts
 *             buckets
 *             only. To return the versioning state for an S3 bucket, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketVersioning.html">GetBucketVersioning</a> in the <i>Amazon S3 API Reference</i>. </p>
 *          </note>
 *          <p>Returns the versioning state for an S3 on Outposts bucket. With
 *          S3
 *          Versioning,
 *          you can save multiple distinct copies of your
 *          objects
 *          and recover from unintended user actions and application failures.</p>
 *          <p>If you've never set versioning on your bucket, it has no versioning state. In that case,
 *          the <code>GetBucketVersioning</code> request does not return a versioning state
 *          value.</p>
 *          <p>For more information about versioning, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/Versioning.html">Versioning</a> in the <i>Amazon S3
 *             User Guide</i>.</p>
 *          <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived by using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketVersioning.html#API_control_GetBucketVersioning_Examples">Examples</a> section.</p>
 *          <p>The following operations are related to <code>GetBucketVersioning</code> for
 *          S3 on Outposts.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketVersioning.html">PutBucketVersioning</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketLifecycleConfiguration.html">PutBucketLifecycleConfiguration</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketLifecycleConfiguration.html">GetBucketLifecycleConfiguration</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, GetBucketVersioningCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, GetBucketVersioningCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const input = { // GetBucketVersioningRequest
 *   AccountId: "STRING_VALUE",
 *   Bucket: "STRING_VALUE", // required
 * };
 * const command = new GetBucketVersioningCommand(input);
 * const response = await client.send(command);
 * // { // GetBucketVersioningResult
 * //   Status: "Enabled" || "Suspended",
 * //   MFADelete: "Enabled" || "Disabled",
 * // };
 *
 * ```
 *
 * @param GetBucketVersioningCommandInput - {@link GetBucketVersioningCommandInput}
 * @returns {@link GetBucketVersioningCommandOutput}
 * @see {@link GetBucketVersioningCommandInput} for command's `input` shape.
 * @see {@link GetBucketVersioningCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 *
 * @public
 */
export class GetBucketVersioningCommand extends $Command
  .classBuilder<
    GetBucketVersioningCommandInput,
    GetBucketVersioningCommandOutput,
    S3ControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
    RequiresAccountId: { type: "staticContextParams", value: true },
    AccountId: { type: "contextParams", name: "AccountId" },
    Bucket: { type: "contextParams", name: "Bucket" },
  })
  .m(function (this: any, Command: any, cs: any, config: S3ControlClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getProcessArnablesPlugin(config),
    ];
  })
  .s("AWSS3ControlServiceV20180820", "GetBucketVersioning", {})
  .n("S3ControlClient", "GetBucketVersioningCommand")
  .f(void 0, void 0)
  .ser(se_GetBucketVersioningCommand)
  .de(de_GetBucketVersioningCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBucketVersioningRequest;
      output: GetBucketVersioningResult;
    };
    sdk: {
      input: GetBucketVersioningCommandInput;
      output: GetBucketVersioningCommandOutput;
    };
  };
}
