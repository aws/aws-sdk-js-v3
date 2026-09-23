// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetWorkflowRequest, GetWorkflowResponse } from "../models/models_0";
import { GetWorkflow$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetWorkflowCommand}.
 */
export interface GetWorkflowCommandInput extends GetWorkflowRequest {}
/**
 * @public
 *
 * The output of {@link GetWorkflowCommand}.
 */
export interface GetWorkflowCommandOutput extends GetWorkflowResponse, __MetadataBearer {}

/**
 * <p>Retrieves a workflow resource object.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, GetWorkflowCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, GetWorkflowCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * // import type { ImagebuilderClientConfig } from "@aws-sdk/client-imagebuilder";
 * const config = {}; // type is ImagebuilderClientConfig
 * const client = new ImagebuilderClient(config);
 * const input = { // GetWorkflowRequest
 *   workflowBuildVersionArn: "STRING_VALUE", // required
 * };
 * const command = new GetWorkflowCommand(input);
 * const response = await client.send(command);
 * // { // GetWorkflowResponse
 * //   workflow: { // Workflow
 * //     arn: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     version: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     changeDescription: "STRING_VALUE",
 * //     type: "BUILD" || "TEST" || "DISTRIBUTION",
 * //     state: { // WorkflowState
 * //       status: "DEPRECATED",
 * //       reason: "STRING_VALUE",
 * //     },
 * //     owner: "STRING_VALUE",
 * //     data: "STRING_VALUE",
 * //     kmsKeyId: "STRING_VALUE",
 * //     dateCreated: "STRING_VALUE",
 * //     tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     parameters: [ // WorkflowParameterDetailList
 * //       { // WorkflowParameterDetail
 * //         name: "STRING_VALUE", // required
 * //         type: "STRING_VALUE", // required
 * //         defaultValue: [ // WorkflowParameterValueList
 * //           "STRING_VALUE",
 * //         ],
 * //         description: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * //   latestVersionReferences: { // LatestVersionReferences
 * //     latestVersionArn: "STRING_VALUE",
 * //     latestMajorVersionArn: "STRING_VALUE",
 * //     latestMinorVersionArn: "STRING_VALUE",
 * //     latestPatchVersionArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetWorkflowCommandInput - {@link GetWorkflowCommandInput}
 * @returns {@link GetWorkflowCommandOutput}
 * @see {@link GetWorkflowCommandInput} for command's `input` shape.
 * @see {@link GetWorkflowCommandOutput} for command's `response` shape.
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
 * @example Get the details of a workflow build version
 * ```javascript
 * // The following example retrieves a workflow build version. The response includes the YAML workflow document in the data field and the parameters that Image Builder extracted from it when the workflow was created.
 * const input = {
 *   workflowBuildVersionArn: "arn:aws:imagebuilder:us-west-2:111122223333:workflow/build/my-example-workflow/1.0.0/1"
 * };
 * const command = new GetWorkflowCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   latestVersionReferences: {
 *     latestMajorVersionArn: "arn:aws:imagebuilder:us-west-2:111122223333:workflow/build/my-example-workflow/1.x.x",
 *     latestMinorVersionArn: "arn:aws:imagebuilder:us-west-2:111122223333:workflow/build/my-example-workflow/1.0.x",
 *     latestPatchVersionArn: "arn:aws:imagebuilder:us-west-2:111122223333:workflow/build/my-example-workflow/1.0.0",
 *     latestVersionArn: "arn:aws:imagebuilder:us-west-2:111122223333:workflow/build/my-example-workflow/x.x.x"
 *   },
 *   workflow: {
 *     arn: "arn:aws:imagebuilder:us-west-2:111122223333:workflow/build/my-example-workflow/1.0.0/1",
 *     changeDescription: "Initial version",
 *     data: `name: my-example-workflow
 * description: Workflow to build an AMI, then wait for an external action before it completes
 * schemaVersion: 1.0
 *
 * parameters:
 *   - name: waitForActionAtEnd
 *     type: boolean
 *     default: true
 *
 * steps:
 *   - name: LaunchBuildInstance
 *     action: LaunchInstance
 *     onFailure: Abort
 *     inputs:
 *       waitFor: "ssmAgent"
 *
 *   - name: ApplyBuildComponents
 *     action: ExecuteComponents
 *     onFailure: Abort
 *     inputs:
 *       instanceId.$: "$.stepOutputs.LaunchBuildInstance.instanceId"
 *
 *   - name: CreateOutputAMI
 *     action: CreateImage
 *     onFailure: Abort
 *     inputs:
 *       instanceId.$: "$.stepOutputs.LaunchBuildInstance.instanceId"
 *
 *   - name: TerminateBuildInstance
 *     action: TerminateInstance
 *     onFailure: Continue
 *     inputs:
 *       instanceId.$: "$.stepOutputs.LaunchBuildInstance.instanceId"
 *
 *   - name: WaitForActionAtEnd
 *     action: WaitForAction
 *     if:
 *       booleanEquals: true
 *       value: "$.parameters.waitForActionAtEnd"
 * `,
 *     dateCreated: "2026-09-09T19:55:55.731Z",
 *     description: "Builds an AMI, and then waits for an external action before the workflow completes",
 *     name: "my-example-workflow",
 *     owner: "111122223333",
 *     parameters: [
 *       {
 *         defaultValue: [
 *           "true"
 *         ],
 *         name: "waitForActionAtEnd",
 *         type: "boolean"
 *       }
 *     ],
 *     type: "BUILD",
 *     version: "1.0.0"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetWorkflowCommand extends command<GetWorkflowCommandInput, GetWorkflowCommandOutput>(
  _ep0,
  _mw0,
  "GetWorkflow",
  GetWorkflow$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetWorkflowRequest;
      output: GetWorkflowResponse;
    };
    sdk: {
      input: GetWorkflowCommandInput;
      output: GetWorkflowCommandOutput;
    };
  };
}
