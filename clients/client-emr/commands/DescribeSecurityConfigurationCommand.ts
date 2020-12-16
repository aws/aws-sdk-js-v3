import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { DescribeSecurityConfigurationInput, DescribeSecurityConfigurationOutput } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeSecurityConfigurationCommand,
  serializeAws_json1_1DescribeSecurityConfigurationCommand,
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

export type DescribeSecurityConfigurationCommandInput = DescribeSecurityConfigurationInput;
export type DescribeSecurityConfigurationCommandOutput = DescribeSecurityConfigurationOutput & __MetadataBearer;

/**
 * <p>Provides the details of a security configuration by returning the configuration
 *          JSON.</p>
 */
export class DescribeSecurityConfigurationCommand extends $Command<
  DescribeSecurityConfigurationCommandInput,
  DescribeSecurityConfigurationCommandOutput,
  EMRClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeSecurityConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EMRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeSecurityConfigurationCommandInput, DescribeSecurityConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRClient";
    const commandName = "DescribeSecurityConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeSecurityConfigurationInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeSecurityConfigurationOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeSecurityConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeSecurityConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeSecurityConfigurationCommandOutput> {
    return deserializeAws_json1_1DescribeSecurityConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
