// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteImageRequest, DeleteImageResult } from "../models/models_0";
import { DeleteImage } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteImageCommand}.
 */
export interface DeleteImageCommandInput extends DeleteImageRequest {}
/**
 * @public
 *
 * The output of {@link DeleteImageCommand}.
 */
export interface DeleteImageCommandOutput extends DeleteImageResult, __MetadataBearer {}

/**
 * <p>Deletes the specified image. You cannot delete an image when it is in use.
 *             After you delete an image, you cannot provision new capacity using the image.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, DeleteImageCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, DeleteImageCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * // import type { AppStreamClientConfig } from "@aws-sdk/client-appstream";
 * const config = {}; // type is AppStreamClientConfig
 * const client = new AppStreamClient(config);
 * const input = { // DeleteImageRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DeleteImageCommand(input);
 * const response = await client.send(command);
 * // { // DeleteImageResult
 * //   Image: { // Image
 * //     Name: "STRING_VALUE", // required
 * //     Arn: "STRING_VALUE",
 * //     BaseImageArn: "STRING_VALUE",
 * //     DisplayName: "STRING_VALUE",
 * //     State: "PENDING" || "AVAILABLE" || "FAILED" || "COPYING" || "DELETING" || "CREATING" || "IMPORTING" || "VALIDATING",
 * //     Visibility: "PUBLIC" || "PRIVATE" || "SHARED",
 * //     ImageBuilderSupported: true || false,
 * //     ImageBuilderName: "STRING_VALUE",
 * //     Platform: "WINDOWS" || "WINDOWS_SERVER_2016" || "WINDOWS_SERVER_2019" || "WINDOWS_SERVER_2022" || "AMAZON_LINUX2" || "RHEL8" || "ROCKY_LINUX8",
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
 * //           "WINDOWS" || "WINDOWS_SERVER_2016" || "WINDOWS_SERVER_2019" || "WINDOWS_SERVER_2022" || "AMAZON_LINUX2" || "RHEL8" || "ROCKY_LINUX8",
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
 * @param DeleteImageCommandInput - {@link DeleteImageCommandInput}
 * @returns {@link DeleteImageCommandOutput}
 * @see {@link DeleteImageCommandInput} for command's `input` shape.
 * @see {@link DeleteImageCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>An API error occurred. Wait a few minutes and try again.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>The attempted operation is not permitted.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The specified resource is in use.</p>
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
export class DeleteImageCommand extends $Command
  .classBuilder<
    DeleteImageCommandInput,
    DeleteImageCommandOutput,
    AppStreamClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppStreamClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PhotonAdminProxyService", "DeleteImage", {})
  .n("AppStreamClient", "DeleteImageCommand")
  .sc(DeleteImage)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteImageRequest;
      output: DeleteImageResult;
    };
    sdk: {
      input: DeleteImageCommandInput;
      output: DeleteImageCommandOutput;
    };
  };
}
