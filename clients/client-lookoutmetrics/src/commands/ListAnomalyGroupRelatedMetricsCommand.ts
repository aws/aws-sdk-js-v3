// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LookoutMetricsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutMetricsClient";
import { ListAnomalyGroupRelatedMetricsRequest, ListAnomalyGroupRelatedMetricsResponse } from "../models/models_0";
import {
  de_ListAnomalyGroupRelatedMetricsCommand,
  se_ListAnomalyGroupRelatedMetricsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAnomalyGroupRelatedMetricsCommand}.
 */
export interface ListAnomalyGroupRelatedMetricsCommandInput extends ListAnomalyGroupRelatedMetricsRequest {}
/**
 * @public
 *
 * The output of {@link ListAnomalyGroupRelatedMetricsCommand}.
 */
export interface ListAnomalyGroupRelatedMetricsCommandOutput
  extends ListAnomalyGroupRelatedMetricsResponse,
    __MetadataBearer {}

/**
 * <p>Returns a list of measures that are potential causes or effects of an
 *             anomaly group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutMetricsClient, ListAnomalyGroupRelatedMetricsCommand } from "@aws-sdk/client-lookoutmetrics"; // ES Modules import
 * // const { LookoutMetricsClient, ListAnomalyGroupRelatedMetricsCommand } = require("@aws-sdk/client-lookoutmetrics"); // CommonJS import
 * // import type { LookoutMetricsClientConfig } from "@aws-sdk/client-lookoutmetrics";
 * const config = {}; // type is LookoutMetricsClientConfig
 * const client = new LookoutMetricsClient(config);
 * const input = { // ListAnomalyGroupRelatedMetricsRequest
 *   AnomalyDetectorArn: "STRING_VALUE", // required
 *   AnomalyGroupId: "STRING_VALUE", // required
 *   RelationshipTypeFilter: "CAUSE_OF_INPUT_ANOMALY_GROUP" || "EFFECT_OF_INPUT_ANOMALY_GROUP",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListAnomalyGroupRelatedMetricsCommand(input);
 * const response = await client.send(command);
 * // { // ListAnomalyGroupRelatedMetricsResponse
 * //   InterMetricImpactList: [ // InterMetricImpactList
 * //     { // InterMetricImpactDetails
 * //       MetricName: "STRING_VALUE",
 * //       AnomalyGroupId: "STRING_VALUE",
 * //       RelationshipType: "CAUSE_OF_INPUT_ANOMALY_GROUP" || "EFFECT_OF_INPUT_ANOMALY_GROUP",
 * //       ContributionPercentage: Number("double"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAnomalyGroupRelatedMetricsCommandInput - {@link ListAnomalyGroupRelatedMetricsCommandInput}
 * @returns {@link ListAnomalyGroupRelatedMetricsCommandOutput}
 * @see {@link ListAnomalyGroupRelatedMetricsCommandInput} for command's `input` shape.
 * @see {@link ListAnomalyGroupRelatedMetricsCommandOutput} for command's `response` shape.
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
export class ListAnomalyGroupRelatedMetricsCommand extends $Command
  .classBuilder<
    ListAnomalyGroupRelatedMetricsCommandInput,
    ListAnomalyGroupRelatedMetricsCommandOutput,
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
  .s("LookoutMetrics", "ListAnomalyGroupRelatedMetrics", {})
  .n("LookoutMetricsClient", "ListAnomalyGroupRelatedMetricsCommand")
  .f(void 0, void 0)
  .ser(se_ListAnomalyGroupRelatedMetricsCommand)
  .de(de_ListAnomalyGroupRelatedMetricsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAnomalyGroupRelatedMetricsRequest;
      output: ListAnomalyGroupRelatedMetricsResponse;
    };
    sdk: {
      input: ListAnomalyGroupRelatedMetricsCommandInput;
      output: ListAnomalyGroupRelatedMetricsCommandOutput;
    };
  };
}
