// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetLicenseManagerReportGeneratorRequest,
  GetLicenseManagerReportGeneratorResponse,
} from "../models/models_0";
import { GetLicenseManagerReportGenerator$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface GetLicenseManagerReportGeneratorCommandOutput extends GetLicenseManagerReportGeneratorResponse, __MetadataBearer {}

/**
 * Gets information about the specified report generator.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, GetLicenseManagerReportGeneratorCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, GetLicenseManagerReportGeneratorCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * // import type { LicenseManagerClientConfig } from "@aws-sdk/client-license-manager";
 * const config = {}; // type is LicenseManagerClientConfig
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
 * //       "LicenseConfigurationSummaryReport" || "LicenseConfigurationUsageReport" || "LicenseAssetGroupUsageReport",
 * //     ],
 * //     ReportContext: { // ReportContext
 * //       licenseConfigurationArns: [ // ArnList
 * //         "STRING_VALUE",
 * //       ],
 * //       licenseAssetGroupArns: [
 * //         "STRING_VALUE",
 * //       ],
 * //       reportStartDate: new Date("TIMESTAMP"),
 * //       reportEndDate: new Date("TIMESTAMP"),
 * //     },
 * //     ReportFrequency: { // ReportFrequency
 * //       value: Number("int"),
 * //       period: "DAY" || "WEEK" || "MONTH" || "ONE_TIME",
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
export class GetLicenseManagerReportGeneratorCommand extends command<GetLicenseManagerReportGeneratorCommandInput, GetLicenseManagerReportGeneratorCommandOutput>(
  _ep0,
  _mw0,
  "GetLicenseManagerReportGenerator",
  GetLicenseManagerReportGenerator$
) {
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
