// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateProxyRequest, CreateProxyResponse } from "../models/models_0";
import { CreateProxy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateProxyCommand}.
 */
export interface CreateProxyCommandInput extends CreateProxyRequest {}
/**
 * @public
 *
 * The output of {@link CreateProxyCommand}.
 */
export interface CreateProxyCommandOutput extends CreateProxyResponse, __MetadataBearer {}

/**
 * Creates a proxy. A proxy is a fully managed, Envoy-based proxy that runs your
 * Envoy configuration on Amazon EC2 instances inside your own virtual private
 * cloud (VPC). AWS provisions and scales the proxy, upgrades the Envoy version,
 * patches the operating system, and monitors its health.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ELBProxyClient, CreateProxyCommand } from "@aws-sdk/client-elb-proxy"; // ES Modules import
 * // const { ELBProxyClient, CreateProxyCommand } = require("@aws-sdk/client-elb-proxy"); // CommonJS import
 * // import type { ELBProxyClientConfig } from "@aws-sdk/client-elb-proxy";
 * const config = {}; // type is ELBProxyClientConfig
 * const client = new ELBProxyClient(config);
 * const input = { // CreateProxyRequest
 *   name: "STRING_VALUE", // required
 *   type: "envoy", // required
 *   proxyVersion: "STRING_VALUE", // required
 *   roleArn: "STRING_VALUE", // required
 *   configuration: { // ProxyConfiguration
 *     configurationFile: { // ConfigurationFile
 *       configurationBytes: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")       // required
 *     },
 *     configurationArchive: { // ConfigurationArchive
 *       configurationBytes: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")       // required
 *     },
 *   },
 *   networkConfiguration: { // ProxyNetworkUserConfiguration
 *     ipConfiguration: { // ProxyIpConfiguration
 *       ipAddressingConfiguration: { // ProxyIpAddressingConfiguration
 *         ipv4Addressability: "off" || "internet-facing" || "internal", // required
 *         ipv6Addressability: "off" || "internet-facing" || "internal", // required
 *       },
 *     },
 *     vpcConfiguration: { // ProxyVpcUserConfiguration
 *       subnets: [ // SubnetDetailsList // required
 *         { // SubnetDetails
 *           subnetId: "STRING_VALUE", // required
 *         },
 *       ],
 *       securityGroups: [ // SecurityGroupDetailsList // required
 *         { // SecurityGroupDetails
 *           securityGroupId: "STRING_VALUE", // required
 *         },
 *       ],
 *     },
 *   },
 *   attributes: [ // ProxyAttributeList
 *     { // Attribute
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 *   customerKmsKeyArn: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateProxyCommand(input);
 * const response = await client.send(command);
 * // { // CreateProxyResponse
 * //   arn: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   type: "envoy",
 * //   proxyVersion: "STRING_VALUE",
 * //   dnsName: "STRING_VALUE",
 * //   roleArn: "STRING_VALUE",
 * //   networkConfiguration: { // ProxyNetworkConfiguration
 * //     ipConfiguration: { // ProxyIpConfiguration
 * //       ipAddressingConfiguration: { // ProxyIpAddressingConfiguration
 * //         ipv4Addressability: "off" || "internet-facing" || "internal", // required
 * //         ipv6Addressability: "off" || "internet-facing" || "internal", // required
 * //       },
 * //     },
 * //     vpcConfiguration: { // ProxyVpcConfiguration
 * //       vpcId: "STRING_VALUE",
 * //       availabilityZones: [ // SubnetAndZoneList // required
 * //         { // SubnetAndZone
 * //           subnetId: "STRING_VALUE", // required
 * //           zoneId: "STRING_VALUE", // required
 * //           zoneName: "STRING_VALUE",
 * //         },
 * //       ],
 * //       securityGroups: [ // SecurityGroupDetailsList // required
 * //         { // SecurityGroupDetails
 * //           securityGroupId: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //   },
 * //   status: { // ProxyStatus
 * //     code: "action-required" || "active" || "create-failed" || "create-in-progress" || "deleted" || "delete-in-progress" || "update-in-progress" || "cancel-update-in-progress", // required
 * //     reasons: [ // ProxyStatusReasonList // required
 * //       { // ProxyStatusReason
 * //         code: "STRING_VALUE", // required
 * //         target: "STRING_VALUE",
 * //         message: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * //   configurationMetadata: { // ConfigurationMetadata
 * //     configFileHash: "STRING_VALUE",
 * //     configArchiveHash: "STRING_VALUE",
 * //     configFileLastUpdatedAt: new Date("TIMESTAMP"),
 * //     configArchiveLastUpdatedAt: new Date("TIMESTAMP"),
 * //   },
 * //   createdAt: new Date("TIMESTAMP"),
 * //   customerKmsKeyArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateProxyCommandInput - {@link CreateProxyCommandInput}
 * @returns {@link CreateProxyCommandOutput}
 * @see {@link CreateProxyCommandInput} for command's `input` shape.
 * @see {@link CreateProxyCommandOutput} for command's `response` shape.
 * @see {@link ELBProxyClientResolvedConfig | config} for ELBProxyClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  The user does not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *  The request conflicts with the current state of the resource.
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  The requested operation is not permitted.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  The request would cause a service quota to be exceeded.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  The limit on the number of requests per second was exceeded.
 *
 * @throws {@link ValidationException} (client fault)
 *  The input does not satisfy the constraints specified by an AWS service.
 *
 * @throws {@link InternalServerException} (server fault)
 *  An unexpected error occurred while processing the request.
 *
 * @throws {@link ELBProxyServiceException}
 * <p>Base exception class for all service exceptions from ELBProxy service.</p>
 *
 *
 * @example To create a proxy
 * ```javascript
 * // The following example creates a proxy with the specified name, Envoy version, IAM role, and configuration file. The proxy is internet-facing over IPv4, runs in the specified subnets with the specified security group, and has deletion protection enabled.
 * const input = {
 *   attributes: [
 *     {
 *       key: "deletion_protection.enabled",
 *       value: "true"
 *     }
 *   ],
 *   configuration: {
 *     configurationFile: {
 *       configurationBytes: "c3RhdGljX3Jlc291cmNlczoge30K"
 *     }
 *   },
 *   name: "my-proxy",
 *   networkConfiguration: {
 *     ipConfiguration: {
 *       ipAddressingConfiguration: {
 *         ipv4Addressability: "internet-facing",
 *         ipv6Addressability: "off"
 *       }
 *     },
 *     vpcConfiguration: {
 *       securityGroups: [
 *         {
 *           securityGroupId: "sg-903004f8"
 *         }
 *       ],
 *       subnets: [
 *         {
 *           subnetId: "subnet-8360a9e7"
 *         },
 *         {
 *           subnetId: "subnet-b7d581c0"
 *         }
 *       ]
 *     }
 *   },
 *   proxyVersion: "1.40",
 *   roleArn: "arn:aws:iam::123456789012:role/my-proxy-role",
 *   tags: {
 *     Environment: "production"
 *   },
 *   type: "envoy"
 * };
 * const command = new CreateProxyCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   arn: "arn:aws:elasticloadbalancing:us-east-1:123456789012:proxy/my-proxy:0123456789abcdef",
 *   configurationMetadata: {
 *     configFileHash: "6b9dfd96fbb077f7e4cabcb5c1be57761b474afc18499d77b6bd49cfb03b3466",
 *     configFileLastUpdatedAt: 1795194000
 *   },
 *   createdAt: 1795194000,
 *   dnsName: "my-proxy-1234567890.elb-proxy.us-east-1.on.aws",
 *   name: "my-proxy",
 *   networkConfiguration: {
 *     ipConfiguration: {
 *       ipAddressingConfiguration: {
 *         ipv4Addressability: "internet-facing",
 *         ipv6Addressability: "off"
 *       }
 *     },
 *     vpcConfiguration: {
 *       availabilityZones: [
 *         {
 *           subnetId: "subnet-8360a9e7",
 *           zoneId: "use1-az1",
 *           zoneName: "us-east-1a"
 *         },
 *         {
 *           subnetId: "subnet-b7d581c0",
 *           zoneId: "use1-az2",
 *           zoneName: "us-east-1b"
 *         }
 *       ],
 *       securityGroups: [
 *         {
 *           securityGroupId: "sg-903004f8"
 *         }
 *       ],
 *       vpcId: "vpc-1a2b3c4d"
 *     }
 *   },
 *   proxyVersion: "1.40",
 *   roleArn: "arn:aws:iam::123456789012:role/my-proxy-role",
 *   status: {
 *     code: "create-in-progress",
 *     reasons:     []
 *   },
 *   type: "envoy"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateProxyCommand extends command<CreateProxyCommandInput, CreateProxyCommandOutput>(
  _ep0,
  _mw0,
  "CreateProxy",
  CreateProxy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateProxyRequest;
      output: CreateProxyResponse;
    };
    sdk: {
      input: CreateProxyCommandInput;
      output: CreateProxyCommandOutput;
    };
  };
}
