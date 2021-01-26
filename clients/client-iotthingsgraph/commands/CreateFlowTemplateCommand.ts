import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { CreateFlowTemplateRequest, CreateFlowTemplateResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateFlowTemplateCommand,
  serializeAws_json1_1CreateFlowTemplateCommand,
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

export type CreateFlowTemplateCommandInput = CreateFlowTemplateRequest;
export type CreateFlowTemplateCommandOutput = CreateFlowTemplateResponse & __MetadataBearer;

/**
 * <p>Creates a workflow template. Workflows can be created only in the user's namespace. (The public namespace contains only
 *          entities.) The workflow can contain only entities in the specified namespace. The workflow is validated against the entities in the
 *       latest version of the user's namespace unless another namespace version is specified in the request.</p>
 */
export class CreateFlowTemplateCommand extends $Command<
  CreateFlowTemplateCommandInput,
  CreateFlowTemplateCommandOutput,
  IoTThingsGraphClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateFlowTemplateCommandInput) {
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
  ): Handler<CreateFlowTemplateCommandInput, CreateFlowTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTThingsGraphClient";
    const commandName = "CreateFlowTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateFlowTemplateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateFlowTemplateResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateFlowTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateFlowTemplateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateFlowTemplateCommandOutput> {
    return deserializeAws_json1_1CreateFlowTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
