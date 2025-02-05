// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteSshPublicKeyRequest } from "../models/models_0";
import { de_DeleteSshPublicKeyCommand, se_DeleteSshPublicKeyCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteSshPublicKeyCommand}.
 */
export interface DeleteSshPublicKeyCommandInput extends DeleteSshPublicKeyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSshPublicKeyCommand}.
 */
export interface DeleteSshPublicKeyCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a user's Secure Shell (SSH) public key.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, DeleteSshPublicKeyCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, DeleteSshPublicKeyCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new TransferClient(config);
 * const input = { // DeleteSshPublicKeyRequest
 *   ServerId: "STRING_VALUE", // required
 *   SshPublicKeyId: "STRING_VALUE", // required
 *   UserName: "STRING_VALUE", // required
 * };
 * const command = new DeleteSshPublicKeyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteSshPublicKeyCommandInput - {@link DeleteSshPublicKeyCommandInput}
 * @returns {@link DeleteSshPublicKeyCommandOutput}
 * @see {@link DeleteSshPublicKeyCommandInput} for command's `input` shape.
 * @see {@link DeleteSshPublicKeyCommandOutput} for command's `response` shape.
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
 * @public
 */
export class DeleteSshPublicKeyCommand extends $Command
  .classBuilder<
    DeleteSshPublicKeyCommandInput,
    DeleteSshPublicKeyCommandOutput,
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
  .s("TransferService", "DeleteSshPublicKey", {})
  .n("TransferClient", "DeleteSshPublicKeyCommand")
  .f(void 0, void 0)
  .ser(se_DeleteSshPublicKeyCommand)
  .de(de_DeleteSshPublicKeyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSshPublicKeyRequest;
      output: {};
    };
    sdk: {
      input: DeleteSshPublicKeyCommandInput;
      output: DeleteSshPublicKeyCommandOutput;
    };
  };
}
