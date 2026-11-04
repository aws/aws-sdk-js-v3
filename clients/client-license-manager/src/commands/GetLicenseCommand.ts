// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetLicenseRequest, GetLicenseResponse } from "../models/models_0";
import { GetLicense$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetLicenseCommand}.
 */
export interface GetLicenseCommandInput extends GetLicenseRequest {}
/**
 * @public
 *
 * The output of {@link GetLicenseCommand}.
 */
export interface GetLicenseCommandOutput extends GetLicenseResponse, __MetadataBearer {}

/**
 * Gets detailed information about the specified license.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, GetLicenseCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, GetLicenseCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * // import type { LicenseManagerClientConfig } from "@aws-sdk/client-license-manager";
 * const config = {}; // type is LicenseManagerClientConfig
 * const client = new LicenseManagerClient(config);
 * const input = { // GetLicenseRequest
 *   LicenseArn: "STRING_VALUE", // required
 *   Version: "STRING_VALUE",
 * };
 * const command = new GetLicenseCommand(input);
 * const response = await client.send(command);
 * // { // GetLicenseResponse
 * //   License: { // License
 * //     LicenseArn: "STRING_VALUE",
 * //     LicenseName: "STRING_VALUE",
 * //     ProductName: "STRING_VALUE",
 * //     ProductSKU: "STRING_VALUE",
 * //     Issuer: { // IssuerDetails
 * //       Name: "STRING_VALUE",
 * //       SignKey: "STRING_VALUE",
 * //       KeyFingerprint: "STRING_VALUE",
 * //     },
 * //     HomeRegion: "STRING_VALUE",
 * //     Status: "AVAILABLE" || "PENDING_AVAILABLE" || "DEACTIVATED" || "SUSPENDED" || "EXPIRED" || "PENDING_DELETE" || "DELETED",
 * //     Validity: { // DatetimeRange
 * //       Begin: "STRING_VALUE", // required
 * //       End: "STRING_VALUE",
 * //     },
 * //     Beneficiary: "STRING_VALUE",
 * //     Entitlements: [ // EntitlementList
 * //       { // Entitlement
 * //         Name: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE",
 * //         MaxCount: Number("long"),
 * //         Overage: true || false,
 * //         Unit: "Count" || "None" || "Seconds" || "Microseconds" || "Milliseconds" || "Bytes" || "Kilobytes" || "Megabytes" || "Gigabytes" || "Terabytes" || "Bits" || "Kilobits" || "Megabits" || "Gigabits" || "Terabits" || "Percent" || "Bytes/Second" || "Kilobytes/Second" || "Megabytes/Second" || "Gigabytes/Second" || "Terabytes/Second" || "Bits/Second" || "Kilobits/Second" || "Megabits/Second" || "Gigabits/Second" || "Terabits/Second" || "Count/Second", // required
 * //         AllowCheckIn: true || false,
 * //       },
 * //     ],
 * //     ConsumptionConfiguration: { // ConsumptionConfiguration
 * //       RenewType: "None" || "Weekly" || "Monthly",
 * //       ProvisionalConfiguration: { // ProvisionalConfiguration
 * //         MaxTimeToLiveInMinutes: Number("int"), // required
 * //       },
 * //       BorrowConfiguration: { // BorrowConfiguration
 * //         AllowEarlyCheckIn: true || false, // required
 * //         MaxTimeToLiveInMinutes: Number("int"), // required
 * //       },
 * //     },
 * //     LicenseMetadata: [ // MetadataList
 * //       { // Metadata
 * //         Name: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     CreateTime: "STRING_VALUE",
 * //     Version: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetLicenseCommandInput - {@link GetLicenseCommandInput}
 * @returns {@link GetLicenseCommandOutput}
 * @see {@link GetLicenseCommandInput} for command's `input` shape.
 * @see {@link GetLicenseCommandOutput} for command's `response` shape.
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
 * @throws {@link RateLimitExceededException} (client fault)
 *
 * Too many requests have been submitted. Try again after a brief wait.
 *
 * @throws {@link ServerInternalException} (server fault)
 *
 * The server experienced an internal error. Try again.
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
export class GetLicenseCommand extends command<GetLicenseCommandInput, GetLicenseCommandOutput>(
  _ep0,
  _mw0,
  "GetLicense",
  GetLicense$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetLicenseRequest;
      output: GetLicenseResponse;
    };
    sdk: {
      input: GetLicenseCommandInput;
      output: GetLicenseCommandOutput;
    };
  };
}
