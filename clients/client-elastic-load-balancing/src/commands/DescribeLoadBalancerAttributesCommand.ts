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
  ElasticLoadBalancingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingClient";
import { DescribeLoadBalancerAttributesInput, DescribeLoadBalancerAttributesOutput } from "../models/models_0";
import {
  deserializeAws_queryDescribeLoadBalancerAttributesCommand,
  serializeAws_queryDescribeLoadBalancerAttributesCommand,
} from "../protocols/Aws_query";

/**
 * @public
 *
 * The input for {@link DescribeLoadBalancerAttributesCommand}.
 */
export interface DescribeLoadBalancerAttributesCommandInput extends DescribeLoadBalancerAttributesInput {}
/**
 * @public
 *
 * The output of {@link DescribeLoadBalancerAttributesCommand}.
 */
export interface DescribeLoadBalancerAttributesCommandOutput
  extends DescribeLoadBalancerAttributesOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Describes the attributes for the specified load balancer.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, DescribeLoadBalancerAttributesCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, DescribeLoadBalancerAttributesCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * const client = new ElasticLoadBalancingClient(config);
 * const command = new DescribeLoadBalancerAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribeLoadBalancerAttributesCommandInput - {@link DescribeLoadBalancerAttributesCommandInput}
 * @returns {@link DescribeLoadBalancerAttributesCommandOutput}
 * @see {@link DescribeLoadBalancerAttributesCommandInput} for command's `input` shape.
 * @see {@link DescribeLoadBalancerAttributesCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingClientResolvedConfig | config} for ElasticLoadBalancingClient's `config` shape.
 *
 * @throws {@link AccessPointNotFoundException} (client fault)
 *  <p>The specified load balancer does not exist.</p>
 *
 * @throws {@link LoadBalancerAttributeNotFoundException} (client fault)
 *  <p>The specified load balancer attribute does not exist.</p>
 *
 *
 * @example To describe the attributes of a load balancer
 * ```javascript
 * // This example describes the attributes of the specified load balancer.
 * const input = {
 *   "LoadBalancerName": "my-load-balancer"
 * };
 * const command = new DescribeLoadBalancerAttributesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "LoadBalancerAttributes": {
 *     "AccessLog": {
 *       "Enabled": false
 *     },
 *     "ConnectionDraining": {
 *       "Enabled": false,
 *       "Timeout": 300
 *     },
 *     "ConnectionSettings": {
 *       "IdleTimeout": 60
 *     },
 *     "CrossZoneLoadBalancing": {
 *       "Enabled": false
 *     }
 *   }
 * }
 * *\/
 * // example id: elb-describe-load-balancer-attributes-1
 * ```
 *
 */
export class DescribeLoadBalancerAttributesCommand extends $Command<
  DescribeLoadBalancerAttributesCommandInput,
  DescribeLoadBalancerAttributesCommandOutput,
  ElasticLoadBalancingClientResolvedConfig
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
  constructor(readonly input: DescribeLoadBalancerAttributesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticLoadBalancingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeLoadBalancerAttributesCommandInput, DescribeLoadBalancerAttributesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeLoadBalancerAttributesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticLoadBalancingClient";
    const commandName = "DescribeLoadBalancerAttributesCommand";
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
  private serialize(
    input: DescribeLoadBalancerAttributesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryDescribeLoadBalancerAttributesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeLoadBalancerAttributesCommandOutput> {
    return deserializeAws_queryDescribeLoadBalancerAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
