// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  ElasticLoadBalancingV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateLoadBalancerInput, CreateLoadBalancerOutput } from "../models/models_0";
import { CreateLoadBalancer$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateLoadBalancerCommand}.
 */
export interface CreateLoadBalancerCommandInput extends CreateLoadBalancerInput {}
/**
 * @public
 *
 * The output of {@link CreateLoadBalancerCommand}.
 */
export interface CreateLoadBalancerCommandOutput extends CreateLoadBalancerOutput, __MetadataBearer {}

/**
 * <p>Creates an Application Load Balancer, Network Load Balancer, or Gateway Load
 *       Balancer.</p>
 *          <p>For more information, see the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/application-load-balancers.html">Application Load Balancers</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancers.html">Network Load
 *             Balancers</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/gateway-load-balancers.html">Gateway Load
 *             Balancers</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>This operation is idempotent, which means that it completes at most one time. If you
 *       attempt to create multiple load balancers with the same settings, each call succeeds.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, CreateLoadBalancerCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, CreateLoadBalancerCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * // import type { ElasticLoadBalancingV2ClientConfig } from "@aws-sdk/client-elastic-load-balancing-v2";
 * const config = {}; // type is ElasticLoadBalancingV2ClientConfig
 * const client = new ElasticLoadBalancingV2Client(config);
 * const input = { // CreateLoadBalancerInput
 *   Name: "STRING_VALUE", // required
 *   Subnets: [ // Subnets
 *     "STRING_VALUE",
 *   ],
 *   SubnetMappings: [ // SubnetMappings
 *     { // SubnetMapping
 *       SubnetId: "STRING_VALUE",
 *       AllocationId: "STRING_VALUE",
 *       PrivateIPv4Address: "STRING_VALUE",
 *       IPv6Address: "STRING_VALUE",
 *       SourceNatIpv6Prefix: "STRING_VALUE",
 *     },
 *   ],
 *   SecurityGroups: [ // SecurityGroups
 *     "STRING_VALUE",
 *   ],
 *   Scheme: "internet-facing" || "internal",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   Type: "application" || "network" || "gateway",
 *   IpAddressType: "ipv4" || "dualstack" || "dualstack-without-public-ipv4",
 *   CustomerOwnedIpv4Pool: "STRING_VALUE",
 *   EnablePrefixForIpv6SourceNat: "on" || "off",
 *   IpamPools: { // IpamPools
 *     Ipv4IpamPoolId: "STRING_VALUE",
 *   },
 * };
 * const command = new CreateLoadBalancerCommand(input);
 * const response = await client.send(command);
 * // { // CreateLoadBalancerOutput
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
 * //           SourceNatIpv6Prefixes: [ // SourceNatIpv6Prefixes
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //       SecurityGroups: [ // SecurityGroups
 * //         "STRING_VALUE",
 * //       ],
 * //       IpAddressType: "ipv4" || "dualstack" || "dualstack-without-public-ipv4",
 * //       CustomerOwnedIpv4Pool: "STRING_VALUE",
 * //       EnforceSecurityGroupInboundRulesOnPrivateLinkTraffic: "STRING_VALUE",
 * //       EnablePrefixForIpv6SourceNat: "on" || "off",
 * //       IpamPools: { // IpamPools
 * //         Ipv4IpamPoolId: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param CreateLoadBalancerCommandInput - {@link CreateLoadBalancerCommandInput}
 * @returns {@link CreateLoadBalancerCommandOutput}
 * @see {@link CreateLoadBalancerCommandInput} for command's `input` shape.
 * @see {@link CreateLoadBalancerCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for ElasticLoadBalancingV2Client's `config` shape.
 *
 * @throws {@link AllocationIdNotFoundException} (client fault)
 *  <p>The specified allocation ID does not exist.</p>
 *
 * @throws {@link AvailabilityZoneNotSupportedException} (client fault)
 *  <p>The specified Availability Zone is not supported.</p>
 *
 * @throws {@link DuplicateLoadBalancerNameException} (client fault)
 *  <p>A load balancer with the specified name already exists.</p>
 *
 * @throws {@link DuplicateTagKeysException} (client fault)
 *  <p>A tag key was specified more than once.</p>
 *
 * @throws {@link InvalidConfigurationRequestException} (client fault)
 *  <p>The requested configuration is not valid.</p>
 *
 * @throws {@link InvalidSchemeException} (client fault)
 *  <p>The requested scheme is not valid.</p>
 *
 * @throws {@link InvalidSecurityGroupException} (client fault)
 *  <p>The specified security group does not exist.</p>
 *
 * @throws {@link InvalidSubnetException} (client fault)
 *  <p>The specified subnet is out of available addresses.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>This operation is not allowed.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>A specified resource is in use.</p>
 *
 * @throws {@link SubnetNotFoundException} (client fault)
 *  <p>The specified subnet does not exist.</p>
 *
 * @throws {@link TooManyLoadBalancersException} (client fault)
 *  <p>You've reached the limit on the number of load balancers for your Amazon Web Services
 *       account.</p>
 *
 * @throws {@link TooManyTagsException} (client fault)
 *  <p>You've reached the limit on the number of tags for this resource.</p>
 *
 * @throws {@link ElasticLoadBalancingV2ServiceException}
 * <p>Base exception class for all service exceptions from ElasticLoadBalancingV2 service.</p>
 *
 *
 * @example To create an Internet-facing load balancer
 * ```javascript
 * // This example creates an Internet-facing load balancer and enables the Availability Zones for the specified subnets.
 * const input = {
 *   Name: "my-load-balancer",
 *   Subnets: [
 *     "subnet-b7d581c0",
 *     "subnet-8360a9e7"
 *   ]
 * };
 * const command = new CreateLoadBalancerCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   LoadBalancers: [
 *     {
 *       AvailabilityZones: [
 *         {
 *           SubnetId: "subnet-8360a9e7",
 *           ZoneName: "us-west-2a"
 *         },
 *         {
 *           SubnetId: "subnet-b7d581c0",
 *           ZoneName: "us-west-2b"
 *         }
 *       ],
 *       CanonicalHostedZoneId: "Z2P70J7EXAMPLE",
 *       CreatedTime: "2016-03-25T21:26:12.920Z",
 *       DNSName: "my-load-balancer-424835706.us-west-2.elb.amazonaws.com",
 *       LoadBalancerArn: "arn:aws:elasticloadbalancing:us-west-2:123456789012:loadbalancer/app/my-load-balancer/50dc6c495c0c9188",
 *       LoadBalancerName: "my-load-balancer",
 *       Scheme: "internet-facing",
 *       SecurityGroups: [
 *         "sg-5943793c"
 *       ],
 *       State: {
 *         Code: "provisioning"
 *       },
 *       Type: "application",
 *       VpcId: "vpc-3ac0fb5f"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example To create an internal load balancer
 * ```javascript
 * // This example creates an internal load balancer and enables the Availability Zones for the specified subnets.
 * const input = {
 *   Name: "my-internal-load-balancer",
 *   Scheme: "internal",
 *   SecurityGroups:   [],
 *   Subnets: [
 *     "subnet-b7d581c0",
 *     "subnet-8360a9e7"
 *   ]
 * };
 * const command = new CreateLoadBalancerCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   LoadBalancers: [
 *     {
 *       AvailabilityZones: [
 *         {
 *           SubnetId: "subnet-8360a9e7",
 *           ZoneName: "us-west-2a"
 *         },
 *         {
 *           SubnetId: "subnet-b7d581c0",
 *           ZoneName: "us-west-2b"
 *         }
 *       ],
 *       CanonicalHostedZoneId: "Z2P70J7EXAMPLE",
 *       CreatedTime: "2016-03-25T21:29:48.850Z",
 *       DNSName: "internal-my-internal-load-balancer-1529930873.us-west-2.elb.amazonaws.com",
 *       LoadBalancerArn: "arn:aws:elasticloadbalancing:us-west-2:123456789012:loadbalancer/app/my-internal-load-balancer/5b49b8d4303115c2",
 *       LoadBalancerName: "my-internal-load-balancer",
 *       Scheme: "internal",
 *       SecurityGroups: [
 *         "sg-5943793c"
 *       ],
 *       State: {
 *         Code: "provisioning"
 *       },
 *       Type: "application",
 *       VpcId: "vpc-3ac0fb5f"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateLoadBalancerCommand extends $Command
  .classBuilder<
    CreateLoadBalancerCommandInput,
    CreateLoadBalancerCommandOutput,
    ElasticLoadBalancingV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElasticLoadBalancingV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ElasticLoadBalancing_v10", "CreateLoadBalancer", {})
  .n("ElasticLoadBalancingV2Client", "CreateLoadBalancerCommand")
  .sc(CreateLoadBalancer$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateLoadBalancerInput;
      output: CreateLoadBalancerOutput;
    };
    sdk: {
      input: CreateLoadBalancerCommandInput;
      output: CreateLoadBalancerCommandOutput;
    };
  };
}
