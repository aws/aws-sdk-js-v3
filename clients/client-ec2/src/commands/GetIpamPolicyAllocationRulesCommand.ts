// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetIpamPolicyAllocationRulesRequest, GetIpamPolicyAllocationRulesResult } from "../models/models_5";
import { GetIpamPolicyAllocationRules } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetIpamPolicyAllocationRulesCommand}.
 */
export interface GetIpamPolicyAllocationRulesCommandInput extends GetIpamPolicyAllocationRulesRequest {}
/**
 * @public
 *
 * The output of {@link GetIpamPolicyAllocationRulesCommand}.
 */
export interface GetIpamPolicyAllocationRulesCommandOutput
  extends GetIpamPolicyAllocationRulesResult,
    __MetadataBearer {}

/**
 * <p>Gets the allocation rules for an IPAM policy.</p>
 *          <p>An IPAM policy is a set of rules that define how public IPv4 addresses from IPAM pools are allocated to Amazon Web Services resources. Each rule maps an Amazon Web Services service to IPAM pools that the service will use to get IP addresses. A single policy can have multiple rules and be applied to multiple Amazon Web Services Regions. If the IPAM pool run out of addresses then the services fallback to Amazon-provided IP addresses. A policy can be applied to an individual Amazon Web Services account or an entity within Amazon Web Services Organizations.</p>
 *          <p>Allocation rules are optional configurations within an IPAM policy that map Amazon Web Services resource types to specific IPAM pools. If no rules are defined, the resource types default to using Amazon-provided IP addresses.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetIpamPolicyAllocationRulesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetIpamPolicyAllocationRulesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // GetIpamPolicyAllocationRulesRequest
 *   DryRun: true || false,
 *   IpamPolicyId: "STRING_VALUE", // required
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   Locale: "STRING_VALUE",
 *   ResourceType: "alb" || "eip" || "rds" || "rnat",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetIpamPolicyAllocationRulesCommand(input);
 * const response = await client.send(command);
 * // { // GetIpamPolicyAllocationRulesResult
 * //   IpamPolicyDocuments: [ // IpamPolicyDocumentSet
 * //     { // IpamPolicyDocument
 * //       IpamPolicyId: "STRING_VALUE",
 * //       Locale: "STRING_VALUE",
 * //       ResourceType: "alb" || "eip" || "rds" || "rnat",
 * //       AllocationRules: [ // IpamPolicyAllocationRuleList
 * //         { // IpamPolicyAllocationRule
 * //           SourceIpamPoolId: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetIpamPolicyAllocationRulesCommandInput - {@link GetIpamPolicyAllocationRulesCommandInput}
 * @returns {@link GetIpamPolicyAllocationRulesCommandOutput}
 * @see {@link GetIpamPolicyAllocationRulesCommandInput} for command's `input` shape.
 * @see {@link GetIpamPolicyAllocationRulesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class GetIpamPolicyAllocationRulesCommand extends $Command
  .classBuilder<
    GetIpamPolicyAllocationRulesCommandInput,
    GetIpamPolicyAllocationRulesCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "GetIpamPolicyAllocationRules", {})
  .n("EC2Client", "GetIpamPolicyAllocationRulesCommand")
  .sc(GetIpamPolicyAllocationRules)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetIpamPolicyAllocationRulesRequest;
      output: GetIpamPolicyAllocationRulesResult;
    };
    sdk: {
      input: GetIpamPolicyAllocationRulesCommandInput;
      output: GetIpamPolicyAllocationRulesCommandOutput;
    };
  };
}
