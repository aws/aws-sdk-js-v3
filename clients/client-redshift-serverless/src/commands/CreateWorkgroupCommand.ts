// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateWorkgroupRequest, CreateWorkgroupResponse } from "../models/models_0";
import {
  RedshiftServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RedshiftServerlessClient";
import { CreateWorkgroup } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateWorkgroupCommand}.
 */
export interface CreateWorkgroupCommandInput extends CreateWorkgroupRequest {}
/**
 * @public
 *
 * The output of {@link CreateWorkgroupCommand}.
 */
export interface CreateWorkgroupCommandOutput extends CreateWorkgroupResponse, __MetadataBearer {}

/**
 * <p>Creates an workgroup in Amazon Redshift Serverless.</p> <p>VPC Block Public Access (BPA) enables you to block resources in VPCs and subnets that you own in a Region from reaching or being reached from the internet through internet gateways and egress-only internet gateways. If a workgroup is in an account with VPC BPA turned on, the following capabilities are blocked: </p> <ul> <li> <p>Creating a public access workgroup</p> </li> <li> <p>Modifying a private workgroup to public</p> </li> <li> <p>Adding a subnet with VPC BPA turned on to the workgroup when the workgroup is public</p> </li> </ul> <p>For more information about VPC BPA, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/security-vpc-bpa.html">Block public access to VPCs and subnets</a> in the <i>Amazon VPC User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftServerlessClient, CreateWorkgroupCommand } from "@aws-sdk/client-redshift-serverless"; // ES Modules import
 * // const { RedshiftServerlessClient, CreateWorkgroupCommand } = require("@aws-sdk/client-redshift-serverless"); // CommonJS import
 * // import type { RedshiftServerlessClientConfig } from "@aws-sdk/client-redshift-serverless";
 * const config = {}; // type is RedshiftServerlessClientConfig
 * const client = new RedshiftServerlessClient(config);
 * const input = { // CreateWorkgroupRequest
 *   workgroupName: "STRING_VALUE", // required
 *   namespaceName: "STRING_VALUE", // required
 *   baseCapacity: Number("int"),
 *   enhancedVpcRouting: true || false,
 *   configParameters: [ // ConfigParameterList
 *     { // ConfigParameter
 *       parameterKey: "STRING_VALUE",
 *       parameterValue: "STRING_VALUE",
 *     },
 *   ],
 *   securityGroupIds: [ // SecurityGroupIdList
 *     "STRING_VALUE",
 *   ],
 *   subnetIds: [ // SubnetIdList
 *     "STRING_VALUE",
 *   ],
 *   publiclyAccessible: true || false,
 *   tags: [ // TagList
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 *   port: Number("int"),
 *   maxCapacity: Number("int"),
 *   pricePerformanceTarget: { // PerformanceTarget
 *     status: "STRING_VALUE",
 *     level: Number("int"),
 *   },
 *   ipAddressType: "STRING_VALUE",
 *   trackName: "STRING_VALUE",
 * };
 * const command = new CreateWorkgroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateWorkgroupResponse
 * //   workgroup: { // Workgroup
 * //     workgroupId: "STRING_VALUE",
 * //     workgroupArn: "STRING_VALUE",
 * //     workgroupName: "STRING_VALUE",
 * //     namespaceName: "STRING_VALUE",
 * //     baseCapacity: Number("int"),
 * //     enhancedVpcRouting: true || false,
 * //     configParameters: [ // ConfigParameterList
 * //       { // ConfigParameter
 * //         parameterKey: "STRING_VALUE",
 * //         parameterValue: "STRING_VALUE",
 * //       },
 * //     ],
 * //     securityGroupIds: [ // SecurityGroupIdList
 * //       "STRING_VALUE",
 * //     ],
 * //     subnetIds: [ // SubnetIdList
 * //       "STRING_VALUE",
 * //     ],
 * //     status: "STRING_VALUE",
 * //     endpoint: { // Endpoint
 * //       address: "STRING_VALUE",
 * //       port: Number("int"),
 * //       vpcEndpoints: [ // VpcEndpointList
 * //         { // VpcEndpoint
 * //           vpcEndpointId: "STRING_VALUE",
 * //           vpcId: "STRING_VALUE",
 * //           networkInterfaces: [ // NetworkInterfaceList
 * //             { // NetworkInterface
 * //               networkInterfaceId: "STRING_VALUE",
 * //               subnetId: "STRING_VALUE",
 * //               privateIpAddress: "STRING_VALUE",
 * //               availabilityZone: "STRING_VALUE",
 * //               ipv6Address: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //     publiclyAccessible: true || false,
 * //     creationDate: new Date("TIMESTAMP"),
 * //     port: Number("int"),
 * //     customDomainName: "STRING_VALUE",
 * //     customDomainCertificateArn: "STRING_VALUE",
 * //     customDomainCertificateExpiryTime: new Date("TIMESTAMP"),
 * //     workgroupVersion: "STRING_VALUE",
 * //     patchVersion: "STRING_VALUE",
 * //     maxCapacity: Number("int"),
 * //     crossAccountVpcs: [ // VpcIds
 * //       "STRING_VALUE",
 * //     ],
 * //     ipAddressType: "STRING_VALUE",
 * //     pricePerformanceTarget: { // PerformanceTarget
 * //       status: "STRING_VALUE",
 * //       level: Number("int"),
 * //     },
 * //     trackName: "STRING_VALUE",
 * //     pendingTrackName: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateWorkgroupCommandInput - {@link CreateWorkgroupCommandInput}
 * @returns {@link CreateWorkgroupCommandOutput}
 * @see {@link CreateWorkgroupCommandInput} for command's `input` shape.
 * @see {@link CreateWorkgroupCommandOutput} for command's `response` shape.
 * @see {@link RedshiftServerlessClientResolvedConfig | config} for RedshiftServerlessClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The submitted action has conflicts.</p>
 *
 * @throws {@link InsufficientCapacityException} (client fault)
 *  <p>There is an insufficient capacity to perform the action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link Ipv6CidrBlockNotFoundException} (client fault)
 *  <p>There are no subnets in your VPC with associated IPv6 CIDR blocks. To use dual-stack mode, associate an IPv6 CIDR block with each subnet in your VPC.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link TooManyTagsException} (client fault)
 *  <p>The request exceeded the number of tags allowed for a resource.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link RedshiftServerlessServiceException}
 * <p>Base exception class for all service exceptions from RedshiftServerless service.</p>
 *
 *
 * @public
 */
export class CreateWorkgroupCommand extends $Command
  .classBuilder<
    CreateWorkgroupCommandInput,
    CreateWorkgroupCommandOutput,
    RedshiftServerlessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftServerlessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RedshiftServerless", "CreateWorkgroup", {})
  .n("RedshiftServerlessClient", "CreateWorkgroupCommand")
  .sc(CreateWorkgroup)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateWorkgroupRequest;
      output: CreateWorkgroupResponse;
    };
    sdk: {
      input: CreateWorkgroupCommandInput;
      output: CreateWorkgroupCommandOutput;
    };
  };
}
