// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ImportSshPublicKeyRequest, ImportSshPublicKeyResponse } from "../models/models_0";
import { ImportSshPublicKey } from "../schemas/schemas_4_User";
import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ImportSshPublicKeyCommand}.
 */
export interface ImportSshPublicKeyCommandInput extends ImportSshPublicKeyRequest {}
/**
 * @public
 *
 * The output of {@link ImportSshPublicKeyCommand}.
 */
export interface ImportSshPublicKeyCommandOutput extends ImportSshPublicKeyResponse, __MetadataBearer {}

/**
 * <p>Adds a Secure Shell (SSH) public key to a Transfer Family user identified by a <code>UserName</code> value assigned to the specific file transfer protocol-enabled server, identified by <code>ServerId</code>.</p> <p>The response returns the <code>UserName</code> value, the <code>ServerId</code> value, and the name of the <code>SshPublicKeyId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, ImportSshPublicKeyCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, ImportSshPublicKeyCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * // import type { TransferClientConfig } from "@aws-sdk/client-transfer";
 * const config = {}; // type is TransferClientConfig
 * const client = new TransferClient(config);
 * const input = { // ImportSshPublicKeyRequest
 *   ServerId: "STRING_VALUE", // required
 *   SshPublicKeyBody: "STRING_VALUE", // required
 *   UserName: "STRING_VALUE", // required
 * };
 * const command = new ImportSshPublicKeyCommand(input);
 * const response = await client.send(command);
 * // { // ImportSshPublicKeyResponse
 * //   ServerId: "STRING_VALUE", // required
 * //   SshPublicKeyId: "STRING_VALUE", // required
 * //   UserName: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param ImportSshPublicKeyCommandInput - {@link ImportSshPublicKeyCommandInput}
 * @returns {@link ImportSshPublicKeyCommandOutput}
 * @see {@link ImportSshPublicKeyCommandInput} for command's `input` shape.
 * @see {@link ImportSshPublicKeyCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for TransferClient's `config` shape.
 *
 * @throws {@link InternalServiceError} (server fault)
 *  <p>This exception is thrown when an error occurs in the Transfer Family service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception is thrown when the client submits a malformed request.</p>
 *
 * @throws {@link ResourceExistsException} (client fault)
 *  <p>The requested resource does not exist, or exists in a region other than the one specified for the command.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when a resource is not found by the Amazon Web ServicesTransfer Family service.</p>
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
export class ImportSshPublicKeyCommand extends $Command
  .classBuilder<
    ImportSshPublicKeyCommandInput,
    ImportSshPublicKeyCommandOutput,
    TransferClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TransferClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("TransferService", "ImportSshPublicKey", {})
  .n("TransferClient", "ImportSshPublicKeyCommand")
  .sc(ImportSshPublicKey)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ImportSshPublicKeyRequest;
      output: ImportSshPublicKeyResponse;
    };
    sdk: {
      input: ImportSshPublicKeyCommandInput;
      output: ImportSshPublicKeyCommandOutput;
    };
  };
}
