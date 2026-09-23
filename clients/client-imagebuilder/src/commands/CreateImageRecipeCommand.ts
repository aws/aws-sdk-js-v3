// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateImageRecipeRequest, CreateImageRecipeResponse } from "../models/models_0";
import { CreateImageRecipe$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateImageRecipeCommand}.
 */
export interface CreateImageRecipeCommandInput extends CreateImageRecipeRequest {}
/**
 * @public
 *
 * The output of {@link CreateImageRecipeCommand}.
 */
export interface CreateImageRecipeCommandOutput extends CreateImageRecipeResponse, __MetadataBearer {}

/**
 * <p>Creates a new image recipe. Image recipes define how images are configured, tested,
 * 			and assessed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, CreateImageRecipeCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, CreateImageRecipeCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * // import type { ImagebuilderClientConfig } from "@aws-sdk/client-imagebuilder";
 * const config = {}; // type is ImagebuilderClientConfig
 * const client = new ImagebuilderClient(config);
 * const input = { // CreateImageRecipeRequest
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
 *   parentImage: "STRING_VALUE", // required
 *   blockDeviceMappings: [ // InstanceBlockDeviceMappings
 *     { // InstanceBlockDeviceMapping
 *       deviceName: "STRING_VALUE",
 *       ebs: { // EbsInstanceBlockDeviceSpecification
 *         encrypted: true || false,
 *         deleteOnTermination: true || false,
 *         iops: Number("int"),
 *         kmsKeyId: "STRING_VALUE",
 *         snapshotId: "STRING_VALUE",
 *         volumeSize: Number("int"),
 *         volumeType: "standard" || "io1" || "io2" || "gp2" || "gp3" || "sc1" || "st1",
 *         throughput: Number("int"),
 *       },
 *       virtualName: "STRING_VALUE",
 *       noDevice: "STRING_VALUE",
 *     },
 *   ],
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   workingDirectory: "STRING_VALUE",
 *   additionalInstanceConfiguration: { // AdditionalInstanceConfiguration
 *     systemsManagerAgent: { // SystemsManagerAgent
 *       uninstallAfterBuild: true || false,
 *     },
 *     userDataOverride: "STRING_VALUE",
 *   },
 *   amiTags: {
 *     "<keys>": "STRING_VALUE",
 *   },
 *   amiWatermarks: [ // AmiWatermarksList
 *     "STRING_VALUE",
 *   ],
 *   clientToken: "STRING_VALUE", // required
 *   dryRun: true || false,
 * };
 * const command = new CreateImageRecipeCommand(input);
 * const response = await client.send(command);
 * // { // CreateImageRecipeResponse
 * //   requestId: "STRING_VALUE",
 * //   clientToken: "STRING_VALUE",
 * //   imageRecipeArn: "STRING_VALUE",
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
 * @param CreateImageRecipeCommandInput - {@link CreateImageRecipeCommandInput}
 * @returns {@link CreateImageRecipeCommandOutput}
 * @see {@link CreateImageRecipeCommandInput} for command's `input` shape.
 * @see {@link CreateImageRecipeCommandOutput} for command's `response` shape.
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
 * @example Create an image recipe
 * ```javascript
 * // The following example creates an image recipe that applies a custom component on top of the latest Amazon Linux 2023 base image.
 * const input = {
 *   clientToken: "a1b2c3d4-5678-90ab-cdef-EXAMPLE22222",
 *   components: [
 *     {
 *       componentArn: "arn:aws:imagebuilder:us-west-2:111122223333:component/my-example-component/1.0.0/1"
 *     }
 *   ],
 *   description: "An image recipe that installs my application on Amazon Linux 2023",
 *   name: "my-example-recipe",
 *   parentImage: "arn:aws:imagebuilder:us-west-2:aws:image/amazon-linux-2023-x86/x.x.x",
 *   semanticVersion: "1.0.0"
 * };
 * const command = new CreateImageRecipeCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   clientToken: "a1b2c3d4-5678-90ab-cdef-EXAMPLE22222",
 *   imageRecipeArn: "arn:aws:imagebuilder:us-west-2:111122223333:image-recipe/my-example-recipe/1.0.0",
 *   latestVersionReferences: {
 *     latestMajorVersionArn: "arn:aws:imagebuilder:us-west-2:111122223333:image-recipe/my-example-recipe/1.x.x",
 *     latestMinorVersionArn: "arn:aws:imagebuilder:us-west-2:111122223333:image-recipe/my-example-recipe/1.0.x",
 *     latestPatchVersionArn: "arn:aws:imagebuilder:us-west-2:111122223333:image-recipe/my-example-recipe/1.0.0",
 *     latestVersionArn: "arn:aws:imagebuilder:us-west-2:111122223333:image-recipe/my-example-recipe/x.x.x"
 *   },
 *   requestId: "89f4af2f-4f28-45e6-a9d8-abeba591df6a"
 * }
 * *\/
 * ```
 *
 * @example Create an image recipe with component parameters and block device mappings
 * ```javascript
 * // The following example creates an image recipe that configures its components and storage. The AppVersion component parameter selects the application version to install. The block device mapping increases the root volume to an encrypted 30 GiB gp3 volume.
 * const input = {
 *   blockDeviceMappings: [
 *     {
 *       deviceName: "/dev/xvda",
 *       ebs: {
 *         deleteOnTermination: true,
 *         encrypted: true,
 *         volumeSize: 30,
 *         volumeType: "gp3"
 *       }
 *     }
 *   ],
 *   clientToken: "a1b2c3d4-5678-90ab-cdef-EXAMPLE20202",
 *   components: [
 *     {
 *       componentArn: "arn:aws:imagebuilder:us-west-2:111122223333:component/my-example-parameterized-component/1.0.0/1",
 *       parameters: [
 *         {
 *           name: "AppVersion",
 *           value: [
 *             "2.5.0"
 *           ]
 *         }
 *       ]
 *     }
 *   ],
 *   description: "Installs a specific version of my application on Amazon Linux 2023 with a larger encrypted root volume",
 *   name: "my-example-recipe",
 *   parentImage: "arn:aws:imagebuilder:us-west-2:aws:image/amazon-linux-2023-x86/x.x.x",
 *   semanticVersion: "1.1.0"
 * };
 * const command = new CreateImageRecipeCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   clientToken: "a1b2c3d4-5678-90ab-cdef-EXAMPLE20202",
 *   imageRecipeArn: "arn:aws:imagebuilder:us-west-2:111122223333:image-recipe/my-example-recipe/1.1.0",
 *   latestVersionReferences: {
 *     latestMajorVersionArn: "arn:aws:imagebuilder:us-west-2:111122223333:image-recipe/my-example-recipe/1.x.x",
 *     latestMinorVersionArn: "arn:aws:imagebuilder:us-west-2:111122223333:image-recipe/my-example-recipe/1.1.x",
 *     latestPatchVersionArn: "arn:aws:imagebuilder:us-west-2:111122223333:image-recipe/my-example-recipe/1.1.0",
 *     latestVersionArn: "arn:aws:imagebuilder:us-west-2:111122223333:image-recipe/my-example-recipe/x.x.x"
 *   },
 *   requestId: "e3bdc054-d12e-4578-a847-68a18da724ca"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateImageRecipeCommand extends command<CreateImageRecipeCommandInput, CreateImageRecipeCommandOutput>(
  _ep0,
  _mw0,
  "CreateImageRecipe",
  CreateImageRecipe$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateImageRecipeRequest;
      output: CreateImageRecipeResponse;
    };
    sdk: {
      input: CreateImageRecipeCommandInput;
      output: CreateImageRecipeCommandOutput;
    };
  };
}
