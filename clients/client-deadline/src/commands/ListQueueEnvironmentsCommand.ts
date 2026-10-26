// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListQueueEnvironmentsRequest, ListQueueEnvironmentsResponse } from "../models/models_1";
import { ListQueueEnvironments$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListQueueEnvironmentsCommand}.
 */
export interface ListQueueEnvironmentsCommandInput extends ListQueueEnvironmentsRequest {}
/**
 * @public
 *
 * The output of {@link ListQueueEnvironmentsCommand}.
 */
export interface ListQueueEnvironmentsCommandOutput extends ListQueueEnvironmentsResponse, __MetadataBearer {}

/**
 * Lists queue environments.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, ListQueueEnvironmentsCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, ListQueueEnvironmentsCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // import type { DeadlineClientConfig } from "@aws-sdk/client-deadline";
 * const config = {}; // type is DeadlineClientConfig
 * const client = new DeadlineClient(config);
 * const input = { // ListQueueEnvironmentsRequest
 *   farmId: "STRING_VALUE", // required
 *   queueId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListQueueEnvironmentsCommand(input);
 * const response = await client.send(command);
 * // { // ListQueueEnvironmentsResponse
 * //   environments: [ // QueueEnvironmentSummaries // required
 * //     { // QueueEnvironmentSummary
 * //       queueEnvironmentId: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       priority: Number("int"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListQueueEnvironmentsCommandInput - {@link ListQueueEnvironmentsCommandInput}
 * @returns {@link ListQueueEnvironmentsCommandOutput}
 * @see {@link ListQueueEnvironmentsCommandInput} for command's `input` shape.
 * @see {@link ListQueueEnvironmentsCommandOutput} for command's `response` shape.
 * @see {@link DeadlineClientResolvedConfig | config} for DeadlineClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  You don't have permission to perform the action.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  Deadline Cloud can't process your request right now. Try again later.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The requested resource can't be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  Your request exceeded a request rate quota.
 *
 * @throws {@link ValidationException} (client fault)
 *  The request isn't valid. This can occur if your request contains malformed JSON or unsupported characters.
 *
 * @throws {@link DeadlineServiceException}
 * <p>Base exception class for all service exceptions from Deadline service.</p>
 *
 *
 * @public
 */
export class ListQueueEnvironmentsCommand extends command<ListQueueEnvironmentsCommandInput, ListQueueEnvironmentsCommandOutput>(
  _ep0,
  _mw0,
  "ListQueueEnvironments",
  ListQueueEnvironments$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListQueueEnvironmentsRequest;
      output: ListQueueEnvironmentsResponse;
    };
    sdk: {
      input: ListQueueEnvironmentsCommandInput;
      output: ListQueueEnvironmentsCommandOutput;
    };
  };
}
