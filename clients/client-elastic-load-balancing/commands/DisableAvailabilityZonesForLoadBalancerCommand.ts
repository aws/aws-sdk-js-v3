import {
  ElasticLoadBalancingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingClient";
import { RemoveAvailabilityZonesInput, RemoveAvailabilityZonesOutput } from "../models/models_0";
import {
  deserializeAws_queryDisableAvailabilityZonesForLoadBalancerCommand,
  serializeAws_queryDisableAvailabilityZonesForLoadBalancerCommand,
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

export type DisableAvailabilityZonesForLoadBalancerCommandInput = RemoveAvailabilityZonesInput;
export type DisableAvailabilityZonesForLoadBalancerCommandOutput = RemoveAvailabilityZonesOutput & __MetadataBearer;

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
 */
export class DisableAvailabilityZonesForLoadBalancerCommand extends $Command<
  DisableAvailabilityZonesForLoadBalancerCommandInput,
  DisableAvailabilityZonesForLoadBalancerCommandOutput,
  ElasticLoadBalancingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticLoadBalancingClient";
    const commandName = "DisableAvailabilityZonesForLoadBalancerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RemoveAvailabilityZonesInput.filterSensitiveLog,
      outputFilterSensitiveLog: RemoveAvailabilityZonesOutput.filterSensitiveLog,
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
