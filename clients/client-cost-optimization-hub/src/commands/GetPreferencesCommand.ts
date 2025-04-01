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
import { GetPreferencesRequest, GetPreferencesResponse } from "../models/models_0";
import { de_GetPreferencesCommand, se_GetPreferencesCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetPreferencesCommand}.
 */
export interface GetPreferencesCommandInput extends GetPreferencesRequest {}
/**
 * @public
 *
 * The output of {@link GetPreferencesCommand}.
 */
export interface GetPreferencesCommandOutput extends GetPreferencesResponse, __MetadataBearer {}

/**
 * <p>Returns a set of preferences for an account in order to add account-specific preferences
 *       into the service. These preferences impact how the savings associated with recommendations are
 *       presented—estimated savings after discounts or estimated savings before discounts, for
 *       example.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostOptimizationHubClient, GetPreferencesCommand } from "@aws-sdk/client-cost-optimization-hub"; // ES Modules import
 * // const { CostOptimizationHubClient, GetPreferencesCommand } = require("@aws-sdk/client-cost-optimization-hub"); // CommonJS import
 * const client = new CostOptimizationHubClient(config);
 * const input = {};
 * const command = new GetPreferencesCommand(input);
 * const response = await client.send(command);
 * // { // GetPreferencesResponse
 * //   savingsEstimationMode: "BeforeDiscounts" || "AfterDiscounts",
 * //   memberAccountDiscountVisibility: "All" || "None",
 * // };
 *
 * ```
 *
 * @param GetPreferencesCommandInput - {@link GetPreferencesCommandInput}
 * @returns {@link GetPreferencesCommandOutput}
 * @see {@link GetPreferencesCommandInput} for command's `input` shape.
 * @see {@link GetPreferencesCommandOutput} for command's `response` shape.
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
export class GetPreferencesCommand extends $Command
  .classBuilder<
    GetPreferencesCommandInput,
    GetPreferencesCommandOutput,
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
  .s("CostOptimizationHubService", "GetPreferences", {})
  .n("CostOptimizationHubClient", "GetPreferencesCommand")
  .f(void 0, void 0)
  .ser(se_GetPreferencesCommand)
  .de(de_GetPreferencesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetPreferencesResponse;
    };
    sdk: {
      input: GetPreferencesCommandInput;
      output: GetPreferencesCommandOutput;
    };
  };
}
