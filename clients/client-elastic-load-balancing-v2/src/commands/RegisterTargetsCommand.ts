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

import {
  ElasticLoadBalancingV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingV2Client";
import { RegisterTargetsInput, RegisterTargetsOutput } from "../models/models_0";
import { de_RegisterTargetsCommand, se_RegisterTargetsCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link RegisterTargetsCommand}.
 */
export interface RegisterTargetsCommandInput extends RegisterTargetsInput {}
/**
 * @public
 *
 * The output of {@link RegisterTargetsCommand}.
 */
export interface RegisterTargetsCommandOutput extends RegisterTargetsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Registers the specified targets with the specified target group.</p>
 *          <p>If the target is an EC2 instance, it must be in the <code>running</code> state when you
 *       register it.</p>
 *          <p>By default, the load balancer routes requests to registered targets using the protocol and
 *       port for the target group. Alternatively, you can override the port for a target when you
 *       register it. You can register each EC2 instance or IP address with the same target group
 *       multiple times using different ports.</p>
 *          <p>With a Network Load Balancer, you cannot register instances by instance ID if they have
 *       the following instance types: C1, CC1, CC2, CG1, CG2, CR1, CS1, G1, G2, HI1, HS1, M1, M2, M3,
 *       and T1. You can register instances of these types by IP address.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, RegisterTargetsCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, RegisterTargetsCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * const client = new ElasticLoadBalancingV2Client(config);
 * const input = { // RegisterTargetsInput
 *   TargetGroupArn: "STRING_VALUE", // required
 *   Targets: [ // TargetDescriptions // required
 *     { // TargetDescription
 *       Id: "STRING_VALUE", // required
 *       Port: Number("int"),
 *       AvailabilityZone: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new RegisterTargetsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RegisterTargetsCommandInput - {@link RegisterTargetsCommandInput}
 * @returns {@link RegisterTargetsCommandOutput}
 * @see {@link RegisterTargetsCommandInput} for command's `input` shape.
 * @see {@link RegisterTargetsCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for ElasticLoadBalancingV2Client's `config` shape.
 *
 * @throws {@link InvalidTargetException} (client fault)
 *  <p>The specified target does not exist, is not in the same VPC as the target group, or has an
 *       unsupported instance type.</p>
 *
 * @throws {@link TargetGroupNotFoundException} (client fault)
 *  <p>The specified target group does not exist.</p>
 *
 * @throws {@link TooManyRegistrationsForTargetIdException} (client fault)
 *  <p>You've reached the limit on the number of times a target can be registered with a load
 *       balancer.</p>
 *
 * @throws {@link TooManyTargetsException} (client fault)
 *  <p>You've reached the limit on the number of targets.</p>
 *
 * @throws {@link ElasticLoadBalancingV2ServiceException}
 * <p>Base exception class for all service exceptions from ElasticLoadBalancingV2 service.</p>
 *
 * @example To register targets with a target group
 * ```javascript
 * // This example registers the specified instances with the specified target group.
 * const input = {
 *   "TargetGroupArn": "arn:aws:elasticloadbalancing:us-west-2:123456789012:targetgroup/my-targets/73e2d6bc24d8a067",
 *   "Targets": [
 *     {
 *       "Id": "i-80c8dd94"
 *     },
 *     {
 *       "Id": "i-ceddcd4d"
 *     }
 *   ]
 * };
 * const command = new RegisterTargetsCommand(input);
 * await client.send(command);
 * // example id: elbv2-register-targets-1
 * ```
 *
 * @example To register targets with a target group using port overrides
 * ```javascript
 * // This example registers the specified instance with the specified target group using multiple ports. This enables you to register ECS containers on the same instance as targets in the target group.
 * const input = {
 *   "TargetGroupArn": "arn:aws:elasticloadbalancing:us-west-2:123456789012:targetgroup/my-new-targets/3bb63f11dfb0faf9",
 *   "Targets": [
 *     {
 *       "Id": "i-80c8dd94",
 *       "Port": 80
 *     },
 *     {
 *       "Id": "i-80c8dd94",
 *       "Port": 766
 *     }
 *   ]
 * };
 * const command = new RegisterTargetsCommand(input);
 * await client.send(command);
 * // example id: elbv2-register-targets-2
 * ```
 *
 */
export class RegisterTargetsCommand extends $Command<
  RegisterTargetsCommandInput,
  RegisterTargetsCommandOutput,
  ElasticLoadBalancingV2ClientResolvedConfig
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
  constructor(readonly input: RegisterTargetsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticLoadBalancingV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RegisterTargetsCommandInput, RegisterTargetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RegisterTargetsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticLoadBalancingV2Client";
    const commandName = "RegisterTargetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ElasticLoadBalancing_v10",
        operation: "RegisterTargets",
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
  private serialize(input: RegisterTargetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_RegisterTargetsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RegisterTargetsCommandOutput> {
    return de_RegisterTargetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
