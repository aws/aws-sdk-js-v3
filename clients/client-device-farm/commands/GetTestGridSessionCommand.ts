import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { GetTestGridSessionRequest, GetTestGridSessionResult } from "../models/models_0";
import {
  deserializeAws_json1_1GetTestGridSessionCommand,
  serializeAws_json1_1GetTestGridSessionCommand,
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

export type GetTestGridSessionCommandInput = GetTestGridSessionRequest;
export type GetTestGridSessionCommandOutput = GetTestGridSessionResult & __MetadataBearer;

/**
 * <p>A session is an instance of a browser created through a <code>RemoteWebDriver</code> with the URL from <a>CreateTestGridUrlResult$url</a>. You can use the following to look up sessions:</p>
 *          <ul>
 *             <li>
 *                <p>The session ARN (<a>GetTestGridSessionRequest$sessionArn</a>).</p>
 *             </li>
 *             <li>
 *                <p>The project ARN and a session ID (<a>GetTestGridSessionRequest$projectArn</a> and <a>GetTestGridSessionRequest$sessionId</a>).</p>
 *             </li>
 *          </ul>
 *          <p></p>
 */
export class GetTestGridSessionCommand extends $Command<
  GetTestGridSessionCommandInput,
  GetTestGridSessionCommandOutput,
  DeviceFarmClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetTestGridSessionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DeviceFarmClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetTestGridSessionCommandInput, GetTestGridSessionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DeviceFarmClient";
    const commandName = "GetTestGridSessionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetTestGridSessionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetTestGridSessionResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetTestGridSessionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetTestGridSessionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetTestGridSessionCommandOutput> {
    return deserializeAws_json1_1GetTestGridSessionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
