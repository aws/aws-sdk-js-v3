import { SFNClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SFNClient";
import { SendTaskSuccessInput, SendTaskSuccessOutput } from "../models/models_0";
import {
  deserializeAws_json1_0SendTaskSuccessCommand,
  serializeAws_json1_0SendTaskSuccessCommand,
} from "../protocols/Aws_json1_0";
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

export type SendTaskSuccessCommandInput = SendTaskSuccessInput;
export type SendTaskSuccessCommandOutput = SendTaskSuccessOutput & __MetadataBearer;

/**
 * <p>Used by activity workers and task states using the <a href="https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html#connect-wait-token">callback</a>
 *       pattern to report that the task identified by the <code>taskToken</code> completed
 *       successfully.</p>
 */
export class SendTaskSuccessCommand extends $Command<
  SendTaskSuccessCommandInput,
  SendTaskSuccessCommandOutput,
  SFNClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SendTaskSuccessCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SFNClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SendTaskSuccessCommandInput, SendTaskSuccessCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SFNClient";
    const commandName = "SendTaskSuccessCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SendTaskSuccessInput.filterSensitiveLog,
      outputFilterSensitiveLog: SendTaskSuccessOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SendTaskSuccessCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0SendTaskSuccessCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SendTaskSuccessCommandOutput> {
    return deserializeAws_json1_0SendTaskSuccessCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
