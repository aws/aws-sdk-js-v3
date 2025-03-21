// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import { UpdateBridgeStateRequest, UpdateBridgeStateResponse } from "../models/models_0";
import { de_UpdateBridgeStateCommand, se_UpdateBridgeStateCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p> Updates the bridge state. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, UpdateBridgeStateCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, UpdateBridgeStateCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
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
 *  <p>This exception is thrown if the request contains a semantic error. The precise meaning depends on the API, and is documented in the error message.
 * </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The requested operation would cause a conflict with the current state of a service resource associated with the request. Resolve the conflict before retrying this request.
 * </p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>You do not have sufficient access to perform this action.
 * </p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>The server encountered an internal error and is unable to complete the request.
 * </p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>One or more of the resources in the request does not exist in the system.
 * </p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable or busy.
 * </p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request was denied due to request throttling.
 * </p>
 *
 * @throws {@link MediaConnectServiceException}
 * <p>Base exception class for all service exceptions from MediaConnect service.</p>
 *
 * @public
 */
export class UpdateBridgeStateCommand extends $Command
  .classBuilder<
    UpdateBridgeStateCommandInput,
    UpdateBridgeStateCommandOutput,
    MediaConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MediaConnect", "UpdateBridgeState", {})
  .n("MediaConnectClient", "UpdateBridgeStateCommand")
  .f(void 0, void 0)
  .ser(se_UpdateBridgeStateCommand)
  .de(de_UpdateBridgeStateCommand)
  .build() {
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
