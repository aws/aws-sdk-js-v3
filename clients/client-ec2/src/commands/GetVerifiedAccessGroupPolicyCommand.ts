// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetVerifiedAccessGroupPolicyRequest, GetVerifiedAccessGroupPolicyResult } from "../models/models_6";
import { de_GetVerifiedAccessGroupPolicyCommand, se_GetVerifiedAccessGroupPolicyCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetVerifiedAccessGroupPolicyCommand}.
 */
export interface GetVerifiedAccessGroupPolicyCommandInput extends GetVerifiedAccessGroupPolicyRequest {}
/**
 * @public
 *
 * The output of {@link GetVerifiedAccessGroupPolicyCommand}.
 */
export interface GetVerifiedAccessGroupPolicyCommandOutput
  extends GetVerifiedAccessGroupPolicyResult,
    __MetadataBearer {}

/**
 * <p>Shows the contents of the Verified Access policy associated with the group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetVerifiedAccessGroupPolicyCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetVerifiedAccessGroupPolicyCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new EC2Client(config);
 * const input = { // GetVerifiedAccessGroupPolicyRequest
 *   VerifiedAccessGroupId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new GetVerifiedAccessGroupPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetVerifiedAccessGroupPolicyResult
 * //   PolicyEnabled: true || false,
 * //   PolicyDocument: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetVerifiedAccessGroupPolicyCommandInput - {@link GetVerifiedAccessGroupPolicyCommandInput}
 * @returns {@link GetVerifiedAccessGroupPolicyCommandOutput}
 * @see {@link GetVerifiedAccessGroupPolicyCommandInput} for command's `input` shape.
 * @see {@link GetVerifiedAccessGroupPolicyCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class GetVerifiedAccessGroupPolicyCommand extends $Command
  .classBuilder<
    GetVerifiedAccessGroupPolicyCommandInput,
    GetVerifiedAccessGroupPolicyCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "GetVerifiedAccessGroupPolicy", {})
  .n("EC2Client", "GetVerifiedAccessGroupPolicyCommand")
  .f(void 0, void 0)
  .ser(se_GetVerifiedAccessGroupPolicyCommand)
  .de(de_GetVerifiedAccessGroupPolicyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetVerifiedAccessGroupPolicyRequest;
      output: GetVerifiedAccessGroupPolicyResult;
    };
    sdk: {
      input: GetVerifiedAccessGroupPolicyCommandInput;
      output: GetVerifiedAccessGroupPolicyCommandOutput;
    };
  };
}
