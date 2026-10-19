// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetClientVpnEndpointAuthorizationPolicyRequest,
  GetClientVpnEndpointAuthorizationPolicyResult,
} from "../models/models_6";
import { GetClientVpnEndpointAuthorizationPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetClientVpnEndpointAuthorizationPolicyCommand}.
 */
export interface GetClientVpnEndpointAuthorizationPolicyCommandInput extends GetClientVpnEndpointAuthorizationPolicyRequest {}
/**
 * @public
 *
 * The output of {@link GetClientVpnEndpointAuthorizationPolicyCommand}.
 */
export interface GetClientVpnEndpointAuthorizationPolicyCommandOutput extends GetClientVpnEndpointAuthorizationPolicyResult, __MetadataBearer {}

/**
 * <p>Describes the authorization policy for a Client VPN endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetClientVpnEndpointAuthorizationPolicyCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetClientVpnEndpointAuthorizationPolicyCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // GetClientVpnEndpointAuthorizationPolicyRequest
 *   ClientVpnEndpointId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new GetClientVpnEndpointAuthorizationPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetClientVpnEndpointAuthorizationPolicyResult
 * //   ClientVpnEndpointId: "STRING_VALUE",
 * //   PolicyDocument: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   ShadowMode: "enabled" || "disabled",
 * //   Status: "creating" || "updating" || "active" || "failed" || "deleting",
 * // };
 *
 * ```
 *
 * @param GetClientVpnEndpointAuthorizationPolicyCommandInput - {@link GetClientVpnEndpointAuthorizationPolicyCommandInput}
 * @returns {@link GetClientVpnEndpointAuthorizationPolicyCommandOutput}
 * @see {@link GetClientVpnEndpointAuthorizationPolicyCommandInput} for command's `input` shape.
 * @see {@link GetClientVpnEndpointAuthorizationPolicyCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class GetClientVpnEndpointAuthorizationPolicyCommand extends command<GetClientVpnEndpointAuthorizationPolicyCommandInput, GetClientVpnEndpointAuthorizationPolicyCommandOutput>(
  _ep0,
  _mw0,
  "GetClientVpnEndpointAuthorizationPolicy",
  GetClientVpnEndpointAuthorizationPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetClientVpnEndpointAuthorizationPolicyRequest;
      output: GetClientVpnEndpointAuthorizationPolicyResult;
    };
    sdk: {
      input: GetClientVpnEndpointAuthorizationPolicyCommandInput;
      output: GetClientVpnEndpointAuthorizationPolicyCommandOutput;
    };
  };
}
