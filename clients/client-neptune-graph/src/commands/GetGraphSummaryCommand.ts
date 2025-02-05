// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetGraphSummaryInput, GetGraphSummaryOutput } from "../models/models_0";
import { NeptuneGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneGraphClient";
import { de_GetGraphSummaryCommand, se_GetGraphSummaryCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetGraphSummaryCommand}.
 */
export interface GetGraphSummaryCommandInput extends GetGraphSummaryInput {}
/**
 * @public
 *
 * The output of {@link GetGraphSummaryCommand}.
 */
export interface GetGraphSummaryCommandOutput extends GetGraphSummaryOutput, __MetadataBearer {}

/**
 * <p>Gets a graph summary for a property graph.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneGraphClient, GetGraphSummaryCommand } from "@aws-sdk/client-neptune-graph"; // ES Modules import
 * // const { NeptuneGraphClient, GetGraphSummaryCommand } = require("@aws-sdk/client-neptune-graph"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new NeptuneGraphClient(config);
 * const input = { // GetGraphSummaryInput
 *   graphIdentifier: "STRING_VALUE", // required
 *   mode: "BASIC" || "DETAILED",
 * };
 * const command = new GetGraphSummaryCommand(input);
 * const response = await client.send(command);
 * // { // GetGraphSummaryOutput
 * //   version: "STRING_VALUE",
 * //   lastStatisticsComputationTime: new Date("TIMESTAMP"),
 * //   graphSummary: { // GraphDataSummary
 * //     numNodes: Number("long"),
 * //     numEdges: Number("long"),
 * //     numNodeLabels: Number("long"),
 * //     numEdgeLabels: Number("long"),
 * //     nodeLabels: [ // NodeLabels
 * //       "STRING_VALUE",
 * //     ],
 * //     edgeLabels: [ // EdgeLabels
 * //       "STRING_VALUE",
 * //     ],
 * //     numNodeProperties: Number("long"),
 * //     numEdgeProperties: Number("long"),
 * //     nodeProperties: [ // LongValuedMapList
 * //       { // LongValuedMap
 * //         "<keys>": Number("long"),
 * //       },
 * //     ],
 * //     edgeProperties: [
 * //       {
 * //         "<keys>": Number("long"),
 * //       },
 * //     ],
 * //     totalNodePropertyValues: Number("long"),
 * //     totalEdgePropertyValues: Number("long"),
 * //     nodeStructures: [ // NodeStructures
 * //       { // NodeStructure
 * //         count: Number("long"),
 * //         nodeProperties: [ // NodeProperties
 * //           "STRING_VALUE",
 * //         ],
 * //         distinctOutgoingEdgeLabels: [ // OutgoingEdgeLabels
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     ],
 * //     edgeStructures: [ // EdgeStructures
 * //       { // EdgeStructure
 * //         count: Number("long"),
 * //         edgeProperties: [ // EdgeProperties
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetGraphSummaryCommandInput - {@link GetGraphSummaryCommandInput}
 * @returns {@link GetGraphSummaryCommandOutput}
 * @see {@link GetGraphSummaryCommandInput} for command's `input` shape.
 * @see {@link GetGraphSummaryCommandOutput} for command's `response` shape.
 * @see {@link NeptuneGraphClientResolvedConfig | config} for NeptuneGraphClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Raised in case of an authentication or authorization failure.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>A failure occurred on the server.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A specified resource could not be located.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The exception was interrupted by throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A resource could not be validated.</p>
 *
 * @throws {@link NeptuneGraphServiceException}
 * <p>Base exception class for all service exceptions from NeptuneGraph service.</p>
 *
 * @public
 */
export class GetGraphSummaryCommand extends $Command
  .classBuilder<
    GetGraphSummaryCommandInput,
    GetGraphSummaryCommandOutput,
    NeptuneGraphClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
    ApiType: { type: "staticContextParams", value: `DataPlane` },
  })
  .m(function (this: any, Command: any, cs: any, config: NeptuneGraphClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonNeptuneGraph", "GetGraphSummary", {})
  .n("NeptuneGraphClient", "GetGraphSummaryCommand")
  .f(void 0, void 0)
  .ser(se_GetGraphSummaryCommand)
  .de(de_GetGraphSummaryCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetGraphSummaryInput;
      output: GetGraphSummaryOutput;
    };
    sdk: {
      input: GetGraphSummaryCommandInput;
      output: GetGraphSummaryCommandOutput;
    };
  };
}
