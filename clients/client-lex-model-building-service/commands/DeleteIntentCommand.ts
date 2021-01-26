import {
  LexModelBuildingServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LexModelBuildingServiceClient";
import { DeleteIntentRequest } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteIntentCommand,
  serializeAws_restJson1DeleteIntentCommand,
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

export type DeleteIntentCommandInput = DeleteIntentRequest;
export type DeleteIntentCommandOutput = __MetadataBearer;

/**
 * <p>Deletes all versions of the intent, including the
 *         <code>$LATEST</code> version. To delete a specific version of the
 *       intent, use the <a>DeleteIntentVersion</a> operation.</p>
 *          <p> You can delete a version of an intent only if it is not
 *       referenced. To delete an intent that is referred to in one or more bots
 *       (see <a>how-it-works</a>), you must remove those references
 *       first. </p>
 *          <note>
 *             <p> If you get the <code>ResourceInUseException</code> exception, it
 *         provides an example reference that shows where the intent is referenced.
 *         To remove the reference to the intent, either update the bot or delete
 *         it. If you get the same exception when you attempt to delete the intent
 *         again, repeat until the intent has no references and the call to
 *           <code>DeleteIntent</code> is successful. </p>
 *          </note>
 *
 *          <p> This operation requires permission for the
 *         <code>lex:DeleteIntent</code> action. </p>
 */
export class DeleteIntentCommand extends $Command<
  DeleteIntentCommandInput,
  DeleteIntentCommandOutput,
  LexModelBuildingServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteIntentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LexModelBuildingServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteIntentCommandInput, DeleteIntentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelBuildingServiceClient";
    const commandName = "DeleteIntentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteIntentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteIntentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteIntentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteIntentCommandOutput> {
    return deserializeAws_restJson1DeleteIntentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
