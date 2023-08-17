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
import { AddAvailabilityZonesInput, AddAvailabilityZonesOutput } from "../models/models_0";
import {
  de_EnableAvailabilityZonesForLoadBalancerCommand,
  se_EnableAvailabilityZonesForLoadBalancerCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link EnableAvailabilityZonesForLoadBalancerCommand}.
 */
export interface EnableAvailabilityZonesForLoadBalancerCommandInput extends AddAvailabilityZonesInput {}
/**
 * @public
 *
 * The output of {@link EnableAvailabilityZonesForLoadBalancerCommand}.
 */
export interface EnableAvailabilityZonesForLoadBalancerCommandOutput
  extends AddAvailabilityZonesOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Adds the specified Availability Zones to the set of Availability Zones for the specified load balancer
 *             in EC2-Classic or a default VPC.</p>
 *         <p>For load balancers in a non-default VPC, use <a>AttachLoadBalancerToSubnets</a>.</p>
 *         <p>The load balancer evenly distributes requests across all its registered Availability Zones
 *             that contain instances. For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-disable-az.html">Add or Remove Availability Zones</a>
 *             in the <i>Classic Load Balancers Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, EnableAvailabilityZonesForLoadBalancerCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, EnableAvailabilityZonesForLoadBalancerCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * const client = new ElasticLoadBalancingClient(config);
 * const input = { // AddAvailabilityZonesInput
 *   LoadBalancerName: "STRING_VALUE", // required
 *   AvailabilityZones: [ // AvailabilityZones // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new EnableAvailabilityZonesForLoadBalancerCommand(input);
 * const response = await client.send(command);
 * // { // AddAvailabilityZonesOutput
 * //   AvailabilityZones: [ // AvailabilityZones
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param EnableAvailabilityZonesForLoadBalancerCommandInput - {@link EnableAvailabilityZonesForLoadBalancerCommandInput}
 * @returns {@link EnableAvailabilityZonesForLoadBalancerCommandOutput}
 * @see {@link EnableAvailabilityZonesForLoadBalancerCommandInput} for command's `input` shape.
 * @see {@link EnableAvailabilityZonesForLoadBalancerCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingClientResolvedConfig | config} for ElasticLoadBalancingClient's `config` shape.
 *
 * @throws {@link AccessPointNotFoundException} (client fault)
 *  <p>The specified load balancer does not exist.</p>
 *
 * @throws {@link ElasticLoadBalancingServiceException}
 * <p>Base exception class for all service exceptions from ElasticLoadBalancing service.</p>
 *
 * @example To enable an Availability Zone for a load balancer
 * ```javascript
 * // This example adds the specified Availability Zone to the specified load balancer.
 * const input = {
 *   "AvailabilityZones": [
 *     "us-west-2b"
 *   ],
 *   "LoadBalancerName": "my-load-balancer"
 * };
 * const command = new EnableAvailabilityZonesForLoadBalancerCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "AvailabilityZones": [
 *     "us-west-2a",
 *     "us-west-2b"
 *   ]
 * }
 * *\/
 * // example id: elb-enable-availability-zones-for-load-balancer-1
 * ```
 *
 */
export class EnableAvailabilityZonesForLoadBalancerCommand extends $Command<
  EnableAvailabilityZonesForLoadBalancerCommandInput,
  EnableAvailabilityZonesForLoadBalancerCommandOutput,
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, EnableAvailabilityZonesForLoadBalancerCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticLoadBalancingClient";
    const commandName = "EnableAvailabilityZonesForLoadBalancerCommand";
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
    input: EnableAvailabilityZonesForLoadBalancerCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_EnableAvailabilityZonesForLoadBalancerCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<EnableAvailabilityZonesForLoadBalancerCommandOutput> {
    return de_EnableAvailabilityZonesForLoadBalancerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
