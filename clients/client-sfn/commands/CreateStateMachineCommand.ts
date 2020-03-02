import {
  SFNClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../SFNClient";
import {
  CreateStateMachineInput,
  CreateStateMachineOutput
} from "../models/index";
import {
  deserializeAws_json1_0CreateStateMachineCommand,
  serializeAws_json1_0CreateStateMachineCommand
} from "../protocols/Aws_json1_0";
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

export type CreateStateMachineCommandInput = CreateStateMachineInput;
export type CreateStateMachineCommandOutput = CreateStateMachineOutput &
  __MetadataBearer;

export class CreateStateMachineCommand extends $Command<
  CreateStateMachineCommandInput,
  CreateStateMachineCommandOutput,
  SFNClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateStateMachineCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SFNClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateStateMachineCommandInput, CreateStateMachineCommandOutput> {
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
    input: CreateStateMachineCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_0CreateStateMachineCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateStateMachineCommandOutput> {
    return deserializeAws_json1_0CreateStateMachineCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
