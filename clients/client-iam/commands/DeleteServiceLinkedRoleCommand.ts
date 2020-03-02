import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../IAMClient";
import {
  DeleteServiceLinkedRoleRequest,
  DeleteServiceLinkedRoleResponse
} from "../models/index";
import {
  deserializeAws_queryDeleteServiceLinkedRoleCommand,
  serializeAws_queryDeleteServiceLinkedRoleCommand
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

export type DeleteServiceLinkedRoleCommandInput = DeleteServiceLinkedRoleRequest;
export type DeleteServiceLinkedRoleCommandOutput = DeleteServiceLinkedRoleResponse &
  __MetadataBearer;

export class DeleteServiceLinkedRoleCommand extends $Command<
  DeleteServiceLinkedRoleCommandInput,
  DeleteServiceLinkedRoleCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteServiceLinkedRoleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DeleteServiceLinkedRoleCommandInput,
    DeleteServiceLinkedRoleCommandOutput
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
    input: DeleteServiceLinkedRoleCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryDeleteServiceLinkedRoleCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteServiceLinkedRoleCommandOutput> {
    return deserializeAws_queryDeleteServiceLinkedRoleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
