// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteGatewayRequest, DeleteGatewayResponse } from "../models/models_0";
import { DeleteGateway$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteGatewayCommand}.
 */
export interface DeleteGatewayCommandInput extends DeleteGatewayRequest {}
/**
 * @public
 *
 * The output of {@link DeleteGatewayCommand}.
 */
export interface DeleteGatewayCommandOutput extends DeleteGatewayResponse, __MetadataBearer {}

/**
 * <p>Deletes a gateway. Before you can delete a gateway, deletion protection must be disabled and the gateway must not have any cluster associations that are in the <code>ACTIVE</code> or <code>DISASSOCIATING</code> state. If associations exist, the operation fails; disassociate all clusters first. <code>DeleteGateway</code> is a synchronous operation. After you delete a gateway, subsequent requests for it return a <code>GatewayNotFoundException</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, DeleteGatewayCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, DeleteGatewayCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * // import type { ECSClientConfig } from "@aws-sdk/client-ecs";
 * const config = {}; // type is ECSClientConfig
 * const client = new ECSClient(config);
 * const input = { // DeleteGatewayRequest
 *   gateway: "STRING_VALUE", // required
 * };
 * const command = new DeleteGatewayCommand(input);
 * const response = await client.send(command);
 * // { // DeleteGatewayResponse
 * //   gatewayArn: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   status: "ACTIVE" || "UPDATE_IN_PROGRESS" || "UPDATE_COMPLETE" || "UPDATE_FAILED" || "DELETED",
 * // };
 *
 * ```
 *
 * @param DeleteGatewayCommandInput - {@link DeleteGatewayCommandInput}
 * @returns {@link DeleteGatewayCommandOutput}
 * @see {@link DeleteGatewayCommandInput} for command's `input` shape.
 * @see {@link DeleteGatewayCommandOutput} for command's `response` shape.
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
 * @example To delete a gateway
 * ```javascript
 * // This example deletes the gateway named my-gateway. Deletion protection must be disabled and the gateway must not be associated with any clusters.
 * const input = {
 *   gateway: "my-gateway"
 * };
 * const command = new DeleteGatewayCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   gatewayArn: "arn:aws:ecs:us-east-1:123456789012:gateway/my-gateway/a1b2c3d4e5f6478890abcdef12345678",
 *   name: "my-gateway",
 *   status: "DELETED"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteGatewayCommand extends command<DeleteGatewayCommandInput, DeleteGatewayCommandOutput>(
  _ep0,
  _mw0,
  "DeleteGateway",
  DeleteGateway$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteGatewayRequest;
      output: DeleteGatewayResponse;
    };
    sdk: {
      input: DeleteGatewayCommandInput;
      output: DeleteGatewayCommandOutput;
    };
  };
}
