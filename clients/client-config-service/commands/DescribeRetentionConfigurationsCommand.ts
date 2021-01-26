import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { DescribeRetentionConfigurationsRequest, DescribeRetentionConfigurationsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeRetentionConfigurationsCommand,
  serializeAws_json1_1DescribeRetentionConfigurationsCommand,
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

export type DescribeRetentionConfigurationsCommandInput = DescribeRetentionConfigurationsRequest;
export type DescribeRetentionConfigurationsCommandOutput = DescribeRetentionConfigurationsResponse & __MetadataBearer;

/**
 * <p>Returns the details of one or more retention configurations. If
 * 			the retention configuration name is not specified, this action
 * 			returns the details for all the retention configurations for that
 * 			account.</p>
 * 		       <note>
 * 			         <p>Currently, AWS Config supports only one retention
 * 				configuration per region in your account.</p>
 * 		       </note>
 */
export class DescribeRetentionConfigurationsCommand extends $Command<
  DescribeRetentionConfigurationsCommandInput,
  DescribeRetentionConfigurationsCommandOutput,
  ConfigServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeRetentionConfigurationsCommandInput) {
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
  ): Handler<DescribeRetentionConfigurationsCommandInput, DescribeRetentionConfigurationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "DescribeRetentionConfigurationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeRetentionConfigurationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeRetentionConfigurationsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeRetentionConfigurationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeRetentionConfigurationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeRetentionConfigurationsCommandOutput> {
    return deserializeAws_json1_1DescribeRetentionConfigurationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
