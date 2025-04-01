// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import {
  CreateLicenseManagerReportGeneratorRequest,
  CreateLicenseManagerReportGeneratorResponse,
} from "../models/models_0";
import {
  de_CreateLicenseManagerReportGeneratorCommand,
  se_CreateLicenseManagerReportGeneratorCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateLicenseManagerReportGeneratorCommand}.
 */
export interface CreateLicenseManagerReportGeneratorCommandInput extends CreateLicenseManagerReportGeneratorRequest {}
/**
 * @public
 *
 * The output of {@link CreateLicenseManagerReportGeneratorCommand}.
 */
export interface CreateLicenseManagerReportGeneratorCommandOutput
  extends CreateLicenseManagerReportGeneratorResponse,
    __MetadataBearer {}

/**
 * <p>Creates a report generator.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, CreateLicenseManagerReportGeneratorCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, CreateLicenseManagerReportGeneratorCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const input = { // CreateLicenseManagerReportGeneratorRequest
 *   ReportGeneratorName: "STRING_VALUE", // required
 *   Type: [ // ReportTypeList // required
 *     "LicenseConfigurationSummaryReport" || "LicenseConfigurationUsageReport",
 *   ],
 *   ReportContext: { // ReportContext
 *     licenseConfigurationArns: [ // ArnList // required
 *       "STRING_VALUE",
 *     ],
 *   },
 *   ReportFrequency: { // ReportFrequency
 *     value: Number("int"),
 *     period: "DAY" || "WEEK" || "MONTH",
 *   },
 *   ClientToken: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateLicenseManagerReportGeneratorCommand(input);
 * const response = await client.send(command);
 * // { // CreateLicenseManagerReportGeneratorResponse
 * //   LicenseManagerReportGeneratorArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateLicenseManagerReportGeneratorCommandInput - {@link CreateLicenseManagerReportGeneratorCommandInput}
 * @returns {@link CreateLicenseManagerReportGeneratorCommandOutput}
 * @see {@link CreateLicenseManagerReportGeneratorCommandInput} for command's `input` shape.
 * @see {@link CreateLicenseManagerReportGeneratorCommandOutput} for command's `response` shape.
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
export class CreateLicenseManagerReportGeneratorCommand extends $Command
  .classBuilder<
    CreateLicenseManagerReportGeneratorCommandInput,
    CreateLicenseManagerReportGeneratorCommandOutput,
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
  .s("AWSLicenseManager", "CreateLicenseManagerReportGenerator", {})
  .n("LicenseManagerClient", "CreateLicenseManagerReportGeneratorCommand")
  .f(void 0, void 0)
  .ser(se_CreateLicenseManagerReportGeneratorCommand)
  .de(de_CreateLicenseManagerReportGeneratorCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateLicenseManagerReportGeneratorRequest;
      output: CreateLicenseManagerReportGeneratorResponse;
    };
    sdk: {
      input: CreateLicenseManagerReportGeneratorCommandInput;
      output: CreateLicenseManagerReportGeneratorCommandOutput;
    };
  };
}
