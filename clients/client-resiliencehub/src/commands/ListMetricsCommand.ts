// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListMetricsRequest, ListMetricsResponse } from "../models/models_0";
import { ResiliencehubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResiliencehubClient";
import { ListMetrics } from "../schemas/schemas_10_ListMetrics";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListMetricsCommand}.
 */
export interface ListMetricsCommandInput extends ListMetricsRequest {}
/**
 * @public
 *
 * The output of {@link ListMetricsCommand}.
 */
export interface ListMetricsCommandOutput extends ListMetricsResponse, __MetadataBearer {}

/**
 * <p>Lists the metrics that can be exported.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResiliencehubClient, ListMetricsCommand } from "@aws-sdk/client-resiliencehub"; // ES Modules import
 * // const { ResiliencehubClient, ListMetricsCommand } = require("@aws-sdk/client-resiliencehub"); // CommonJS import
 * // import type { ResiliencehubClientConfig } from "@aws-sdk/client-resiliencehub";
 * const config = {}; // type is ResiliencehubClientConfig
 * const client = new ResiliencehubClient(config);
 * const input = { // ListMetricsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   fields: [ // FieldList
 *     { // Field
 *       name: "STRING_VALUE", // required
 *       aggregation: "Min" || "Max" || "Sum" || "Avg" || "Count",
 *     },
 *   ],
 *   dataSource: "STRING_VALUE",
 *   conditions: [ // ConditionList
 *     { // Condition
 *       field: "STRING_VALUE", // required
 *       operator: "Equals" || "NotEquals" || "GreaterThen" || "GreaterOrEquals" || "LessThen" || "LessOrEquals", // required
 *       value: "STRING_VALUE",
 *     },
 *   ],
 *   sorts: [ // SortList
 *     { // Sort
 *       field: "STRING_VALUE", // required
 *       ascending: true || false,
 *     },
 *   ],
 * };
 * const command = new ListMetricsCommand(input);
 * const response = await client.send(command);
 * // { // ListMetricsResponse
 * //   rows: [ // RowList // required
 * //     [ // Row
 * //       "STRING_VALUE",
 * //     ],
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListMetricsCommandInput - {@link ListMetricsCommandInput}
 * @returns {@link ListMetricsCommandOutput}
 * @see {@link ListMetricsCommandInput} for command's `input` shape.
 * @see {@link ListMetricsCommandOutput} for command's `response` shape.
 * @see {@link ResiliencehubClientResolvedConfig | config} for ResiliencehubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permissions to perform the requested operation. The user or role that is
 *       making the request must have at least one IAM permissions policy attached that grants the
 *       required permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Resilience Hub
 *       service.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>This exception occurs when you have exceeded the limit on the number of requests per second.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>This exception occurs when a request is not valid.</p>
 *
 * @throws {@link ResiliencehubServiceException}
 * <p>Base exception class for all service exceptions from Resiliencehub service.</p>
 *
 *
 * @public
 */
export class ListMetricsCommand extends $Command
  .classBuilder<
    ListMetricsCommandInput,
    ListMetricsCommandOutput,
    ResiliencehubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ResiliencehubClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsResilienceHub", "ListMetrics", {})
  .n("ResiliencehubClient", "ListMetricsCommand")
  .sc(ListMetrics)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListMetricsRequest;
      output: ListMetricsResponse;
    };
    sdk: {
      input: ListMetricsCommandInput;
      output: ListMetricsCommandOutput;
    };
  };
}
