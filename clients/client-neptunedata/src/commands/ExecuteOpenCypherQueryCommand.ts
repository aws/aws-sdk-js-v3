// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ExecuteOpenCypherQueryInput, ExecuteOpenCypherQueryOutput } from "../models/models_0";
import { ExecuteOpenCypherQuery$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Executes an openCypher query. See [Accessing the Neptune Graph with openCypher](https://docs.aws.amazon.com/neptune/latest/userguide/access-graph-opencypher.html) for more information.
 *
 * Neptune supports building graph applications using openCypher, which is currently one of the most popular query languages among developers working with graph databases. Developers, business analysts, and data scientists like openCypher's declarative, SQL-inspired syntax because it provides a familiar structure in which to querying property graphs.
 *
 * The openCypher language was originally developed by Neo4j, then open-sourced in 2015 and contributed to the [openCypher project](https://opencypher.org/) under an Apache 2 open-source license.
 *
 * Note that when invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows one of the following IAM actions in that cluster, depending on the query:
 *
 * - [neptune-db:ReadDataViaQuery](https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#readdataviaquery)
 * - [neptune-db:WriteDataViaQuery](https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#writedataviaquery)
 * - [neptune-db:DeleteDataViaQuery](https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#deletedataviaquery)
 *
 * Note also that the [neptune-db:QueryLanguage:OpenCypher](https://docs.aws.amazon.com/neptune/latest/userguide/iam-data-condition-keys.html#iam-neptune-condition-keys) IAM condition key can be used in the policy document to restrict the use of openCypher queries (see [Condition keys available in Neptune IAM data-access policy statements](https://docs.aws.amazon.com/neptune/latest/userguide/iam-data-condition-keys.html)).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptunedataClient, ExecuteOpenCypherQueryCommand } from "@aws-sdk/client-neptunedata"; // ES Modules import
 * // const { NeptunedataClient, ExecuteOpenCypherQueryCommand } = require("@aws-sdk/client-neptunedata"); // CommonJS import
 * // import type { NeptunedataClientConfig } from "@aws-sdk/client-neptunedata";
 * const config = {}; // type is NeptunedataClientConfig
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
 * @throws {@link InvalidNumericDataException} (client fault)
 *
 * Raised when invalid numerical data is encountered when servicing a request.
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
export class ExecuteOpenCypherQueryCommand extends command<ExecuteOpenCypherQueryCommandInput, ExecuteOpenCypherQueryCommandOutput>(
  _ep0,
  _mw0,
  "ExecuteOpenCypherQuery",
  ExecuteOpenCypherQuery$
) {
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
