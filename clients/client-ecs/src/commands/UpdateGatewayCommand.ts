// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateGatewayRequest, UpdateGatewayResponse } from "../models/models_0";
import { UpdateGateway$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateGatewayCommand}.
 */
export interface UpdateGatewayCommandInput extends UpdateGatewayRequest {}
/**
 * @public
 *
 * The output of {@link UpdateGatewayCommand}.
 */
export interface UpdateGatewayCommandOutput extends UpdateGatewayResponse, __MetadataBearer {}

/**
 * <p>Modifies the configuration of a gateway. You can change only the properties that can be applied without interrupting traffic, and the configuration variant that you provide must match the gateway's type. <code>UpdateGateway</code> is an asynchronous operation: the changes are applied to each load balancer the gateway manages, and the gateway reports a status of <code>UPDATE_IN_PROGRESS</code> until the update completes. If Amazon ECS can't update one or more resources, it makes a best effort to update the rest and the gateway status changes to <code>UPDATE_FAILED</code>. Use <code>DescribeGateway</code> to inspect the gateway's <code>statusReason</code> and failures list, which gives the ARN of each load balancer that was not updated and the operation, error code, and message for each failure.</p> <p>If you specify <code>infrastructureRoleArn</code>, you must have the <code>iam:PassRole</code> permission for that role.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, UpdateGatewayCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, UpdateGatewayCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * // import type { ECSClientConfig } from "@aws-sdk/client-ecs";
 * const config = {}; // type is ECSClientConfig
 * const client = new ECSClient(config);
 * const input = { // UpdateGatewayRequest
 *   gateway: "STRING_VALUE", // required
 *   infrastructureRoleArn: "STRING_VALUE",
 *   deletionProtection: true || false,
 *   configuration: { // UpdateGatewayConfiguration Union: only one key present
 *     hostSharedAlb: { // UpdateGatewayAlbConfiguration
 *       networkConfiguration: { // UpdateGatewayNetworkConfiguration
 *         inboundSecurityGroup: "STRING_VALUE",
 *       },
 *       maxAlbCount: Number("int"),
 *       webACLArn: "STRING_VALUE",
 *       accessLogs: { // GatewayElbAccessLogConfiguration
 *         destination: { // GatewayElbAccessLogDestination Union: only one key present
 *           s3: { // GatewayElbAccessLogS3Destination
 *             bucket: "STRING_VALUE", // required
 *             prefix: "STRING_VALUE",
 *           },
 *         },
 *       },
 *       httpDesync: "monitor" || "defensive" || "strictest",
 *       testTrafficRules: { // GatewayAlbTestTrafficRules
 *         header: { // GatewayTestTrafficHeader
 *           name: "STRING_VALUE", // required
 *           values: [ // StringList // required
 *             "STRING_VALUE",
 *           ],
 *         },
 *       },
 *     },
 *   },
 *   propagateTags: "NONE" || "GATEWAY",
 * };
 * const command = new UpdateGatewayCommand(input);
 * const response = await client.send(command);
 * // { // UpdateGatewayResponse
 * //   gatewayArn: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   status: "ACTIVE" || "UPDATE_IN_PROGRESS" || "UPDATE_COMPLETE" || "UPDATE_FAILED" || "DELETED",
 * // };
 *
 * ```
 *
 * @param UpdateGatewayCommandInput - {@link UpdateGatewayCommandInput}
 * @returns {@link UpdateGatewayCommandOutput}
 * @see {@link UpdateGatewayCommandInput} for command's `input` shape.
 * @see {@link UpdateGatewayCommandOutput} for command's `response` shape.
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
 * @example To update a gateway
 * ```javascript
 * // This example raises the maximum number of Application Load Balancers that the gateway named my-gateway manages, and changes the desync mitigation mode to strictest.
 * const input = {
 *   configuration: {
 *     hostSharedAlb: {
 *       httpDesync: "strictest",
 *       maxAlbCount: 20
 *     }
 *   },
 *   gateway: "my-gateway"
 * };
 * const command = new UpdateGatewayCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   gatewayArn: "arn:aws:ecs:us-east-1:123456789012:gateway/my-gateway/a1b2c3d4e5f6478890abcdef12345678",
 *   name: "my-gateway",
 *   status: "UPDATE_IN_PROGRESS"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateGatewayCommand extends command<UpdateGatewayCommandInput, UpdateGatewayCommandOutput>(
  _ep0,
  _mw0,
  "UpdateGateway",
  UpdateGateway$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateGatewayRequest;
      output: UpdateGatewayResponse;
    };
    sdk: {
      input: UpdateGatewayCommandInput;
      output: UpdateGatewayCommandOutput;
    };
  };
}
