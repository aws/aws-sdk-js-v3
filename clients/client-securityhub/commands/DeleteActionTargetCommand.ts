import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";
import { DeleteActionTargetRequest, DeleteActionTargetResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteActionTargetCommand,
  serializeAws_restJson1DeleteActionTargetCommand,
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

export type DeleteActionTargetCommandInput = DeleteActionTargetRequest;
export type DeleteActionTargetCommandOutput = DeleteActionTargetResponse & __MetadataBearer;

/**
 * <p>Deletes a custom action target from Security Hub.</p>
 *          <p>Deleting a custom action target does not affect any findings or insights that were
 *          already sent to Amazon CloudWatch Events using the custom action.</p>
 */
export class DeleteActionTargetCommand extends $Command<
  DeleteActionTargetCommandInput,
  DeleteActionTargetCommandOutput,
  SecurityHubClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteActionTargetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecurityHubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteActionTargetCommandInput, DeleteActionTargetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityHubClient";
    const commandName = "DeleteActionTargetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteActionTargetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteActionTargetResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteActionTargetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteActionTargetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteActionTargetCommandOutput> {
    return deserializeAws_restJson1DeleteActionTargetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
