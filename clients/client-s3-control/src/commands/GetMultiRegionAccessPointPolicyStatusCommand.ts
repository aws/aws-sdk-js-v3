// smithy-typescript generated code
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getApplyMd5BodyChecksumPlugin } from "@smithy/middleware-apply-body-checksum";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetMultiRegionAccessPointPolicyStatusRequest,
  GetMultiRegionAccessPointPolicyStatusResult,
} from "../models/models_0";
import {
  de_GetMultiRegionAccessPointPolicyStatusCommand,
  se_GetMultiRegionAccessPointPolicyStatusCommand,
} from "../protocols/Aws_restXml";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetMultiRegionAccessPointPolicyStatusCommand}.
 */
export interface GetMultiRegionAccessPointPolicyStatusCommandInput
  extends GetMultiRegionAccessPointPolicyStatusRequest {}
/**
 * @public
 *
 * The output of {@link GetMultiRegionAccessPointPolicyStatusCommand}.
 */
export interface GetMultiRegionAccessPointPolicyStatusCommandOutput
  extends GetMultiRegionAccessPointPolicyStatusResult,
    __MetadataBearer {}

/**
 * <note>
 *             <p>This operation is not supported by directory buckets.</p>
 *          </note>
 *          <p>Indicates whether the specified Multi-Region Access Point has an access control policy that allows public
 *          access.</p>
 *          <p>This action will always be routed to the US West (Oregon) Region. For more information
 *          about the restrictions around working with Multi-Region Access Points, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/MultiRegionAccessPointRestrictions.html">Multi-Region Access Point
 *             restrictions and limitations</a> in the <i>Amazon S3 User Guide</i>.</p>
 *          <p>The following actions are related to
 *          <code>GetMultiRegionAccessPointPolicyStatus</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetMultiRegionAccessPointPolicy.html">GetMultiRegionAccessPointPolicy</a>
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
 * import { S3ControlClient, GetMultiRegionAccessPointPolicyStatusCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, GetMultiRegionAccessPointPolicyStatusCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const input = { // GetMultiRegionAccessPointPolicyStatusRequest
 *   AccountId: "STRING_VALUE",
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new GetMultiRegionAccessPointPolicyStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetMultiRegionAccessPointPolicyStatusResult
 * //   Established: { // PolicyStatus
 * //     IsPublic: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param GetMultiRegionAccessPointPolicyStatusCommandInput - {@link GetMultiRegionAccessPointPolicyStatusCommandInput}
 * @returns {@link GetMultiRegionAccessPointPolicyStatusCommandOutput}
 * @see {@link GetMultiRegionAccessPointPolicyStatusCommandInput} for command's `input` shape.
 * @see {@link GetMultiRegionAccessPointPolicyStatusCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 *
 * @public
 */
export class GetMultiRegionAccessPointPolicyStatusCommand extends $Command
  .classBuilder<
    GetMultiRegionAccessPointPolicyStatusCommandInput,
    GetMultiRegionAccessPointPolicyStatusCommandOutput,
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
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getProcessArnablesPlugin(config),
      getApplyMd5BodyChecksumPlugin(config),
    ];
  })
  .s("AWSS3ControlServiceV20180820", "GetMultiRegionAccessPointPolicyStatus", {})
  .n("S3ControlClient", "GetMultiRegionAccessPointPolicyStatusCommand")
  .f(void 0, void 0)
  .ser(se_GetMultiRegionAccessPointPolicyStatusCommand)
  .de(de_GetMultiRegionAccessPointPolicyStatusCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMultiRegionAccessPointPolicyStatusRequest;
      output: GetMultiRegionAccessPointPolicyStatusResult;
    };
    sdk: {
      input: GetMultiRegionAccessPointPolicyStatusCommandInput;
      output: GetMultiRegionAccessPointPolicyStatusCommandOutput;
    };
  };
}
