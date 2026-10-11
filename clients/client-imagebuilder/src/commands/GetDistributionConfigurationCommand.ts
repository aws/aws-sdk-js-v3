// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetDistributionConfigurationRequest, GetDistributionConfigurationResponse } from "../models/models_0";
import { GetDistributionConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface GetDistributionConfigurationCommandOutput extends GetDistributionConfigurationResponse, __MetadataBearer {}

/**
 * <p>Retrieves a distribution configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, GetDistributionConfigurationCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, GetDistributionConfigurationCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * // import type { ImagebuilderClientConfig } from "@aws-sdk/client-imagebuilder";
 * const config = {}; // type is ImagebuilderClientConfig
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
 * @example Get the details of a distribution configuration
 * ```javascript
 * // The following example retrieves a distribution configuration that distributes the output AMI to two Regions.
 * const input = {
 *   distributionConfigurationArn: "arn:aws:imagebuilder:us-west-2:111122223333:distribution-configuration/my-example-distribution"
 * };
 * const command = new GetDistributionConfigurationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   distributionConfiguration: {
 *     arn: "arn:aws:imagebuilder:us-west-2:111122223333:distribution-configuration/my-example-distribution",
 *     dateCreated: "2026-09-09T19:37:37.231Z",
 *     description: "Copies the output AMI to a second Region",
 *     distributions: [
 *       {
 *         amiDistributionConfiguration: {
 *           name: "my-example-image-{{ imagebuilder:buildDate }}"
 *         },
 *         region: "us-west-2"
 *       },
 *       {
 *         amiDistributionConfiguration: {
 *           name: "my-example-image-{{ imagebuilder:buildDate }}"
 *         },
 *         region: "us-east-1"
 *       }
 *     ],
 *     name: "my-example-distribution",
 *     timeoutMinutes: 720
 *   },
 *   requestId: "2d0a8dc0-99d5-4d7a-af7a-d1aeafd71c2e"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetDistributionConfigurationCommand extends command<GetDistributionConfigurationCommandInput, GetDistributionConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "GetDistributionConfiguration",
  GetDistributionConfiguration$
) {
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
