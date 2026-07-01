// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListWorkerBlocksRequest, ListWorkerBlocksResponse } from "../models/models_0";
import { ListWorkerBlocks$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListWorkerBlocksCommand}.
 */
export interface ListWorkerBlocksCommandInput extends ListWorkerBlocksRequest {}
/**
 * @public
 *
 * The output of {@link ListWorkerBlocksCommand}.
 */
export interface ListWorkerBlocksCommandOutput extends ListWorkerBlocksResponse, __MetadataBearer {}

/**
 * <p>The <code>ListWorkersBlocks</code> operation retrieves a list of Workers who are blocked from working on your HITs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, ListWorkerBlocksCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, ListWorkerBlocksCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * // import type { MTurkClientConfig } from "@aws-sdk/client-mturk";
 * const config = {}; // type is MTurkClientConfig
 * const client = new MTurkClient(config);
 * const input = { // ListWorkerBlocksRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListWorkerBlocksCommand(input);
 * const response = await client.send(command);
 * // { // ListWorkerBlocksResponse
 * //   NextToken: "STRING_VALUE",
 * //   NumResults: Number("int"),
 * //   WorkerBlocks: [ // WorkerBlockList
 * //     { // WorkerBlock
 * //       WorkerId: "STRING_VALUE",
 * //       Reason: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListWorkerBlocksCommandInput - {@link ListWorkerBlocksCommandInput}
 * @returns {@link ListWorkerBlocksCommandOutput}
 * @see {@link ListWorkerBlocksCommandInput} for command's `input` shape.
 * @see {@link ListWorkerBlocksCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for MTurkClient's `config` shape.
 *
 * @throws {@link RequestError} (client fault)
 *  <p>Your request is invalid.</p>
 *
 * @throws {@link ServiceFault} (server fault)
 *  <p>Amazon Mechanical Turk is temporarily unable to process your request. Try your call again.</p>
 *
 * @throws {@link MTurkServiceException}
 * <p>Base exception class for all service exceptions from MTurk service.</p>
 *
 *
 * @public
 */
export class ListWorkerBlocksCommand extends command<ListWorkerBlocksCommandInput, ListWorkerBlocksCommandOutput>(
  _ep0,
  _mw0,
  "ListWorkerBlocks",
  ListWorkerBlocks$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListWorkerBlocksRequest;
      output: ListWorkerBlocksResponse;
    };
    sdk: {
      input: ListWorkerBlocksCommandInput;
      output: ListWorkerBlocksCommandOutput;
    };
  };
}
