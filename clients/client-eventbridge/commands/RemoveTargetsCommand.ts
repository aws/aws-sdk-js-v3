import {
  EventBridgeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../EventBridgeClient";
import { RemoveTargetsRequest, RemoveTargetsResponse } from "../models/index";
import {
  deserializeAws_json1_1RemoveTargetsCommand,
  serializeAws_json1_1RemoveTargetsCommand
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

export type RemoveTargetsCommandInput = RemoveTargetsRequest;
export type RemoveTargetsCommandOutput = RemoveTargetsResponse &
  __MetadataBearer;

export class RemoveTargetsCommand extends $Command<
  RemoveTargetsCommandInput,
  RemoveTargetsCommandOutput,
  EventBridgeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RemoveTargetsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EventBridgeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RemoveTargetsCommandInput, RemoveTargetsCommandOutput> {
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
    input: RemoveTargetsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1RemoveTargetsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RemoveTargetsCommandOutput> {
    return deserializeAws_json1_1RemoveTargetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
