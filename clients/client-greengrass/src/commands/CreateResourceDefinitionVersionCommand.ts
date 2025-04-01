// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { CreateResourceDefinitionVersionRequest, CreateResourceDefinitionVersionResponse } from "../models/models_0";
import {
  de_CreateResourceDefinitionVersionCommand,
  se_CreateResourceDefinitionVersionCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateResourceDefinitionVersionCommand}.
 */
export interface CreateResourceDefinitionVersionCommandInput extends CreateResourceDefinitionVersionRequest {}
/**
 * @public
 *
 * The output of {@link CreateResourceDefinitionVersionCommand}.
 */
export interface CreateResourceDefinitionVersionCommandOutput
  extends CreateResourceDefinitionVersionResponse,
    __MetadataBearer {}

/**
 * Creates a version of a resource definition that has already been defined.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, CreateResourceDefinitionVersionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, CreateResourceDefinitionVersionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const input = { // CreateResourceDefinitionVersionRequest
 *   AmznClientToken: "STRING_VALUE",
 *   ResourceDefinitionId: "STRING_VALUE", // required
 *   Resources: [ // __listOfResource
 *     { // Resource
 *       Id: "STRING_VALUE", // required
 *       Name: "STRING_VALUE", // required
 *       ResourceDataContainer: { // ResourceDataContainer
 *         LocalDeviceResourceData: { // LocalDeviceResourceData
 *           GroupOwnerSetting: { // GroupOwnerSetting
 *             AutoAddGroupOwner: true || false,
 *             GroupOwner: "STRING_VALUE",
 *           },
 *           SourcePath: "STRING_VALUE",
 *         },
 *         LocalVolumeResourceData: { // LocalVolumeResourceData
 *           DestinationPath: "STRING_VALUE",
 *           GroupOwnerSetting: {
 *             AutoAddGroupOwner: true || false,
 *             GroupOwner: "STRING_VALUE",
 *           },
 *           SourcePath: "STRING_VALUE",
 *         },
 *         S3MachineLearningModelResourceData: { // S3MachineLearningModelResourceData
 *           DestinationPath: "STRING_VALUE",
 *           OwnerSetting: { // ResourceDownloadOwnerSetting
 *             GroupOwner: "STRING_VALUE", // required
 *             GroupPermission: "ro" || "rw", // required
 *           },
 *           S3Uri: "STRING_VALUE",
 *         },
 *         SageMakerMachineLearningModelResourceData: { // SageMakerMachineLearningModelResourceData
 *           DestinationPath: "STRING_VALUE",
 *           OwnerSetting: {
 *             GroupOwner: "STRING_VALUE", // required
 *             GroupPermission: "ro" || "rw", // required
 *           },
 *           SageMakerJobArn: "STRING_VALUE",
 *         },
 *         SecretsManagerSecretResourceData: { // SecretsManagerSecretResourceData
 *           ARN: "STRING_VALUE",
 *           AdditionalStagingLabelsToDownload: [ // __listOf__string
 *             "STRING_VALUE",
 *           ],
 *         },
 *       },
 *     },
 *   ],
 * };
 * const command = new CreateResourceDefinitionVersionCommand(input);
 * const response = await client.send(command);
 * // { // CreateResourceDefinitionVersionResponse
 * //   Arn: "STRING_VALUE",
 * //   CreationTimestamp: "STRING_VALUE",
 * //   Id: "STRING_VALUE",
 * //   Version: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateResourceDefinitionVersionCommandInput - {@link CreateResourceDefinitionVersionCommandInput}
 * @returns {@link CreateResourceDefinitionVersionCommandOutput}
 * @see {@link CreateResourceDefinitionVersionCommandInput} for command's `input` shape.
 * @see {@link CreateResourceDefinitionVersionCommandOutput} for command's `response` shape.
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
export class CreateResourceDefinitionVersionCommand extends $Command
  .classBuilder<
    CreateResourceDefinitionVersionCommandInput,
    CreateResourceDefinitionVersionCommandOutput,
    GreengrassClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GreengrassClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Greengrass", "CreateResourceDefinitionVersion", {})
  .n("GreengrassClient", "CreateResourceDefinitionVersionCommand")
  .f(void 0, void 0)
  .ser(se_CreateResourceDefinitionVersionCommand)
  .de(de_CreateResourceDefinitionVersionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateResourceDefinitionVersionRequest;
      output: CreateResourceDefinitionVersionResponse;
    };
    sdk: {
      input: CreateResourceDefinitionVersionCommandInput;
      output: CreateResourceDefinitionVersionCommandOutput;
    };
  };
}
