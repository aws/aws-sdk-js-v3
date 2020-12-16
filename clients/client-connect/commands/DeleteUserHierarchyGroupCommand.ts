import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { DeleteUserHierarchyGroupRequest } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteUserHierarchyGroupCommand,
  serializeAws_restJson1DeleteUserHierarchyGroupCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type DeleteUserHierarchyGroupCommandInput = DeleteUserHierarchyGroupRequest;
export type DeleteUserHierarchyGroupCommandOutput = __MetadataBearer;

/**
 * <p>Deletes an existing user hierarchy group. It must not be associated with any agents or have
 *    any active child groups.</p>
 */
export class DeleteUserHierarchyGroupCommand extends $Command<
  DeleteUserHierarchyGroupCommandInput,
  DeleteUserHierarchyGroupCommandOutput,
  ConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteUserHierarchyGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteUserHierarchyGroupCommandInput, DeleteUserHierarchyGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "DeleteUserHierarchyGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteUserHierarchyGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteUserHierarchyGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteUserHierarchyGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteUserHierarchyGroupCommandOutput> {
    return deserializeAws_restJson1DeleteUserHierarchyGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
