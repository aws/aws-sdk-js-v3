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
import type {
  UpdateLicenseManagerReportGeneratorRequest,
  UpdateLicenseManagerReportGeneratorResponse,
} from "../models/models_0";
import { UpdateLicenseManagerReportGenerator$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateLicenseManagerReportGeneratorCommand}.
 */
export interface UpdateLicenseManagerReportGeneratorCommandInput extends UpdateLicenseManagerReportGeneratorRequest {}
/**
 * @public
 *
 * The output of {@link UpdateLicenseManagerReportGeneratorCommand}.
 */
export interface UpdateLicenseManagerReportGeneratorCommandOutput extends UpdateLicenseManagerReportGeneratorResponse, __MetadataBearer {}

/**
 * <p>Updates a report generator.</p>
 *          <p>After you make changes to a report generator, it starts generating new reports within 60 minutes of being updated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, UpdateLicenseManagerReportGeneratorCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, UpdateLicenseManagerReportGeneratorCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * // import type { LicenseManagerClientConfig } from "@aws-sdk/client-license-manager";
 * const config = {}; // type is LicenseManagerClientConfig
 * const client = new LicenseManagerClient(config);
 * const input = { // UpdateLicenseManagerReportGeneratorRequest
 *   LicenseManagerReportGeneratorArn: "STRING_VALUE", // required
 *   ReportGeneratorName: "STRING_VALUE", // required
 *   Type: [ // ReportTypeList // required
 *     "LicenseConfigurationSummaryReport" || "LicenseConfigurationUsageReport" || "LicenseAssetGroupUsageReport",
 *   ],
 *   ReportContext: { // ReportContext
 *     licenseConfigurationArns: [ // ArnList
 *       "STRING_VALUE",
 *     ],
 *     licenseAssetGroupArns: [
 *       "STRING_VALUE",
 *     ],
 *     reportStartDate: new Date("TIMESTAMP"),
 *     reportEndDate: new Date("TIMESTAMP"),
 *   },
 *   ReportFrequency: { // ReportFrequency
 *     value: Number("int"),
 *     period: "DAY" || "WEEK" || "MONTH" || "ONE_TIME",
 *   },
 *   ClientToken: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 * };
 * const command = new UpdateLicenseManagerReportGeneratorCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateLicenseManagerReportGeneratorCommandInput - {@link UpdateLicenseManagerReportGeneratorCommandInput}
 * @returns {@link UpdateLicenseManagerReportGeneratorCommandOutput}
 * @see {@link UpdateLicenseManagerReportGeneratorCommandInput} for command's `input` shape.
 * @see {@link UpdateLicenseManagerReportGeneratorCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceLimitExceededException} (client fault)
 *  <p>Your resource limits have been exceeded.</p>
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
 *
 * @public
 */
export class UpdateLicenseManagerReportGeneratorCommand extends $Command
  .classBuilder<
    UpdateLicenseManagerReportGeneratorCommandInput,
    UpdateLicenseManagerReportGeneratorCommandOutput,
    LicenseManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LicenseManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSLicenseManager", "UpdateLicenseManagerReportGenerator", {})
  .n("LicenseManagerClient", "UpdateLicenseManagerReportGeneratorCommand")
  .sc(UpdateLicenseManagerReportGenerator$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateLicenseManagerReportGeneratorRequest;
      output: {};
    };
    sdk: {
      input: UpdateLicenseManagerReportGeneratorCommandInput;
      output: UpdateLicenseManagerReportGeneratorCommandOutput;
    };
  };
}
