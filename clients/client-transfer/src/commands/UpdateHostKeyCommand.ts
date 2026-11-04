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
 * Updates the host key that's specified by the `ServerId` and `HostKeyId` parameters. You can update the description of the host key, change where the host key is stored by specifying the `StorageType`, and specify the KMS key used to encrypt the host key when it's stored in Secrets Manager.
 *
 * To change a host key's storage type from `SERVICE_MANAGED` to `SECRETS_MANAGER`, you must have the `transfer:ExportHostKey` permission. `transfer:ExportHostKey` is a permission-only action that has no corresponding API operation.
 *
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
