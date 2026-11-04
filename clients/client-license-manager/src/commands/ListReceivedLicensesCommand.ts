// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListReceivedLicensesRequest, ListReceivedLicensesResponse } from "../models/models_0";
import { ListReceivedLicenses$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListReceivedLicensesCommand}.
 */
export interface ListReceivedLicensesCommandInput extends ListReceivedLicensesRequest {}
/**
 * @public
 *
 * The output of {@link ListReceivedLicensesCommand}.
 */
export interface ListReceivedLicensesCommandOutput extends ListReceivedLicensesResponse, __MetadataBearer {}

/**
 * Lists received licenses.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, ListReceivedLicensesCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, ListReceivedLicensesCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * // import type { LicenseManagerClientConfig } from "@aws-sdk/client-license-manager";
 * const config = {}; // type is LicenseManagerClientConfig
 * const client = new LicenseManagerClient(config);
 * const input = { // ListReceivedLicensesRequest
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
 * const command = new ListReceivedLicensesCommand(input);
 * const response = await client.send(command);
 * // { // ListReceivedLicensesResponse
 * //   Licenses: [ // GrantedLicenseList
 * //     { // GrantedLicense
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
 * //       ReceivedMetadata: { // ReceivedMetadata
 * //         ReceivedStatus: "PENDING_WORKFLOW" || "PENDING_ACCEPT" || "REJECTED" || "ACTIVE" || "FAILED_WORKFLOW" || "DELETED" || "DISABLED" || "WORKFLOW_COMPLETED",
 * //         ReceivedStatusReason: "STRING_VALUE",
 * //         AllowedOperations: [ // AllowedOperationList
 * //           "CreateGrant" || "CheckoutLicense" || "CheckoutBorrowLicense" || "CheckInLicense" || "ExtendConsumptionLicense" || "ListPurchasedLicenses" || "CreateToken" || "ListReceivedLicenses",
 * //         ],
 * //         GrantType: "BuyerGrant" || "DelegateGrant",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListReceivedLicensesCommandInput - {@link ListReceivedLicensesCommandInput}
 * @returns {@link ListReceivedLicensesCommandOutput}
 * @see {@link ListReceivedLicensesCommandInput} for command's `input` shape.
 * @see {@link ListReceivedLicensesCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceLimitExceededException} (client fault)
 *
 * Your resource limits have been exceeded.
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
export class ListReceivedLicensesCommand extends command<ListReceivedLicensesCommandInput, ListReceivedLicensesCommandOutput>(
  _ep0,
  _mw0,
  "ListReceivedLicenses",
  ListReceivedLicenses$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListReceivedLicensesRequest;
      output: ListReceivedLicensesResponse;
    };
    sdk: {
      input: ListReceivedLicensesCommandInput;
      output: ListReceivedLicensesCommandOutput;
    };
  };
}
