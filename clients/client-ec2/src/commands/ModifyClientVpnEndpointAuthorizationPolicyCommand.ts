// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ModifyClientVpnEndpointAuthorizationPolicyRequest,
  ModifyClientVpnEndpointAuthorizationPolicyResult,
} from "../models/models_7";
import { ModifyClientVpnEndpointAuthorizationPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ModifyClientVpnEndpointAuthorizationPolicyCommand}.
 */
export interface ModifyClientVpnEndpointAuthorizationPolicyCommandInput extends ModifyClientVpnEndpointAuthorizationPolicyRequest {}
/**
 * @public
 *
 * The output of {@link ModifyClientVpnEndpointAuthorizationPolicyCommand}.
 */
export interface ModifyClientVpnEndpointAuthorizationPolicyCommandOutput extends ModifyClientVpnEndpointAuthorizationPolicyResult, __MetadataBearer {}

/**
 * <p>Creates or updates the authorization policy for a Client VPN endpoint. A Client VPN endpoint can have one authorization policy. If a policy already exists for the endpoint, the values that you specify replace the corresponding values in the existing policy, and values that you do not specify remain unchanged.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyClientVpnEndpointAuthorizationPolicyCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyClientVpnEndpointAuthorizationPolicyCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // ModifyClientVpnEndpointAuthorizationPolicyRequest
 *   ClientVpnEndpointId: "STRING_VALUE", // required
 *   PolicyDocument: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   ShadowMode: "enabled" || "disabled",
 *   ClientToken: "STRING_VALUE",
 *   DryRun: true || false,
 * };
 * const command = new ModifyClientVpnEndpointAuthorizationPolicyCommand(input);
 * const response = await client.send(command);
 * // { // ModifyClientVpnEndpointAuthorizationPolicyResult
 * //   Status: "creating" || "updating" || "active" || "failed" || "deleting",
 * // };
 *
 * ```
 *
 * @param ModifyClientVpnEndpointAuthorizationPolicyCommandInput - {@link ModifyClientVpnEndpointAuthorizationPolicyCommandInput}
 * @returns {@link ModifyClientVpnEndpointAuthorizationPolicyCommandOutput}
 * @see {@link ModifyClientVpnEndpointAuthorizationPolicyCommandInput} for command's `input` shape.
 * @see {@link ModifyClientVpnEndpointAuthorizationPolicyCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class ModifyClientVpnEndpointAuthorizationPolicyCommand extends command<ModifyClientVpnEndpointAuthorizationPolicyCommandInput, ModifyClientVpnEndpointAuthorizationPolicyCommandOutput>(
  _ep0,
  _mw0,
  "ModifyClientVpnEndpointAuthorizationPolicy",
  ModifyClientVpnEndpointAuthorizationPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyClientVpnEndpointAuthorizationPolicyRequest;
      output: ModifyClientVpnEndpointAuthorizationPolicyResult;
    };
    sdk: {
      input: ModifyClientVpnEndpointAuthorizationPolicyCommandInput;
      output: ModifyClientVpnEndpointAuthorizationPolicyCommandOutput;
    };
  };
}
