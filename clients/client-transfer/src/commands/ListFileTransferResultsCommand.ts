// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListFileTransferResultsRequest, ListFileTransferResultsResponse } from "../models/models_0";
import { ListFileTransferResults$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListFileTransferResultsCommand}.
 */
export interface ListFileTransferResultsCommandInput extends ListFileTransferResultsRequest {}
/**
 * @public
 *
 * The output of {@link ListFileTransferResultsCommand}.
 */
export interface ListFileTransferResultsCommandOutput extends ListFileTransferResultsResponse, __MetadataBearer {}

/**
 * Returns real-time updates and detailed information on the status of each individual file being transferred in a specific file transfer operation. You specify the file transfer by providing its `ConnectorId` and its `TransferId`.
 *
 * > **Note:** File transfer results are available up to 7 days after an operation has been requested.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, ListFileTransferResultsCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, ListFileTransferResultsCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * // import type { TransferClientConfig } from "@aws-sdk/client-transfer";
 * const config = {}; // type is TransferClientConfig
 * const client = new TransferClient(config);
 * const input = { // ListFileTransferResultsRequest
 *   ConnectorId: "STRING_VALUE", // required
 *   TransferId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListFileTransferResultsCommand(input);
 * const response = await client.send(command);
 * // { // ListFileTransferResultsResponse
 * //   FileTransferResults: [ // ConnectorFileTransferResults // required
 * //     { // ConnectorFileTransferResult
 * //       FilePath: "STRING_VALUE", // required
 * //       StatusCode: "QUEUED" || "IN_PROGRESS" || "COMPLETED" || "FAILED", // required
 * //       FailureCode: "STRING_VALUE",
 * //       FailureMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListFileTransferResultsCommandInput - {@link ListFileTransferResultsCommandInput}
 * @returns {@link ListFileTransferResultsCommandOutput}
 * @see {@link ListFileTransferResultsCommandInput} for command's `input` shape.
 * @see {@link ListFileTransferResultsCommandOutput} for command's `response` shape.
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
 * @throws {@link TransferServiceException}
 *
 * Base exception class for all service exceptions from Transfer service.
 *
 * @public
 */
export class ListFileTransferResultsCommand extends command<ListFileTransferResultsCommandInput, ListFileTransferResultsCommandOutput>(
  _ep0,
  _mw0,
  "ListFileTransferResults",
  ListFileTransferResults$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListFileTransferResultsRequest;
      output: ListFileTransferResultsResponse;
    };
    sdk: {
      input: ListFileTransferResultsCommandInput;
      output: ListFileTransferResultsCommandOutput;
    };
  };
}
