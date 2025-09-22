// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetInsightImpactGraphRequest, GetInsightImpactGraphResult } from "../models/models_0";
import { GetInsightImpactGraph } from "../schemas/schemas_2_Get";
import { ServiceInputTypes, ServiceOutputTypes, XRayClientResolvedConfig } from "../XRayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetInsightImpactGraphCommand}.
 */
export interface GetInsightImpactGraphCommandInput extends GetInsightImpactGraphRequest {}
/**
 * @public
 *
 * The output of {@link GetInsightImpactGraphCommand}.
 */
export interface GetInsightImpactGraphCommandOutput extends GetInsightImpactGraphResult, __MetadataBearer {}

/**
 * <p>Retrieves a service graph structure filtered by the specified insight. The service graph is limited to only
 *          structural information. For a complete service graph, use this API with the GetServiceGraph API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, GetInsightImpactGraphCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, GetInsightImpactGraphCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * // import type { XRayClientConfig } from "@aws-sdk/client-xray";
 * const config = {}; // type is XRayClientConfig
 * const client = new XRayClient(config);
 * const input = { // GetInsightImpactGraphRequest
 *   InsightId: "STRING_VALUE", // required
 *   StartTime: new Date("TIMESTAMP"), // required
 *   EndTime: new Date("TIMESTAMP"), // required
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetInsightImpactGraphCommand(input);
 * const response = await client.send(command);
 * // { // GetInsightImpactGraphResult
 * //   InsightId: "STRING_VALUE",
 * //   StartTime: new Date("TIMESTAMP"),
 * //   EndTime: new Date("TIMESTAMP"),
 * //   ServiceGraphStartTime: new Date("TIMESTAMP"),
 * //   ServiceGraphEndTime: new Date("TIMESTAMP"),
 * //   Services: [ // InsightImpactGraphServiceList
 * //     { // InsightImpactGraphService
 * //       ReferenceId: Number("int"),
 * //       Type: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Names: [ // ServiceNames
 * //         "STRING_VALUE",
 * //       ],
 * //       AccountId: "STRING_VALUE",
 * //       Edges: [ // InsightImpactGraphEdgeList
 * //         { // InsightImpactGraphEdge
 * //           ReferenceId: Number("int"),
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetInsightImpactGraphCommandInput - {@link GetInsightImpactGraphCommandInput}
 * @returns {@link GetInsightImpactGraphCommandOutput}
 * @see {@link GetInsightImpactGraphCommandInput} for command's `input` shape.
 * @see {@link GetInsightImpactGraphCommandOutput} for command's `response` shape.
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
export class GetInsightImpactGraphCommand extends $Command
  .classBuilder<
    GetInsightImpactGraphCommandInput,
    GetInsightImpactGraphCommandOutput,
    XRayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: XRayClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSXRay", "GetInsightImpactGraph", {})
  .n("XRayClient", "GetInsightImpactGraphCommand")
  .sc(GetInsightImpactGraph)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetInsightImpactGraphRequest;
      output: GetInsightImpactGraphResult;
    };
    sdk: {
      input: GetInsightImpactGraphCommandInput;
      output: GetInsightImpactGraphCommandOutput;
    };
  };
}
