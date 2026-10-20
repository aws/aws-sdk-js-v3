// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateGatewayRequest, CreateGatewayResponse } from "../models/models_0";
import { CreateGateway$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateGatewayCommand}.
 */
export interface CreateGatewayCommandInput extends CreateGatewayRequest {}
/**
 * @public
 *
 * The output of {@link CreateGatewayCommand}.
 */
export interface CreateGatewayCommandOutput extends CreateGatewayResponse, __MetadataBearer {}

/**
 * <p>Creates a gateway. A gateway defines and dynamically manages ingress paths for your Amazon ECS services, handling traffic routing and infrastructure across multiple services while optimizing infrastructure usage. <code>CreateGateway</code> is a synchronous operation and the gateway is returned with a status of <code>ACTIVE</code>. The load balancers and other infrastructure that a gateway manages aren't created until a service in an associated cluster begins using the gateway.</p> <p>To use this operation, you must have the <code>iam:PassRole</code> permission for the infrastructure role that you specify in <code>infrastructureRoleArn</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, CreateGatewayCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, CreateGatewayCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * // import type { ECSClientConfig } from "@aws-sdk/client-ecs";
 * const config = {}; // type is ECSClientConfig
 * const client = new ECSClient(config);
 * const input = { // CreateGatewayRequest
 *   name: "STRING_VALUE", // required
 *   infrastructureRoleArn: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 *   deletionProtection: true || false,
 *   configuration: { // GatewayConfiguration Union: only one key present
 *     hostSharedAlb: { // HostSharedAlbConfiguration
 *       networkConfiguration: { // GatewayElbNetworkConfiguration
 *         inboundSecurityGroup: "STRING_VALUE",
 *         subnets: [ // StringList
 *           "STRING_VALUE",
 *         ],
 *         ipAddressType: "ipv4" || "dualstack" || "dualstack-without-public-ipv4",
 *       },
 *       scheme: "internet-facing" || "internal",
 *       webACLArn: "STRING_VALUE",
 *       accessLogs: { // GatewayElbAccessLogConfiguration
 *         destination: { // GatewayElbAccessLogDestination Union: only one key present
 *           s3: { // GatewayElbAccessLogS3Destination
 *             bucket: "STRING_VALUE", // required
 *             prefix: "STRING_VALUE",
 *           },
 *         },
 *       },
 *       port: Number("int"),
 *       protocol: "HTTP" || "HTTPS",
 *       maxAlbCount: Number("int"),
 *       httpDesync: "monitor" || "defensive" || "strictest",
 *       testTrafficRules: { // GatewayAlbTestTrafficRules
 *         header: { // GatewayTestTrafficHeader
 *           name: "STRING_VALUE", // required
 *           values: [ // required
 *             "STRING_VALUE",
 *           ],
 *         },
 *       },
 *     },
 *   },
 *   tags: [ // Tags
 *     { // Tag
 *       key: "STRING_VALUE",
 *       value: "STRING_VALUE",
 *     },
 *   ],
 *   propagateTags: "NONE" || "GATEWAY",
 * };
 * const command = new CreateGatewayCommand(input);
 * const response = await client.send(command);
 * // { // CreateGatewayResponse
 * //   gatewayArn: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   status: "ACTIVE" || "UPDATE_IN_PROGRESS" || "UPDATE_COMPLETE" || "UPDATE_FAILED" || "DELETED",
 * // };
 *
 * ```
 *
 * @param CreateGatewayCommandInput - {@link CreateGatewayCommandInput}
 * @returns {@link CreateGatewayCommandOutput}
 * @see {@link CreateGatewayCommandInput} for command's `input` shape.
 * @see {@link CreateGatewayCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have authorization to perform the requested action.</p>
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. This client action might be using an action or resource on behalf of a user that doesn't have permissions to use the action or resource. Or, it might be specifying an identifier that isn't valid.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter isn't valid. Review the available parameters for the API request.</p> <p>For more information about service event errors, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-event-messages-list.html">Amazon ECS service event messages</a>. </p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
 *
 * @throws {@link UnsupportedFeatureException} (client fault)
 *  <p>The specified task isn't supported in this Region.</p>
 *
 * @throws {@link ECSServiceException}
 * <p>Base exception class for all service exceptions from ECS service.</p>
 *
 *
 * @example To create a gateway
 * ```javascript
 * // This example creates a gateway named my-gateway that uses internet-facing Application Load Balancers with host-based routing in the specified subnets.
 * const input = {
 *   configuration: {
 *     hostSharedAlb: {
 *       httpDesync: "defensive",
 *       maxAlbCount: 10,
 *       networkConfiguration: {
 *         ipAddressType: "ipv4",
 *         subnets: [
 *           "subnet-0123456789abcdef0",
 *           "subnet-0fedcba9876543210"
 *         ]
 *       },
 *       port: 443,
 *       protocol: "HTTPS",
 *       scheme: "internet-facing"
 *     }
 *   },
 *   infrastructureRoleArn: "arn:aws:iam::123456789012:role/ecsInfrastructureRole",
 *   name: "my-gateway",
 *   propagateTags: "GATEWAY",
 *   tags: [
 *     {
 *       key: "team",
 *       value: "web"
 *     }
 *   ]
 * };
 * const command = new CreateGatewayCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   gatewayArn: "arn:aws:ecs:us-east-1:123456789012:gateway/my-gateway/a1b2c3d4e5f6478890abcdef12345678",
 *   name: "my-gateway",
 *   status: "ACTIVE"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateGatewayCommand extends command<CreateGatewayCommandInput, CreateGatewayCommandOutput>(
  _ep0,
  _mw0,
  "CreateGateway",
  CreateGateway$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateGatewayRequest;
      output: CreateGatewayResponse;
    };
    sdk: {
      input: CreateGatewayCommandInput;
      output: CreateGatewayCommandOutput;
    };
  };
}
