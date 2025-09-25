// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetQueryRuntimeStatisticsInput, GetQueryRuntimeStatisticsOutput } from "../models/models_0";
import { GetQueryRuntimeStatistics } from "../schemas/schemas_9_Get";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetQueryRuntimeStatisticsCommand}.
 */
export interface GetQueryRuntimeStatisticsCommandInput extends GetQueryRuntimeStatisticsInput {}
/**
 * @public
 *
 * The output of {@link GetQueryRuntimeStatisticsCommand}.
 */
export interface GetQueryRuntimeStatisticsCommandOutput extends GetQueryRuntimeStatisticsOutput, __MetadataBearer {}

/**
 * <p>Returns query execution runtime statistics related to a single execution of a query if
 *             you have access to the workgroup in which the query ran. Statistics from the
 *                 <code>Timeline</code> section of the response object are available as soon as <a>QueryExecutionStatus$State</a> is in a SUCCEEDED or FAILED state. The
 *             remaining non-timeline statistics in the response (like stage-level input and output row
 *             count and data size) are updated asynchronously and may not be available immediately
 *             after a query completes. The non-timeline statistics are also not included when a query
 *             has row-level filters defined in Lake Formation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, GetQueryRuntimeStatisticsCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, GetQueryRuntimeStatisticsCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * // import type { AthenaClientConfig } from "@aws-sdk/client-athena";
 * const config = {}; // type is AthenaClientConfig
 * const client = new AthenaClient(config);
 * const input = { // GetQueryRuntimeStatisticsInput
 *   QueryExecutionId: "STRING_VALUE", // required
 * };
 * const command = new GetQueryRuntimeStatisticsCommand(input);
 * const response = await client.send(command);
 * // { // GetQueryRuntimeStatisticsOutput
 * //   QueryRuntimeStatistics: { // QueryRuntimeStatistics
 * //     Timeline: { // QueryRuntimeStatisticsTimeline
 * //       QueryQueueTimeInMillis: Number("long"),
 * //       ServicePreProcessingTimeInMillis: Number("long"),
 * //       QueryPlanningTimeInMillis: Number("long"),
 * //       EngineExecutionTimeInMillis: Number("long"),
 * //       ServiceProcessingTimeInMillis: Number("long"),
 * //       TotalExecutionTimeInMillis: Number("long"),
 * //     },
 * //     Rows: { // QueryRuntimeStatisticsRows
 * //       InputRows: Number("long"),
 * //       InputBytes: Number("long"),
 * //       OutputBytes: Number("long"),
 * //       OutputRows: Number("long"),
 * //     },
 * //     OutputStage: { // QueryStage
 * //       StageId: Number("long"),
 * //       State: "STRING_VALUE",
 * //       OutputBytes: Number("long"),
 * //       OutputRows: Number("long"),
 * //       InputBytes: Number("long"),
 * //       InputRows: Number("long"),
 * //       ExecutionTime: Number("long"),
 * //       QueryStagePlan: { // QueryStagePlanNode
 * //         Name: "STRING_VALUE",
 * //         Identifier: "STRING_VALUE",
 * //         Children: [ // QueryStagePlanNodes
 * //           {
 * //             Name: "STRING_VALUE",
 * //             Identifier: "STRING_VALUE",
 * //             Children: [
 * //               "<QueryStagePlanNode>",
 * //             ],
 * //             RemoteSources: [ // StringList
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         ],
 * //         RemoteSources: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       SubStages: [ // QueryStages
 * //         {
 * //           StageId: Number("long"),
 * //           State: "STRING_VALUE",
 * //           OutputBytes: Number("long"),
 * //           OutputRows: Number("long"),
 * //           InputBytes: Number("long"),
 * //           InputRows: Number("long"),
 * //           ExecutionTime: Number("long"),
 * //           QueryStagePlan: "<QueryStagePlanNode>",
 * //           SubStages: [
 * //             "<QueryStage>",
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetQueryRuntimeStatisticsCommandInput - {@link GetQueryRuntimeStatisticsCommandInput}
 * @returns {@link GetQueryRuntimeStatisticsCommandOutput}
 * @see {@link GetQueryRuntimeStatisticsCommandInput} for command's `input` shape.
 * @see {@link GetQueryRuntimeStatisticsCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for AthenaClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Indicates a platform issue, which may be due to a transient condition or
 *             outage.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that something is wrong with the input to the request. For example, a
 *             required parameter may be missing or out of range.</p>
 *
 * @throws {@link AthenaServiceException}
 * <p>Base exception class for all service exceptions from Athena service.</p>
 *
 *
 * @public
 */
export class GetQueryRuntimeStatisticsCommand extends $Command
  .classBuilder<
    GetQueryRuntimeStatisticsCommandInput,
    GetQueryRuntimeStatisticsCommandOutput,
    AthenaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AthenaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonAthena", "GetQueryRuntimeStatistics", {})
  .n("AthenaClient", "GetQueryRuntimeStatisticsCommand")
  .sc(GetQueryRuntimeStatistics)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetQueryRuntimeStatisticsInput;
      output: GetQueryRuntimeStatisticsOutput;
    };
    sdk: {
      input: GetQueryRuntimeStatisticsCommandInput;
      output: GetQueryRuntimeStatisticsCommandOutput;
    };
  };
}
