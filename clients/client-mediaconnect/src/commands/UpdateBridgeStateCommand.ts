// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateBridgeStateRequest, UpdateBridgeStateResponse } from "../models/models_0";
import { UpdateBridgeState$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateBridgeStateCommand}.
 */
export interface UpdateBridgeStateCommandInput extends UpdateBridgeStateRequest {}
/**
 * @public
 *
 * The output of {@link UpdateBridgeStateCommand}.
 */
export interface UpdateBridgeStateCommandOutput extends UpdateBridgeStateResponse, __MetadataBearer {}

/**
 * Updates the bridge state.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, UpdateBridgeStateCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, UpdateBridgeStateCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * // import type { MediaConnectClientConfig } from "@aws-sdk/client-mediaconnect";
 * const config = {}; // type is MediaConnectClientConfig
 * const client = new MediaConnectClient(config);
 * const input = { // UpdateBridgeStateRequest
 *   BridgeArn: "STRING_VALUE", // required
 *   DesiredState: "ACTIVE" || "STANDBY" || "DELETED", // required
 * };
 * const command = new UpdateBridgeStateCommand(input);
 * const response = await client.send(command);
 * // { // UpdateBridgeStateResponse
 * //   BridgeArn: "STRING_VALUE",
 * //   DesiredState: "ACTIVE" || "STANDBY" || "DELETED",
 * // };
 *
 * ```
 *
 * @param UpdateBridgeStateCommandInput - {@link UpdateBridgeStateCommandInput}
 * @returns {@link UpdateBridgeStateCommandOutput}
 * @see {@link UpdateBridgeStateCommandInput} for command's `input` shape.
 * @see {@link UpdateBridgeStateCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for MediaConnectClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * This exception is thrown if the request contains a semantic error. The precise meaning depends on the API, and is documented in the error message.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The requested operation would cause a conflict with the current state of a service resource associated with the request. Resolve the conflict before retrying this request.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *
 * The server encountered an internal error and is unable to complete the request.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * One or more of the resources in the request does not exist in the system.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is currently unavailable or busy.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link MediaConnectServiceException}
 *
 * Base exception class for all service exceptions from MediaConnect service.
 *
 * @public
 */
export class UpdateBridgeStateCommand extends command<UpdateBridgeStateCommandInput, UpdateBridgeStateCommandOutput>(
  _ep0,
  _mw0,
  "UpdateBridgeState",
  UpdateBridgeState$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateBridgeStateRequest;
      output: UpdateBridgeStateResponse;
    };
    sdk: {
      input: UpdateBridgeStateCommandInput;
      output: UpdateBridgeStateCommandOutput;
    };
  };
}
