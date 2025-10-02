// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ActivityTask, PollForActivityTaskInput } from "../models/models_0";
import { de_PollForActivityTaskCommand, se_PollForActivityTaskCommand } from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, SWFClientResolvedConfig } from "../SWFClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Used by workers to get an <a>ActivityTask</a> from the specified activity
 *         <code>taskList</code>. This initiates a long poll, where the service holds the HTTP
 *       connection open and responds as soon as a task becomes available. The maximum time the service
 *       holds on to the request before responding is 60 seconds. If no task is available within 60
 *       seconds, the poll returns an empty result. An empty result, in this context, means that an
 *       ActivityTask is returned, but that the value of taskToken is an empty string. If a task is
 *       returned, the worker should use its type to identify and process it correctly.</p>
 *          <important>
 *             <p>Workers should set their client side socket timeout to at least 70 seconds (10
 *         seconds higher than the maximum time service may hold the poll request).</p>
 *          </important>
 *          <p>
 *             <b>Access Control</b>
 *          </p>
 *          <p>You can use IAM policies to control this action's access to Amazon SWF resources as
 *       follows:</p>
 *          <ul>
 *             <li>
 *                <p>Use a <code>Resource</code> element with the domain name to limit the action to
 *           only specified domains.</p>
 *             </li>
 *             <li>
 *                <p>Use an <code>Action</code> element to allow or deny permission to call this
 *           action.</p>
 *             </li>
 *             <li>
 *                <p>Constrain the <code>taskList.name</code> parameter by using a
 *             <code>Condition</code> element with the <code>swf:taskList.name</code> key to allow the
 *           action to access only certain task lists.</p>
 *             </li>
 *          </ul>
 *          <p>If the caller doesn't have sufficient permissions to invoke the action, or the
 *       parameter values fall outside the specified constraints, the action fails. The associated
 *       event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>.
 *       For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF
 *         Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
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
 *  <p>Returned by any operation if a system imposed limitation has been reached. To address this fault you should either clean up unused resources or increase the limit by contacting AWS.</p>
 *
 * @throws {@link OperationNotPermittedFault} (client fault)
 *  <p>Returned when the caller doesn't have sufficient permissions to invoke the action.</p>
 *
 * @throws {@link UnknownResourceFault} (client fault)
 *  <p>Returned when the named resource cannot be found with in the scope of this operation (region or domain). This could happen if the named resource was never created or is no longer available for this operation.</p>
 *
 * @throws {@link SWFServiceException}
 * <p>Base exception class for all service exceptions from SWF service.</p>
 *
 *
 * @public
 */
export class PollForActivityTaskCommand extends $Command
  .classBuilder<
    PollForActivityTaskCommandInput,
    PollForActivityTaskCommandOutput,
    SWFClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SWFClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SimpleWorkflowService", "PollForActivityTask", {})
  .n("SWFClient", "PollForActivityTaskCommand")
  .f(void 0, void 0)
  .ser(se_PollForActivityTaskCommand)
  .de(de_PollForActivityTaskCommand)
  .build() {
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
