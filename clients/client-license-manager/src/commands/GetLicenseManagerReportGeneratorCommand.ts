// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import { GetLicenseManagerReportGeneratorRequest, GetLicenseManagerReportGeneratorResponse } from "../models/models_0";
import {
  de_GetLicenseManagerReportGeneratorCommand,
  se_GetLicenseManagerReportGeneratorCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetLicenseManagerReportGeneratorCommand}.
 */
export interface GetLicenseManagerReportGeneratorCommandInput extends GetLicenseManagerReportGeneratorRequest {}
/**
 * @public
 *
 * The output of {@link GetLicenseManagerReportGeneratorCommand}.
 */
export interface GetLicenseManagerReportGeneratorCommandOutput
  extends GetLicenseManagerReportGeneratorResponse,
    __MetadataBearer {}

/**
 * <p>Gets information about the specified report generator.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, GetLicenseManagerReportGeneratorCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, GetLicenseManagerReportGeneratorCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new LicenseManagerClient(config);
 * const input = { // GetLicenseManagerReportGeneratorRequest
 *   LicenseManagerReportGeneratorArn: "STRING_VALUE", // required
 * };
 * const command = new GetLicenseManagerReportGeneratorCommand(input);
 * const response = await client.send(command);
 * // { // GetLicenseManagerReportGeneratorResponse
 * //   ReportGenerator: { // ReportGenerator
 * //     ReportGeneratorName: "STRING_VALUE",
 * //     ReportType: [ // ReportTypeList
 * //       "LicenseConfigurationSummaryReport" || "LicenseConfigurationUsageReport",
 * //     ],
 * //     ReportContext: { // ReportContext
 * //       licenseConfigurationArns: [ // ArnList // required
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     ReportFrequency: { // ReportFrequency
 * //       value: Number("int"),
 * //       period: "DAY" || "WEEK" || "MONTH",
 * //     },
 * //     LicenseManagerReportGeneratorArn: "STRING_VALUE",
 * //     LastRunStatus: "STRING_VALUE",
 * //     LastRunFailureReason: "STRING_VALUE",
 * //     LastReportGenerationTime: "STRING_VALUE",
 * //     ReportCreatorAccount: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     S3Location: { // S3Location
 * //       bucket: "STRING_VALUE",
 * //       keyPrefix: "STRING_VALUE",
 * //     },
 * //     CreateTime: "STRING_VALUE",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetLicenseManagerReportGeneratorCommandInput - {@link GetLicenseManagerReportGeneratorCommandInput}
 * @returns {@link GetLicenseManagerReportGeneratorCommandOutput}
 * @see {@link GetLicenseManagerReportGeneratorCommandInput} for command's `input` shape.
 * @see {@link GetLicenseManagerReportGeneratorCommandOutput} for command's `response` shape.
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
 * @public
 */
export class GetLicenseManagerReportGeneratorCommand extends $Command
  .classBuilder<
    GetLicenseManagerReportGeneratorCommandInput,
    GetLicenseManagerReportGeneratorCommandOutput,
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
  .s("AWSLicenseManager", "GetLicenseManagerReportGenerator", {})
  .n("LicenseManagerClient", "GetLicenseManagerReportGeneratorCommand")
  .f(void 0, void 0)
  .ser(se_GetLicenseManagerReportGeneratorCommand)
  .de(de_GetLicenseManagerReportGeneratorCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetLicenseManagerReportGeneratorRequest;
      output: GetLicenseManagerReportGeneratorResponse;
    };
    sdk: {
      input: GetLicenseManagerReportGeneratorCommandInput;
      output: GetLicenseManagerReportGeneratorCommandOutput;
    };
  };
}
