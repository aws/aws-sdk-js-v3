// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ElasticLoadBalancingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateAccessPointInput, CreateAccessPointOutput } from "../models/models_0";
import { de_CreateLoadBalancerCommand, se_CreateLoadBalancerCommand } from "../protocols/Aws_query";

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
export interface CreateLoadBalancerCommandInput extends CreateAccessPointInput {}
/**
 * @public
 *
 * The output of {@link CreateLoadBalancerCommand}.
 */
export interface CreateLoadBalancerCommandOutput extends CreateAccessPointOutput, __MetadataBearer {}

/**
 * <p>Creates a Classic Load Balancer.</p>
 *
 *         <p>You can add listeners, security groups, subnets, and tags when you create your load balancer,
 *             or you can add them later using <a>CreateLoadBalancerListeners</a>,
 *             <a>ApplySecurityGroupsToLoadBalancer</a>, <a>AttachLoadBalancerToSubnets</a>,
 *             and <a>AddTags</a>.</p>
 *         <p>To describe your current load balancers, see <a>DescribeLoadBalancers</a>.
 *             When you are finished with a load balancer, you can delete it using
 *             <a>DeleteLoadBalancer</a>.</p>
 *
 *         <p>You can create up to 20 load balancers per region per account.
 *             You can request an increase for the number of load balancers for your account.
 *             For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-limits.html">Limits for Your Classic Load Balancer</a>
 *             in the <i>Classic Load Balancers Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, CreateLoadBalancerCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, CreateLoadBalancerCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * const client = new ElasticLoadBalancingClient(config);
 * const input = { // CreateAccessPointInput
 *   LoadBalancerName: "STRING_VALUE", // required
 *   Listeners: [ // Listeners // required
 *     { // Listener
 *       Protocol: "STRING_VALUE", // required
 *       LoadBalancerPort: Number("int"), // required
 *       InstanceProtocol: "STRING_VALUE",
 *       InstancePort: Number("int"), // required
 *       SSLCertificateId: "STRING_VALUE",
 *     },
 *   ],
 *   AvailabilityZones: [ // AvailabilityZones
 *     "STRING_VALUE",
 *   ],
 *   Subnets: [ // Subnets
 *     "STRING_VALUE",
 *   ],
 *   SecurityGroups: [ // SecurityGroups
 *     "STRING_VALUE",
 *   ],
 *   Scheme: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateLoadBalancerCommand(input);
 * const response = await client.send(command);
 * // { // CreateAccessPointOutput
 * //   DNSName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateLoadBalancerCommandInput - {@link CreateLoadBalancerCommandInput}
 * @returns {@link CreateLoadBalancerCommandOutput}
 * @see {@link CreateLoadBalancerCommandInput} for command's `input` shape.
 * @see {@link CreateLoadBalancerCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingClientResolvedConfig | config} for ElasticLoadBalancingClient's `config` shape.
 *
 * @throws {@link CertificateNotFoundException} (client fault)
 *  <p>The specified ARN does not refer to a valid SSL certificate in AWS Identity and Access Management (IAM)
 *             or AWS Certificate Manager (ACM). Note that if you recently uploaded the certificate to IAM, this error might
 *             indicate that the certificate is not fully available yet.</p>
 *
 * @throws {@link DuplicateAccessPointNameException} (client fault)
 *  <p>The specified load balancer name already exists for this account.</p>
 *
 * @throws {@link DuplicateTagKeysException} (client fault)
 *  <p>A tag key was specified more than once.</p>
 *
 * @throws {@link InvalidConfigurationRequestException} (client fault)
 *  <p>The requested configuration change is not valid.</p>
 *
 * @throws {@link InvalidSchemeException} (client fault)
 *  <p>The specified value for the schema is not valid. You can only specify a scheme for load balancers in a VPC.</p>
 *
 * @throws {@link InvalidSecurityGroupException} (client fault)
 *  <p>One or more of the specified security groups do not exist.</p>
 *
 * @throws {@link InvalidSubnetException} (client fault)
 *  <p>The specified VPC has no associated Internet gateway.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>This operation is not allowed.</p>
 *
 * @throws {@link SubnetNotFoundException} (client fault)
 *  <p>One or more of the specified subnets do not exist.</p>
 *
 * @throws {@link TooManyAccessPointsException} (client fault)
 *  <p>The quota for the number of load balancers has been reached.</p>
 *
 * @throws {@link TooManyTagsException} (client fault)
 *  <p>The quota for the number of tags that can be assigned to a load balancer has been reached.</p>
 *
 * @throws {@link UnsupportedProtocolException} (client fault)
 *  <p>The specified protocol or signature version is not supported.</p>
 *
 * @throws {@link ElasticLoadBalancingServiceException}
 * <p>Base exception class for all service exceptions from ElasticLoadBalancing service.</p>
 *
 * @public
 * @example To create an HTTP load balancer in a VPC
 * ```javascript
 * // This example creates a load balancer with an HTTP listener in a VPC.
 * const input = {
 *   "Listeners": [
 *     {
 *       "InstancePort": 80,
 *       "InstanceProtocol": "HTTP",
 *       "LoadBalancerPort": 80,
 *       "Protocol": "HTTP"
 *     }
 *   ],
 *   "LoadBalancerName": "my-load-balancer",
 *   "SecurityGroups": [
 *     "sg-a61988c3"
 *   ],
 *   "Subnets": [
 *     "subnet-15aaab61"
 *   ]
 * };
 * const command = new CreateLoadBalancerCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "DNSName": "my-load-balancer-1234567890.us-west-2.elb.amazonaws.com"
 * }
 * *\/
 * // example id: elb-create-load-balancer-1
 * ```
 *
 * @example To create an HTTP load balancer in EC2-Classic
 * ```javascript
 * // This example creates a load balancer with an HTTP listener in EC2-Classic.
 * const input = {
 *   "AvailabilityZones": [
 *     "us-west-2a"
 *   ],
 *   "Listeners": [
 *     {
 *       "InstancePort": 80,
 *       "InstanceProtocol": "HTTP",
 *       "LoadBalancerPort": 80,
 *       "Protocol": "HTTP"
 *     }
 *   ],
 *   "LoadBalancerName": "my-load-balancer"
 * };
 * const command = new CreateLoadBalancerCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "DNSName": "my-load-balancer-123456789.us-west-2.elb.amazonaws.com"
 * }
 * *\/
 * // example id: elb-create-load-balancer-2
 * ```
 *
 * @example To create an HTTPS load balancer in a VPC
 * ```javascript
 * // This example creates a load balancer with an HTTPS listener in a VPC.
 * const input = {
 *   "Listeners": [
 *     {
 *       "InstancePort": 80,
 *       "InstanceProtocol": "HTTP",
 *       "LoadBalancerPort": 80,
 *       "Protocol": "HTTP"
 *     },
 *     {
 *       "InstancePort": 80,
 *       "InstanceProtocol": "HTTP",
 *       "LoadBalancerPort": 443,
 *       "Protocol": "HTTPS",
 *       "SSLCertificateId": "arn:aws:iam::123456789012:server-certificate/my-server-cert"
 *     }
 *   ],
 *   "LoadBalancerName": "my-load-balancer",
 *   "SecurityGroups": [
 *     "sg-a61988c3"
 *   ],
 *   "Subnets": [
 *     "subnet-15aaab61"
 *   ]
 * };
 * const command = new CreateLoadBalancerCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "DNSName": "my-load-balancer-1234567890.us-west-2.elb.amazonaws.com"
 * }
 * *\/
 * // example id: elb-create-load-balancer-3
 * ```
 *
 * @example To create an HTTPS load balancer in EC2-Classic
 * ```javascript
 * // This example creates a load balancer with an HTTPS listener in EC2-Classic.
 * const input = {
 *   "AvailabilityZones": [
 *     "us-west-2a"
 *   ],
 *   "Listeners": [
 *     {
 *       "InstancePort": 80,
 *       "InstanceProtocol": "HTTP",
 *       "LoadBalancerPort": 80,
 *       "Protocol": "HTTP"
 *     },
 *     {
 *       "InstancePort": 80,
 *       "InstanceProtocol": "HTTP",
 *       "LoadBalancerPort": 443,
 *       "Protocol": "HTTPS",
 *       "SSLCertificateId": "arn:aws:iam::123456789012:server-certificate/my-server-cert"
 *     }
 *   ],
 *   "LoadBalancerName": "my-load-balancer"
 * };
 * const command = new CreateLoadBalancerCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "DNSName": "my-load-balancer-123456789.us-west-2.elb.amazonaws.com"
 * }
 * *\/
 * // example id: elb-create-load-balancer-4
 * ```
 *
 * @example To create an internal load balancer
 * ```javascript
 * // This example creates an internal load balancer with an HTTP listener in a VPC.
 * const input = {
 *   "Listeners": [
 *     {
 *       "InstancePort": 80,
 *       "InstanceProtocol": "HTTP",
 *       "LoadBalancerPort": 80,
 *       "Protocol": "HTTP"
 *     }
 *   ],
 *   "LoadBalancerName": "my-load-balancer",
 *   "Scheme": "internal",
 *   "SecurityGroups": [
 *     "sg-a61988c3"
 *   ],
 *   "Subnets": [
 *     "subnet-15aaab61"
 *   ]
 * };
 * const command = new CreateLoadBalancerCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "DNSName": "internal-my-load-balancer-123456789.us-west-2.elb.amazonaws.com"
 * }
 * *\/
 * // example id: elb-create-load-balancer-5
 * ```
 *
 */
export class CreateLoadBalancerCommand extends $Command
  .classBuilder<
    CreateLoadBalancerCommandInput,
    CreateLoadBalancerCommandOutput,
    ElasticLoadBalancingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ElasticLoadBalancingClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ElasticLoadBalancing_v7", "CreateLoadBalancer", {})
  .n("ElasticLoadBalancingClient", "CreateLoadBalancerCommand")
  .f(void 0, void 0)
  .ser(se_CreateLoadBalancerCommand)
  .de(de_CreateLoadBalancerCommand)
  .build() {}
