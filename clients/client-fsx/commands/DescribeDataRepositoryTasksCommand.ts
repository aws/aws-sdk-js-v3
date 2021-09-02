import { FSxClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FSxClient";
import { DescribeDataRepositoryTasksRequest, DescribeDataRepositoryTasksResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeDataRepositoryTasksCommand,
  serializeAws_json1_1DescribeDataRepositoryTasksCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface DescribeDataRepositoryTasksCommandInput extends DescribeDataRepositoryTasksRequest {}
export interface DescribeDataRepositoryTasksCommandOutput
  extends DescribeDataRepositoryTasksResponse,
    __MetadataBearer {}

/**
 * <p>Returns the description of specific Amazon FSx for Lustre data repository tasks, if
 *             one or more <code>TaskIds</code> values are provided in the request, or if filters are used in the request.
 *             You can use filters to narrow the response to include just tasks for specific file systems,
 *             or tasks in a specific lifecycle state. Otherwise, it returns all data repository tasks owned
 *             by your Amazon Web Services account in the Amazon Web Services Region of the endpoint that you're calling.</p>
 *
 *         <p>When retrieving all tasks, you can paginate the response by using  the optional <code>MaxResults</code>
 *             parameter to limit the number of tasks returned in a response. If more tasks remain, Amazon
 *             FSx returns a <code>NextToken</code> value in the response. In this case, send a later
 *             request with the <code>NextToken</code> request parameter set to the value of
 *             <code>NextToken</code> from the last response.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, DescribeDataRepositoryTasksCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, DescribeDataRepositoryTasksCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * const client = new FSxClient(config);
 * const command = new DescribeDataRepositoryTasksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDataRepositoryTasksCommandInput} for command's `input` shape.
 * @see {@link DescribeDataRepositoryTasksCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeDataRepositoryTasksCommand extends $Command<
  DescribeDataRepositoryTasksCommandInput,
  DescribeDataRepositoryTasksCommandOutput,
  FSxClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeDataRepositoryTasksCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FSxClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeDataRepositoryTasksCommandInput, DescribeDataRepositoryTasksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FSxClient";
    const commandName = "DescribeDataRepositoryTasksCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeDataRepositoryTasksRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeDataRepositoryTasksResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeDataRepositoryTasksCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeDataRepositoryTasksCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeDataRepositoryTasksCommandOutput> {
    return deserializeAws_json1_1DescribeDataRepositoryTasksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
