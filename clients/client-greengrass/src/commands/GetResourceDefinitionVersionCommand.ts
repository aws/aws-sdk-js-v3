// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { GetResourceDefinitionVersionRequest, GetResourceDefinitionVersionResponse } from "../models/models_0";
import {
  de_GetResourceDefinitionVersionCommand,
  se_GetResourceDefinitionVersionCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetResourceDefinitionVersionCommand}.
 */
export interface GetResourceDefinitionVersionCommandInput extends GetResourceDefinitionVersionRequest {}
/**
 * @public
 *
 * The output of {@link GetResourceDefinitionVersionCommand}.
 */
export interface GetResourceDefinitionVersionCommandOutput
  extends GetResourceDefinitionVersionResponse,
    __MetadataBearer {}

/**
 * Retrieves information about a resource definition version, including which resources are included in the version.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, GetResourceDefinitionVersionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, GetResourceDefinitionVersionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const input = { // GetResourceDefinitionVersionRequest
 *   ResourceDefinitionId: "STRING_VALUE", // required
 *   ResourceDefinitionVersionId: "STRING_VALUE", // required
 * };
 * const command = new GetResourceDefinitionVersionCommand(input);
 * const response = await client.send(command);
 * // { // GetResourceDefinitionVersionResponse
 * //   Arn: "STRING_VALUE",
 * //   CreationTimestamp: "STRING_VALUE",
 * //   Definition: { // ResourceDefinitionVersion
 * //     Resources: [ // __listOfResource
 * //       { // Resource
 * //         Id: "STRING_VALUE", // required
 * //         Name: "STRING_VALUE", // required
 * //         ResourceDataContainer: { // ResourceDataContainer
 * //           LocalDeviceResourceData: { // LocalDeviceResourceData
 * //             GroupOwnerSetting: { // GroupOwnerSetting
 * //               AutoAddGroupOwner: true || false,
 * //               GroupOwner: "STRING_VALUE",
 * //             },
 * //             SourcePath: "STRING_VALUE",
 * //           },
 * //           LocalVolumeResourceData: { // LocalVolumeResourceData
 * //             DestinationPath: "STRING_VALUE",
 * //             GroupOwnerSetting: {
 * //               AutoAddGroupOwner: true || false,
 * //               GroupOwner: "STRING_VALUE",
 * //             },
 * //             SourcePath: "STRING_VALUE",
 * //           },
 * //           S3MachineLearningModelResourceData: { // S3MachineLearningModelResourceData
 * //             DestinationPath: "STRING_VALUE",
 * //             OwnerSetting: { // ResourceDownloadOwnerSetting
 * //               GroupOwner: "STRING_VALUE", // required
 * //               GroupPermission: "ro" || "rw", // required
 * //             },
 * //             S3Uri: "STRING_VALUE",
 * //           },
 * //           SageMakerMachineLearningModelResourceData: { // SageMakerMachineLearningModelResourceData
 * //             DestinationPath: "STRING_VALUE",
 * //             OwnerSetting: {
 * //               GroupOwner: "STRING_VALUE", // required
 * //               GroupPermission: "ro" || "rw", // required
 * //             },
 * //             SageMakerJobArn: "STRING_VALUE",
 * //           },
 * //           SecretsManagerSecretResourceData: { // SecretsManagerSecretResourceData
 * //             ARN: "STRING_VALUE",
 * //             AdditionalStagingLabelsToDownload: [ // __listOf__string
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         },
 * //       },
 * //     ],
 * //   },
 * //   Id: "STRING_VALUE",
 * //   Version: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetResourceDefinitionVersionCommandInput - {@link GetResourceDefinitionVersionCommandInput}
 * @returns {@link GetResourceDefinitionVersionCommandOutput}
 * @see {@link GetResourceDefinitionVersionCommandInput} for command's `input` shape.
 * @see {@link GetResourceDefinitionVersionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for GreengrassClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  General error information.
 *
 * @throws {@link GreengrassServiceException}
 * <p>Base exception class for all service exceptions from Greengrass service.</p>
 *
 * @public
 */
export class GetResourceDefinitionVersionCommand extends $Command
  .classBuilder<
    GetResourceDefinitionVersionCommandInput,
    GetResourceDefinitionVersionCommandOutput,
    GreengrassClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: GreengrassClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Greengrass", "GetResourceDefinitionVersion", {})
  .n("GreengrassClient", "GetResourceDefinitionVersionCommand")
  .f(void 0, void 0)
  .ser(se_GetResourceDefinitionVersionCommand)
  .de(de_GetResourceDefinitionVersionCommand)
  .build() {}
