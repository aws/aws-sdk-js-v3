import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import {
  PutDefaultEncryptionConfigurationRequest,
  PutDefaultEncryptionConfigurationResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1PutDefaultEncryptionConfigurationCommand,
  serializeAws_restJson1PutDefaultEncryptionConfigurationCommand,
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

export type PutDefaultEncryptionConfigurationCommandInput = PutDefaultEncryptionConfigurationRequest;
export type PutDefaultEncryptionConfigurationCommandOutput = PutDefaultEncryptionConfigurationResponse &
  __MetadataBearer;

/**
 * <p>Sets the default encryption configuration for the AWS
 *       account. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/key-management.html">Key management</a>
 *       in the <i>AWS IoT SiteWise User Guide</i>.</p>
 */
export class PutDefaultEncryptionConfigurationCommand extends $Command<
  PutDefaultEncryptionConfigurationCommandInput,
  PutDefaultEncryptionConfigurationCommandOutput,
  IoTSiteWiseClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutDefaultEncryptionConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTSiteWiseClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutDefaultEncryptionConfigurationCommandInput, PutDefaultEncryptionConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTSiteWiseClient";
    const commandName = "PutDefaultEncryptionConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutDefaultEncryptionConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutDefaultEncryptionConfigurationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: PutDefaultEncryptionConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1PutDefaultEncryptionConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutDefaultEncryptionConfigurationCommandOutput> {
    return deserializeAws_restJson1PutDefaultEncryptionConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
