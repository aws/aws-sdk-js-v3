// smithy-typescript generated code
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getApplyMd5BodyChecksumPlugin } from "@smithy/middleware-apply-body-checksum";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { PutMultiRegionAccessPointPolicyRequest, PutMultiRegionAccessPointPolicyResult } from "../models/models_0";
import type { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";
import { PutMultiRegionAccessPointPolicy } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutMultiRegionAccessPointPolicyCommand}.
 */
export interface PutMultiRegionAccessPointPolicyCommandInput extends PutMultiRegionAccessPointPolicyRequest {}
/**
 * @public
 *
 * The output of {@link PutMultiRegionAccessPointPolicyCommand}.
 */
export interface PutMultiRegionAccessPointPolicyCommandOutput
  extends PutMultiRegionAccessPointPolicyResult,
    __MetadataBearer {}

/**
 * <note>
 *             <p>This operation is not supported by directory buckets.</p>
 *          </note>
 *          <p>Associates an access control policy with the specified Multi-Region Access Point. Each Multi-Region Access Point can have only
 *          one policy, so a request made to this action replaces any existing policy that is
 *          associated with the specified Multi-Region Access Point.</p>
 *          <p>This action will always be routed to the US West (Oregon) Region. For more information
 *          about the restrictions around working with Multi-Region Access Points, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/MultiRegionAccessPointRestrictions.html">Multi-Region Access Point
 *             restrictions and limitations</a> in the <i>Amazon S3 User Guide</i>.</p>
 *          <p>The following actions are related to
 *          <code>PutMultiRegionAccessPointPolicy</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetMultiRegionAccessPointPolicy.html">GetMultiRegionAccessPointPolicy</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetMultiRegionAccessPointPolicyStatus.html">GetMultiRegionAccessPointPolicyStatus</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, PutMultiRegionAccessPointPolicyCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, PutMultiRegionAccessPointPolicyCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * // import type { S3ControlClientConfig } from "@aws-sdk/client-s3-control";
 * const config = {}; // type is S3ControlClientConfig
 * const client = new S3ControlClient(config);
 * const input = { // PutMultiRegionAccessPointPolicyRequest
 *   AccountId: "STRING_VALUE",
 *   ClientToken: "STRING_VALUE", // required
 *   Details: { // PutMultiRegionAccessPointPolicyInput
 *     Name: "STRING_VALUE", // required
 *     Policy: "STRING_VALUE", // required
 *   },
 * };
 * const command = new PutMultiRegionAccessPointPolicyCommand(input);
 * const response = await client.send(command);
 * // { // PutMultiRegionAccessPointPolicyResult
 * //   RequestTokenARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PutMultiRegionAccessPointPolicyCommandInput - {@link PutMultiRegionAccessPointPolicyCommandInput}
 * @returns {@link PutMultiRegionAccessPointPolicyCommandOutput}
 * @see {@link PutMultiRegionAccessPointPolicyCommandInput} for command's `input` shape.
 * @see {@link PutMultiRegionAccessPointPolicyCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 *
 * @public
 */
export class PutMultiRegionAccessPointPolicyCommand extends $Command
  .classBuilder<
    PutMultiRegionAccessPointPolicyCommandInput,
    PutMultiRegionAccessPointPolicyCommandOutput,
    S3ControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
    RequiresAccountId: { type: "staticContextParams", value: true },
    AccountId: { type: "contextParams", name: "AccountId" },
  })
  .m(function (this: any, Command: any, cs: any, config: S3ControlClientResolvedConfig, o: any) {
    return [
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getProcessArnablesPlugin(config),
      getApplyMd5BodyChecksumPlugin(config),
    ];
  })
  .s("AWSS3ControlServiceV20180820", "PutMultiRegionAccessPointPolicy", {})
  .n("S3ControlClient", "PutMultiRegionAccessPointPolicyCommand")
  .sc(PutMultiRegionAccessPointPolicy)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutMultiRegionAccessPointPolicyRequest;
      output: PutMultiRegionAccessPointPolicyResult;
    };
    sdk: {
      input: PutMultiRegionAccessPointPolicyCommandInput;
      output: PutMultiRegionAccessPointPolicyCommandOutput;
    };
  };
}
