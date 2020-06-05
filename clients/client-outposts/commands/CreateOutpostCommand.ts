import {
  OutpostsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../OutpostsClient";
import { CreateOutpostInput, CreateOutpostOutput } from "../models/index";
import {
  deserializeAws_restJson1CreateOutpostCommand,
  serializeAws_restJson1CreateOutpostCommand
} from "../protocols/Aws_restJson1";
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

export type CreateOutpostCommandInput = CreateOutpostInput;
export type CreateOutpostCommandOutput = CreateOutpostOutput & __MetadataBearer;

export class CreateOutpostCommand extends $Command<
  CreateOutpostCommandInput,
  CreateOutpostCommandOutput,
  OutpostsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateOutpostCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OutpostsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateOutpostCommandInput, CreateOutpostCommandOutput> {
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
    input: CreateOutpostCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateOutpostCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateOutpostCommandOutput> {
    return deserializeAws_restJson1CreateOutpostCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
