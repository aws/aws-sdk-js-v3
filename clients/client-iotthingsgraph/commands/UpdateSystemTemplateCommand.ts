import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { UpdateSystemTemplateRequest, UpdateSystemTemplateResponse } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateSystemTemplateCommand,
  serializeAws_json1_1UpdateSystemTemplateCommand,
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

export type UpdateSystemTemplateCommandInput = UpdateSystemTemplateRequest;
export type UpdateSystemTemplateCommandOutput = UpdateSystemTemplateResponse & __MetadataBearer;

/**
 * <p>Updates the specified system. You don't need to run this action after updating a workflow. Any deployment that uses the system will see the changes in the system when it is redeployed.</p>
 */
export class UpdateSystemTemplateCommand extends $Command<
  UpdateSystemTemplateCommandInput,
  UpdateSystemTemplateCommandOutput,
  IoTThingsGraphClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateSystemTemplateCommandInput) {
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
  ): Handler<UpdateSystemTemplateCommandInput, UpdateSystemTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTThingsGraphClient";
    const commandName = "UpdateSystemTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateSystemTemplateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateSystemTemplateResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateSystemTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateSystemTemplateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateSystemTemplateCommandOutput> {
    return deserializeAws_json1_1UpdateSystemTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
