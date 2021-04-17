import { CloudWatchEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchEventsClient";
import { DeauthorizeConnectionRequest, DeauthorizeConnectionResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DeauthorizeConnectionCommand,
  serializeAws_json1_1DeauthorizeConnectionCommand,
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

export interface DeauthorizeConnectionCommandInput extends DeauthorizeConnectionRequest {}
export interface DeauthorizeConnectionCommandOutput extends DeauthorizeConnectionResponse, __MetadataBearer {}

/**
 * <p>Removes all authorization parameters from the connection. This lets you remove the secret
 *       from the connection so you can reuse it without having to create a new connection.</p>
 */
export class DeauthorizeConnectionCommand extends $Command<
  DeauthorizeConnectionCommandInput,
  DeauthorizeConnectionCommandOutput,
  CloudWatchEventsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeauthorizeConnectionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchEventsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeauthorizeConnectionCommandInput, DeauthorizeConnectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchEventsClient";
    const commandName = "DeauthorizeConnectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeauthorizeConnectionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeauthorizeConnectionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeauthorizeConnectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeauthorizeConnectionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeauthorizeConnectionCommandOutput> {
    return deserializeAws_json1_1DeauthorizeConnectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
