// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateBillingPreferencesRequest, UpdateBillingPreferencesResponse } from "../models/models_0";
import { UpdateBillingPreferences$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateBillingPreferencesCommand}.
 */
export interface UpdateBillingPreferencesCommandInput extends UpdateBillingPreferencesRequest {}
/**
 * @public
 *
 * The output of {@link UpdateBillingPreferencesCommand}.
 */
export interface UpdateBillingPreferencesCommandOutput extends UpdateBillingPreferencesResponse, __MetadataBearer {}

/**
 * <p>Updates billing preferences for the specified feature. Each feature targets a distinct billing capability and has its own set of supported keys. The action sets the value for each provided key; keys not present in the request are unchanged.</p> <p>To set sharing keys (<code>RI_SHARING</code>, <code>CREDIT_SHARING</code>, <code>CREDIT_LEVEL_SHARING</code>, <code>BENEFIT_LEVEL_SHARING</code>, and sharing keys under <code>CREDIT_PREFERENCE_OPTIONS</code>), you must use the management account of a consolidated billing family. To set the <code>credit/\{creditId\}/status</code> key, you must own the credit or use the management account of its family.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingClient, UpdateBillingPreferencesCommand } from "@aws-sdk/client-billing"; // ES Modules import
 * // const { BillingClient, UpdateBillingPreferencesCommand } = require("@aws-sdk/client-billing"); // CommonJS import
 * // import type { BillingClientConfig } from "@aws-sdk/client-billing";
 * const config = {}; // type is BillingClientConfig
 * const client = new BillingClient(config);
 * const input = { // UpdateBillingPreferencesRequest
 *   feature: "RI_SHARING" || "RI_SHARING_HISTORY" || "CREDIT_SHARING" || "CREDIT_SHARING_HISTORY" || "CREDIT_LEVEL_SHARING" || "BILLING_ALERTS" || "CREDIT_PREFERENCE_OPTIONS" || "BENEFIT_LEVEL_SHARING", // required
 *   billingPreferencesPerKey: [ // BillingPreferencesPerKey // required
 *     { // BillingPreferenceForKey
 *       key: "STRING_VALUE", // required
 *       value: "ENABLED" || "DISABLED", // required
 *     },
 *   ],
 * };
 * const command = new UpdateBillingPreferencesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateBillingPreferencesCommandInput - {@link UpdateBillingPreferencesCommandInput}
 * @returns {@link UpdateBillingPreferencesCommandOutput}
 * @see {@link UpdateBillingPreferencesCommandInput} for command's `input` shape.
 * @see {@link UpdateBillingPreferencesCommandOutput} for command's `response` shape.
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
export class UpdateBillingPreferencesCommand extends command<UpdateBillingPreferencesCommandInput, UpdateBillingPreferencesCommandOutput>(
  _ep0,
  _mw0,
  "UpdateBillingPreferences",
  UpdateBillingPreferences$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateBillingPreferencesRequest;
      output: {};
    };
    sdk: {
      input: UpdateBillingPreferencesCommandInput;
      output: UpdateBillingPreferencesCommandOutput;
    };
  };
}
