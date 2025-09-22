// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import {
  ListLicenseManagerReportGeneratorsRequest,
  ListLicenseManagerReportGeneratorsResponse,
} from "../models/models_0";
import { ListLicenseManagerReportGenerators } from "../schemas/schemas_6_List";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListLicenseManagerReportGeneratorsCommand}.
 */
export interface ListLicenseManagerReportGeneratorsCommandInput extends ListLicenseManagerReportGeneratorsRequest {}
/**
 * @public
 *
 * The output of {@link ListLicenseManagerReportGeneratorsCommand}.
 */
export interface ListLicenseManagerReportGeneratorsCommandOutput
  extends ListLicenseManagerReportGeneratorsResponse,
    __MetadataBearer {}

/**
 * <p>Lists the report generators for your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, ListLicenseManagerReportGeneratorsCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, ListLicenseManagerReportGeneratorsCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * // import type { LicenseManagerClientConfig } from "@aws-sdk/client-license-manager";
 * const config = {}; // type is LicenseManagerClientConfig
 * const client = new LicenseManagerClient(config);
 * const input = { // ListLicenseManagerReportGeneratorsRequest
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
 * const command = new ListLicenseManagerReportGeneratorsCommand(input);
 * const response = await client.send(command);
 * // { // ListLicenseManagerReportGeneratorsResponse
 * //   ReportGenerators: [ // ReportGeneratorList
 * //     { // ReportGenerator
 * //       ReportGeneratorName: "STRING_VALUE",
 * //       ReportType: [ // ReportTypeList
 * //         "LicenseConfigurationSummaryReport" || "LicenseConfigurationUsageReport",
 * //       ],
 * //       ReportContext: { // ReportContext
 * //         licenseConfigurationArns: [ // ArnList // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       ReportFrequency: { // ReportFrequency
 * //         value: Number("int"),
 * //         period: "DAY" || "WEEK" || "MONTH",
 * //       },
 * //       LicenseManagerReportGeneratorArn: "STRING_VALUE",
 * //       LastRunStatus: "STRING_VALUE",
 * //       LastRunFailureReason: "STRING_VALUE",
 * //       LastReportGenerationTime: "STRING_VALUE",
 * //       ReportCreatorAccount: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       S3Location: { // S3Location
 * //         bucket: "STRING_VALUE",
 * //         keyPrefix: "STRING_VALUE",
 * //       },
 * //       CreateTime: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListLicenseManagerReportGeneratorsCommandInput - {@link ListLicenseManagerReportGeneratorsCommandInput}
 * @returns {@link ListLicenseManagerReportGeneratorsCommandOutput}
 * @see {@link ListLicenseManagerReportGeneratorsCommandInput} for command's `input` shape.
 * @see {@link ListLicenseManagerReportGeneratorsCommandOutput} for command's `response` shape.
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
export class ListLicenseManagerReportGeneratorsCommand extends $Command
  .classBuilder<
    ListLicenseManagerReportGeneratorsCommandInput,
    ListLicenseManagerReportGeneratorsCommandOutput,
    LicenseManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LicenseManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSLicenseManager", "ListLicenseManagerReportGenerators", {})
  .n("LicenseManagerClient", "ListLicenseManagerReportGeneratorsCommand")
  .sc(ListLicenseManagerReportGenerators)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListLicenseManagerReportGeneratorsRequest;
      output: ListLicenseManagerReportGeneratorsResponse;
    };
    sdk: {
      input: ListLicenseManagerReportGeneratorsCommandInput;
      output: ListLicenseManagerReportGeneratorsCommandOutput;
    };
  };
}
