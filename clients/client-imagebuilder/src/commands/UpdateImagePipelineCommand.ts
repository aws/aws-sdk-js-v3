// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { UpdateImagePipelineRequest, UpdateImagePipelineResponse } from "../models/models_0";
import { UpdateImagePipeline } from "../schemas/schemas_7_Image";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateImagePipelineCommand}.
 */
export interface UpdateImagePipelineCommandInput extends UpdateImagePipelineRequest {}
/**
 * @public
 *
 * The output of {@link UpdateImagePipelineCommand}.
 */
export interface UpdateImagePipelineCommandOutput extends UpdateImagePipelineResponse, __MetadataBearer {}

/**
 * <p>Updates an image pipeline. Image pipelines enable you to automate the creation and
 * 			distribution of images. You must specify exactly one recipe for your image, using either
 * 			a <code>containerRecipeArn</code> or an <code>imageRecipeArn</code>.</p>
 *          <note>
 *             <p>UpdateImagePipeline does not support selective updates for the pipeline. You must
 * 				specify all of the required properties in the update request, not just the
 * 				properties that have changed.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, UpdateImagePipelineCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, UpdateImagePipelineCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * // import type { ImagebuilderClientConfig } from "@aws-sdk/client-imagebuilder";
 * const config = {}; // type is ImagebuilderClientConfig
 * const client = new ImagebuilderClient(config);
 * const input = { // UpdateImagePipelineRequest
 *   imagePipelineArn: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   imageRecipeArn: "STRING_VALUE",
 *   containerRecipeArn: "STRING_VALUE",
 *   infrastructureConfigurationArn: "STRING_VALUE", // required
 *   distributionConfigurationArn: "STRING_VALUE",
 *   imageTestsConfiguration: { // ImageTestsConfiguration
 *     imageTestsEnabled: true || false,
 *     timeoutMinutes: Number("int"),
 *   },
 *   enhancedImageMetadataEnabled: true || false,
 *   schedule: { // Schedule
 *     scheduleExpression: "STRING_VALUE",
 *     timezone: "STRING_VALUE",
 *     pipelineExecutionStartCondition: "EXPRESSION_MATCH_ONLY" || "EXPRESSION_MATCH_AND_DEPENDENCY_UPDATES_AVAILABLE",
 *   },
 *   status: "DISABLED" || "ENABLED",
 *   clientToken: "STRING_VALUE", // required
 *   imageScanningConfiguration: { // ImageScanningConfiguration
 *     imageScanningEnabled: true || false,
 *     ecrConfiguration: { // EcrConfiguration
 *       repositoryName: "STRING_VALUE",
 *       containerTags: [ // StringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 *   workflows: [ // WorkflowConfigurationList
 *     { // WorkflowConfiguration
 *       workflowArn: "STRING_VALUE", // required
 *       parameters: [ // WorkflowParameterList
 *         { // WorkflowParameter
 *           name: "STRING_VALUE", // required
 *           value: [ // WorkflowParameterValueList // required
 *             "STRING_VALUE",
 *           ],
 *         },
 *       ],
 *       parallelGroup: "STRING_VALUE",
 *       onFailure: "CONTINUE" || "ABORT",
 *     },
 *   ],
 *   executionRole: "STRING_VALUE",
 * };
 * const command = new UpdateImagePipelineCommand(input);
 * const response = await client.send(command);
 * // { // UpdateImagePipelineResponse
 * //   requestId: "STRING_VALUE",
 * //   clientToken: "STRING_VALUE",
 * //   imagePipelineArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateImagePipelineCommandInput - {@link UpdateImagePipelineCommandInput}
 * @returns {@link UpdateImagePipelineCommandOutput}
 * @see {@link UpdateImagePipelineCommandInput} for command's `input` shape.
 * @see {@link UpdateImagePipelineCommandOutput} for command's `response` shape.
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
 * @throws {@link IdempotentParameterMismatchException} (client fault)
 *  <p>You have specified a client token for an operation using parameter values that differ
 * 			from a previous request that used the same client token.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>You have requested an action that that the service doesn't support.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The resource that you are trying to operate on is currently in use. Review the message
 * 			details and retry later.</p>
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
export class UpdateImagePipelineCommand extends $Command
  .classBuilder<
    UpdateImagePipelineCommandInput,
    UpdateImagePipelineCommandOutput,
    ImagebuilderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ImagebuilderClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("imagebuilder", "UpdateImagePipeline", {})
  .n("ImagebuilderClient", "UpdateImagePipelineCommand")
  .sc(UpdateImagePipeline)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateImagePipelineRequest;
      output: UpdateImagePipelineResponse;
    };
    sdk: {
      input: UpdateImagePipelineCommandInput;
      output: UpdateImagePipelineCommandOutput;
    };
  };
}
