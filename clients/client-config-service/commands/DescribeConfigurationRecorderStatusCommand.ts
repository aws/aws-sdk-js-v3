import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import {
  DescribeConfigurationRecorderStatusRequest,
  DescribeConfigurationRecorderStatusResponse,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeConfigurationRecorderStatusCommand,
  serializeAws_json1_1DescribeConfigurationRecorderStatusCommand,
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

export type DescribeConfigurationRecorderStatusCommandInput = DescribeConfigurationRecorderStatusRequest;
export type DescribeConfigurationRecorderStatusCommandOutput = DescribeConfigurationRecorderStatusResponse &
  __MetadataBearer;

/**
 * <p>Returns the current status of the specified configuration
 * 			recorder. If a configuration recorder is not specified, this action
 * 			returns the status of all configuration recorders associated with
 * 			the account.</p>
 * 		       <note>
 * 			         <p>Currently, you can specify only one configuration recorder
 * 				per region in your account.</p>
 * 		       </note>
 */
export class DescribeConfigurationRecorderStatusCommand extends $Command<
  DescribeConfigurationRecorderStatusCommandInput,
  DescribeConfigurationRecorderStatusCommandOutput,
  ConfigServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeConfigurationRecorderStatusCommandInput) {
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
  ): Handler<DescribeConfigurationRecorderStatusCommandInput, DescribeConfigurationRecorderStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "DescribeConfigurationRecorderStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeConfigurationRecorderStatusRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeConfigurationRecorderStatusResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeConfigurationRecorderStatusCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeConfigurationRecorderStatusCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeConfigurationRecorderStatusCommandOutput> {
    return deserializeAws_json1_1DescribeConfigurationRecorderStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
