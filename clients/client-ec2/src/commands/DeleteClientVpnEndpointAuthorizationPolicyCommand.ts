// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DeleteClientVpnEndpointAuthorizationPolicyRequest,
  DeleteClientVpnEndpointAuthorizationPolicyResult,
} from "../models/models_2";
import { DeleteClientVpnEndpointAuthorizationPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteClientVpnEndpointAuthorizationPolicyCommand}.
 */
export interface DeleteClientVpnEndpointAuthorizationPolicyCommandInput extends DeleteClientVpnEndpointAuthorizationPolicyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteClientVpnEndpointAuthorizationPolicyCommand}.
 */
export interface DeleteClientVpnEndpointAuthorizationPolicyCommandOutput extends DeleteClientVpnEndpointAuthorizationPolicyResult, __MetadataBearer {}

/**
 * <p>Deletes the authorization policy for a Client VPN endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteClientVpnEndpointAuthorizationPolicyCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteClientVpnEndpointAuthorizationPolicyCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DeleteClientVpnEndpointAuthorizationPolicyRequest
 *   ClientVpnEndpointId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DeleteClientVpnEndpointAuthorizationPolicyCommand(input);
 * const response = await client.send(command);
 * // { // DeleteClientVpnEndpointAuthorizationPolicyResult
 * //   Status: "creating" || "updating" || "active" || "failed" || "deleting",
 * // };
 *
 * ```
 *
 * @param DeleteClientVpnEndpointAuthorizationPolicyCommandInput - {@link DeleteClientVpnEndpointAuthorizationPolicyCommandInput}
 * @returns {@link DeleteClientVpnEndpointAuthorizationPolicyCommandOutput}
 * @see {@link DeleteClientVpnEndpointAuthorizationPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteClientVpnEndpointAuthorizationPolicyCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DeleteClientVpnEndpointAuthorizationPolicyCommand extends command<DeleteClientVpnEndpointAuthorizationPolicyCommandInput, DeleteClientVpnEndpointAuthorizationPolicyCommandOutput>(
  _ep0,
  _mw0,
  "DeleteClientVpnEndpointAuthorizationPolicy",
  DeleteClientVpnEndpointAuthorizationPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteClientVpnEndpointAuthorizationPolicyRequest;
      output: DeleteClientVpnEndpointAuthorizationPolicyResult;
    };
    sdk: {
      input: DeleteClientVpnEndpointAuthorizationPolicyCommandInput;
      output: DeleteClientVpnEndpointAuthorizationPolicyCommandOutput;
    };
  };
}
