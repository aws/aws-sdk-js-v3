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
  LaunchConfigurationNamesType,
  LaunchConfigurationNamesTypeFilterSensitiveLog,
  LaunchConfigurationsType,
  LaunchConfigurationsTypeFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryDescribeLaunchConfigurationsCommand,
  serializeAws_queryDescribeLaunchConfigurationsCommand,
} from "../protocols/Aws_query";

/**
 * @public
 *
 * The input for {@link DescribeLaunchConfigurationsCommand}.
 */
export interface DescribeLaunchConfigurationsCommandInput extends LaunchConfigurationNamesType {}
/**
 * @public
 *
 * The output of {@link DescribeLaunchConfigurationsCommand}.
 */
export interface DescribeLaunchConfigurationsCommandOutput extends LaunchConfigurationsType, __MetadataBearer {}

/**
 * @public
 * <p>Gets information about the launch configurations in the account and Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DescribeLaunchConfigurationsCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DescribeLaunchConfigurationsCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new DescribeLaunchConfigurationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribeLaunchConfigurationsCommandInput - {@link DescribeLaunchConfigurationsCommandInput}
 * @returns {@link DescribeLaunchConfigurationsCommandOutput}
 * @see {@link DescribeLaunchConfigurationsCommandInput} for command's `input` shape.
 * @see {@link DescribeLaunchConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 * @throws {@link InvalidNextToken} (client fault)
 *  <p>The <code>NextToken</code> value is not valid.</p>
 *
 * @throws {@link ResourceContentionFault} (server fault)
 *  <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group,
 *             instance, or load balancer).</p>
 *
 *
 * @example To describe Auto Scaling launch configurations
 * ```javascript
 * // This example describes the specified launch configuration.
 * const input = {
 *   "LaunchConfigurationNames": [
 *     "my-launch-config"
 *   ]
 * };
 * const command = new DescribeLaunchConfigurationsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "LaunchConfigurations": [
 *     {
 *       "AssociatePublicIpAddress": true,
 *       "BlockDeviceMappings": [],
 *       "CreatedTime": "2014-05-07T17:39:28.599Z",
 *       "EbsOptimized": false,
 *       "ImageId": "ami-043a5034",
 *       "InstanceMonitoring": {
 *         "Enabled": true
 *       },
 *       "InstanceType": "t1.micro",
 *       "LaunchConfigurationARN": "arn:aws:autoscaling:us-west-2:123456789012:launchConfiguration:98d3b196-4cf9-4e88-8ca1-8547c24ced8b:launchConfigurationName/my-launch-config",
 *       "LaunchConfigurationName": "my-launch-config",
 *       "SecurityGroups": [
 *         "sg-67ef0308"
 *       ]
 *     }
 *   ]
 * }
 * *\/
 * // example id: autoscaling-describe-launch-configurations-1
 * ```
 *
 */
export class DescribeLaunchConfigurationsCommand extends $Command<
  DescribeLaunchConfigurationsCommandInput,
  DescribeLaunchConfigurationsCommandOutput,
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
  constructor(readonly input: DescribeLaunchConfigurationsCommandInput) {
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
  ): Handler<DescribeLaunchConfigurationsCommandInput, DescribeLaunchConfigurationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeLaunchConfigurationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "DescribeLaunchConfigurationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: LaunchConfigurationNamesTypeFilterSensitiveLog,
      outputFilterSensitiveLog: LaunchConfigurationsTypeFilterSensitiveLog,
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
  private serialize(input: DescribeLaunchConfigurationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeLaunchConfigurationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeLaunchConfigurationsCommandOutput> {
    return deserializeAws_queryDescribeLaunchConfigurationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
