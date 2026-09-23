// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateImagePipelineRequest, UpdateImagePipelineResponse } from "../models/models_0";
import { UpdateImagePipeline$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * <p>Updates an image pipeline. Use image pipelines to automate the creation and
 * 			distribution of images. You must specify exactly one recipe for your image, using either
 * 			a <code>containerRecipeArn</code> or an <code>imageRecipeArn</code>. The
 * 			recipe must be the same type, image or container, as the pipeline's current
 * 			recipe.</p>
 *          <note>
 *             <p>UpdateImagePipeline does not support selective updates. The request
 * 				replaces the pipeline's entire configuration, so include every setting
 * 				that you want to keep. Any optional property that you omit is removed
 * 				or reset to its default.</p>
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
 *     autoDisablePolicy: { // AutoDisablePolicy
 *       failureCount: Number("int"), // required
 *     },
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
 *   loggingConfiguration: { // PipelineLoggingConfiguration
 *     imageLogGroupName: "STRING_VALUE",
 *     pipelineLogGroupName: "STRING_VALUE",
 *   },
 *   executionRole: "STRING_VALUE",
 *   imageTags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
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
 * @throws {@link IdempotentParameterMismatchException} (client fault)
 *  <p>You have specified a client token for an operation using parameter values that differ
 * 			from a previous request that used the same client token.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is malformed or otherwise invalid. Verify the request and try
 * 			again.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The resource that you are trying to operate on is currently in use. Review the message
 * 			details and retry later.</p>
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
 * @example Update an image pipeline
 * ```javascript
 * // The following example changes the pipeline's schedule to build every day at 6:00 AM UTC.
 * const input = {
 *   clientToken: "a1b2c3d4-5678-90ab-cdef-EXAMPLEddddd",
 *   imagePipelineArn: "arn:aws:imagebuilder:us-west-2:111122223333:image-pipeline/my-example-pipeline",
 *   imageRecipeArn: "arn:aws:imagebuilder:us-west-2:111122223333:image-recipe/my-example-recipe/1.0.0",
 *   infrastructureConfigurationArn: "arn:aws:imagebuilder:us-west-2:111122223333:infrastructure-configuration/my-example-infrastructure",
 *   schedule: {
 *     pipelineExecutionStartCondition: "EXPRESSION_MATCH_AND_DEPENDENCY_UPDATES_AVAILABLE",
 *     scheduleExpression: "cron(0 6 * * ? *)"
 *   },
 *   status: "ENABLED"
 * };
 * const command = new UpdateImagePipelineCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   imagePipelineArn: "arn:aws:imagebuilder:us-west-2:111122223333:image-pipeline/my-example-pipeline",
 *   requestId: "7a414b2d-e462-4850-ae7a-fe25a1223e0f"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateImagePipelineCommand extends command<UpdateImagePipelineCommandInput, UpdateImagePipelineCommandOutput>(
  _ep0,
  _mw0,
  "UpdateImagePipeline",
  UpdateImagePipeline$
) {
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
