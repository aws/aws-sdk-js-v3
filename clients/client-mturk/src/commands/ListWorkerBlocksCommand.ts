// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListWorkerBlocksRequest, ListWorkerBlocksResponse } from "../models/models_0";
import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { de_ListWorkerBlocksCommand, se_ListWorkerBlocksCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export class ListWorkerBlocksCommand extends $Command
  .classBuilder<
    ListWorkerBlocksCommandInput,
    ListWorkerBlocksCommandOutput,
    MTurkClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MTurkClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MTurkRequesterServiceV20170117", "ListWorkerBlocks", {})
  .n("MTurkClient", "ListWorkerBlocksCommand")
  .f(void 0, void 0)
  .ser(se_ListWorkerBlocksCommand)
  .de(de_ListWorkerBlocksCommand)
  .build() {
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
