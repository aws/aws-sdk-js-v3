// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  UpdateDistributionConfigurationRequest,
  UpdateDistributionConfigurationResponse,
} from "../models/models_0";
import { UpdateDistributionConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface UpdateDistributionConfigurationCommandOutput extends UpdateDistributionConfigurationResponse, __MetadataBearer {}

/**
 * <p>Updates a distribution configuration. Distribution configurations define and
 * 			configure the outputs for your images, including the target Regions,
 * 			accounts, and settings for each Region.</p>
 *          <note>
 *             <p>This operation doesn't support selective updates. The request
 * 				replaces the stored configuration, so include every setting that you
 * 				want to keep.</p>
 *          </note>
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
 * @throws {@link IdempotentParameterMismatchException} (client fault)
 *  <p>You have specified a client token for an operation using parameter values that differ
 * 			from a previous request that used the same client token.</p>
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>You have specified a combination of parameters that isn't valid. For
 * 			example, two mutually exclusive parameters, or a parameter without its
 * 			required companion parameter. Review the error message for details.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is malformed or otherwise invalid. Verify the request and try
 * 			again.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The resource that you are trying to operate on is currently in use. Review the message
 * 			details and retry later.</p>
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
 * @example Update a distribution configuration
 * ```javascript
 * // The following example replaces the distribution settings for the specified configuration with a single distribution that names the output AMI with the build date.
 * const input = {
 *   clientToken: "a1b2c3d4-5678-90ab-cdef-EXAMPLEccccc",
 *   distributionConfigurationArn: "arn:aws:imagebuilder:us-west-2:111122223333:distribution-configuration/my-example-distribution",
 *   distributions: [
 *     {
 *       amiDistributionConfiguration: {
 *         name: "my-example-image-{{ imagebuilder:buildDate }}"
 *       },
 *       region: "us-west-2"
 *     }
 *   ]
 * };
 * const command = new UpdateDistributionConfigurationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   distributionConfigurationArn: "arn:aws:imagebuilder:us-west-2:111122223333:distribution-configuration/my-example-distribution",
 *   requestId: "97d5c3e8-93d6-424c-90e0-bab18b20bf54"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateDistributionConfigurationCommand extends command<UpdateDistributionConfigurationCommandInput, UpdateDistributionConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "UpdateDistributionConfiguration",
  UpdateDistributionConfiguration$
) {
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
