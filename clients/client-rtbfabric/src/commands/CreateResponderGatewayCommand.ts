// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateResponderGatewayRequest,
  CreateResponderGatewayRequestFilterSensitiveLog,
  CreateResponderGatewayResponse,
} from "../models/models_0";
import { de_CreateResponderGatewayCommand, se_CreateResponderGatewayCommand } from "../protocols/Aws_restJson1";
import { RTBFabricClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RTBFabricClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateResponderGatewayCommand}.
 */
export interface CreateResponderGatewayCommandInput extends CreateResponderGatewayRequest {}
/**
 * @public
 *
 * The output of {@link CreateResponderGatewayCommand}.
 */
export interface CreateResponderGatewayCommandOutput extends CreateResponderGatewayResponse, __MetadataBearer {}

/**
 * <p>Creates a responder gateway.</p> <important> <p>A domain name or managed endpoint is required.</p> </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RTBFabricClient, CreateResponderGatewayCommand } from "@aws-sdk/client-rtbfabric"; // ES Modules import
 * // const { RTBFabricClient, CreateResponderGatewayCommand } = require("@aws-sdk/client-rtbfabric"); // CommonJS import
 * // import type { RTBFabricClientConfig } from "@aws-sdk/client-rtbfabric";
 * const config = {}; // type is RTBFabricClientConfig
 * const client = new RTBFabricClient(config);
 * const input = { // CreateResponderGatewayRequest
 *   vpcId: "STRING_VALUE", // required
 *   subnetIds: [ // SubnetIdList // required
 *     "STRING_VALUE",
 *   ],
 *   securityGroupIds: [ // SecurityGroupIdList // required
 *     "STRING_VALUE",
 *   ],
 *   domainName: "STRING_VALUE",
 *   port: Number("int"), // required
 *   protocol: "HTTP" || "HTTPS", // required
 *   trustStoreConfiguration: { // TrustStoreConfiguration
 *     certificateAuthorityCertificates: [ // CertificateAuthorityCertificates // required
 *       "STRING_VALUE",
 *     ],
 *   },
 *   managedEndpointConfiguration: { // ManagedEndpointConfiguration Union: only one key present
 *     autoScalingGroups: { // AutoScalingGroupsConfiguration
 *       autoScalingGroupNames: [ // AutoScalingGroupNameList // required
 *         "STRING_VALUE",
 *       ],
 *       roleArn: "STRING_VALUE", // required
 *     },
 *     eksEndpoints: { // EksEndpointsConfiguration
 *       endpointsResourceName: "STRING_VALUE", // required
 *       endpointsResourceNamespace: "STRING_VALUE", // required
 *       clusterApiServerEndpointUri: "STRING_VALUE", // required
 *       clusterApiServerCaCertificateChain: "STRING_VALUE", // required
 *       clusterName: "STRING_VALUE", // required
 *       roleArn: "STRING_VALUE", // required
 *     },
 *   },
 *   clientToken: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateResponderGatewayCommand(input);
 * const response = await client.send(command);
 * // { // CreateResponderGatewayResponse
 * //   gatewayId: "STRING_VALUE", // required
 * //   status: "PENDING_CREATION" || "ACTIVE" || "PENDING_DELETION" || "DELETED" || "ERROR" || "PENDING_UPDATE" || "ISOLATED" || "PENDING_ISOLATION" || "PENDING_RESTORATION", // required
 * // };
 *
 * ```
 *
 * @param CreateResponderGatewayCommandInput - {@link CreateResponderGatewayCommandInput}
 * @returns {@link CreateResponderGatewayCommandOutput}
 * @see {@link CreateResponderGatewayCommandInput} for command's `input` shape.
 * @see {@link CreateResponderGatewayCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request could not be completed because you exceeded a service quota.</p>
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
 * @example Create a responder gateway
 * ```javascript
 * // Create responder gateway
 * const input = {
 *   clientToken: "12345678-1234-1234-1234-123456789012",
 *   description: "My responder gateway",
 *   port: 443,
 *   protocol: "HTTPS",
 *   securityGroupIds: [
 *     "sg-12345678"
 *   ],
 *   subnetIds: [
 *     "subnet-12345678",
 *     "subnet-87654321"
 *   ],
 *   vpcId: "vpc-12345678"
 * };
 * const command = new CreateResponderGatewayCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   gatewayId: "rtb-gw-12345678",
 *   status: "ACTIVE"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateResponderGatewayCommand extends $Command
  .classBuilder<
    CreateResponderGatewayCommandInput,
    CreateResponderGatewayCommandOutput,
    RTBFabricClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RTBFabricClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RTBFabric", "CreateResponderGateway", {})
  .n("RTBFabricClient", "CreateResponderGatewayCommand")
  .f(CreateResponderGatewayRequestFilterSensitiveLog, void 0)
  .ser(se_CreateResponderGatewayCommand)
  .de(de_CreateResponderGatewayCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateResponderGatewayRequest;
      output: CreateResponderGatewayResponse;
    };
    sdk: {
      input: CreateResponderGatewayCommandInput;
      output: CreateResponderGatewayCommandOutput;
    };
  };
}
