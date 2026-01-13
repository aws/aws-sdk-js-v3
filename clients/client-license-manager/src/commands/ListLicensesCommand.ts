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
import type { ListLicensesRequest, ListLicensesResponse } from "../models/models_0";
import { ListLicenses$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListLicensesCommand}.
 */
export interface ListLicensesCommandInput extends ListLicensesRequest {}
/**
 * @public
 *
 * The output of {@link ListLicensesCommand}.
 */
export interface ListLicensesCommandOutput extends ListLicensesResponse, __MetadataBearer {}

/**
 * <p>Lists the licenses for your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, ListLicensesCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, ListLicensesCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * // import type { LicenseManagerClientConfig } from "@aws-sdk/client-license-manager";
 * const config = {}; // type is LicenseManagerClientConfig
 * const client = new LicenseManagerClient(config);
 * const input = { // ListLicensesRequest
 *   LicenseArns: [ // ArnList
 *     "STRING_VALUE",
 *   ],
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // FilterValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListLicensesCommand(input);
 * const response = await client.send(command);
 * // { // ListLicensesResponse
 * //   Licenses: [ // LicenseList
 * //     { // License
 * //       LicenseArn: "STRING_VALUE",
 * //       LicenseName: "STRING_VALUE",
 * //       ProductName: "STRING_VALUE",
 * //       ProductSKU: "STRING_VALUE",
 * //       Issuer: { // IssuerDetails
 * //         Name: "STRING_VALUE",
 * //         SignKey: "STRING_VALUE",
 * //         KeyFingerprint: "STRING_VALUE",
 * //       },
 * //       HomeRegion: "STRING_VALUE",
 * //       Status: "AVAILABLE" || "PENDING_AVAILABLE" || "DEACTIVATED" || "SUSPENDED" || "EXPIRED" || "PENDING_DELETE" || "DELETED",
 * //       Validity: { // DatetimeRange
 * //         Begin: "STRING_VALUE", // required
 * //         End: "STRING_VALUE",
 * //       },
 * //       Beneficiary: "STRING_VALUE",
 * //       Entitlements: [ // EntitlementList
 * //         { // Entitlement
 * //           Name: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE",
 * //           MaxCount: Number("long"),
 * //           Overage: true || false,
 * //           Unit: "Count" || "None" || "Seconds" || "Microseconds" || "Milliseconds" || "Bytes" || "Kilobytes" || "Megabytes" || "Gigabytes" || "Terabytes" || "Bits" || "Kilobits" || "Megabits" || "Gigabits" || "Terabits" || "Percent" || "Bytes/Second" || "Kilobytes/Second" || "Megabytes/Second" || "Gigabytes/Second" || "Terabytes/Second" || "Bits/Second" || "Kilobits/Second" || "Megabits/Second" || "Gigabits/Second" || "Terabits/Second" || "Count/Second", // required
 * //           AllowCheckIn: true || false,
 * //         },
 * //       ],
 * //       ConsumptionConfiguration: { // ConsumptionConfiguration
 * //         RenewType: "None" || "Weekly" || "Monthly",
 * //         ProvisionalConfiguration: { // ProvisionalConfiguration
 * //           MaxTimeToLiveInMinutes: Number("int"), // required
 * //         },
 * //         BorrowConfiguration: { // BorrowConfiguration
 * //           AllowEarlyCheckIn: true || false, // required
 * //           MaxTimeToLiveInMinutes: Number("int"), // required
 * //         },
 * //       },
 * //       LicenseMetadata: [ // MetadataList
 * //         { // Metadata
 * //           Name: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       CreateTime: "STRING_VALUE",
 * //       Version: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListLicensesCommandInput - {@link ListLicensesCommandInput}
 * @returns {@link ListLicensesCommandOutput}
 * @see {@link ListLicensesCommandInput} for command's `input` shape.
 * @see {@link ListLicensesCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for LicenseManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to resource denied.</p>
 *
 * @throws {@link AuthorizationException} (client fault)
 *  <p>The Amazon Web Services user account does not have permission to perform the action. Check the IAM
 *          policy associated with this account.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link RateLimitExceededException} (client fault)
 *  <p>Too many requests have been submitted. Try again after a brief wait.</p>
 *
 * @throws {@link ServerInternalException} (server fault)
 *  <p>The server experienced an internal error. Try again.</p>
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
export class ListLicensesCommand extends $Command
  .classBuilder<
    ListLicensesCommandInput,
    ListLicensesCommandOutput,
    LicenseManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LicenseManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSLicenseManager", "ListLicenses", {})
  .n("LicenseManagerClient", "ListLicensesCommand")
  .sc(ListLicenses$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListLicensesRequest;
      output: ListLicensesResponse;
    };
    sdk: {
      input: ListLicensesCommandInput;
      output: ListLicensesCommandOutput;
    };
  };
}
