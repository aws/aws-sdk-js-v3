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
  DescribePoliciesType,
  DescribePoliciesTypeFilterSensitiveLog,
  PoliciesType,
  PoliciesTypeFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryDescribePoliciesCommand,
  serializeAws_queryDescribePoliciesCommand,
} from "../protocols/Aws_query";

/**
 * @public
 *
 * The input for {@link DescribePoliciesCommand}.
 */
export interface DescribePoliciesCommandInput extends DescribePoliciesType {}
/**
 * @public
 *
 * The output of {@link DescribePoliciesCommand}.
 */
export interface DescribePoliciesCommandOutput extends PoliciesType, __MetadataBearer {}

/**
 * @public
 * <p>Gets information about the scaling policies in the account and Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DescribePoliciesCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DescribePoliciesCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new DescribePoliciesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribePoliciesCommandInput - {@link DescribePoliciesCommandInput}
 * @returns {@link DescribePoliciesCommandOutput}
 * @see {@link DescribePoliciesCommandInput} for command's `input` shape.
 * @see {@link DescribePoliciesCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 * @throws {@link InvalidNextToken} (client fault)
 *  <p>The <code>NextToken</code> value is not valid.</p>
 *
 * @throws {@link ResourceContentionFault} (server fault)
 *  <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group,
 *             instance, or load balancer).</p>
 *
 * @throws {@link ServiceLinkedRoleFailure} (server fault)
 *  <p>The service-linked role is not yet ready for use.</p>
 *
 *
 * @example To describe scaling policies
 * ```javascript
 * // This example describes the policies for the specified Auto Scaling group.
 * const input = {
 *   "AutoScalingGroupName": "my-auto-scaling-group"
 * };
 * const command = new DescribePoliciesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ScalingPolicies": [
 *     {
 *       "AdjustmentType": "ChangeInCapacity",
 *       "Alarms": [],
 *       "AutoScalingGroupName": "my-auto-scaling-group",
 *       "PolicyARN": "arn:aws:autoscaling:us-west-2:123456789012:scalingPolicy:2233f3d7-6290-403b-b632-93c553560106:autoScalingGroupName/my-auto-scaling-group:policyName/ScaleIn",
 *       "PolicyName": "ScaleIn",
 *       "ScalingAdjustment": -1
 *     },
 *     {
 *       "AdjustmentType": "PercentChangeInCapacity",
 *       "Alarms": [],
 *       "AutoScalingGroupName": "my-auto-scaling-group",
 *       "Cooldown": 60,
 *       "MinAdjustmentStep": 2,
 *       "PolicyARN": "arn:aws:autoscaling:us-west-2:123456789012:scalingPolicy:2b435159-cf77-4e89-8c0e-d63b497baad7:autoScalingGroupName/my-auto-scaling-group:policyName/ScalePercentChange",
 *       "PolicyName": "ScalePercentChange",
 *       "ScalingAdjustment": 25
 *     }
 *   ]
 * }
 * *\/
 * // example id: autoscaling-describe-policies-1
 * ```
 *
 */
export class DescribePoliciesCommand extends $Command<
  DescribePoliciesCommandInput,
  DescribePoliciesCommandOutput,
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
  constructor(readonly input: DescribePoliciesCommandInput) {
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
  ): Handler<DescribePoliciesCommandInput, DescribePoliciesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribePoliciesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "DescribePoliciesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribePoliciesTypeFilterSensitiveLog,
      outputFilterSensitiveLog: PoliciesTypeFilterSensitiveLog,
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
  private serialize(input: DescribePoliciesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribePoliciesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribePoliciesCommandOutput> {
    return deserializeAws_queryDescribePoliciesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
