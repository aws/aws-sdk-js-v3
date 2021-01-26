import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { DeleteSystemTemplateRequest, DeleteSystemTemplateResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteSystemTemplateCommand,
  serializeAws_json1_1DeleteSystemTemplateCommand,
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

export type DeleteSystemTemplateCommandInput = DeleteSystemTemplateRequest;
export type DeleteSystemTemplateCommandOutput = DeleteSystemTemplateResponse & __MetadataBearer;

/**
 * <p>Deletes a system. New deployments can't contain the system after its deletion.
 *       Existing deployments that contain the system will continue to work because they use a snapshot of the system that is taken when it is deployed.</p>
 */
export class DeleteSystemTemplateCommand extends $Command<
  DeleteSystemTemplateCommandInput,
  DeleteSystemTemplateCommandOutput,
  IoTThingsGraphClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteSystemTemplateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTThingsGraphClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteSystemTemplateCommandInput, DeleteSystemTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTThingsGraphClient";
    const commandName = "DeleteSystemTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteSystemTemplateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteSystemTemplateResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteSystemTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteSystemTemplateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteSystemTemplateCommandOutput> {
    return deserializeAws_json1_1DeleteSystemTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
