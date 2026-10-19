// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetImageRecipeRequest, GetImageRecipeResponse } from "../models/models_0";
import { GetImageRecipe$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetImageRecipeCommand}.
 */
export interface GetImageRecipeCommandInput extends GetImageRecipeRequest {}
/**
 * @public
 *
 * The output of {@link GetImageRecipeCommand}.
 */
export interface GetImageRecipeCommandOutput extends GetImageRecipeResponse, __MetadataBearer {}

/**
 * <p>Retrieves an image recipe.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, GetImageRecipeCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, GetImageRecipeCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * // import type { ImagebuilderClientConfig } from "@aws-sdk/client-imagebuilder";
 * const config = {}; // type is ImagebuilderClientConfig
 * const client = new ImagebuilderClient(config);
 * const input = { // GetImageRecipeRequest
 *   imageRecipeArn: "STRING_VALUE", // required
 * };
 * const command = new GetImageRecipeCommand(input);
 * const response = await client.send(command);
 * // { // GetImageRecipeResponse
 * //   requestId: "STRING_VALUE",
 * //   imageRecipe: { // ImageRecipe
 * //     arn: "STRING_VALUE",
 * //     type: "AMI" || "DOCKER",
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
 * //     parentImage: "STRING_VALUE",
 * //     blockDeviceMappings: [ // InstanceBlockDeviceMappings
 * //       { // InstanceBlockDeviceMapping
 * //         deviceName: "STRING_VALUE",
 * //         ebs: { // EbsInstanceBlockDeviceSpecification
 * //           encrypted: true || false,
 * //           deleteOnTermination: true || false,
 * //           iops: Number("int"),
 * //           kmsKeyId: "STRING_VALUE",
 * //           snapshotId: "STRING_VALUE",
 * //           volumeSize: Number("int"),
 * //           volumeType: "standard" || "io1" || "io2" || "gp2" || "gp3" || "sc1" || "st1",
 * //           throughput: Number("int"),
 * //         },
 * //         virtualName: "STRING_VALUE",
 * //         noDevice: "STRING_VALUE",
 * //       },
 * //     ],
 * //     dateCreated: "STRING_VALUE",
 * //     tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     workingDirectory: "STRING_VALUE",
 * //     additionalInstanceConfiguration: { // AdditionalInstanceConfiguration
 * //       systemsManagerAgent: { // SystemsManagerAgent
 * //         uninstallAfterBuild: true || false,
 * //       },
 * //       userDataOverride: "STRING_VALUE",
 * //     },
 * //     amiTags: {
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     amiWatermarks: [ // AmiWatermarksList
 * //       "STRING_VALUE",
 * //     ],
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
 * @param GetImageRecipeCommandInput - {@link GetImageRecipeCommandInput}
 * @returns {@link GetImageRecipeCommandOutput}
 * @see {@link GetImageRecipeCommandInput} for command's `input` shape.
 * @see {@link GetImageRecipeCommandOutput} for command's `response` shape.
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
 * @example Get the details of an image recipe
 * ```javascript
 * // The following example retrieves the full definition of an image recipe, including the components it applies and the base image it builds on.
 * const input = {
 *   imageRecipeArn: "arn:aws:imagebuilder:us-west-2:111122223333:image-recipe/my-example-app-recipe/1.0.0"
 * };
 * const command = new GetImageRecipeCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   imageRecipe: {
 *     arn: "arn:aws:imagebuilder:us-west-2:111122223333:image-recipe/my-example-app-recipe/1.0.0",
 *     components: [
 *       {
 *         componentArn: "arn:aws:imagebuilder:us-west-2:111122223333:component/my-example-app/1.0.0/1"
 *       }
 *     ],
 *     dateCreated: "2026-09-09T19:30:21.183Z",
 *     description: "An image recipe that installs my application on Amazon Linux 2023",
 *     name: "my-example-app-recipe",
 *     owner: "111122223333",
 *     parentImage: "arn:aws:imagebuilder:us-west-2:aws:image/amazon-linux-2023-x86/x.x.x",
 *     platform: "Linux",
 *     version: "1.0.0",
 *     workingDirectory: "/tmp"
 *   },
 *   latestVersionReferences: {
 *     latestMajorVersionArn: "arn:aws:imagebuilder:us-west-2:111122223333:image-recipe/my-example-app-recipe/1.x.x",
 *     latestMinorVersionArn: "arn:aws:imagebuilder:us-west-2:111122223333:image-recipe/my-example-app-recipe/1.0.x",
 *     latestPatchVersionArn: "arn:aws:imagebuilder:us-west-2:111122223333:image-recipe/my-example-app-recipe/1.0.0",
 *     latestVersionArn: "arn:aws:imagebuilder:us-west-2:111122223333:image-recipe/my-example-app-recipe/x.x.x"
 *   },
 *   requestId: "adb3ff9a-df84-4b4e-8ecf-11d38281ead7"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetImageRecipeCommand extends command<GetImageRecipeCommandInput, GetImageRecipeCommandOutput>(
  _ep0,
  _mw0,
  "GetImageRecipe",
  GetImageRecipe$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetImageRecipeRequest;
      output: GetImageRecipeResponse;
    };
    sdk: {
      input: GetImageRecipeCommandInput;
      output: GetImageRecipeCommandOutput;
    };
  };
}
