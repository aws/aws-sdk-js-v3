// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StopRecommenderRequest, StopRecommenderResponse } from "../models/models_0";
import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { de_StopRecommenderCommand, se_StopRecommenderCommand } from "../protocols/Aws_json1_1";

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
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonPersonalize", "StopRecommender", {})
  .n("PersonalizeClient", "StopRecommenderCommand")
  .f(void 0, void 0)
  .ser(se_StopRecommenderCommand)
  .de(de_StopRecommenderCommand)
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
