// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetImagePipelineRequest, GetImagePipelineResponse } from "../models/models_0";
import { GetImagePipeline$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetImagePipelineCommand}.
 */
export interface GetImagePipelineCommandInput extends GetImagePipelineRequest {}
/**
 * @public
 *
 * The output of {@link GetImagePipelineCommand}.
 */
export interface GetImagePipelineCommandOutput extends GetImagePipelineResponse, __MetadataBearer {}

/**
 * <p>Retrieves an image pipeline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, GetImagePipelineCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, GetImagePipelineCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * // import type { ImagebuilderClientConfig } from "@aws-sdk/client-imagebuilder";
 * const config = {}; // type is ImagebuilderClientConfig
 * const client = new ImagebuilderClient(config);
 * const input = { // GetImagePipelineRequest
 *   imagePipelineArn: "STRING_VALUE", // required
 * };
 * const command = new GetImagePipelineCommand(input);
 * const response = await client.send(command);
 * // { // GetImagePipelineResponse
 * //   requestId: "STRING_VALUE",
 * //   imagePipeline: { // ImagePipeline
 * //     arn: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     platform: "Windows" || "Linux" || "macOS",
 * //     enhancedImageMetadataEnabled: true || false,
 * //     imageRecipeArn: "STRING_VALUE",
 * //     containerRecipeArn: "STRING_VALUE",
 * //     infrastructureConfigurationArn: "STRING_VALUE",
 * //     distributionConfigurationArn: "STRING_VALUE",
 * //     imageTestsConfiguration: { // ImageTestsConfiguration
 * //       imageTestsEnabled: true || false,
 * //       timeoutMinutes: Number("int"),
 * //     },
 * //     schedule: { // Schedule
 * //       scheduleExpression: "STRING_VALUE",
 * //       timezone: "STRING_VALUE",
 * //       pipelineExecutionStartCondition: "EXPRESSION_MATCH_ONLY" || "EXPRESSION_MATCH_AND_DEPENDENCY_UPDATES_AVAILABLE",
 * //       autoDisablePolicy: { // AutoDisablePolicy
 * //         failureCount: Number("int"), // required
 * //       },
 * //     },
 * //     status: "DISABLED" || "ENABLED",
 * //     dateCreated: "STRING_VALUE",
 * //     dateUpdated: "STRING_VALUE",
 * //     dateLastRun: "STRING_VALUE",
 * //     lastRunStatus: "PENDING" || "CREATING" || "BUILDING" || "TESTING" || "DISTRIBUTING" || "INTEGRATING" || "AVAILABLE" || "CANCELLED" || "FAILED" || "DEPRECATED" || "DELETED" || "DISABLED",
 * //     dateNextRun: "STRING_VALUE",
 * //     tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     imageScanningConfiguration: { // ImageScanningConfiguration
 * //       imageScanningEnabled: true || false,
 * //       ecrConfiguration: { // EcrConfiguration
 * //         repositoryName: "STRING_VALUE",
 * //         containerTags: [ // StringList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //     imageTags: {
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     executionRole: "STRING_VALUE",
 * //     workflows: [ // WorkflowConfigurationList
 * //       { // WorkflowConfiguration
 * //         workflowArn: "STRING_VALUE", // required
 * //         parameters: [ // WorkflowParameterList
 * //           { // WorkflowParameter
 * //             name: "STRING_VALUE", // required
 * //             value: [ // WorkflowParameterValueList // required
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         ],
 * //         parallelGroup: "STRING_VALUE",
 * //         onFailure: "CONTINUE" || "ABORT",
 * //       },
 * //     ],
 * //     loggingConfiguration: { // PipelineLoggingConfiguration
 * //       imageLogGroupName: "STRING_VALUE",
 * //       pipelineLogGroupName: "STRING_VALUE",
 * //     },
 * //     consecutiveFailures: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetImagePipelineCommandInput - {@link GetImagePipelineCommandInput}
 * @returns {@link GetImagePipelineCommandOutput}
 * @see {@link GetImagePipelineCommandInput} for command's `input` shape.
 * @see {@link GetImagePipelineCommandOutput} for command's `response` shape.
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
 * @example Get the details of an image pipeline
 * ```javascript
 * // The following example retrieves an image pipeline that builds a new image every Sunday, including the image tests configuration and schedule start condition defaults that Image Builder applied at creation.
 * const input = {
 *   imagePipelineArn: "arn:aws:imagebuilder:us-west-2:111122223333:image-pipeline/my-example-pipeline"
 * };
 * const command = new GetImagePipelineCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   imagePipeline: {
 *     arn: "arn:aws:imagebuilder:us-west-2:111122223333:image-pipeline/my-example-pipeline",
 *     dateCreated: "2026-09-09T19:38:26.574Z",
 *     dateUpdated: "2026-09-09T19:38:26.574Z",
 *     description: "Builds an Amazon Linux 2023 image every Sunday",
 *     enhancedImageMetadataEnabled: true,
 *     imageRecipeArn: "arn:aws:imagebuilder:us-west-2:111122223333:image-recipe/my-example-recipe/1.0.0",
 *     imageTestsConfiguration: {
 *       imageTestsEnabled: true,
 *       timeoutMinutes: 720
 *     },
 *     infrastructureConfigurationArn: "arn:aws:imagebuilder:us-west-2:111122223333:infrastructure-configuration/my-example-infrastructure",
 *     name: "my-example-pipeline",
 *     platform: "Linux",
 *     schedule: {
 *       pipelineExecutionStartCondition: "EXPRESSION_MATCH_AND_DEPENDENCY_UPDATES_AVAILABLE",
 *       scheduleExpression: "cron(0 0 ? * SUN *)"
 *     },
 *     status: "ENABLED"
 *   },
 *   requestId: "b7e58d62-36dc-43a5-87ff-546e04cdabf1"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetImagePipelineCommand extends command<GetImagePipelineCommandInput, GetImagePipelineCommandOutput>(
  _ep0,
  _mw0,
  "GetImagePipeline",
  GetImagePipeline$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetImagePipelineRequest;
      output: GetImagePipelineResponse;
    };
    sdk: {
      input: GetImagePipelineCommandInput;
      output: GetImagePipelineCommandOutput;
    };
  };
}
