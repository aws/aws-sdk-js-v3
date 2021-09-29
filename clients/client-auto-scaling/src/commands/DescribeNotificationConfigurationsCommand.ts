import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { DescribeNotificationConfigurationsAnswer, DescribeNotificationConfigurationsType } from "../models/models_0";
import {
  deserializeAws_queryDescribeNotificationConfigurationsCommand,
  serializeAws_queryDescribeNotificationConfigurationsCommand,
} from "../protocols/Aws_query";
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

export interface DescribeNotificationConfigurationsCommandInput extends DescribeNotificationConfigurationsType {}
export interface DescribeNotificationConfigurationsCommandOutput
  extends DescribeNotificationConfigurationsAnswer,
    __MetadataBearer {}

/**
 * <p>Gets information about the Amazon SNS notifications that are configured for one or more
 *             Auto Scaling groups.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DescribeNotificationConfigurationsCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DescribeNotificationConfigurationsCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new DescribeNotificationConfigurationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeNotificationConfigurationsCommandInput} for command's `input` shape.
 * @see {@link DescribeNotificationConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeNotificationConfigurationsCommand extends $Command<
  DescribeNotificationConfigurationsCommandInput,
  DescribeNotificationConfigurationsCommandOutput,
  AutoScalingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeNotificationConfigurationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AutoScalingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeNotificationConfigurationsCommandInput, DescribeNotificationConfigurationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "DescribeNotificationConfigurationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeNotificationConfigurationsType.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeNotificationConfigurationsAnswer.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeNotificationConfigurationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryDescribeNotificationConfigurationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeNotificationConfigurationsCommandOutput> {
    return deserializeAws_queryDescribeNotificationConfigurationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
