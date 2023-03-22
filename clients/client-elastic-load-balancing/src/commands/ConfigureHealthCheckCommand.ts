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
import {
  ConfigureHealthCheckInput,
  ConfigureHealthCheckInputFilterSensitiveLog,
  ConfigureHealthCheckOutput,
  ConfigureHealthCheckOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryConfigureHealthCheckCommand,
  serializeAws_queryConfigureHealthCheckCommand,
} from "../protocols/Aws_query";

/**
 * @public
 *
 * The input for {@link ConfigureHealthCheckCommand}.
 */
export interface ConfigureHealthCheckCommandInput extends ConfigureHealthCheckInput {}
/**
 * @public
 *
 * The output of {@link ConfigureHealthCheckCommand}.
 */
export interface ConfigureHealthCheckCommandOutput extends ConfigureHealthCheckOutput, __MetadataBearer {}

/**
 * @public
 * <p>Specifies the health check settings to use when evaluating the health state of your EC2 instances.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-healthchecks.html">Configure Health Checks for Your Load Balancer</a>
 *             in the <i>Classic Load Balancers Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, ConfigureHealthCheckCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, ConfigureHealthCheckCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * const client = new ElasticLoadBalancingClient(config);
 * const command = new ConfigureHealthCheckCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ConfigureHealthCheckCommandInput - {@link ConfigureHealthCheckCommandInput}
 * @returns {@link ConfigureHealthCheckCommandOutput}
 * @see {@link ConfigureHealthCheckCommandInput} for command's `input` shape.
 * @see {@link ConfigureHealthCheckCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingClientResolvedConfig | config} for ElasticLoadBalancingClient's `config` shape.
 *
 * @throws {@link AccessPointNotFoundException} (client fault)
 *  <p>The specified load balancer does not exist.</p>
 *
 *
 * @example To specify the health check settings for your backend EC2 instances
 * ```javascript
 * // This example specifies the health check settings used to evaluate the health of your backend EC2 instances.
 * const input = {
 *   "HealthCheck": {
 *     "HealthyThreshold": 2,
 *     "Interval": 30,
 *     "Target": "HTTP:80/png",
 *     "Timeout": 3,
 *     "UnhealthyThreshold": 2
 *   },
 *   "LoadBalancerName": "my-load-balancer"
 * };
 * const command = new ConfigureHealthCheckCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "HealthCheck": {
 *     "HealthyThreshold": 2,
 *     "Interval": 30,
 *     "Target": "HTTP:80/png",
 *     "Timeout": 3,
 *     "UnhealthyThreshold": 2
 *   }
 * }
 * *\/
 * // example id: elb-configure-health-check-1
 * ```
 *
 */
export class ConfigureHealthCheckCommand extends $Command<
  ConfigureHealthCheckCommandInput,
  ConfigureHealthCheckCommandOutput,
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
  constructor(readonly input: ConfigureHealthCheckCommandInput) {
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
  ): Handler<ConfigureHealthCheckCommandInput, ConfigureHealthCheckCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ConfigureHealthCheckCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticLoadBalancingClient";
    const commandName = "ConfigureHealthCheckCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ConfigureHealthCheckInputFilterSensitiveLog,
      outputFilterSensitiveLog: ConfigureHealthCheckOutputFilterSensitiveLog,
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
  private serialize(input: ConfigureHealthCheckCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryConfigureHealthCheckCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ConfigureHealthCheckCommandOutput> {
    return deserializeAws_queryConfigureHealthCheckCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
