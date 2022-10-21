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
  RemoveAvailabilityZonesInput,
  RemoveAvailabilityZonesInputFilterSensitiveLog,
  RemoveAvailabilityZonesOutput,
  RemoveAvailabilityZonesOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryDisableAvailabilityZonesForLoadBalancerCommand,
  serializeAws_queryDisableAvailabilityZonesForLoadBalancerCommand,
} from "../protocols/Aws_query";

export interface DisableAvailabilityZonesForLoadBalancerCommandInput extends RemoveAvailabilityZonesInput {}
export interface DisableAvailabilityZonesForLoadBalancerCommandOutput
  extends RemoveAvailabilityZonesOutput,
    __MetadataBearer {}

/**
 * <p>Removes the specified Availability Zones from the set of Availability Zones for the specified load balancer
 *             in EC2-Classic or a default VPC.</p>
 *         <p>For load balancers in a non-default VPC, use <a>DetachLoadBalancerFromSubnets</a>.</p>
 *         <p>There must be at least one Availability Zone registered with a load balancer at all times.
 *          After an Availability Zone is removed, all instances registered with the load balancer that are in the removed
 *          Availability Zone go into the <code>OutOfService</code> state. Then, the load balancer attempts to equally balance
 *          the traffic among its remaining Availability Zones.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-disable-az.html">Add or Remove Availability Zones</a>
 *             in the <i>Classic Load Balancers Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, DisableAvailabilityZonesForLoadBalancerCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, DisableAvailabilityZonesForLoadBalancerCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * const client = new ElasticLoadBalancingClient(config);
 * const command = new DisableAvailabilityZonesForLoadBalancerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisableAvailabilityZonesForLoadBalancerCommandInput} for command's `input` shape.
 * @see {@link DisableAvailabilityZonesForLoadBalancerCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingClientResolvedConfig | config} for ElasticLoadBalancingClient's `config` shape.
 *
 */
export class DisableAvailabilityZonesForLoadBalancerCommand extends $Command<
  DisableAvailabilityZonesForLoadBalancerCommandInput,
  DisableAvailabilityZonesForLoadBalancerCommandOutput,
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

  constructor(readonly input: DisableAvailabilityZonesForLoadBalancerCommandInput) {
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
  ): Handler<
    DisableAvailabilityZonesForLoadBalancerCommandInput,
    DisableAvailabilityZonesForLoadBalancerCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DisableAvailabilityZonesForLoadBalancerCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticLoadBalancingClient";
    const commandName = "DisableAvailabilityZonesForLoadBalancerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RemoveAvailabilityZonesInputFilterSensitiveLog,
      outputFilterSensitiveLog: RemoveAvailabilityZonesOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DisableAvailabilityZonesForLoadBalancerCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryDisableAvailabilityZonesForLoadBalancerCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisableAvailabilityZonesForLoadBalancerCommandOutput> {
    return deserializeAws_queryDisableAvailabilityZonesForLoadBalancerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
