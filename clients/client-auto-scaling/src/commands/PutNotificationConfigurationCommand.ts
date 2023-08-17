// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { PutNotificationConfigurationType } from "../models/models_0";
import { de_PutNotificationConfigurationCommand, se_PutNotificationConfigurationCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutNotificationConfigurationCommand}.
 */
export interface PutNotificationConfigurationCommandInput extends PutNotificationConfigurationType {}
/**
 * @public
 *
 * The output of {@link PutNotificationConfigurationCommand}.
 */
export interface PutNotificationConfigurationCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Configures an Auto Scaling group to send notifications when specified events take place.
 *             Subscribers to the specified topic can have messages delivered to an endpoint such as a
 *             web server or an email address.</p>
 *          <p>This configuration overwrites any existing configuration.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ASGettingNotifications.html">Getting Amazon SNS
 *                 notifications when your Auto Scaling group scales</a> in the
 *                 <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 *          <p>If you exceed your maximum limit of SNS topics, which is 10 per Auto Scaling group, the call
 *             fails.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, PutNotificationConfigurationCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, PutNotificationConfigurationCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const input = { // PutNotificationConfigurationType
 *   AutoScalingGroupName: "STRING_VALUE", // required
 *   TopicARN: "STRING_VALUE", // required
 *   NotificationTypes: [ // AutoScalingNotificationTypes // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new PutNotificationConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutNotificationConfigurationCommandInput - {@link PutNotificationConfigurationCommandInput}
 * @returns {@link PutNotificationConfigurationCommandOutput}
 * @see {@link PutNotificationConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutNotificationConfigurationCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 * @throws {@link LimitExceededFault} (client fault)
 *  <p>You have already reached a limit for your Amazon EC2 Auto Scaling
 *             resources (for example, Auto Scaling groups, launch configurations, or lifecycle hooks). For
 *             more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_DescribeAccountLimits.html">DescribeAccountLimits</a> in the <i>Amazon EC2 Auto Scaling API
 *             Reference</i>.</p>
 *
 * @throws {@link ResourceContentionFault} (server fault)
 *  <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group,
 *             instance, or load balancer).</p>
 *
 * @throws {@link ServiceLinkedRoleFailure} (server fault)
 *  <p>The service-linked role is not yet ready for use.</p>
 *
 * @throws {@link AutoScalingServiceException}
 * <p>Base exception class for all service exceptions from AutoScaling service.</p>
 *
 * @example To add an Auto Scaling notification
 * ```javascript
 * // This example adds the specified notification to the specified Auto Scaling group.
 * const input = {
 *   "AutoScalingGroupName": "my-auto-scaling-group",
 *   "NotificationTypes": [
 *     "autoscaling:TEST_NOTIFICATION"
 *   ],
 *   "TopicARN": "arn:aws:sns:us-west-2:123456789012:my-sns-topic"
 * };
 * const command = new PutNotificationConfigurationCommand(input);
 * await client.send(command);
 * // example id: autoscaling-put-notification-configuration-1
 * ```
 *
 */
export class PutNotificationConfigurationCommand extends $Command<
  PutNotificationConfigurationCommandInput,
  PutNotificationConfigurationCommandOutput,
  AutoScalingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: PutNotificationConfigurationCommandInput) {
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
  ): Handler<PutNotificationConfigurationCommandInput, PutNotificationConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutNotificationConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "PutNotificationConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: PutNotificationConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutNotificationConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutNotificationConfigurationCommandOutput> {
    return de_PutNotificationConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
