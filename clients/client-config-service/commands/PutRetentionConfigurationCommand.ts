import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { PutRetentionConfigurationRequest, PutRetentionConfigurationResponse } from "../models/models_0";
import {
  deserializeAws_json1_1PutRetentionConfigurationCommand,
  serializeAws_json1_1PutRetentionConfigurationCommand,
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

export type PutRetentionConfigurationCommandInput = PutRetentionConfigurationRequest;
export type PutRetentionConfigurationCommandOutput = PutRetentionConfigurationResponse & __MetadataBearer;

/**
 * <p>Creates and updates the retention configuration with details
 * 			about retention period (number of days) that AWS Config stores your
 * 			historical information. The API creates the
 * 				<code>RetentionConfiguration</code> object and names the object
 * 			as <b>default</b>. When you have a
 * 				<code>RetentionConfiguration</code> object named <b>default</b>, calling the API modifies the
 * 			default object. </p>
 * 		       <note>
 * 			         <p>Currently, AWS Config supports only one retention
 * 				configuration per region in your account.</p>
 * 		       </note>
 */
export class PutRetentionConfigurationCommand extends $Command<
  PutRetentionConfigurationCommandInput,
  PutRetentionConfigurationCommandOutput,
  ConfigServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutRetentionConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConfigServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutRetentionConfigurationCommandInput, PutRetentionConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "PutRetentionConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutRetentionConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutRetentionConfigurationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutRetentionConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutRetentionConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutRetentionConfigurationCommandOutput> {
    return deserializeAws_json1_1PutRetentionConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
