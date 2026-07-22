// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetBillingPreferencesRequest, GetBillingPreferencesResponse } from "../models/models_0";
import { GetBillingPreferences$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetBillingPreferencesCommand}.
 */
export interface GetBillingPreferencesCommandInput extends GetBillingPreferencesRequest {}
/**
 * @public
 *
 * The output of {@link GetBillingPreferencesCommand}.
 */
export interface GetBillingPreferencesCommandOutput extends GetBillingPreferencesResponse, __MetadataBearer {}

/**
 * <p>Retrieves billing preferences for the specified feature. Each feature controls a distinct billing capability: which accounts can share Reserved Instances or credits, whether billing alerts are enabled, the historical record of sharing changes, and per-credit options.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingClient, GetBillingPreferencesCommand } from "@aws-sdk/client-billing"; // ES Modules import
 * // const { BillingClient, GetBillingPreferencesCommand } = require("@aws-sdk/client-billing"); // CommonJS import
 * // import type { BillingClientConfig } from "@aws-sdk/client-billing";
 * const config = {}; // type is BillingClientConfig
 * const client = new BillingClient(config);
 * const input = { // GetBillingPreferencesRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   features: [ // BillingFeatures // required
 *     "RI_SHARING" || "RI_SHARING_HISTORY" || "CREDIT_SHARING" || "CREDIT_SHARING_HISTORY" || "CREDIT_LEVEL_SHARING" || "BILLING_ALERTS" || "CREDIT_PREFERENCE_OPTIONS",
 *   ],
 *   filters: [ // BillingFeatureFilters
 *     { // BillingFeatureFilter
 *       name: "PREFERENCE_KEY",
 *       value: [ // BillingFeatureFilterValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new GetBillingPreferencesCommand(input);
 * const response = await client.send(command);
 * // { // GetBillingPreferencesResponse
 * //   billingPreferences: [ // BillingPreferences // required
 * //     { // BillingPreferenceSummary
 * //       feature: "RI_SHARING" || "RI_SHARING_HISTORY" || "CREDIT_SHARING" || "CREDIT_SHARING_HISTORY" || "CREDIT_LEVEL_SHARING" || "BILLING_ALERTS" || "CREDIT_PREFERENCE_OPTIONS", // required
 * //       key: "STRING_VALUE", // required
 * //       value: "ENABLED" || "DISABLED", // required
 * //       accountName: "STRING_VALUE",
 * //       accountId: "STRING_VALUE",
 * //       billingPeriod: { // BillingPeriod
 * //         year: Number("int"), // required
 * //         month: Number("int"), // required
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetBillingPreferencesCommandInput - {@link GetBillingPreferencesCommandInput}
 * @returns {@link GetBillingPreferencesCommandOutput}
 * @see {@link GetBillingPreferencesCommandInput} for command's `input` shape.
 * @see {@link GetBillingPreferencesCommandOutput} for command's `response` shape.
 * @see {@link BillingClientResolvedConfig | config} for BillingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing failed because of an unknown error, exception, or failure. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service. </p>
 *
 * @throws {@link BillingServiceException}
 * <p>Base exception class for all service exceptions from Billing service.</p>
 *
 *
 * @public
 */
export class GetBillingPreferencesCommand extends command<GetBillingPreferencesCommandInput, GetBillingPreferencesCommandOutput>(
  _ep0,
  _mw0,
  "GetBillingPreferences",
  GetBillingPreferences$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBillingPreferencesRequest;
      output: GetBillingPreferencesResponse;
    };
    sdk: {
      input: GetBillingPreferencesCommandInput;
      output: GetBillingPreferencesCommandOutput;
    };
  };
}
