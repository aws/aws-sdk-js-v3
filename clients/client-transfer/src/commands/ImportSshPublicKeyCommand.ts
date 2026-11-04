// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ImportSshPublicKeyRequest, ImportSshPublicKeyResponse } from "../models/models_0";
import { ImportSshPublicKey$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Adds a Secure Shell (SSH) public key to a Transfer Family user identified by a `UserName` value assigned to the specific file transfer protocol-enabled server, identified by `ServerId`.
 *
 * The response returns the `UserName` value, the `ServerId` value, and the name of the `SshPublicKeyId`.
 *
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
 *
 * This exception is thrown when an error occurs in the Transfer Family service.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * This exception is thrown when the client submits a malformed request.
 *
 * @throws {@link ResourceExistsException} (client fault)
 *
 * The requested resource does not exist, or exists in a region other than the one specified for the command.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * This exception is thrown when a resource is not found by the Amazon Web ServicesTransfer Family service.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The request has failed because the Amazon Web ServicesTransfer Family service is not available.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link TransferServiceException}
 *
 * Base exception class for all service exceptions from Transfer service.
 *
 * @public
 */
export class ImportSshPublicKeyCommand extends command<ImportSshPublicKeyCommandInput, ImportSshPublicKeyCommandOutput>(
  _ep0,
  _mw0,
  "ImportSshPublicKey",
  ImportSshPublicKey$
) {
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
