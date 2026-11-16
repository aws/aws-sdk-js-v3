// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep1, _mw0, command } from "../commandBuilder";
import type {
  DeleteAgentRecommendationPolicyRequest,
  DeleteAgentRecommendationPolicyResponse,
} from "../models/models_0";
import { DeleteAgentRecommendationPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteAgentRecommendationPolicyCommand}.
 */
export interface DeleteAgentRecommendationPolicyCommandInput extends DeleteAgentRecommendationPolicyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAgentRecommendationPolicyCommand}.
 */
export interface DeleteAgentRecommendationPolicyCommandOutput extends DeleteAgentRecommendationPolicyResponse, __MetadataBearer {}

/**
 * <p>Removes the resource-based policy from an individual Agent Recommendation. This revokes all cross-account access previously granted by the policy. The recommendation owner or any principal with profile write access on the parent profile can call this operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, DeleteAgentRecommendationPolicyCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, DeleteAgentRecommendationPolicyCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // import type { WellArchitectedClientConfig } from "@aws-sdk/client-wellarchitected";
 * const config = {}; // type is WellArchitectedClientConfig
 * const client = new WellArchitectedClient(config);
 * const input = { // DeleteAgentRecommendationPolicyRequest
 *   recommendationArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteAgentRecommendationPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAgentRecommendationPolicyCommandInput - {@link DeleteAgentRecommendationPolicyCommandInput}
 * @returns {@link DeleteAgentRecommendationPolicyCommandOutput}
 * @see {@link DeleteAgentRecommendationPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteAgentRecommendationPolicyCommandOutput} for command's `response` shape.
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
export class DeleteAgentRecommendationPolicyCommand extends command<DeleteAgentRecommendationPolicyCommandInput, DeleteAgentRecommendationPolicyCommandOutput>(
  _ep1,
  _mw0,
  "DeleteAgentRecommendationPolicy",
  DeleteAgentRecommendationPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAgentRecommendationPolicyRequest;
      output: {};
    };
    sdk: {
      input: DeleteAgentRecommendationPolicyCommandInput;
      output: DeleteAgentRecommendationPolicyCommandOutput;
    };
  };
}
