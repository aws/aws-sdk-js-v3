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

import {
  ElasticLoadBalancingV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingV2Client";
import {
  ModifyListenerInput,
  ModifyListenerInputFilterSensitiveLog,
  ModifyListenerOutput,
  ModifyListenerOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryModifyListenerCommand,
  serializeAws_queryModifyListenerCommand,
} from "../protocols/Aws_query";

/**
 * The input for {@link ModifyListenerCommand}.
 */
export interface ModifyListenerCommandInput extends ModifyListenerInput {}
/**
 * The output of {@link ModifyListenerCommand}.
 */
export interface ModifyListenerCommandOutput extends ModifyListenerOutput, __MetadataBearer {}

/**
 * <p>Replaces the specified properties of the specified listener. Any properties that you do
 *       not specify remain unchanged.</p>
 *          <p>Changing the protocol from HTTPS to HTTP, or from TLS to TCP, removes the security policy
 *       and default certificate properties. If you change the protocol from HTTP to HTTPS, or from TCP
 *       to TLS, you must add the security policy and default certificate properties.</p>
 *          <p>To add an item to a list, remove an item from a list, or update an item in a list, you
 *       must provide the entire list. For example, to add an action, specify a list with the current
 *       actions plus the new action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, ModifyListenerCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, ModifyListenerCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * const client = new ElasticLoadBalancingV2Client(config);
 * const command = new ModifyListenerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyListenerCommandInput} for command's `input` shape.
 * @see {@link ModifyListenerCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for ElasticLoadBalancingV2Client's `config` shape.
 *
 * @example To change the default action for a listener
 * ```javascript
 * // This example changes the default action for the specified listener.
 * const input = {
 *   "DefaultActions": [
 *     {
 *       "TargetGroupArn": "arn:aws:elasticloadbalancing:us-west-2:123456789012:targetgroup/my-new-targets/2453ed029918f21f",
 *       "Type": "forward"
 *     }
 *   ],
 *   "ListenerArn": "arn:aws:elasticloadbalancing:us-west-2:123456789012:listener/app/my-load-balancer/50dc6c495c0c9188/f2f7dc8efc522ab2"
 * };
 * const command = new ModifyListenerCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Listeners": [
 *     {
 *       "DefaultActions": [
 *         {
 *           "TargetGroupArn": "arn:aws:elasticloadbalancing:us-west-2:123456789012:targetgroup/my-new-targets/2453ed029918f21f",
 *           "Type": "forward"
 *         }
 *       ],
 *       "ListenerArn": "arn:aws:elasticloadbalancing:us-west-2:123456789012:listener/app/my-load-balancer/50dc6c495c0c9188/f2f7dc8efc522ab2",
 *       "LoadBalancerArn": "arn:aws:elasticloadbalancing:us-west-2:123456789012:loadbalancer/app/my-load-balancer/50dc6c495c0c9188",
 *       "Port": 80,
 *       "Protocol": "HTTP"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example To change the server certificate
 * ```javascript
 * // This example changes the server certificate for the specified HTTPS listener.
 * const input = {
 *   "Certificates": [
 *     {
 *       "CertificateArn": "arn:aws:iam::123456789012:server-certificate/my-new-server-cert"
 *     }
 *   ],
 *   "ListenerArn": "arn:aws:elasticloadbalancing:us-west-2:123456789012:listener/app/my-load-balancer/50dc6c495c0c9188/0467ef3c8400ae65"
 * };
 * const command = new ModifyListenerCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Listeners": [
 *     {
 *       "Certificates": [
 *         {
 *           "CertificateArn": "arn:aws:iam::123456789012:server-certificate/my-new-server-cert"
 *         }
 *       ],
 *       "DefaultActions": [
 *         {
 *           "TargetGroupArn": "arn:aws:elasticloadbalancing:us-west-2:123456789012:targetgroup/my-targets/73e2d6bc24d8a067",
 *           "Type": "forward"
 *         }
 *       ],
 *       "ListenerArn": "arn:aws:elasticloadbalancing:us-west-2:123456789012:listener/app/my-load-balancer/50dc6c495c0c9188/0467ef3c8400ae65",
 *       "LoadBalancerArn": "arn:aws:elasticloadbalancing:us-west-2:123456789012:loadbalancer/app/my-load-balancer/50dc6c495c0c9188",
 *       "Port": 443,
 *       "Protocol": "HTTPS",
 *       "SslPolicy": "ELBSecurityPolicy-2015-05"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 */
export class ModifyListenerCommand extends $Command<
  ModifyListenerCommandInput,
  ModifyListenerCommandOutput,
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

  constructor(readonly input: ModifyListenerCommandInput) {
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
  ): Handler<ModifyListenerCommandInput, ModifyListenerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyListenerCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticLoadBalancingV2Client";
    const commandName = "ModifyListenerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyListenerInputFilterSensitiveLog,
      outputFilterSensitiveLog: ModifyListenerOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifyListenerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryModifyListenerCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyListenerCommandOutput> {
    return deserializeAws_queryModifyListenerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
