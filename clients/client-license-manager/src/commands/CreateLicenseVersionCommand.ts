// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import { CreateLicenseVersionRequest, CreateLicenseVersionResponse } from "../models/models_0";
import { de_CreateLicenseVersionCommand, se_CreateLicenseVersionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Creates a new version of the specified license.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, CreateLicenseVersionCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, CreateLicenseVersionCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
 *  <p>Access to resource denied.</p>
 *
 * @throws {@link AuthorizationException} (client fault)
 *  <p>The Amazon Web Services user account does not have permission to perform the action. Check the IAM
 *          policy associated with this account.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict processing the request. Try your request again.</p>
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
 * @throws {@link ValidationException} (client fault)
 *  <p>The provided input is not valid. Try your request again.</p>
 *
 * @throws {@link LicenseManagerServiceException}
 * <p>Base exception class for all service exceptions from LicenseManager service.</p>
 *
 * @public
 */
export class CreateLicenseVersionCommand extends $Command
  .classBuilder<
    CreateLicenseVersionCommandInput,
    CreateLicenseVersionCommandOutput,
    LicenseManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LicenseManagerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSLicenseManager", "CreateLicenseVersion", {})
  .n("LicenseManagerClient", "CreateLicenseVersionCommand")
  .f(void 0, void 0)
  .ser(se_CreateLicenseVersionCommand)
  .de(de_CreateLicenseVersionCommand)
  .build() {
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
