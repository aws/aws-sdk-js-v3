// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { GetImageRecipeRequest, GetImageRecipeResponse } from "../models/models_0";
import { de_GetImageRecipeCommand, se_GetImageRecipeCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Gets an image recipe.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, GetImageRecipeCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, GetImageRecipeCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
 * @public
 */
export class GetImageRecipeCommand extends $Command
  .classBuilder<
    GetImageRecipeCommandInput,
    GetImageRecipeCommandOutput,
    ImagebuilderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ImagebuilderClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("imagebuilder", "GetImageRecipe", {})
  .n("ImagebuilderClient", "GetImageRecipeCommand")
  .f(void 0, void 0)
  .ser(se_GetImageRecipeCommand)
  .de(de_GetImageRecipeCommand)
  .build() {
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
