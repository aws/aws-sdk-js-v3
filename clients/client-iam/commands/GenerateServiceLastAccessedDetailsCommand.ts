import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../IAMClient";
import {
  GenerateServiceLastAccessedDetailsRequest,
  GenerateServiceLastAccessedDetailsResponse
} from "../models/index";
import {
  deserializeAws_queryGenerateServiceLastAccessedDetailsCommand,
  serializeAws_queryGenerateServiceLastAccessedDetailsCommand
} from "../protocols/Aws_query";
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

export type GenerateServiceLastAccessedDetailsCommandInput = GenerateServiceLastAccessedDetailsRequest;
export type GenerateServiceLastAccessedDetailsCommandOutput = GenerateServiceLastAccessedDetailsResponse &
  __MetadataBearer;

export class GenerateServiceLastAccessedDetailsCommand extends $Command<
  GenerateServiceLastAccessedDetailsCommandInput,
  GenerateServiceLastAccessedDetailsCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GenerateServiceLastAccessedDetailsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GenerateServiceLastAccessedDetailsCommandInput,
    GenerateServiceLastAccessedDetailsCommandOutput
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
    input: GenerateServiceLastAccessedDetailsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryGenerateServiceLastAccessedDetailsCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GenerateServiceLastAccessedDetailsCommandOutput> {
    return deserializeAws_queryGenerateServiceLastAccessedDetailsCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
