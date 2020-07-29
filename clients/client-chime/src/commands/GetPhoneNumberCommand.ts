import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { GetPhoneNumberRequest, GetPhoneNumberResponse } from "../models/index";
import {
  deserializeAws_restJson1GetPhoneNumberCommand,
  serializeAws_restJson1GetPhoneNumberCommand,
} from "../protocols/Aws_restJson1";
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

export type GetPhoneNumberCommandInput = GetPhoneNumberRequest;
export type GetPhoneNumberCommandOutput = GetPhoneNumberResponse & __MetadataBearer;

export class GetPhoneNumberCommand extends $Command<
  GetPhoneNumberCommandInput,
  GetPhoneNumberCommandOutput,
  ChimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetPhoneNumberCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetPhoneNumberCommandInput, GetPhoneNumberCommandOutput> {
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

  private serialize(input: GetPhoneNumberCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetPhoneNumberCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetPhoneNumberCommandOutput> {
    return deserializeAws_restJson1GetPhoneNumberCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
