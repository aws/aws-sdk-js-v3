// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyIpamPolicyAllocationRulesRequest, ModifyIpamPolicyAllocationRulesResult } from "../models/models_6";
import { ModifyIpamPolicyAllocationRules } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyIpamPolicyAllocationRulesCommand}.
 */
export interface ModifyIpamPolicyAllocationRulesCommandInput extends ModifyIpamPolicyAllocationRulesRequest {}
/**
 * @public
 *
 * The output of {@link ModifyIpamPolicyAllocationRulesCommand}.
 */
export interface ModifyIpamPolicyAllocationRulesCommandOutput
  extends ModifyIpamPolicyAllocationRulesResult,
    __MetadataBearer {}

/**
 * <p>Modifies the allocation rules in an IPAM policy.</p>
 *          <p>An IPAM policy is a set of rules that define how public IPv4 addresses from IPAM pools are allocated to Amazon Web Services resources. Each rule maps an Amazon Web Services service to IPAM pools that the service will use to get IP addresses. A single policy can have multiple rules and be applied to multiple Amazon Web Services Regions. If the IPAM pool run out of addresses then the services fallback to Amazon-provided IP addresses. A policy can be applied to an individual Amazon Web Services account or an entity within Amazon Web Services Organizations.</p>
 *          <p>Allocation rules are optional configurations within an IPAM policy that map Amazon Web Services resource types to specific IPAM pools. If no rules are defined, the resource types default to using Amazon-provided IP addresses.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyIpamPolicyAllocationRulesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyIpamPolicyAllocationRulesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // ModifyIpamPolicyAllocationRulesRequest
 *   DryRun: true || false,
 *   IpamPolicyId: "STRING_VALUE", // required
 *   Locale: "STRING_VALUE", // required
 *   ResourceType: "alb" || "eip" || "rds" || "rnat", // required
 *   AllocationRules: [ // IpamPolicyAllocationRuleListRequest
 *     { // IpamPolicyAllocationRuleRequest
 *       SourceIpamPoolId: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new ModifyIpamPolicyAllocationRulesCommand(input);
 * const response = await client.send(command);
 * // { // ModifyIpamPolicyAllocationRulesResult
 * //   IpamPolicyDocument: { // IpamPolicyDocument
 * //     IpamPolicyId: "STRING_VALUE",
 * //     Locale: "STRING_VALUE",
 * //     ResourceType: "alb" || "eip" || "rds" || "rnat",
 * //     AllocationRules: [ // IpamPolicyAllocationRuleList
 * //       { // IpamPolicyAllocationRule
 * //         SourceIpamPoolId: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param ModifyIpamPolicyAllocationRulesCommandInput - {@link ModifyIpamPolicyAllocationRulesCommandInput}
 * @returns {@link ModifyIpamPolicyAllocationRulesCommandOutput}
 * @see {@link ModifyIpamPolicyAllocationRulesCommandInput} for command's `input` shape.
 * @see {@link ModifyIpamPolicyAllocationRulesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class ModifyIpamPolicyAllocationRulesCommand extends $Command
  .classBuilder<
    ModifyIpamPolicyAllocationRulesCommandInput,
    ModifyIpamPolicyAllocationRulesCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "ModifyIpamPolicyAllocationRules", {})
  .n("EC2Client", "ModifyIpamPolicyAllocationRulesCommand")
  .sc(ModifyIpamPolicyAllocationRules)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyIpamPolicyAllocationRulesRequest;
      output: ModifyIpamPolicyAllocationRulesResult;
    };
    sdk: {
      input: ModifyIpamPolicyAllocationRulesCommandInput;
      output: ModifyIpamPolicyAllocationRulesCommandOutput;
    };
  };
}
