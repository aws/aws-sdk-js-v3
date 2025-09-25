// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { CreateResourceDefinitionRequest, CreateResourceDefinitionResponse } from "../models/models_0";
import { CreateResourceDefinition } from "../schemas/schemas_13_Definition";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateResourceDefinitionCommand}.
 */
export interface CreateResourceDefinitionCommandInput extends CreateResourceDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link CreateResourceDefinitionCommand}.
 */
export interface CreateResourceDefinitionCommandOutput extends CreateResourceDefinitionResponse, __MetadataBearer {}

/**
 * Creates a resource definition which contains a list of resources to be used in a group. You can create an initial version of the definition by providing a list of resources now, or use ''CreateResourceDefinitionVersion'' later.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, CreateResourceDefinitionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, CreateResourceDefinitionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * // import type { GreengrassClientConfig } from "@aws-sdk/client-greengrass";
 * const config = {}; // type is GreengrassClientConfig
 * const client = new GreengrassClient(config);
 * const input = { // CreateResourceDefinitionRequest
 *   AmznClientToken: "STRING_VALUE",
 *   InitialVersion: { // ResourceDefinitionVersion
 *     Resources: [ // __listOfResource
 *       { // Resource
 *         Id: "STRING_VALUE", // required
 *         Name: "STRING_VALUE", // required
 *         ResourceDataContainer: { // ResourceDataContainer
 *           LocalDeviceResourceData: { // LocalDeviceResourceData
 *             GroupOwnerSetting: { // GroupOwnerSetting
 *               AutoAddGroupOwner: true || false,
 *               GroupOwner: "STRING_VALUE",
 *             },
 *             SourcePath: "STRING_VALUE",
 *           },
 *           LocalVolumeResourceData: { // LocalVolumeResourceData
 *             DestinationPath: "STRING_VALUE",
 *             GroupOwnerSetting: {
 *               AutoAddGroupOwner: true || false,
 *               GroupOwner: "STRING_VALUE",
 *             },
 *             SourcePath: "STRING_VALUE",
 *           },
 *           S3MachineLearningModelResourceData: { // S3MachineLearningModelResourceData
 *             DestinationPath: "STRING_VALUE",
 *             OwnerSetting: { // ResourceDownloadOwnerSetting
 *               GroupOwner: "STRING_VALUE", // required
 *               GroupPermission: "ro" || "rw", // required
 *             },
 *             S3Uri: "STRING_VALUE",
 *           },
 *           SageMakerMachineLearningModelResourceData: { // SageMakerMachineLearningModelResourceData
 *             DestinationPath: "STRING_VALUE",
 *             OwnerSetting: {
 *               GroupOwner: "STRING_VALUE", // required
 *               GroupPermission: "ro" || "rw", // required
 *             },
 *             SageMakerJobArn: "STRING_VALUE",
 *           },
 *           SecretsManagerSecretResourceData: { // SecretsManagerSecretResourceData
 *             ARN: "STRING_VALUE",
 *             AdditionalStagingLabelsToDownload: [ // __listOf__string
 *               "STRING_VALUE",
 *             ],
 *           },
 *         },
 *       },
 *     ],
 *   },
 *   Name: "STRING_VALUE",
 *   tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateResourceDefinitionCommand(input);
 * const response = await client.send(command);
 * // { // CreateResourceDefinitionResponse
 * //   Arn: "STRING_VALUE",
 * //   CreationTimestamp: "STRING_VALUE",
 * //   Id: "STRING_VALUE",
 * //   LastUpdatedTimestamp: "STRING_VALUE",
 * //   LatestVersion: "STRING_VALUE",
 * //   LatestVersionArn: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateResourceDefinitionCommandInput - {@link CreateResourceDefinitionCommandInput}
 * @returns {@link CreateResourceDefinitionCommandOutput}
 * @see {@link CreateResourceDefinitionCommandInput} for command's `input` shape.
 * @see {@link CreateResourceDefinitionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for GreengrassClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  General error information.
 *
 * @throws {@link GreengrassServiceException}
 * <p>Base exception class for all service exceptions from Greengrass service.</p>
 *
 *
 * @public
 */
export class CreateResourceDefinitionCommand extends $Command
  .classBuilder<
    CreateResourceDefinitionCommandInput,
    CreateResourceDefinitionCommandOutput,
    GreengrassClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GreengrassClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Greengrass", "CreateResourceDefinition", {})
  .n("GreengrassClient", "CreateResourceDefinitionCommand")
  .sc(CreateResourceDefinition)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateResourceDefinitionRequest;
      output: CreateResourceDefinitionResponse;
    };
    sdk: {
      input: CreateResourceDefinitionCommandInput;
      output: CreateResourceDefinitionCommandOutput;
    };
  };
}
