import { DetectiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DetectiveClient";
import { DeleteMembersRequest, DeleteMembersResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteMembersCommand,
  serializeAws_restJson1DeleteMembersCommand,
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

export type DeleteMembersCommandInput = DeleteMembersRequest;
export type DeleteMembersCommandOutput = DeleteMembersResponse & __MetadataBearer;

/**
 * <p>Deletes one or more member accounts from the master account behavior graph. This
 *          operation can only be called by a Detective master account. That account cannot use
 *             <code>DeleteMembers</code> to delete their own account from the behavior graph. To
 *          disable a behavior graph, the master account uses the <code>DeleteGraph</code> API
 *          method.</p>
 */
export class DeleteMembersCommand extends $Command<
  DeleteMembersCommandInput,
  DeleteMembersCommandOutput,
  DetectiveClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteMembersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DetectiveClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteMembersCommandInput, DeleteMembersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DetectiveClient";
    const commandName = "DeleteMembersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteMembersRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteMembersResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteMembersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteMembersCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteMembersCommandOutput> {
    return deserializeAws_restJson1DeleteMembersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
