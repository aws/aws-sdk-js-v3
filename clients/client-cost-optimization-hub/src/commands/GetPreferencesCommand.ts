// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetPreferencesRequest, GetPreferencesResponse } from "../models/models_0";
import { GetPreferences$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Returns a set of preferences for an account in order to add account-specific preferences into the service. These preferences impact how the savings associated with recommendations are presented—estimated savings after discounts or estimated savings before discounts, for example.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostOptimizationHubClient, GetPreferencesCommand } from "@aws-sdk/client-cost-optimization-hub"; // ES Modules import
 * // const { CostOptimizationHubClient, GetPreferencesCommand } = require("@aws-sdk/client-cost-optimization-hub"); // CommonJS import
 * // import type { CostOptimizationHubClientConfig } from "@aws-sdk/client-cost-optimization-hub";
 * const config = {}; // type is CostOptimizationHubClientConfig
 * const client = new CostOptimizationHubClient(config);
 * const input = {};
 * const command = new GetPreferencesCommand(input);
 * const response = await client.send(command);
 * // { // GetPreferencesResponse
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
 * @param GetPreferencesCommandInput - {@link GetPreferencesCommandInput}
 * @returns {@link GetPreferencesCommandOutput}
 * @see {@link GetPreferencesCommandInput} for command's `input` shape.
 * @see {@link GetPreferencesCommandOutput} for command's `response` shape.
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
export class GetPreferencesCommand extends command<GetPreferencesCommandInput, GetPreferencesCommandOutput>(
  _ep0,
  _mw0,
  "GetPreferences",
  GetPreferences$
) {
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
