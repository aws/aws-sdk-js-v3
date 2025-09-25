// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { ListEventPredictionsRequest, ListEventPredictionsResult } from "../models/models_0";
import { ListEventPredictions } from "../schemas/schemas_36_ListEventPredictions";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListEventPredictionsCommand}.
 */
export interface ListEventPredictionsCommandInput extends ListEventPredictionsRequest {}
/**
 * @public
 *
 * The output of {@link ListEventPredictionsCommand}.
 */
export interface ListEventPredictionsCommandOutput extends ListEventPredictionsResult, __MetadataBearer {}

/**
 * <p>Gets a list of past predictions. The list can be filtered by detector ID, detector version ID, event ID, event type, or by specifying a time period.
 *     If filter is not specified, the most recent prediction is returned.</p>
 *          <p>For example, the following filter lists all past predictions for <code>xyz</code> event type -
 *     <code>\{
 *         "eventType":\{
 *         "value": "xyz" \}”
 *         \}  </code>
 *          </p>
 *          <p>This is a paginated API. If you provide a null <code>maxResults</code>, this action will retrieve a maximum of 10 records per page.
 *   If you provide a <code>maxResults</code>, the value must be between 50 and 100. To get the next page results, provide
 *   the <code>nextToken</code> from the response as part of your request. A null <code>nextToken</code> fetches the records from the beginning.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, ListEventPredictionsCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, ListEventPredictionsCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * // import type { FraudDetectorClientConfig } from "@aws-sdk/client-frauddetector";
 * const config = {}; // type is FraudDetectorClientConfig
 * const client = new FraudDetectorClient(config);
 * const input = { // ListEventPredictionsRequest
 *   eventId: { // FilterCondition
 *     value: "STRING_VALUE",
 *   },
 *   eventType: {
 *     value: "STRING_VALUE",
 *   },
 *   detectorId: {
 *     value: "STRING_VALUE",
 *   },
 *   detectorVersionId: {
 *     value: "STRING_VALUE",
 *   },
 *   predictionTimeRange: { // PredictionTimeRange
 *     startTime: "STRING_VALUE", // required
 *     endTime: "STRING_VALUE", // required
 *   },
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListEventPredictionsCommand(input);
 * const response = await client.send(command);
 * // { // ListEventPredictionsResult
 * //   eventPredictionSummaries: [ // ListOfEventPredictionSummaries
 * //     { // EventPredictionSummary
 * //       eventId: "STRING_VALUE",
 * //       eventTypeName: "STRING_VALUE",
 * //       eventTimestamp: "STRING_VALUE",
 * //       predictionTimestamp: "STRING_VALUE",
 * //       detectorId: "STRING_VALUE",
 * //       detectorVersionId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEventPredictionsCommandInput - {@link ListEventPredictionsCommandInput}
 * @returns {@link ListEventPredictionsCommandOutput}
 * @see {@link ListEventPredictionsCommandInput} for command's `input` shape.
 * @see {@link ListEventPredictionsCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for FraudDetectorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>An exception indicating Amazon Fraud Detector does not have the needed permissions. This can occur if you submit a request, such as <code>PutExternalModel</code>, that specifies a role that is not in your account.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An exception indicating an internal server error.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>An exception indicating a throttling error.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception indicating a specified value is not allowed.</p>
 *
 * @throws {@link FraudDetectorServiceException}
 * <p>Base exception class for all service exceptions from FraudDetector service.</p>
 *
 *
 * @public
 */
export class ListEventPredictionsCommand extends $Command
  .classBuilder<
    ListEventPredictionsCommandInput,
    ListEventPredictionsCommandOutput,
    FraudDetectorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FraudDetectorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSHawksNestServiceFacade", "ListEventPredictions", {})
  .n("FraudDetectorClient", "ListEventPredictionsCommand")
  .sc(ListEventPredictions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEventPredictionsRequest;
      output: ListEventPredictionsResult;
    };
    sdk: {
      input: ListEventPredictionsCommandInput;
      output: ListEventPredictionsCommandOutput;
    };
  };
}
