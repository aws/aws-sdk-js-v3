// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetResponderGatewayRequest, GetResponderGatewayResponse } from "../models/models_0";
import { RTBFabricClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RTBFabricClient";
import { GetResponderGateway } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetResponderGatewayCommand}.
 */
export interface GetResponderGatewayCommandInput extends GetResponderGatewayRequest {}
/**
 * @public
 *
 * The output of {@link GetResponderGatewayCommand}.
 */
export interface GetResponderGatewayCommandOutput extends GetResponderGatewayResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about a responder gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RTBFabricClient, GetResponderGatewayCommand } from "@aws-sdk/client-rtbfabric"; // ES Modules import
 * // const { RTBFabricClient, GetResponderGatewayCommand } = require("@aws-sdk/client-rtbfabric"); // CommonJS import
 * // import type { RTBFabricClientConfig } from "@aws-sdk/client-rtbfabric";
 * const config = {}; // type is RTBFabricClientConfig
 * const client = new RTBFabricClient(config);
 * const input = { // GetResponderGatewayRequest
 *   gatewayId: "STRING_VALUE", // required
 * };
 * const command = new GetResponderGatewayCommand(input);
 * const response = await client.send(command);
 * // { // GetResponderGatewayResponse
 * //   vpcId: "STRING_VALUE", // required
 * //   subnetIds: [ // SubnetIdList // required
 * //     "STRING_VALUE",
 * //   ],
 * //   securityGroupIds: [ // SecurityGroupIdList // required
 * //     "STRING_VALUE",
 * //   ],
 * //   status: "PENDING_CREATION" || "ACTIVE" || "PENDING_DELETION" || "DELETED" || "ERROR" || "PENDING_UPDATE" || "ISOLATED" || "PENDING_ISOLATION" || "PENDING_RESTORATION", // required
 * //   description: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   updatedAt: new Date("TIMESTAMP"),
 * //   domainName: "STRING_VALUE",
 * //   port: Number("int"), // required
 * //   protocol: "HTTP" || "HTTPS", // required
 * //   trustStoreConfiguration: { // TrustStoreConfiguration
 * //     certificateAuthorityCertificates: [ // CertificateAuthorityCertificates // required
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   managedEndpointConfiguration: { // ManagedEndpointConfiguration Union: only one key present
 * //     autoScalingGroups: { // AutoScalingGroupsConfiguration
 * //       autoScalingGroupNames: [ // AutoScalingGroupNameList // required
 * //         "STRING_VALUE",
 * //       ],
 * //       roleArn: "STRING_VALUE", // required
 * //     },
 * //     eksEndpoints: { // EksEndpointsConfiguration
 * //       endpointsResourceName: "STRING_VALUE", // required
 * //       endpointsResourceNamespace: "STRING_VALUE", // required
 * //       clusterApiServerEndpointUri: "STRING_VALUE", // required
 * //       clusterApiServerCaCertificateChain: "STRING_VALUE", // required
 * //       clusterName: "STRING_VALUE", // required
 * //       roleArn: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   gatewayId: "STRING_VALUE", // required
 * //   tags: { // TagsMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   activeLinksCount: Number("int"),
 * //   totalLinksCount: Number("int"),
 * //   inboundLinksCount: Number("int"),
 * // };
 *
 * ```
 *
 * @param GetResponderGatewayCommandInput - {@link GetResponderGatewayCommandInput}
 * @returns {@link GetResponderGatewayCommandOutput}
 * @see {@link GetResponderGatewayCommandInput} for command's `input` shape.
 * @see {@link GetResponderGatewayCommandOutput} for command's `response` shape.
 * @see {@link RTBFabricClientResolvedConfig | config} for RTBFabricClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request could not be completed because you do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request could not be completed because of an internal server error. Try your call again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request could not be completed because the resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request could not be completed because it fails satisfy the constraints specified by the service.</p>
 *
 * @throws {@link RTBFabricServiceException}
 * <p>Base exception class for all service exceptions from RTBFabric service.</p>
 *
 *
 * @example Get responder gateway details
 * ```javascript
 * // Get responder gateway
 * const input = {
 *   gatewayId: "rtb-gw-12345678"
 * };
 * const command = new GetResponderGatewayCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   activeLinksCount: 2,
 *   createdAt: "2024-01-15T10:30:00Z",
 *   description: "My responder gateway",
 *   gatewayId: "rtb-gw-12345678",
 *   inboundLinksCount: 3,
 *   port: 443,
 *   protocol: "HTTPS",
 *   securityGroupIds: [
 *     "sg-12345678"
 *   ],
 *   status: "ACTIVE",
 *   subnetIds: [
 *     "subnet-12345678",
 *     "subnet-87654321"
 *   ],
 *   totalLinksCount: 5,
 *   updatedAt: "2024-01-15T10:35:00Z",
 *   vpcId: "vpc-12345678"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetResponderGatewayCommand extends $Command
  .classBuilder<
    GetResponderGatewayCommandInput,
    GetResponderGatewayCommandOutput,
    RTBFabricClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RTBFabricClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RTBFabric", "GetResponderGateway", {})
  .n("RTBFabricClient", "GetResponderGatewayCommand")
  .sc(GetResponderGateway)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetResponderGatewayRequest;
      output: GetResponderGatewayResponse;
    };
    sdk: {
      input: GetResponderGatewayCommandInput;
      output: GetResponderGatewayCommandOutput;
    };
  };
}
