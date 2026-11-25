// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  UpdateProxyNetworkConfigurationRequest,
  UpdateProxyNetworkConfigurationResponse,
} from "../models/models_0";
import { UpdateProxyNetworkConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateProxyNetworkConfigurationCommand}.
 */
export interface UpdateProxyNetworkConfigurationCommandInput extends UpdateProxyNetworkConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateProxyNetworkConfigurationCommand}.
 */
export interface UpdateProxyNetworkConfigurationCommandOutput extends UpdateProxyNetworkConfigurationResponse, __MetadataBearer {}

/**
 * Updates the network configuration for the specified proxy.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ELBProxyClient, UpdateProxyNetworkConfigurationCommand } from "@aws-sdk/client-elb-proxy"; // ES Modules import
 * // const { ELBProxyClient, UpdateProxyNetworkConfigurationCommand } = require("@aws-sdk/client-elb-proxy"); // CommonJS import
 * // import type { ELBProxyClientConfig } from "@aws-sdk/client-elb-proxy";
 * const config = {}; // type is ELBProxyClientConfig
 * const client = new ELBProxyClient(config);
 * const input = { // UpdateProxyNetworkConfigurationRequest
 *   proxyIdentifier: "STRING_VALUE", // required
 *   vpcConfiguration: { // UpdateProxyVpcConfiguration
 *     subnets: [ // SubnetDetailsList
 *       { // SubnetDetails
 *         subnetId: "STRING_VALUE", // required
 *       },
 *     ],
 *     securityGroups: [ // SecurityGroupDetailsList
 *       { // SecurityGroupDetails
 *         securityGroupId: "STRING_VALUE", // required
 *       },
 *     ],
 *   },
 * };
 * const command = new UpdateProxyNetworkConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateProxyNetworkConfigurationResponse
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
 * @param UpdateProxyNetworkConfigurationCommandInput - {@link UpdateProxyNetworkConfigurationCommandInput}
 * @returns {@link UpdateProxyNetworkConfigurationCommandOutput}
 * @see {@link UpdateProxyNetworkConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateProxyNetworkConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ELBProxyClientResolvedConfig | config} for ELBProxyClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  The user does not have sufficient access to perform this action.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The request references a resource that does not exist.
 *
 * @throws {@link ValidationException} (client fault)
 *  The input does not satisfy the constraints specified by an AWS service.
 *
 * @throws {@link InternalServerException} (server fault)
 *  An unexpected error occurred while processing the request.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  The limit on the number of requests per second was exceeded.
 *
 * @throws {@link ELBProxyServiceException}
 * <p>Base exception class for all service exceptions from ELBProxy service.</p>
 *
 *
 * @example To update the network configuration for a proxy
 * ```javascript
 * // The following example replaces the security groups for the specified proxy. The subnets don't change.
 * const input = {
 *   proxyIdentifier: "arn:aws:elasticloadbalancing:us-east-1:123456789012:proxy/my-proxy:0123456789abcdef",
 *   vpcConfiguration: {
 *     securityGroups: [
 *       {
 *         securityGroupId: "sg-1a2b3c4d"
 *       }
 *     ]
 *   }
 * };
 * const command = new UpdateProxyNetworkConfigurationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   arn: "arn:aws:elasticloadbalancing:us-east-1:123456789012:proxy/my-proxy:0123456789abcdef",
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
 *           securityGroupId: "sg-1a2b3c4d"
 *         }
 *       ],
 *       vpcId: "vpc-1a2b3c4d"
 *     }
 *   },
 *   proxyVersion: "1.40",
 *   roleArn: "arn:aws:iam::123456789012:role/my-proxy-role",
 *   status: {
 *     code: "active",
 *     reasons:     []
 *   },
 *   type: "envoy"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateProxyNetworkConfigurationCommand extends command<UpdateProxyNetworkConfigurationCommandInput, UpdateProxyNetworkConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "UpdateProxyNetworkConfiguration",
  UpdateProxyNetworkConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateProxyNetworkConfigurationRequest;
      output: UpdateProxyNetworkConfigurationResponse;
    };
    sdk: {
      input: UpdateProxyNetworkConfigurationCommandInput;
      output: UpdateProxyNetworkConfigurationCommandOutput;
    };
  };
}
