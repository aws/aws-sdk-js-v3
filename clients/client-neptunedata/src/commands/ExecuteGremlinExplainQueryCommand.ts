// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";
import { Uint8ArrayBlobAdapter } from "@smithy/util-stream";

import { ExecuteGremlinExplainQueryInput, ExecuteGremlinExplainQueryOutput } from "../models/models_0";
import { NeptunedataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptunedataClient";
import { de_ExecuteGremlinExplainQueryCommand, se_ExecuteGremlinExplainQueryCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ExecuteGremlinExplainQueryCommand}.
 */
export interface ExecuteGremlinExplainQueryCommandInput extends ExecuteGremlinExplainQueryInput {}
/**
 * @public
 */
export type ExecuteGremlinExplainQueryCommandOutputType = Omit<ExecuteGremlinExplainQueryOutput, "output"> & {
  output?: Uint8ArrayBlobAdapter;
};

/**
 * @public
 *
 * The output of {@link ExecuteGremlinExplainQueryCommand}.
 */
export interface ExecuteGremlinExplainQueryCommandOutput
  extends ExecuteGremlinExplainQueryCommandOutputType,
    __MetadataBearer {}

/**
 * @public
 * <p>Executes a Gremlin Explain query.</p>
 *          <p>Amazon Neptune has added a Gremlin feature named <code>explain</code>
 *       that provides is a self-service tool for understanding the execution
 *       approach being taken by the Neptune engine for the query. You invoke
 *       it by adding an <code>explain</code> parameter to an HTTP call that
 *       submits a Gremlin query.</p>
 *          <p>The explain feature provides information about the logical structure
 *       of query execution plans. You can use this information to identify
 *       potential evaluation and execution bottlenecks and to tune your query,
 *       as explained  in <a href="https://docs.aws.amazon.com/neptune/latest/userguide/gremlin-traversal-tuning.html">Tuning
 *       Gremlin queries</a>. You can also use query hints to improve
 *       query execution plans.</p>
 *          <p>When invoking this operation in a Neptune cluster that has IAM
 *       authentication enabled, the IAM user or role making the request must
 *       have a policy attached that allows one of the following IAM actions
 *       in that cluster, depending on the query:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#readdataviaquery">neptune-db:ReadDataViaQuery</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#writedataviaquery">neptune-db:WriteDataViaQuery</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#deletedataviaquery">neptune-db:DeleteDataViaQuery</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>Note that the <a href="https://docs.aws.amazon.com/neptune/latest/userguide/iam-data-condition-keys.html#iam-neptune-condition-keys">neptune-db:QueryLanguage:Gremlin</a>
 *       IAM condition key can be used in the policy document to restrict the use of
 *       Gremlin queries (see <a href="https://docs.aws.amazon.com/neptune/latest/userguide/iam-data-condition-keys.html">Condition
 *       keys available in Neptune IAM data-access policy statements</a>).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptunedataClient, ExecuteGremlinExplainQueryCommand } from "@aws-sdk/client-neptunedata"; // ES Modules import
 * // const { NeptunedataClient, ExecuteGremlinExplainQueryCommand } = require("@aws-sdk/client-neptunedata"); // CommonJS import
 * const client = new NeptunedataClient(config);
 * const input = { // ExecuteGremlinExplainQueryInput
 *   gremlinQuery: "STRING_VALUE", // required
 * };
 * const command = new ExecuteGremlinExplainQueryCommand(input);
 * const response = await client.send(command);
 * // { // ExecuteGremlinExplainQueryOutput
 * //   output: "BLOB_VALUE",
 * // };
 *
 * ```
 *
 * @param ExecuteGremlinExplainQueryCommandInput - {@link ExecuteGremlinExplainQueryCommandInput}
 * @returns {@link ExecuteGremlinExplainQueryCommandOutput}
 * @see {@link ExecuteGremlinExplainQueryCommandInput} for command's `input` shape.
 * @see {@link ExecuteGremlinExplainQueryCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Raised when a parameter value is not valid.</p>
 *
 * @throws {@link MalformedQueryException} (client fault)
 *  <p>Raised when a query is submitted that is syntactically incorrect or does not
 *       pass additional validation.</p>
 *
 * @throws {@link MemoryLimitExceededException} (server fault)
 *  <p>Raised when a request fails because of insufficient memory resources. The
 *       request can be retried.</p>
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
 *  <p>Raised when the number of active queries exceeds what the server can process.
 *       The query in question can be retried when the system is less busy.</p>
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
 */
export class ExecuteGremlinExplainQueryCommand extends $Command<
  ExecuteGremlinExplainQueryCommandInput,
  ExecuteGremlinExplainQueryCommandOutput,
  NeptunedataClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: ExecuteGremlinExplainQueryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NeptunedataClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ExecuteGremlinExplainQueryCommandInput, ExecuteGremlinExplainQueryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ExecuteGremlinExplainQueryCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NeptunedataClient";
    const commandName = "ExecuteGremlinExplainQueryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonNeptuneDataplane",
        operation: "ExecuteGremlinExplainQuery",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: ExecuteGremlinExplainQueryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ExecuteGremlinExplainQueryCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ExecuteGremlinExplainQueryCommandOutput> {
    return de_ExecuteGremlinExplainQueryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
