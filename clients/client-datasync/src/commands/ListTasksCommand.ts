// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListTasksRequest, ListTasksResponse } from "../models/models_0";
import { ListTasks$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListTasksCommand}.
 */
export interface ListTasksCommandInput extends ListTasksRequest {}
/**
 * @public
 *
 * The output of {@link ListTasksCommand}.
 */
export interface ListTasksCommandOutput extends ListTasksResponse, __MetadataBearer {}

/**
 * <p>Returns a list of the DataSync tasks you created.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, ListTasksCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, ListTasksCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * // import type { DataSyncClientConfig } from "@aws-sdk/client-datasync";
 * const config = {}; // type is DataSyncClientConfig
 * const client = new DataSyncClient(config);
 * const input = { // ListTasksRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Filters: [ // TaskFilters
 *     { // TaskFilter
 *       Name: "LocationId" || "CreationTime", // required
 *       Values: [ // FilterValues // required
 *         "STRING_VALUE",
 *       ],
 *       Operator: "Equals" || "NotEquals" || "In" || "LessThanOrEqual" || "LessThan" || "GreaterThanOrEqual" || "GreaterThan" || "Contains" || "NotContains" || "BeginsWith", // required
 *     },
 *   ],
 * };
 * const command = new ListTasksCommand(input);
 * const response = await client.send(command);
 * // { // ListTasksResponse
 * //   Tasks: [ // TaskList
 * //     { // TaskListEntry
 * //       TaskArn: "STRING_VALUE",
 * //       Status: "AVAILABLE" || "CREATING" || "QUEUED" || "RUNNING" || "UNAVAILABLE",
 * //       Name: "STRING_VALUE",
 * //       TaskMode: "BASIC" || "ENHANCED",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTasksCommandInput - {@link ListTasksCommandInput}
 * @returns {@link ListTasksCommandOutput}
 * @see {@link ListTasksCommandInput} for command's `input` shape.
 * @see {@link ListTasksCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for DataSyncClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception is thrown when an error occurs in the DataSync
 *       service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception is thrown when the client submits a malformed request.</p>
 *
 * @throws {@link DataSyncServiceException}
 * <p>Base exception class for all service exceptions from DataSync service.</p>
 *
 *
 * @public
 */
export class ListTasksCommand extends command<ListTasksCommandInput, ListTasksCommandOutput>(
  _ep0,
  _mw0,
  "ListTasks",
  ListTasks$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTasksRequest;
      output: ListTasksResponse;
    };
    sdk: {
      input: ListTasksCommandInput;
      output: ListTasksCommandOutput;
    };
  };
}
