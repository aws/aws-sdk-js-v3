// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteMetricAttributionRequest } from "../models/models_0";
import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { DeleteMetricAttribution } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteMetricAttributionCommand}.
 */
export interface DeleteMetricAttributionCommandInput extends DeleteMetricAttributionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteMetricAttributionCommand}.
 */
export interface DeleteMetricAttributionCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a metric attribution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, DeleteMetricAttributionCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, DeleteMetricAttributionCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * // import type { PersonalizeClientConfig } from "@aws-sdk/client-personalize";
 * const config = {}; // type is PersonalizeClientConfig
 * const client = new PersonalizeClient(config);
 * const input = { // DeleteMetricAttributionRequest
 *   metricAttributionArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteMetricAttributionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteMetricAttributionCommandInput - {@link DeleteMetricAttributionCommandInput}
 * @returns {@link DeleteMetricAttributionCommandOutput}
 * @see {@link DeleteMetricAttributionCommandInput} for command's `input` shape.
 * @see {@link DeleteMetricAttributionCommandOutput} for command's `response` shape.
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
export class DeleteMetricAttributionCommand extends $Command
  .classBuilder<
    DeleteMetricAttributionCommandInput,
    DeleteMetricAttributionCommandOutput,
    PersonalizeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PersonalizeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonPersonalize", "DeleteMetricAttribution", {})
  .n("PersonalizeClient", "DeleteMetricAttributionCommand")
  .sc(DeleteMetricAttribution)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteMetricAttributionRequest;
      output: {};
    };
    sdk: {
      input: DeleteMetricAttributionCommandInput;
      output: DeleteMetricAttributionCommandOutput;
    };
  };
}
