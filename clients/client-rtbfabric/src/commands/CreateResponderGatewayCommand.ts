// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateResponderGatewayRequest, CreateResponderGatewayResponse } from "../models/models_0";
import { CreateResponderGateway$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates a responder gateway.
 *
 * > **Important:** A domain name or managed endpoint is required.
 *
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
 *   description: "STRING_VALUE",
 *   tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   gatewayType: "EXTERNAL" || "INTERNAL",
 *   clientRoutingPolicy: "AVAILABILITY_ZONE_AFFINITY" || "ANY_AVAILABILITY_ZONE",
 * };
 * const command = new CreateResponderGatewayCommand(input);
 * const response = await client.send(command);
 * // { // CreateResponderGatewayResponse
 * //   gatewayId: "STRING_VALUE", // required
 * //   status: "PENDING_CREATION" || "ACTIVE" || "PENDING_DELETION" || "DELETED" || "ERROR" || "PENDING_UPDATE" || "ISOLATED" || "PENDING_ISOLATION" || "PENDING_RESTORATION", // required
 * //   listenerConfig: { // ListenerConfig
 * //     protocols: [ // ProtocolList // required
 * //       "HTTP" || "HTTPS",
 * //     ],
 * //   },
 * //   externalInboundEndpoint: "STRING_VALUE",
 * //   clientRoutingPolicy: "AVAILABILITY_ZONE_AFFINITY" || "ANY_AVAILABILITY_ZONE",
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
 *
 * The request could not be completed because you do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request could not be completed because of an internal server error. Try your call again.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request could not be completed because the resource does not exist.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request could not be completed because you exceeded a service quota.
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
export class CreateResponderGatewayCommand extends command<CreateResponderGatewayCommandInput, CreateResponderGatewayCommandOutput>(
  _ep0,
  _mw0,
  "CreateResponderGateway",
  CreateResponderGateway$
) {
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
