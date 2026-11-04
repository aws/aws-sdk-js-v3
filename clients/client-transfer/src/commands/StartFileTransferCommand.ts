// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartFileTransferRequest, StartFileTransferResponse } from "../models/models_0";
import { StartFileTransfer$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartFileTransferCommand}.
 */
export interface StartFileTransferCommandInput extends StartFileTransferRequest {}
/**
 * @public
 *
 * The output of {@link StartFileTransferCommand}.
 */
export interface StartFileTransferCommandOutput extends StartFileTransferResponse, __MetadataBearer {}

/**
 * Begins a file transfer between local Amazon Web Services storage and a remote AS2 or SFTP server.
 *
 * - For an AS2 connector, you specify the `ConnectorId` and one or more `SendFilePaths` to identify the files you want to transfer.
 * - For an SFTP connector, the file transfer can be either outbound or inbound. In both cases, you specify the `ConnectorId`. Depending on the direction of the transfer, you also specify the following items:
 *
 *   - If you are transferring file from a partner's SFTP server to Amazon Web Services storage, you specify one or more `RetrieveFilePaths` to identify the files you want to transfer, and a `LocalDirectoryPath` to specify the destination folder.
 *   - If you are transferring file to a partner's SFTP server from Amazon Web Services storage, you specify one or more `SendFilePaths` to identify the files you want to transfer, and a `RemoteDirectoryPath` to specify the destination folder.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, StartFileTransferCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, StartFileTransferCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * // import type { TransferClientConfig } from "@aws-sdk/client-transfer";
 * const config = {}; // type is TransferClientConfig
 * const client = new TransferClient(config);
 * const input = { // StartFileTransferRequest
 *   ConnectorId: "STRING_VALUE", // required
 *   SendFilePaths: [ // FilePaths
 *     "STRING_VALUE",
 *   ],
 *   RetrieveFilePaths: [
 *     "STRING_VALUE",
 *   ],
 *   LocalDirectoryPath: "STRING_VALUE",
 *   RemoteDirectoryPath: "STRING_VALUE",
 *   CustomHttpHeaders: [ // CustomHttpHeaders
 *     { // CustomHttpHeader
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new StartFileTransferCommand(input);
 * const response = await client.send(command);
 * // { // StartFileTransferResponse
 * //   TransferId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param StartFileTransferCommandInput - {@link StartFileTransferCommandInput}
 * @returns {@link StartFileTransferCommandOutput}
 * @see {@link StartFileTransferCommandInput} for command's `input` shape.
 * @see {@link StartFileTransferCommandOutput} for command's `response` shape.
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
export class StartFileTransferCommand extends command<StartFileTransferCommandInput, StartFileTransferCommandOutput>(
  _ep0,
  _mw0,
  "StartFileTransfer",
  StartFileTransfer$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartFileTransferRequest;
      output: StartFileTransferResponse;
    };
    sdk: {
      input: StartFileTransferCommandInput;
      output: StartFileTransferCommandOutput;
    };
  };
}
