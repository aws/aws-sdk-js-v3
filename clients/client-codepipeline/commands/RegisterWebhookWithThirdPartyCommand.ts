import {
  CodePipelineClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../CodePipelineClient";
import {
  RegisterWebhookWithThirdPartyInput,
  RegisterWebhookWithThirdPartyOutput
} from "../models/index";
import {
  deserializeAws_json1_1RegisterWebhookWithThirdPartyCommand,
  serializeAws_json1_1RegisterWebhookWithThirdPartyCommand
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export type RegisterWebhookWithThirdPartyCommandInput = RegisterWebhookWithThirdPartyInput;
export type RegisterWebhookWithThirdPartyCommandOutput = RegisterWebhookWithThirdPartyOutput &
  __MetadataBearer;

export class RegisterWebhookWithThirdPartyCommand extends $Command<
  RegisterWebhookWithThirdPartyCommandInput,
  RegisterWebhookWithThirdPartyCommandOutput,
  CodePipelineClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RegisterWebhookWithThirdPartyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodePipelineClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    RegisterWebhookWithThirdPartyCommandInput,
    RegisterWebhookWithThirdPartyCommandOutput
  > {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: RegisterWebhookWithThirdPartyCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1RegisterWebhookWithThirdPartyCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RegisterWebhookWithThirdPartyCommandOutput> {
    return deserializeAws_json1_1RegisterWebhookWithThirdPartyCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
