import {
  AutoScalingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../AutoScalingClient";
import {
  CompleteLifecycleActionAnswer,
  CompleteLifecycleActionType
} from "../models/index";
import {
  deserializeAws_queryCompleteLifecycleActionCommand,
  serializeAws_queryCompleteLifecycleActionCommand
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

export type CompleteLifecycleActionCommandInput = CompleteLifecycleActionType;
export type CompleteLifecycleActionCommandOutput = CompleteLifecycleActionAnswer &
  __MetadataBearer;

export class CompleteLifecycleActionCommand extends $Command<
  CompleteLifecycleActionCommandInput,
  CompleteLifecycleActionCommandOutput,
  AutoScalingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CompleteLifecycleActionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AutoScalingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    CompleteLifecycleActionCommandInput,
    CompleteLifecycleActionCommandOutput
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
    input: CompleteLifecycleActionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryCompleteLifecycleActionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CompleteLifecycleActionCommandOutput> {
    return deserializeAws_queryCompleteLifecycleActionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
