// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateHostKeyRequest, UpdateHostKeyResponse } from "../models/models_0";
import { UpdateHostKey$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * <p>Updates the host key that's specified by the <code>ServerId</code> and <code>HostKeyId</code> parameters. You can update the description of the host key, change where the host key is stored by specifying the <code>StorageType</code>, and specify the KMS key used to encrypt the host key when it's stored in Secrets Manager.</p> <p>To change a host key's storage type from <code>SERVICE_MANAGED</code> to <code>SECRETS_MANAGER</code>, you must have the <code>transfer:ExportHostKey</code> permission. <code>transfer:ExportHostKey</code> is a permission-only action that has no corresponding API operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, UpdateHostKeyCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, UpdateHostKeyCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * // import type { TransferClientConfig } from "@aws-sdk/client-transfer";
 * const config = {}; // type is TransferClientConfig
 * const client = new TransferClient(config);
 * const input = { // UpdateHostKeyRequest
 *   ServerId: "STRING_VALUE", // required
 *   HostKeyId: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   StorageType: "SERVICE_MANAGED" || "SECRETS_MANAGER",
 *   KmsKey: "STRING_VALUE",
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
export class UpdateHostKeyCommand extends command<UpdateHostKeyCommandInput, UpdateHostKeyCommandOutput>(
  _ep0,
  _mw0,
  "UpdateHostKey",
  UpdateHostKey$
) {
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
