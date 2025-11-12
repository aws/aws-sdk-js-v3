// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { AuthorizeClientVpnIngressRequest, AuthorizeClientVpnIngressResult } from "../models/models_0";
import { AuthorizeClientVpnIngress } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AuthorizeClientVpnIngressCommand}.
 */
export interface AuthorizeClientVpnIngressCommandInput extends AuthorizeClientVpnIngressRequest {}
/**
 * @public
 *
 * The output of {@link AuthorizeClientVpnIngressCommand}.
 */
export interface AuthorizeClientVpnIngressCommandOutput extends AuthorizeClientVpnIngressResult, __MetadataBearer {}

/**
 * <p>Adds an ingress authorization rule to a Client VPN endpoint. Ingress authorization rules act as
 * 			firewall rules that grant access to networks. You must configure ingress authorization rules to
 * 			enable clients to access resources in Amazon Web Services or on-premises networks.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AuthorizeClientVpnIngressCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AuthorizeClientVpnIngressCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // AuthorizeClientVpnIngressRequest
 *   ClientVpnEndpointId: "STRING_VALUE", // required
 *   TargetNetworkCidr: "STRING_VALUE", // required
 *   AccessGroupId: "STRING_VALUE",
 *   AuthorizeAllGroups: true || false,
 *   Description: "STRING_VALUE",
 *   ClientToken: "STRING_VALUE",
 *   DryRun: true || false,
 * };
 * const command = new AuthorizeClientVpnIngressCommand(input);
 * const response = await client.send(command);
 * // { // AuthorizeClientVpnIngressResult
 * //   Status: { // ClientVpnAuthorizationRuleStatus
 * //     Code: "authorizing" || "active" || "failed" || "revoking",
 * //     Message: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param AuthorizeClientVpnIngressCommandInput - {@link AuthorizeClientVpnIngressCommandInput}
 * @returns {@link AuthorizeClientVpnIngressCommandOutput}
 * @see {@link AuthorizeClientVpnIngressCommandInput} for command's `input` shape.
 * @see {@link AuthorizeClientVpnIngressCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class AuthorizeClientVpnIngressCommand extends $Command
  .classBuilder<
    AuthorizeClientVpnIngressCommandInput,
    AuthorizeClientVpnIngressCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "AuthorizeClientVpnIngress", {})
  .n("EC2Client", "AuthorizeClientVpnIngressCommand")
  .sc(AuthorizeClientVpnIngress)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AuthorizeClientVpnIngressRequest;
      output: AuthorizeClientVpnIngressResult;
    };
    sdk: {
      input: AuthorizeClientVpnIngressCommandInput;
      output: AuthorizeClientVpnIngressCommandOutput;
    };
  };
}
