// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep1, _mw0, command } from "../commandBuilder";
import type { PutAgentRecommendationPolicyRequest, PutAgentRecommendationPolicyResponse } from "../models/models_0";
import { PutAgentRecommendationPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutAgentRecommendationPolicyCommand}.
 */
export interface PutAgentRecommendationPolicyCommandInput extends PutAgentRecommendationPolicyRequest {}
/**
 * @public
 *
 * The output of {@link PutAgentRecommendationPolicyCommand}.
 */
export interface PutAgentRecommendationPolicyCommandOutput extends PutAgentRecommendationPolicyResponse, __MetadataBearer {}

/**
 * <p>Attaches or replaces a resource-based policy on an individual Agent Recommendation. The policy controls cross-account access to the recommendation and its child resources such as items and remediations. The recommendation owner or any principal with profile write access on the parent profile can call this operation. The policy must be valid IAM JSON with Allow-only statements and no negation condition operators.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, PutAgentRecommendationPolicyCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, PutAgentRecommendationPolicyCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // import type { WellArchitectedClientConfig } from "@aws-sdk/client-wellarchitected";
 * const config = {}; // type is WellArchitectedClientConfig
 * const client = new WellArchitectedClient(config);
 * const input = { // PutAgentRecommendationPolicyRequest
 *   recommendationArn: "STRING_VALUE", // required
 *   policy: "STRING_VALUE", // required
 * };
 * const command = new PutAgentRecommendationPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutAgentRecommendationPolicyCommandInput - {@link PutAgentRecommendationPolicyCommandInput}
 * @returns {@link PutAgentRecommendationPolicyCommandOutput}
 * @see {@link PutAgentRecommendationPolicyCommandInput} for command's `input` shape.
 * @see {@link PutAgentRecommendationPolicyCommandOutput} for command's `response` shape.
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
export class PutAgentRecommendationPolicyCommand extends command<PutAgentRecommendationPolicyCommandInput, PutAgentRecommendationPolicyCommandOutput>(
  _ep1,
  _mw0,
  "PutAgentRecommendationPolicy",
  PutAgentRecommendationPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutAgentRecommendationPolicyRequest;
      output: {};
    };
    sdk: {
      input: PutAgentRecommendationPolicyCommandInput;
      output: PutAgentRecommendationPolicyCommandOutput;
    };
  };
}
