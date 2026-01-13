// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { EvidentlyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EvidentlyClient";
import type { GetExperimentResultsRequest, GetExperimentResultsResponse } from "../models/models_0";
import { GetExperimentResults$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetExperimentResultsCommand}.
 */
export interface GetExperimentResultsCommandInput extends GetExperimentResultsRequest {}
/**
 * @public
 *
 * The output of {@link GetExperimentResultsCommand}.
 */
export interface GetExperimentResultsCommandOutput extends GetExperimentResultsResponse, __MetadataBearer {}

/**
 * <p>Retrieves the results of a running or completed experiment. No results are available until
 *        there have been 100 events for each variation and at least 10 minutes have passed since the start of the experiment.
 *        To increase the statistical power, Evidently performs an additional offline p-value analysis at the end of the experiment.
 *        Offline p-value analysis can detect statistical significance in some cases where the anytime p-values used during
 *        the experiment do not find statistical significance.</p>
 *          <p>Experiment
 *        results are available up to 63 days after the start of the experiment. They are not available after that because
 *        of CloudWatch data retention policies.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EvidentlyClient, GetExperimentResultsCommand } from "@aws-sdk/client-evidently"; // ES Modules import
 * // const { EvidentlyClient, GetExperimentResultsCommand } = require("@aws-sdk/client-evidently"); // CommonJS import
 * // import type { EvidentlyClientConfig } from "@aws-sdk/client-evidently";
 * const config = {}; // type is EvidentlyClientConfig
 * const client = new EvidentlyClient(config);
 * const input = { // GetExperimentResultsRequest
 *   project: "STRING_VALUE", // required
 *   experiment: "STRING_VALUE", // required
 *   startTime: new Date("TIMESTAMP"),
 *   endTime: new Date("TIMESTAMP"),
 *   metricNames: [ // MetricNameList // required
 *     "STRING_VALUE",
 *   ],
 *   treatmentNames: [ // TreatmentNameList // required
 *     "STRING_VALUE",
 *   ],
 *   baseStat: "STRING_VALUE",
 *   resultStats: [ // ExperimentResultRequestTypeList
 *     "STRING_VALUE",
 *   ],
 *   reportNames: [ // ExperimentReportNameList
 *     "STRING_VALUE",
 *   ],
 *   period: Number("long"),
 * };
 * const command = new GetExperimentResultsCommand(input);
 * const response = await client.send(command);
 * // { // GetExperimentResultsResponse
 * //   resultsData: [ // ExperimentResultsDataList
 * //     { // ExperimentResultsData
 * //       metricName: "STRING_VALUE",
 * //       treatmentName: "STRING_VALUE",
 * //       resultStat: "STRING_VALUE",
 * //       values: [ // DoubleValueList
 * //         Number("double"),
 * //       ],
 * //     },
 * //   ],
 * //   reports: [ // ExperimentReportList
 * //     { // ExperimentReport
 * //       metricName: "STRING_VALUE",
 * //       treatmentName: "STRING_VALUE",
 * //       reportName: "STRING_VALUE",
 * //       content: "STRING_VALUE",
 * //     },
 * //   ],
 * //   timestamps: [ // TimestampList
 * //     new Date("TIMESTAMP"),
 * //   ],
 * //   details: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetExperimentResultsCommandInput - {@link GetExperimentResultsCommandInput}
 * @returns {@link GetExperimentResultsCommandOutput}
 * @see {@link GetExperimentResultsCommandInput} for command's `input` shape.
 * @see {@link GetExperimentResultsCommandOutput} for command's `response` shape.
 * @see {@link EvidentlyClientResolvedConfig | config} for EvidentlyClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action. </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A resource was in an inconsistent state during an update or a deletion.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because of request throttling. Retry the request.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The value of a parameter in the request caused an error.</p>
 *
 * @throws {@link EvidentlyServiceException}
 * <p>Base exception class for all service exceptions from Evidently service.</p>
 *
 *
 * @public
 */
export class GetExperimentResultsCommand extends $Command
  .classBuilder<
    GetExperimentResultsCommandInput,
    GetExperimentResultsCommandOutput,
    EvidentlyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EvidentlyClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Evidently", "GetExperimentResults", {})
  .n("EvidentlyClient", "GetExperimentResultsCommand")
  .sc(GetExperimentResults$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetExperimentResultsRequest;
      output: GetExperimentResultsResponse;
    };
    sdk: {
      input: GetExperimentResultsCommandInput;
      output: GetExperimentResultsCommandOutput;
    };
  };
}
