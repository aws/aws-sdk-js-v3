// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  MigrationHubStrategyClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MigrationHubStrategyClient";
import { GetPortfolioSummaryRequest, GetPortfolioSummaryResponse } from "../models/models_0";
import { GetPortfolioSummary } from "../schemas/schemas_3_Get";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetPortfolioSummaryCommand}.
 */
export interface GetPortfolioSummaryCommandInput extends GetPortfolioSummaryRequest {}
/**
 * @public
 *
 * The output of {@link GetPortfolioSummaryCommand}.
 */
export interface GetPortfolioSummaryCommandOutput extends GetPortfolioSummaryResponse, __MetadataBearer {}

/**
 * <p> Retrieves overall summary including the number of servers to rehost and the overall
 *       number of anti-patterns. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubStrategyClient, GetPortfolioSummaryCommand } from "@aws-sdk/client-migrationhubstrategy"; // ES Modules import
 * // const { MigrationHubStrategyClient, GetPortfolioSummaryCommand } = require("@aws-sdk/client-migrationhubstrategy"); // CommonJS import
 * // import type { MigrationHubStrategyClientConfig } from "@aws-sdk/client-migrationhubstrategy";
 * const config = {}; // type is MigrationHubStrategyClientConfig
 * const client = new MigrationHubStrategyClient(config);
 * const input = {};
 * const command = new GetPortfolioSummaryCommand(input);
 * const response = await client.send(command);
 * // { // GetPortfolioSummaryResponse
 * //   assessmentSummary: { // AssessmentSummary
 * //     listServerStrategySummary: [ // ListStrategySummary
 * //       { // StrategySummary
 * //         strategy: "STRING_VALUE",
 * //         count: Number("int"),
 * //       },
 * //     ],
 * //     listApplicationComponentStrategySummary: [
 * //       {
 * //         strategy: "STRING_VALUE",
 * //         count: Number("int"),
 * //       },
 * //     ],
 * //     listAntipatternSeveritySummary: [ // ListAntipatternSeveritySummary
 * //       { // AntipatternSeveritySummary
 * //         severity: "STRING_VALUE",
 * //         count: Number("int"),
 * //       },
 * //     ],
 * //     listApplicationComponentSummary: [ // ListApplicationComponentSummary
 * //       { // ApplicationComponentSummary
 * //         appType: "STRING_VALUE",
 * //         count: Number("int"),
 * //       },
 * //     ],
 * //     listServerSummary: [ // ListServerSummary
 * //       { // ServerSummary
 * //         ServerOsType: "STRING_VALUE",
 * //         count: Number("int"),
 * //       },
 * //     ],
 * //     antipatternReportS3Object: { // S3Object
 * //       s3Bucket: "STRING_VALUE",
 * //       s3key: "STRING_VALUE",
 * //     },
 * //     antipatternReportStatus: "STRING_VALUE",
 * //     antipatternReportStatusMessage: "STRING_VALUE",
 * //     lastAnalyzedTimestamp: new Date("TIMESTAMP"),
 * //     listApplicationComponentStatusSummary: [ // ListApplicationComponentStatusSummary
 * //       { // ApplicationComponentStatusSummary
 * //         srcCodeOrDbAnalysisStatus: "STRING_VALUE",
 * //         count: Number("int"),
 * //       },
 * //     ],
 * //     listServerStatusSummary: [ // ListServerStatusSummary
 * //       { // ServerStatusSummary
 * //         runTimeAssessmentStatus: "STRING_VALUE",
 * //         count: Number("int"),
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetPortfolioSummaryCommandInput - {@link GetPortfolioSummaryCommandInput}
 * @returns {@link GetPortfolioSummaryCommandOutput}
 * @see {@link GetPortfolioSummaryCommandInput} for command's `input` shape.
 * @see {@link GetPortfolioSummaryCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubStrategyClientResolvedConfig | config} for MigrationHubStrategyClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> The user does not have permission to perform the action. Check the
 *       AWS Identity and Access Management (IAM) policy associated with this user.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> The server experienced an internal error. Try again. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p> The request was denied due to request throttling. </p>
 *
 * @throws {@link MigrationHubStrategyServiceException}
 * <p>Base exception class for all service exceptions from MigrationHubStrategy service.</p>
 *
 *
 * @public
 */
export class GetPortfolioSummaryCommand extends $Command
  .classBuilder<
    GetPortfolioSummaryCommandInput,
    GetPortfolioSummaryCommandOutput,
    MigrationHubStrategyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MigrationHubStrategyClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSMigrationHubStrategyRecommendation", "GetPortfolioSummary", {})
  .n("MigrationHubStrategyClient", "GetPortfolioSummaryCommand")
  .sc(GetPortfolioSummary)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetPortfolioSummaryResponse;
    };
    sdk: {
      input: GetPortfolioSummaryCommandInput;
      output: GetPortfolioSummaryCommandOutput;
    };
  };
}
