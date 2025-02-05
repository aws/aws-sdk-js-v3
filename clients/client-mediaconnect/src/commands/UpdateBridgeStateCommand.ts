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
 * Updates the bridge state
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, UpdateBridgeStateCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, UpdateBridgeStateCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link ConflictException} (client fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link ForbiddenException} (client fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link NotFoundException} (client fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
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
