import {
  GlueClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../GlueClient";
import {
  DeleteClassifierRequest,
  DeleteClassifierResponse,
} from "../models/index";
import {
  deserializeAws_json1_1DeleteClassifierCommand,
  serializeAws_json1_1DeleteClassifierCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  SerdeContext,
  HttpHandlerOptions as __HttpHandlerOptions,
} from "@aws-sdk/types";

export type DeleteClassifierCommandInput = DeleteClassifierRequest;
export type DeleteClassifierCommandOutput = DeleteClassifierResponse;

export class DeleteClassifierCommand extends $Command<DeleteClassifierCommandInput, DeleteClassifierCommandOutput, GlueClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteClassifierCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteClassifierCommandInput, DeleteClassifierCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any,
    }
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteClassifierCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteClassifierCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<DeleteClassifierCommandOutput> {
    return deserializeAws_json1_1DeleteClassifierCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
