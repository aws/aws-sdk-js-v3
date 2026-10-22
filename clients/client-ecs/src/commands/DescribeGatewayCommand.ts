// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeGatewayRequest, DescribeGatewayResponse } from "../models/models_0";
import { DescribeGateway$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeGatewayCommand}.
 */
export interface DescribeGatewayCommandInput extends DescribeGatewayRequest {}
/**
 * @public
 *
 * The output of {@link DescribeGatewayCommand}.
 */
export interface DescribeGatewayCommandOutput extends DescribeGatewayResponse, __MetadataBearer {}

/**
 * <p>Describes a gateway, including its configuration, status, and the type-specific infrastructure settings that it uses.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, DescribeGatewayCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, DescribeGatewayCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * // import type { ECSClientConfig } from "@aws-sdk/client-ecs";
 * const config = {}; // type is ECSClientConfig
 * const client = new ECSClient(config);
 * const input = { // DescribeGatewayRequest
 *   gateway: "STRING_VALUE", // required
 * };
 * const command = new DescribeGatewayCommand(input);
 * const response = await client.send(command);
 * // { // DescribeGatewayResponse
 * //   gateway: { // Gateway
 * //     gatewayArn: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     status: "ACTIVE" || "UPDATE_IN_PROGRESS" || "UPDATE_COMPLETE" || "UPDATE_FAILED" || "DELETED",
 * //     statusReason: "STRING_VALUE",
 * //     failures: [ // GatewayResourceFailureList
 * //       { // GatewayResourceFailure
 * //         arn: "STRING_VALUE",
 * //         errors: [ // GatewayOperationErrorList
 * //           { // GatewayOperationError
 * //             operation: "STRING_VALUE",
 * //             code: "STRING_VALUE",
 * //             message: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //     infrastructureRoleArn: "STRING_VALUE",
 * //     deletionProtection: true || false,
 * //     configuration: { // DescribeGatewayConfiguration Union: only one key present
 * //       hostSharedAlb: { // DescribeGatewayAlbConfiguration
 * //         networkConfiguration: { // GatewayElbNetworkConfiguration
 * //           inboundSecurityGroup: "STRING_VALUE",
 * //           subnets: [ // StringList
 * //             "STRING_VALUE",
 * //           ],
 * //           ipAddressType: "ipv4" || "dualstack" || "dualstack-without-public-ipv4",
 * //         },
 * //         scheme: "internet-facing" || "internal",
 * //         accessLogs: { // GatewayElbAccessLogConfiguration
 * //           destination: { // GatewayElbAccessLogDestination Union: only one key present
 * //             s3: { // GatewayElbAccessLogS3Destination
 * //               bucket: "STRING_VALUE", // required
 * //               prefix: "STRING_VALUE",
 * //             },
 * //           },
 * //         },
 * //         webACLArn: "STRING_VALUE",
 * //         port: Number("int"),
 * //         protocol: "HTTP" || "HTTPS",
 * //         maxAlbCount: Number("int"),
 * //         currentAlbCount: Number("int"),
 * //         httpDesync: "monitor" || "defensive" || "strictest",
 * //         testTrafficRules: { // GatewayAlbTestTrafficRules
 * //           header: { // GatewayTestTrafficHeader
 * //             name: "STRING_VALUE", // required
 * //             values: [ // required
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         },
 * //       },
 * //     },
 * //     accessType: "PUBLIC" || "PRIVATE",
 * //     propagateTags: "NONE" || "GATEWAY",
 * //     tags: [ // Tags
 * //       { // Tag
 * //         key: "STRING_VALUE",
 * //         value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     createdAt: new Date("TIMESTAMP"),
 * //     updatedAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeGatewayCommandInput - {@link DescribeGatewayCommandInput}
 * @returns {@link DescribeGatewayCommandOutput}
 * @see {@link DescribeGatewayCommandInput} for command's `input` shape.
 * @see {@link DescribeGatewayCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have authorization to perform the requested action.</p>
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. This client action might be using an action or resource on behalf of a user that doesn't have permissions to use the action or resource. Or, it might be specifying an identifier that isn't valid.</p>
 *
 * @throws {@link GatewayNotFoundException} (client fault)
 *  <p>The specified gateway wasn't found. Check that the gateway name or ARN is correct and that the gateway exists in your account and Region.</p>
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
 * @example To describe a gateway
 * ```javascript
 * // This example describes the gateway named my-gateway.
 * const input = {
 *   gateway: "my-gateway"
 * };
 * const command = new DescribeGatewayCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   gateway: {
 *     accessType: "PUBLIC",
 *     configuration: {
 *       hostSharedAlb: {
 *         currentAlbCount: 1,
 *         httpDesync: "defensive",
 *         maxAlbCount: 10,
 *         networkConfiguration: {
 *           ipAddressType: "ipv4",
 *           subnets: [
 *             "subnet-0123456789abcdef0",
 *             "subnet-0fedcba9876543210"
 *           ]
 *         },
 *         port: 443,
 *         protocol: "HTTPS",
 *         scheme: "internet-facing"
 *       }
 *     },
 *     createdAt: "2026-10-20T12:00:00.000Z",
 *     deletionProtection: true,
 *     gatewayArn: "arn:aws:ecs:us-east-1:123456789012:gateway/my-gateway/a1b2c3d4e5f6478890abcdef12345678",
 *     infrastructureRoleArn: "arn:aws:iam::123456789012:role/ecsInfrastructureRole",
 *     name: "my-gateway",
 *     propagateTags: "GATEWAY",
 *     status: "ACTIVE",
 *     tags: [
 *       {
 *         key: "team",
 *         value: "web"
 *       }
 *     ],
 *     updatedAt: "2026-10-20T12:00:00.000Z"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeGatewayCommand extends command<DescribeGatewayCommandInput, DescribeGatewayCommandOutput>(
  _ep0,
  _mw0,
  "DescribeGateway",
  DescribeGateway$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeGatewayRequest;
      output: DescribeGatewayResponse;
    };
    sdk: {
      input: DescribeGatewayCommandInput;
      output: DescribeGatewayCommandOutput;
    };
  };
}
