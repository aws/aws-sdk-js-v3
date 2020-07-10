import { SNSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SNSClient";
import { CheckIfPhoneNumberIsOptedOutInput, CheckIfPhoneNumberIsOptedOutResponse } from "../models/index";
import {
  deserializeAws_queryCheckIfPhoneNumberIsOptedOutCommand,
  serializeAws_queryCheckIfPhoneNumberIsOptedOutCommand,
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

export type CheckIfPhoneNumberIsOptedOutCommandInput = CheckIfPhoneNumberIsOptedOutInput;
export type CheckIfPhoneNumberIsOptedOutCommandOutput = CheckIfPhoneNumberIsOptedOutResponse & __MetadataBearer;

export class CheckIfPhoneNumberIsOptedOutCommand extends $Command<
  CheckIfPhoneNumberIsOptedOutCommandInput,
  CheckIfPhoneNumberIsOptedOutCommandOutput,
  SNSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CheckIfPhoneNumberIsOptedOutCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SNSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CheckIfPhoneNumberIsOptedOutCommandInput, CheckIfPhoneNumberIsOptedOutCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CheckIfPhoneNumberIsOptedOutCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCheckIfPhoneNumberIsOptedOutCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CheckIfPhoneNumberIsOptedOutCommandOutput> {
    return deserializeAws_queryCheckIfPhoneNumberIsOptedOutCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
