// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartDirectoryListingRequest, StartDirectoryListingResponse } from "../models/models_0";
import { StartDirectoryListing$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Retrieves a list of the contents of a directory from a remote SFTP server. You specify the connector ID, the output path, and the remote directory path. You can also specify the optional `MaxItems` value to control the maximum number of items that are listed from the remote directory. This API returns a list of all files and directories in the remote directory (up to the maximum value), but does not return files or folders in sub-directories. That is, it only returns a list of files and directories one-level deep.
 *
 * After you receive the listing file, you can provide the files that you want to transfer to the `RetrieveFilePaths` parameter of the `StartFileTransfer` API call.
 *
 * The naming convention for the output file is `connector-ID-listing-ID.json`. The output file contains the following information:
 *
 * - `filePath`: the complete path of a remote file, relative to the directory of the listing request for your SFTP connector on the remote server.
 * - `modifiedTimestamp`: the last time the file was modified, in UTC time format. This field is optional. If the remote file attributes don't contain a timestamp, it is omitted from the file listing.
 * - `size`: the size of the file, in bytes. This field is optional. If the remote file attributes don't contain a file size, it is omitted from the file listing.
 * - `path`: the complete path of a remote directory, relative to the directory of the listing request for your SFTP connector on the remote server.
 * - `truncated`: a flag indicating whether the list output contains all of the items contained in the remote directory or not. If your `Truncated` output value is true, you can increase the value provided in the optional `max-items` input attribute to be able to list more items (up to the maximum allowed list size of 200,000 items).
 *
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
export class StartDirectoryListingCommand extends command<StartDirectoryListingCommandInput, StartDirectoryListingCommandOutput>(
  _ep0,
  _mw0,
  "StartDirectoryListing",
  StartDirectoryListing$
) {
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
