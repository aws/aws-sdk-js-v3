// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListTasksInput, ListTasksOutput } from "../models/models_0";
import { de_ListTasksCommand, se_ListTasksCommand } from "../protocols/Aws_restJson1";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SnowDeviceManagementClientResolvedConfig,
} from "../SnowDeviceManagementClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTasksCommand}.
 */
export interface ListTasksCommandInput extends ListTasksInput {}
/**
 * @public
 *
 * The output of {@link ListTasksCommand}.
 */
export interface ListTasksCommandOutput extends ListTasksOutput, __MetadataBearer {}

/**
 * <p>Returns a list of tasks that can be filtered by state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowDeviceManagementClient, ListTasksCommand } from "@aws-sdk/client-snow-device-management"; // ES Modules import
 * // const { SnowDeviceManagementClient, ListTasksCommand } = require("@aws-sdk/client-snow-device-management"); // CommonJS import
 * const client = new SnowDeviceManagementClient(config);
 * const input = { // ListTasksInput
 *   state: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListTasksCommand(input);
 * const response = await client.send(command);
 * // { // ListTasksOutput
 * //   tasks: [ // TaskSummaryList
 * //     { // TaskSummary
 * //       taskId: "STRING_VALUE", // required
 * //       taskArn: "STRING_VALUE",
 * //       state: "STRING_VALUE",
 * //       tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTasksCommandInput - {@link ListTasksCommandInput}
 * @returns {@link ListTasksCommandOutput}
 * @see {@link ListTasksCommandInput} for command's `input` shape.
 * @see {@link ListTasksCommandOutput} for command's `response` shape.
 * @see {@link SnowDeviceManagementClientResolvedConfig | config} for SnowDeviceManagementClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing the request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link SnowDeviceManagementServiceException}
 * <p>Base exception class for all service exceptions from SnowDeviceManagement service.</p>
 *
 * @public
 */
export class ListTasksCommand extends $Command
  .classBuilder<
    ListTasksCommandInput,
    ListTasksCommandOutput,
    SnowDeviceManagementClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SnowDeviceManagementClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SnowDeviceManagement", "ListTasks", {})
  .n("SnowDeviceManagementClient", "ListTasksCommand")
  .f(void 0, void 0)
  .ser(se_ListTasksCommand)
  .de(de_ListTasksCommand)
  .build() {}
