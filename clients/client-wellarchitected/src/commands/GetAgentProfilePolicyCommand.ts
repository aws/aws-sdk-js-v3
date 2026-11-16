// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep1, _mw0, command } from "../commandBuilder";
import type { GetAgentProfilePolicyRequest, GetAgentProfilePolicyResponse } from "../models/models_0";
import { GetAgentProfilePolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetAgentProfilePolicyCommand}.
 */
export interface GetAgentProfilePolicyCommandInput extends GetAgentProfilePolicyRequest {}
/**
 * @public
 *
 * The output of {@link GetAgentProfilePolicyCommand}.
 */
export interface GetAgentProfilePolicyCommandOutput extends GetAgentProfilePolicyResponse, __MetadataBearer {}

/**
 * <p>Retrieves the resource-based policy attached to an Agent Profile. Only the profile owner can call this operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, GetAgentProfilePolicyCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, GetAgentProfilePolicyCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // import type { WellArchitectedClientConfig } from "@aws-sdk/client-wellarchitected";
 * const config = {}; // type is WellArchitectedClientConfig
 * const client = new WellArchitectedClient(config);
 * const input = { // GetAgentProfilePolicyRequest
 *   profileArn: "STRING_VALUE", // required
 * };
 * const command = new GetAgentProfilePolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetAgentProfilePolicyResponse
 * //   profileArn: "STRING_VALUE", // required
 * //   policy: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GetAgentProfilePolicyCommandInput - {@link GetAgentProfilePolicyCommandInput}
 * @returns {@link GetAgentProfilePolicyCommandOutput}
 * @see {@link GetAgentProfilePolicyCommandInput} for command's `input` shape.
 * @see {@link GetAgentProfilePolicyCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for WellArchitectedClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is a problem with the Well-Architected Tool API service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The user input is not valid.</p>
 *
 * @throws {@link WellArchitectedServiceException}
 * <p>Base exception class for all service exceptions from WellArchitected service.</p>
 *
 *
 * @public
 */
export class GetAgentProfilePolicyCommand extends command<GetAgentProfilePolicyCommandInput, GetAgentProfilePolicyCommandOutput>(
  _ep1,
  _mw0,
  "GetAgentProfilePolicy",
  GetAgentProfilePolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAgentProfilePolicyRequest;
      output: GetAgentProfilePolicyResponse;
    };
    sdk: {
      input: GetAgentProfilePolicyCommandInput;
      output: GetAgentProfilePolicyCommandOutput;
    };
  };
}
