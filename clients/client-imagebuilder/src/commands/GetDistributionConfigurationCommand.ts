// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { GetDistributionConfigurationRequest, GetDistributionConfigurationResponse } from "../models/models_0";
import {
  de_GetDistributionConfigurationCommand,
  se_GetDistributionConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDistributionConfigurationCommand}.
 */
export interface GetDistributionConfigurationCommandInput extends GetDistributionConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetDistributionConfigurationCommand}.
 */
export interface GetDistributionConfigurationCommandOutput
  extends GetDistributionConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Gets a distribution configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, GetDistributionConfigurationCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, GetDistributionConfigurationCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const input = { // GetDistributionConfigurationRequest
 *   distributionConfigurationArn: "STRING_VALUE", // required
 * };
 * const command = new GetDistributionConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetDistributionConfigurationResponse
 * //   requestId: "STRING_VALUE",
 * //   distributionConfiguration: { // DistributionConfiguration
 * //     arn: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     distributions: [ // DistributionList
 * //       { // Distribution
 * //         region: "STRING_VALUE", // required
 * //         amiDistributionConfiguration: { // AmiDistributionConfiguration
 * //           name: "STRING_VALUE",
 * //           description: "STRING_VALUE",
 * //           targetAccountIds: [ // AccountList
 * //             "STRING_VALUE",
 * //           ],
 * //           amiTags: { // TagMap
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //           kmsKeyId: "STRING_VALUE",
 * //           launchPermission: { // LaunchPermissionConfiguration
 * //             userIds: [
 * //               "STRING_VALUE",
 * //             ],
 * //             userGroups: [ // StringList
 * //               "STRING_VALUE",
 * //             ],
 * //             organizationArns: [ // OrganizationArnList
 * //               "STRING_VALUE",
 * //             ],
 * //             organizationalUnitArns: [ // OrganizationalUnitArnList
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         },
 * //         containerDistributionConfiguration: { // ContainerDistributionConfiguration
 * //           description: "STRING_VALUE",
 * //           containerTags: [
 * //             "STRING_VALUE",
 * //           ],
 * //           targetRepository: { // TargetContainerRepository
 * //             service: "ECR", // required
 * //             repositoryName: "STRING_VALUE", // required
 * //           },
 * //         },
 * //         licenseConfigurationArns: [ // LicenseConfigurationArnList
 * //           "STRING_VALUE",
 * //         ],
 * //         launchTemplateConfigurations: [ // LaunchTemplateConfigurationList
 * //           { // LaunchTemplateConfiguration
 * //             launchTemplateId: "STRING_VALUE", // required
 * //             accountId: "STRING_VALUE",
 * //             setDefaultVersion: true || false,
 * //           },
 * //         ],
 * //         s3ExportConfiguration: { // S3ExportConfiguration
 * //           roleName: "STRING_VALUE", // required
 * //           diskImageFormat: "VMDK" || "RAW" || "VHD", // required
 * //           s3Bucket: "STRING_VALUE", // required
 * //           s3Prefix: "STRING_VALUE",
 * //         },
 * //         fastLaunchConfigurations: [ // FastLaunchConfigurationList
 * //           { // FastLaunchConfiguration
 * //             enabled: true || false, // required
 * //             snapshotConfiguration: { // FastLaunchSnapshotConfiguration
 * //               targetResourceCount: Number("int"),
 * //             },
 * //             maxParallelLaunches: Number("int"),
 * //             launchTemplate: { // FastLaunchLaunchTemplateSpecification
 * //               launchTemplateId: "STRING_VALUE",
 * //               launchTemplateName: "STRING_VALUE",
 * //               launchTemplateVersion: "STRING_VALUE",
 * //             },
 * //             accountId: "STRING_VALUE",
 * //           },
 * //         ],
 * //         ssmParameterConfigurations: [ // SsmParameterConfigurationList
 * //           { // SsmParameterConfiguration
 * //             amiAccountId: "STRING_VALUE",
 * //             parameterName: "STRING_VALUE", // required
 * //             dataType: "text" || "aws:ec2:image",
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //     timeoutMinutes: Number("int"), // required
 * //     dateCreated: "STRING_VALUE",
 * //     dateUpdated: "STRING_VALUE",
 * //     tags: {
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDistributionConfigurationCommandInput - {@link GetDistributionConfigurationCommandInput}
 * @returns {@link GetDistributionConfigurationCommandOutput}
 * @see {@link GetDistributionConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetDistributionConfigurationCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class GetDistributionConfigurationCommand extends $Command
  .classBuilder<
    GetDistributionConfigurationCommandInput,
    GetDistributionConfigurationCommandOutput,
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
  .s("imagebuilder", "GetDistributionConfiguration", {})
  .n("ImagebuilderClient", "GetDistributionConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_GetDistributionConfigurationCommand)
  .de(de_GetDistributionConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDistributionConfigurationRequest;
      output: GetDistributionConfigurationResponse;
    };
    sdk: {
      input: GetDistributionConfigurationCommandInput;
      output: GetDistributionConfigurationCommandOutput;
    };
  };
}
