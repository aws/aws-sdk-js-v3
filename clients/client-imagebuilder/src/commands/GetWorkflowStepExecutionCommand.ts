// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetWorkflowStepExecutionRequest, GetWorkflowStepExecutionResponse } from "../models/models_0";
import { GetWorkflowStepExecution$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetWorkflowStepExecutionCommand}.
 */
export interface GetWorkflowStepExecutionCommandInput extends GetWorkflowStepExecutionRequest {}
/**
 * @public
 *
 * The output of {@link GetWorkflowStepExecutionCommand}.
 */
export interface GetWorkflowStepExecutionCommandOutput extends GetWorkflowStepExecutionResponse, __MetadataBearer {}

/**
 * <p>Retrieves runtime information for a specific runtime instance of
 * 			the workflow step.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, GetWorkflowStepExecutionCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, GetWorkflowStepExecutionCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * // import type { ImagebuilderClientConfig } from "@aws-sdk/client-imagebuilder";
 * const config = {}; // type is ImagebuilderClientConfig
 * const client = new ImagebuilderClient(config);
 * const input = { // GetWorkflowStepExecutionRequest
 *   stepExecutionId: "STRING_VALUE", // required
 * };
 * const command = new GetWorkflowStepExecutionCommand(input);
 * const response = await client.send(command);
 * // { // GetWorkflowStepExecutionResponse
 * //   requestId: "STRING_VALUE",
 * //   stepExecutionId: "STRING_VALUE",
 * //   workflowBuildVersionArn: "STRING_VALUE",
 * //   workflowExecutionId: "STRING_VALUE",
 * //   imageBuildVersionArn: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   action: "STRING_VALUE",
 * //   status: "PENDING" || "SKIPPED" || "RUNNING" || "COMPLETED" || "FAILED" || "CANCELLED",
 * //   rollbackStatus: "RUNNING" || "COMPLETED" || "SKIPPED" || "FAILED",
 * //   message: "STRING_VALUE",
 * //   inputs: "STRING_VALUE",
 * //   outputs: "STRING_VALUE",
 * //   startTime: "STRING_VALUE",
 * //   endTime: "STRING_VALUE",
 * //   onFailure: "STRING_VALUE",
 * //   timeoutSeconds: Number("int"),
 * //   attemptNumber: Number("int"),
 * //   maxAttempts: Number("int"),
 * // };
 *
 * ```
 *
 * @param GetWorkflowStepExecutionCommandInput - {@link GetWorkflowStepExecutionCommandInput}
 * @returns {@link GetWorkflowStepExecutionCommandOutput}
 * @see {@link GetWorkflowStepExecutionCommandInput} for command's `input` shape.
 * @see {@link GetWorkflowStepExecutionCommandOutput} for command's `response` shape.
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
 * @example Get the runtime details of a workflow step
 * ```javascript
 * // The following example retrieves runtime details for the step that launched the build instance during an image build, with the step's input parameters and output values returned as JSON-encoded strings.
 * const input = {
 *   stepExecutionId: "step-2e6fef0d-657c-4b7e-8706-ff24da9afa01"
 * };
 * const command = new GetWorkflowStepExecutionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   action: "LaunchInstance",
 *   endTime: "2026-09-09T19:14:50.822Z",
 *   imageBuildVersionArn: "arn:aws:imagebuilder:us-west-2:111122223333:image/my-example-recipe/1.0.0/1",
 *   inputs: `{"waitFor": "ssmAgent"}`,
 *   name: "LaunchBuildInstance",
 *   onFailure: "Abort",
 *   outputs: `{"instanceId": "i-1234567890abcdef0"}`,
 *   requestId: "9ba63d27-9568-4ea3-bfed-6b1ad4c09200",
 *   startTime: "2026-09-09T19:12:23.418Z",
 *   status: "COMPLETED",
 *   stepExecutionId: "step-2e6fef0d-657c-4b7e-8706-ff24da9afa01",
 *   timeoutSeconds: 4500,
 *   workflowBuildVersionArn: "arn:aws:imagebuilder:us-west-2:aws:workflow/build/build-image/1.0.3/1",
 *   workflowExecutionId: "wf-165b1cb6-3a62-4618-a021-94ddcbe32908"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetWorkflowStepExecutionCommand extends command<GetWorkflowStepExecutionCommandInput, GetWorkflowStepExecutionCommandOutput>(
  _ep0,
  _mw0,
  "GetWorkflowStepExecution",
  GetWorkflowStepExecution$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetWorkflowStepExecutionRequest;
      output: GetWorkflowStepExecutionResponse;
    };
    sdk: {
      input: GetWorkflowStepExecutionCommandInput;
      output: GetWorkflowStepExecutionCommandOutput;
    };
  };
}
