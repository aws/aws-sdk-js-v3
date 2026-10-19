// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateContainerRecipeRequest, CreateContainerRecipeResponse } from "../models/models_0";
import { CreateContainerRecipe$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateContainerRecipeCommand}.
 */
export interface CreateContainerRecipeCommandInput extends CreateContainerRecipeRequest {}
/**
 * @public
 *
 * The output of {@link CreateContainerRecipeCommand}.
 */
export interface CreateContainerRecipeCommandOutput extends CreateContainerRecipeResponse, __MetadataBearer {}

/**
 * <p>Creates a new container recipe. Container recipes define how images are configured,
 * 			tested, and assessed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, CreateContainerRecipeCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, CreateContainerRecipeCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * // import type { ImagebuilderClientConfig } from "@aws-sdk/client-imagebuilder";
 * const config = {}; // type is ImagebuilderClientConfig
 * const client = new ImagebuilderClient(config);
 * const input = { // CreateContainerRecipeRequest
 *   containerType: "DOCKER", // required
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   semanticVersion: "STRING_VALUE", // required
 *   components: [ // ComponentConfigurationList
 *     { // ComponentConfiguration
 *       componentArn: "STRING_VALUE", // required
 *       parameters: [ // ComponentParameterList
 *         { // ComponentParameter
 *           name: "STRING_VALUE", // required
 *           value: [ // ComponentParameterValueList // required
 *             "STRING_VALUE",
 *           ],
 *         },
 *       ],
 *     },
 *   ],
 *   instanceConfiguration: { // InstanceConfiguration
 *     image: "STRING_VALUE",
 *     blockDeviceMappings: [ // InstanceBlockDeviceMappings
 *       { // InstanceBlockDeviceMapping
 *         deviceName: "STRING_VALUE",
 *         ebs: { // EbsInstanceBlockDeviceSpecification
 *           encrypted: true || false,
 *           deleteOnTermination: true || false,
 *           iops: Number("int"),
 *           kmsKeyId: "STRING_VALUE",
 *           snapshotId: "STRING_VALUE",
 *           volumeSize: Number("int"),
 *           volumeType: "standard" || "io1" || "io2" || "gp2" || "gp3" || "sc1" || "st1",
 *           throughput: Number("int"),
 *         },
 *         virtualName: "STRING_VALUE",
 *         noDevice: "STRING_VALUE",
 *       },
 *     ],
 *   },
 *   dockerfileTemplateData: "STRING_VALUE",
 *   dockerfileTemplateUri: "STRING_VALUE",
 *   platformOverride: "Windows" || "Linux" || "macOS",
 *   imageOsVersionOverride: "STRING_VALUE",
 *   parentImage: "STRING_VALUE", // required
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   workingDirectory: "STRING_VALUE",
 *   targetRepository: { // TargetContainerRepository
 *     service: "ECR", // required
 *     repositoryName: "STRING_VALUE", // required
 *   },
 *   kmsKeyId: "STRING_VALUE",
 *   clientToken: "STRING_VALUE", // required
 *   dryRun: true || false,
 * };
 * const command = new CreateContainerRecipeCommand(input);
 * const response = await client.send(command);
 * // { // CreateContainerRecipeResponse
 * //   requestId: "STRING_VALUE",
 * //   clientToken: "STRING_VALUE",
 * //   containerRecipeArn: "STRING_VALUE",
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
 * @param CreateContainerRecipeCommandInput - {@link CreateContainerRecipeCommandInput}
 * @returns {@link CreateContainerRecipeCommandOutput}
 * @see {@link CreateContainerRecipeCommandInput} for command's `input` shape.
 * @see {@link CreateContainerRecipeCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidVersionNumberException} (client fault)
 *  <p>Your version number is out of bounds or does not follow the required syntax.</p>
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
 * @example Create a container recipe with a custom build instance configuration
 * ```javascript
 * // The following example creates a container recipe that customizes the Amazon EC2 instance that builds the container image. The build instance launches from an Amazon ECS-optimized instance image and uses a 40 GiB gp3 volume.
 * const input = {
 *   clientToken: "a1b2c3d4-5678-90ab-cdef-EXAMPLE40404",
 *   components: [
 *     {
 *       componentArn: "arn:aws:imagebuilder:us-west-2:111122223333:component/my-example-container-component/1.0.0/1"
 *     }
 *   ],
 *   containerType: "DOCKER",
 *   description: "A container recipe that builds on an ECS-optimized instance image with a larger build volume",
 *   dockerfileTemplateData: "FROM {{{ imagebuilder:parentImage }}}
 * {{{ imagebuilder:environments }}}
 * {{{ imagebuilder:components }}}
 * ",
 *   instanceConfiguration: {
 *     blockDeviceMappings: [
 *       {
 *         deviceName: "/dev/xvda",
 *         ebs: {
 *           deleteOnTermination: true,
 *           volumeSize: 40,
 *           volumeType: "gp3"
 *         }
 *       }
 *     ],
 *     image: "ami-1234567890abcdef0"
 *   },
 *   name: "my-example-container-recipe",
 *   parentImage: "amazonlinux:latest",
 *   semanticVersion: "1.1.0",
 *   targetRepository: {
 *     repositoryName: "my-example-container-repo",
 *     service: "ECR"
 *   }
 * };
 * const command = new CreateContainerRecipeCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   clientToken: "a1b2c3d4-5678-90ab-cdef-EXAMPLE40404",
 *   containerRecipeArn: "arn:aws:imagebuilder:us-west-2:111122223333:container-recipe/my-example-container-recipe/1.1.0",
 *   latestVersionReferences: {
 *     latestMajorVersionArn: "arn:aws:imagebuilder:us-west-2:111122223333:container-recipe/my-example-container-recipe/1.x.x",
 *     latestMinorVersionArn: "arn:aws:imagebuilder:us-west-2:111122223333:container-recipe/my-example-container-recipe/1.1.x",
 *     latestPatchVersionArn: "arn:aws:imagebuilder:us-west-2:111122223333:container-recipe/my-example-container-recipe/1.1.0",
 *     latestVersionArn: "arn:aws:imagebuilder:us-west-2:111122223333:container-recipe/my-example-container-recipe/x.x.x"
 *   },
 *   requestId: "4b6fc7f3-5b6b-4086-858e-22d4c7f9a37f"
 * }
 * *\/
 * ```
 *
 * @example Create a container recipe with an inline Dockerfile template
 * ```javascript
 * // The following example creates a Docker container recipe that applies one build component, using the latest Amazon Linux container image as the parent and an existing ECR repository as the target.
 * const input = {
 *   clientToken: "a1b2c3d4-5678-90ab-cdef-EXAMPLE99999",
 *   components: [
 *     {
 *       componentArn: "arn:aws:imagebuilder:us-west-2:111122223333:component/my-example-container-component/1.0.0/1"
 *     }
 *   ],
 *   containerType: "DOCKER",
 *   dockerfileTemplateData: "FROM {{{ imagebuilder:parentImage }}}
 * {{{ imagebuilder:environments }}}
 * {{{ imagebuilder:components }}}
 * ",
 *   name: "my-example-container-recipe",
 *   parentImage: "amazonlinux:latest",
 *   semanticVersion: "1.0.0",
 *   targetRepository: {
 *     repositoryName: "my-example-container-repo",
 *     service: "ECR"
 *   }
 * };
 * const command = new CreateContainerRecipeCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   clientToken: "a1b2c3d4-5678-90ab-cdef-EXAMPLE99999",
 *   containerRecipeArn: "arn:aws:imagebuilder:us-west-2:111122223333:container-recipe/my-example-container-recipe/1.0.0",
 *   latestVersionReferences: {
 *     latestMajorVersionArn: "arn:aws:imagebuilder:us-west-2:111122223333:container-recipe/my-example-container-recipe/1.x.x",
 *     latestMinorVersionArn: "arn:aws:imagebuilder:us-west-2:111122223333:container-recipe/my-example-container-recipe/1.0.x",
 *     latestPatchVersionArn: "arn:aws:imagebuilder:us-west-2:111122223333:container-recipe/my-example-container-recipe/1.0.0",
 *     latestVersionArn: "arn:aws:imagebuilder:us-west-2:111122223333:container-recipe/my-example-container-recipe/x.x.x"
 *   },
 *   requestId: "20b16948-45a4-4b3a-9a17-d54779847365"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateContainerRecipeCommand extends command<CreateContainerRecipeCommandInput, CreateContainerRecipeCommandOutput>(
  _ep0,
  _mw0,
  "CreateContainerRecipe",
  CreateContainerRecipe$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateContainerRecipeRequest;
      output: CreateContainerRecipeResponse;
    };
    sdk: {
      input: CreateContainerRecipeCommandInput;
      output: CreateContainerRecipeCommandOutput;
    };
  };
}
