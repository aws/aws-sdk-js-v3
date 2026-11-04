// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListWorkflowsRequest, ListWorkflowsResponse } from "../models/models_0";
import { ListWorkflows$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListWorkflowsCommand}.
 */
export interface ListWorkflowsCommandInput extends ListWorkflowsRequest {}
/**
 * @public
 *
 * The output of {@link ListWorkflowsCommand}.
 */
export interface ListWorkflowsCommandOutput extends ListWorkflowsResponse, __MetadataBearer {}

/**
 * Lists all workflows associated with your Amazon Web Services account for your current region.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, ListWorkflowsCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, ListWorkflowsCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * // import type { TransferClientConfig } from "@aws-sdk/client-transfer";
 * const config = {}; // type is TransferClientConfig
 * const client = new TransferClient(config);
 * const input = { // ListWorkflowsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListWorkflowsCommand(input);
 * const response = await client.send(command);
 * // { // ListWorkflowsResponse
 * //   NextToken: "STRING_VALUE",
 * //   Workflows: [ // ListedWorkflows // required
 * //     { // ListedWorkflow
 * //       WorkflowId: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListWorkflowsCommandInput - {@link ListWorkflowsCommandInput}
 * @returns {@link ListWorkflowsCommandOutput}
 * @see {@link ListWorkflowsCommandInput} for command's `input` shape.
 * @see {@link ListWorkflowsCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for TransferClient's `config` shape.
 *
 * @throws {@link InternalServiceError} (server fault)
 *
 * This exception is thrown when an error occurs in the Transfer Family service.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *
 * The `NextToken` parameter that was passed is invalid.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * This exception is thrown when the client submits a malformed request.
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
export class ListWorkflowsCommand extends command<ListWorkflowsCommandInput, ListWorkflowsCommandOutput>(
  _ep0,
  _mw0,
  "ListWorkflows",
  ListWorkflows$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListWorkflowsRequest;
      output: ListWorkflowsResponse;
    };
    sdk: {
      input: ListWorkflowsCommandInput;
      output: ListWorkflowsCommandOutput;
    };
  };
}
