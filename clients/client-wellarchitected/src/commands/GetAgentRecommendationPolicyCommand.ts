// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep1, _mw0, command } from "../commandBuilder";
import type { GetAgentRecommendationPolicyRequest, GetAgentRecommendationPolicyResponse } from "../models/models_0";
import { GetAgentRecommendationPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetAgentRecommendationPolicyCommand}.
 */
export interface GetAgentRecommendationPolicyCommandInput extends GetAgentRecommendationPolicyRequest {}
/**
 * @public
 *
 * The output of {@link GetAgentRecommendationPolicyCommand}.
 */
export interface GetAgentRecommendationPolicyCommandOutput extends GetAgentRecommendationPolicyResponse, __MetadataBearer {}

/**
 * <p>Retrieves the resource-based policy attached to an individual Agent Recommendation. The recommendation owner or any principal with profile write access on the parent profile can call this operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, GetAgentRecommendationPolicyCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, GetAgentRecommendationPolicyCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // import type { WellArchitectedClientConfig } from "@aws-sdk/client-wellarchitected";
 * const config = {}; // type is WellArchitectedClientConfig
 * const client = new WellArchitectedClient(config);
 * const input = { // GetAgentRecommendationPolicyRequest
 *   recommendationArn: "STRING_VALUE", // required
 * };
 * const command = new GetAgentRecommendationPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetAgentRecommendationPolicyResponse
 * //   recommendationArn: "STRING_VALUE", // required
 * //   policy: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GetAgentRecommendationPolicyCommandInput - {@link GetAgentRecommendationPolicyCommandInput}
 * @returns {@link GetAgentRecommendationPolicyCommandOutput}
 * @see {@link GetAgentRecommendationPolicyCommandInput} for command's `input` shape.
 * @see {@link GetAgentRecommendationPolicyCommandOutput} for command's `response` shape.
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
export class GetAgentRecommendationPolicyCommand extends command<GetAgentRecommendationPolicyCommandInput, GetAgentRecommendationPolicyCommandOutput>(
  _ep1,
  _mw0,
  "GetAgentRecommendationPolicy",
  GetAgentRecommendationPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAgentRecommendationPolicyRequest;
      output: GetAgentRecommendationPolicyResponse;
    };
    sdk: {
      input: GetAgentRecommendationPolicyCommandInput;
      output: GetAgentRecommendationPolicyCommandOutput;
    };
  };
}
