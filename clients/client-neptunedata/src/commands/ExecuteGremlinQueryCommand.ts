// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ExecuteGremlinQueryInput, ExecuteGremlinQueryOutput } from "../models/models_0";
import { ExecuteGremlinQuery$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ExecuteGremlinQueryCommand}.
 */
export interface ExecuteGremlinQueryCommandInput extends ExecuteGremlinQueryInput {}
/**
 * @public
 *
 * The output of {@link ExecuteGremlinQueryCommand}.
 */
export interface ExecuteGremlinQueryCommandOutput extends ExecuteGremlinQueryOutput, __MetadataBearer {}

/**
 * This commands executes a Gremlin query. Amazon Neptune is compatible with Apache TinkerPop3 and Gremlin, so you can use the Gremlin traversal language to query the graph, as described under [The Graph](https://tinkerpop.apache.org/docs/current/reference/#graph) in the Apache TinkerPop3 documentation. More details can also be found in [Accessing a Neptune graph with Gremlin](https://docs.aws.amazon.com/neptune/latest/userguide/access-graph-gremlin.html).
 *
 * When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that enables one of the following IAM actions in that cluster, depending on the query:
 *
 * - [neptune-db:ReadDataViaQuery](https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#readdataviaquery)
 * - [neptune-db:WriteDataViaQuery](https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#writedataviaquery)
 * - [neptune-db:DeleteDataViaQuery](https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#deletedataviaquery)
 *
 * Note that the [neptune-db:QueryLanguage:Gremlin](https://docs.aws.amazon.com/neptune/latest/userguide/iam-data-condition-keys.html#iam-neptune-condition-keys) IAM condition key can be used in the policy document to restrict the use of Gremlin queries (see [Condition keys available in Neptune IAM data-access policy statements](https://docs.aws.amazon.com/neptune/latest/userguide/iam-data-condition-keys.html)).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptunedataClient, ExecuteGremlinQueryCommand } from "@aws-sdk/client-neptunedata"; // ES Modules import
 * // const { NeptunedataClient, ExecuteGremlinQueryCommand } = require("@aws-sdk/client-neptunedata"); // CommonJS import
 * // import type { NeptunedataClientConfig } from "@aws-sdk/client-neptunedata";
 * const config = {}; // type is NeptunedataClientConfig
 * const client = new NeptunedataClient(config);
 * const input = { // ExecuteGremlinQueryInput
 *   gremlinQuery: "STRING_VALUE", // required
 *   serializer: "STRING_VALUE",
 * };
 * const command = new ExecuteGremlinQueryCommand(input);
 * const response = await client.send(command);
 * // { // ExecuteGremlinQueryOutput
 * //   requestId: "STRING_VALUE",
 * //   status: { // GremlinQueryStatusAttributes
 * //     message: "STRING_VALUE",
 * //     code: Number("int"),
 * //     attributes: "DOCUMENT_VALUE",
 * //   },
 * //   result: "DOCUMENT_VALUE",
 * //   meta: "DOCUMENT_VALUE",
 * // };
 *
 * ```
 *
 * @param ExecuteGremlinQueryCommandInput - {@link ExecuteGremlinQueryCommandInput}
 * @returns {@link ExecuteGremlinQueryCommandOutput}
 * @see {@link ExecuteGremlinQueryCommandInput} for command's `input` shape.
 * @see {@link ExecuteGremlinQueryCommandOutput} for command's `response` shape.
 * @see {@link NeptunedataClientResolvedConfig | config} for NeptunedataClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * Raised when a request is submitted that cannot be processed.
 *
 * @throws {@link CancelledByMaintenanceException} (server fault)
 *
 * Raised when a request is cancelled because the storage layer entered maintenance mode. This typically happens during a customer-initiated operation such as an index rebuild. It should be treated like `ConcurrentModificationException`.
 *
 * @throws {@link CancelledByUserException} (server fault)
 *
 * Raised when a user cancelled a request.
 *
 * @throws {@link ClientTimeoutException} (client fault)
 *
 * Raised when a request timed out in the client.
 *
 * @throws {@link ConcurrentModificationException} (server fault)
 *
 * Raised when a request attempts to modify data that is concurrently being modified by another process.
 *
 * @throws {@link ConstraintViolationException} (client fault)
 *
 * Raised when a value in a request field did not satisfy required constraints.
 *
 * @throws {@link FailureByQueryException} (server fault)
 *
 * Raised when a request fails.
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
 * @throws {@link MalformedQueryException} (client fault)
 *
 * Raised when a query is submitted that is syntactically incorrect or does not pass additional validation.
 *
 * @throws {@link MemoryLimitExceededException} (server fault)
 *
 * Raised when a request fails because of insufficient memory resources. The request can be retried.
 *
 * @throws {@link MissingParameterException} (client fault)
 *
 * Raised when a required parameter is missing.
 *
 * @throws {@link ParsingException} (client fault)
 *
 * Raised when a parsing issue is encountered.
 *
 * @throws {@link PreconditionsFailedException} (client fault)
 *
 * Raised when a precondition for processing a request is not satisfied.
 *
 * @throws {@link QueryLimitExceededException} (server fault)
 *
 * Raised when the number of active queries exceeds what the server can process. The query in question can be retried when the system is less busy.
 *
 * @throws {@link QueryLimitException} (client fault)
 *
 * Raised when the size of a query exceeds the system limit.
 *
 * @throws {@link QueryTooLargeException} (client fault)
 *
 * Raised when the body of a query is too large.
 *
 * @throws {@link TimeLimitExceededException} (server fault)
 *
 * Raised when the an operation exceeds the time limit allowed for it.
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
export class ExecuteGremlinQueryCommand extends command<ExecuteGremlinQueryCommandInput, ExecuteGremlinQueryCommandOutput>(
  _ep0,
  _mw0,
  "ExecuteGremlinQuery",
  ExecuteGremlinQuery$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ExecuteGremlinQueryInput;
      output: ExecuteGremlinQueryOutput;
    };
    sdk: {
      input: ExecuteGremlinQueryCommandInput;
      output: ExecuteGremlinQueryCommandOutput;
    };
  };
}
