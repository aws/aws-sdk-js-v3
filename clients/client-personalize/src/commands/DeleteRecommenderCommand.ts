// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteRecommenderRequest } from "../models/models_0";
import type { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { DeleteRecommender$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteRecommenderCommand}.
 */
export interface DeleteRecommenderCommandInput extends DeleteRecommenderRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRecommenderCommand}.
 */
export interface DeleteRecommenderCommandOutput extends __MetadataBearer {}

/**
 * <p>Deactivates and removes a recommender. A deleted recommender can no longer be specified in a <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a>
 *     request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, DeleteRecommenderCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, DeleteRecommenderCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * // import type { PersonalizeClientConfig } from "@aws-sdk/client-personalize";
 * const config = {}; // type is PersonalizeClientConfig
 * const client = new PersonalizeClient(config);
 * const input = { // DeleteRecommenderRequest
 *   recommenderArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteRecommenderCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteRecommenderCommandInput - {@link DeleteRecommenderCommandInput}
 * @returns {@link DeleteRecommenderCommandOutput}
 * @see {@link DeleteRecommenderCommandInput} for command's `input` shape.
 * @see {@link DeleteRecommenderCommandOutput} for command's `response` shape.
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
export class DeleteRecommenderCommand extends $Command
  .classBuilder<
    DeleteRecommenderCommandInput,
    DeleteRecommenderCommandOutput,
    PersonalizeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PersonalizeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonPersonalize", "DeleteRecommender", {})
  .n("PersonalizeClient", "DeleteRecommenderCommand")
  .sc(DeleteRecommender$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteRecommenderRequest;
      output: {};
    };
    sdk: {
      input: DeleteRecommenderCommandInput;
      output: DeleteRecommenderCommandOutput;
    };
  };
}
