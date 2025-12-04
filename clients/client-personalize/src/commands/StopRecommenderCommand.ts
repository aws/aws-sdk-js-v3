// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { StopRecommenderRequest, StopRecommenderResponse } from "../models/models_0";
import type { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { StopRecommender } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopRecommenderCommand}.
 */
export interface StopRecommenderCommandInput extends StopRecommenderRequest {}
/**
 * @public
 *
 * The output of {@link StopRecommenderCommand}.
 */
export interface StopRecommenderCommandOutput extends StopRecommenderResponse, __MetadataBearer {}

/**
 * <p>Stops a recommender that is ACTIVE. Stopping a recommender halts billing and automatic retraining for the recommender.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, StopRecommenderCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, StopRecommenderCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * // import type { PersonalizeClientConfig } from "@aws-sdk/client-personalize";
 * const config = {}; // type is PersonalizeClientConfig
 * const client = new PersonalizeClient(config);
 * const input = { // StopRecommenderRequest
 *   recommenderArn: "STRING_VALUE", // required
 * };
 * const command = new StopRecommenderCommand(input);
 * const response = await client.send(command);
 * // { // StopRecommenderResponse
 * //   recommenderArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StopRecommenderCommandInput - {@link StopRecommenderCommandInput}
 * @returns {@link StopRecommenderCommandOutput}
 * @see {@link StopRecommenderCommandInput} for command's `input` shape.
 * @see {@link StopRecommenderCommandOutput} for command's `response` shape.
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
export class StopRecommenderCommand extends $Command
  .classBuilder<
    StopRecommenderCommandInput,
    StopRecommenderCommandOutput,
    PersonalizeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PersonalizeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonPersonalize", "StopRecommender", {})
  .n("PersonalizeClient", "StopRecommenderCommand")
  .sc(StopRecommender)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopRecommenderRequest;
      output: StopRecommenderResponse;
    };
    sdk: {
      input: StopRecommenderCommandInput;
      output: StopRecommenderCommandOutput;
    };
  };
}
