import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import {
  DescribeDefaultEncryptionConfigurationRequest,
  DescribeDefaultEncryptionConfigurationResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1DescribeDefaultEncryptionConfigurationCommand,
  serializeAws_restJson1DescribeDefaultEncryptionConfigurationCommand,
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

export type DescribeDefaultEncryptionConfigurationCommandInput = DescribeDefaultEncryptionConfigurationRequest;
export type DescribeDefaultEncryptionConfigurationCommandOutput = DescribeDefaultEncryptionConfigurationResponse &
  __MetadataBearer;

/**
 * <p>Retrieves information about the default encryption configuration for the
 *       AWS account in the default or specified region. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/key-management.html">Key management</a>
 *       in the <i>AWS IoT SiteWise User Guide</i>.</p>
 */
export class DescribeDefaultEncryptionConfigurationCommand extends $Command<
  DescribeDefaultEncryptionConfigurationCommandInput,
  DescribeDefaultEncryptionConfigurationCommandOutput,
  IoTSiteWiseClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeDefaultEncryptionConfigurationCommandInput) {
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
  ): Handler<DescribeDefaultEncryptionConfigurationCommandInput, DescribeDefaultEncryptionConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTSiteWiseClient";
    const commandName = "DescribeDefaultEncryptionConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeDefaultEncryptionConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeDefaultEncryptionConfigurationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeDefaultEncryptionConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeDefaultEncryptionConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeDefaultEncryptionConfigurationCommandOutput> {
    return deserializeAws_restJson1DescribeDefaultEncryptionConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
