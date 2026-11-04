// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateResponderGatewayRequest, UpdateResponderGatewayResponse } from "../models/models_0";
import { UpdateResponderGateway$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Updates the description, Auto Scaling group managed endpoint configuration, trust store configuration, and client routing policy of a responder gateway. This operation also updates the `protocols` list in the listener configuration.
 *
 * You cannot change the `domainName`, `port`, and `protocol` values that you set when you create a responder gateway. To change any of them, delete the gateway and create a new one.
 *
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
 *   listenerConfig: { // ListenerConfig
 *     protocols: [ // ProtocolList // required
 *       "HTTP" || "HTTPS",
 *     ],
 *   },
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
 *       healthCheckConfig: { // HealthCheckConfig
 *         port: Number("int"), // required
 *         path: "STRING_VALUE", // required
 *         protocol: "HTTP" || "HTTPS",
 *         timeoutMs: Number("int"),
 *         intervalSeconds: Number("int"),
 *         statusCodeMatcher: "STRING_VALUE",
 *         healthyThresholdCount: Number("int"),
 *         unhealthyThresholdCount: Number("int"),
 *       },
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
 *   clientRoutingPolicy: "AVAILABILITY_ZONE_AFFINITY" || "ANY_AVAILABILITY_ZONE",
 * };
 * const command = new UpdateResponderGatewayCommand(input);
 * const response = await client.send(command);
 * // { // UpdateResponderGatewayResponse
 * //   gatewayId: "STRING_VALUE", // required
 * //   status: "PENDING_CREATION" || "ACTIVE" || "PENDING_DELETION" || "DELETED" || "ERROR" || "PENDING_UPDATE" || "ISOLATED" || "PENDING_ISOLATION" || "PENDING_RESTORATION", // required
 * //   clientRoutingPolicy: "AVAILABILITY_ZONE_AFFINITY" || "ANY_AVAILABILITY_ZONE",
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
 *
 * The request could not be completed because you do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request could not be completed because of a conflict in the current state of the resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request could not be completed because of an internal server error. Try your call again.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request could not be completed because the resource does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request could not be completed because it fails satisfy the constraints specified by the service.
 *
 * @throws {@link RTBFabricServiceException}
 *
 * Base exception class for all service exceptions from RTBFabric service.
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
export class UpdateResponderGatewayCommand extends command<UpdateResponderGatewayCommandInput, UpdateResponderGatewayCommandOutput>(
  _ep0,
  _mw0,
  "UpdateResponderGateway",
  UpdateResponderGateway$
) {
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
