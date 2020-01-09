import {
  MediaStoreClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MediaStoreClient";
import {
  DeleteCorsPolicyInput,
  DeleteCorsPolicyOutput,
} from "../models/index";
import {
  deserializeAws_json1_1DeleteCorsPolicyCommand,
  serializeAws_json1_1DeleteCorsPolicyCommand,
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

export type DeleteCorsPolicyCommandInput = DeleteCorsPolicyInput;
export type DeleteCorsPolicyCommandOutput = DeleteCorsPolicyOutput;

export class DeleteCorsPolicyCommand extends $Command<DeleteCorsPolicyCommandInput, DeleteCorsPolicyCommandOutput, MediaStoreClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteCorsPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaStoreClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteCorsPolicyCommandInput, DeleteCorsPolicyCommandOutput> {
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
    input: DeleteCorsPolicyCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteCorsPolicyCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<DeleteCorsPolicyCommandOutput> {
    return deserializeAws_json1_1DeleteCorsPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
