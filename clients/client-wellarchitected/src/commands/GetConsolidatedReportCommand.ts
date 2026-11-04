// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetConsolidatedReportInput, GetConsolidatedReportOutput } from "../models/models_0";
import { GetConsolidatedReport$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Get a consolidated report of your workloads.
 *
 * You can optionally choose to include workloads that have been shared with you.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, GetConsolidatedReportCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, GetConsolidatedReportCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // import type { WellArchitectedClientConfig } from "@aws-sdk/client-wellarchitected";
 * const config = {}; // type is WellArchitectedClientConfig
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
 *
 * User does not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The resource has already been processed, was deleted, or is too large.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * There is a problem with the Well-Architected Tool API service.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The user input is not valid.
 *
 * @throws {@link WellArchitectedServiceException}
 *
 * Base exception class for all service exceptions from WellArchitected service.
 *
 * @public
 */
export class GetConsolidatedReportCommand extends command<GetConsolidatedReportCommandInput, GetConsolidatedReportCommandOutput>(
  _ep0,
  _mw0,
  "GetConsolidatedReport",
  GetConsolidatedReport$
) {
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
