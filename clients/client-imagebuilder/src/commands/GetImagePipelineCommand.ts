// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import type { GetImagePipelineRequest, GetImagePipelineResponse } from "../models/models_0";
import { GetImagePipeline$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Gets an image pipeline.</p>
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
 *  <p>You have exceeded the permitted request rate for the specific operation.</p>
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action, such as using an action or
 * 			resource on behalf of a user that doesn't have permissions to use the action or
 * 			resource, or specifying an invalid resource identifier.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>You are not authorized to perform the requested operation.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>You have requested an action that that the service doesn't support.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>This exception is thrown when the service encounters an unrecoverable
 * 			exception.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is unable to process your request at this time.</p>
 *
 * @throws {@link ImagebuilderServiceException}
 * <p>Base exception class for all service exceptions from Imagebuilder service.</p>
 *
 *
 * @public
 */
export class GetImagePipelineCommand extends $Command
  .classBuilder<
    GetImagePipelineCommandInput,
    GetImagePipelineCommandOutput,
    ImagebuilderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ImagebuilderClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("imagebuilder", "GetImagePipeline", {})
  .n("ImagebuilderClient", "GetImagePipelineCommand")
  .sc(GetImagePipeline$)
  .build() {
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
