// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { Uint8ArrayBlobAdapter } from "@smithy/util-stream";

import { commonParams } from "../endpoint/EndpointParameters";
import { ExecuteGremlinProfileQueryInput, ExecuteGremlinProfileQueryOutput } from "../models/models_0";
import { NeptunedataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptunedataClient";
import { ExecuteGremlinProfileQuery } from "../schemas/schemas_5_Query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface ExecuteGremlinProfileQueryCommandOutput
  extends ExecuteGremlinProfileQueryCommandOutputType,
    __MetadataBearer {}

/**
 * <p>Executes a Gremlin Profile query, which runs a specified traversal, collects various metrics about the run, and produces a profile report as output. See <a href="https://docs.aws.amazon.com/neptune/latest/userguide/gremlin-profile-api.html">Gremlin profile API in Neptune</a> for details.</p> <p>When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the <a href="https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#readdataviaquery">neptune-db:ReadDataViaQuery</a> IAM action in that cluster.</p> <p>Note that the <a href="https://docs.aws.amazon.com/neptune/latest/userguide/iam-data-condition-keys.html#iam-neptune-condition-keys">neptune-db:QueryLanguage:Gremlin</a> IAM condition key can be used in the policy document to restrict the use of Gremlin queries (see <a href="https://docs.aws.amazon.com/neptune/latest/userguide/iam-data-condition-keys.html">Condition keys available in Neptune IAM data-access policy statements</a>).</p>
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
export class ExecuteGremlinProfileQueryCommand extends $Command
  .classBuilder<
    ExecuteGremlinProfileQueryCommandInput,
    ExecuteGremlinProfileQueryCommandOutput,
    NeptunedataClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NeptunedataClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonNeptuneDataplane", "ExecuteGremlinProfileQuery", {})
  .n("NeptunedataClient", "ExecuteGremlinProfileQueryCommand")
  .sc(ExecuteGremlinProfileQuery)
  .build() {
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
