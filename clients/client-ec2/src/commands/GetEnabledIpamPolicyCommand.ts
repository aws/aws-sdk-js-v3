// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetEnabledIpamPolicyRequest, GetEnabledIpamPolicyResult } from "../models/models_5";
import { GetEnabledIpamPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetEnabledIpamPolicyCommand}.
 */
export interface GetEnabledIpamPolicyCommandInput extends GetEnabledIpamPolicyRequest {}
/**
 * @public
 *
 * The output of {@link GetEnabledIpamPolicyCommand}.
 */
export interface GetEnabledIpamPolicyCommandOutput extends GetEnabledIpamPolicyResult, __MetadataBearer {}

/**
 * <p>Gets the enabled IPAM policy.</p>
 *          <p>An IPAM policy is a set of rules that define how public IPv4 addresses from IPAM pools are allocated to Amazon Web Services resources. Each rule maps an Amazon Web Services service to IPAM pools that the service will use to get IP addresses. A single policy can have multiple rules and be applied to multiple Amazon Web Services Regions. If the IPAM pool run out of addresses then the services fallback to Amazon-provided IP addresses. A policy can be applied to an individual Amazon Web Services account or an entity within Amazon Web Services Organizations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetEnabledIpamPolicyCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetEnabledIpamPolicyCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // GetEnabledIpamPolicyRequest
 *   DryRun: true || false,
 * };
 * const command = new GetEnabledIpamPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetEnabledIpamPolicyResult
 * //   IpamPolicyEnabled: true || false,
 * //   IpamPolicyId: "STRING_VALUE",
 * //   ManagedBy: "account" || "delegated-administrator-for-ipam",
 * // };
 *
 * ```
 *
 * @param GetEnabledIpamPolicyCommandInput - {@link GetEnabledIpamPolicyCommandInput}
 * @returns {@link GetEnabledIpamPolicyCommandOutput}
 * @see {@link GetEnabledIpamPolicyCommandInput} for command's `input` shape.
 * @see {@link GetEnabledIpamPolicyCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class GetEnabledIpamPolicyCommand extends $Command
  .classBuilder<
    GetEnabledIpamPolicyCommandInput,
    GetEnabledIpamPolicyCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "GetEnabledIpamPolicy", {})
  .n("EC2Client", "GetEnabledIpamPolicyCommand")
  .sc(GetEnabledIpamPolicy$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetEnabledIpamPolicyRequest;
      output: GetEnabledIpamPolicyResult;
    };
    sdk: {
      input: GetEnabledIpamPolicyCommandInput;
      output: GetEnabledIpamPolicyCommandOutput;
    };
  };
}
