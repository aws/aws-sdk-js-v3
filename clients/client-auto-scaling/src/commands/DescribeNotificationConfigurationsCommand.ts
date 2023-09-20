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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { DescribeNotificationConfigurationsAnswer, DescribeNotificationConfigurationsType } from "../models/models_0";
import {
  de_DescribeNotificationConfigurationsCommand,
  se_DescribeNotificationConfigurationsCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeNotificationConfigurationsCommand}.
 */
export interface DescribeNotificationConfigurationsCommandInput extends DescribeNotificationConfigurationsType {}
/**
 * @public
 *
 * The output of {@link DescribeNotificationConfigurationsCommand}.
 */
export interface DescribeNotificationConfigurationsCommandOutput
  extends DescribeNotificationConfigurationsAnswer,
    __MetadataBearer {}

/**
 * @public
 * <p>Gets information about the Amazon SNS notifications that are configured for one or more
 *             Auto Scaling groups.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DescribeNotificationConfigurationsCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DescribeNotificationConfigurationsCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const input = { // DescribeNotificationConfigurationsType
 *   AutoScalingGroupNames: [ // AutoScalingGroupNames
 *     "STRING_VALUE",
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 * };
 * const command = new DescribeNotificationConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeNotificationConfigurationsAnswer
 * //   NotificationConfigurations: [ // NotificationConfigurations // required
 * //     { // NotificationConfiguration
 * //       AutoScalingGroupName: "STRING_VALUE",
 * //       TopicARN: "STRING_VALUE",
 * //       NotificationType: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeNotificationConfigurationsCommandInput - {@link DescribeNotificationConfigurationsCommandInput}
 * @returns {@link DescribeNotificationConfigurationsCommandOutput}
 * @see {@link DescribeNotificationConfigurationsCommandInput} for command's `input` shape.
 * @see {@link DescribeNotificationConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 * @throws {@link InvalidNextToken} (client fault)
 *  <p>The <code>NextToken</code> value is not valid.</p>
 *
 * @throws {@link ResourceContentionFault} (server fault)
 *  <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group,
 *             instance, or load balancer).</p>
 *
 * @throws {@link AutoScalingServiceException}
 * <p>Base exception class for all service exceptions from AutoScaling service.</p>
 *
 * @example To describe Auto Scaling notification configurations
 * ```javascript
 * // This example describes the notification configurations for the specified Auto Scaling group.
 * const input = {
 *   "AutoScalingGroupNames": [
 *     "my-auto-scaling-group"
 *   ]
 * };
 * const command = new DescribeNotificationConfigurationsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "NotificationConfigurations": [
 *     {
 *       "AutoScalingGroupName": "my-auto-scaling-group",
 *       "NotificationType": "autoscaling:TEST_NOTIFICATION",
 *       "TopicARN": "arn:aws:sns:us-west-2:123456789012:my-sns-topic-2"
 *     },
 *     {
 *       "AutoScalingGroupName": "my-auto-scaling-group",
 *       "NotificationType": "autoscaling:TEST_NOTIFICATION",
 *       "TopicARN": "arn:aws:sns:us-west-2:123456789012:my-sns-topic"
 *     }
 *   ]
 * }
 * *\/
 * // example id: autoscaling-describe-notification-configurations-1
 * ```
 *
 */
export class DescribeNotificationConfigurationsCommand extends $Command<
  DescribeNotificationConfigurationsCommandInput,
  DescribeNotificationConfigurationsCommandOutput,
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeNotificationConfigurationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "DescribeNotificationConfigurationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AutoScaling_2011_01_01",
        operation: "DescribeNotificationConfigurations",
      },
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
  private serialize(
    input: DescribeNotificationConfigurationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeNotificationConfigurationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeNotificationConfigurationsCommandOutput> {
    return de_DescribeNotificationConfigurationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
