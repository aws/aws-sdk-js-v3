// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { GetImageRequest, GetImageResponse } from "../models/models_0";
import { de_GetImageCommand, se_GetImageCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetImageCommand}.
 */
export interface GetImageCommandInput extends GetImageRequest {}
/**
 * @public
 *
 * The output of {@link GetImageCommand}.
 */
export interface GetImageCommandOutput extends GetImageResponse, __MetadataBearer {}

/**
 * <p>Gets an image.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, GetImageCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, GetImageCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const input = { // GetImageRequest
 *   imageBuildVersionArn: "STRING_VALUE", // required
 * };
 * const command = new GetImageCommand(input);
 * const response = await client.send(command);
 * // { // GetImageResponse
 * //   requestId: "STRING_VALUE",
 * //   image: { // Image
 * //     arn: "STRING_VALUE",
 * //     type: "AMI" || "DOCKER",
 * //     name: "STRING_VALUE",
 * //     version: "STRING_VALUE",
 * //     platform: "Windows" || "Linux" || "macOS",
 * //     enhancedImageMetadataEnabled: true || false,
 * //     osVersion: "STRING_VALUE",
 * //     state: { // ImageState
 * //       status: "PENDING" || "CREATING" || "BUILDING" || "TESTING" || "DISTRIBUTING" || "INTEGRATING" || "AVAILABLE" || "CANCELLED" || "FAILED" || "DEPRECATED" || "DELETED" || "DISABLED",
 * //       reason: "STRING_VALUE",
 * //     },
 * //     imageRecipe: { // ImageRecipe
 * //       arn: "STRING_VALUE",
 * //       type: "AMI" || "DOCKER",
 * //       name: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       platform: "Windows" || "Linux" || "macOS",
 * //       owner: "STRING_VALUE",
 * //       version: "STRING_VALUE",
 * //       components: [ // ComponentConfigurationList
 * //         { // ComponentConfiguration
 * //           componentArn: "STRING_VALUE", // required
 * //           parameters: [ // ComponentParameterList
 * //             { // ComponentParameter
 * //               name: "STRING_VALUE", // required
 * //               value: [ // ComponentParameterValueList // required
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       parentImage: "STRING_VALUE",
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
 * //       dateCreated: "STRING_VALUE",
 * //       tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       workingDirectory: "STRING_VALUE",
 * //       additionalInstanceConfiguration: { // AdditionalInstanceConfiguration
 * //         systemsManagerAgent: { // SystemsManagerAgent
 * //           uninstallAfterBuild: true || false,
 * //         },
 * //         userDataOverride: "STRING_VALUE",
 * //       },
 * //     },
 * //     containerRecipe: { // ContainerRecipe
 * //       arn: "STRING_VALUE",
 * //       containerType: "DOCKER",
 * //       name: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       platform: "Windows" || "Linux" || "macOS",
 * //       owner: "STRING_VALUE",
 * //       version: "STRING_VALUE",
 * //       components: [
 * //         {
 * //           componentArn: "STRING_VALUE", // required
 * //           parameters: [
 * //             {
 * //               name: "STRING_VALUE", // required
 * //               value: [ // required
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       instanceConfiguration: { // InstanceConfiguration
 * //         image: "STRING_VALUE",
 * //         blockDeviceMappings: [
 * //           {
 * //             deviceName: "STRING_VALUE",
 * //             ebs: {
 * //               encrypted: true || false,
 * //               deleteOnTermination: true || false,
 * //               iops: Number("int"),
 * //               kmsKeyId: "STRING_VALUE",
 * //               snapshotId: "STRING_VALUE",
 * //               volumeSize: Number("int"),
 * //               volumeType: "standard" || "io1" || "io2" || "gp2" || "gp3" || "sc1" || "st1",
 * //               throughput: Number("int"),
 * //             },
 * //             virtualName: "STRING_VALUE",
 * //             noDevice: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //       dockerfileTemplateData: "STRING_VALUE",
 * //       kmsKeyId: "STRING_VALUE",
 * //       encrypted: true || false,
 * //       parentImage: "STRING_VALUE",
 * //       dateCreated: "STRING_VALUE",
 * //       tags: {
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       workingDirectory: "STRING_VALUE",
 * //       targetRepository: { // TargetContainerRepository
 * //         service: "ECR", // required
 * //         repositoryName: "STRING_VALUE", // required
 * //       },
 * //     },
 * //     sourcePipelineName: "STRING_VALUE",
 * //     sourcePipelineArn: "STRING_VALUE",
 * //     infrastructureConfiguration: { // InfrastructureConfiguration
 * //       arn: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       instanceTypes: [ // InstanceTypeList
 * //         "STRING_VALUE",
 * //       ],
 * //       instanceProfileName: "STRING_VALUE",
 * //       securityGroupIds: [ // SecurityGroupIds
 * //         "STRING_VALUE",
 * //       ],
 * //       subnetId: "STRING_VALUE",
 * //       logging: { // Logging
 * //         s3Logs: { // S3Logs
 * //           s3BucketName: "STRING_VALUE",
 * //           s3KeyPrefix: "STRING_VALUE",
 * //         },
 * //       },
 * //       keyPair: "STRING_VALUE",
 * //       terminateInstanceOnFailure: true || false,
 * //       snsTopicArn: "STRING_VALUE",
 * //       dateCreated: "STRING_VALUE",
 * //       dateUpdated: "STRING_VALUE",
 * //       resourceTags: { // ResourceTagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       instanceMetadataOptions: { // InstanceMetadataOptions
 * //         httpTokens: "STRING_VALUE",
 * //         httpPutResponseHopLimit: Number("int"),
 * //       },
 * //       tags: {
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       placement: { // Placement
 * //         availabilityZone: "STRING_VALUE",
 * //         tenancy: "default" || "dedicated" || "host",
 * //         hostId: "STRING_VALUE",
 * //         hostResourceGroupArn: "STRING_VALUE",
 * //       },
 * //     },
 * //     distributionConfiguration: { // DistributionConfiguration
 * //       arn: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       distributions: [ // DistributionList
 * //         { // Distribution
 * //           region: "STRING_VALUE", // required
 * //           amiDistributionConfiguration: { // AmiDistributionConfiguration
 * //             name: "STRING_VALUE",
 * //             description: "STRING_VALUE",
 * //             targetAccountIds: [ // AccountList
 * //               "STRING_VALUE",
 * //             ],
 * //             amiTags: {
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //             kmsKeyId: "STRING_VALUE",
 * //             launchPermission: { // LaunchPermissionConfiguration
 * //               userIds: [
 * //                 "STRING_VALUE",
 * //               ],
 * //               userGroups: [ // StringList
 * //                 "STRING_VALUE",
 * //               ],
 * //               organizationArns: [ // OrganizationArnList
 * //                 "STRING_VALUE",
 * //               ],
 * //               organizationalUnitArns: [ // OrganizationalUnitArnList
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //           },
 * //           containerDistributionConfiguration: { // ContainerDistributionConfiguration
 * //             description: "STRING_VALUE",
 * //             containerTags: [
 * //               "STRING_VALUE",
 * //             ],
 * //             targetRepository: {
 * //               service: "ECR", // required
 * //               repositoryName: "STRING_VALUE", // required
 * //             },
 * //           },
 * //           licenseConfigurationArns: [ // LicenseConfigurationArnList
 * //             "STRING_VALUE",
 * //           ],
 * //           launchTemplateConfigurations: [ // LaunchTemplateConfigurationList
 * //             { // LaunchTemplateConfiguration
 * //               launchTemplateId: "STRING_VALUE", // required
 * //               accountId: "STRING_VALUE",
 * //               setDefaultVersion: true || false,
 * //             },
 * //           ],
 * //           s3ExportConfiguration: { // S3ExportConfiguration
 * //             roleName: "STRING_VALUE", // required
 * //             diskImageFormat: "VMDK" || "RAW" || "VHD", // required
 * //             s3Bucket: "STRING_VALUE", // required
 * //             s3Prefix: "STRING_VALUE",
 * //           },
 * //           fastLaunchConfigurations: [ // FastLaunchConfigurationList
 * //             { // FastLaunchConfiguration
 * //               enabled: true || false, // required
 * //               snapshotConfiguration: { // FastLaunchSnapshotConfiguration
 * //                 targetResourceCount: Number("int"),
 * //               },
 * //               maxParallelLaunches: Number("int"),
 * //               launchTemplate: { // FastLaunchLaunchTemplateSpecification
 * //                 launchTemplateId: "STRING_VALUE",
 * //                 launchTemplateName: "STRING_VALUE",
 * //                 launchTemplateVersion: "STRING_VALUE",
 * //               },
 * //               accountId: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       timeoutMinutes: Number("int"), // required
 * //       dateCreated: "STRING_VALUE",
 * //       dateUpdated: "STRING_VALUE",
 * //       tags: {
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //     imageTestsConfiguration: { // ImageTestsConfiguration
 * //       imageTestsEnabled: true || false,
 * //       timeoutMinutes: Number("int"),
 * //     },
 * //     dateCreated: "STRING_VALUE",
 * //     outputResources: { // OutputResources
 * //       amis: [ // AmiList
 * //         { // Ami
 * //           region: "STRING_VALUE",
 * //           image: "STRING_VALUE",
 * //           name: "STRING_VALUE",
 * //           description: "STRING_VALUE",
 * //           state: {
 * //             status: "PENDING" || "CREATING" || "BUILDING" || "TESTING" || "DISTRIBUTING" || "INTEGRATING" || "AVAILABLE" || "CANCELLED" || "FAILED" || "DEPRECATED" || "DELETED" || "DISABLED",
 * //             reason: "STRING_VALUE",
 * //           },
 * //           accountId: "STRING_VALUE",
 * //         },
 * //       ],
 * //       containers: [ // ContainerList
 * //         { // Container
 * //           region: "STRING_VALUE",
 * //           imageUris: "<StringList>",
 * //         },
 * //       ],
 * //     },
 * //     tags: "<TagMap>",
 * //     buildType: "USER_INITIATED" || "SCHEDULED" || "IMPORT" || "IMPORT_ISO",
 * //     imageSource: "AMAZON_MANAGED" || "AWS_MARKETPLACE" || "IMPORTED" || "CUSTOM",
 * //     scanState: { // ImageScanState
 * //       status: "PENDING" || "SCANNING" || "COLLECTING" || "COMPLETED" || "ABANDONED" || "FAILED" || "TIMED_OUT",
 * //       reason: "STRING_VALUE",
 * //     },
 * //     imageScanningConfiguration: { // ImageScanningConfiguration
 * //       imageScanningEnabled: true || false,
 * //       ecrConfiguration: { // EcrConfiguration
 * //         repositoryName: "STRING_VALUE",
 * //         containerTags: "<StringList>",
 * //       },
 * //     },
 * //     deprecationTime: new Date("TIMESTAMP"),
 * //     lifecycleExecutionId: "STRING_VALUE",
 * //     executionRole: "STRING_VALUE",
 * //     workflows: [ // WorkflowConfigurationList
 * //       { // WorkflowConfiguration
 * //         workflowArn: "STRING_VALUE", // required
 * //         parameters: [ // WorkflowParameterList
 * //           { // WorkflowParameter
 * //             name: "STRING_VALUE", // required
 * //             value: [ // WorkflowParameterValueList // required
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         ],
 * //         parallelGroup: "STRING_VALUE",
 * //         onFailure: "CONTINUE" || "ABORT",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetImageCommandInput - {@link GetImageCommandInput}
 * @returns {@link GetImageCommandOutput}
 * @see {@link GetImageCommandInput} for command's `input` shape.
 * @see {@link GetImageCommandOutput} for command's `response` shape.
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
export class GetImageCommand extends $Command
  .classBuilder<
    GetImageCommandInput,
    GetImageCommandOutput,
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
  .s("imagebuilder", "GetImage", {})
  .n("ImagebuilderClient", "GetImageCommand")
  .f(void 0, void 0)
  .ser(se_GetImageCommand)
  .de(de_GetImageCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetImageRequest;
      output: GetImageResponse;
    };
    sdk: {
      input: GetImageCommandInput;
      output: GetImageCommandOutput;
    };
  };
}
