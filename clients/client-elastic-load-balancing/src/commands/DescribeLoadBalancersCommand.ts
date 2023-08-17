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
import { DescribeAccessPointsInput, DescribeAccessPointsOutput } from "../models/models_0";
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
export interface DescribeLoadBalancersCommandInput extends DescribeAccessPointsInput {}
/**
 * @public
 *
 * The output of {@link DescribeLoadBalancersCommand}.
 */
export interface DescribeLoadBalancersCommandOutput extends DescribeAccessPointsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Describes the specified the load balancers. If no load balancers are specified, the call describes all of your load balancers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, DescribeLoadBalancersCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, DescribeLoadBalancersCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * const client = new ElasticLoadBalancingClient(config);
 * const input = { // DescribeAccessPointsInput
 *   LoadBalancerNames: [ // LoadBalancerNames
 *     "STRING_VALUE",
 *   ],
 *   Marker: "STRING_VALUE",
 *   PageSize: Number("int"),
 * };
 * const command = new DescribeLoadBalancersCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAccessPointsOutput
 * //   LoadBalancerDescriptions: [ // LoadBalancerDescriptions
 * //     { // LoadBalancerDescription
 * //       LoadBalancerName: "STRING_VALUE",
 * //       DNSName: "STRING_VALUE",
 * //       CanonicalHostedZoneName: "STRING_VALUE",
 * //       CanonicalHostedZoneNameID: "STRING_VALUE",
 * //       ListenerDescriptions: [ // ListenerDescriptions
 * //         { // ListenerDescription
 * //           Listener: { // Listener
 * //             Protocol: "STRING_VALUE", // required
 * //             LoadBalancerPort: Number("int"), // required
 * //             InstanceProtocol: "STRING_VALUE",
 * //             InstancePort: Number("int"), // required
 * //             SSLCertificateId: "STRING_VALUE",
 * //           },
 * //           PolicyNames: [ // PolicyNames
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //       Policies: { // Policies
 * //         AppCookieStickinessPolicies: [ // AppCookieStickinessPolicies
 * //           { // AppCookieStickinessPolicy
 * //             PolicyName: "STRING_VALUE",
 * //             CookieName: "STRING_VALUE",
 * //           },
 * //         ],
 * //         LBCookieStickinessPolicies: [ // LBCookieStickinessPolicies
 * //           { // LBCookieStickinessPolicy
 * //             PolicyName: "STRING_VALUE",
 * //             CookieExpirationPeriod: Number("long"),
 * //           },
 * //         ],
 * //         OtherPolicies: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       BackendServerDescriptions: [ // BackendServerDescriptions
 * //         { // BackendServerDescription
 * //           InstancePort: Number("int"),
 * //           PolicyNames: [
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //       AvailabilityZones: [ // AvailabilityZones
 * //         "STRING_VALUE",
 * //       ],
 * //       Subnets: [ // Subnets
 * //         "STRING_VALUE",
 * //       ],
 * //       VPCId: "STRING_VALUE",
 * //       Instances: [ // Instances
 * //         { // Instance
 * //           InstanceId: "STRING_VALUE",
 * //         },
 * //       ],
 * //       HealthCheck: { // HealthCheck
 * //         Target: "STRING_VALUE", // required
 * //         Interval: Number("int"), // required
 * //         Timeout: Number("int"), // required
 * //         UnhealthyThreshold: Number("int"), // required
 * //         HealthyThreshold: Number("int"), // required
 * //       },
 * //       SourceSecurityGroup: { // SourceSecurityGroup
 * //         OwnerAlias: "STRING_VALUE",
 * //         GroupName: "STRING_VALUE",
 * //       },
 * //       SecurityGroups: [ // SecurityGroups
 * //         "STRING_VALUE",
 * //       ],
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //       Scheme: "STRING_VALUE",
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
 * @see {@link ElasticLoadBalancingClientResolvedConfig | config} for ElasticLoadBalancingClient's `config` shape.
 *
 * @throws {@link AccessPointNotFoundException} (client fault)
 *  <p>The specified load balancer does not exist.</p>
 *
 * @throws {@link DependencyThrottleException} (client fault)
 *  <p>A request made by Elastic Load Balancing to another service exceeds the maximum request rate permitted for your account.</p>
 *
 * @throws {@link ElasticLoadBalancingServiceException}
 * <p>Base exception class for all service exceptions from ElasticLoadBalancing service.</p>
 *
 * @example To describe one of your load balancers
 * ```javascript
 * // This example describes the specified load balancer.
 * const input = {
 *   "LoadBalancerNames": [
 *     "my-load-balancer"
 *   ]
 * };
 * const command = new DescribeLoadBalancersCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "LoadBalancerDescriptions": [
 *     {
 *       "AvailabilityZones": [
 *         "us-west-2a"
 *       ],
 *       "BackendServerDescriptions": [
 *         {
 *           "InstancePort": 80,
 *           "PolicyNames": [
 *             "my-ProxyProtocol-policy"
 *           ]
 *         }
 *       ],
 *       "CanonicalHostedZoneName": "my-load-balancer-1234567890.us-west-2.elb.amazonaws.com",
 *       "CanonicalHostedZoneNameID": "Z3DZXE0EXAMPLE",
 *       "CreatedTime": "2015-03-19T03:24:02.650Z",
 *       "DNSName": "my-load-balancer-1234567890.us-west-2.elb.amazonaws.com",
 *       "HealthCheck": {
 *         "HealthyThreshold": 2,
 *         "Interval": 30,
 *         "Target": "HTTP:80/png",
 *         "Timeout": 3,
 *         "UnhealthyThreshold": 2
 *       },
 *       "Instances": [
 *         {
 *           "InstanceId": "i-207d9717"
 *         },
 *         {
 *           "InstanceId": "i-afefb49b"
 *         }
 *       ],
 *       "ListenerDescriptions": [
 *         {
 *           "Listener": {
 *             "InstancePort": 80,
 *             "InstanceProtocol": "HTTP",
 *             "LoadBalancerPort": 80,
 *             "Protocol": "HTTP"
 *           },
 *           "PolicyNames": []
 *         },
 *         {
 *           "Listener": {
 *             "InstancePort": 443,
 *             "InstanceProtocol": "HTTPS",
 *             "LoadBalancerPort": 443,
 *             "Protocol": "HTTPS",
 *             "SSLCertificateId": "arn:aws:iam::123456789012:server-certificate/my-server-cert"
 *           },
 *           "PolicyNames": [
 *             "ELBSecurityPolicy-2015-03"
 *           ]
 *         }
 *       ],
 *       "LoadBalancerName": "my-load-balancer",
 *       "Policies": {
 *         "AppCookieStickinessPolicies": [],
 *         "LBCookieStickinessPolicies": [
 *           {
 *             "CookieExpirationPeriod": 60,
 *             "PolicyName": "my-duration-cookie-policy"
 *           }
 *         ],
 *         "OtherPolicies": [
 *           "my-PublicKey-policy",
 *           "my-authentication-policy",
 *           "my-SSLNegotiation-policy",
 *           "my-ProxyProtocol-policy",
 *           "ELBSecurityPolicy-2015-03"
 *         ]
 *       },
 *       "Scheme": "internet-facing",
 *       "SecurityGroups": [
 *         "sg-a61988c3"
 *       ],
 *       "SourceSecurityGroup": {
 *         "GroupName": "my-elb-sg",
 *         "OwnerAlias": "123456789012"
 *       },
 *       "Subnets": [
 *         "subnet-15aaab61"
 *       ],
 *       "VPCId": "vpc-a01106c2"
 *     }
 *   ]
 * }
 * *\/
 * // example id: elb-describe-load-balancers-1
 * ```
 *
 */
export class DescribeLoadBalancersCommand extends $Command<
  DescribeLoadBalancersCommandInput,
  DescribeLoadBalancersCommandOutput,
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
    configuration: ElasticLoadBalancingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeLoadBalancersCommandInput, DescribeLoadBalancersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeLoadBalancersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticLoadBalancingClient";
    const commandName = "DescribeLoadBalancersCommand";
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
