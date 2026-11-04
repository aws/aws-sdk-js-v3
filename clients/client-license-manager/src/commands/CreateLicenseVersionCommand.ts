// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateLicenseVersionRequest, CreateLicenseVersionResponse } from "../models/models_0";
import { CreateLicenseVersion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateLicenseVersionCommand}.
 */
export interface CreateLicenseVersionCommandInput extends CreateLicenseVersionRequest {}
/**
 * @public
 *
 * The output of {@link CreateLicenseVersionCommand}.
 */
export interface CreateLicenseVersionCommandOutput extends CreateLicenseVersionResponse, __MetadataBearer {}

/**
 * Creates a new version of the specified license.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, CreateLicenseVersionCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, CreateLicenseVersionCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * // import type { LicenseManagerClientConfig } from "@aws-sdk/client-license-manager";
 * const config = {}; // type is LicenseManagerClientConfig
 * const client = new LicenseManagerClient(config);
 * const input = { // CreateLicenseVersionRequest
 *   LicenseArn: "STRING_VALUE", // required
 *   LicenseName: "STRING_VALUE", // required
 *   ProductName: "STRING_VALUE", // required
 *   Issuer: { // Issuer
 *     Name: "STRING_VALUE", // required
 *     SignKey: "STRING_VALUE",
 *   },
 *   HomeRegion: "STRING_VALUE", // required
 *   Validity: { // DatetimeRange
 *     Begin: "STRING_VALUE", // required
 *     End: "STRING_VALUE",
 *   },
 *   LicenseMetadata: [ // MetadataList
 *     { // Metadata
 *       Name: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   Entitlements: [ // EntitlementList // required
 *     { // Entitlement
 *       Name: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *       MaxCount: Number("long"),
 *       Overage: true || false,
 *       Unit: "Count" || "None" || "Seconds" || "Microseconds" || "Milliseconds" || "Bytes" || "Kilobytes" || "Megabytes" || "Gigabytes" || "Terabytes" || "Bits" || "Kilobits" || "Megabits" || "Gigabits" || "Terabits" || "Percent" || "Bytes/Second" || "Kilobytes/Second" || "Megabytes/Second" || "Gigabytes/Second" || "Terabytes/Second" || "Bits/Second" || "Kilobits/Second" || "Megabits/Second" || "Gigabits/Second" || "Terabits/Second" || "Count/Second", // required
 *       AllowCheckIn: true || false,
 *     },
 *   ],
 *   ConsumptionConfiguration: { // ConsumptionConfiguration
 *     RenewType: "None" || "Weekly" || "Monthly",
 *     ProvisionalConfiguration: { // ProvisionalConfiguration
 *       MaxTimeToLiveInMinutes: Number("int"), // required
 *     },
 *     BorrowConfiguration: { // BorrowConfiguration
 *       AllowEarlyCheckIn: true || false, // required
 *       MaxTimeToLiveInMinutes: Number("int"), // required
 *     },
 *   },
 *   Status: "AVAILABLE" || "PENDING_AVAILABLE" || "DEACTIVATED" || "SUSPENDED" || "EXPIRED" || "PENDING_DELETE" || "DELETED", // required
 *   ClientToken: "STRING_VALUE", // required
 *   SourceVersion: "STRING_VALUE",
 *   ResetUsage: true || false,
 * };
 * const command = new CreateLicenseVersionCommand(input);
 * const response = await client.send(command);
 * // { // CreateLicenseVersionResponse
 * //   LicenseArn: "STRING_VALUE",
 * //   Version: "STRING_VALUE",
 * //   Status: "AVAILABLE" || "PENDING_AVAILABLE" || "DEACTIVATED" || "SUSPENDED" || "EXPIRED" || "PENDING_DELETE" || "DELETED",
 * // };
 *
 * ```
 *
 * @param CreateLicenseVersionCommandInput - {@link CreateLicenseVersionCommandInput}
 * @returns {@link CreateLicenseVersionCommandOutput}
 * @see {@link CreateLicenseVersionCommandInput} for command's `input` shape.
 * @see {@link CreateLicenseVersionCommandOutput} for command's `response` shape.
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
 * @throws {@link ConflictException} (client fault)
 *
 * There was a conflict processing the request. Try your request again.
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
export class CreateLicenseVersionCommand extends command<CreateLicenseVersionCommandInput, CreateLicenseVersionCommandOutput>(
  _ep0,
  _mw0,
  "CreateLicenseVersion",
  CreateLicenseVersion$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateLicenseVersionRequest;
      output: CreateLicenseVersionResponse;
    };
    sdk: {
      input: CreateLicenseVersionCommandInput;
      output: CreateLicenseVersionCommandOutput;
    };
  };
}
