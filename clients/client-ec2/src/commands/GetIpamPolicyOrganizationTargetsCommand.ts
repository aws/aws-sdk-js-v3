// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  GetIpamPolicyOrganizationTargetsRequest,
  GetIpamPolicyOrganizationTargetsResult,
} from "../models/models_6";
import { GetIpamPolicyOrganizationTargets$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetIpamPolicyOrganizationTargetsCommand}.
 */
export interface GetIpamPolicyOrganizationTargetsCommandInput extends GetIpamPolicyOrganizationTargetsRequest {}
/**
 * @public
 *
 * The output of {@link GetIpamPolicyOrganizationTargetsCommand}.
 */
export interface GetIpamPolicyOrganizationTargetsCommandOutput extends GetIpamPolicyOrganizationTargetsResult, __MetadataBearer {}

/**
 * <p>Gets the Amazon Web Services Organizations targets for an IPAM policy.</p>
 *          <p>An IPAM policy is a set of rules that define how public IPv4 addresses from IPAM pools are allocated to Amazon Web Services resources. Each rule maps an Amazon Web Services service to IPAM pools that the service will use to get IP addresses. A single policy can have multiple rules and be applied to multiple Amazon Web Services Regions. If the IPAM pool run out of addresses then the services fallback to Amazon-provided IP addresses. A policy can be applied to an individual Amazon Web Services account or an entity within Amazon Web Services Organizations.</p>
 *          <p>A target can be an individual Amazon Web Services account or an entity within an Amazon Web Services Organization to which an IPAM policy can be applied.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetIpamPolicyOrganizationTargetsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetIpamPolicyOrganizationTargetsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // GetIpamPolicyOrganizationTargetsRequest
 *   DryRun: true || false,
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   IpamPolicyId: "STRING_VALUE", // required
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new GetIpamPolicyOrganizationTargetsCommand(input);
 * const response = await client.send(command);
 * // { // GetIpamPolicyOrganizationTargetsResult
 * //   OrganizationTargets: [ // IpamPolicyOrganizationTargetSet
 * //     { // IpamPolicyOrganizationTarget
 * //       OrganizationTargetId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetIpamPolicyOrganizationTargetsCommandInput - {@link GetIpamPolicyOrganizationTargetsCommandInput}
 * @returns {@link GetIpamPolicyOrganizationTargetsCommandOutput}
 * @see {@link GetIpamPolicyOrganizationTargetsCommandInput} for command's `input` shape.
 * @see {@link GetIpamPolicyOrganizationTargetsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class GetIpamPolicyOrganizationTargetsCommand extends $Command
  .classBuilder<
    GetIpamPolicyOrganizationTargetsCommandInput,
    GetIpamPolicyOrganizationTargetsCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "GetIpamPolicyOrganizationTargets", {})
  .n("EC2Client", "GetIpamPolicyOrganizationTargetsCommand")
  .sc(GetIpamPolicyOrganizationTargets$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetIpamPolicyOrganizationTargetsRequest;
      output: GetIpamPolicyOrganizationTargetsResult;
    };
    sdk: {
      input: GetIpamPolicyOrganizationTargetsCommandInput;
      output: GetIpamPolicyOrganizationTargetsCommandOutput;
    };
  };
}
