// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListImagePipelinesRequest, ListImagePipelinesResponse } from "../models/models_0";
import { ListImagePipelines$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListImagePipelinesCommand}.
 */
export interface ListImagePipelinesCommandInput extends ListImagePipelinesRequest {}
/**
 * @public
 *
 * The output of {@link ListImagePipelinesCommand}.
 */
export interface ListImagePipelinesCommandOutput extends ListImagePipelinesResponse, __MetadataBearer {}

/**
 * <p>Returns a list of image pipelines.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, ListImagePipelinesCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, ListImagePipelinesCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * // import type { ImagebuilderClientConfig } from "@aws-sdk/client-imagebuilder";
 * const config = {}; // type is ImagebuilderClientConfig
 * const client = new ImagebuilderClient(config);
 * const input = { // ListImagePipelinesRequest
 *   filters: [ // FilterList
 *     { // Filter
 *       name: "STRING_VALUE",
 *       values: [ // FilterValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListImagePipelinesCommand(input);
 * const response = await client.send(command);
 * // { // ListImagePipelinesResponse
 * //   requestId: "STRING_VALUE",
 * //   imagePipelineList: [ // ImagePipelineList
 * //     { // ImagePipeline
 * //       arn: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       platform: "Windows" || "Linux" || "macOS",
 * //       enhancedImageMetadataEnabled: true || false,
 * //       imageRecipeArn: "STRING_VALUE",
 * //       containerRecipeArn: "STRING_VALUE",
 * //       infrastructureConfigurationArn: "STRING_VALUE",
 * //       distributionConfigurationArn: "STRING_VALUE",
 * //       imageTestsConfiguration: { // ImageTestsConfiguration
 * //         imageTestsEnabled: true || false,
 * //         timeoutMinutes: Number("int"),
 * //       },
 * //       schedule: { // Schedule
 * //         scheduleExpression: "STRING_VALUE",
 * //         timezone: "STRING_VALUE",
 * //         pipelineExecutionStartCondition: "EXPRESSION_MATCH_ONLY" || "EXPRESSION_MATCH_AND_DEPENDENCY_UPDATES_AVAILABLE",
 * //         autoDisablePolicy: { // AutoDisablePolicy
 * //           failureCount: Number("int"), // required
 * //         },
 * //       },
 * //       status: "DISABLED" || "ENABLED",
 * //       dateCreated: "STRING_VALUE",
 * //       dateUpdated: "STRING_VALUE",
 * //       dateLastRun: "STRING_VALUE",
 * //       lastRunStatus: "PENDING" || "CREATING" || "BUILDING" || "TESTING" || "DISTRIBUTING" || "INTEGRATING" || "AVAILABLE" || "CANCELLED" || "FAILED" || "DEPRECATED" || "DELETED" || "DISABLED",
 * //       dateNextRun: "STRING_VALUE",
 * //       tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       imageScanningConfiguration: { // ImageScanningConfiguration
 * //         imageScanningEnabled: true || false,
 * //         ecrConfiguration: { // EcrConfiguration
 * //           repositoryName: "STRING_VALUE",
 * //           containerTags: [ // StringList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //       imageTags: {
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       executionRole: "STRING_VALUE",
 * //       workflows: [ // WorkflowConfigurationList
 * //         { // WorkflowConfiguration
 * //           workflowArn: "STRING_VALUE", // required
 * //           parameters: [ // WorkflowParameterList
 * //             { // WorkflowParameter
 * //               name: "STRING_VALUE", // required
 * //               value: [ // WorkflowParameterValueList // required
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //           ],
 * //           parallelGroup: "STRING_VALUE",
 * //           onFailure: "CONTINUE" || "ABORT",
 * //         },
 * //       ],
 * //       loggingConfiguration: { // PipelineLoggingConfiguration
 * //         imageLogGroupName: "STRING_VALUE",
 * //         pipelineLogGroupName: "STRING_VALUE",
 * //       },
 * //       consecutiveFailures: Number("int"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListImagePipelinesCommandInput - {@link ListImagePipelinesCommandInput}
 * @returns {@link ListImagePipelinesCommandOutput}
 * @see {@link ListImagePipelinesCommandInput} for command's `input` shape.
 * @see {@link ListImagePipelinesCommandOutput} for command's `response` shape.
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
 * @example List image pipelines filtered by name
 * ```javascript
 * // The following example lists the image pipelines in your account, using a filter to match a specific pipeline name.
 * const input = {
 *   filters: [
 *     {
 *       name: "name",
 *       values: [
 *         "my-example-pipeline"
 *       ]
 *     }
 *   ]
 * };
 * const command = new ListImagePipelinesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   imagePipelineList: [
 *     {
 *       arn: "arn:aws:imagebuilder:us-west-2:111122223333:image-pipeline/my-example-pipeline",
 *       dateCreated: "2026-09-09T19:52:05.146Z",
 *       dateUpdated: "2026-09-09T19:52:05.146Z",
 *       description: "Builds a new version of my image every Sunday",
 *       enhancedImageMetadataEnabled: true,
 *       imageRecipeArn: "arn:aws:imagebuilder:us-west-2:111122223333:image-recipe/my-example-recipe/1.0.0",
 *       imageTestsConfiguration: {
 *         imageTestsEnabled: true,
 *         timeoutMinutes: 720
 *       },
 *       infrastructureConfigurationArn: "arn:aws:imagebuilder:us-west-2:111122223333:infrastructure-configuration/my-example-infrastructure",
 *       name: "my-example-pipeline",
 *       platform: "Linux",
 *       schedule: {
 *         pipelineExecutionStartCondition: "EXPRESSION_MATCH_AND_DEPENDENCY_UPDATES_AVAILABLE",
 *         scheduleExpression: "cron(0 9 ? * SUN *)"
 *       },
 *       status: "ENABLED"
 *     }
 *   ],
 *   requestId: "b818f3f9-b851-4de7-95f3-8fabed4e1841"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListImagePipelinesCommand extends command<ListImagePipelinesCommandInput, ListImagePipelinesCommandOutput>(
  _ep0,
  _mw0,
  "ListImagePipelines",
  ListImagePipelines$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListImagePipelinesRequest;
      output: ListImagePipelinesResponse;
    };
    sdk: {
      input: ListImagePipelinesCommandInput;
      output: ListImagePipelinesCommandOutput;
    };
  };
}
