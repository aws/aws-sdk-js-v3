// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeIpamPoliciesRequest, DescribeIpamPoliciesResult } from "../models/models_4";
import { DescribeIpamPolicies } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeIpamPoliciesCommand}.
 */
export interface DescribeIpamPoliciesCommandInput extends DescribeIpamPoliciesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeIpamPoliciesCommand}.
 */
export interface DescribeIpamPoliciesCommandOutput extends DescribeIpamPoliciesResult, __MetadataBearer {}

/**
 * <p>Describes one or more IPAM policies.</p>
 *          <p>An IPAM policy is a set of rules that define how public IPv4 addresses from IPAM pools are allocated to Amazon Web Services resources. Each rule maps an Amazon Web Services service to IPAM pools that the service will use to get IP addresses. A single policy can have multiple rules and be applied to multiple Amazon Web Services Regions. If the IPAM pool run out of addresses then the services fallback to Amazon-provided IP addresses. A policy can be applied to an individual Amazon Web Services account or an entity within Amazon Web Services Organizations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeIpamPoliciesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeIpamPoliciesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeIpamPoliciesRequest
 *   DryRun: true || false,
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
 *   IpamPolicyIds: [
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeIpamPoliciesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeIpamPoliciesResult
 * //   NextToken: "STRING_VALUE",
 * //   IpamPolicies: [ // IpamPolicySet
 * //     { // IpamPolicy
 * //       OwnerId: "STRING_VALUE",
 * //       IpamPolicyId: "STRING_VALUE",
 * //       IpamPolicyArn: "STRING_VALUE",
 * //       IpamPolicyRegion: "STRING_VALUE",
 * //       State: "create-in-progress" || "create-complete" || "create-failed" || "modify-in-progress" || "modify-complete" || "modify-failed" || "delete-in-progress" || "delete-complete" || "delete-failed" || "isolate-in-progress" || "isolate-complete" || "restore-in-progress",
 * //       StateMessage: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       IpamId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeIpamPoliciesCommandInput - {@link DescribeIpamPoliciesCommandInput}
 * @returns {@link DescribeIpamPoliciesCommandOutput}
 * @see {@link DescribeIpamPoliciesCommandInput} for command's `input` shape.
 * @see {@link DescribeIpamPoliciesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeIpamPoliciesCommand extends $Command
  .classBuilder<
    DescribeIpamPoliciesCommandInput,
    DescribeIpamPoliciesCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DescribeIpamPolicies", {})
  .n("EC2Client", "DescribeIpamPoliciesCommand")
  .sc(DescribeIpamPolicies)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeIpamPoliciesRequest;
      output: DescribeIpamPoliciesResult;
    };
    sdk: {
      input: DescribeIpamPoliciesCommandInput;
      output: DescribeIpamPoliciesCommandOutput;
    };
  };
}
