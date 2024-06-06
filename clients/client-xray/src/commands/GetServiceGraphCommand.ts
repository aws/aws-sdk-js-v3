// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetServiceGraphRequest, GetServiceGraphResult } from "../models/models_0";
import { de_GetServiceGraphCommand, se_GetServiceGraphCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, XRayClientResolvedConfig } from "../XRayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetServiceGraphCommand}.
 */
export interface GetServiceGraphCommandInput extends GetServiceGraphRequest {}
/**
 * @public
 *
 * The output of {@link GetServiceGraphCommand}.
 */
export interface GetServiceGraphCommandOutput extends GetServiceGraphResult, __MetadataBearer {}

/**
 * <p>Retrieves a document that describes services that process incoming requests, and
 *       downstream services that they call as a result. Root services process incoming requests and
 *       make calls to downstream services. Root services are applications that use the <a href="https://docs.aws.amazon.com/xray/index.html">Amazon Web Services X-Ray SDK</a>.
 *       Downstream services can be other applications, Amazon Web Services resources, HTTP web APIs, or SQL
 *       databases.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, GetServiceGraphCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, GetServiceGraphCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * const client = new XRayClient(config);
 * const input = { // GetServiceGraphRequest
 *   StartTime: new Date("TIMESTAMP"), // required
 *   EndTime: new Date("TIMESTAMP"), // required
 *   GroupName: "STRING_VALUE",
 *   GroupARN: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetServiceGraphCommand(input);
 * const response = await client.send(command);
 * // { // GetServiceGraphResult
 * //   StartTime: new Date("TIMESTAMP"),
 * //   EndTime: new Date("TIMESTAMP"),
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
 * //   ContainsOldGroupVersions: true || false,
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetServiceGraphCommandInput - {@link GetServiceGraphCommandInput}
 * @returns {@link GetServiceGraphCommandOutput}
 * @see {@link GetServiceGraphCommandInput} for command's `input` shape.
 * @see {@link GetServiceGraphCommandOutput} for command's `response` shape.
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
 * @public
 */
export class GetServiceGraphCommand extends $Command
  .classBuilder<
    GetServiceGraphCommandInput,
    GetServiceGraphCommandOutput,
    XRayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: XRayClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSXRay", "GetServiceGraph", {})
  .n("XRayClient", "GetServiceGraphCommand")
  .f(void 0, void 0)
  .ser(se_GetServiceGraphCommand)
  .de(de_GetServiceGraphCommand)
  .build() {}
