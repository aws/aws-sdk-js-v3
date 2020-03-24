import {
  GuardDutyClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../GuardDutyClient";
import {
  UpdateFindingsFeedbackRequest,
  UpdateFindingsFeedbackResponse
} from "../models/index";
import {
  deserializeAws_restJson1_1UpdateFindingsFeedbackCommand,
  serializeAws_restJson1_1UpdateFindingsFeedbackCommand
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

export type UpdateFindingsFeedbackCommandInput = UpdateFindingsFeedbackRequest;
export type UpdateFindingsFeedbackCommandOutput = UpdateFindingsFeedbackResponse;

export class UpdateFindingsFeedbackCommand extends $Command<
  UpdateFindingsFeedbackCommandInput,
  UpdateFindingsFeedbackCommandOutput,
  GuardDutyClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateFindingsFeedbackCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GuardDutyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    UpdateFindingsFeedbackCommandInput,
    UpdateFindingsFeedbackCommandOutput
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
    input: UpdateFindingsFeedbackCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1UpdateFindingsFeedbackCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<UpdateFindingsFeedbackCommandOutput> {
    return deserializeAws_restJson1_1UpdateFindingsFeedbackCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
