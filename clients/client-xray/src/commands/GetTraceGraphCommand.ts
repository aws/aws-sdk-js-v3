// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetTraceGraphRequest, GetTraceGraphResult } from "../models/models_0";
import { GetTraceGraph } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, XRayClientResolvedConfig } from "../XRayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTraceGraphCommand}.
 */
export interface GetTraceGraphCommandInput extends GetTraceGraphRequest {}
/**
 * @public
 *
 * The output of {@link GetTraceGraphCommand}.
 */
export interface GetTraceGraphCommandOutput extends GetTraceGraphResult, __MetadataBearer {}

/**
 * <p>Retrieves a service graph for one or more specific trace IDs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, GetTraceGraphCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, GetTraceGraphCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * // import type { XRayClientConfig } from "@aws-sdk/client-xray";
 * const config = {}; // type is XRayClientConfig
 * const client = new XRayClient(config);
 * const input = { // GetTraceGraphRequest
 *   TraceIds: [ // TraceIdList // required
 *     "STRING_VALUE",
 *   ],
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetTraceGraphCommand(input);
 * const response = await client.send(command);
 * // { // GetTraceGraphResult
 * //   Services: [ // ServiceList
 * //     { // Service
 * //       ReferenceId: Number("int"),
 * //       Name: "STRING_VALUE",
 * //       Names: [ // ServiceNames
 * //         "STRING_VALUE",
 * //       ],
 * //       Root: true || false,
 * //       AccountId: "STRING_VALUE",
 * //       Type: "STRING_VALUE",
 * //       State: "STRING_VALUE",
 * //       StartTime: new Date("TIMESTAMP"),
 * //       EndTime: new Date("TIMESTAMP"),
 * //       Edges: [ // EdgeList
 * //         { // Edge
 * //           ReferenceId: Number("int"),
 * //           StartTime: new Date("TIMESTAMP"),
 * //           EndTime: new Date("TIMESTAMP"),
 * //           SummaryStatistics: { // EdgeStatistics
 * //             OkCount: Number("long"),
 * //             ErrorStatistics: { // ErrorStatistics
 * //               ThrottleCount: Number("long"),
 * //               OtherCount: Number("long"),
 * //               TotalCount: Number("long"),
 * //             },
 * //             FaultStatistics: { // FaultStatistics
 * //               OtherCount: Number("long"),
 * //               TotalCount: Number("long"),
 * //             },
 * //             TotalCount: Number("long"),
 * //             TotalResponseTime: Number("double"),
 * //           },
 * //           ResponseTimeHistogram: [ // Histogram
 * //             { // HistogramEntry
 * //               Value: Number("double"),
 * //               Count: Number("int"),
 * //             },
 * //           ],
 * //           Aliases: [ // AliasList
 * //             { // Alias
 * //               Name: "STRING_VALUE",
 * //               Names: [ // AliasNames
 * //                 "STRING_VALUE",
 * //               ],
 * //               Type: "STRING_VALUE",
 * //             },
 * //           ],
 * //           EdgeType: "STRING_VALUE",
 * //           ReceivedEventAgeHistogram: [
 * //             {
 * //               Value: Number("double"),
 * //               Count: Number("int"),
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       SummaryStatistics: { // ServiceStatistics
 * //         OkCount: Number("long"),
 * //         ErrorStatistics: {
 * //           ThrottleCount: Number("long"),
 * //           OtherCount: Number("long"),
 * //           TotalCount: Number("long"),
 * //         },
 * //         FaultStatistics: {
 * //           OtherCount: Number("long"),
 * //           TotalCount: Number("long"),
 * //         },
 * //         TotalCount: Number("long"),
 * //         TotalResponseTime: Number("double"),
 * //       },
 * //       DurationHistogram: [
 * //         {
 * //           Value: Number("double"),
 * //           Count: Number("int"),
 * //         },
 * //       ],
 * //       ResponseTimeHistogram: [
 * //         {
 * //           Value: Number("double"),
 * //           Count: Number("int"),
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetTraceGraphCommandInput - {@link GetTraceGraphCommandInput}
 * @returns {@link GetTraceGraphCommandOutput}
 * @see {@link GetTraceGraphCommandInput} for command's `input` shape.
 * @see {@link GetTraceGraphCommandOutput} for command's `response` shape.
 * @see {@link XRayClientResolvedConfig | config} for XRayClient's `config` shape.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is missing required parameters or has invalid parameters.</p>
 *
 * @throws {@link ThrottledException} (client fault)
 *  <p>The request exceeds the maximum number of requests per second.</p>
 *
 * @throws {@link XRayServiceException}
 * <p>Base exception class for all service exceptions from XRay service.</p>
 *
 *
 * @public
 */
export class GetTraceGraphCommand extends $Command
  .classBuilder<
    GetTraceGraphCommandInput,
    GetTraceGraphCommandOutput,
    XRayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: XRayClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSXRay", "GetTraceGraph", {})
  .n("XRayClient", "GetTraceGraphCommand")
  .sc(GetTraceGraph)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTraceGraphRequest;
      output: GetTraceGraphResult;
    };
    sdk: {
      input: GetTraceGraphCommandInput;
      output: GetTraceGraphCommandOutput;
    };
  };
}
