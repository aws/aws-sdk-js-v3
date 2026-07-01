// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RevokeClientVpnIngressRequest, RevokeClientVpnIngressResult } from "../models/models_7";
import { RevokeClientVpnIngress$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RevokeClientVpnIngressCommand}.
 */
export interface RevokeClientVpnIngressCommandInput extends RevokeClientVpnIngressRequest {}
/**
 * @public
 *
 * The output of {@link RevokeClientVpnIngressCommand}.
 */
export interface RevokeClientVpnIngressCommandOutput extends RevokeClientVpnIngressResult, __MetadataBearer {}

/**
 * <p>Removes an ingress authorization rule from a Client VPN endpoint. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, RevokeClientVpnIngressCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, RevokeClientVpnIngressCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // RevokeClientVpnIngressRequest
 *   ClientVpnEndpointId: "STRING_VALUE", // required
 *   TargetNetworkCidr: "STRING_VALUE", // required
 *   AccessGroupId: "STRING_VALUE",
 *   RevokeAllGroups: true || false,
 *   DryRun: true || false,
 * };
 * const command = new RevokeClientVpnIngressCommand(input);
 * const response = await client.send(command);
 * // { // RevokeClientVpnIngressResult
 * //   Status: { // ClientVpnAuthorizationRuleStatus
 * //     Code: "authorizing" || "active" || "failed" || "revoking",
 * //     Message: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param RevokeClientVpnIngressCommandInput - {@link RevokeClientVpnIngressCommandInput}
 * @returns {@link RevokeClientVpnIngressCommandOutput}
 * @see {@link RevokeClientVpnIngressCommandInput} for command's `input` shape.
 * @see {@link RevokeClientVpnIngressCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class RevokeClientVpnIngressCommand extends command<RevokeClientVpnIngressCommandInput, RevokeClientVpnIngressCommandOutput>(
  _ep0,
  _mw0,
  "RevokeClientVpnIngress",
  RevokeClientVpnIngress$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RevokeClientVpnIngressRequest;
      output: RevokeClientVpnIngressResult;
    };
    sdk: {
      input: RevokeClientVpnIngressCommandInput;
      output: RevokeClientVpnIngressCommandOutput;
    };
  };
}
