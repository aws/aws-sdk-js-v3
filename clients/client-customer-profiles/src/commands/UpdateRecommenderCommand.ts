// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateRecommenderRequest, UpdateRecommenderResponse } from "../models/models_1";
import { UpdateRecommender } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateRecommenderCommand}.
 */
export interface UpdateRecommenderCommandInput extends UpdateRecommenderRequest {}
/**
 * @public
 *
 * The output of {@link UpdateRecommenderCommand}.
 */
export interface UpdateRecommenderCommandOutput extends UpdateRecommenderResponse, __MetadataBearer {}

/**
 * <p>Updates the properties of an existing recommender, allowing you to modify its configuration and description.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, UpdateRecommenderCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, UpdateRecommenderCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // import type { CustomerProfilesClientConfig } from "@aws-sdk/client-customer-profiles";
 * const config = {}; // type is CustomerProfilesClientConfig
 * const client = new CustomerProfilesClient(config);
 * const input = { // UpdateRecommenderRequest
 *   DomainName: "STRING_VALUE", // required
 *   RecommenderName: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   RecommenderConfig: { // RecommenderConfig
 *     EventsConfig: { // EventsConfig
 *       EventParametersList: [ // EventParametersList // required
 *         { // EventParameters
 *           EventType: "STRING_VALUE", // required
 *           EventValueThreshold: Number("double"),
 *         },
 *       ],
 *     },
 *     TrainingFrequency: Number("int"),
 *   },
 * };
 * const command = new UpdateRecommenderCommand(input);
 * const response = await client.send(command);
 * // { // UpdateRecommenderResponse
 * //   RecommenderName: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateRecommenderCommandInput - {@link UpdateRecommenderCommandInput}
 * @returns {@link UpdateRecommenderCommandOutput}
 * @see {@link UpdateRecommenderCommandInput} for command's `input` shape.
 * @see {@link UpdateRecommenderCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for CustomerProfilesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource does not exist, or access was denied.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>You exceeded the maximum number of requests.</p>
 *
 * @throws {@link CustomerProfilesServiceException}
 * <p>Base exception class for all service exceptions from CustomerProfiles service.</p>
 *
 *
 * @public
 */
export class UpdateRecommenderCommand extends $Command
  .classBuilder<
    UpdateRecommenderCommandInput,
    UpdateRecommenderCommandOutput,
    CustomerProfilesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CustomerProfilesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CustomerProfiles_20200815", "UpdateRecommender", {})
  .n("CustomerProfilesClient", "UpdateRecommenderCommand")
  .sc(UpdateRecommender)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateRecommenderRequest;
      output: UpdateRecommenderResponse;
    };
    sdk: {
      input: UpdateRecommenderCommandInput;
      output: UpdateRecommenderCommandOutput;
    };
  };
}
