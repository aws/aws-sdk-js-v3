// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListWaitingWorkflowStepsRequest, ListWaitingWorkflowStepsResponse } from "../models/models_0";
import { ListWaitingWorkflowSteps$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListWaitingWorkflowStepsCommand}.
 */
export interface ListWaitingWorkflowStepsCommandInput extends ListWaitingWorkflowStepsRequest {}
/**
 * @public
 *
 * The output of {@link ListWaitingWorkflowStepsCommand}.
 */
export interface ListWaitingWorkflowStepsCommandOutput extends ListWaitingWorkflowStepsResponse, __MetadataBearer {}

/**
 * <p>Lists the workflow steps in your Amazon Web Services account that have paused at a
 * 			<code>WaitForAction</code> step, and are waiting for you to respond. To send
 * 			a response, call <a>SendWorkflowStepAction</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, ListWaitingWorkflowStepsCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, ListWaitingWorkflowStepsCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * // import type { ImagebuilderClientConfig } from "@aws-sdk/client-imagebuilder";
 * const config = {}; // type is ImagebuilderClientConfig
 * const client = new ImagebuilderClient(config);
 * const input = { // ListWaitingWorkflowStepsRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListWaitingWorkflowStepsCommand(input);
 * const response = await client.send(command);
 * // { // ListWaitingWorkflowStepsResponse
 * //   steps: [ // WorkflowStepExecutionList
 * //     { // WorkflowStepExecution
 * //       stepExecutionId: "STRING_VALUE",
 * //       imageBuildVersionArn: "STRING_VALUE",
 * //       workflowExecutionId: "STRING_VALUE",
 * //       workflowBuildVersionArn: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       action: "STRING_VALUE",
 * //       startTime: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListWaitingWorkflowStepsCommandInput - {@link ListWaitingWorkflowStepsCommandInput}
 * @returns {@link ListWaitingWorkflowStepsCommandOutput}
 * @see {@link ListWaitingWorkflowStepsCommandInput} for command's `input` shape.
 * @see {@link ListWaitingWorkflowStepsCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for ImagebuilderClient's `config` shape.
 *
 * @throws {@link CallRateLimitExceededException} (client fault)
 *  <p>You have exceeded the permitted request rate for the Amazon EC2 APIs that Image Builder
 * 			calls on your behalf. Retry with an increasing or variable delay between
 * 			requests.</p>
 *
 * @throws {@link ClientException} (client fault)
 *  <p>A generic client error. This error usually indicates that the request
 * 			failed a validation check, such as when a downstream service rejects a
 * 			configured value.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>You are not authorized to perform the requested operation.</p>
 *
 * @throws {@link InvalidPaginationTokenException} (client fault)
 *  <p>You have provided an invalid pagination token in your request.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is malformed or otherwise invalid. Verify the request and try
 * 			again.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An internal server error occurred while Image Builder processed the request.
 * 			Retrying the request may succeed.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is unable to process your request at this time.</p>
 *
 * @throws {@link ImagebuilderServiceException}
 * <p>Base exception class for all service exceptions from Imagebuilder service.</p>
 *
 *
 * @example List workflow steps that are waiting for an action
 * ```javascript
 * // The following example lists the workflow steps in your account that are paused at a WaitForAction step, waiting for you to resume or stop the workflow with SendWorkflowStepAction.
 * const input = {
 *   maxResults: 25
 * };
 * const command = new ListWaitingWorkflowStepsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   steps: [
 *     {
 *       action: "WaitForAction",
 *       imageBuildVersionArn: "arn:aws:imagebuilder:us-west-2:111122223333:image/my-example-wait-recipe/1.0.0/1",
 *       name: "WaitForApproval",
 *       startTime: "2026-09-09T20:02:59.931Z",
 *       stepExecutionId: "step-8eb24d7a-036e-46b5-94a3-90a5d8b5ac4a",
 *       workflowBuildVersionArn: "arn:aws:imagebuilder:us-west-2:111122223333:workflow/build/my-example-wait-workflow/1.0.0/1",
 *       workflowExecutionId: "wf-782460a6-8dc5-4262-90ff-0509eef0053c"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListWaitingWorkflowStepsCommand extends command<ListWaitingWorkflowStepsCommandInput, ListWaitingWorkflowStepsCommandOutput>(
  _ep0,
  _mw0,
  "ListWaitingWorkflowSteps",
  ListWaitingWorkflowSteps$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListWaitingWorkflowStepsRequest;
      output: ListWaitingWorkflowStepsResponse;
    };
    sdk: {
      input: ListWaitingWorkflowStepsCommandInput;
      output: ListWaitingWorkflowStepsCommandOutput;
    };
  };
}
