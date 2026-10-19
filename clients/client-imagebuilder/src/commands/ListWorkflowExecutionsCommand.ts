// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListWorkflowExecutionsRequest, ListWorkflowExecutionsResponse } from "../models/models_0";
import { ListWorkflowExecutions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListWorkflowExecutionsCommand}.
 */
export interface ListWorkflowExecutionsCommandInput extends ListWorkflowExecutionsRequest {}
/**
 * @public
 *
 * The output of {@link ListWorkflowExecutionsCommand}.
 */
export interface ListWorkflowExecutionsCommandOutput extends ListWorkflowExecutionsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of workflow runtime instance metadata objects for a specific image build
 * 			version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, ListWorkflowExecutionsCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, ListWorkflowExecutionsCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * // import type { ImagebuilderClientConfig } from "@aws-sdk/client-imagebuilder";
 * const config = {}; // type is ImagebuilderClientConfig
 * const client = new ImagebuilderClient(config);
 * const input = { // ListWorkflowExecutionsRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   imageBuildVersionArn: "STRING_VALUE", // required
 * };
 * const command = new ListWorkflowExecutionsCommand(input);
 * const response = await client.send(command);
 * // { // ListWorkflowExecutionsResponse
 * //   requestId: "STRING_VALUE",
 * //   workflowExecutions: [ // WorkflowExecutionsList
 * //     { // WorkflowExecutionMetadata
 * //       workflowBuildVersionArn: "STRING_VALUE",
 * //       workflowExecutionId: "STRING_VALUE",
 * //       type: "BUILD" || "TEST" || "DISTRIBUTION",
 * //       status: "PENDING" || "SKIPPED" || "RUNNING" || "COMPLETED" || "FAILED" || "ROLLBACK_IN_PROGRESS" || "ROLLBACK_COMPLETED" || "CANCELLED",
 * //       message: "STRING_VALUE",
 * //       totalStepCount: Number("int"),
 * //       totalStepsSucceeded: Number("int"),
 * //       totalStepsFailed: Number("int"),
 * //       totalStepsSkipped: Number("int"),
 * //       startTime: "STRING_VALUE",
 * //       endTime: "STRING_VALUE",
 * //       parallelGroup: "STRING_VALUE",
 * //       retried: true || false,
 * //     },
 * //   ],
 * //   imageBuildVersionArn: "STRING_VALUE",
 * //   message: "STRING_VALUE",
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListWorkflowExecutionsCommandInput - {@link ListWorkflowExecutionsCommandInput}
 * @returns {@link ListWorkflowExecutionsCommandOutput}
 * @see {@link ListWorkflowExecutionsCommandInput} for command's `input` shape.
 * @see {@link ListWorkflowExecutionsCommandOutput} for command's `response` shape.
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
 * @example List the workflow runtime instances for an image build version
 * ```javascript
 * // The following example lists the workflow runtime instances that ran for the specified image build version, which was built with the Image Builder default build and test workflows.
 * const input = {
 *   imageBuildVersionArn: "arn:aws:imagebuilder:us-west-2:111122223333:image/my-example-recipe/1.0.0/1"
 * };
 * const command = new ListWorkflowExecutionsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   imageBuildVersionArn: "arn:aws:imagebuilder:us-west-2:111122223333:image/my-example-recipe/1.0.0/1",
 *   requestId: "c78ef9a3-cce8-4e7d-ae96-426fb7e59f5d",
 *   workflowExecutions: [
 *     {
 *       endTime: "2026-09-09T19:19:06.158Z",
 *       retried: false,
 *       startTime: "2026-09-09T19:12:23.175Z",
 *       status: "COMPLETED",
 *       totalStepCount: 7,
 *       totalStepsFailed: 0,
 *       totalStepsSkipped: 2,
 *       totalStepsSucceeded: 5,
 *       type: "BUILD",
 *       workflowBuildVersionArn: "arn:aws:imagebuilder:us-west-2:aws:workflow/build/build-image/1.0.3/1",
 *       workflowExecutionId: "wf-165b1cb6-3a62-4618-a021-94ddcbe32908"
 *     },
 *     {
 *       endTime: "2026-09-09T19:21:47.830Z",
 *       retried: false,
 *       startTime: "2026-09-09T19:19:11.709Z",
 *       status: "COMPLETED",
 *       totalStepCount: 4,
 *       totalStepsFailed: 0,
 *       totalStepsSkipped: 2,
 *       totalStepsSucceeded: 2,
 *       type: "TEST",
 *       workflowBuildVersionArn: "arn:aws:imagebuilder:us-west-2:aws:workflow/test/test-image/1.0.3/1",
 *       workflowExecutionId: "wf-1a3639b8-1366-4b73-8347-706874020dad"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListWorkflowExecutionsCommand extends command<ListWorkflowExecutionsCommandInput, ListWorkflowExecutionsCommandOutput>(
  _ep0,
  _mw0,
  "ListWorkflowExecutions",
  ListWorkflowExecutions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListWorkflowExecutionsRequest;
      output: ListWorkflowExecutionsResponse;
    };
    sdk: {
      input: ListWorkflowExecutionsCommandInput;
      output: ListWorkflowExecutionsCommandOutput;
    };
  };
}
