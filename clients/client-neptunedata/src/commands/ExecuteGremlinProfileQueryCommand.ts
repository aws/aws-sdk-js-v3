// smithy-typescript generated code
import { Uint8ArrayBlobAdapter } from "@smithy/core/serde";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ExecuteGremlinProfileQueryInput, ExecuteGremlinProfileQueryOutput } from "../models/models_0";
import { ExecuteGremlinProfileQuery$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ExecuteGremlinProfileQueryCommand}.
 */
export interface ExecuteGremlinProfileQueryCommandInput extends ExecuteGremlinProfileQueryInput {}
/**
 * @public
 */
export type ExecuteGremlinProfileQueryCommandOutputType = Omit<ExecuteGremlinProfileQueryOutput, "output"> & {
  output?: Uint8ArrayBlobAdapter;
};

/**
 * @public
 *
 * The output of {@link ExecuteGremlinProfileQueryCommand}.
 */
export interface ExecuteGremlinProfileQueryCommandOutput extends ExecuteGremlinProfileQueryCommandOutputType, __MetadataBearer {}

/**
 * Executes a Gremlin Profile query, which runs a specified traversal, collects various metrics about the run, and produces a profile report as output. See [Gremlin profile API in Neptune](https://docs.aws.amazon.com/neptune/latest/userguide/gremlin-profile-api.html) for details.
 *
 * When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the [neptune-db:ReadDataViaQuery](https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#readdataviaquery) IAM action in that cluster.
 *
 * Note that the [neptune-db:QueryLanguage:Gremlin](https://docs.aws.amazon.com/neptune/latest/userguide/iam-data-condition-keys.html#iam-neptune-condition-keys) IAM condition key can be used in the policy document to restrict the use of Gremlin queries (see [Condition keys available in Neptune IAM data-access policy statements](https://docs.aws.amazon.com/neptune/latest/userguide/iam-data-condition-keys.html)).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptunedataClient, ExecuteGremlinProfileQueryCommand } from "@aws-sdk/client-neptunedata"; // ES Modules import
 * // const { NeptunedataClient, ExecuteGremlinProfileQueryCommand } = require("@aws-sdk/client-neptunedata"); // CommonJS import
 * // import type { NeptunedataClientConfig } from "@aws-sdk/client-neptunedata";
 * const config = {}; // type is NeptunedataClientConfig
 * const client = new NeptunedataClient(config);
 * const input = { // ExecuteGremlinProfileQueryInput
 *   gremlinQuery: "STRING_VALUE", // required
 *   results: true || false,
 *   chop: Number("int"),
 *   serializer: "STRING_VALUE",
 *   indexOps: true || false,
 * };
 * const command = new ExecuteGremlinProfileQueryCommand(input);
 * const response = await client.send(command);
 * // { // ExecuteGremlinProfileQueryOutput
 * //   output: new Uint8Array(),
 * // };
 *
 * ```
 *
 * @param ExecuteGremlinProfileQueryCommandInput - {@link ExecuteGremlinProfileQueryCommandInput}
 * @returns {@link ExecuteGremlinProfileQueryCommandOutput}
 * @see {@link ExecuteGremlinProfileQueryCommandInput} for command's `input` shape.
 * @see {@link ExecuteGremlinProfileQueryCommandOutput} for command's `response` shape.
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
export class ExecuteGremlinProfileQueryCommand extends command<ExecuteGremlinProfileQueryCommandInput, ExecuteGremlinProfileQueryCommandOutput>(
  _ep0,
  _mw0,
  "ExecuteGremlinProfileQuery",
  ExecuteGremlinProfileQuery$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ExecuteGremlinProfileQueryInput;
      output: ExecuteGremlinProfileQueryOutput;
    };
    sdk: {
      input: ExecuteGremlinProfileQueryCommandInput;
      output: ExecuteGremlinProfileQueryCommandOutput;
    };
  };
}
