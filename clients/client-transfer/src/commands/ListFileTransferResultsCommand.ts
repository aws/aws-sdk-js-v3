// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListFileTransferResultsRequest, ListFileTransferResultsResponse } from "../models/models_0";
import { ListFileTransferResults$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p> Returns real-time updates and detailed information on the status of each individual file being transferred in a specific file transfer operation. You specify the file transfer by providing its <code>ConnectorId</code> and its <code>TransferId</code>.</p> <note> <p>File transfer results are available up to 7 days after an operation has been requested.</p> </note>
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
 * @throws {@link TransferServiceException}
 * <p>Base exception class for all service exceptions from Transfer service.</p>
 *
 *
 * @public
 */
export class ListFileTransferResultsCommand extends $Command
  .classBuilder<
    ListFileTransferResultsCommandInput,
    ListFileTransferResultsCommandOutput,
    TransferClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TransferClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("TransferService", "ListFileTransferResults", {})
  .n("TransferClient", "ListFileTransferResultsCommand")
  .sc(ListFileTransferResults$)
  .build() {
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
