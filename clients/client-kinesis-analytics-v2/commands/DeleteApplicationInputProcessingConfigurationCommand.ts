import {
  KinesisAnalyticsV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../KinesisAnalyticsV2Client";
import {
  DeleteApplicationInputProcessingConfigurationRequest,
  DeleteApplicationInputProcessingConfigurationResponse,
} from "../models/models_0";
import {
  deserializeAws_json1_1DeleteApplicationInputProcessingConfigurationCommand,
  serializeAws_json1_1DeleteApplicationInputProcessingConfigurationCommand,
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

export type DeleteApplicationInputProcessingConfigurationCommandInput = DeleteApplicationInputProcessingConfigurationRequest;
export type DeleteApplicationInputProcessingConfigurationCommandOutput = DeleteApplicationInputProcessingConfigurationResponse &
  __MetadataBearer;

/**
 * <p>Deletes an <a>InputProcessingConfiguration</a> from an input.</p>
 */
export class DeleteApplicationInputProcessingConfigurationCommand extends $Command<
  DeleteApplicationInputProcessingConfigurationCommandInput,
  DeleteApplicationInputProcessingConfigurationCommandOutput,
  KinesisAnalyticsV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteApplicationInputProcessingConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisAnalyticsV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DeleteApplicationInputProcessingConfigurationCommandInput,
    DeleteApplicationInputProcessingConfigurationCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisAnalyticsV2Client";
    const commandName = "DeleteApplicationInputProcessingConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteApplicationInputProcessingConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteApplicationInputProcessingConfigurationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteApplicationInputProcessingConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteApplicationInputProcessingConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteApplicationInputProcessingConfigurationCommandOutput> {
    return deserializeAws_json1_1DeleteApplicationInputProcessingConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
