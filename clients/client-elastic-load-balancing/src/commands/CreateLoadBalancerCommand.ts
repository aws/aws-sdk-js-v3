// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateAccessPointInput, CreateAccessPointOutput } from "../models/models_0";
import { CreateLoadBalancer$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates a Classic Load Balancer.
 *
 * You can add listeners, security groups, subnets, and tags when you create your load balancer, or you can add them later using CreateLoadBalancerListeners, ApplySecurityGroupsToLoadBalancer, AttachLoadBalancerToSubnets, and AddTags.
 *
 * To describe your current load balancers, see DescribeLoadBalancers. When you are finished with a load balancer, you can delete it using DeleteLoadBalancer.
 *
 *
 *
 * You can create up to 20 load balancers per region per account. You can request an increase for the number of load balancers for your account. For more information, see [Limits for Your Classic Load Balancer](https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-limits.html) in the *Classic Load Balancers Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, CreateLoadBalancerCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, CreateLoadBalancerCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * // import type { ElasticLoadBalancingClientConfig } from "@aws-sdk/client-elastic-load-balancing";
 * const config = {}; // type is ElasticLoadBalancingClientConfig
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
 *
 * The specified ARN does not refer to a valid SSL certificate in AWS Identity and Access Management (IAM) or AWS Certificate Manager (ACM). Note that if you recently uploaded the certificate to IAM, this error might indicate that the certificate is not fully available yet.
 *
 * @throws {@link DuplicateAccessPointNameException} (client fault)
 *
 * The specified load balancer name already exists for this account.
 *
 * @throws {@link DuplicateTagKeysException} (client fault)
 *
 * A tag key was specified more than once.
 *
 * @throws {@link InvalidConfigurationRequestException} (client fault)
 *
 * The requested configuration change is not valid.
 *
 * @throws {@link InvalidSchemeException} (client fault)
 *
 * The specified value for the schema is not valid. You can only specify a scheme for load balancers in a VPC.
 *
 * @throws {@link InvalidSecurityGroupException} (client fault)
 *
 * One or more of the specified security groups do not exist.
 *
 * @throws {@link InvalidSubnetException} (client fault)
 *
 * The specified VPC has no associated Internet gateway.
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *
 * This operation is not allowed.
 *
 * @throws {@link SubnetNotFoundException} (client fault)
 *
 * One or more of the specified subnets do not exist.
 *
 * @throws {@link TooManyAccessPointsException} (client fault)
 *
 * The quota for the number of load balancers has been reached.
 *
 * @throws {@link TooManyTagsException} (client fault)
 *
 * The quota for the number of tags that can be assigned to a load balancer has been reached.
 *
 * @throws {@link UnsupportedProtocolException} (client fault)
 *
 * The specified protocol or signature version is not supported.
 *
 * @throws {@link ElasticLoadBalancingServiceException}
 *
 * Base exception class for all service exceptions from ElasticLoadBalancing service.
 *
 * @example To create an HTTP load balancer in a VPC
 * ```javascript
 * // This example creates a load balancer with an HTTP listener in a VPC.
 * const input = {
 *   Listeners: [
 *     {
 *       InstancePort: 80,
 *       InstanceProtocol: "HTTP",
 *       LoadBalancerPort: 80,
 *       Protocol: "HTTP"
 *     }
 *   ],
 *   LoadBalancerName: "my-load-balancer",
 *   SecurityGroups: [
 *     "sg-a61988c3"
 *   ],
 *   Subnets: [
 *     "subnet-15aaab61"
 *   ]
 * };
 * const command = new CreateLoadBalancerCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   DNSName: "my-load-balancer-1234567890.us-west-2.elb.amazonaws.com"
 * }
 * *\/
 * ```
 *
 * @example To create an HTTP load balancer in EC2-Classic
 * ```javascript
 * // This example creates a load balancer with an HTTP listener in EC2-Classic.
 * const input = {
 *   AvailabilityZones: [
 *     "us-west-2a"
 *   ],
 *   Listeners: [
 *     {
 *       InstancePort: 80,
 *       InstanceProtocol: "HTTP",
 *       LoadBalancerPort: 80,
 *       Protocol: "HTTP"
 *     }
 *   ],
 *   LoadBalancerName: "my-load-balancer"
 * };
 * const command = new CreateLoadBalancerCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   DNSName: "my-load-balancer-123456789.us-west-2.elb.amazonaws.com"
 * }
 * *\/
 * ```
 *
 * @example To create an HTTPS load balancer in a VPC
 * ```javascript
 * // This example creates a load balancer with an HTTPS listener in a VPC.
 * const input = {
 *   Listeners: [
 *     {
 *       InstancePort: 80,
 *       InstanceProtocol: "HTTP",
 *       LoadBalancerPort: 80,
 *       Protocol: "HTTP"
 *     },
 *     {
 *       InstancePort: 80,
 *       InstanceProtocol: "HTTP",
 *       LoadBalancerPort: 443,
 *       Protocol: "HTTPS",
 *       SSLCertificateId: "arn:aws:iam::123456789012:server-certificate/my-server-cert"
 *     }
 *   ],
 *   LoadBalancerName: "my-load-balancer",
 *   SecurityGroups: [
 *     "sg-a61988c3"
 *   ],
 *   Subnets: [
 *     "subnet-15aaab61"
 *   ]
 * };
 * const command = new CreateLoadBalancerCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   DNSName: "my-load-balancer-1234567890.us-west-2.elb.amazonaws.com"
 * }
 * *\/
 * ```
 *
 * @example To create an HTTPS load balancer in EC2-Classic
 * ```javascript
 * // This example creates a load balancer with an HTTPS listener in EC2-Classic.
 * const input = {
 *   AvailabilityZones: [
 *     "us-west-2a"
 *   ],
 *   Listeners: [
 *     {
 *       InstancePort: 80,
 *       InstanceProtocol: "HTTP",
 *       LoadBalancerPort: 80,
 *       Protocol: "HTTP"
 *     },
 *     {
 *       InstancePort: 80,
 *       InstanceProtocol: "HTTP",
 *       LoadBalancerPort: 443,
 *       Protocol: "HTTPS",
 *       SSLCertificateId: "arn:aws:iam::123456789012:server-certificate/my-server-cert"
 *     }
 *   ],
 *   LoadBalancerName: "my-load-balancer"
 * };
 * const command = new CreateLoadBalancerCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   DNSName: "my-load-balancer-123456789.us-west-2.elb.amazonaws.com"
 * }
 * *\/
 * ```
 *
 * @example To create an internal load balancer
 * ```javascript
 * // This example creates an internal load balancer with an HTTP listener in a VPC.
 * const input = {
 *   Listeners: [
 *     {
 *       InstancePort: 80,
 *       InstanceProtocol: "HTTP",
 *       LoadBalancerPort: 80,
 *       Protocol: "HTTP"
 *     }
 *   ],
 *   LoadBalancerName: "my-load-balancer",
 *   Scheme: "internal",
 *   SecurityGroups: [
 *     "sg-a61988c3"
 *   ],
 *   Subnets: [
 *     "subnet-15aaab61"
 *   ]
 * };
 * const command = new CreateLoadBalancerCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   DNSName: "internal-my-load-balancer-123456789.us-west-2.elb.amazonaws.com"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateLoadBalancerCommand extends command<CreateLoadBalancerCommandInput, CreateLoadBalancerCommandOutput>(
  _ep0,
  _mw0,
  "CreateLoadBalancer",
  CreateLoadBalancer$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAccessPointInput;
      output: CreateAccessPointOutput;
    };
    sdk: {
      input: CreateLoadBalancerCommandInput;
      output: CreateLoadBalancerCommandOutput;
    };
  };
}
