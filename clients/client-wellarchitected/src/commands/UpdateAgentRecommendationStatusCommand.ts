// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  UpdateAgentRecommendationStatusRequest,
  UpdateAgentRecommendationStatusResponse,
} from "../models/models_0";
import { UpdateAgentRecommendationStatus$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateAgentRecommendationStatusCommand}.
 */
export interface UpdateAgentRecommendationStatusCommandInput extends UpdateAgentRecommendationStatusRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAgentRecommendationStatusCommand}.
 */
export interface UpdateAgentRecommendationStatusCommandOutput extends UpdateAgentRecommendationStatusResponse, __MetadataBearer {}

/**
 * <p>Updates the status of a recommendation to track its progress through the implementation lifecycle.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, UpdateAgentRecommendationStatusCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, UpdateAgentRecommendationStatusCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // import type { WellArchitectedClientConfig } from "@aws-sdk/client-wellarchitected";
 * const config = {}; // type is WellArchitectedClientConfig
 * const client = new WellArchitectedClient(config);
 * const input = { // UpdateAgentRecommendationStatusRequest
 *   recommendationArn: "STRING_VALUE", // required
 *   status: "ACTIVE" || "SUPPRESSED" || "COMPLETED", // required
 *   updateReason: "STRING_VALUE",
 * };
 * const command = new UpdateAgentRecommendationStatusCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateAgentRecommendationStatusCommandInput - {@link UpdateAgentRecommendationStatusCommandInput}
 * @returns {@link UpdateAgentRecommendationStatusCommandOutput}
 * @see {@link UpdateAgentRecommendationStatusCommandInput} for command's `input` shape.
 * @see {@link UpdateAgentRecommendationStatusCommandOutput} for command's `response` shape.
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
export class UpdateAgentRecommendationStatusCommand extends command<UpdateAgentRecommendationStatusCommandInput, UpdateAgentRecommendationStatusCommandOutput>(
  _ep0,
  _mw0,
  "UpdateAgentRecommendationStatus",
  UpdateAgentRecommendationStatus$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAgentRecommendationStatusRequest;
      output: {};
    };
    sdk: {
      input: UpdateAgentRecommendationStatusCommandInput;
      output: UpdateAgentRecommendationStatusCommandOutput;
    };
  };
}
