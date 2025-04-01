// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateHostKeyRequest, UpdateHostKeyResponse } from "../models/models_0";
import { de_UpdateHostKeyCommand, se_UpdateHostKeyCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateHostKeyCommand}.
 */
export interface UpdateHostKeyCommandInput extends UpdateHostKeyRequest {}
/**
 * @public
 *
 * The output of {@link UpdateHostKeyCommand}.
 */
export interface UpdateHostKeyCommandOutput extends UpdateHostKeyResponse, __MetadataBearer {}

/**
 * <p>Updates the description for the host key that's specified by the <code>ServerId</code> and
 *         <code>HostKeyId</code> parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, UpdateHostKeyCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, UpdateHostKeyCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * const client = new TransferClient(config);
 * const input = { // UpdateHostKeyRequest
 *   ServerId: "STRING_VALUE", // required
 *   HostKeyId: "STRING_VALUE", // required
 *   Description: "STRING_VALUE", // required
 * };
 * const command = new UpdateHostKeyCommand(input);
 * const response = await client.send(command);
 * // { // UpdateHostKeyResponse
 * //   ServerId: "STRING_VALUE", // required
 * //   HostKeyId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateHostKeyCommandInput - {@link UpdateHostKeyCommandInput}
 * @returns {@link UpdateHostKeyCommandOutput}
 * @see {@link UpdateHostKeyCommandInput} for command's `input` shape.
 * @see {@link UpdateHostKeyCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for TransferClient's `config` shape.
 *
 * @throws {@link InternalServiceError} (server fault)
 *  <p>This exception is thrown when an error occurs in the Transfer Family service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception is thrown when the client submits a malformed request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when a resource is not found by the Amazon Web ServicesTransfer Family
 *       service.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request has failed because the Amazon Web ServicesTransfer Family service is not available.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link TransferServiceException}
 * <p>Base exception class for all service exceptions from Transfer service.</p>
 *
 *
 * @public
 */
export class UpdateHostKeyCommand extends $Command
  .classBuilder<
    UpdateHostKeyCommandInput,
    UpdateHostKeyCommandOutput,
    TransferClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TransferClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("TransferService", "UpdateHostKey", {})
  .n("TransferClient", "UpdateHostKeyCommand")
  .f(void 0, void 0)
  .ser(se_UpdateHostKeyCommand)
  .de(de_UpdateHostKeyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateHostKeyRequest;
      output: UpdateHostKeyResponse;
    };
    sdk: {
      input: UpdateHostKeyCommandInput;
      output: UpdateHostKeyCommandOutput;
    };
  };
}
