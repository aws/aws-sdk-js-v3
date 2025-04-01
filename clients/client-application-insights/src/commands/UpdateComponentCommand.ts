// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ApplicationInsightsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationInsightsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateComponentRequest, UpdateComponentResponse } from "../models/models_0";
import { de_UpdateComponentCommand, se_UpdateComponentCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateComponentCommand}.
 */
export interface UpdateComponentCommandInput extends UpdateComponentRequest {}
/**
 * @public
 *
 * The output of {@link UpdateComponentCommand}.
 */
export interface UpdateComponentCommandOutput extends UpdateComponentResponse, __MetadataBearer {}

/**
 * <p>Updates the custom component name and/or the list of resources that make up the
 *          component.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationInsightsClient, UpdateComponentCommand } from "@aws-sdk/client-application-insights"; // ES Modules import
 * // const { ApplicationInsightsClient, UpdateComponentCommand } = require("@aws-sdk/client-application-insights"); // CommonJS import
 * const client = new ApplicationInsightsClient(config);
 * const input = { // UpdateComponentRequest
 *   ResourceGroupName: "STRING_VALUE", // required
 *   ComponentName: "STRING_VALUE", // required
 *   NewComponentName: "STRING_VALUE",
 *   ResourceList: [ // ResourceList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdateComponentCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateComponentCommandInput - {@link UpdateComponentCommandInput}
 * @returns {@link UpdateComponentCommandOutput}
 * @see {@link UpdateComponentCommandInput} for command's `input` shape.
 * @see {@link UpdateComponentCommandOutput} for command's `response` shape.
 * @see {@link ApplicationInsightsClientResolvedConfig | config} for ApplicationInsightsClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The server encountered an internal error and is unable to complete the request.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The resource is already created or in use.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource does not exist in the customer account.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The parameter is not valid.</p>
 *
 * @throws {@link ApplicationInsightsServiceException}
 * <p>Base exception class for all service exceptions from ApplicationInsights service.</p>
 *
 *
 * @public
 */
export class UpdateComponentCommand extends $Command
  .classBuilder<
    UpdateComponentCommandInput,
    UpdateComponentCommandOutput,
    ApplicationInsightsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApplicationInsightsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("EC2WindowsBarleyService", "UpdateComponent", {})
  .n("ApplicationInsightsClient", "UpdateComponentCommand")
  .f(void 0, void 0)
  .ser(se_UpdateComponentCommand)
  .de(de_UpdateComponentCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateComponentRequest;
      output: {};
    };
    sdk: {
      input: UpdateComponentCommandInput;
      output: UpdateComponentCommandOutput;
    };
  };
}
