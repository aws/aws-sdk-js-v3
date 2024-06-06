// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListOpenCypherQueriesInput, ListOpenCypherQueriesOutput } from "../models/models_0";
import { NeptunedataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptunedataClient";
import { de_ListOpenCypherQueriesCommand, se_ListOpenCypherQueriesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListOpenCypherQueriesCommand}.
 */
export interface ListOpenCypherQueriesCommandInput extends ListOpenCypherQueriesInput {}
/**
 * @public
 *
 * The output of {@link ListOpenCypherQueriesCommand}.
 */
export interface ListOpenCypherQueriesCommandOutput extends ListOpenCypherQueriesOutput, __MetadataBearer {}

/**
 * <p>Lists active openCypher queries. See <a href="https://docs.aws.amazon.com/neptune/latest/userguide/access-graph-opencypher-status.html">Neptune
 *       openCypher status endpoint</a> for more information.</p>
 *          <p>When invoking this operation in a Neptune cluster that has IAM
 *       authentication enabled, the IAM user or role making the request must
 *       have a policy attached that allows the <a href="https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#getquerystatus">neptune-db:GetQueryStatus</a>
 *       IAM action in that cluster.</p>
 *          <p>Note that the <a href="https://docs.aws.amazon.com/neptune/latest/userguide/iam-data-condition-keys.html#iam-neptune-condition-keys">neptune-db:QueryLanguage:OpenCypher</a>
 *       IAM condition key can be used in the policy document to restrict the use of
 *       openCypher queries (see <a href="https://docs.aws.amazon.com/neptune/latest/userguide/iam-data-condition-keys.html">Condition
 *       keys available in Neptune IAM data-access policy statements</a>).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptunedataClient, ListOpenCypherQueriesCommand } from "@aws-sdk/client-neptunedata"; // ES Modules import
 * // const { NeptunedataClient, ListOpenCypherQueriesCommand } = require("@aws-sdk/client-neptunedata"); // CommonJS import
 * const client = new NeptunedataClient(config);
 * const input = { // ListOpenCypherQueriesInput
 *   includeWaiting: true || false,
 * };
 * const command = new ListOpenCypherQueriesCommand(input);
 * const response = await client.send(command);
 * // { // ListOpenCypherQueriesOutput
 * //   acceptedQueryCount: Number("int"),
 * //   runningQueryCount: Number("int"),
 * //   queries: [ // OpenCypherQueries
 * //     { // GremlinQueryStatus
 * //       queryId: "STRING_VALUE",
 * //       queryString: "STRING_VALUE",
 * //       queryEvalStats: { // QueryEvalStats
 * //         waited: Number("int"),
 * //         elapsed: Number("int"),
 * //         cancelled: true || false,
 * //         subqueries: "DOCUMENT_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListOpenCypherQueriesCommandInput - {@link ListOpenCypherQueriesCommandInput}
 * @returns {@link ListOpenCypherQueriesCommandOutput}
 * @see {@link ListOpenCypherQueriesCommandInput} for command's `input` shape.
 * @see {@link ListOpenCypherQueriesCommandOutput} for command's `response` shape.
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
 * @throws {@link ConcurrentModificationException} (server fault)
 *  <p>Raised when a request attempts to modify data that is concurrently being
 *       modified by another process.</p>
 *
 * @throws {@link ConstraintViolationException} (client fault)
 *  <p>Raised when a value in a request field did not satisfy required constraints.</p>
 *
 * @throws {@link FailureByQueryException} (server fault)
 *  <p>Raised when a request fails.</p>
 *
 * @throws {@link IllegalArgumentException} (client fault)
 *  <p>Raised when an argument in a request is not supported.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>Raised when an argument in a request has an invalid value.</p>
 *
 * @throws {@link InvalidNumericDataException} (client fault)
 *  <p>Raised when invalid numerical data is encountered when servicing a request.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Raised when a parameter value is not valid.</p>
 *
 * @throws {@link MissingParameterException} (client fault)
 *  <p>Raised when a required parameter is missing.</p>
 *
 * @throws {@link ParsingException} (client fault)
 *  <p>Raised when a parsing issue is encountered.</p>
 *
 * @throws {@link PreconditionsFailedException} (client fault)
 *  <p>Raised when a precondition for processing a request is not satisfied.</p>
 *
 * @throws {@link ReadOnlyViolationException} (client fault)
 *  <p>Raised when a request attempts to write to a read-only resource.</p>
 *
 * @throws {@link TimeLimitExceededException} (server fault)
 *  <p>Raised when the an operation exceeds the time limit allowed for it.</p>
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
export class ListOpenCypherQueriesCommand extends $Command
  .classBuilder<
    ListOpenCypherQueriesCommandInput,
    ListOpenCypherQueriesCommandOutput,
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
  .s("AmazonNeptuneDataplane", "ListOpenCypherQueries", {})
  .n("NeptunedataClient", "ListOpenCypherQueriesCommand")
  .f(void 0, void 0)
  .ser(se_ListOpenCypherQueriesCommand)
  .de(de_ListOpenCypherQueriesCommand)
  .build() {}
