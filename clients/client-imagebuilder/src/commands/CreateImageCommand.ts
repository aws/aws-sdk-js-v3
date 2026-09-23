// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateImageRequest, CreateImageResponse } from "../models/models_0";
import { CreateImage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateImageCommand}.
 */
export interface CreateImageCommandInput extends CreateImageRequest {}
/**
 * @public
 *
 * The output of {@link CreateImageCommand}.
 */
export interface CreateImageCommandOutput extends CreateImageResponse, __MetadataBearer {}

/**
 * <p>Creates a new image along with all configured output resources defined in the
 * 			distribution configuration. You must specify exactly one recipe for your image, using
 * 			either a <code>containerRecipeArn</code> or an <code>imageRecipeArn</code>.</p>
 *          <p>The response returns as soon as Image Builder creates the new image resource.
 * 			The image build process runs asynchronously. To check its progress, call
 * 			<a href="https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_GetImage.html">GetImage</a> and check the image status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, CreateImageCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, CreateImageCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * // import type { ImagebuilderClientConfig } from "@aws-sdk/client-imagebuilder";
 * const config = {}; // type is ImagebuilderClientConfig
 * const client = new ImagebuilderClient(config);
 * const input = { // CreateImageRequest
 *   imageRecipeArn: "STRING_VALUE",
 *   containerRecipeArn: "STRING_VALUE",
 *   distributionConfigurationArn: "STRING_VALUE",
 *   infrastructureConfigurationArn: "STRING_VALUE", // required
 *   imageTestsConfiguration: { // ImageTestsConfiguration
 *     imageTestsEnabled: true || false,
 *     timeoutMinutes: Number("int"),
 *   },
 *   enhancedImageMetadataEnabled: true || false,
 *   tags: { // TagMap
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
 *   loggingConfiguration: { // ImageLoggingConfiguration
 *     logGroupName: "STRING_VALUE",
 *   },
 * };
 * const command = new CreateImageCommand(input);
 * const response = await client.send(command);
 * // { // CreateImageResponse
 * //   requestId: "STRING_VALUE",
 * //   clientToken: "STRING_VALUE",
 * //   imageBuildVersionArn: "STRING_VALUE",
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
 * @param CreateImageCommandInput - {@link CreateImageCommandInput}
 * @returns {@link CreateImageCommandOutput}
 * @see {@link CreateImageCommandInput} for command's `input` shape.
 * @see {@link CreateImageCommandOutput} for command's `response` shape.
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
 * @example Create an image
 * ```javascript
 * // The following example creates a new image from the specified image recipe and infrastructure configuration.
 * const input = {
 *   clientToken: "a1b2c3d4-5678-90ab-cdef-EXAMPLEeeeee",
 *   imageRecipeArn: "arn:aws:imagebuilder:us-west-2:111122223333:image-recipe/my-example-recipe/1.0.0",
 *   infrastructureConfigurationArn: "arn:aws:imagebuilder:us-west-2:111122223333:infrastructure-configuration/my-example-infrastructure"
 * };
 * const command = new CreateImageCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   clientToken: "a1b2c3d4-5678-90ab-cdef-EXAMPLEeeeee",
 *   imageBuildVersionArn: "arn:aws:imagebuilder:us-west-2:111122223333:image/my-example-recipe/1.0.0/1",
 *   latestVersionReferences: {
 *     latestMajorVersionArn: "arn:aws:imagebuilder:us-west-2:111122223333:image/my-example-recipe/1.x.x",
 *     latestMinorVersionArn: "arn:aws:imagebuilder:us-west-2:111122223333:image/my-example-recipe/1.0.x",
 *     latestPatchVersionArn: "arn:aws:imagebuilder:us-west-2:111122223333:image/my-example-recipe/1.0.0",
 *     latestVersionArn: "arn:aws:imagebuilder:us-west-2:111122223333:image/my-example-recipe/x.x.x"
 *   },
 *   requestId: "62e9b43f-a9fd-4272-89fb-ce6235d07ab4"
 * }
 * *\/
 * ```
 *
 * @example Create an image with custom build and parallel test workflows
 * ```javascript
 * // The following example creates an image that uses your custom build and test workflows. It uses the Image Builder service-linked role as the execution role. Both test workflows are in the same parallel group, so they can run at the same time after the build workflow completes.
 * const input = {
 *   clientToken: "a1b2c3d4-5678-90ab-cdef-EXAMPLE01234",
 *   executionRole: "arn:aws:iam::111122223333:role/aws-service-role/imagebuilder.amazonaws.com/AWSServiceRoleForImageBuilder",
 *   imageRecipeArn: "arn:aws:imagebuilder:us-west-2:111122223333:image-recipe/my-example-recipe/1.0.0",
 *   infrastructureConfigurationArn: "arn:aws:imagebuilder:us-west-2:111122223333:infrastructure-configuration/my-example-infrastructure",
 *   workflows: [
 *     {
 *       workflowArn: "arn:aws:imagebuilder:us-west-2:111122223333:workflow/build/my-example-workflow/1.0.0/1"
 *     },
 *     {
 *       parallelGroup: "post-build-tests",
 *       workflowArn: "arn:aws:imagebuilder:us-west-2:111122223333:workflow/test/my-example-integration-tests/1.0.0/1"
 *     },
 *     {
 *       parallelGroup: "post-build-tests",
 *       workflowArn: "arn:aws:imagebuilder:us-west-2:111122223333:workflow/test/my-example-compliance-tests/1.0.0/1"
 *     }
 *   ]
 * };
 * const command = new CreateImageCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   clientToken: "a1b2c3d4-5678-90ab-cdef-EXAMPLE01234",
 *   imageBuildVersionArn: "arn:aws:imagebuilder:us-west-2:111122223333:image/my-example-recipe/1.0.0/1",
 *   latestVersionReferences: {
 *     latestMajorVersionArn: "arn:aws:imagebuilder:us-west-2:111122223333:image/my-example-recipe/1.x.x",
 *     latestMinorVersionArn: "arn:aws:imagebuilder:us-west-2:111122223333:image/my-example-recipe/1.0.x",
 *     latestPatchVersionArn: "arn:aws:imagebuilder:us-west-2:111122223333:image/my-example-recipe/1.0.0",
 *     latestVersionArn: "arn:aws:imagebuilder:us-west-2:111122223333:image/my-example-recipe/x.x.x"
 *   },
 *   requestId: "359f18b1-814f-4857-987f-924214970897"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateImageCommand extends command<CreateImageCommandInput, CreateImageCommandOutput>(
  _ep0,
  _mw0,
  "CreateImage",
  CreateImage$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateImageRequest;
      output: CreateImageResponse;
    };
    sdk: {
      input: CreateImageCommandInput;
      output: CreateImageCommandOutput;
    };
  };
}
