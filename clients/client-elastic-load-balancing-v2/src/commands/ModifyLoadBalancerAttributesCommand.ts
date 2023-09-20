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
import { ModifyLoadBalancerAttributesInput, ModifyLoadBalancerAttributesOutput } from "../models/models_0";
import { de_ModifyLoadBalancerAttributesCommand, se_ModifyLoadBalancerAttributesCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ModifyLoadBalancerAttributesCommand}.
 */
export interface ModifyLoadBalancerAttributesCommandInput extends ModifyLoadBalancerAttributesInput {}
/**
 * @public
 *
 * The output of {@link ModifyLoadBalancerAttributesCommand}.
 */
export interface ModifyLoadBalancerAttributesCommandOutput
  extends ModifyLoadBalancerAttributesOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Modifies the specified attributes of the specified Application Load Balancer, Network Load
 *       Balancer, or Gateway Load Balancer.</p>
 *          <p>If any of the specified attributes can't be modified as requested, the call fails. Any
 *       existing attributes that you do not modify retain their current values.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, ModifyLoadBalancerAttributesCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, ModifyLoadBalancerAttributesCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * const client = new ElasticLoadBalancingV2Client(config);
 * const input = { // ModifyLoadBalancerAttributesInput
 *   LoadBalancerArn: "STRING_VALUE", // required
 *   Attributes: [ // LoadBalancerAttributes // required
 *     { // LoadBalancerAttribute
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new ModifyLoadBalancerAttributesCommand(input);
 * const response = await client.send(command);
 * // { // ModifyLoadBalancerAttributesOutput
 * //   Attributes: [ // LoadBalancerAttributes
 * //     { // LoadBalancerAttribute
 * //       Key: "STRING_VALUE",
 * //       Value: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ModifyLoadBalancerAttributesCommandInput - {@link ModifyLoadBalancerAttributesCommandInput}
 * @returns {@link ModifyLoadBalancerAttributesCommandOutput}
 * @see {@link ModifyLoadBalancerAttributesCommandInput} for command's `input` shape.
 * @see {@link ModifyLoadBalancerAttributesCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for ElasticLoadBalancingV2Client's `config` shape.
 *
 * @throws {@link InvalidConfigurationRequestException} (client fault)
 *  <p>The requested configuration is not valid.</p>
 *
 * @throws {@link LoadBalancerNotFoundException} (client fault)
 *  <p>The specified load balancer does not exist.</p>
 *
 * @throws {@link ElasticLoadBalancingV2ServiceException}
 * <p>Base exception class for all service exceptions from ElasticLoadBalancingV2 service.</p>
 *
 * @example To enable deletion protection
 * ```javascript
 * // This example enables deletion protection for the specified load balancer.
 * const input = {
 *   "Attributes": [
 *     {
 *       "Key": "deletion_protection.enabled",
 *       "Value": "true"
 *     }
 *   ],
 *   "LoadBalancerArn": "arn:aws:elasticloadbalancing:us-west-2:123456789012:loadbalancer/app/my-load-balancer/50dc6c495c0c9188"
 * };
 * const command = new ModifyLoadBalancerAttributesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Attributes": [
 *     {
 *       "Key": "deletion_protection.enabled",
 *       "Value": "true"
 *     },
 *     {
 *       "Key": "access_logs.s3.enabled",
 *       "Value": "false"
 *     },
 *     {
 *       "Key": "idle_timeout.timeout_seconds",
 *       "Value": "60"
 *     },
 *     {
 *       "Key": "access_logs.s3.prefix",
 *       "Value": ""
 *     },
 *     {
 *       "Key": "access_logs.s3.bucket",
 *       "Value": ""
 *     }
 *   ]
 * }
 * *\/
 * // example id: elbv2-modify-load-balancer-attributes-1
 * ```
 *
 * @example To change the idle timeout
 * ```javascript
 * // This example changes the idle timeout value for the specified load balancer.
 * const input = {
 *   "Attributes": [
 *     {
 *       "Key": "idle_timeout.timeout_seconds",
 *       "Value": "30"
 *     }
 *   ],
 *   "LoadBalancerArn": "arn:aws:elasticloadbalancing:us-west-2:123456789012:loadbalancer/app/my-load-balancer/50dc6c495c0c9188"
 * };
 * const command = new ModifyLoadBalancerAttributesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Attributes": [
 *     {
 *       "Key": "idle_timeout.timeout_seconds",
 *       "Value": "30"
 *     },
 *     {
 *       "Key": "access_logs.s3.enabled",
 *       "Value": "false"
 *     },
 *     {
 *       "Key": "access_logs.s3.prefix",
 *       "Value": ""
 *     },
 *     {
 *       "Key": "deletion_protection.enabled",
 *       "Value": "true"
 *     },
 *     {
 *       "Key": "access_logs.s3.bucket",
 *       "Value": ""
 *     }
 *   ]
 * }
 * *\/
 * // example id: elbv2-modify-load-balancer-attributes-2
 * ```
 *
 * @example To enable access logs
 * ```javascript
 * // This example enables access logs for the specified load balancer. Note that the S3 bucket must exist in the same region as the load balancer and must have a policy attached that grants access to the Elastic Load Balancing service.
 * const input = {
 *   "Attributes": [
 *     {
 *       "Key": "access_logs.s3.enabled",
 *       "Value": "true"
 *     },
 *     {
 *       "Key": "access_logs.s3.bucket",
 *       "Value": "my-loadbalancer-logs"
 *     },
 *     {
 *       "Key": "access_logs.s3.prefix",
 *       "Value": "myapp"
 *     }
 *   ],
 *   "LoadBalancerArn": "arn:aws:elasticloadbalancing:us-west-2:123456789012:loadbalancer/app/my-load-balancer/50dc6c495c0c9188"
 * };
 * const command = new ModifyLoadBalancerAttributesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Attributes": [
 *     {
 *       "Key": "access_logs.s3.enabled",
 *       "Value": "true"
 *     },
 *     {
 *       "Key": "access_logs.s3.bucket",
 *       "Value": "my-load-balancer-logs"
 *     },
 *     {
 *       "Key": "access_logs.s3.prefix",
 *       "Value": "myapp"
 *     },
 *     {
 *       "Key": "idle_timeout.timeout_seconds",
 *       "Value": "60"
 *     },
 *     {
 *       "Key": "deletion_protection.enabled",
 *       "Value": "false"
 *     }
 *   ]
 * }
 * *\/
 * // example id: elbv2-modify-load-balancer-attributes-3
 * ```
 *
 */
export class ModifyLoadBalancerAttributesCommand extends $Command<
  ModifyLoadBalancerAttributesCommandInput,
  ModifyLoadBalancerAttributesCommandOutput,
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
  constructor(readonly input: ModifyLoadBalancerAttributesCommandInput) {
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
  ): Handler<ModifyLoadBalancerAttributesCommandInput, ModifyLoadBalancerAttributesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyLoadBalancerAttributesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticLoadBalancingV2Client";
    const commandName = "ModifyLoadBalancerAttributesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ElasticLoadBalancing_v10",
        operation: "ModifyLoadBalancerAttributes",
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
  private serialize(input: ModifyLoadBalancerAttributesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ModifyLoadBalancerAttributesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyLoadBalancerAttributesCommandOutput> {
    return de_ModifyLoadBalancerAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
