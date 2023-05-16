// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@aws-sdk/types";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { SerdeContext as __SerdeContext } from "@smithy/types";

import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { AutoScalingInstancesType, DescribeAutoScalingInstancesType } from "../models/models_0";
import { de_DescribeAutoScalingInstancesCommand, se_DescribeAutoScalingInstancesCommand } from "../protocols/Aws_query";

/**
 * @public
 *
 * The input for {@link DescribeAutoScalingInstancesCommand}.
 */
export interface DescribeAutoScalingInstancesCommandInput extends DescribeAutoScalingInstancesType {}
/**
 * @public
 *
 * The output of {@link DescribeAutoScalingInstancesCommand}.
 */
export interface DescribeAutoScalingInstancesCommandOutput extends AutoScalingInstancesType, __MetadataBearer {}

/**
 * @public
 * <p>Gets information about the Auto Scaling instances in the account and Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DescribeAutoScalingInstancesCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DescribeAutoScalingInstancesCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const input = { // DescribeAutoScalingInstancesType
 *   InstanceIds: [ // InstanceIds
 *     "STRING_VALUE",
 *   ],
 *   MaxRecords: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeAutoScalingInstancesCommand(input);
 * const response = await client.send(command);
 * // { // AutoScalingInstancesType
 * //   AutoScalingInstances: [ // AutoScalingInstances
 * //     { // AutoScalingInstanceDetails
 * //       InstanceId: "STRING_VALUE", // required
 * //       InstanceType: "STRING_VALUE",
 * //       AutoScalingGroupName: "STRING_VALUE", // required
 * //       AvailabilityZone: "STRING_VALUE", // required
 * //       LifecycleState: "STRING_VALUE", // required
 * //       HealthStatus: "STRING_VALUE", // required
 * //       LaunchConfigurationName: "STRING_VALUE",
 * //       LaunchTemplate: { // LaunchTemplateSpecification
 * //         LaunchTemplateId: "STRING_VALUE",
 * //         LaunchTemplateName: "STRING_VALUE",
 * //         Version: "STRING_VALUE",
 * //       },
 * //       ProtectedFromScaleIn: true || false, // required
 * //       WeightedCapacity: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeAutoScalingInstancesCommandInput - {@link DescribeAutoScalingInstancesCommandInput}
 * @returns {@link DescribeAutoScalingInstancesCommandOutput}
 * @see {@link DescribeAutoScalingInstancesCommandInput} for command's `input` shape.
 * @see {@link DescribeAutoScalingInstancesCommandOutput} for command's `response` shape.
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
 * @example To describe one or more Auto Scaling instances
 * ```javascript
 * // This example describes the specified Auto Scaling instance.
 * const input = {
 *   "InstanceIds": [
 *     "i-4ba0837f"
 *   ]
 * };
 * const command = new DescribeAutoScalingInstancesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "AutoScalingInstances": [
 *     {
 *       "AutoScalingGroupName": "my-auto-scaling-group",
 *       "AvailabilityZone": "us-west-2c",
 *       "HealthStatus": "HEALTHY",
 *       "InstanceId": "i-4ba0837f",
 *       "LaunchConfigurationName": "my-launch-config",
 *       "LifecycleState": "InService",
 *       "ProtectedFromScaleIn": false
 *     }
 *   ]
 * }
 * *\/
 * // example id: autoscaling-describe-auto-scaling-instances-1
 * ```
 *
 */
export class DescribeAutoScalingInstancesCommand extends $Command<
  DescribeAutoScalingInstancesCommandInput,
  DescribeAutoScalingInstancesCommandOutput,
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
  constructor(readonly input: DescribeAutoScalingInstancesCommandInput) {
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
  ): Handler<DescribeAutoScalingInstancesCommandInput, DescribeAutoScalingInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeAutoScalingInstancesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "DescribeAutoScalingInstancesCommand";
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
  private serialize(input: DescribeAutoScalingInstancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeAutoScalingInstancesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeAutoScalingInstancesCommandOutput> {
    return de_DescribeAutoScalingInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
