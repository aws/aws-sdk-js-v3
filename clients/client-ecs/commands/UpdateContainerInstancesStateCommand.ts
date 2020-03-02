import {
  ECSClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../ECSClient";
import {
  UpdateContainerInstancesStateRequest,
  UpdateContainerInstancesStateResponse
} from "../models/index";
import {
  deserializeAws_json1_1UpdateContainerInstancesStateCommand,
  serializeAws_json1_1UpdateContainerInstancesStateCommand
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

export type UpdateContainerInstancesStateCommandInput = UpdateContainerInstancesStateRequest;
export type UpdateContainerInstancesStateCommandOutput = UpdateContainerInstancesStateResponse &
  __MetadataBearer;

export class UpdateContainerInstancesStateCommand extends $Command<
  UpdateContainerInstancesStateCommandInput,
  UpdateContainerInstancesStateCommandOutput,
  ECSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateContainerInstancesStateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    UpdateContainerInstancesStateCommandInput,
    UpdateContainerInstancesStateCommandOutput
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
    input: UpdateContainerInstancesStateCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateContainerInstancesStateCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateContainerInstancesStateCommandOutput> {
    return deserializeAws_json1_1UpdateContainerInstancesStateCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
