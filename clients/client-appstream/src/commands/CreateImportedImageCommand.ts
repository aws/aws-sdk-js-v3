// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateImportedImageRequest, CreateImportedImageResult } from "../models/models_0";
import { CreateImportedImage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateImportedImageCommand}.
 */
export interface CreateImportedImageCommandInput extends CreateImportedImageRequest {}
/**
 * @public
 *
 * The output of {@link CreateImportedImageCommand}.
 */
export interface CreateImportedImageCommandOutput extends CreateImportedImageResult, __MetadataBearer {}

/**
 * <p>Creates a custom WorkSpaces Applications image by importing an EC2 AMI. This allows you to use your own customized AMI to create WorkSpaces Applications images that support additional instance types beyond the standard stream.* instances.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, CreateImportedImageCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, CreateImportedImageCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * // import type { AppStreamClientConfig } from "@aws-sdk/client-appstream";
 * const config = {}; // type is AppStreamClientConfig
 * const client = new AppStreamClient(config);
 * const input = { // CreateImportedImageRequest
 *   Name: "STRING_VALUE", // required
 *   SourceAmiId: "STRING_VALUE", // required
 *   IamRoleArn: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   DisplayName: "STRING_VALUE",
 *   Tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 *   RuntimeValidationConfig: { // RuntimeValidationConfig
 *     IntendedInstanceType: "STRING_VALUE",
 *   },
 *   AgentSoftwareVersion: "CURRENT_LATEST" || "ALWAYS_LATEST",
 *   AppCatalogConfig: [ // AppCatalogConfig
 *     { // ApplicationConfig
 *       Name: "STRING_VALUE", // required
 *       DisplayName: "STRING_VALUE",
 *       AbsoluteAppPath: "STRING_VALUE", // required
 *       AbsoluteIconPath: "STRING_VALUE",
 *       AbsoluteManifestPath: "STRING_VALUE",
 *       WorkingDirectory: "STRING_VALUE",
 *       LaunchParameters: "STRING_VALUE",
 *     },
 *   ],
 *   DryRun: true || false,
 * };
 * const command = new CreateImportedImageCommand(input);
 * const response = await client.send(command);
 * // { // CreateImportedImageResult
 * //   Image: { // Image
 * //     Name: "STRING_VALUE", // required
 * //     Arn: "STRING_VALUE",
 * //     BaseImageArn: "STRING_VALUE",
 * //     DisplayName: "STRING_VALUE",
 * //     State: "PENDING" || "AVAILABLE" || "FAILED" || "COPYING" || "DELETING" || "CREATING" || "IMPORTING" || "VALIDATING",
 * //     Visibility: "PUBLIC" || "PRIVATE" || "SHARED",
 * //     ImageBuilderSupported: true || false,
 * //     ImageBuilderName: "STRING_VALUE",
 * //     Platform: "WINDOWS" || "WINDOWS_SERVER_2016" || "WINDOWS_SERVER_2019" || "WINDOWS_SERVER_2022" || "WINDOWS_SERVER_2025" || "AMAZON_LINUX2" || "RHEL8" || "ROCKY_LINUX8" || "UBUNTU_PRO_2404",
 * //     Description: "STRING_VALUE",
 * //     StateChangeReason: { // ImageStateChangeReason
 * //       Code: "INTERNAL_ERROR" || "IMAGE_BUILDER_NOT_AVAILABLE" || "IMAGE_COPY_FAILURE" || "IMAGE_UPDATE_FAILURE" || "IMAGE_IMPORT_FAILURE",
 * //       Message: "STRING_VALUE",
 * //     },
 * //     Applications: [ // Applications
 * //       { // Application
 * //         Name: "STRING_VALUE",
 * //         DisplayName: "STRING_VALUE",
 * //         IconURL: "STRING_VALUE",
 * //         LaunchPath: "STRING_VALUE",
 * //         LaunchParameters: "STRING_VALUE",
 * //         Enabled: true || false,
 * //         Metadata: { // Metadata
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         WorkingDirectory: "STRING_VALUE",
 * //         Description: "STRING_VALUE",
 * //         Arn: "STRING_VALUE",
 * //         AppBlockArn: "STRING_VALUE",
 * //         IconS3Location: { // S3Location
 * //           S3Bucket: "STRING_VALUE", // required
 * //           S3Key: "STRING_VALUE",
 * //         },
 * //         Platforms: [ // Platforms
 * //           "WINDOWS" || "WINDOWS_SERVER_2016" || "WINDOWS_SERVER_2019" || "WINDOWS_SERVER_2022" || "WINDOWS_SERVER_2025" || "AMAZON_LINUX2" || "RHEL8" || "ROCKY_LINUX8" || "UBUNTU_PRO_2404",
 * //         ],
 * //         InstanceFamilies: [ // StringList
 * //           "STRING_VALUE",
 * //         ],
 * //         CreatedTime: new Date("TIMESTAMP"),
 * //       },
 * //     ],
 * //     CreatedTime: new Date("TIMESTAMP"),
 * //     PublicBaseImageReleasedDate: new Date("TIMESTAMP"),
 * //     AppstreamAgentVersion: "STRING_VALUE",
 * //     ImagePermissions: { // ImagePermissions
 * //       allowFleet: true || false,
 * //       allowImageBuilder: true || false,
 * //     },
 * //     ImageErrors: [ // ResourceErrors
 * //       { // ResourceError
 * //         ErrorCode: "IAM_SERVICE_ROLE_MISSING_ENI_DESCRIBE_ACTION" || "IAM_SERVICE_ROLE_MISSING_ENI_CREATE_ACTION" || "IAM_SERVICE_ROLE_MISSING_ENI_DELETE_ACTION" || "NETWORK_INTERFACE_LIMIT_EXCEEDED" || "INTERNAL_SERVICE_ERROR" || "IAM_SERVICE_ROLE_IS_MISSING" || "MACHINE_ROLE_IS_MISSING" || "STS_DISABLED_IN_REGION" || "SUBNET_HAS_INSUFFICIENT_IP_ADDRESSES" || "IAM_SERVICE_ROLE_MISSING_DESCRIBE_SUBNET_ACTION" || "SUBNET_NOT_FOUND" || "IMAGE_NOT_FOUND" || "INVALID_SUBNET_CONFIGURATION" || "SECURITY_GROUPS_NOT_FOUND" || "IGW_NOT_ATTACHED" || "IAM_SERVICE_ROLE_MISSING_DESCRIBE_SECURITY_GROUPS_ACTION" || "FLEET_STOPPED" || "FLEET_INSTANCE_PROVISIONING_FAILURE" || "DOMAIN_JOIN_ERROR_FILE_NOT_FOUND" || "DOMAIN_JOIN_ERROR_ACCESS_DENIED" || "DOMAIN_JOIN_ERROR_LOGON_FAILURE" || "DOMAIN_JOIN_ERROR_INVALID_PARAMETER" || "DOMAIN_JOIN_ERROR_MORE_DATA" || "DOMAIN_JOIN_ERROR_NO_SUCH_DOMAIN" || "DOMAIN_JOIN_ERROR_NOT_SUPPORTED" || "DOMAIN_JOIN_NERR_INVALID_WORKGROUP_NAME" || "DOMAIN_JOIN_NERR_WORKSTATION_NOT_STARTED" || "DOMAIN_JOIN_ERROR_DS_MACHINE_ACCOUNT_QUOTA_EXCEEDED" || "DOMAIN_JOIN_NERR_PASSWORD_EXPIRED" || "DOMAIN_JOIN_INTERNAL_SERVICE_ERROR" || "VALIDATION_ERROR",
 * //         ErrorMessage: "STRING_VALUE",
 * //         ErrorTimestamp: new Date("TIMESTAMP"),
 * //       },
 * //     ],
 * //     LatestAppstreamAgentVersion: "TRUE" || "FALSE",
 * //     SupportedInstanceFamilies: [
 * //       "STRING_VALUE",
 * //     ],
 * //     DynamicAppProvidersEnabled: "ENABLED" || "DISABLED",
 * //     ImageSharedWithOthers: "TRUE" || "FALSE",
 * //     ManagedSoftwareIncluded: true || false,
 * //     ImageType: "CUSTOM" || "NATIVE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateImportedImageCommandInput - {@link CreateImportedImageCommandInput}
 * @returns {@link CreateImportedImageCommandOutput}
 * @see {@link CreateImportedImageCommandInput} for command's `input` shape.
 * @see {@link CreateImportedImageCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 * @throws {@link DryRunOperationException} (client fault)
 *  <p>The exception that is thrown when a dry run operation is requested. This indicates that the validation checks have been performed successfully, but no actual resources were created or modified.</p>
 *
 * @throws {@link IncompatibleImageException} (client fault)
 *  <p>The image can't be updated because it's not compatible for updates.</p>
 *
 * @throws {@link InvalidAccountStatusException} (client fault)
 *  <p>The resource cannot be created because your AWS account is suspended. For assistance, contact AWS Support. </p>
 *
 * @throws {@link InvalidRoleException} (client fault)
 *  <p>The specified role is invalid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The requested limit exceeds the permitted limit for an account.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>The attempted operation is not permitted.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The specified resource already exists.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link AppStreamServiceException}
 * <p>Base exception class for all service exceptions from AppStream service.</p>
 *
 *
 * @public
 */
export class CreateImportedImageCommand extends $Command
  .classBuilder<
    CreateImportedImageCommandInput,
    CreateImportedImageCommandOutput,
    AppStreamClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppStreamClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PhotonAdminProxyService", "CreateImportedImage", {})
  .n("AppStreamClient", "CreateImportedImageCommand")
  .sc(CreateImportedImage$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateImportedImageRequest;
      output: CreateImportedImageResult;
    };
    sdk: {
      input: CreateImportedImageCommandInput;
      output: CreateImportedImageCommandOutput;
    };
  };
}
