// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CheckoutBorrowLicenseRequest, CheckoutBorrowLicenseResponse } from "../models/models_0";
import { CheckoutBorrowLicense$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CheckoutBorrowLicenseCommand}.
 */
export interface CheckoutBorrowLicenseCommandInput extends CheckoutBorrowLicenseRequest {}
/**
 * @public
 *
 * The output of {@link CheckoutBorrowLicenseCommand}.
 */
export interface CheckoutBorrowLicenseCommandOutput extends CheckoutBorrowLicenseResponse, __MetadataBearer {}

/**
 * Checks out the specified license for offline use.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, CheckoutBorrowLicenseCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, CheckoutBorrowLicenseCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * // import type { LicenseManagerClientConfig } from "@aws-sdk/client-license-manager";
 * const config = {}; // type is LicenseManagerClientConfig
 * const client = new LicenseManagerClient(config);
 * const input = { // CheckoutBorrowLicenseRequest
 *   LicenseArn: "STRING_VALUE", // required
 *   Entitlements: [ // EntitlementDataList // required
 *     { // EntitlementData
 *       Name: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *       Unit: "Count" || "None" || "Seconds" || "Microseconds" || "Milliseconds" || "Bytes" || "Kilobytes" || "Megabytes" || "Gigabytes" || "Terabytes" || "Bits" || "Kilobits" || "Megabits" || "Gigabits" || "Terabits" || "Percent" || "Bytes/Second" || "Kilobytes/Second" || "Megabytes/Second" || "Gigabytes/Second" || "Terabytes/Second" || "Bits/Second" || "Kilobits/Second" || "Megabits/Second" || "Gigabits/Second" || "Terabits/Second" || "Count/Second", // required
 *     },
 *   ],
 *   DigitalSignatureMethod: "JWT_PS384", // required
 *   NodeId: "STRING_VALUE",
 *   CheckoutMetadata: [ // MetadataList
 *     { // Metadata
 *       Name: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   ClientToken: "STRING_VALUE", // required
 * };
 * const command = new CheckoutBorrowLicenseCommand(input);
 * const response = await client.send(command);
 * // { // CheckoutBorrowLicenseResponse
 * //   LicenseArn: "STRING_VALUE",
 * //   LicenseConsumptionToken: "STRING_VALUE",
 * //   EntitlementsAllowed: [ // EntitlementDataList
 * //     { // EntitlementData
 * //       Name: "STRING_VALUE", // required
 * //       Value: "STRING_VALUE",
 * //       Unit: "Count" || "None" || "Seconds" || "Microseconds" || "Milliseconds" || "Bytes" || "Kilobytes" || "Megabytes" || "Gigabytes" || "Terabytes" || "Bits" || "Kilobits" || "Megabits" || "Gigabits" || "Terabits" || "Percent" || "Bytes/Second" || "Kilobytes/Second" || "Megabytes/Second" || "Gigabytes/Second" || "Terabytes/Second" || "Bits/Second" || "Kilobits/Second" || "Megabits/Second" || "Gigabits/Second" || "Terabits/Second" || "Count/Second", // required
 * //     },
 * //   ],
 * //   NodeId: "STRING_VALUE",
 * //   SignedToken: "STRING_VALUE",
 * //   IssuedAt: "STRING_VALUE",
 * //   Expiration: "STRING_VALUE",
 * //   CheckoutMetadata: [ // MetadataList
 * //     { // Metadata
 * //       Name: "STRING_VALUE",
 * //       Value: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param CheckoutBorrowLicenseCommandInput - {@link CheckoutBorrowLicenseCommandInput}
 * @returns {@link CheckoutBorrowLicenseCommandOutput}
 * @see {@link CheckoutBorrowLicenseCommandInput} for command's `input` shape.
 * @see {@link CheckoutBorrowLicenseCommandOutput} for command's `response` shape.
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
 * @throws {@link EntitlementNotAllowedException} (client fault)
 *
 * The entitlement is not allowed.
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
export class CheckoutBorrowLicenseCommand extends command<CheckoutBorrowLicenseCommandInput, CheckoutBorrowLicenseCommandOutput>(
  _ep0,
  _mw0,
  "CheckoutBorrowLicense",
  CheckoutBorrowLicense$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CheckoutBorrowLicenseRequest;
      output: CheckoutBorrowLicenseResponse;
    };
    sdk: {
      input: CheckoutBorrowLicenseCommandInput;
      output: CheckoutBorrowLicenseCommandOutput;
    };
  };
}
