// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { StartFileTransferRequest, StartFileTransferResponse } from "../models/models_0";
import { StartFileTransfer } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Begins a file transfer between local Amazon Web Services storage and a remote AS2 or SFTP server.</p> <ul> <li> <p>For an AS2 connector, you specify the <code>ConnectorId</code> and one or more <code>SendFilePaths</code> to identify the files you want to transfer.</p> </li> <li> <p>For an SFTP connector, the file transfer can be either outbound or inbound. In both cases, you specify the <code>ConnectorId</code>. Depending on the direction of the transfer, you also specify the following items:</p> <ul> <li> <p>If you are transferring file from a partner's SFTP server to Amazon Web Services storage, you specify one or more <code>RetrieveFilePaths</code> to identify the files you want to transfer, and a <code>LocalDirectoryPath</code> to specify the destination folder.</p> </li> <li> <p>If you are transferring file to a partner's SFTP server from Amazon Web Services storage, you specify one or more <code>SendFilePaths</code> to identify the files you want to transfer, and a <code>RemoteDirectoryPath</code> to specify the destination folder.</p> </li> </ul> </li> </ul>
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
export class StartFileTransferCommand extends $Command
  .classBuilder<
    StartFileTransferCommandInput,
    StartFileTransferCommandOutput,
    TransferClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TransferClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("TransferService", "StartFileTransfer", {})
  .n("TransferClient", "StartFileTransferCommand")
  .sc(StartFileTransfer)
  .build() {
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
