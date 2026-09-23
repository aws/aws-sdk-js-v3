// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  CreateDistributionConfigurationRequest,
  CreateDistributionConfigurationResponse,
} from "../models/models_0";
import { CreateDistributionConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateDistributionConfigurationCommand}.
 */
export interface CreateDistributionConfigurationCommandInput extends CreateDistributionConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link CreateDistributionConfigurationCommand}.
 */
export interface CreateDistributionConfigurationCommandOutput extends CreateDistributionConfigurationResponse, __MetadataBearer {}

/**
 * <p>Creates a new distribution configuration. Distribution configurations define
 * 			and configure the outputs for your images, including the target Regions,
 * 			accounts, and settings for each Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, CreateDistributionConfigurationCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, CreateDistributionConfigurationCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * // import type { ImagebuilderClientConfig } from "@aws-sdk/client-imagebuilder";
 * const config = {}; // type is ImagebuilderClientConfig
 * const client = new ImagebuilderClient(config);
 * const input = { // CreateDistributionConfigurationRequest
 *   name: "STRING_VALUE", // required
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
 *   tags: {
 *     "<keys>": "STRING_VALUE",
 *   },
 *   clientToken: "STRING_VALUE", // required
 *   dryRun: true || false,
 * };
 * const command = new CreateDistributionConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // CreateDistributionConfigurationResponse
 * //   requestId: "STRING_VALUE",
 * //   clientToken: "STRING_VALUE",
 * //   distributionConfigurationArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateDistributionConfigurationCommandInput - {@link CreateDistributionConfigurationCommandInput}
 * @returns {@link CreateDistributionConfigurationCommandOutput}
 * @see {@link CreateDistributionConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateDistributionConfigurationCommandOutput} for command's `response` shape.
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
 * @throws {@link DryRunOperationException} (client fault)
 *  <p>The dry run operation of the resource was successful, and no resources or mutations were actually performed due to the dry run flag in the request.</p>
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
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The resource that you are trying to create already exists.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The resource that you are trying to operate on is currently in use. Review the message
 * 			details and retry later.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An internal server error occurred while Image Builder processed the request.
 * 			Retrying the request may succeed.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have exceeded the number of permitted resources or operations for this service.
 * 			For service quotas, see <a href="https://docs.aws.amazon.com/general/latest/gr/imagebuilder.html#limits_imagebuilder">EC2 Image Builder endpoints and
 * 				quotas</a>.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is unable to process your request at this time.</p>
 *
 * @throws {@link ImagebuilderServiceException}
 * <p>Base exception class for all service exceptions from Imagebuilder service.</p>
 *
 *
 * @example Create a distribution configuration
 * ```javascript
 * // The following example creates a distribution configuration that distributes the output AMI to two Regions. The AMI name includes the build date, so that repeated builds create unique AMI names.
 * const input = {
 *   clientToken: "a1b2c3d4-5678-90ab-cdef-EXAMPLE44444",
 *   description: "Copies the output AMI to a second Region",
 *   distributions: [
 *     {
 *       amiDistributionConfiguration: {
 *         name: "my-example-image-{{ imagebuilder:buildDate }}"
 *       },
 *       region: "us-west-2"
 *     },
 *     {
 *       amiDistributionConfiguration: {
 *         name: "my-example-image-{{ imagebuilder:buildDate }}"
 *       },
 *       region: "us-east-1"
 *     }
 *   ],
 *   name: "my-example-distribution"
 * };
 * const command = new CreateDistributionConfigurationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   clientToken: "a1b2c3d4-5678-90ab-cdef-EXAMPLE44444",
 *   distributionConfigurationArn: "arn:aws:imagebuilder:us-west-2:111122223333:distribution-configuration/my-example-distribution",
 *   requestId: "ca5312ad-a273-4c8c-817e-042941a5762d"
 * }
 * *\/
 * ```
 *
 * @example Create a distribution configuration with launch permissions and a launch template update
 * ```javascript
 * // The following example creates a distribution configuration that distributes the output AMI to two Regions. In us-east-1, it shares the AMI with another AWS account. In us-west-2, it sets the new AMI as the default version of your launch template.
 * const input = {
 *   clientToken: "a1b2c3d4-5678-90ab-cdef-EXAMPLE56789",
 *   description: "Distributes the output AMI to two Regions and shares it with another account",
 *   distributions: [
 *     {
 *       amiDistributionConfiguration: {
 *         name: "my-example-image-{{ imagebuilder:buildDate }}"
 *       },
 *       launchTemplateConfigurations: [
 *         {
 *           launchTemplateId: "lt-1234567890abcdef0",
 *           setDefaultVersion: true
 *         }
 *       ],
 *       region: "us-west-2"
 *     },
 *     {
 *       amiDistributionConfiguration: {
 *         launchPermission: {
 *           userIds: [
 *             "444455556666"
 *           ]
 *         },
 *         name: "my-example-image-{{ imagebuilder:buildDate }}"
 *       },
 *       region: "us-east-1"
 *     }
 *   ],
 *   name: "my-example-distribution"
 * };
 * const command = new CreateDistributionConfigurationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   clientToken: "a1b2c3d4-5678-90ab-cdef-EXAMPLE56789",
 *   distributionConfigurationArn: "arn:aws:imagebuilder:us-west-2:111122223333:distribution-configuration/my-example-distribution",
 *   requestId: "13c97ae8-8e39-4e12-af78-25e70def0933"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateDistributionConfigurationCommand extends command<CreateDistributionConfigurationCommandInput, CreateDistributionConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "CreateDistributionConfiguration",
  CreateDistributionConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDistributionConfigurationRequest;
      output: CreateDistributionConfigurationResponse;
    };
    sdk: {
      input: CreateDistributionConfigurationCommandInput;
      output: CreateDistributionConfigurationCommandOutput;
    };
  };
}
