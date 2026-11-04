// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteSshPublicKeyRequest } from "../models/models_0";
import { DeleteSshPublicKey$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Deletes a user's Secure Shell (SSH) public key.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, DeleteSshPublicKeyCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, DeleteSshPublicKeyCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * // import type { TransferClientConfig } from "@aws-sdk/client-transfer";
 * const config = {}; // type is TransferClientConfig
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
 *
 * This exception is thrown when an error occurs in the Transfer Family service.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * This exception is thrown when the client submits a malformed request.
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
export class DeleteSshPublicKeyCommand extends command<DeleteSshPublicKeyCommandInput, DeleteSshPublicKeyCommandOutput>(
  _ep0,
  _mw0,
  "DeleteSshPublicKey",
  DeleteSshPublicKey$
) {
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
