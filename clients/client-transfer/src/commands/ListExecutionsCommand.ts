// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListExecutionsRequest, ListExecutionsResponse } from "../models/models_0";
import { ListExecutions } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListExecutionsCommand}.
 */
export interface ListExecutionsCommandInput extends ListExecutionsRequest {}
/**
 * @public
 *
 * The output of {@link ListExecutionsCommand}.
 */
export interface ListExecutionsCommandOutput extends ListExecutionsResponse, __MetadataBearer {}

/**
 * <p>Lists all in-progress executions for the specified workflow.</p> <note> <p>If the specified workflow ID cannot be found, <code>ListExecutions</code> returns a <code>ResourceNotFound</code> exception.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, ListExecutionsCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, ListExecutionsCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * // import type { TransferClientConfig } from "@aws-sdk/client-transfer";
 * const config = {}; // type is TransferClientConfig
 * const client = new TransferClient(config);
 * const input = { // ListExecutionsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   WorkflowId: "STRING_VALUE", // required
 * };
 * const command = new ListExecutionsCommand(input);
 * const response = await client.send(command);
 * // { // ListExecutionsResponse
 * //   NextToken: "STRING_VALUE",
 * //   WorkflowId: "STRING_VALUE", // required
 * //   Executions: [ // ListedExecutions // required
 * //     { // ListedExecution
 * //       ExecutionId: "STRING_VALUE",
 * //       InitialFileLocation: { // FileLocation
 * //         S3FileLocation: { // S3FileLocation
 * //           Bucket: "STRING_VALUE",
 * //           Key: "STRING_VALUE",
 * //           VersionId: "STRING_VALUE",
 * //           Etag: "STRING_VALUE",
 * //         },
 * //         EfsFileLocation: { // EfsFileLocation
 * //           FileSystemId: "STRING_VALUE",
 * //           Path: "STRING_VALUE",
 * //         },
 * //       },
 * //       ServiceMetadata: { // ServiceMetadata
 * //         UserDetails: { // UserDetails
 * //           UserName: "STRING_VALUE", // required
 * //           ServerId: "STRING_VALUE", // required
 * //           SessionId: "STRING_VALUE",
 * //         },
 * //       },
 * //       Status: "IN_PROGRESS" || "COMPLETED" || "EXCEPTION" || "HANDLING_EXCEPTION",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListExecutionsCommandInput - {@link ListExecutionsCommandInput}
 * @returns {@link ListExecutionsCommandOutput}
 * @see {@link ListExecutionsCommandInput} for command's `input` shape.
 * @see {@link ListExecutionsCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for TransferClient's `config` shape.
 *
 * @throws {@link InternalServiceError} (server fault)
 *  <p>This exception is thrown when an error occurs in the Transfer Family service.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The <code>NextToken</code> parameter that was passed is invalid.</p>
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
export class ListExecutionsCommand extends $Command
  .classBuilder<
    ListExecutionsCommandInput,
    ListExecutionsCommandOutput,
    TransferClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TransferClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("TransferService", "ListExecutions", {})
  .n("TransferClient", "ListExecutionsCommand")
  .sc(ListExecutions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListExecutionsRequest;
      output: ListExecutionsResponse;
    };
    sdk: {
      input: ListExecutionsCommandInput;
      output: ListExecutionsCommandOutput;
    };
  };
}
