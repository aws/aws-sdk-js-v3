// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import { DeleteBridgeRequest, DeleteBridgeResponse } from "../models/models_0";
import { de_DeleteBridgeCommand, se_DeleteBridgeCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteBridgeCommand}.
 */
export interface DeleteBridgeCommandInput extends DeleteBridgeRequest {}
/**
 * @public
 *
 * The output of {@link DeleteBridgeCommand}.
 */
export interface DeleteBridgeCommandOutput extends DeleteBridgeResponse, __MetadataBearer {}

/**
 * Deletes a bridge. Before you can delete a bridge, you must stop the bridge.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, DeleteBridgeCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, DeleteBridgeCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new MediaConnectClient(config);
 * const input = { // DeleteBridgeRequest
 *   BridgeArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteBridgeCommand(input);
 * const response = await client.send(command);
 * // { // DeleteBridgeResponse
 * //   BridgeArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteBridgeCommandInput - {@link DeleteBridgeCommandInput}
 * @returns {@link DeleteBridgeCommandOutput}
 * @see {@link DeleteBridgeCommandInput} for command's `input` shape.
 * @see {@link DeleteBridgeCommandOutput} for command's `response` shape.
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
export class DeleteBridgeCommand extends $Command
  .classBuilder<
    DeleteBridgeCommandInput,
    DeleteBridgeCommandOutput,
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
  .s("MediaConnect", "DeleteBridge", {})
  .n("MediaConnectClient", "DeleteBridgeCommand")
  .f(void 0, void 0)
  .ser(se_DeleteBridgeCommand)
  .de(de_DeleteBridgeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteBridgeRequest;
      output: DeleteBridgeResponse;
    };
    sdk: {
      input: DeleteBridgeCommandInput;
      output: DeleteBridgeCommandOutput;
    };
  };
}
