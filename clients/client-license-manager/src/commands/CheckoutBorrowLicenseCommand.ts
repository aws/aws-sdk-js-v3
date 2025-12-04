// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  LicenseManagerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LicenseManagerClient";
import type { CheckoutBorrowLicenseRequest, CheckoutBorrowLicenseResponse } from "../models/models_0";
import { CheckoutBorrowLicense } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Checks out the specified license for offline use.</p>
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
 *  <p>Access to resource denied.</p>
 *
 * @throws {@link AuthorizationException} (client fault)
 *  <p>The Amazon Web Services user account does not have permission to perform the action. Check the IAM
 *          policy associated with this account.</p>
 *
 * @throws {@link EntitlementNotAllowedException} (client fault)
 *  <p>The entitlement is not allowed.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link NoEntitlementsAllowedException} (client fault)
 *  <p>There are no entitlements found for this license, or the entitlement maximum count is reached.</p>
 *
 * @throws {@link RateLimitExceededException} (client fault)
 *  <p>Too many requests have been submitted. Try again after a brief wait.</p>
 *
 * @throws {@link RedirectException} (client fault)
 *  <p>This is not the correct Region for the resource. Try again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource cannot be found.</p>
 *
 * @throws {@link ServerInternalException} (server fault)
 *  <p>The server experienced an internal error. Try again.</p>
 *
 * @throws {@link UnsupportedDigitalSignatureMethodException} (client fault)
 *  <p>The digital signature method is unsupported. Try your request again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The provided input is not valid. Try your request again.</p>
 *
 * @throws {@link LicenseManagerServiceException}
 * <p>Base exception class for all service exceptions from LicenseManager service.</p>
 *
 *
 * @public
 */
export class CheckoutBorrowLicenseCommand extends $Command
  .classBuilder<
    CheckoutBorrowLicenseCommandInput,
    CheckoutBorrowLicenseCommandOutput,
    LicenseManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LicenseManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSLicenseManager", "CheckoutBorrowLicense", {})
  .n("LicenseManagerClient", "CheckoutBorrowLicenseCommand")
  .sc(CheckoutBorrowLicense)
  .build() {
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
