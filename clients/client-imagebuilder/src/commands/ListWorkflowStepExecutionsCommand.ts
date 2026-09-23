// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListWorkflowStepExecutionsRequest, ListWorkflowStepExecutionsResponse } from "../models/models_0";
import { ListWorkflowStepExecutions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListWorkflowStepExecutionsCommand}.
 */
export interface ListWorkflowStepExecutionsCommandInput extends ListWorkflowStepExecutionsRequest {}
/**
 * @public
 *
 * The output of {@link ListWorkflowStepExecutionsCommand}.
 */
export interface ListWorkflowStepExecutionsCommandOutput extends ListWorkflowStepExecutionsResponse, __MetadataBearer {}

/**
 * <p>Returns runtime data for each step in a runtime instance of the workflow
 * 			that you specify in the request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, ListWorkflowStepExecutionsCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, ListWorkflowStepExecutionsCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * // import type { ImagebuilderClientConfig } from "@aws-sdk/client-imagebuilder";
 * const config = {}; // type is ImagebuilderClientConfig
 * const client = new ImagebuilderClient(config);
 * const input = { // ListWorkflowStepExecutionsRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   workflowExecutionId: "STRING_VALUE", // required
 * };
 * const command = new ListWorkflowStepExecutionsCommand(input);
 * const response = await client.send(command);
 * // { // ListWorkflowStepExecutionsResponse
 * //   requestId: "STRING_VALUE",
 * //   steps: [ // WorkflowStepExecutionsList
 * //     { // WorkflowStepMetadata
 * //       stepExecutionId: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       action: "STRING_VALUE",
 * //       status: "PENDING" || "SKIPPED" || "RUNNING" || "COMPLETED" || "FAILED" || "CANCELLED",
 * //       rollbackStatus: "RUNNING" || "COMPLETED" || "SKIPPED" || "FAILED",
 * //       message: "STRING_VALUE",
 * //       inputs: "STRING_VALUE",
 * //       outputs: "STRING_VALUE",
 * //       startTime: "STRING_VALUE",
 * //       endTime: "STRING_VALUE",
 * //       attemptNumber: Number("int"),
 * //       maxAttempts: Number("int"),
 * //     },
 * //   ],
 * //   workflowBuildVersionArn: "STRING_VALUE",
 * //   workflowExecutionId: "STRING_VALUE",
 * //   imageBuildVersionArn: "STRING_VALUE",
 * //   message: "STRING_VALUE",
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListWorkflowStepExecutionsCommandInput - {@link ListWorkflowStepExecutionsCommandInput}
 * @returns {@link ListWorkflowStepExecutionsCommandOutput}
 * @see {@link ListWorkflowStepExecutionsCommandInput} for command's `input` shape.
 * @see {@link ListWorkflowStepExecutionsCommandOutput} for command's `response` shape.
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
 * @example List the steps that ran in a workflow execution
 * ```javascript
 * // The following example lists runtime details for each step in the specified runtime instance of a workflow, in this case the build workflow from an image build.
 * const input = {
 *   workflowExecutionId: "wf-165b1cb6-3a62-4618-a021-94ddcbe32908"
 * };
 * const command = new ListWorkflowStepExecutionsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   imageBuildVersionArn: "arn:aws:imagebuilder:us-west-2:111122223333:image/my-example-recipe/1.0.0/1",
 *   requestId: "c6258beb-bc78-40dc-8bf9-fa5a8a93d3f3",
 *   steps: [
 *     {
 *       action: "LaunchInstance",
 *       endTime: "2026-09-09T19:14:50.822Z",
 *       inputs: `{"waitFor": "ssmAgent"}`,
 *       name: "LaunchBuildInstance",
 *       outputs: `{"instanceId": "i-1234567890abcdef0"}`,
 *       startTime: "2026-09-09T19:12:23.418Z",
 *       status: "COMPLETED",
 *       stepExecutionId: "step-2e6fef0d-657c-4b7e-8706-ff24da9afa01"
 *     },
 *     {
 *       action: "ExecuteComponents",
 *       endTime: "2026-09-09T19:14:51.229Z",
 *       inputs: `{"instanceId.$": "$.stepOutputs.LaunchBuildInstance.instanceId"}`,
 *       name: "ApplyBuildComponents",
 *       startTime: "2026-09-09T19:14:51.229Z",
 *       status: "SKIPPED",
 *       stepExecutionId: "step-f76c24fe-dc70-435b-8dc1-987a0ca6d5a5"
 *     },
 *     {
 *       action: "CollectImageMetadata",
 *       endTime: "2026-09-09T19:16:26.267Z",
 *       inputs: `{"instanceId": "i-1234567890abcdef0"}`,
 *       name: "InventoryCollection",
 *       outputs: `{"osVersion": "Amazon Linux 2023", "associationId": "7416ce2e-4ee8-4660-8c42-a09a03f61010"}`,
 *       startTime: "2026-09-09T19:14:51.818Z",
 *       status: "COMPLETED",
 *       stepExecutionId: "step-aa880a39-e72c-4561-aa05-eb3de860441a"
 *     },
 *     {
 *       action: "SanitizeInstance",
 *       endTime: "2026-09-09T19:16:36.559Z",
 *       name: "RunSanitizeScript",
 *       outputs: `{"status": "Success", "output": "Skipping cleanup\n", "runCommandId": "9eef9fe1-12e8-4c97-8e9a-4e79632864f4"}`,
 *       startTime: "2026-09-09T19:16:26.742Z",
 *       status: "COMPLETED",
 *       stepExecutionId: "step-572bdd17-25c4-4729-9f2e-7fd611807751"
 *     },
 *     {
 *       action: "RunSysPrep",
 *       endTime: "2026-09-09T19:16:36.973Z",
 *       inputs: `{"instanceId.$": "$.stepOutputs.LaunchBuildInstance.instanceId"}`,
 *       name: "RunSysPrepScript",
 *       startTime: "2026-09-09T19:16:36.973Z",
 *       status: "SKIPPED",
 *       stepExecutionId: "step-06026579-939d-4b1b-b36e-fa58cb712a48"
 *     },
 *     {
 *       action: "CreateImage",
 *       endTime: "2026-09-09T19:19:02.135Z",
 *       inputs: `{"instanceId": "i-1234567890abcdef0"}`,
 *       name: "CreateOutputAMI",
 *       outputs: `{"imageId": "ami-1234567890abcdef0"}`,
 *       startTime: "2026-09-09T19:16:37.499Z",
 *       status: "COMPLETED",
 *       stepExecutionId: "step-50e4312d-400c-453e-957c-714cbee6961c"
 *     },
 *     {
 *       action: "TerminateInstance",
 *       endTime: "2026-09-09T19:19:06.132Z",
 *       inputs: `{"instanceId": "i-1234567890abcdef0"}`,
 *       name: "TerminateBuildInstance",
 *       startTime: "2026-09-09T19:19:02.546Z",
 *       status: "COMPLETED",
 *       stepExecutionId: "step-22673db0-e280-4948-b9b5-789791531c34"
 *     }
 *   ],
 *   workflowBuildVersionArn: "arn:aws:imagebuilder:us-west-2:aws:workflow/build/build-image/1.0.3/1",
 *   workflowExecutionId: "wf-165b1cb6-3a62-4618-a021-94ddcbe32908"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListWorkflowStepExecutionsCommand extends command<ListWorkflowStepExecutionsCommandInput, ListWorkflowStepExecutionsCommandOutput>(
  _ep0,
  _mw0,
  "ListWorkflowStepExecutions",
  ListWorkflowStepExecutions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListWorkflowStepExecutionsRequest;
      output: ListWorkflowStepExecutionsResponse;
    };
    sdk: {
      input: ListWorkflowStepExecutionsCommandInput;
      output: ListWorkflowStepExecutionsCommandOutput;
    };
  };
}
