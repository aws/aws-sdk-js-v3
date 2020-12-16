import {
  ElasticLoadBalancingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingClient";
import { AddAvailabilityZonesInput, AddAvailabilityZonesOutput } from "../models/models_0";
import {
  deserializeAws_queryEnableAvailabilityZonesForLoadBalancerCommand,
  serializeAws_queryEnableAvailabilityZonesForLoadBalancerCommand,
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

export type EnableAvailabilityZonesForLoadBalancerCommandInput = AddAvailabilityZonesInput;
export type EnableAvailabilityZonesForLoadBalancerCommandOutput = AddAvailabilityZonesOutput & __MetadataBearer;

/**
 * <p>Adds the specified Availability Zones to the set of Availability Zones for the specified load balancer
 *             in EC2-Classic or a default VPC.</p>
 *         <p>For load balancers in a non-default VPC, use <a>AttachLoadBalancerToSubnets</a>.</p>
 *         <p>The load balancer evenly distributes requests across all its registered Availability Zones
 *             that contain instances. For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-disable-az.html">Add or Remove Availability Zones</a>
 *             in the <i>Classic Load Balancers Guide</i>.</p>
 */
export class EnableAvailabilityZonesForLoadBalancerCommand extends $Command<
  EnableAvailabilityZonesForLoadBalancerCommandInput,
  EnableAvailabilityZonesForLoadBalancerCommandOutput,
  ElasticLoadBalancingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: EnableAvailabilityZonesForLoadBalancerCommandInput) {
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
  ): Handler<EnableAvailabilityZonesForLoadBalancerCommandInput, EnableAvailabilityZonesForLoadBalancerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticLoadBalancingClient";
    const commandName = "EnableAvailabilityZonesForLoadBalancerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AddAvailabilityZonesInput.filterSensitiveLog,
      outputFilterSensitiveLog: AddAvailabilityZonesOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: EnableAvailabilityZonesForLoadBalancerCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryEnableAvailabilityZonesForLoadBalancerCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<EnableAvailabilityZonesForLoadBalancerCommandOutput> {
    return deserializeAws_queryEnableAvailabilityZonesForLoadBalancerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
