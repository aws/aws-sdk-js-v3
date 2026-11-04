// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RespondActivityTaskCanceledInput } from "../models/models_0";
import { RespondActivityTaskCanceled$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RespondActivityTaskCanceledCommand}.
 */
export interface RespondActivityTaskCanceledCommandInput extends RespondActivityTaskCanceledInput {}
/**
 * @public
 *
 * The output of {@link RespondActivityTaskCanceledCommand}.
 */
export interface RespondActivityTaskCanceledCommandOutput extends __MetadataBearer {}

/**
 * Used by workers to tell the service that the ActivityTask identified by the `taskToken` was successfully canceled. Additional `details` can be provided using the `details` argument.
 *
 * These `details` (if provided) appear in the `ActivityTaskCanceled` event added to the workflow history.
 *
 * > **Important:** Only use this operation if the `canceled` flag of a RecordActivityTaskHeartbeat request returns `true` and if the activity can be safely undone or abandoned.
 *
 * A task is considered open from the time that it is scheduled until it is closed. Therefore a task is reported as open while a worker is processing it. A task is closed after it has been specified in a call to RespondActivityTaskCompleted, RespondActivityTaskCanceled, RespondActivityTaskFailed, or the task has [timed out](https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dg-basic.html#swf-dev-timeout-types).
 *
 * **Access Control**
 *
 * You can use IAM policies to control this action's access to Amazon SWF resources as follows:
 *
 * - Use a `Resource` element with the domain name to limit the action to only specified domains.
 * - Use an `Action` element to allow or deny permission to call this action.
 * - You cannot use an IAM policy to constrain this action's parameters.
 *
 * If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's `cause` parameter is set to `OPERATION_NOT_PERMITTED`. For details and example IAM policies, see [Using IAM to Manage Access to Amazon SWF Workflows](https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html) in the *Amazon SWF Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SWFClient, RespondActivityTaskCanceledCommand } from "@aws-sdk/client-swf"; // ES Modules import
 * // const { SWFClient, RespondActivityTaskCanceledCommand } = require("@aws-sdk/client-swf"); // CommonJS import
 * // import type { SWFClientConfig } from "@aws-sdk/client-swf";
 * const config = {}; // type is SWFClientConfig
 * const client = new SWFClient(config);
 * const input = { // RespondActivityTaskCanceledInput
 *   taskToken: "STRING_VALUE", // required
 *   details: "STRING_VALUE",
 * };
 * const command = new RespondActivityTaskCanceledCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RespondActivityTaskCanceledCommandInput - {@link RespondActivityTaskCanceledCommandInput}
 * @returns {@link RespondActivityTaskCanceledCommandOutput}
 * @see {@link RespondActivityTaskCanceledCommandInput} for command's `input` shape.
 * @see {@link RespondActivityTaskCanceledCommandOutput} for command's `response` shape.
 * @see {@link SWFClientResolvedConfig | config} for SWFClient's `config` shape.
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
export class RespondActivityTaskCanceledCommand extends command<RespondActivityTaskCanceledCommandInput, RespondActivityTaskCanceledCommandOutput>(
  _ep0,
  _mw0,
  "RespondActivityTaskCanceled",
  RespondActivityTaskCanceled$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RespondActivityTaskCanceledInput;
      output: {};
    };
    sdk: {
      input: RespondActivityTaskCanceledCommandInput;
      output: RespondActivityTaskCanceledCommandOutput;
    };
  };
}
