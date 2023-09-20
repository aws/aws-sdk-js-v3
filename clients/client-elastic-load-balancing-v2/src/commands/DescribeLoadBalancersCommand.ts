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
import { DescribeLoadBalancersInput, DescribeLoadBalancersOutput } from "../models/models_0";
import { de_DescribeLoadBalancersCommand, se_DescribeLoadBalancersCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeLoadBalancersCommand}.
 */
export interface DescribeLoadBalancersCommandInput extends DescribeLoadBalancersInput {}
/**
 * @public
 *
 * The output of {@link DescribeLoadBalancersCommand}.
 */
export interface DescribeLoadBalancersCommandOutput extends DescribeLoadBalancersOutput, __MetadataBearer {}

/**
 * @public
 * <p>Describes the specified load balancers or all of your load balancers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, DescribeLoadBalancersCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, DescribeLoadBalancersCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * const client = new ElasticLoadBalancingV2Client(config);
 * const input = { // DescribeLoadBalancersInput
 *   LoadBalancerArns: [ // LoadBalancerArns
 *     "STRING_VALUE",
 *   ],
 *   Names: [ // LoadBalancerNames
 *     "STRING_VALUE",
 *   ],
 *   Marker: "STRING_VALUE",
 *   PageSize: Number("int"),
 * };
 * const command = new DescribeLoadBalancersCommand(input);
 * const response = await client.send(command);
 * // { // DescribeLoadBalancersOutput
 * //   LoadBalancers: [ // LoadBalancers
 * //     { // LoadBalancer
 * //       LoadBalancerArn: "STRING_VALUE",
 * //       DNSName: "STRING_VALUE",
 * //       CanonicalHostedZoneId: "STRING_VALUE",
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //       LoadBalancerName: "STRING_VALUE",
 * //       Scheme: "internet-facing" || "internal",
 * //       VpcId: "STRING_VALUE",
 * //       State: { // LoadBalancerState
 * //         Code: "active" || "provisioning" || "active_impaired" || "failed",
 * //         Reason: "STRING_VALUE",
 * //       },
 * //       Type: "application" || "network" || "gateway",
 * //       AvailabilityZones: [ // AvailabilityZones
 * //         { // AvailabilityZone
 * //           ZoneName: "STRING_VALUE",
 * //           SubnetId: "STRING_VALUE",
 * //           OutpostId: "STRING_VALUE",
 * //           LoadBalancerAddresses: [ // LoadBalancerAddresses
 * //             { // LoadBalancerAddress
 * //               IpAddress: "STRING_VALUE",
 * //               AllocationId: "STRING_VALUE",
 * //               PrivateIPv4Address: "STRING_VALUE",
 * //               IPv6Address: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       SecurityGroups: [ // SecurityGroups
 * //         "STRING_VALUE",
 * //       ],
 * //       IpAddressType: "ipv4" || "dualstack",
 * //       CustomerOwnedIpv4Pool: "STRING_VALUE",
 * //       EnforceSecurityGroupInboundRulesOnPrivateLinkTraffic: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextMarker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeLoadBalancersCommandInput - {@link DescribeLoadBalancersCommandInput}
 * @returns {@link DescribeLoadBalancersCommandOutput}
 * @see {@link DescribeLoadBalancersCommandInput} for command's `input` shape.
 * @see {@link DescribeLoadBalancersCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for ElasticLoadBalancingV2Client's `config` shape.
 *
 * @throws {@link LoadBalancerNotFoundException} (client fault)
 *  <p>The specified load balancer does not exist.</p>
 *
 * @throws {@link ElasticLoadBalancingV2ServiceException}
 * <p>Base exception class for all service exceptions from ElasticLoadBalancingV2 service.</p>
 *
 * @example To describe a load balancer
 * ```javascript
 * // This example describes the specified load balancer.
 * const input = {
 *   "LoadBalancerArns": [
 *     "arn:aws:elasticloadbalancing:us-west-2:123456789012:loadbalancer/app/my-load-balancer/50dc6c495c0c9188"
 *   ]
 * };
 * const command = new DescribeLoadBalancersCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "LoadBalancers": [
 *     {
 *       "AvailabilityZones": [
 *         {
 *           "SubnetId": "subnet-8360a9e7",
 *           "ZoneName": "us-west-2a"
 *         },
 *         {
 *           "SubnetId": "subnet-b7d581c0",
 *           "ZoneName": "us-west-2b"
 *         }
 *       ],
 *       "CanonicalHostedZoneId": "Z2P70J7EXAMPLE",
 *       "CreatedTime": "2016-03-25T21:26:12.920Z",
 *       "DNSName": "my-load-balancer-424835706.us-west-2.elb.amazonaws.com",
 *       "LoadBalancerArn": "arn:aws:elasticloadbalancing:us-west-2:123456789012:loadbalancer/app/my-load-balancer/50dc6c495c0c9188",
 *       "LoadBalancerName": "my-load-balancer",
 *       "Scheme": "internet-facing",
 *       "SecurityGroups": [
 *         "sg-5943793c"
 *       ],
 *       "State": {
 *         "Code": "active"
 *       },
 *       "Type": "application",
 *       "VpcId": "vpc-3ac0fb5f"
 *     }
 *   ]
 * }
 * *\/
 * // example id: elbv2-describe-load-balancers-1
 * ```
 *
 */
export class DescribeLoadBalancersCommand extends $Command<
  DescribeLoadBalancersCommandInput,
  DescribeLoadBalancersCommandOutput,
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
  constructor(readonly input: DescribeLoadBalancersCommandInput) {
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
  ): Handler<DescribeLoadBalancersCommandInput, DescribeLoadBalancersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeLoadBalancersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticLoadBalancingV2Client";
    const commandName = "DescribeLoadBalancersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ElasticLoadBalancing_v10",
        operation: "DescribeLoadBalancers",
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
  private serialize(input: DescribeLoadBalancersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeLoadBalancersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeLoadBalancersCommandOutput> {
    return de_DescribeLoadBalancersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
