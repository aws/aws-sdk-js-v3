import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ResetServiceSpecificCredentialRequest, ResetServiceSpecificCredentialResponse } from "../models/index";
import {
  deserializeAws_queryResetServiceSpecificCredentialCommand,
  serializeAws_queryResetServiceSpecificCredentialCommand,
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

export type ResetServiceSpecificCredentialCommandInput = ResetServiceSpecificCredentialRequest;
export type ResetServiceSpecificCredentialCommandOutput = ResetServiceSpecificCredentialResponse & __MetadataBearer;

export class ResetServiceSpecificCredentialCommand extends $Command<
  ResetServiceSpecificCredentialCommandInput,
  ResetServiceSpecificCredentialCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ResetServiceSpecificCredentialCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ResetServiceSpecificCredentialCommandInput, ResetServiceSpecificCredentialCommandOutput> {
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

  private serialize(
    input: ResetServiceSpecificCredentialCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryResetServiceSpecificCredentialCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ResetServiceSpecificCredentialCommandOutput> {
    return deserializeAws_queryResetServiceSpecificCredentialCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
