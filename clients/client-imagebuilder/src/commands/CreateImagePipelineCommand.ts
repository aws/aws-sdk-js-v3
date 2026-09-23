// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateImagePipelineRequest, CreateImagePipelineResponse } from "../models/models_0";
import { CreateImagePipeline$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateImagePipelineCommand}.
 */
export interface CreateImagePipelineCommandInput extends CreateImagePipelineRequest {}
/**
 * @public
 *
 * The output of {@link CreateImagePipelineCommand}.
 */
export interface CreateImagePipelineCommandOutput extends CreateImagePipelineResponse, __MetadataBearer {}

/**
 * <p>Creates a new image pipeline. Use image pipelines to automate the creation and
 * 			distribution of images. You must specify exactly one recipe for the pipeline,
 * 			using either a <code>containerRecipeArn</code> or an
 * 			<code>imageRecipeArn</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, CreateImagePipelineCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, CreateImagePipelineCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * // import type { ImagebuilderClientConfig } from "@aws-sdk/client-imagebuilder";
 * const config = {}; // type is ImagebuilderClientConfig
 * const client = new ImagebuilderClient(config);
 * const input = { // CreateImagePipelineRequest
 *   name: "STRING_VALUE", // required
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
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   imageTags: {
 *     "<keys>": "STRING_VALUE",
 *   },
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
 *   loggingConfiguration: { // PipelineLoggingConfiguration
 *     imageLogGroupName: "STRING_VALUE",
 *     pipelineLogGroupName: "STRING_VALUE",
 *   },
 *   dryRun: true || false,
 * };
 * const command = new CreateImagePipelineCommand(input);
 * const response = await client.send(command);
 * // { // CreateImagePipelineResponse
 * //   requestId: "STRING_VALUE",
 * //   clientToken: "STRING_VALUE",
 * //   imagePipelineArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateImagePipelineCommandInput - {@link CreateImagePipelineCommandInput}
 * @returns {@link CreateImagePipelineCommandOutput}
 * @see {@link CreateImagePipelineCommandInput} for command's `input` shape.
 * @see {@link CreateImagePipelineCommandOutput} for command's `response` shape.
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
 * @throws {@link DryRunOperationException} (client fault)
 *  <p>The dry run operation of the resource was successful, and no resources or mutations were actually performed due to the dry run flag in the request.</p>
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
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The resource that you are trying to create already exists.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The resource that you are trying to operate on is currently in use. Review the message
 * 			details and retry later.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An internal server error occurred while Image Builder processed the request.
 * 			Retrying the request may succeed.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have exceeded the number of permitted resources or operations for this service.
 * 			For service quotas, see <a href="https://docs.aws.amazon.com/general/latest/gr/imagebuilder.html#limits_imagebuilder">EC2 Image Builder endpoints and
 * 				quotas</a>.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is unable to process your request at this time.</p>
 *
 * @throws {@link ImagebuilderServiceException}
 * <p>Base exception class for all service exceptions from Imagebuilder service.</p>
 *
 *
 * @example Create an image pipeline
 * ```javascript
 * // The following example creates a pipeline that builds a new image version every Sunday at 9:00 AM UTC, if the base image or components have updates.
 * const input = {
 *   clientToken: "a1b2c3d4-5678-90ab-cdef-EXAMPLE55555",
 *   description: "Builds a new version of my image every Sunday",
 *   distributionConfigurationArn: "arn:aws:imagebuilder:us-west-2:111122223333:distribution-configuration/my-example-distribution",
 *   imageRecipeArn: "arn:aws:imagebuilder:us-west-2:111122223333:image-recipe/my-example-recipe/1.0.0",
 *   infrastructureConfigurationArn: "arn:aws:imagebuilder:us-west-2:111122223333:infrastructure-configuration/my-example-infrastructure",
 *   name: "my-example-pipeline",
 *   schedule: {
 *     pipelineExecutionStartCondition: "EXPRESSION_MATCH_AND_DEPENDENCY_UPDATES_AVAILABLE",
 *     scheduleExpression: "cron(0 9 ? * SUN *)"
 *   },
 *   status: "ENABLED"
 * };
 * const command = new CreateImagePipelineCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   clientToken: "a1b2c3d4-5678-90ab-cdef-EXAMPLE55555",
 *   imagePipelineArn: "arn:aws:imagebuilder:us-west-2:111122223333:image-pipeline/my-example-pipeline",
 *   requestId: "db0a9329-35ef-4b53-98d0-a34385e44e28"
 * }
 * *\/
 * ```
 *
 * @example Create an image pipeline with scanning, custom workflows, and an auto-disable policy
 * ```javascript
 * // The following example creates a pipeline that uses your custom build workflow and enables image scanning. The schedule evaluates its cron expression in the America/Los_Angeles time zone. The auto-disable policy disables the pipeline after 3 consecutive failed scheduled builds.
 * const input = {
 *   clientToken: "a1b2c3d4-5678-90ab-cdef-EXAMPLE30303",
 *   description: "Builds a scanned image with my custom build workflow on Sunday mornings when dependency updates are available",
 *   distributionConfigurationArn: "arn:aws:imagebuilder:us-west-2:111122223333:distribution-configuration/my-example-distribution",
 *   executionRole: "arn:aws:iam::111122223333:role/aws-service-role/imagebuilder.amazonaws.com/AWSServiceRoleForImageBuilder",
 *   imageRecipeArn: "arn:aws:imagebuilder:us-west-2:111122223333:image-recipe/my-example-recipe/1.1.0",
 *   imageScanningConfiguration: {
 *     imageScanningEnabled: true
 *   },
 *   infrastructureConfigurationArn: "arn:aws:imagebuilder:us-west-2:111122223333:infrastructure-configuration/my-example-infrastructure",
 *   name: "my-example-pipeline",
 *   schedule: {
 *     autoDisablePolicy: {
 *       failureCount: 3
 *     },
 *     pipelineExecutionStartCondition: "EXPRESSION_MATCH_AND_DEPENDENCY_UPDATES_AVAILABLE",
 *     scheduleExpression: "cron(0 9 ? * SUN *)",
 *     timezone: "America/Los_Angeles"
 *   },
 *   status: "ENABLED",
 *   workflows: [
 *     {
 *       workflowArn: "arn:aws:imagebuilder:us-west-2:111122223333:workflow/build/my-example-workflow/1.0.0/1"
 *     }
 *   ]
 * };
 * const command = new CreateImagePipelineCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   clientToken: "a1b2c3d4-5678-90ab-cdef-EXAMPLE30303",
 *   imagePipelineArn: "arn:aws:imagebuilder:us-west-2:111122223333:image-pipeline/my-example-pipeline",
 *   requestId: "f8da3ec9-4b76-4aa3-817a-c35a90f59dca"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateImagePipelineCommand extends command<CreateImagePipelineCommandInput, CreateImagePipelineCommandOutput>(
  _ep0,
  _mw0,
  "CreateImagePipeline",
  CreateImagePipeline$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateImagePipelineRequest;
      output: CreateImagePipelineResponse;
    };
    sdk: {
      input: CreateImagePipelineCommandInput;
      output: CreateImagePipelineCommandOutput;
    };
  };
}
