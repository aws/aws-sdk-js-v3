import {
  ElasticLoadBalancingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingClient";
import { ConfigureHealthCheckInput, ConfigureHealthCheckOutput } from "../models/models_0";
import {
  deserializeAws_queryConfigureHealthCheckCommand,
  serializeAws_queryConfigureHealthCheckCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type ConfigureHealthCheckCommandInput = ConfigureHealthCheckInput;
export type ConfigureHealthCheckCommandOutput = ConfigureHealthCheckOutput & __MetadataBearer;

/**
 * <p>Specifies the health check settings to use when evaluating the health state of your EC2 instances.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-healthchecks.html">Configure Health Checks for Your Load Balancer</a>
 *             in the <i>Classic Load Balancers Guide</i>.</p>
 */
export class ConfigureHealthCheckCommand extends $Command<
  ConfigureHealthCheckCommandInput,
  ConfigureHealthCheckCommandOutput,
  ElasticLoadBalancingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticLoadBalancingClient";
    const commandName = "ConfigureHealthCheckCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ConfigureHealthCheckInput.filterSensitiveLog,
      outputFilterSensitiveLog: ConfigureHealthCheckOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ConfigureHealthCheckCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryConfigureHealthCheckCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ConfigureHealthCheckCommandOutput> {
    return deserializeAws_queryConfigureHealthCheckCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
