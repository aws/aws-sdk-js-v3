// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetVerifiedAccessEndpointPolicyRequest, GetVerifiedAccessEndpointPolicyResult } from "../models/models_6";
import { GetVerifiedAccessEndpointPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetVerifiedAccessEndpointPolicyCommand}.
 */
export interface GetVerifiedAccessEndpointPolicyCommandInput extends GetVerifiedAccessEndpointPolicyRequest {}
/**
 * @public
 *
 * The output of {@link GetVerifiedAccessEndpointPolicyCommand}.
 */
export interface GetVerifiedAccessEndpointPolicyCommandOutput
  extends GetVerifiedAccessEndpointPolicyResult,
    __MetadataBearer {}

/**
 * <p>Get the Verified Access policy associated with the endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetVerifiedAccessEndpointPolicyCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetVerifiedAccessEndpointPolicyCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // GetVerifiedAccessEndpointPolicyRequest
 *   VerifiedAccessEndpointId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new GetVerifiedAccessEndpointPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetVerifiedAccessEndpointPolicyResult
 * //   PolicyEnabled: true || false,
 * //   PolicyDocument: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetVerifiedAccessEndpointPolicyCommandInput - {@link GetVerifiedAccessEndpointPolicyCommandInput}
 * @returns {@link GetVerifiedAccessEndpointPolicyCommandOutput}
 * @see {@link GetVerifiedAccessEndpointPolicyCommandInput} for command's `input` shape.
 * @see {@link GetVerifiedAccessEndpointPolicyCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class GetVerifiedAccessEndpointPolicyCommand extends $Command
  .classBuilder<
    GetVerifiedAccessEndpointPolicyCommandInput,
    GetVerifiedAccessEndpointPolicyCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "GetVerifiedAccessEndpointPolicy", {})
  .n("EC2Client", "GetVerifiedAccessEndpointPolicyCommand")
  .sc(GetVerifiedAccessEndpointPolicy$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetVerifiedAccessEndpointPolicyRequest;
      output: GetVerifiedAccessEndpointPolicyResult;
    };
    sdk: {
      input: GetVerifiedAccessEndpointPolicyCommandInput;
      output: GetVerifiedAccessEndpointPolicyCommandOutput;
    };
  };
}
