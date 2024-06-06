// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListAvailableResourceMetricsRequest, ListAvailableResourceMetricsResponse } from "../models/models_0";
import { PIClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PIClient";
import {
  de_ListAvailableResourceMetricsCommand,
  se_ListAvailableResourceMetricsCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAvailableResourceMetricsCommand}.
 */
export interface ListAvailableResourceMetricsCommandInput extends ListAvailableResourceMetricsRequest {}
/**
 * @public
 *
 * The output of {@link ListAvailableResourceMetricsCommand}.
 */
export interface ListAvailableResourceMetricsCommandOutput
  extends ListAvailableResourceMetricsResponse,
    __MetadataBearer {}

/**
 * <p>Retrieve metrics of the specified types that can be queried for a specified DB instance.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PIClient, ListAvailableResourceMetricsCommand } from "@aws-sdk/client-pi"; // ES Modules import
 * // const { PIClient, ListAvailableResourceMetricsCommand } = require("@aws-sdk/client-pi"); // CommonJS import
 * const client = new PIClient(config);
 * const input = { // ListAvailableResourceMetricsRequest
 *   ServiceType: "RDS" || "DOCDB", // required
 *   Identifier: "STRING_VALUE", // required
 *   MetricTypes: [ // MetricTypeList // required
 *     "STRING_VALUE",
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListAvailableResourceMetricsCommand(input);
 * const response = await client.send(command);
 * // { // ListAvailableResourceMetricsResponse
 * //   Metrics: [ // ResponseResourceMetricList
 * //     { // ResponseResourceMetric
 * //       Metric: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Unit: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAvailableResourceMetricsCommandInput - {@link ListAvailableResourceMetricsCommandInput}
 * @returns {@link ListAvailableResourceMetricsCommandOutput}
 * @see {@link ListAvailableResourceMetricsCommandInput} for command's `input` shape.
 * @see {@link ListAvailableResourceMetricsCommandOutput} for command's `response` shape.
 * @see {@link PIClientResolvedConfig | config} for PIClient's `config` shape.
 *
 * @throws {@link InternalServiceError} (server fault)
 *  <p>The request failed due to an unknown error.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>One of the arguments provided is invalid for this request.</p>
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *  <p>The user is not authorized to perform this request.</p>
 *
 * @throws {@link PIServiceException}
 * <p>Base exception class for all service exceptions from PI service.</p>
 *
 * @public
 */
export class ListAvailableResourceMetricsCommand extends $Command
  .classBuilder<
    ListAvailableResourceMetricsCommandInput,
    ListAvailableResourceMetricsCommandOutput,
    PIClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: PIClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("PerformanceInsightsv20180227", "ListAvailableResourceMetrics", {})
  .n("PIClient", "ListAvailableResourceMetricsCommand")
  .f(void 0, void 0)
  .ser(se_ListAvailableResourceMetricsCommand)
  .de(de_ListAvailableResourceMetricsCommand)
  .build() {}
