import {
  PinpointClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointClient";
import {
  GetSegmentVersionsRequest,
  GetSegmentVersionsResponse,
} from "../models/index";
import {
  deserializeAws_restJson1_1GetSegmentVersionsCommand,
  serializeAws_restJson1_1GetSegmentVersionsCommand,
} from "../protocols/Aws_restJson1_1";
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

export type GetSegmentVersionsCommandInput = GetSegmentVersionsRequest;
export type GetSegmentVersionsCommandOutput = GetSegmentVersionsResponse;

export class GetSegmentVersionsCommand extends $Command<GetSegmentVersionsCommandInput, GetSegmentVersionsCommandOutput, PinpointClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetSegmentVersionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetSegmentVersionsCommandInput, GetSegmentVersionsCommandOutput> {
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
    input: GetSegmentVersionsCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1GetSegmentVersionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<GetSegmentVersionsCommandOutput> {
    return deserializeAws_restJson1_1GetSegmentVersionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
