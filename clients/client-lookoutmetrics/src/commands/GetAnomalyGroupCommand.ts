// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LookoutMetricsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutMetricsClient";
import { GetAnomalyGroupRequest, GetAnomalyGroupResponse } from "../models/models_0";
import { de_GetAnomalyGroupCommand, se_GetAnomalyGroupCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAnomalyGroupCommand}.
 */
export interface GetAnomalyGroupCommandInput extends GetAnomalyGroupRequest {}
/**
 * @public
 *
 * The output of {@link GetAnomalyGroupCommand}.
 */
export interface GetAnomalyGroupCommandOutput extends GetAnomalyGroupResponse, __MetadataBearer {}

/**
 * <p>Returns details about a group of anomalous metrics.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutMetricsClient, GetAnomalyGroupCommand } from "@aws-sdk/client-lookoutmetrics"; // ES Modules import
 * // const { LookoutMetricsClient, GetAnomalyGroupCommand } = require("@aws-sdk/client-lookoutmetrics"); // CommonJS import
 * const client = new LookoutMetricsClient(config);
 * const input = { // GetAnomalyGroupRequest
 *   AnomalyGroupId: "STRING_VALUE", // required
 *   AnomalyDetectorArn: "STRING_VALUE", // required
 * };
 * const command = new GetAnomalyGroupCommand(input);
 * const response = await client.send(command);
 * // { // GetAnomalyGroupResponse
 * //   AnomalyGroup: { // AnomalyGroup
 * //     StartTime: "STRING_VALUE",
 * //     EndTime: "STRING_VALUE",
 * //     AnomalyGroupId: "STRING_VALUE",
 * //     AnomalyGroupScore: Number("double"),
 * //     PrimaryMetricName: "STRING_VALUE",
 * //     MetricLevelImpactList: [ // MetricLevelImpactList
 * //       { // MetricLevelImpact
 * //         MetricName: "STRING_VALUE",
 * //         NumTimeSeries: Number("int"),
 * //         ContributionMatrix: { // ContributionMatrix
 * //           DimensionContributionList: [ // DimensionContributionList
 * //             { // DimensionContribution
 * //               DimensionName: "STRING_VALUE",
 * //               DimensionValueContributionList: [ // DimensionValueContributionList
 * //                 { // DimensionValueContribution
 * //                   DimensionValue: "STRING_VALUE",
 * //                   ContributionScore: Number("double"),
 * //                 },
 * //               ],
 * //             },
 * //           ],
 * //         },
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAnomalyGroupCommandInput - {@link GetAnomalyGroupCommandInput}
 * @returns {@link GetAnomalyGroupCommandOutput}
 * @see {@link GetAnomalyGroupCommandInput} for command's `input` shape.
 * @see {@link GetAnomalyGroupCommandOutput} for command's `response` shape.
 * @see {@link LookoutMetricsClientResolvedConfig | config} for LookoutMetricsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found. Check the ARN of the resource and try again.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request was denied due to too many requests being submitted at the same time.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the AWS service. Check your input values and try
 *       again.</p>
 *
 * @throws {@link LookoutMetricsServiceException}
 * <p>Base exception class for all service exceptions from LookoutMetrics service.</p>
 *
 *
 * @public
 */
export class GetAnomalyGroupCommand extends $Command
  .classBuilder<
    GetAnomalyGroupCommandInput,
    GetAnomalyGroupCommandOutput,
    LookoutMetricsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LookoutMetricsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("LookoutMetrics", "GetAnomalyGroup", {})
  .n("LookoutMetricsClient", "GetAnomalyGroupCommand")
  .f(void 0, void 0)
  .ser(se_GetAnomalyGroupCommand)
  .de(de_GetAnomalyGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAnomalyGroupRequest;
      output: GetAnomalyGroupResponse;
    };
    sdk: {
      input: GetAnomalyGroupCommandInput;
      output: GetAnomalyGroupCommandOutput;
    };
  };
}
