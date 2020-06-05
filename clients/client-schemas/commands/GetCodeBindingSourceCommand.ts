import {
  GetCodeBindingSourceRequest,
  GetCodeBindingSourceResponse
} from "../models/index";
import {
  deserializeAws_restJson1GetCodeBindingSourceCommand,
  serializeAws_restJson1GetCodeBindingSourceCommand
} from "../protocols/Aws_restJson1";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  schemasClientResolvedConfig
} from "../schemasClient";
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

export type GetCodeBindingSourceCommandInput = GetCodeBindingSourceRequest;
export type GetCodeBindingSourceCommandOutput = GetCodeBindingSourceResponse &
  __MetadataBearer;

export class GetCodeBindingSourceCommand extends $Command<
  GetCodeBindingSourceCommandInput,
  GetCodeBindingSourceCommandOutput,
  schemasClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetCodeBindingSourceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: schemasClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetCodeBindingSourceCommandInput,
    GetCodeBindingSourceCommandOutput
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
    input: GetCodeBindingSourceCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1GetCodeBindingSourceCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetCodeBindingSourceCommandOutput> {
    return deserializeAws_restJson1GetCodeBindingSourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
