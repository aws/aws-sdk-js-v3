// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListRunTasksRequest, ListRunTasksResponse } from "../models/models_0";
import { ListRunTasks$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListRunTasksCommand}.
 */
export interface ListRunTasksCommandInput extends ListRunTasksRequest {}
/**
 * @public
 *
 * The output of {@link ListRunTasksCommand}.
 */
export interface ListRunTasksCommandOutput extends ListRunTasksResponse, __MetadataBearer {}

/**
 * Returns a list of tasks and status information within their specified run. Use this operation to monitor runs and to identify which specific tasks have failed.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, ListRunTasksCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, ListRunTasksCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // ListRunTasksRequest
 *   id: "STRING_VALUE", // required
 *   status: "STRING_VALUE",
 *   startingToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListRunTasksCommand(input);
 * const response = await client.send(command);
 * // { // ListRunTasksResponse
 * //   items: [ // TaskList
 * //     { // TaskListItem
 * //       taskId: "STRING_VALUE",
 * //       status: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       cpus: Number("int"),
 * //       cacheHit: true || false,
 * //       cacheS3Uri: "STRING_VALUE",
 * //       memory: Number("int"),
 * //       creationTime: new Date("TIMESTAMP"),
 * //       startTime: new Date("TIMESTAMP"),
 * //       stopTime: new Date("TIMESTAMP"),
 * //       gpus: Number("int"),
 * //       instanceType: "STRING_VALUE",
 * //       uuid: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRunTasksCommandInput - {@link ListRunTasksCommandInput}
 * @returns {@link ListRunTasksCommandOutput}
 * @see {@link ListRunTasksCommandInput} for command's `input` shape.
 * @see {@link ListRunTasksCommandOutput} for command's `response` shape.
 * @see {@link OmicsClientResolvedConfig | config} for OmicsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request cannot be applied to the target resource in its current state.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred. Try the request again.
 *
 * @throws {@link RequestTimeoutException} (client fault)
 *
 * The request timed out.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The target resource was not found in the current Region.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request exceeds a service quota.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link OmicsServiceException}
 *
 * Base exception class for all service exceptions from Omics service.
 *
 * @public
 */
export class ListRunTasksCommand extends command<ListRunTasksCommandInput, ListRunTasksCommandOutput>(
  _ep0,
  _mw0,
  "ListRunTasks",
  ListRunTasks$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRunTasksRequest;
      output: ListRunTasksResponse;
    };
    sdk: {
      input: ListRunTasksCommandInput;
      output: ListRunTasksCommandOutput;
    };
  };
}
