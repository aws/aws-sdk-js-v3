// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  PredictQAResultsRequest,
  PredictQAResultsRequestFilterSensitiveLog,
  PredictQAResultsResponse,
  PredictQAResultsResponseFilterSensitiveLog,
} from "../models/models_4";
import { de_PredictQAResultsCommand, se_PredictQAResultsCommand } from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PredictQAResultsCommand}.
 */
export interface PredictQAResultsCommandInput extends PredictQAResultsRequest {}
/**
 * @public
 *
 * The output of {@link PredictQAResultsCommand}.
 */
export interface PredictQAResultsCommandOutput extends PredictQAResultsResponse, __MetadataBearer {}

/**
 * <p>Predicts existing visuals or generates new visuals to answer a given query.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, PredictQAResultsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, PredictQAResultsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new QuickSightClient(config);
 * const input = { // PredictQAResultsRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   QueryText: "STRING_VALUE", // required
 *   IncludeQuickSightQIndex: "INCLUDE" || "EXCLUDE",
 *   IncludeGeneratedAnswer: "INCLUDE" || "EXCLUDE",
 *   MaxTopicsToConsider: Number("int"),
 * };
 * const command = new PredictQAResultsCommand(input);
 * const response = await client.send(command);
 * // { // PredictQAResultsResponse
 * //   PrimaryResult: { // QAResult
 * //     ResultType: "DASHBOARD_VISUAL" || "GENERATED_ANSWER" || "NO_ANSWER",
 * //     DashboardVisual: { // DashboardVisualResult
 * //       DashboardId: "STRING_VALUE",
 * //       DashboardName: "STRING_VALUE",
 * //       SheetId: "STRING_VALUE",
 * //       SheetName: "STRING_VALUE",
 * //       VisualId: "STRING_VALUE",
 * //       VisualTitle: "STRING_VALUE",
 * //       VisualSubtitle: "STRING_VALUE",
 * //       DashboardUrl: "STRING_VALUE",
 * //     },
 * //     GeneratedAnswer: { // GeneratedAnswerResult
 * //       QuestionText: "STRING_VALUE",
 * //       AnswerStatus: "ANSWER_GENERATED" || "ANSWER_RETRIEVED" || "ANSWER_DOWNGRADE",
 * //       TopicId: "STRING_VALUE",
 * //       TopicName: "STRING_VALUE",
 * //       Restatement: "STRING_VALUE",
 * //       QuestionId: "STRING_VALUE",
 * //       AnswerId: "STRING_VALUE",
 * //       QuestionUrl: "STRING_VALUE",
 * //     },
 * //   },
 * //   AdditionalResults: [ // QAResults
 * //     {
 * //       ResultType: "DASHBOARD_VISUAL" || "GENERATED_ANSWER" || "NO_ANSWER",
 * //       DashboardVisual: {
 * //         DashboardId: "STRING_VALUE",
 * //         DashboardName: "STRING_VALUE",
 * //         SheetId: "STRING_VALUE",
 * //         SheetName: "STRING_VALUE",
 * //         VisualId: "STRING_VALUE",
 * //         VisualTitle: "STRING_VALUE",
 * //         VisualSubtitle: "STRING_VALUE",
 * //         DashboardUrl: "STRING_VALUE",
 * //       },
 * //       GeneratedAnswer: {
 * //         QuestionText: "STRING_VALUE",
 * //         AnswerStatus: "ANSWER_GENERATED" || "ANSWER_RETRIEVED" || "ANSWER_DOWNGRADE",
 * //         TopicId: "STRING_VALUE",
 * //         TopicName: "STRING_VALUE",
 * //         Restatement: "STRING_VALUE",
 * //         QuestionId: "STRING_VALUE",
 * //         AnswerId: "STRING_VALUE",
 * //         QuestionUrl: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param PredictQAResultsCommandInput - {@link PredictQAResultsCommandInput}
 * @returns {@link PredictQAResultsCommandOutput}
 * @see {@link PredictQAResultsCommandInput} for command's `input` shape.
 * @see {@link PredictQAResultsCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon QuickSight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 * @public
 */
export class PredictQAResultsCommand extends $Command
  .classBuilder<
    PredictQAResultsCommandInput,
    PredictQAResultsCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("QuickSight_20180401", "PredictQAResults", {})
  .n("QuickSightClient", "PredictQAResultsCommand")
  .f(PredictQAResultsRequestFilterSensitiveLog, PredictQAResultsResponseFilterSensitiveLog)
  .ser(se_PredictQAResultsCommand)
  .de(de_PredictQAResultsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PredictQAResultsRequest;
      output: PredictQAResultsResponse;
    };
    sdk: {
      input: PredictQAResultsCommandInput;
      output: PredictQAResultsCommandOutput;
    };
  };
}
