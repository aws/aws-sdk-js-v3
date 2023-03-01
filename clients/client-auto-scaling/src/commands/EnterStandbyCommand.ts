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
import {
  EnterStandbyAnswer,
  EnterStandbyAnswerFilterSensitiveLog,
  EnterStandbyQuery,
  EnterStandbyQueryFilterSensitiveLog,
} from "../models/models_0";
import { deserializeAws_queryEnterStandbyCommand, serializeAws_queryEnterStandbyCommand } from "../protocols/Aws_query";

/**
 * The input for {@link EnterStandbyCommand}.
 */
export interface EnterStandbyCommandInput extends EnterStandbyQuery {}
/**
 * The output of {@link EnterStandbyCommand}.
 */
export interface EnterStandbyCommandOutput extends EnterStandbyAnswer, __MetadataBearer {}

/**
 * <p>Moves the specified instances into the standby state.</p>
 *          <p>If you choose to decrement the desired capacity of the Auto Scaling group, the instances can
 *             enter standby as long as the desired capacity of the Auto Scaling group after the instances are
 *             placed into standby is equal to or greater than the minimum capacity of the
 *             group.</p>
 *          <p>If you choose not to decrement the desired capacity of the Auto Scaling group, the Auto Scaling group
 *             launches new instances to replace the instances on standby.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-enter-exit-standby.html">Temporarily removing
 *                 instances from your Auto Scaling group</a> in the
 *             <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, EnterStandbyCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, EnterStandbyCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new EnterStandbyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnterStandbyCommandInput} for command's `input` shape.
 * @see {@link EnterStandbyCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 *
 * @example To move instances into standby mode
 * ```javascript
 * // This example puts the specified instance into standby mode.
 * const input = {
 *   "AutoScalingGroupName": "my-auto-scaling-group",
 *   "InstanceIds": [
 *     "i-93633f9b"
 *   ],
 *   "ShouldDecrementDesiredCapacity": true
 * };
 * const command = new EnterStandbyCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Activities": [
 *     {
 *       "ActivityId": "ffa056b4-6ed3-41ba-ae7c-249dfae6eba1",
 *       "AutoScalingGroupName": "my-auto-scaling-group",
 *       "Cause": "At 2015-04-12T15:10:23Z instance i-93633f9b was moved to standby in response to a user request, shrinking the capacity from 2 to 1.",
 *       "Description": "Moving EC2 instance to Standby: i-93633f9b",
 *       "Details": "details",
 *       "Progress": 50,
 *       "StartTime": "2015-04-12T15:10:23.640Z",
 *       "StatusCode": "InProgress"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 */
export class EnterStandbyCommand extends $Command<
  EnterStandbyCommandInput,
  EnterStandbyCommandOutput,
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

  constructor(readonly input: EnterStandbyCommandInput) {
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
  ): Handler<EnterStandbyCommandInput, EnterStandbyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, EnterStandbyCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "EnterStandbyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: EnterStandbyQueryFilterSensitiveLog,
      outputFilterSensitiveLog: EnterStandbyAnswerFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: EnterStandbyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryEnterStandbyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<EnterStandbyCommandOutput> {
    return deserializeAws_queryEnterStandbyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
