// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DisableIpamPolicyRequest, DisableIpamPolicyResult } from "../models/models_5";
import { DisableIpamPolicy } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisableIpamPolicyCommand}.
 */
export interface DisableIpamPolicyCommandInput extends DisableIpamPolicyRequest {}
/**
 * @public
 *
 * The output of {@link DisableIpamPolicyCommand}.
 */
export interface DisableIpamPolicyCommandOutput extends DisableIpamPolicyResult, __MetadataBearer {}

/**
 * <p>Disables an IPAM policy.</p>
 *          <p>An IPAM policy is a set of rules that define how public IPv4 addresses from IPAM pools are allocated to Amazon Web Services resources. Each rule maps an Amazon Web Services service to IPAM pools that the service will use to get IP addresses. A single policy can have multiple rules and be applied to multiple Amazon Web Services Regions. If the IPAM pool run out of addresses then the services fallback to Amazon-provided IP addresses. A policy can be applied to an individual Amazon Web Services account or an entity within Amazon Web Services Organizations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisableIpamPolicyCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisableIpamPolicyCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DisableIpamPolicyRequest
 *   DryRun: true || false,
 *   IpamPolicyId: "STRING_VALUE", // required
 *   OrganizationTargetId: "STRING_VALUE",
 * };
 * const command = new DisableIpamPolicyCommand(input);
 * const response = await client.send(command);
 * // { // DisableIpamPolicyResult
 * //   Return: true || false,
 * // };
 *
 * ```
 *
 * @param DisableIpamPolicyCommandInput - {@link DisableIpamPolicyCommandInput}
 * @returns {@link DisableIpamPolicyCommandOutput}
 * @see {@link DisableIpamPolicyCommandInput} for command's `input` shape.
 * @see {@link DisableIpamPolicyCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DisableIpamPolicyCommand extends $Command
  .classBuilder<
    DisableIpamPolicyCommandInput,
    DisableIpamPolicyCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DisableIpamPolicy", {})
  .n("EC2Client", "DisableIpamPolicyCommand")
  .sc(DisableIpamPolicy)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisableIpamPolicyRequest;
      output: DisableIpamPolicyResult;
    };
    sdk: {
      input: DisableIpamPolicyCommandInput;
      output: DisableIpamPolicyCommandOutput;
    };
  };
}
