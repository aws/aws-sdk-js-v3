// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdatePreferencesRequest, UpdatePreferencesResponse } from "../models/models_0";
import { UpdatePreferences$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Updates a set of preferences for an account in order to add account-specific preferences into the service. These preferences impact how the savings associated with recommendations are presented.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostOptimizationHubClient, UpdatePreferencesCommand } from "@aws-sdk/client-cost-optimization-hub"; // ES Modules import
 * // const { CostOptimizationHubClient, UpdatePreferencesCommand } = require("@aws-sdk/client-cost-optimization-hub"); // CommonJS import
 * // import type { CostOptimizationHubClientConfig } from "@aws-sdk/client-cost-optimization-hub";
 * const config = {}; // type is CostOptimizationHubClientConfig
 * const client = new CostOptimizationHubClient(config);
 * const input = { // UpdatePreferencesRequest
 *   savingsEstimationMode: "BeforeDiscounts" || "AfterDiscounts",
 *   memberAccountDiscountVisibility: "All" || "None",
 *   preferredCommitment: { // PreferredCommitment
 *     term: "OneYear" || "ThreeYears",
 *     paymentOption: "AllUpfront" || "PartialUpfront" || "NoUpfront",
 *   },
 * };
 * const command = new UpdatePreferencesCommand(input);
 * const response = await client.send(command);
 * // { // UpdatePreferencesResponse
 * //   savingsEstimationMode: "BeforeDiscounts" || "AfterDiscounts",
 * //   memberAccountDiscountVisibility: "All" || "None",
 * //   preferredCommitment: { // PreferredCommitment
 * //     term: "OneYear" || "ThreeYears",
 * //     paymentOption: "AllUpfront" || "PartialUpfront" || "NoUpfront",
 * //   },
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
 *
 * You are not authorized to use this operation with the given parameters.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An error on the server occurred during the processing of your request. Try again later.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link CostOptimizationHubServiceException}
 *
 * Base exception class for all service exceptions from CostOptimizationHub service.
 *
 * @public
 */
export class UpdatePreferencesCommand extends command<UpdatePreferencesCommandInput, UpdatePreferencesCommandOutput>(
  _ep0,
  _mw0,
  "UpdatePreferences",
  UpdatePreferences$
) {
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
