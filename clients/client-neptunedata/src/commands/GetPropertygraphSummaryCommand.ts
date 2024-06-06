// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetPropertygraphSummaryInput, GetPropertygraphSummaryOutput } from "../models/models_0";
import { NeptunedataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptunedataClient";
import { de_GetPropertygraphSummaryCommand, se_GetPropertygraphSummaryCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetPropertygraphSummaryCommand}.
 */
export interface GetPropertygraphSummaryCommandInput extends GetPropertygraphSummaryInput {}
/**
 * @public
 *
 * The output of {@link GetPropertygraphSummaryCommand}.
 */
export interface GetPropertygraphSummaryCommandOutput extends GetPropertygraphSummaryOutput, __MetadataBearer {}

/**
 * <p>Gets a graph summary for a property graph.</p>
 *          <p>When invoking this operation in a Neptune cluster that has IAM
 *       authentication enabled, the IAM user or role making the request must
 *       have a policy attached that allows the <a href="https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#getgraphsummary">neptune-db:GetGraphSummary</a>
 *       IAM action in that cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptunedataClient, GetPropertygraphSummaryCommand } from "@aws-sdk/client-neptunedata"; // ES Modules import
 * // const { NeptunedataClient, GetPropertygraphSummaryCommand } = require("@aws-sdk/client-neptunedata"); // CommonJS import
 * const client = new NeptunedataClient(config);
 * const input = { // GetPropertygraphSummaryInput
 *   mode: "basic" || "detailed",
 * };
 * const command = new GetPropertygraphSummaryCommand(input);
 * const response = await client.send(command);
 * // { // GetPropertygraphSummaryOutput
 * //   statusCode: Number("int"),
 * //   payload: { // PropertygraphSummaryValueMap
 * //     version: "STRING_VALUE",
 * //     lastStatisticsComputationTime: new Date("TIMESTAMP"),
 * //     graphSummary: { // PropertygraphSummary
 * //       numNodes: Number("long"),
 * //       numEdges: Number("long"),
 * //       numNodeLabels: Number("long"),
 * //       numEdgeLabels: Number("long"),
 * //       nodeLabels: [ // NodeLabels
 * //         "STRING_VALUE",
 * //       ],
 * //       edgeLabels: [ // EdgeLabels
 * //         "STRING_VALUE",
 * //       ],
 * //       numNodeProperties: Number("long"),
 * //       numEdgeProperties: Number("long"),
 * //       nodeProperties: [ // LongValuedMapList
 * //         { // LongValuedMap
 * //           "<keys>": Number("long"),
 * //         },
 * //       ],
 * //       edgeProperties: [
 * //         {
 * //           "<keys>": Number("long"),
 * //         },
 * //       ],
 * //       totalNodePropertyValues: Number("long"),
 * //       totalEdgePropertyValues: Number("long"),
 * //       nodeStructures: [ // NodeStructures
 * //         { // NodeStructure
 * //           count: Number("long"),
 * //           nodeProperties: [ // NodeProperties
 * //             "STRING_VALUE",
 * //           ],
 * //           distinctOutgoingEdgeLabels: [ // OutgoingEdgeLabels
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //       edgeStructures: [ // EdgeStructures
 * //         { // EdgeStructure
 * //           count: Number("long"),
 * //           edgeProperties: [ // EdgeProperties
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetPropertygraphSummaryCommandInput - {@link GetPropertygraphSummaryCommandInput}
 * @returns {@link GetPropertygraphSummaryCommandOutput}
 * @see {@link GetPropertygraphSummaryCommandInput} for command's `input` shape.
 * @see {@link GetPropertygraphSummaryCommandOutput} for command's `response` shape.
 * @see {@link NeptunedataClientResolvedConfig | config} for NeptunedataClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Raised in case of an authentication or authorization failure.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Raised when a request is submitted that cannot be processed.</p>
 *
 * @throws {@link ClientTimeoutException} (client fault)
 *  <p>Raised when a request timed out in the client.</p>
 *
 * @throws {@link ConstraintViolationException} (client fault)
 *  <p>Raised when a value in a request field did not satisfy required constraints.</p>
 *
 * @throws {@link IllegalArgumentException} (client fault)
 *  <p>Raised when an argument in a request is not supported.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>Raised when an argument in a request has an invalid value.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Raised when a parameter value is not valid.</p>
 *
 * @throws {@link MissingParameterException} (client fault)
 *  <p>Raised when a required parameter is missing.</p>
 *
 * @throws {@link PreconditionsFailedException} (client fault)
 *  <p>Raised when a precondition for processing a request is not satisfied.</p>
 *
 * @throws {@link ReadOnlyViolationException} (client fault)
 *  <p>Raised when a request attempts to write to a read-only resource.</p>
 *
 * @throws {@link StatisticsNotAvailableException} (client fault)
 *  <p>Raised when statistics needed to satisfy a request are not available.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Raised when the number of requests being processed exceeds the limit.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>Raised when a request attempts to initiate an operation that is not supported.</p>
 *
 * @throws {@link NeptunedataServiceException}
 * <p>Base exception class for all service exceptions from Neptunedata service.</p>
 *
 * @public
 */
export class GetPropertygraphSummaryCommand extends $Command
  .classBuilder<
    GetPropertygraphSummaryCommandInput,
    GetPropertygraphSummaryCommandOutput,
    NeptunedataClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: NeptunedataClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonNeptuneDataplane", "GetPropertygraphSummary", {})
  .n("NeptunedataClient", "GetPropertygraphSummaryCommand")
  .f(void 0, void 0)
  .ser(se_GetPropertygraphSummaryCommand)
  .de(de_GetPropertygraphSummaryCommand)
  .build() {}
