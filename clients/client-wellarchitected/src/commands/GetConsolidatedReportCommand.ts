// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetConsolidatedReportInput, GetConsolidatedReportOutput } from "../models/models_0";
import { de_GetConsolidatedReportCommand, se_GetConsolidatedReportCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetConsolidatedReportCommand}.
 */
export interface GetConsolidatedReportCommandInput extends GetConsolidatedReportInput {}
/**
 * @public
 *
 * The output of {@link GetConsolidatedReportCommand}.
 */
export interface GetConsolidatedReportCommandOutput extends GetConsolidatedReportOutput, __MetadataBearer {}

/**
 * <p>Get a consolidated report of your workloads.</p>
 *          <p>You can optionally choose to include workloads that have been shared with you.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, GetConsolidatedReportCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, GetConsolidatedReportCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new WellArchitectedClient(config);
 * const input = { // GetConsolidatedReportInput
 *   Format: "PDF" || "JSON", // required
 *   IncludeSharedResources: true || false,
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new GetConsolidatedReportCommand(input);
 * const response = await client.send(command);
 * // { // GetConsolidatedReportOutput
 * //   Metrics: [ // ConsolidatedReportMetrics
 * //     { // ConsolidatedReportMetric
 * //       MetricType: "WORKLOAD",
 * //       RiskCounts: { // RiskCounts
 * //         "<keys>": Number("int"),
 * //       },
 * //       WorkloadId: "STRING_VALUE",
 * //       WorkloadName: "STRING_VALUE",
 * //       WorkloadArn: "STRING_VALUE",
 * //       UpdatedAt: new Date("TIMESTAMP"),
 * //       Lenses: [ // LensMetrics
 * //         { // LensMetric
 * //           LensArn: "STRING_VALUE",
 * //           Pillars: [ // PillarMetrics
 * //             { // PillarMetric
 * //               PillarId: "STRING_VALUE",
 * //               RiskCounts: {
 * //                 "<keys>": Number("int"),
 * //               },
 * //               Questions: [ // QuestionMetrics
 * //                 { // QuestionMetric
 * //                   QuestionId: "STRING_VALUE",
 * //                   Risk: "UNANSWERED" || "HIGH" || "MEDIUM" || "NONE" || "NOT_APPLICABLE",
 * //                   BestPractices: [ // BestPractices
 * //                     { // BestPractice
 * //                       ChoiceId: "STRING_VALUE",
 * //                       ChoiceTitle: "STRING_VALUE",
 * //                     },
 * //                   ],
 * //                 },
 * //               ],
 * //             },
 * //           ],
 * //           RiskCounts: "<RiskCounts>",
 * //         },
 * //       ],
 * //       LensesAppliedCount: Number("int"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   Base64String: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetConsolidatedReportCommandInput - {@link GetConsolidatedReportCommandInput}
 * @returns {@link GetConsolidatedReportCommandOutput}
 * @see {@link GetConsolidatedReportCommandInput} for command's `input` shape.
 * @see {@link GetConsolidatedReportCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for WellArchitectedClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The resource has already been processed, was deleted, or is too large.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is a problem with the Well-Architected Tool API service.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The user input is not valid.</p>
 *
 * @throws {@link WellArchitectedServiceException}
 * <p>Base exception class for all service exceptions from WellArchitected service.</p>
 *
 * @public
 */
export class GetConsolidatedReportCommand extends $Command
  .classBuilder<
    GetConsolidatedReportCommandInput,
    GetConsolidatedReportCommandOutput,
    WellArchitectedClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WellArchitectedClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WellArchitectedApiServiceLambda", "GetConsolidatedReport", {})
  .n("WellArchitectedClient", "GetConsolidatedReportCommand")
  .f(void 0, void 0)
  .ser(se_GetConsolidatedReportCommand)
  .de(de_GetConsolidatedReportCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetConsolidatedReportInput;
      output: GetConsolidatedReportOutput;
    };
    sdk: {
      input: GetConsolidatedReportCommandInput;
      output: GetConsolidatedReportCommandOutput;
    };
  };
}
