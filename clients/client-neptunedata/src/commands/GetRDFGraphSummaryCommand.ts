// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetRDFGraphSummaryInput, GetRDFGraphSummaryOutput } from "../models/models_0";
import { GetRDFGraphSummary$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Gets a graph summary for an RDF graph.
 *
 * When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the [neptune-db:GetGraphSummary](https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#getgraphsummary) IAM action in that cluster.
 *
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
 *
 * Raised in case of an authentication or authorization failure.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * Raised when a request is submitted that cannot be processed.
 *
 * @throws {@link ClientTimeoutException} (client fault)
 *
 * Raised when a request timed out in the client.
 *
 * @throws {@link ConstraintViolationException} (client fault)
 *
 * Raised when a value in a request field did not satisfy required constraints.
 *
 * @throws {@link IllegalArgumentException} (client fault)
 *
 * Raised when an argument in a request is not supported.
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *
 * Raised when an argument in a request has an invalid value.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * Raised when a parameter value is not valid.
 *
 * @throws {@link MissingParameterException} (client fault)
 *
 * Raised when a required parameter is missing.
 *
 * @throws {@link PreconditionsFailedException} (client fault)
 *
 * Raised when a precondition for processing a request is not satisfied.
 *
 * @throws {@link ReadOnlyViolationException} (client fault)
 *
 * Raised when a request attempts to write to a read-only resource.
 *
 * @throws {@link StatisticsNotAvailableException} (client fault)
 *
 * Raised when statistics needed to satisfy a request are not available.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * Raised when the number of requests being processed exceeds the limit.
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *
 * Raised when a request attempts to initiate an operation that is not supported.
 *
 * @throws {@link NeptunedataServiceException}
 *
 * Base exception class for all service exceptions from Neptunedata service.
 *
 * @public
 */
export class GetRDFGraphSummaryCommand extends command<GetRDFGraphSummaryCommandInput, GetRDFGraphSummaryCommandOutput>(
  _ep0,
  _mw0,
  "GetRDFGraphSummary",
  GetRDFGraphSummary$
) {
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
