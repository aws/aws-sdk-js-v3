// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DisableIpamOrganizationAdminAccountRequest,
  DisableIpamOrganizationAdminAccountResult,
} from "../models/models_5";
import { DisableIpamOrganizationAdminAccount } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisableIpamOrganizationAdminAccountCommand}.
 */
export interface DisableIpamOrganizationAdminAccountCommandInput extends DisableIpamOrganizationAdminAccountRequest {}
/**
 * @public
 *
 * The output of {@link DisableIpamOrganizationAdminAccountCommand}.
 */
export interface DisableIpamOrganizationAdminAccountCommandOutput
  extends DisableIpamOrganizationAdminAccountResult,
    __MetadataBearer {}

/**
 * <p>Disable the IPAM account. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/enable-integ-ipam.html">Enable integration with Organizations</a> in the <i>Amazon VPC IPAM User Guide</i>.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisableIpamOrganizationAdminAccountCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisableIpamOrganizationAdminAccountCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DisableIpamOrganizationAdminAccountRequest
 *   DryRun: true || false,
 *   DelegatedAdminAccountId: "STRING_VALUE", // required
 * };
 * const command = new DisableIpamOrganizationAdminAccountCommand(input);
 * const response = await client.send(command);
 * // { // DisableIpamOrganizationAdminAccountResult
 * //   Success: true || false,
 * // };
 *
 * ```
 *
 * @param DisableIpamOrganizationAdminAccountCommandInput - {@link DisableIpamOrganizationAdminAccountCommandInput}
 * @returns {@link DisableIpamOrganizationAdminAccountCommandOutput}
 * @see {@link DisableIpamOrganizationAdminAccountCommandInput} for command's `input` shape.
 * @see {@link DisableIpamOrganizationAdminAccountCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DisableIpamOrganizationAdminAccountCommand extends $Command
  .classBuilder<
    DisableIpamOrganizationAdminAccountCommandInput,
    DisableIpamOrganizationAdminAccountCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DisableIpamOrganizationAdminAccount", {})
  .n("EC2Client", "DisableIpamOrganizationAdminAccountCommand")
  .sc(DisableIpamOrganizationAdminAccount)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisableIpamOrganizationAdminAccountRequest;
      output: DisableIpamOrganizationAdminAccountResult;
    };
    sdk: {
      input: DisableIpamOrganizationAdminAccountCommandInput;
      output: DisableIpamOrganizationAdminAccountCommandOutput;
    };
  };
}
