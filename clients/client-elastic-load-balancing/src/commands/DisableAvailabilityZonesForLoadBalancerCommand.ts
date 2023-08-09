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
} from "@smithy/types";

import {
  ElasticLoadBalancingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingClient";
import { RemoveAvailabilityZonesInput, RemoveAvailabilityZonesOutput } from "../models/models_0";
import {
  de_DisableAvailabilityZonesForLoadBalancerCommand,
  se_DisableAvailabilityZonesForLoadBalancerCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DisableAvailabilityZonesForLoadBalancerCommand}.
 */
export interface DisableAvailabilityZonesForLoadBalancerCommandInput extends RemoveAvailabilityZonesInput {}
/**
 * @public
 *
 * The output of {@link DisableAvailabilityZonesForLoadBalancerCommand}.
 */
export interface DisableAvailabilityZonesForLoadBalancerCommandOutput
  extends RemoveAvailabilityZonesOutput,
    __MetadataBearer {}

/**
 * @public
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
 * const input = { // RemoveAvailabilityZonesInput
 *   LoadBalancerName: "STRING_VALUE", // required
 *   AvailabilityZones: [ // AvailabilityZones // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DisableAvailabilityZonesForLoadBalancerCommand(input);
 * const response = await client.send(command);
 * // { // RemoveAvailabilityZonesOutput
 * //   AvailabilityZones: [ // AvailabilityZones
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param DisableAvailabilityZonesForLoadBalancerCommandInput - {@link DisableAvailabilityZonesForLoadBalancerCommandInput}
 * @returns {@link DisableAvailabilityZonesForLoadBalancerCommandOutput}
 * @see {@link DisableAvailabilityZonesForLoadBalancerCommandInput} for command's `input` shape.
 * @see {@link DisableAvailabilityZonesForLoadBalancerCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingClientResolvedConfig | config} for ElasticLoadBalancingClient's `config` shape.
 *
 * @throws {@link AccessPointNotFoundException} (client fault)
 *  <p>The specified load balancer does not exist.</p>
 *
 * @throws {@link InvalidConfigurationRequestException} (client fault)
 *  <p>The requested configuration change is not valid.</p>
 *
 * @throws {@link ElasticLoadBalancingServiceException}
 * <p>Base exception class for all service exceptions from ElasticLoadBalancing service.</p>
 *
 * @example To disable an Availability Zone for a load balancer
 * ```javascript
 * // This example removes the specified Availability Zone from the set of Availability Zones for the specified load balancer.
 * const input = {
 *   "AvailabilityZones": [
 *     "us-west-2a"
 *   ],
 *   "LoadBalancerName": "my-load-balancer"
 * };
 * const command = new DisableAvailabilityZonesForLoadBalancerCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "AvailabilityZones": [
 *     "us-west-2b"
 *   ]
 * }
 * *\/
 * // example id: elb-disable-availability-zones-for-load-balancer-1
 * ```
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

  /**
   * @public
   */
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
    input: DisableAvailabilityZonesForLoadBalancerCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DisableAvailabilityZonesForLoadBalancerCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisableAvailabilityZonesForLoadBalancerCommandOutput> {
    return de_DisableAvailabilityZonesForLoadBalancerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
