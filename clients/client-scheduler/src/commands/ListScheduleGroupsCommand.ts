// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListScheduleGroupsInput, ListScheduleGroupsOutput } from "../models/models_0";
import { ListScheduleGroups$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListScheduleGroupsCommand}.
 */
export interface ListScheduleGroupsCommandInput extends ListScheduleGroupsInput {}
/**
 * @public
 *
 * The output of {@link ListScheduleGroupsCommand}.
 */
export interface ListScheduleGroupsCommandOutput extends ListScheduleGroupsOutput, __MetadataBearer {}

/**
 * <p>Returns a paginated list of your schedule groups.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchedulerClient, ListScheduleGroupsCommand } from "@aws-sdk/client-scheduler"; // ES Modules import
 * // const { SchedulerClient, ListScheduleGroupsCommand } = require("@aws-sdk/client-scheduler"); // CommonJS import
 * // import type { SchedulerClientConfig } from "@aws-sdk/client-scheduler";
 * const config = {}; // type is SchedulerClientConfig
 * const client = new SchedulerClient(config);
 * const input = { // ListScheduleGroupsInput
 *   NamePrefix: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListScheduleGroupsCommand(input);
 * const response = await client.send(command);
 * // { // ListScheduleGroupsOutput
 * //   NextToken: "STRING_VALUE",
 * //   ScheduleGroups: [ // ScheduleGroupList // required
 * //     { // ScheduleGroupSummary
 * //       Arn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       State: "STRING_VALUE",
 * //       CreationDate: new Date("TIMESTAMP"),
 * //       LastModificationDate: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListScheduleGroupsCommandInput - {@link ListScheduleGroupsCommandInput}
 * @returns {@link ListScheduleGroupsCommandOutput}
 * @see {@link ListScheduleGroupsCommandInput} for command's `input` shape.
 * @see {@link ListScheduleGroupsCommandOutput} for command's `response` shape.
 * @see {@link SchedulerClientResolvedConfig | config} for SchedulerClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error encountered while processing the request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link SchedulerServiceException}
 * <p>Base exception class for all service exceptions from Scheduler service.</p>
 *
 *
 * @public
 */
export class ListScheduleGroupsCommand extends command<ListScheduleGroupsCommandInput, ListScheduleGroupsCommandOutput>(
  _ep0,
  _mw0,
  "ListScheduleGroups",
  ListScheduleGroups$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListScheduleGroupsInput;
      output: ListScheduleGroupsOutput;
    };
    sdk: {
      input: ListScheduleGroupsCommandInput;
      output: ListScheduleGroupsCommandOutput;
    };
  };
}
