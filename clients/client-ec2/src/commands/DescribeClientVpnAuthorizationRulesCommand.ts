// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeClientVpnAuthorizationRulesRequest,
  DescribeClientVpnAuthorizationRulesResult,
} from "../models/models_4";
import {
  de_DescribeClientVpnAuthorizationRulesCommand,
  se_DescribeClientVpnAuthorizationRulesCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeClientVpnAuthorizationRulesCommand}.
 */
export interface DescribeClientVpnAuthorizationRulesCommandInput extends DescribeClientVpnAuthorizationRulesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeClientVpnAuthorizationRulesCommand}.
 */
export interface DescribeClientVpnAuthorizationRulesCommandOutput
  extends DescribeClientVpnAuthorizationRulesResult,
    __MetadataBearer {}

/**
 * <p>Describes the authorization rules for a specified Client VPN endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeClientVpnAuthorizationRulesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeClientVpnAuthorizationRulesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeClientVpnAuthorizationRulesRequest
 *   ClientVpnEndpointId: "STRING_VALUE", // required
 *   DryRun: true || false,
 *   NextToken: "STRING_VALUE",
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeClientVpnAuthorizationRulesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeClientVpnAuthorizationRulesResult
 * //   AuthorizationRules: [ // AuthorizationRuleSet
 * //     { // AuthorizationRule
 * //       ClientVpnEndpointId: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       GroupId: "STRING_VALUE",
 * //       AccessAll: true || false,
 * //       DestinationCidr: "STRING_VALUE",
 * //       Status: { // ClientVpnAuthorizationRuleStatus
 * //         Code: "authorizing" || "active" || "failed" || "revoking",
 * //         Message: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeClientVpnAuthorizationRulesCommandInput - {@link DescribeClientVpnAuthorizationRulesCommandInput}
 * @returns {@link DescribeClientVpnAuthorizationRulesCommandOutput}
 * @see {@link DescribeClientVpnAuthorizationRulesCommandInput} for command's `input` shape.
 * @see {@link DescribeClientVpnAuthorizationRulesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeClientVpnAuthorizationRulesCommand extends $Command
  .classBuilder<
    DescribeClientVpnAuthorizationRulesCommandInput,
    DescribeClientVpnAuthorizationRulesCommandOutput,
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
  .s("AmazonEC2", "DescribeClientVpnAuthorizationRules", {})
  .n("EC2Client", "DescribeClientVpnAuthorizationRulesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeClientVpnAuthorizationRulesCommand)
  .de(de_DescribeClientVpnAuthorizationRulesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeClientVpnAuthorizationRulesRequest;
      output: DescribeClientVpnAuthorizationRulesResult;
    };
    sdk: {
      input: DescribeClientVpnAuthorizationRulesCommandInput;
      output: DescribeClientVpnAuthorizationRulesCommandOutput;
    };
  };
}
