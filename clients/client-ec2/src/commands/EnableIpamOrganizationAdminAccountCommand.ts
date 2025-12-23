// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  EnableIpamOrganizationAdminAccountRequest,
  EnableIpamOrganizationAdminAccountResult,
} from "../models/models_5";
import { EnableIpamOrganizationAdminAccount$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link EnableIpamOrganizationAdminAccountCommand}.
 */
export interface EnableIpamOrganizationAdminAccountCommandInput extends EnableIpamOrganizationAdminAccountRequest {}
/**
 * @public
 *
 * The output of {@link EnableIpamOrganizationAdminAccountCommand}.
 */
export interface EnableIpamOrganizationAdminAccountCommandOutput extends EnableIpamOrganizationAdminAccountResult, __MetadataBearer {}

/**
 * <p>Enable an Organizations member account as the IPAM admin account. You cannot select the Organizations management account as the IPAM admin account. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/enable-integ-ipam.html">Enable integration with Organizations</a> in the <i>Amazon VPC IPAM User Guide</i>.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, EnableIpamOrganizationAdminAccountCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, EnableIpamOrganizationAdminAccountCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // EnableIpamOrganizationAdminAccountRequest
 *   DryRun: true || false,
 *   DelegatedAdminAccountId: "STRING_VALUE", // required
 * };
 * const command = new EnableIpamOrganizationAdminAccountCommand(input);
 * const response = await client.send(command);
 * // { // EnableIpamOrganizationAdminAccountResult
 * //   Success: true || false,
 * // };
 *
 * ```
 *
 * @param EnableIpamOrganizationAdminAccountCommandInput - {@link EnableIpamOrganizationAdminAccountCommandInput}
 * @returns {@link EnableIpamOrganizationAdminAccountCommandOutput}
 * @see {@link EnableIpamOrganizationAdminAccountCommandInput} for command's `input` shape.
 * @see {@link EnableIpamOrganizationAdminAccountCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class EnableIpamOrganizationAdminAccountCommand extends $Command
  .classBuilder<
    EnableIpamOrganizationAdminAccountCommandInput,
    EnableIpamOrganizationAdminAccountCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "EnableIpamOrganizationAdminAccount", {})
  .n("EC2Client", "EnableIpamOrganizationAdminAccountCommand")
  .sc(EnableIpamOrganizationAdminAccount$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: EnableIpamOrganizationAdminAccountRequest;
      output: EnableIpamOrganizationAdminAccountResult;
    };
    sdk: {
      input: EnableIpamOrganizationAdminAccountCommandInput;
      output: EnableIpamOrganizationAdminAccountCommandOutput;
    };
  };
}
