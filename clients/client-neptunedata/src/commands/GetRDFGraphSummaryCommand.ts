// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetRDFGraphSummaryInput, GetRDFGraphSummaryOutput } from "../models/models_0";
import { NeptunedataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptunedataClient";
import { de_GetRDFGraphSummaryCommand, se_GetRDFGraphSummaryCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetRDFGraphSummaryCommand}.
 */
export interface GetRDFGraphSummaryCommandInput extends GetRDFGraphSummaryInput {}
/**
 * @public
 *
 * The output of {@link GetRDFGraphSummaryCommand}.
 */
export interface GetRDFGraphSummaryCommandOutput extends GetRDFGraphSummaryOutput, __MetadataBearer {}

/**
 * <p>Gets a graph summary for an RDF graph.</p> <p>When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the <a href="https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#getgraphsummary">neptune-db:GetGraphSummary</a> IAM action in that cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptunedataClient, GetRDFGraphSummaryCommand } from "@aws-sdk/client-neptunedata"; // ES Modules import
 * // const { NeptunedataClient, GetRDFGraphSummaryCommand } = require("@aws-sdk/client-neptunedata"); // CommonJS import
 * // import type { NeptunedataClientConfig } from "@aws-sdk/client-neptunedata";
 * const config = {}; // type is NeptunedataClientConfig
 * const client = new NeptunedataClient(config);
 * const input = { // GetRDFGraphSummaryInput
 *   mode: "basic" || "detailed",
 * };
 * const command = new GetRDFGraphSummaryCommand(input);
 * const response = await client.send(command);
 * // { // GetRDFGraphSummaryOutput
 * //   statusCode: Number("int"),
 * //   payload: { // RDFGraphSummaryValueMap
 * //     version: "STRING_VALUE",
 * //     lastStatisticsComputationTime: new Date("TIMESTAMP"),
 * //     graphSummary: { // RDFGraphSummary
 * //       numDistinctSubjects: Number("long"),
 * //       numDistinctPredicates: Number("long"),
 * //       numQuads: Number("long"),
 * //       numClasses: Number("long"),
 * //       classes: [ // Classes
 * //         "STRING_VALUE",
 * //       ],
 * //       predicates: [ // LongValuedMapList
 * //         { // LongValuedMap
 * //           "<keys>": Number("long"),
 * //         },
 * //       ],
 * //       subjectStructures: [ // SubjectStructures
 * //         { // SubjectStructure
 * //           count: Number("long"),
 * //           predicates: [ // Predicates
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
 * @param GetRDFGraphSummaryCommandInput - {@link GetRDFGraphSummaryCommandInput}
 * @returns {@link GetRDFGraphSummaryCommandOutput}
 * @see {@link GetRDFGraphSummaryCommandInput} for command's `input` shape.
 * @see {@link GetRDFGraphSummaryCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class GetRDFGraphSummaryCommand extends $Command
  .classBuilder<
    GetRDFGraphSummaryCommandInput,
    GetRDFGraphSummaryCommandOutput,
    NeptunedataClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NeptunedataClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonNeptuneDataplane", "GetRDFGraphSummary", {})
  .n("NeptunedataClient", "GetRDFGraphSummaryCommand")
  .f(void 0, void 0)
  .ser(se_GetRDFGraphSummaryCommand)
  .de(de_GetRDFGraphSummaryCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRDFGraphSummaryInput;
      output: GetRDFGraphSummaryOutput;
    };
    sdk: {
      input: GetRDFGraphSummaryCommandInput;
      output: GetRDFGraphSummaryCommandOutput;
    };
  };
}
