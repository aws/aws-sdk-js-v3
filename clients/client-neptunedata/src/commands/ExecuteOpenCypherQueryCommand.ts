// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ExecuteOpenCypherQueryInput, ExecuteOpenCypherQueryOutput } from "../models/models_0";
import { NeptunedataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptunedataClient";
import { de_ExecuteOpenCypherQueryCommand, se_ExecuteOpenCypherQueryCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ExecuteOpenCypherQueryCommand}.
 */
export interface ExecuteOpenCypherQueryCommandInput extends ExecuteOpenCypherQueryInput {}
/**
 * @public
 *
 * The output of {@link ExecuteOpenCypherQueryCommand}.
 */
export interface ExecuteOpenCypherQueryCommandOutput extends ExecuteOpenCypherQueryOutput, __MetadataBearer {}

/**
 * <p>Executes an openCypher query. See <a href="https://docs.aws.amazon.com/neptune/latest/userguide/access-graph-opencypher.html">Accessing the Neptune Graph with openCypher</a> for more information.</p> <p>Neptune supports building graph applications using openCypher, which is currently one of the most popular query languages among developers working with graph databases. Developers, business analysts, and data scientists like openCypher's declarative, SQL-inspired syntax because it provides a familiar structure in which to querying property graphs.</p> <p>The openCypher language was originally developed by Neo4j, then open-sourced in 2015 and contributed to the <a href="https://opencypher.org/">openCypher project</a> under an Apache 2 open-source license.</p> <p>Note that when invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows one of the following IAM actions in that cluster, depending on the query:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#readdataviaquery">neptune-db:ReadDataViaQuery</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#writedataviaquery">neptune-db:WriteDataViaQuery</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#deletedataviaquery">neptune-db:DeleteDataViaQuery</a> </p> </li> </ul> <p>Note also that the <a href="https://docs.aws.amazon.com/neptune/latest/userguide/iam-data-condition-keys.html#iam-neptune-condition-keys">neptune-db:QueryLanguage:OpenCypher</a> IAM condition key can be used in the policy document to restrict the use of openCypher queries (see <a href="https://docs.aws.amazon.com/neptune/latest/userguide/iam-data-condition-keys.html">Condition keys available in Neptune IAM data-access policy statements</a>).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptunedataClient, ExecuteOpenCypherQueryCommand } from "@aws-sdk/client-neptunedata"; // ES Modules import
 * // const { NeptunedataClient, ExecuteOpenCypherQueryCommand } = require("@aws-sdk/client-neptunedata"); // CommonJS import
 * const client = new NeptunedataClient(config);
 * const input = { // ExecuteOpenCypherQueryInput
 *   openCypherQuery: "STRING_VALUE", // required
 *   parameters: "STRING_VALUE",
 * };
 * const command = new ExecuteOpenCypherQueryCommand(input);
 * const response = await client.send(command);
 * // { // ExecuteOpenCypherQueryOutput
 * //   results: "DOCUMENT_VALUE", // required
 * // };
 *
 * ```
 *
 * @param ExecuteOpenCypherQueryCommandInput - {@link ExecuteOpenCypherQueryCommandInput}
 * @returns {@link ExecuteOpenCypherQueryCommandOutput}
 * @see {@link ExecuteOpenCypherQueryCommandInput} for command's `input` shape.
 * @see {@link ExecuteOpenCypherQueryCommandOutput} for command's `response` shape.
 * @see {@link NeptunedataClientResolvedConfig | config} for NeptunedataClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Raised when a request is submitted that cannot be processed.</p>
 *
 * @throws {@link CancelledByUserException} (server fault)
 *  <p>Raised when a user cancelled a request.</p>
 *
 * @throws {@link ClientTimeoutException} (client fault)
 *  <p>Raised when a request timed out in the client.</p>
 *
 * @throws {@link ConcurrentModificationException} (server fault)
 *  <p>Raised when a request attempts to modify data that is concurrently being modified by another process.</p>
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
 * @throws {@link MalformedQueryException} (client fault)
 *  <p>Raised when a query is submitted that is syntactically incorrect or does not pass additional validation.</p>
 *
 * @throws {@link MemoryLimitExceededException} (server fault)
 *  <p>Raised when a request fails because of insufficient memory resources. The request can be retried.</p>
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
 * @throws {@link QueryLimitExceededException} (server fault)
 *  <p>Raised when the number of active queries exceeds what the server can process. The query in question can be retried when the system is less busy.</p>
 *
 * @throws {@link QueryLimitException} (client fault)
 *  <p>Raised when the size of a query exceeds the system limit.</p>
 *
 * @throws {@link QueryTooLargeException} (client fault)
 *  <p>Raised when the body of a query is too large.</p>
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
 *
 * @public
 */
export class ExecuteOpenCypherQueryCommand extends $Command
  .classBuilder<
    ExecuteOpenCypherQueryCommandInput,
    ExecuteOpenCypherQueryCommandOutput,
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
  .s("AmazonNeptuneDataplane", "ExecuteOpenCypherQuery", {})
  .n("NeptunedataClient", "ExecuteOpenCypherQueryCommand")
  .f(void 0, void 0)
  .ser(se_ExecuteOpenCypherQueryCommand)
  .de(de_ExecuteOpenCypherQueryCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ExecuteOpenCypherQueryInput;
      output: ExecuteOpenCypherQueryOutput;
    };
    sdk: {
      input: ExecuteOpenCypherQueryCommandInput;
      output: ExecuteOpenCypherQueryCommandOutput;
    };
  };
}
