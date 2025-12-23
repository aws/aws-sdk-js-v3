// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetIpamPrefixListResolverRulesRequest, GetIpamPrefixListResolverRulesResult } from "../models/models_6";
import { GetIpamPrefixListResolverRules$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetIpamPrefixListResolverRulesCommand}.
 */
export interface GetIpamPrefixListResolverRulesCommandInput extends GetIpamPrefixListResolverRulesRequest {}
/**
 * @public
 *
 * The output of {@link GetIpamPrefixListResolverRulesCommand}.
 */
export interface GetIpamPrefixListResolverRulesCommandOutput extends GetIpamPrefixListResolverRulesResult, __MetadataBearer {}

/**
 * <p>Retrieves the CIDR selection rules for an IPAM prefix list resolver. Use this operation to view the business logic that determines which CIDRs are selected for synchronization with prefix lists.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetIpamPrefixListResolverRulesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetIpamPrefixListResolverRulesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // GetIpamPrefixListResolverRulesRequest
 *   DryRun: true || false,
 *   IpamPrefixListResolverId: "STRING_VALUE", // required
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetIpamPrefixListResolverRulesCommand(input);
 * const response = await client.send(command);
 * // { // GetIpamPrefixListResolverRulesResult
 * //   Rules: [ // IpamPrefixListResolverRuleSet
 * //     { // IpamPrefixListResolverRule
 * //       RuleType: "static-cidr" || "ipam-resource-cidr" || "ipam-pool-cidr",
 * //       StaticCidr: "STRING_VALUE",
 * //       IpamScopeId: "STRING_VALUE",
 * //       ResourceType: "vpc" || "subnet" || "eip" || "public-ipv4-pool" || "ipv6-pool" || "eni" || "anycast-ip-list",
 * //       Conditions: [ // IpamPrefixListResolverRuleConditionSet
 * //         { // IpamPrefixListResolverRuleCondition
 * //           Operation: "equals" || "not-equals" || "subnet-of",
 * //           IpamPoolId: "STRING_VALUE",
 * //           ResourceId: "STRING_VALUE",
 * //           ResourceOwner: "STRING_VALUE",
 * //           ResourceRegion: "STRING_VALUE",
 * //           ResourceTag: { // IpamResourceTag
 * //             Key: "STRING_VALUE",
 * //             Value: "STRING_VALUE",
 * //           },
 * //           Cidr: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetIpamPrefixListResolverRulesCommandInput - {@link GetIpamPrefixListResolverRulesCommandInput}
 * @returns {@link GetIpamPrefixListResolverRulesCommandOutput}
 * @see {@link GetIpamPrefixListResolverRulesCommandInput} for command's `input` shape.
 * @see {@link GetIpamPrefixListResolverRulesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class GetIpamPrefixListResolverRulesCommand extends $Command
  .classBuilder<
    GetIpamPrefixListResolverRulesCommandInput,
    GetIpamPrefixListResolverRulesCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "GetIpamPrefixListResolverRules", {})
  .n("EC2Client", "GetIpamPrefixListResolverRulesCommand")
  .sc(GetIpamPrefixListResolverRules$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetIpamPrefixListResolverRulesRequest;
      output: GetIpamPrefixListResolverRulesResult;
    };
    sdk: {
      input: GetIpamPrefixListResolverRulesCommandInput;
      output: GetIpamPrefixListResolverRulesCommandOutput;
    };
  };
}
