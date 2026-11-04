// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartRecommenderRequest, StartRecommenderResponse } from "../models/models_1";
import { StartRecommender$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartRecommenderCommand}.
 */
export interface StartRecommenderCommandInput extends StartRecommenderRequest {}
/**
 * @public
 *
 * The output of {@link StartRecommenderCommand}.
 */
export interface StartRecommenderCommandOutput extends StartRecommenderResponse, __MetadataBearer {}

/**
 * Starts a recommender that was previously stopped. Starting a recommender resumes its ability to generate recommendations.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, StartRecommenderCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, StartRecommenderCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // import type { CustomerProfilesClientConfig } from "@aws-sdk/client-customer-profiles";
 * const config = {}; // type is CustomerProfilesClientConfig
 * const client = new CustomerProfilesClient(config);
 * const input = { // StartRecommenderRequest
 *   DomainName: "STRING_VALUE", // required
 *   RecommenderName: "STRING_VALUE", // required
 * };
 * const command = new StartRecommenderCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StartRecommenderCommandInput - {@link StartRecommenderCommandInput}
 * @returns {@link StartRecommenderCommandOutput}
 * @see {@link StartRecommenderCommandInput} for command's `input` shape.
 * @see {@link StartRecommenderCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for CustomerProfilesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The input you provided is invalid.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal service error occurred.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource does not exist, or access was denied.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * You exceeded the maximum number of requests.
 *
 * @throws {@link CustomerProfilesServiceException}
 *
 * Base exception class for all service exceptions from CustomerProfiles service.
 *
 * @public
 */
export class StartRecommenderCommand extends command<StartRecommenderCommandInput, StartRecommenderCommandOutput>(
  _ep0,
  _mw0,
  "StartRecommender",
  StartRecommender$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartRecommenderRequest;
      output: {};
    };
    sdk: {
      input: StartRecommenderCommandInput;
      output: StartRecommenderCommandOutput;
    };
  };
}
