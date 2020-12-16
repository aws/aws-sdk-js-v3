import { SMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SMSClient";
import { NotifyAppValidationOutputRequest, NotifyAppValidationOutputResponse } from "../models/models_0";
import {
  deserializeAws_json1_1NotifyAppValidationOutputCommand,
  serializeAws_json1_1NotifyAppValidationOutputCommand,
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

export type NotifyAppValidationOutputCommandInput = NotifyAppValidationOutputRequest;
export type NotifyAppValidationOutputCommandOutput = NotifyAppValidationOutputResponse & __MetadataBearer;

/**
 * <p>Provides information to AWS SMS about whether application validation is successful.</p>
 */
export class NotifyAppValidationOutputCommand extends $Command<
  NotifyAppValidationOutputCommandInput,
  NotifyAppValidationOutputCommandOutput,
  SMSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: NotifyAppValidationOutputCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<NotifyAppValidationOutputCommandInput, NotifyAppValidationOutputCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SMSClient";
    const commandName = "NotifyAppValidationOutputCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: NotifyAppValidationOutputRequest.filterSensitiveLog,
      outputFilterSensitiveLog: NotifyAppValidationOutputResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: NotifyAppValidationOutputCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1NotifyAppValidationOutputCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<NotifyAppValidationOutputCommandOutput> {
    return deserializeAws_json1_1NotifyAppValidationOutputCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
