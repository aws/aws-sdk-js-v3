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
import { AttachInstancesQuery } from "../models/models_0";
import { de_AttachInstancesCommand, se_AttachInstancesCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AttachInstancesCommand}.
 */
export interface AttachInstancesCommandInput extends AttachInstancesQuery {}
/**
 * @public
 *
 * The output of {@link AttachInstancesCommand}.
 */
export interface AttachInstancesCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Attaches one or more EC2 instances to the specified Auto Scaling group.</p>
 *          <p>When you attach instances, Amazon EC2 Auto Scaling increases the desired capacity of the group by the
 *             number of instances being attached. If the number of instances being attached plus the
 *             desired capacity of the group exceeds the maximum size of the group, the operation
 *             fails.</p>
 *          <p>If there is a Classic Load Balancer attached to your Auto Scaling group, the instances are
 *             also registered with the load balancer. If there are target groups attached to your Auto Scaling
 *             group, the instances are also registered with the target groups.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/attach-instance-asg.html">Attach EC2 instances to
 *                 your Auto Scaling group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, AttachInstancesCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, AttachInstancesCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const input = { // AttachInstancesQuery
 *   InstanceIds: [ // InstanceIds
 *     "STRING_VALUE",
 *   ],
 *   AutoScalingGroupName: "STRING_VALUE", // required
 * };
 * const command = new AttachInstancesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AttachInstancesCommandInput - {@link AttachInstancesCommandInput}
 * @returns {@link AttachInstancesCommandOutput}
 * @see {@link AttachInstancesCommandInput} for command's `input` shape.
 * @see {@link AttachInstancesCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
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
 * @example To attach an instance to an Auto Scaling group
 * ```javascript
 * // This example attaches the specified instance to the specified Auto Scaling group.
 * const input = {
 *   "AutoScalingGroupName": "my-auto-scaling-group",
 *   "InstanceIds": [
 *     "i-93633f9b"
 *   ]
 * };
 * const command = new AttachInstancesCommand(input);
 * await client.send(command);
 * // example id: autoscaling-attach-instances-1
 * ```
 *
 */
export class AttachInstancesCommand extends $Command<
  AttachInstancesCommandInput,
  AttachInstancesCommandOutput,
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
  constructor(readonly input: AttachInstancesCommandInput) {
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
  ): Handler<AttachInstancesCommandInput, AttachInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AttachInstancesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "AttachInstancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AutoScaling_2011_01_01",
        operation: "AttachInstances",
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
  private serialize(input: AttachInstancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AttachInstancesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AttachInstancesCommandOutput> {
    return de_AttachInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
