import {
  LexModelBuildingServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LexModelBuildingServiceClient";
import { DeleteSlotTypeVersionRequest } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteSlotTypeVersionCommand,
  serializeAws_restJson1DeleteSlotTypeVersionCommand,
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

export type DeleteSlotTypeVersionCommandInput = DeleteSlotTypeVersionRequest;
export type DeleteSlotTypeVersionCommandOutput = __MetadataBearer;

/**
 * <p>Deletes a specific version of a slot type. To delete all versions
 *       of a slot type, use the <a>DeleteSlotType</a> operation. </p>
 *          <p>This operation requires permissions for the
 *         <code>lex:DeleteSlotTypeVersion</code> action.</p>
 */
export class DeleteSlotTypeVersionCommand extends $Command<
  DeleteSlotTypeVersionCommandInput,
  DeleteSlotTypeVersionCommandOutput,
  LexModelBuildingServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteSlotTypeVersionCommandInput) {
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
  ): Handler<DeleteSlotTypeVersionCommandInput, DeleteSlotTypeVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelBuildingServiceClient";
    const commandName = "DeleteSlotTypeVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteSlotTypeVersionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteSlotTypeVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteSlotTypeVersionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteSlotTypeVersionCommandOutput> {
    return deserializeAws_restJson1DeleteSlotTypeVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
