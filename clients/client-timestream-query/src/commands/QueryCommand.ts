// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getEndpointDiscoveryPlugin } from "@aws-sdk/middleware-endpoint-discovery";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  QueryRequest,
  QueryRequestFilterSensitiveLog,
  QueryResponse,
  QueryResponseFilterSensitiveLog,
} from "../models/models_0";
import { deserializeAws_json1_0QueryCommand, serializeAws_json1_0QueryCommand } from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, TimestreamQueryClientResolvedConfig } from "../TimestreamQueryClient";

export interface QueryCommandInput extends QueryRequest {}
export interface QueryCommandOutput extends QueryResponse, __MetadataBearer {}

/**
 * <p>
 *             <code>Query</code> is a synchronous operation that enables you to run a query against
 *             your Amazon Timestream data. <code>Query</code> will time out after 60 seconds.
 *             You must update the default timeout in the SDK to support a timeout of 60 seconds. See
 *             the <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.run-query.html">code
 *                 sample</a> for details. </p>
 *         <p>Your query request will fail in the following cases:</p>
 *         <ul>
 *             <li>
 *                 <p> If you submit a <code>Query</code> request with the same client token outside
 *                     of the 5-minute idempotency window. </p>
 *             </li>
 *             <li>
 *                 <p> If you submit a <code>Query</code> request with the same client token, but
 *                     change other parameters, within the 5-minute idempotency window. </p>
 *             </li>
 *             <li>
 *                 <p> If the size of the row (including the query metadata) exceeds 1 MB, then the
 *                     query will fail with the following error message: </p>
 *                 <p>
 *                   <code>Query aborted as max page response size has been exceeded by the output
 *                         result row</code>
 *                 </p>
 *             </li>
 *             <li>
 *                 <p> If the IAM principal of the query initiator and the result reader are not the
 *                     same and/or the query initiator and the result reader do not have the same query
 *                     string in the query requests, the query will fail with an <code>Invalid
 *                         pagination token</code> error. </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TimestreamQueryClient, QueryCommand } from "@aws-sdk/client-timestream-query"; // ES Modules import
 * // const { TimestreamQueryClient, QueryCommand } = require("@aws-sdk/client-timestream-query"); // CommonJS import
 * const client = new TimestreamQueryClient(config);
 * const command = new QueryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link QueryCommandInput} for command's `input` shape.
 * @see {@link QueryCommandOutput} for command's `response` shape.
 * @see {@link TimestreamQueryClientResolvedConfig | config} for TimestreamQueryClient's `config` shape.
 *
 */
export class QueryCommand extends $Command<QueryCommandInput, QueryCommandOutput, TimestreamQueryClientResolvedConfig> {
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

  constructor(readonly input: QueryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TimestreamQueryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<QueryCommandInput, QueryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, QueryCommand.getEndpointParameterInstructions()));
    this.middlewareStack.use(
      getEndpointDiscoveryPlugin(configuration, { clientStack, options, isDiscoveredEndpointRequired: true })
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TimestreamQueryClient";
    const commandName = "QueryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: QueryRequestFilterSensitiveLog,
      outputFilterSensitiveLog: QueryResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: QueryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0QueryCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<QueryCommandOutput> {
    return deserializeAws_json1_0QueryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
