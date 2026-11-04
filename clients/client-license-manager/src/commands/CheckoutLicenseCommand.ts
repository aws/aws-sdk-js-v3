// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CheckoutLicenseRequest, CheckoutLicenseResponse } from "../models/models_0";
import { CheckoutLicense$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CheckoutLicenseCommand}.
 */
export interface CheckoutLicenseCommandInput extends CheckoutLicenseRequest {}
/**
 * @public
 *
 * The output of {@link CheckoutLicenseCommand}.
 */
export interface CheckoutLicenseCommandOutput extends CheckoutLicenseResponse, __MetadataBearer {}

/**
 * Checks out the specified license.
 *
 * > **Note:** If the account that created the license is the same that is performing the check out, you must specify the account as the beneficiary.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, CheckoutLicenseCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, CheckoutLicenseCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * // import type { LicenseManagerClientConfig } from "@aws-sdk/client-license-manager";
 * const config = {}; // type is LicenseManagerClientConfig
 * const client = new LicenseManagerClient(config);
 * const input = { // CheckoutLicenseRequest
 *   ProductSKU: "STRING_VALUE", // required
 *   CheckoutType: "PROVISIONAL" || "PERPETUAL", // required
 *   KeyFingerprint: "STRING_VALUE", // required
 *   Entitlements: [ // EntitlementDataList // required
 *     { // EntitlementData
 *       Name: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *       Unit: "Count" || "None" || "Seconds" || "Microseconds" || "Milliseconds" || "Bytes" || "Kilobytes" || "Megabytes" || "Gigabytes" || "Terabytes" || "Bits" || "Kilobits" || "Megabits" || "Gigabits" || "Terabits" || "Percent" || "Bytes/Second" || "Kilobytes/Second" || "Megabytes/Second" || "Gigabytes/Second" || "Terabytes/Second" || "Bits/Second" || "Kilobits/Second" || "Megabits/Second" || "Gigabits/Second" || "Terabits/Second" || "Count/Second", // required
 *     },
 *   ],
 *   ClientToken: "STRING_VALUE", // required
 *   Beneficiary: "STRING_VALUE",
 *   NodeId: "STRING_VALUE",
 * };
 * const command = new CheckoutLicenseCommand(input);
 * const response = await client.send(command);
 * // { // CheckoutLicenseResponse
 * //   CheckoutType: "PROVISIONAL" || "PERPETUAL",
 * //   LicenseConsumptionToken: "STRING_VALUE",
 * //   EntitlementsAllowed: [ // EntitlementDataList
 * //     { // EntitlementData
 * //       Name: "STRING_VALUE", // required
 * //       Value: "STRING_VALUE",
 * //       Unit: "Count" || "None" || "Seconds" || "Microseconds" || "Milliseconds" || "Bytes" || "Kilobytes" || "Megabytes" || "Gigabytes" || "Terabytes" || "Bits" || "Kilobits" || "Megabits" || "Gigabits" || "Terabits" || "Percent" || "Bytes/Second" || "Kilobytes/Second" || "Megabytes/Second" || "Gigabytes/Second" || "Terabytes/Second" || "Bits/Second" || "Kilobits/Second" || "Megabits/Second" || "Gigabits/Second" || "Terabits/Second" || "Count/Second", // required
 * //     },
 * //   ],
 * //   SignedToken: "STRING_VALUE",
 * //   NodeId: "STRING_VALUE",
 * //   IssuedAt: "STRING_VALUE",
 * //   Expiration: "STRING_VALUE",
 * //   LicenseArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CheckoutLicenseCommandInput - {@link CheckoutLicenseCommandInput}
 * @returns {@link CheckoutLicenseCommandOutput}
 * @see {@link CheckoutLicenseCommandInput} for command's `input` shape.
 * @see {@link CheckoutLicenseCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for LicenseManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access to resource denied.
 *
 * @throws {@link AuthorizationException} (client fault)
 *
 * The Amazon Web Services user account does not have permission to perform the action. Check the IAM policy associated with this account.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * One or more parameter values are not valid.
 *
 * @throws {@link NoEntitlementsAllowedException} (client fault)
 *
 * There are no entitlements found for this license, or the entitlement maximum count is reached.
 *
 * @throws {@link RateLimitExceededException} (client fault)
 *
 * Too many requests have been submitted. Try again after a brief wait.
 *
 * @throws {@link RedirectException} (client fault)
 *
 * This is not the correct Region for the resource. Try again.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource cannot be found.
 *
 * @throws {@link ServerInternalException} (server fault)
 *
 * The server experienced an internal error. Try again.
 *
 * @throws {@link UnsupportedDigitalSignatureMethodException} (client fault)
 *
 * The digital signature method is unsupported. Try your request again.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The provided input is not valid. Try your request again.
 *
 * @throws {@link LicenseManagerServiceException}
 *
 * Base exception class for all service exceptions from LicenseManager service.
 *
 * @public
 */
export class CheckoutLicenseCommand extends command<CheckoutLicenseCommandInput, CheckoutLicenseCommandOutput>(
  _ep0,
  _mw0,
  "CheckoutLicense",
  CheckoutLicense$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CheckoutLicenseRequest;
      output: CheckoutLicenseResponse;
    };
    sdk: {
      input: CheckoutLicenseCommandInput;
      output: CheckoutLicenseCommandOutput;
    };
  };
}
