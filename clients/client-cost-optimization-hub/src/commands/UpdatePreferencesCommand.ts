// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  CostOptimizationHubClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CostOptimizationHubClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdatePreferencesRequest, UpdatePreferencesResponse } from "../models/models_0";
import { de_UpdatePreferencesCommand, se_UpdatePreferencesCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdatePreferencesCommand}.
 */
export interface UpdatePreferencesCommandInput extends UpdatePreferencesRequest {}
/**
 * @public
 *
 * The output of {@link UpdatePreferencesCommand}.
 */
export interface UpdatePreferencesCommandOutput extends UpdatePreferencesResponse, __MetadataBearer {}

/**
 * <p>Updates a set of preferences for an account in order to add account-specific preferences
 *       into the service. These preferences impact how the savings associated with recommendations are
 *       presented.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostOptimizationHubClient, UpdatePreferencesCommand } from "@aws-sdk/client-cost-optimization-hub"; // ES Modules import
 * // const { CostOptimizationHubClient, UpdatePreferencesCommand } = require("@aws-sdk/client-cost-optimization-hub"); // CommonJS import
 * const client = new CostOptimizationHubClient(config);
 * const input = { // UpdatePreferencesRequest
 *   savingsEstimationMode: "BeforeDiscounts" || "AfterDiscounts",
 *   memberAccountDiscountVisibility: "All" || "None",
 * };
 * const command = new UpdatePreferencesCommand(input);
 * const response = await client.send(command);
 * // { // UpdatePreferencesResponse
 * //   savingsEstimationMode: "BeforeDiscounts" || "AfterDiscounts",
 * //   memberAccountDiscountVisibility: "All" || "None",
 * // };
 *
 * ```
 *
 * @param UpdatePreferencesCommandInput - {@link UpdatePreferencesCommandInput}
 * @returns {@link UpdatePreferencesCommandOutput}
 * @see {@link UpdatePreferencesCommandInput} for command's `input` shape.
 * @see {@link UpdatePreferencesCommandOutput} for command's `response` shape.
 * @see {@link CostOptimizationHubClientResolvedConfig | config} for CostOptimizationHubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to use this operation with the given parameters.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An error on the server occurred during the processing of your request. Try again
 *       later.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services
 *       service.</p>
 *
 * @throws {@link CostOptimizationHubServiceException}
 * <p>Base exception class for all service exceptions from CostOptimizationHub service.</p>
 *
 *
 * @public
 */
export class UpdatePreferencesCommand extends $Command
  .classBuilder<
    UpdatePreferencesCommandInput,
    UpdatePreferencesCommandOutput,
    CostOptimizationHubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CostOptimizationHubClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CostOptimizationHubService", "UpdatePreferences", {})
  .n("CostOptimizationHubClient", "UpdatePreferencesCommand")
  .f(void 0, void 0)
  .ser(se_UpdatePreferencesCommand)
  .de(de_UpdatePreferencesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdatePreferencesRequest;
      output: UpdatePreferencesResponse;
    };
    sdk: {
      input: UpdatePreferencesCommandInput;
      output: UpdatePreferencesCommandOutput;
    };
  };
}
