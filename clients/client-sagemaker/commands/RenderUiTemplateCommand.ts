import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { RenderUiTemplateRequest, RenderUiTemplateResponse } from "../models/models_2";
import {
  deserializeAws_json1_1RenderUiTemplateCommand,
  serializeAws_json1_1RenderUiTemplateCommand,
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

export type RenderUiTemplateCommandInput = RenderUiTemplateRequest;
export type RenderUiTemplateCommandOutput = RenderUiTemplateResponse & __MetadataBearer;

/**
 * <p>Renders the UI template so that you can preview the worker's experience. </p>
 */
export class RenderUiTemplateCommand extends $Command<
  RenderUiTemplateCommandInput,
  RenderUiTemplateCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RenderUiTemplateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RenderUiTemplateCommandInput, RenderUiTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "RenderUiTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RenderUiTemplateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RenderUiTemplateResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RenderUiTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RenderUiTemplateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RenderUiTemplateCommandOutput> {
    return deserializeAws_json1_1RenderUiTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
