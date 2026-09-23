// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetWorkflowExecutionRequest, GetWorkflowExecutionResponse } from "../models/models_0";
import { GetWorkflowExecution$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetWorkflowExecutionCommand}.
 */
export interface GetWorkflowExecutionCommandInput extends GetWorkflowExecutionRequest {}
/**
 * @public
 *
 * The output of {@link GetWorkflowExecutionCommand}.
 */
export interface GetWorkflowExecutionCommandOutput extends GetWorkflowExecutionResponse, __MetadataBearer {}

/**
 * <p>Retrieves runtime information for a specific runtime instance
 * 			of the workflow.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, GetWorkflowExecutionCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, GetWorkflowExecutionCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * // import type { ImagebuilderClientConfig } from "@aws-sdk/client-imagebuilder";
 * const config = {}; // type is ImagebuilderClientConfig
 * const client = new ImagebuilderClient(config);
 * const input = { // GetWorkflowExecutionRequest
 *   workflowExecutionId: "STRING_VALUE", // required
 * };
 * const command = new GetWorkflowExecutionCommand(input);
 * const response = await client.send(command);
 * // { // GetWorkflowExecutionResponse
 * //   requestId: "STRING_VALUE",
 * //   workflowBuildVersionArn: "STRING_VALUE",
 * //   workflowExecutionId: "STRING_VALUE",
 * //   imageBuildVersionArn: "STRING_VALUE",
 * //   type: "BUILD" || "TEST" || "DISTRIBUTION",
 * //   status: "PENDING" || "SKIPPED" || "RUNNING" || "COMPLETED" || "FAILED" || "ROLLBACK_IN_PROGRESS" || "ROLLBACK_COMPLETED" || "CANCELLED",
 * //   message: "STRING_VALUE",
 * //   totalStepCount: Number("int"),
 * //   totalStepsSucceeded: Number("int"),
 * //   totalStepsFailed: Number("int"),
 * //   totalStepsSkipped: Number("int"),
 * //   startTime: "STRING_VALUE",
 * //   endTime: "STRING_VALUE",
 * //   parallelGroup: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetWorkflowExecutionCommandInput - {@link GetWorkflowExecutionCommandInput}
 * @returns {@link GetWorkflowExecutionCommandOutput}
 * @see {@link GetWorkflowExecutionCommandInput} for command's `input` shape.
 * @see {@link GetWorkflowExecutionCommandOutput} for command's `response` shape.
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
 * @example Get the runtime details for a workflow execution
 * ```javascript
 * // The following example retrieves runtime status and step counts for the build workflow that ran for an image build version, using the workflow execution ID returned by ListWorkflowExecutions.
 * const input = {
 *   workflowExecutionId: "wf-165b1cb6-3a62-4618-a021-94ddcbe32908"
 * };
 * const command = new GetWorkflowExecutionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   endTime: "2026-09-09T19:19:06.158Z",
 *   imageBuildVersionArn: "arn:aws:imagebuilder:us-west-2:111122223333:image/my-example-recipe/1.0.0/1",
 *   requestId: "cd69c813-51c3-4261-8e59-382a1af96f73",
 *   startTime: "2026-09-09T19:12:23.175Z",
 *   status: "COMPLETED",
 *   totalStepCount: 7,
 *   totalStepsFailed: 0,
 *   totalStepsSkipped: 2,
 *   totalStepsSucceeded: 5,
 *   type: "BUILD",
 *   workflowBuildVersionArn: "arn:aws:imagebuilder:us-west-2:aws:workflow/build/build-image/1.0.3/1",
 *   workflowExecutionId: "wf-165b1cb6-3a62-4618-a021-94ddcbe32908"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetWorkflowExecutionCommand extends command<GetWorkflowExecutionCommandInput, GetWorkflowExecutionCommandOutput>(
  _ep0,
  _mw0,
  "GetWorkflowExecution",
  GetWorkflowExecution$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetWorkflowExecutionRequest;
      output: GetWorkflowExecutionResponse;
    };
    sdk: {
      input: GetWorkflowExecutionCommandInput;
      output: GetWorkflowExecutionCommandOutput;
    };
  };
}
