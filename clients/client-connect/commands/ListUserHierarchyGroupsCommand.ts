import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { ListUserHierarchyGroupsRequest, ListUserHierarchyGroupsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListUserHierarchyGroupsCommand,
  serializeAws_restJson1ListUserHierarchyGroupsCommand,
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

export type ListUserHierarchyGroupsCommandInput = ListUserHierarchyGroupsRequest;
export type ListUserHierarchyGroupsCommandOutput = ListUserHierarchyGroupsResponse & __MetadataBearer;

/**
 * <p>Provides summary information about the hierarchy groups for the specified Amazon Connect
 *    instance.</p>
 *          <p>For more information about agent hierarchies, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/agent-hierarchy.html">Set Up Agent Hierarchies</a> in the
 *     <i>Amazon Connect Administrator Guide</i>.</p>
 */
export class ListUserHierarchyGroupsCommand extends $Command<
  ListUserHierarchyGroupsCommandInput,
  ListUserHierarchyGroupsCommandOutput,
  ConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListUserHierarchyGroupsCommandInput) {
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
  ): Handler<ListUserHierarchyGroupsCommandInput, ListUserHierarchyGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "ListUserHierarchyGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListUserHierarchyGroupsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListUserHierarchyGroupsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListUserHierarchyGroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListUserHierarchyGroupsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListUserHierarchyGroupsCommandOutput> {
    return deserializeAws_restJson1ListUserHierarchyGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
