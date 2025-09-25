// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StartDirectoryListingRequest, StartDirectoryListingResponse } from "../models/models_0";
import { StartDirectoryListing } from "../schemas/schemas_6_Connector";
import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartDirectoryListingCommand}.
 */
export interface StartDirectoryListingCommandInput extends StartDirectoryListingRequest {}
/**
 * @public
 *
 * The output of {@link StartDirectoryListingCommand}.
 */
export interface StartDirectoryListingCommandOutput extends StartDirectoryListingResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of the contents of a directory from a remote SFTP server. You specify the connector ID, the output path, and the remote directory path. You can also specify the optional <code>MaxItems</code> value to control the maximum number of items that are listed from the remote directory. This API returns a list of all files and directories in the remote directory (up to the maximum value), but does not return files or folders in sub-directories. That is, it only returns a list of files and directories one-level deep.</p> <p>After you receive the listing file, you can provide the files that you want to transfer to the <code>RetrieveFilePaths</code> parameter of the <code>StartFileTransfer</code> API call.</p> <p>The naming convention for the output file is <code> <i>connector-ID</i>-<i>listing-ID</i>.json</code>. The output file contains the following information:</p> <ul> <li> <p> <code>filePath</code>: the complete path of a remote file, relative to the directory of the listing request for your SFTP connector on the remote server.</p> </li> <li> <p> <code>modifiedTimestamp</code>: the last time the file was modified, in UTC time format. This field is optional. If the remote file attributes don't contain a timestamp, it is omitted from the file listing.</p> </li> <li> <p> <code>size</code>: the size of the file, in bytes. This field is optional. If the remote file attributes don't contain a file size, it is omitted from the file listing.</p> </li> <li> <p> <code>path</code>: the complete path of a remote directory, relative to the directory of the listing request for your SFTP connector on the remote server.</p> </li> <li> <p> <code>truncated</code>: a flag indicating whether the list output contains all of the items contained in the remote directory or not. If your <code>Truncated</code> output value is true, you can increase the value provided in the optional <code>max-items</code> input attribute to be able to list more items (up to the maximum allowed list size of 10,000 items).</p> </li> </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, StartDirectoryListingCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, StartDirectoryListingCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * // import type { TransferClientConfig } from "@aws-sdk/client-transfer";
 * const config = {}; // type is TransferClientConfig
 * const client = new TransferClient(config);
 * const input = { // StartDirectoryListingRequest
 *   ConnectorId: "STRING_VALUE", // required
 *   RemoteDirectoryPath: "STRING_VALUE", // required
 *   MaxItems: Number("int"),
 *   OutputDirectoryPath: "STRING_VALUE", // required
 * };
 * const command = new StartDirectoryListingCommand(input);
 * const response = await client.send(command);
 * // { // StartDirectoryListingResponse
 * //   ListingId: "STRING_VALUE", // required
 * //   OutputFileName: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param StartDirectoryListingCommandInput - {@link StartDirectoryListingCommandInput}
 * @returns {@link StartDirectoryListingCommandOutput}
 * @see {@link StartDirectoryListingCommandInput} for command's `input` shape.
 * @see {@link StartDirectoryListingCommandOutput} for command's `response` shape.
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
export class StartDirectoryListingCommand extends $Command
  .classBuilder<
    StartDirectoryListingCommandInput,
    StartDirectoryListingCommandOutput,
    TransferClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TransferClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("TransferService", "StartDirectoryListing", {})
  .n("TransferClient", "StartDirectoryListingCommand")
  .sc(StartDirectoryListing)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartDirectoryListingRequest;
      output: StartDirectoryListingResponse;
    };
    sdk: {
      input: StartDirectoryListingCommandInput;
      output: StartDirectoryListingCommandOutput;
    };
  };
}
