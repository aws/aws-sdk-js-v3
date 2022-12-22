// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { UpdateAutoScalingGroupType, UpdateAutoScalingGroupTypeFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_queryUpdateAutoScalingGroupCommand,
  serializeAws_queryUpdateAutoScalingGroupCommand,
} from "../protocols/Aws_query";

export interface UpdateAutoScalingGroupCommandInput extends UpdateAutoScalingGroupType {}
export interface UpdateAutoScalingGroupCommandOutput extends __MetadataBearer {}

/**
 * <p>
 *             <b>We strongly recommend that all Auto Scaling groups use launch templates to ensure full functionality for Amazon EC2 Auto Scaling and Amazon EC2.</b>
 *          </p>
 *          <p>Updates the configuration for the specified Auto Scaling group.</p>
 *          <p>To update an Auto Scaling group, specify the name of the group and the property that you want
 *             to change. Any properties that you don't specify are not changed by this update request.
 *             The new settings take effect on any scaling activities after this call returns.
 *             </p>
 *          <p>If you associate a new launch configuration or template with an Auto Scaling group, all new
 *             instances will get the updated configuration. Existing instances continue to run with
 *             the configuration that they were originally launched with. When you update a group to
 *             specify a mixed instances policy instead of a launch configuration or template, existing
 *             instances may be replaced to match the new purchasing options that you specified in the
 *             policy. For example, if the group currently has 100% On-Demand capacity and the policy
 *             specifies 50% Spot capacity, this means that half of your instances will be gradually
 *             terminated and relaunched as Spot Instances. When replacing instances, Amazon EC2 Auto Scaling launches
 *             new instances before terminating the old ones, so that updating your group does not
 *             compromise the performance or availability of your application.</p>
 *          <p>Note the following about changing <code>DesiredCapacity</code>, <code>MaxSize</code>,
 *             or <code>MinSize</code>:</p>
 *          <ul>
 *             <li>
 *                <p>If a scale-in activity occurs as a result of a new
 *                         <code>DesiredCapacity</code> value that is lower than the current size of
 *                     the group, the Auto Scaling group uses its termination policy to determine which
 *                     instances to terminate.</p>
 *             </li>
 *             <li>
 *                <p>If you specify a new value for <code>MinSize</code> without specifying a value
 *                     for <code>DesiredCapacity</code>, and the new <code>MinSize</code> is larger
 *                     than the current size of the group, this sets the group's
 *                         <code>DesiredCapacity</code> to the new <code>MinSize</code> value.</p>
 *             </li>
 *             <li>
 *                <p>If you specify a new value for <code>MaxSize</code> without specifying a value
 *                     for <code>DesiredCapacity</code>, and the new <code>MaxSize</code> is smaller
 *                     than the current size of the group, this sets the group's
 *                         <code>DesiredCapacity</code> to the new <code>MaxSize</code> value.</p>
 *             </li>
 *          </ul>
 *          <p>To see which properties have been set, call the <a>DescribeAutoScalingGroups</a> API. To view the scaling policies for an Auto Scaling
 *             group, call the <a>DescribePolicies</a> API. If the group has scaling
 *             policies, you can update them by calling the <a>PutScalingPolicy</a>
 *             API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, UpdateAutoScalingGroupCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, UpdateAutoScalingGroupCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new UpdateAutoScalingGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAutoScalingGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateAutoScalingGroupCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 */
export class UpdateAutoScalingGroupCommand extends $Command<
  UpdateAutoScalingGroupCommandInput,
  UpdateAutoScalingGroupCommandOutput,
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

  constructor(readonly input: UpdateAutoScalingGroupCommandInput) {
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
  ): Handler<UpdateAutoScalingGroupCommandInput, UpdateAutoScalingGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateAutoScalingGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "UpdateAutoScalingGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateAutoScalingGroupTypeFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateAutoScalingGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryUpdateAutoScalingGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateAutoScalingGroupCommandOutput> {
    return deserializeAws_queryUpdateAutoScalingGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
