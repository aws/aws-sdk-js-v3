// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  CreateLicenseManagerReportGeneratorRequest,
  CreateLicenseManagerReportGeneratorResponse,
} from "../models/models_0";
import { CreateLicenseManagerReportGenerator$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface CreateLicenseManagerReportGeneratorCommandOutput extends CreateLicenseManagerReportGeneratorResponse, __MetadataBearer {}

/**
 * Creates a report generator.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, CreateLicenseManagerReportGeneratorCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, CreateLicenseManagerReportGeneratorCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * // import type { LicenseManagerClientConfig } from "@aws-sdk/client-license-manager";
 * const config = {}; // type is LicenseManagerClientConfig
 * const client = new LicenseManagerClient(config);
 * const input = { // CreateLicenseManagerReportGeneratorRequest
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
export class CreateLicenseManagerReportGeneratorCommand extends command<CreateLicenseManagerReportGeneratorCommandInput, CreateLicenseManagerReportGeneratorCommandOutput>(
  _ep0,
  _mw0,
  "CreateLicenseManagerReportGenerator",
  CreateLicenseManagerReportGenerator$
) {
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
