import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { DeleteCustomActionTypeInput } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteCustomActionTypeCommand,
  serializeAws_json1_1DeleteCustomActionTypeCommand,
} from "../protocols/Aws_json1_1";
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

export type DeleteCustomActionTypeCommandInput = DeleteCustomActionTypeInput;
export type DeleteCustomActionTypeCommandOutput = __MetadataBearer;

/**
 * <p>Marks a custom action as deleted. <code>PollForJobs</code> for the custom action
 *             fails after the action is marked for deletion. Used for custom actions only.</p>
 *         <important>
 *             <p>To re-create a custom action after it has been deleted you must use a string in
 *                 the version field that has never been used before. This string can be an incremented
 *                 version number, for example. To restore a deleted custom action, use a JSON file
 *                 that is identical to the deleted action, including the original string in the
 *                 version field.</p>
 *         </important>
 */
export class DeleteCustomActionTypeCommand extends $Command<
  DeleteCustomActionTypeCommandInput,
  DeleteCustomActionTypeCommandOutput,
  CodePipelineClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteCustomActionTypeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodePipelineClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteCustomActionTypeCommandInput, DeleteCustomActionTypeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodePipelineClient";
    const commandName = "DeleteCustomActionTypeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteCustomActionTypeInput.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteCustomActionTypeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteCustomActionTypeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteCustomActionTypeCommandOutput> {
    return deserializeAws_json1_1DeleteCustomActionTypeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
