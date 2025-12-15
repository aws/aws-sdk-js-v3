// smithy-typescript generated code
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getApplyMd5BodyChecksumPlugin } from "@smithy/middleware-apply-body-checksum";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetMultiRegionAccessPointPolicyRequest, GetMultiRegionAccessPointPolicyResult } from "../models/models_0";
import type { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";
import { GetMultiRegionAccessPointPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetMultiRegionAccessPointPolicyCommand}.
 */
export interface GetMultiRegionAccessPointPolicyCommandInput extends GetMultiRegionAccessPointPolicyRequest {}
/**
 * @public
 *
 * The output of {@link GetMultiRegionAccessPointPolicyCommand}.
 */
export interface GetMultiRegionAccessPointPolicyCommandOutput
  extends GetMultiRegionAccessPointPolicyResult,
    __MetadataBearer {}

/**
 * <note>
 *             <p>This operation is not supported by directory buckets.</p>
 *          </note>
 *          <p>Returns the access control policy of the specified Multi-Region Access Point.</p>
 *          <p>This action will always be routed to the US West (Oregon) Region. For more information
 *          about the restrictions around working with Multi-Region Access Points, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/MultiRegionAccessPointRestrictions.html">Multi-Region Access Point
 *             restrictions and limitations</a> in the <i>Amazon S3 User Guide</i>.</p>
 *          <p>The following actions are related to
 *          <code>GetMultiRegionAccessPointPolicy</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetMultiRegionAccessPointPolicyStatus.html">GetMultiRegionAccessPointPolicyStatus</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutMultiRegionAccessPointPolicy.html">PutMultiRegionAccessPointPolicy</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, GetMultiRegionAccessPointPolicyCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, GetMultiRegionAccessPointPolicyCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * // import type { S3ControlClientConfig } from "@aws-sdk/client-s3-control";
 * const config = {}; // type is S3ControlClientConfig
 * const client = new S3ControlClient(config);
 * const input = { // GetMultiRegionAccessPointPolicyRequest
 *   AccountId: "STRING_VALUE",
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new GetMultiRegionAccessPointPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetMultiRegionAccessPointPolicyResult
 * //   Policy: { // MultiRegionAccessPointPolicyDocument
 * //     Established: { // EstablishedMultiRegionAccessPointPolicy
 * //       Policy: "STRING_VALUE",
 * //     },
 * //     Proposed: { // ProposedMultiRegionAccessPointPolicy
 * //       Policy: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetMultiRegionAccessPointPolicyCommandInput - {@link GetMultiRegionAccessPointPolicyCommandInput}
 * @returns {@link GetMultiRegionAccessPointPolicyCommandOutput}
 * @see {@link GetMultiRegionAccessPointPolicyCommandInput} for command's `input` shape.
 * @see {@link GetMultiRegionAccessPointPolicyCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 *
 * @public
 */
export class GetMultiRegionAccessPointPolicyCommand extends $Command
  .classBuilder<
    GetMultiRegionAccessPointPolicyCommandInput,
    GetMultiRegionAccessPointPolicyCommandOutput,
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
  .s("AWSS3ControlServiceV20180820", "GetMultiRegionAccessPointPolicy", {})
  .n("S3ControlClient", "GetMultiRegionAccessPointPolicyCommand")
  .sc(GetMultiRegionAccessPointPolicy$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMultiRegionAccessPointPolicyRequest;
      output: GetMultiRegionAccessPointPolicyResult;
    };
    sdk: {
      input: GetMultiRegionAccessPointPolicyCommandInput;
      output: GetMultiRegionAccessPointPolicyCommandOutput;
    };
  };
}
