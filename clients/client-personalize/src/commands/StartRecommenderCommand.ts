// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { StartRecommenderRequest, StartRecommenderResponse } from "../models/models_0";
import type { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { StartRecommender$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Starts a recommender that is INACTIVE. Starting a recommender does not
 *       create any new models, but resumes billing and automatic retraining for the recommender.</p>
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
 *  <p>Provide a valid value for the field or parameter.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The specified resource is in use.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Could not find the specified resource.</p>
 *
 * @throws {@link PersonalizeServiceException}
 * <p>Base exception class for all service exceptions from Personalize service.</p>
 *
 *
 * @public
 */
export class StartRecommenderCommand extends $Command
  .classBuilder<
    StartRecommenderCommandInput,
    StartRecommenderCommandOutput,
    PersonalizeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PersonalizeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonPersonalize", "StartRecommender", {})
  .n("PersonalizeClient", "StartRecommenderCommand")
  .sc(StartRecommender$)
  .build() {
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
