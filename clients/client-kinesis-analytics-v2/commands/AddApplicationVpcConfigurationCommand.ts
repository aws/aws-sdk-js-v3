import {
  KinesisAnalyticsV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../KinesisAnalyticsV2Client";
import { AddApplicationVpcConfigurationRequest, AddApplicationVpcConfigurationResponse } from "../models/models_0";
import {
  deserializeAws_json1_1AddApplicationVpcConfigurationCommand,
  serializeAws_json1_1AddApplicationVpcConfigurationCommand,
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

export type AddApplicationVpcConfigurationCommandInput = AddApplicationVpcConfigurationRequest;
export type AddApplicationVpcConfigurationCommandOutput = AddApplicationVpcConfigurationResponse & __MetadataBearer;

/**
 * <p>Adds a Virtual Private Cloud (VPC) configuration to the application. Applications can use VPCs to store
 *         and access resources securely.</p>
 *          <p>Note the following about VPC configurations for Kinesis Data Analytics applications:</p>
 *          <ul>
 *             <li>
 *                <p>VPC configurations are not supported for SQL applications.</p>
 *             </li>
 *             <li>
 *                <p>When a VPC is added to a Kinesis Data Analytics application, the application can no longer be accessed from the
 *            Internet directly. To enable Internet access to the application, add an Internet gateway to your VPC.</p>
 *             </li>
 *          </ul>
 */
export class AddApplicationVpcConfigurationCommand extends $Command<
  AddApplicationVpcConfigurationCommandInput,
  AddApplicationVpcConfigurationCommandOutput,
  KinesisAnalyticsV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AddApplicationVpcConfigurationCommandInput) {
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
  ): Handler<AddApplicationVpcConfigurationCommandInput, AddApplicationVpcConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisAnalyticsV2Client";
    const commandName = "AddApplicationVpcConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AddApplicationVpcConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AddApplicationVpcConfigurationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: AddApplicationVpcConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1AddApplicationVpcConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AddApplicationVpcConfigurationCommandOutput> {
    return deserializeAws_json1_1AddApplicationVpcConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
