// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartRecommenderRequest, StartRecommenderResponse } from "../models/models_0";
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
 * Starts a recommender that is INACTIVE. Starting a recommender does not create any new models, but resumes billing and automatic retraining for the recommender.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, StartRecommenderCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, StartRecommenderCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * // import type { PersonalizeClientConfig } from "@aws-sdk/client-personalize";
 * const config = {}; // type is PersonalizeClientConfig
 * const client = new PersonalizeClient(config);
 * const input = { // StartRecommenderRequest
 *   recommenderArn: "STRING_VALUE", // required
 * };
 * const command = new StartRecommenderCommand(input);
 * const response = await client.send(command);
 * // { // StartRecommenderResponse
 * //   recommenderArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartRecommenderCommandInput - {@link StartRecommenderCommandInput}
 * @returns {@link StartRecommenderCommandOutput}
 * @see {@link StartRecommenderCommandInput} for command's `input` shape.
 * @see {@link StartRecommenderCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for PersonalizeClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * Provide a valid value for the field or parameter.
 *
 * @throws {@link ResourceInUseException} (client fault)
 *
 * The specified resource is in use.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Could not find the specified resource.
 *
 * @throws {@link PersonalizeServiceException}
 *
 * Base exception class for all service exceptions from Personalize service.
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
      output: StartRecommenderResponse;
    };
    sdk: {
      input: StartRecommenderCommandInput;
      output: StartRecommenderCommandOutput;
    };
  };
}
