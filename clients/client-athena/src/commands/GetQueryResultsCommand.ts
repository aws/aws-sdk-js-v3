// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
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

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import {
  GetQueryResultsInput,
  GetQueryResultsInputFilterSensitiveLog,
  GetQueryResultsOutput,
  GetQueryResultsOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetQueryResultsCommand,
  serializeAws_json1_1GetQueryResultsCommand,
} from "../protocols/Aws_json1_1";

export interface GetQueryResultsCommandInput extends GetQueryResultsInput {}
export interface GetQueryResultsCommandOutput extends GetQueryResultsOutput, __MetadataBearer {}

/**
 * <p>Streams the results of a single query execution specified by
 *                 <code>QueryExecutionId</code> from the Athena query results location in
 *                 Amazon S3. For more information, see <a href="https://docs.aws.amazon.com/athena/latest/ug/querying.html">Query Results</a> in the <i>Amazon Athena User Guide</i>. This request does not execute the query
 *             but returns results. Use <a>StartQueryExecution</a> to run a query.</p>
 *          <p>To stream query results successfully, the IAM principal with permission to call
 *                 <code>GetQueryResults</code> also must have permissions to the Amazon S3
 *             <code>GetObject</code> action for the Athena query results location.</p>
 *          <important>
 *             <p>IAM principals with permission to the Amazon S3
 *                 <code>GetObject</code> action for the query results location are able to retrieve
 *                 query results from Amazon S3 even if permission to the
 *                     <code>GetQueryResults</code> action is denied. To restrict user or role access,
 *                 ensure that Amazon S3 permissions to the Athena query location
 *                 are denied.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, GetQueryResultsCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, GetQueryResultsCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const command = new GetQueryResultsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetQueryResultsCommandInput} for command's `input` shape.
 * @see {@link GetQueryResultsCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for AthenaClient's `config` shape.
 *
 */
export class GetQueryResultsCommand extends $Command<
  GetQueryResultsCommandInput,
  GetQueryResultsCommandOutput,
  AthenaClientResolvedConfig
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

  constructor(readonly input: GetQueryResultsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AthenaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetQueryResultsCommandInput, GetQueryResultsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetQueryResultsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AthenaClient";
    const commandName = "GetQueryResultsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetQueryResultsInputFilterSensitiveLog,
      outputFilterSensitiveLog: GetQueryResultsOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetQueryResultsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetQueryResultsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetQueryResultsCommandOutput> {
    return deserializeAws_json1_1GetQueryResultsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
