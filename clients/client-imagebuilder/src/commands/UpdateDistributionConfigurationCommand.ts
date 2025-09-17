// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { UpdateDistributionConfigurationRequest, UpdateDistributionConfigurationResponse } from "../models/models_0";
import {
  de_UpdateDistributionConfigurationCommand,
  se_UpdateDistributionConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateDistributionConfigurationCommand}.
 */
export interface UpdateDistributionConfigurationCommandInput extends UpdateDistributionConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDistributionConfigurationCommand}.
 */
export interface UpdateDistributionConfigurationCommandOutput
  extends UpdateDistributionConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Updates a new distribution configuration. Distribution configurations define and
 * 			configure the outputs of your pipeline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, UpdateDistributionConfigurationCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, UpdateDistributionConfigurationCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * // import type { ImagebuilderClientConfig } from "@aws-sdk/client-imagebuilder";
 * const config = {}; // type is ImagebuilderClientConfig
 * const client = new ImagebuilderClient(config);
 * const input = { // UpdateDistributionConfigurationRequest
 *   distributionConfigurationArn: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   distributions: [ // DistributionList // required
 *     { // Distribution
 *       region: "STRING_VALUE", // required
 *       amiDistributionConfiguration: { // AmiDistributionConfiguration
 *         name: "STRING_VALUE",
 *         description: "STRING_VALUE",
 *         targetAccountIds: [ // AccountList
 *           "STRING_VALUE",
 *         ],
 *         amiTags: { // TagMap
 *           "<keys>": "STRING_VALUE",
 *         },
 *         kmsKeyId: "STRING_VALUE",
 *         launchPermission: { // LaunchPermissionConfiguration
 *           userIds: [
 *             "STRING_VALUE",
 *           ],
 *           userGroups: [ // StringList
 *             "STRING_VALUE",
 *           ],
 *           organizationArns: [ // OrganizationArnList
 *             "STRING_VALUE",
 *           ],
 *           organizationalUnitArns: [ // OrganizationalUnitArnList
 *             "STRING_VALUE",
 *           ],
 *         },
 *       },
 *       containerDistributionConfiguration: { // ContainerDistributionConfiguration
 *         description: "STRING_VALUE",
 *         containerTags: [
 *           "STRING_VALUE",
 *         ],
 *         targetRepository: { // TargetContainerRepository
 *           service: "ECR", // required
 *           repositoryName: "STRING_VALUE", // required
 *         },
 *       },
 *       licenseConfigurationArns: [ // LicenseConfigurationArnList
 *         "STRING_VALUE",
 *       ],
 *       launchTemplateConfigurations: [ // LaunchTemplateConfigurationList
 *         { // LaunchTemplateConfiguration
 *           launchTemplateId: "STRING_VALUE", // required
 *           accountId: "STRING_VALUE",
 *           setDefaultVersion: true || false,
 *         },
 *       ],
 *       s3ExportConfiguration: { // S3ExportConfiguration
 *         roleName: "STRING_VALUE", // required
 *         diskImageFormat: "VMDK" || "RAW" || "VHD", // required
 *         s3Bucket: "STRING_VALUE", // required
 *         s3Prefix: "STRING_VALUE",
 *       },
 *       fastLaunchConfigurations: [ // FastLaunchConfigurationList
 *         { // FastLaunchConfiguration
 *           enabled: true || false, // required
 *           snapshotConfiguration: { // FastLaunchSnapshotConfiguration
 *             targetResourceCount: Number("int"),
 *           },
 *           maxParallelLaunches: Number("int"),
 *           launchTemplate: { // FastLaunchLaunchTemplateSpecification
 *             launchTemplateId: "STRING_VALUE",
 *             launchTemplateName: "STRING_VALUE",
 *             launchTemplateVersion: "STRING_VALUE",
 *           },
 *           accountId: "STRING_VALUE",
 *         },
 *       ],
 *       ssmParameterConfigurations: [ // SsmParameterConfigurationList
 *         { // SsmParameterConfiguration
 *           amiAccountId: "STRING_VALUE",
 *           parameterName: "STRING_VALUE", // required
 *           dataType: "text" || "aws:ec2:image",
 *         },
 *       ],
 *     },
 *   ],
 *   clientToken: "STRING_VALUE", // required
 * };
 * const command = new UpdateDistributionConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDistributionConfigurationResponse
 * //   requestId: "STRING_VALUE",
 * //   clientToken: "STRING_VALUE",
 * //   distributionConfigurationArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateDistributionConfigurationCommandInput - {@link UpdateDistributionConfigurationCommandInput}
 * @returns {@link UpdateDistributionConfigurationCommandOutput}
 * @see {@link UpdateDistributionConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateDistributionConfigurationCommandOutput} for command's `response` shape.
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
 * @throws {@link IdempotentParameterMismatchException} (client fault)
 *  <p>You have specified a client token for an operation using parameter values that differ
 * 			from a previous request that used the same client token.</p>
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>You have specified two or more mutually exclusive parameters. Review the error message
 * 			for details.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>You have requested an action that that the service doesn't support.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The resource that you are trying to operate on is currently in use. Review the message
 * 			details and retry later.</p>
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
 *
 * @public
 */
export class UpdateDistributionConfigurationCommand extends $Command
  .classBuilder<
    UpdateDistributionConfigurationCommandInput,
    UpdateDistributionConfigurationCommandOutput,
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
  .s("imagebuilder", "UpdateDistributionConfiguration", {})
  .n("ImagebuilderClient", "UpdateDistributionConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_UpdateDistributionConfigurationCommand)
  .de(de_UpdateDistributionConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDistributionConfigurationRequest;
      output: UpdateDistributionConfigurationResponse;
    };
    sdk: {
      input: UpdateDistributionConfigurationCommandInput;
      output: UpdateDistributionConfigurationCommandOutput;
    };
  };
}
