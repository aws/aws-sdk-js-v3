import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { RequestEnvironmentInfoMessage } from "../models/models_0";
import {
  deserializeAws_queryRequestEnvironmentInfoCommand,
  serializeAws_queryRequestEnvironmentInfoCommand,
} from "../protocols/Aws_query";
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

export type RequestEnvironmentInfoCommandInput = RequestEnvironmentInfoMessage;
export type RequestEnvironmentInfoCommandOutput = __MetadataBearer;

/**
 * <p>Initiates a request to compile the specified type of information of the deployed
 *       environment.</p>
 *          <p> Setting the <code>InfoType</code> to <code>tail</code> compiles the last lines from
 *       the application server log files of every Amazon EC2 instance in your environment. </p>
 *          <p> Setting the <code>InfoType</code> to <code>bundle</code> compresses the application
 *       server log files for every Amazon EC2 instance into a <code>.zip</code> file. Legacy and .NET
 *       containers do not support bundle logs. </p>
 *          <p> Use <a>RetrieveEnvironmentInfo</a> to obtain the set of logs. </p>
 *          <p>Related Topics</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>RetrieveEnvironmentInfo</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export class RequestEnvironmentInfoCommand extends $Command<
  RequestEnvironmentInfoCommandInput,
  RequestEnvironmentInfoCommandOutput,
  ElasticBeanstalkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RequestEnvironmentInfoCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticBeanstalkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RequestEnvironmentInfoCommandInput, RequestEnvironmentInfoCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticBeanstalkClient";
    const commandName = "RequestEnvironmentInfoCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RequestEnvironmentInfoMessage.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RequestEnvironmentInfoCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryRequestEnvironmentInfoCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RequestEnvironmentInfoCommandOutput> {
    return deserializeAws_queryRequestEnvironmentInfoCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
