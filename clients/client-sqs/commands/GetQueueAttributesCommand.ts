import {
  SQSClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../SQSClient";
import {
  GetQueueAttributesRequest,
  GetQueueAttributesResult
} from "../models/index";
import {
  deserializeAws_queryGetQueueAttributesCommand,
  serializeAws_queryGetQueueAttributesCommand
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

export type GetQueueAttributesCommandInput = GetQueueAttributesRequest;
export type GetQueueAttributesCommandOutput = GetQueueAttributesResult &
  __MetadataBearer;

export class GetQueueAttributesCommand extends $Command<
  GetQueueAttributesCommandInput,
  GetQueueAttributesCommandOutput,
  SQSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetQueueAttributesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SQSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetQueueAttributesCommandInput, GetQueueAttributesCommandOutput> {
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
    input: GetQueueAttributesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryGetQueueAttributesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetQueueAttributesCommandOutput> {
    return deserializeAws_queryGetQueueAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
