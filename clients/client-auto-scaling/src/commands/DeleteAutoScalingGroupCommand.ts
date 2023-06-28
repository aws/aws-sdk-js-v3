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
import { DeleteAutoScalingGroupType } from "../models/models_0";
import { de_DeleteAutoScalingGroupCommand, se_DeleteAutoScalingGroupCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteAutoScalingGroupCommand}.
 */
export interface DeleteAutoScalingGroupCommandInput extends DeleteAutoScalingGroupType {}
/**
 * @public
 *
 * The output of {@link DeleteAutoScalingGroupCommand}.
 */
export interface DeleteAutoScalingGroupCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Deletes the specified Auto Scaling group.</p>
 *          <p>If the group has instances or scaling activities in progress, you must specify the
 *             option to force the deletion in order for it to succeed. The force delete operation will
 *             also terminate the EC2 instances. If the group has a warm pool, the force delete option
 *             also deletes the warm pool.</p>
 *          <p>To remove instances from the Auto Scaling group before deleting it, call the <a>DetachInstances</a> API with the list of instances and the option to
 *             decrement the desired capacity. This ensures that Amazon EC2 Auto Scaling does not launch replacement
 *             instances.</p>
 *          <p>To terminate all instances before deleting the Auto Scaling group, call the <a>UpdateAutoScalingGroup</a> API and set the minimum size and desired capacity
 *             of the Auto Scaling group to
 *             zero.</p>
 *          <p>If the group has scaling policies, deleting the group deletes the policies, the
 *             underlying alarm actions, and any alarm that no longer has an associated action.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-process-shutdown.html">Delete your Auto Scaling
 *                 infrastructure</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DeleteAutoScalingGroupCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DeleteAutoScalingGroupCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const input = { // DeleteAutoScalingGroupType
 *   AutoScalingGroupName: "STRING_VALUE", // required
 *   ForceDelete: true || false,
 * };
 * const command = new DeleteAutoScalingGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAutoScalingGroupCommandInput - {@link DeleteAutoScalingGroupCommandInput}
 * @returns {@link DeleteAutoScalingGroupCommandOutput}
 * @see {@link DeleteAutoScalingGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteAutoScalingGroupCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 * @throws {@link ResourceContentionFault} (server fault)
 *  <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group,
 *             instance, or load balancer).</p>
 *
 * @throws {@link ResourceInUseFault} (client fault)
 *  <p>The operation can't be performed because the resource is in use.</p>
 *
 * @throws {@link ScalingActivityInProgressFault} (client fault)
 *  <p>The operation can't be performed because there are scaling activities in
 *             progress.</p>
 *
 * @throws {@link AutoScalingServiceException}
 * <p>Base exception class for all service exceptions from AutoScaling service.</p>
 *
 * @example To delete an Auto Scaling group
 * ```javascript
 * // This example deletes the specified Auto Scaling group.
 * const input = {
 *   "AutoScalingGroupName": "my-auto-scaling-group"
 * };
 * const command = new DeleteAutoScalingGroupCommand(input);
 * await client.send(command);
 * // example id: autoscaling-delete-auto-scaling-group-1
 * ```
 *
 * @example To delete an Auto Scaling group and all its instances
 * ```javascript
 * // This example deletes the specified Auto Scaling group and all its instances.
 * const input = {
 *   "AutoScalingGroupName": "my-auto-scaling-group",
 *   "ForceDelete": true
 * };
 * const command = new DeleteAutoScalingGroupCommand(input);
 * await client.send(command);
 * // example id: autoscaling-delete-auto-scaling-group-2
 * ```
 *
 */
export class DeleteAutoScalingGroupCommand extends $Command<
  DeleteAutoScalingGroupCommandInput,
  DeleteAutoScalingGroupCommandOutput,
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
  constructor(readonly input: DeleteAutoScalingGroupCommandInput) {
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
  ): Handler<DeleteAutoScalingGroupCommandInput, DeleteAutoScalingGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteAutoScalingGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "DeleteAutoScalingGroupCommand";
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
  private serialize(input: DeleteAutoScalingGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteAutoScalingGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteAutoScalingGroupCommandOutput> {
    return de_DeleteAutoScalingGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
