import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { CreateUserHierarchyGroupRequest, CreateUserHierarchyGroupResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateUserHierarchyGroupCommand,
  serializeAws_restJson1CreateUserHierarchyGroupCommand,
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

export type CreateUserHierarchyGroupCommandInput = CreateUserHierarchyGroupRequest;
export type CreateUserHierarchyGroupCommandOutput = CreateUserHierarchyGroupResponse & __MetadataBearer;

/**
 * <p>Creates a new user hierarchy group.</p>
 */
export class CreateUserHierarchyGroupCommand extends $Command<
  CreateUserHierarchyGroupCommandInput,
  CreateUserHierarchyGroupCommandOutput,
  ConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateUserHierarchyGroupCommandInput) {
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
  ): Handler<CreateUserHierarchyGroupCommandInput, CreateUserHierarchyGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "CreateUserHierarchyGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateUserHierarchyGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateUserHierarchyGroupResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateUserHierarchyGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateUserHierarchyGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateUserHierarchyGroupCommandOutput> {
    return deserializeAws_restJson1CreateUserHierarchyGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
