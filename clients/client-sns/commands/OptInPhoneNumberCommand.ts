import { SNSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SNSClient";
import { OptInPhoneNumberInput, OptInPhoneNumberResponse } from "../models/models_0";
import {
  deserializeAws_queryOptInPhoneNumberCommand,
  serializeAws_queryOptInPhoneNumberCommand,
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

export type OptInPhoneNumberCommandInput = OptInPhoneNumberInput;
export type OptInPhoneNumberCommandOutput = OptInPhoneNumberResponse & __MetadataBearer;

/**
 * <p>Use this request to opt in a phone number that is opted out, which enables you to
 *             resume sending SMS messages to the number.</p>
 *         <p>You can opt in a phone number only once every 30 days.</p>
 */
export class OptInPhoneNumberCommand extends $Command<
  OptInPhoneNumberCommandInput,
  OptInPhoneNumberCommandOutput,
  SNSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: OptInPhoneNumberCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SNSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<OptInPhoneNumberCommandInput, OptInPhoneNumberCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SNSClient";
    const commandName = "OptInPhoneNumberCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: OptInPhoneNumberInput.filterSensitiveLog,
      outputFilterSensitiveLog: OptInPhoneNumberResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: OptInPhoneNumberCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryOptInPhoneNumberCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<OptInPhoneNumberCommandOutput> {
    return deserializeAws_queryOptInPhoneNumberCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
