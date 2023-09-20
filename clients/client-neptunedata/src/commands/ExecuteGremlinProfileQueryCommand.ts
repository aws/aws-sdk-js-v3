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

import { ExecuteGremlinProfileQueryInput, ExecuteGremlinProfileQueryOutput } from "../models/models_0";
import { NeptunedataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptunedataClient";
import { de_ExecuteGremlinProfileQueryCommand, se_ExecuteGremlinProfileQueryCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
 * <p>Executes a Gremlin Profile query, which runs a specified traversal,
 *       collects various metrics about the run, and produces a profile report
 *       as output. See <a href="https://docs.aws.amazon.com/neptune/latest/userguide/gremlin-profile-api.html">Gremlin profile
 *       API in Neptune</a> for details.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptunedataClient, ExecuteGremlinProfileQueryCommand } from "@aws-sdk/client-neptunedata"; // ES Modules import
 * // const { NeptunedataClient, ExecuteGremlinProfileQueryCommand } = require("@aws-sdk/client-neptunedata"); // CommonJS import
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
 * //   output: "BLOB_VALUE",
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
export class ExecuteGremlinProfileQueryCommand extends $Command<
  ExecuteGremlinProfileQueryCommandInput,
  ExecuteGremlinProfileQueryCommandOutput,
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
  constructor(readonly input: ExecuteGremlinProfileQueryCommandInput) {
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
  ): Handler<ExecuteGremlinProfileQueryCommandInput, ExecuteGremlinProfileQueryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ExecuteGremlinProfileQueryCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NeptunedataClient";
    const commandName = "ExecuteGremlinProfileQueryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonNeptuneDataplane",
        operation: "ExecuteGremlinProfileQuery",
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
  private serialize(input: ExecuteGremlinProfileQueryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ExecuteGremlinProfileQueryCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ExecuteGremlinProfileQueryCommandOutput> {
    return de_ExecuteGremlinProfileQueryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
