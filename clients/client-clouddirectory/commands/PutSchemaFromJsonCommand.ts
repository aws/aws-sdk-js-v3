import {
  CloudDirectoryClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../CloudDirectoryClient";
import {
  PutSchemaFromJsonRequest,
  PutSchemaFromJsonResponse
} from "../models/index";
import {
  deserializeAws_restJson1_1PutSchemaFromJsonCommand,
  serializeAws_restJson1_1PutSchemaFromJsonCommand
} from "../protocols/Aws_restJson1_1";
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
  SerdeContext,
  HttpHandlerOptions as __HttpHandlerOptions
} from "@aws-sdk/types";

export type PutSchemaFromJsonCommandInput = PutSchemaFromJsonRequest;
export type PutSchemaFromJsonCommandOutput = PutSchemaFromJsonResponse;

export class PutSchemaFromJsonCommand extends $Command<
  PutSchemaFromJsonCommandInput,
  PutSchemaFromJsonCommandOutput,
  CloudDirectoryClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutSchemaFromJsonCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudDirectoryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutSchemaFromJsonCommandInput, PutSchemaFromJsonCommandOutput> {
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
    input: PutSchemaFromJsonCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1PutSchemaFromJsonCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<PutSchemaFromJsonCommandOutput> {
    return deserializeAws_restJson1_1PutSchemaFromJsonCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
