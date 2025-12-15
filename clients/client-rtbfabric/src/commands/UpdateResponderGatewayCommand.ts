// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateResponderGatewayRequest, UpdateResponderGatewayResponse } from "../models/models_0";
import type { RTBFabricClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RTBFabricClient";
import { UpdateResponderGateway$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateResponderGatewayCommand}.
 */
export interface UpdateResponderGatewayCommandInput extends UpdateResponderGatewayRequest {}
/**
 * @public
 *
 * The output of {@link UpdateResponderGatewayCommand}.
 */
export interface UpdateResponderGatewayCommandOutput extends UpdateResponderGatewayResponse, __MetadataBearer {}

/**
 * <p>Updates a responder gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RTBFabricClient, UpdateResponderGatewayCommand } from "@aws-sdk/client-rtbfabric"; // ES Modules import
 * // const { RTBFabricClient, UpdateResponderGatewayCommand } = require("@aws-sdk/client-rtbfabric"); // CommonJS import
 * // import type { RTBFabricClientConfig } from "@aws-sdk/client-rtbfabric";
 * const config = {}; // type is RTBFabricClientConfig
 * const client = new RTBFabricClient(config);
 * const input = { // UpdateResponderGatewayRequest
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
 *   gatewayId: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 * };
 * const command = new UpdateResponderGatewayCommand(input);
 * const response = await client.send(command);
 * // { // UpdateResponderGatewayResponse
 * //   gatewayId: "STRING_VALUE", // required
 * //   status: "PENDING_CREATION" || "ACTIVE" || "PENDING_DELETION" || "DELETED" || "ERROR" || "PENDING_UPDATE" || "ISOLATED" || "PENDING_ISOLATION" || "PENDING_RESTORATION", // required
 * // };
 *
 * ```
 *
 * @param UpdateResponderGatewayCommandInput - {@link UpdateResponderGatewayCommandInput}
 * @returns {@link UpdateResponderGatewayCommandOutput}
 * @see {@link UpdateResponderGatewayCommandInput} for command's `input` shape.
 * @see {@link UpdateResponderGatewayCommandOutput} for command's `response` shape.
 * @see {@link RTBFabricClientResolvedConfig | config} for RTBFabricClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request could not be completed because you do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed because of a conflict in the current state of the resource.</p>
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
 * @example Update responder gateway
 * ```javascript
 * // Update responder gateway
 * const input = {
 *   clientToken: "12345678-1234-1234-1234-123456789012",
 *   description: "Updated responder gateway description",
 *   gatewayId: "rtb-gw-12345678",
 *   port: 8080,
 *   protocol: "HTTP"
 * };
 * const command = new UpdateResponderGatewayCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   gatewayId: "rtb-gw-12345678",
 *   status: "PENDING_UPDATE"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateResponderGatewayCommand extends $Command
  .classBuilder<
    UpdateResponderGatewayCommandInput,
    UpdateResponderGatewayCommandOutput,
    RTBFabricClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RTBFabricClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RTBFabric", "UpdateResponderGateway", {})
  .n("RTBFabricClient", "UpdateResponderGatewayCommand")
  .sc(UpdateResponderGateway$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateResponderGatewayRequest;
      output: UpdateResponderGatewayResponse;
    };
    sdk: {
      input: UpdateResponderGatewayCommandInput;
      output: UpdateResponderGatewayCommandOutput;
    };
  };
}
