// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListFlywheelIterationHistoryRequest, ListFlywheelIterationHistoryResponse } from "../models/models_0";
import { ListFlywheelIterationHistory } from "../schemas/schemas_10_Flywheel";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListFlywheelIterationHistoryCommand}.
 */
export interface ListFlywheelIterationHistoryCommandInput extends ListFlywheelIterationHistoryRequest {}
/**
 * @public
 *
 * The output of {@link ListFlywheelIterationHistoryCommand}.
 */
export interface ListFlywheelIterationHistoryCommandOutput
  extends ListFlywheelIterationHistoryResponse,
    __MetadataBearer {}

/**
 * <p>Information about the history of a flywheel iteration.
 *       For more information about flywheels, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html">
 *       Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, ListFlywheelIterationHistoryCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, ListFlywheelIterationHistoryCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * // import type { ComprehendClientConfig } from "@aws-sdk/client-comprehend";
 * const config = {}; // type is ComprehendClientConfig
 * const client = new ComprehendClient(config);
 * const input = { // ListFlywheelIterationHistoryRequest
 *   FlywheelArn: "STRING_VALUE", // required
 *   Filter: { // FlywheelIterationFilter
 *     CreationTimeAfter: new Date("TIMESTAMP"),
 *     CreationTimeBefore: new Date("TIMESTAMP"),
 *   },
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListFlywheelIterationHistoryCommand(input);
 * const response = await client.send(command);
 * // { // ListFlywheelIterationHistoryResponse
 * //   FlywheelIterationPropertiesList: [ // FlywheelIterationPropertiesList
 * //     { // FlywheelIterationProperties
 * //       FlywheelArn: "STRING_VALUE",
 * //       FlywheelIterationId: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       EndTime: new Date("TIMESTAMP"),
 * //       Status: "TRAINING" || "EVALUATING" || "COMPLETED" || "FAILED" || "STOP_REQUESTED" || "STOPPED",
 * //       Message: "STRING_VALUE",
 * //       EvaluatedModelArn: "STRING_VALUE",
 * //       EvaluatedModelMetrics: { // FlywheelModelEvaluationMetrics
 * //         AverageF1Score: Number("double"),
 * //         AveragePrecision: Number("double"),
 * //         AverageRecall: Number("double"),
 * //         AverageAccuracy: Number("double"),
 * //       },
 * //       TrainedModelArn: "STRING_VALUE",
 * //       TrainedModelMetrics: {
 * //         AverageF1Score: Number("double"),
 * //         AveragePrecision: Number("double"),
 * //         AverageRecall: Number("double"),
 * //         AverageAccuracy: Number("double"),
 * //       },
 * //       EvaluationManifestS3Prefix: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListFlywheelIterationHistoryCommandInput - {@link ListFlywheelIterationHistoryCommandInput}
 * @returns {@link ListFlywheelIterationHistoryCommandOutput}
 * @see {@link ListFlywheelIterationHistoryCommandInput} for command's `input` shape.
 * @see {@link ListFlywheelIterationHistoryCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for ComprehendClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link InvalidFilterException} (client fault)
 *  <p>The filter specified for the operation is invalid. Specify a different
 *       filter.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is invalid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource ARN was not found. Check the ARN and try your request again.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 * @throws {@link ComprehendServiceException}
 * <p>Base exception class for all service exceptions from Comprehend service.</p>
 *
 *
 * @public
 */
export class ListFlywheelIterationHistoryCommand extends $Command
  .classBuilder<
    ListFlywheelIterationHistoryCommandInput,
    ListFlywheelIterationHistoryCommandOutput,
    ComprehendClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ComprehendClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Comprehend_20171127", "ListFlywheelIterationHistory", {})
  .n("ComprehendClient", "ListFlywheelIterationHistoryCommand")
  .sc(ListFlywheelIterationHistory)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListFlywheelIterationHistoryRequest;
      output: ListFlywheelIterationHistoryResponse;
    };
    sdk: {
      input: ListFlywheelIterationHistoryCommandInput;
      output: ListFlywheelIterationHistoryCommandOutput;
    };
  };
}
