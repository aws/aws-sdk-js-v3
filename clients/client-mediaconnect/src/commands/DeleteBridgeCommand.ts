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
 * <p> Deletes a bridge. Before you can delete a bridge, you must stop the bridge.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, DeleteBridgeCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, DeleteBridgeCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * // import type { MediaConnectClientConfig } from "@aws-sdk/client-mediaconnect";
 * const config = {}; // type is MediaConnectClientConfig
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
 *  <p>This exception is thrown if the request contains a semantic error. The precise meaning depends on the API, and is documented in the error message. </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The requested operation would cause a conflict with the current state of a service resource associated with the request. Resolve the conflict before retrying this request. </p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>You do not have sufficient access to perform this action. </p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>The server encountered an internal error and is unable to complete the request. </p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>One or more of the resources in the request does not exist in the system. </p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable or busy. </p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request was denied due to request throttling. </p>
 *
 * @throws {@link MediaConnectServiceException}
 * <p>Base exception class for all service exceptions from MediaConnect service.</p>
 *
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
