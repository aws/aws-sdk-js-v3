// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListCapacityTasksInput, ListCapacityTasksOutput } from "../models/models_0";
import { OutpostsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OutpostsClient";
import { ListCapacityTasks } from "../schemas/schemas_1_List";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCapacityTasksCommand}.
 */
export interface ListCapacityTasksCommandInput extends ListCapacityTasksInput {}
/**
 * @public
 *
 * The output of {@link ListCapacityTasksCommand}.
 */
export interface ListCapacityTasksCommandOutput extends ListCapacityTasksOutput, __MetadataBearer {}

/**
 * <p>Lists the capacity tasks for your Amazon Web Services account.</p>
 *          <p>Use filters to return specific results. If you specify multiple filters, the results include only the resources that match
 *  all of the specified filters. For a filter where you can specify multiple values, the results include
 *  items that match any of the values that you specify for the filter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OutpostsClient, ListCapacityTasksCommand } from "@aws-sdk/client-outposts"; // ES Modules import
 * // const { OutpostsClient, ListCapacityTasksCommand } = require("@aws-sdk/client-outposts"); // CommonJS import
 * // import type { OutpostsClientConfig } from "@aws-sdk/client-outposts";
 * const config = {}; // type is OutpostsClientConfig
 * const client = new OutpostsClient(config);
 * const input = { // ListCapacityTasksInput
 *   OutpostIdentifierFilter: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   CapacityTaskStatusFilter: [ // CapacityTaskStatusList
 *     "REQUESTED" || "IN_PROGRESS" || "FAILED" || "COMPLETED" || "WAITING_FOR_EVACUATION" || "CANCELLATION_IN_PROGRESS" || "CANCELLED",
 *   ],
 * };
 * const command = new ListCapacityTasksCommand(input);
 * const response = await client.send(command);
 * // { // ListCapacityTasksOutput
 * //   CapacityTasks: [ // CapacityTaskList
 * //     { // CapacityTaskSummary
 * //       CapacityTaskId: "STRING_VALUE",
 * //       OutpostId: "STRING_VALUE",
 * //       OrderId: "STRING_VALUE",
 * //       AssetId: "STRING_VALUE",
 * //       CapacityTaskStatus: "REQUESTED" || "IN_PROGRESS" || "FAILED" || "COMPLETED" || "WAITING_FOR_EVACUATION" || "CANCELLATION_IN_PROGRESS" || "CANCELLED",
 * //       CreationDate: new Date("TIMESTAMP"),
 * //       CompletionDate: new Date("TIMESTAMP"),
 * //       LastModifiedDate: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCapacityTasksCommandInput - {@link ListCapacityTasksCommandInput}
 * @returns {@link ListCapacityTasksCommandOutput}
 * @see {@link ListCapacityTasksCommandInput} for command's `input` shape.
 * @see {@link ListCapacityTasksCommandOutput} for command's `response` shape.
 * @see {@link OutpostsClientResolvedConfig | config} for OutpostsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have permission to perform this operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The specified request is not valid.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A parameter is not valid.</p>
 *
 * @throws {@link OutpostsServiceException}
 * <p>Base exception class for all service exceptions from Outposts service.</p>
 *
 *
 * @public
 */
export class ListCapacityTasksCommand extends $Command
  .classBuilder<
    ListCapacityTasksCommandInput,
    ListCapacityTasksCommandOutput,
    OutpostsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OutpostsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("OutpostsOlafService", "ListCapacityTasks", {})
  .n("OutpostsClient", "ListCapacityTasksCommand")
  .sc(ListCapacityTasks)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCapacityTasksInput;
      output: ListCapacityTasksOutput;
    };
    sdk: {
      input: ListCapacityTasksCommandInput;
      output: ListCapacityTasksCommandOutput;
    };
  };
}
