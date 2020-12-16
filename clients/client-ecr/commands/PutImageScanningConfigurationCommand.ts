import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { PutImageScanningConfigurationRequest, PutImageScanningConfigurationResponse } from "../models/models_0";
import {
  deserializeAws_json1_1PutImageScanningConfigurationCommand,
  serializeAws_json1_1PutImageScanningConfigurationCommand,
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

export type PutImageScanningConfigurationCommandInput = PutImageScanningConfigurationRequest;
export type PutImageScanningConfigurationCommandOutput = PutImageScanningConfigurationResponse & __MetadataBearer;

/**
 * <p>Updates the image scanning configuration for the specified repository.</p>
 */
export class PutImageScanningConfigurationCommand extends $Command<
  PutImageScanningConfigurationCommandInput,
  PutImageScanningConfigurationCommandOutput,
  ECRClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutImageScanningConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutImageScanningConfigurationCommandInput, PutImageScanningConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECRClient";
    const commandName = "PutImageScanningConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutImageScanningConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutImageScanningConfigurationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutImageScanningConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutImageScanningConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutImageScanningConfigurationCommandOutput> {
    return deserializeAws_json1_1PutImageScanningConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
