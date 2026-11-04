// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw1, command } from "../commandBuilder";
import type { ActivityTask, PollForActivityTaskInput } from "../models/models_0";
import { PollForActivityTask$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PollForActivityTaskCommand}.
 */
export interface PollForActivityTaskCommandInput extends PollForActivityTaskInput {}
/**
 * @public
 *
 * The output of {@link PollForActivityTaskCommand}.
 */
export interface PollForActivityTaskCommandOutput extends ActivityTask, __MetadataBearer {}

/**
 * Used by workers to get an ActivityTask from the specified activity `taskList`. This initiates a long poll, where the service holds the HTTP connection open and responds as soon as a task becomes available. The maximum time the service holds on to the request before responding is 60 seconds. If no task is available within 60 seconds, the poll returns an empty result. An empty result, in this context, means that an ActivityTask is returned, but that the value of taskToken is an empty string. If a task is returned, the worker should use its type to identify and process it correctly.
 *
 * > **Important:** Workers should set their client side socket timeout to at least 70 seconds (10 seconds higher than the maximum time service may hold the poll request).
 *
 * **Access Control**
 *
 * You can use IAM policies to control this action's access to Amazon SWF resources as follows:
 *
 * - Use a `Resource` element with the domain name to limit the action to only specified domains.
 * - Use an `Action` element to allow or deny permission to call this action.
 * - Constrain the `taskList.name` parameter by using a `Condition` element with the `swf:taskList.name` key to allow the action to access only certain task lists.
 *
 * If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's `cause` parameter is set to `OPERATION_NOT_PERMITTED`. For details and example IAM policies, see [Using IAM to Manage Access to Amazon SWF Workflows](https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html) in the *Amazon SWF Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SWFClient, PollForActivityTaskCommand } from "@aws-sdk/client-swf"; // ES Modules import
 * // const { SWFClient, PollForActivityTaskCommand } = require("@aws-sdk/client-swf"); // CommonJS import
 * // import type { SWFClientConfig } from "@aws-sdk/client-swf";
 * const config = {}; // type is SWFClientConfig
 * const client = new SWFClient(config);
 * const input = { // PollForActivityTaskInput
 *   domain: "STRING_VALUE", // required
 *   taskList: { // TaskList
 *     name: "STRING_VALUE", // required
 *   },
 *   identity: "STRING_VALUE",
 * };
 * const command = new PollForActivityTaskCommand(input);
 * const response = await client.send(command);
 * // { // ActivityTask
 * //   taskToken: "STRING_VALUE", // required
 * //   activityId: "STRING_VALUE", // required
 * //   startedEventId: Number("long"), // required
 * //   workflowExecution: { // WorkflowExecution
 * //     workflowId: "STRING_VALUE", // required
 * //     runId: "STRING_VALUE", // required
 * //   },
 * //   activityType: { // ActivityType
 * //     name: "STRING_VALUE", // required
 * //     version: "STRING_VALUE", // required
 * //   },
 * //   input: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PollForActivityTaskCommandInput - {@link PollForActivityTaskCommandInput}
 * @returns {@link PollForActivityTaskCommandOutput}
 * @see {@link PollForActivityTaskCommandInput} for command's `input` shape.
 * @see {@link PollForActivityTaskCommandOutput} for command's `response` shape.
 * @see {@link SWFClientResolvedConfig | config} for SWFClient's `config` shape.
 *
 * @throws {@link LimitExceededFault} (client fault)
 *
 * Returned by any operation if a system imposed limitation has been reached. To address this fault you should either clean up unused resources or increase the limit by contacting AWS.
 *
 * @throws {@link OperationNotPermittedFault} (client fault)
 *
 * Returned when the caller doesn't have sufficient permissions to invoke the action.
 *
 * @throws {@link UnknownResourceFault} (client fault)
 *
 * Returned when the named resource cannot be found with in the scope of this operation (region or domain). This could happen if the named resource was never created or is no longer available for this operation.
 *
 * @throws {@link SWFServiceException}
 *
 * Base exception class for all service exceptions from SWF service.
 *
 * @public
 */
export class PollForActivityTaskCommand extends command<PollForActivityTaskCommandInput, PollForActivityTaskCommandOutput>(
  _ep0,
  _mw1,
  "PollForActivityTask",
  PollForActivityTask$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PollForActivityTaskInput;
      output: ActivityTask;
    };
    sdk: {
      input: PollForActivityTaskCommandInput;
      output: PollForActivityTaskCommandOutput;
    };
  };
}
