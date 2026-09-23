// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetContainerRecipeRequest, GetContainerRecipeResponse } from "../models/models_0";
import { GetContainerRecipe$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetContainerRecipeCommand}.
 */
export interface GetContainerRecipeCommandInput extends GetContainerRecipeRequest {}
/**
 * @public
 *
 * The output of {@link GetContainerRecipeCommand}.
 */
export interface GetContainerRecipeCommandOutput extends GetContainerRecipeResponse, __MetadataBearer {}

/**
 * <p>Retrieves a container recipe.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, GetContainerRecipeCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, GetContainerRecipeCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * // import type { ImagebuilderClientConfig } from "@aws-sdk/client-imagebuilder";
 * const config = {}; // type is ImagebuilderClientConfig
 * const client = new ImagebuilderClient(config);
 * const input = { // GetContainerRecipeRequest
 *   containerRecipeArn: "STRING_VALUE", // required
 * };
 * const command = new GetContainerRecipeCommand(input);
 * const response = await client.send(command);
 * // { // GetContainerRecipeResponse
 * //   requestId: "STRING_VALUE",
 * //   containerRecipe: { // ContainerRecipe
 * //     arn: "STRING_VALUE",
 * //     containerType: "DOCKER",
 * //     name: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     platform: "Windows" || "Linux" || "macOS",
 * //     owner: "STRING_VALUE",
 * //     version: "STRING_VALUE",
 * //     components: [ // ComponentConfigurationList
 * //       { // ComponentConfiguration
 * //         componentArn: "STRING_VALUE", // required
 * //         parameters: [ // ComponentParameterList
 * //           { // ComponentParameter
 * //             name: "STRING_VALUE", // required
 * //             value: [ // ComponentParameterValueList // required
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //     instanceConfiguration: { // InstanceConfiguration
 * //       image: "STRING_VALUE",
 * //       blockDeviceMappings: [ // InstanceBlockDeviceMappings
 * //         { // InstanceBlockDeviceMapping
 * //           deviceName: "STRING_VALUE",
 * //           ebs: { // EbsInstanceBlockDeviceSpecification
 * //             encrypted: true || false,
 * //             deleteOnTermination: true || false,
 * //             iops: Number("int"),
 * //             kmsKeyId: "STRING_VALUE",
 * //             snapshotId: "STRING_VALUE",
 * //             volumeSize: Number("int"),
 * //             volumeType: "standard" || "io1" || "io2" || "gp2" || "gp3" || "sc1" || "st1",
 * //             throughput: Number("int"),
 * //           },
 * //           virtualName: "STRING_VALUE",
 * //           noDevice: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //     dockerfileTemplateData: "STRING_VALUE",
 * //     kmsKeyId: "STRING_VALUE",
 * //     encrypted: true || false,
 * //     parentImage: "STRING_VALUE",
 * //     dateCreated: "STRING_VALUE",
 * //     tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     workingDirectory: "STRING_VALUE",
 * //     targetRepository: { // TargetContainerRepository
 * //       service: "ECR", // required
 * //       repositoryName: "STRING_VALUE", // required
 * //     },
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
 * @param GetContainerRecipeCommandInput - {@link GetContainerRecipeCommandInput}
 * @returns {@link GetContainerRecipeCommandOutput}
 * @see {@link GetContainerRecipeCommandInput} for command's `input` shape.
 * @see {@link GetContainerRecipeCommandOutput} for command's `response` shape.
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
 * @example Get the details of a container recipe
 * ```javascript
 * // The following example retrieves the details of the specified container recipe.
 * const input = {
 *   containerRecipeArn: "arn:aws:imagebuilder:us-west-2:111122223333:container-recipe/my-example-container-recipe/1.0.0"
 * };
 * const command = new GetContainerRecipeCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   containerRecipe: {
 *     arn: "arn:aws:imagebuilder:us-west-2:111122223333:container-recipe/my-example-container-recipe/1.0.0",
 *     components: [
 *       {
 *         componentArn: "arn:aws:imagebuilder:us-west-2:111122223333:component/my-example-container-component/1.0.0/1"
 *       }
 *     ],
 *     containerType: "DOCKER",
 *     dateCreated: "2026-09-09T19:32:53.983Z",
 *     description: "A container recipe that installs my application on Amazon Linux",
 *     dockerfileTemplateData: "FROM {{{ imagebuilder:parentImage }}}
 * {{{ imagebuilder:environments }}}
 * {{{ imagebuilder:components }}}
 * ",
 *     encrypted: true,
 *     name: "my-example-container-recipe",
 *     owner: "111122223333",
 *     parentImage: "amazonlinux:latest",
 *     platform: "Linux",
 *     targetRepository: {
 *       repositoryName: "my-example-container-repo",
 *       service: "ECR"
 *     },
 *     version: "1.0.0"
 *   },
 *   latestVersionReferences: {
 *     latestMajorVersionArn: "arn:aws:imagebuilder:us-west-2:111122223333:container-recipe/my-example-container-recipe/1.x.x",
 *     latestMinorVersionArn: "arn:aws:imagebuilder:us-west-2:111122223333:container-recipe/my-example-container-recipe/1.0.x",
 *     latestPatchVersionArn: "arn:aws:imagebuilder:us-west-2:111122223333:container-recipe/my-example-container-recipe/1.0.0",
 *     latestVersionArn: "arn:aws:imagebuilder:us-west-2:111122223333:container-recipe/my-example-container-recipe/x.x.x"
 *   },
 *   requestId: "15b03ca7-050f-46d4-945e-00232cff6b19"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetContainerRecipeCommand extends command<GetContainerRecipeCommandInput, GetContainerRecipeCommandOutput>(
  _ep0,
  _mw0,
  "GetContainerRecipe",
  GetContainerRecipe$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetContainerRecipeRequest;
      output: GetContainerRecipeResponse;
    };
    sdk: {
      input: GetContainerRecipeCommandInput;
      output: GetContainerRecipeCommandOutput;
    };
  };
}
