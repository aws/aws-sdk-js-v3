// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ImportHostKeyRequest, ImportHostKeyResponse } from "../models/models_0";
import { ImportHostKey$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ImportHostKeyCommand}.
 */
export interface ImportHostKeyCommandInput extends ImportHostKeyRequest {}
/**
 * @public
 *
 * The output of {@link ImportHostKeyCommand}.
 */
export interface ImportHostKeyCommandOutput extends ImportHostKeyResponse, __MetadataBearer {}

/**
 * Adds a host key to the server that's specified by the `ServerId` parameter.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, ImportHostKeyCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, ImportHostKeyCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * // import type { TransferClientConfig } from "@aws-sdk/client-transfer";
 * const config = {}; // type is TransferClientConfig
 * const client = new TransferClient(config);
 * const input = { // ImportHostKeyRequest
 *   ServerId: "STRING_VALUE", // required
 *   HostKeyBody: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   StorageType: "SERVICE_MANAGED" || "SECRETS_MANAGER",
 *   KmsKey: "STRING_VALUE",
 * };
 * const command = new ImportHostKeyCommand(input);
 * const response = await client.send(command);
 * // { // ImportHostKeyResponse
 * //   ServerId: "STRING_VALUE", // required
 * //   HostKeyId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param ImportHostKeyCommandInput - {@link ImportHostKeyCommandInput}
 * @returns {@link ImportHostKeyCommandOutput}
 * @see {@link ImportHostKeyCommandInput} for command's `input` shape.
 * @see {@link ImportHostKeyCommandOutput} for command's `response` shape.
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
export class ImportHostKeyCommand extends command<ImportHostKeyCommandInput, ImportHostKeyCommandOutput>(
  _ep0,
  _mw0,
  "ImportHostKey",
  ImportHostKey$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ImportHostKeyRequest;
      output: ImportHostKeyResponse;
    };
    sdk: {
      input: ImportHostKeyCommandInput;
      output: ImportHostKeyCommandOutput;
    };
  };
}
