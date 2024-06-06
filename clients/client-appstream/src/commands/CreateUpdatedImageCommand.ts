// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateUpdatedImageRequest, CreateUpdatedImageResult } from "../models/models_0";
import { de_CreateUpdatedImageCommand, se_CreateUpdatedImageCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateUpdatedImageCommand}.
 */
export interface CreateUpdatedImageCommandInput extends CreateUpdatedImageRequest {}
/**
 * @public
 *
 * The output of {@link CreateUpdatedImageCommand}.
 */
export interface CreateUpdatedImageCommandOutput extends CreateUpdatedImageResult, __MetadataBearer {}

/**
 * <p>Creates a new image with the latest Windows operating system updates, driver updates, and AppStream 2.0 agent software.</p>
 *          <p>For more information, see the "Update an Image by Using
 *             Managed AppStream 2.0 Image Updates" section in <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/administer-images.html">Administer Your AppStream 2.0 Images</a>, in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, CreateUpdatedImageCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, CreateUpdatedImageCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const input = { // CreateUpdatedImageRequest
 *   existingImageName: "STRING_VALUE", // required
 *   newImageName: "STRING_VALUE", // required
 *   newImageDescription: "STRING_VALUE",
 *   newImageDisplayName: "STRING_VALUE",
 *   newImageTags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 *   dryRun: true || false,
 * };
 * const command = new CreateUpdatedImageCommand(input);
 * const response = await client.send(command);
 * // { // CreateUpdatedImageResult
 * //   image: { // Image
 * //     Name: "STRING_VALUE", // required
 * //     Arn: "STRING_VALUE",
 * //     BaseImageArn: "STRING_VALUE",
 * //     DisplayName: "STRING_VALUE",
 * //     State: "PENDING" || "AVAILABLE" || "FAILED" || "COPYING" || "DELETING" || "CREATING" || "IMPORTING",
 * //     Visibility: "PUBLIC" || "PRIVATE" || "SHARED",
 * //     ImageBuilderSupported: true || false,
 * //     ImageBuilderName: "STRING_VALUE",
 * //     Platform: "WINDOWS" || "WINDOWS_SERVER_2016" || "WINDOWS_SERVER_2019" || "WINDOWS_SERVER_2022" || "AMAZON_LINUX2",
 * //     Description: "STRING_VALUE",
 * //     StateChangeReason: { // ImageStateChangeReason
 * //       Code: "INTERNAL_ERROR" || "IMAGE_BUILDER_NOT_AVAILABLE" || "IMAGE_COPY_FAILURE",
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
 * //           "WINDOWS" || "WINDOWS_SERVER_2016" || "WINDOWS_SERVER_2019" || "WINDOWS_SERVER_2022" || "AMAZON_LINUX2",
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
 * //         ErrorCode: "IAM_SERVICE_ROLE_MISSING_ENI_DESCRIBE_ACTION" || "IAM_SERVICE_ROLE_MISSING_ENI_CREATE_ACTION" || "IAM_SERVICE_ROLE_MISSING_ENI_DELETE_ACTION" || "NETWORK_INTERFACE_LIMIT_EXCEEDED" || "INTERNAL_SERVICE_ERROR" || "IAM_SERVICE_ROLE_IS_MISSING" || "MACHINE_ROLE_IS_MISSING" || "STS_DISABLED_IN_REGION" || "SUBNET_HAS_INSUFFICIENT_IP_ADDRESSES" || "IAM_SERVICE_ROLE_MISSING_DESCRIBE_SUBNET_ACTION" || "SUBNET_NOT_FOUND" || "IMAGE_NOT_FOUND" || "INVALID_SUBNET_CONFIGURATION" || "SECURITY_GROUPS_NOT_FOUND" || "IGW_NOT_ATTACHED" || "IAM_SERVICE_ROLE_MISSING_DESCRIBE_SECURITY_GROUPS_ACTION" || "FLEET_STOPPED" || "FLEET_INSTANCE_PROVISIONING_FAILURE" || "DOMAIN_JOIN_ERROR_FILE_NOT_FOUND" || "DOMAIN_JOIN_ERROR_ACCESS_DENIED" || "DOMAIN_JOIN_ERROR_LOGON_FAILURE" || "DOMAIN_JOIN_ERROR_INVALID_PARAMETER" || "DOMAIN_JOIN_ERROR_MORE_DATA" || "DOMAIN_JOIN_ERROR_NO_SUCH_DOMAIN" || "DOMAIN_JOIN_ERROR_NOT_SUPPORTED" || "DOMAIN_JOIN_NERR_INVALID_WORKGROUP_NAME" || "DOMAIN_JOIN_NERR_WORKSTATION_NOT_STARTED" || "DOMAIN_JOIN_ERROR_DS_MACHINE_ACCOUNT_QUOTA_EXCEEDED" || "DOMAIN_JOIN_NERR_PASSWORD_EXPIRED" || "DOMAIN_JOIN_INTERNAL_SERVICE_ERROR",
 * //         ErrorMessage: "STRING_VALUE",
 * //         ErrorTimestamp: new Date("TIMESTAMP"),
 * //       },
 * //     ],
 * //   },
 * //   canUpdateImage: true || false,
 * // };
 *
 * ```
 *
 * @param CreateUpdatedImageCommandInput - {@link CreateUpdatedImageCommandInput}
 * @returns {@link CreateUpdatedImageCommandOutput}
 * @see {@link CreateUpdatedImageCommandInput} for command's `input` shape.
 * @see {@link CreateUpdatedImageCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>An API error occurred. Wait a few minutes and try again.</p>
 *
 * @throws {@link IncompatibleImageException} (client fault)
 *  <p>The image can't be updated because it's not compatible for updates.</p>
 *
 * @throws {@link InvalidAccountStatusException} (client fault)
 *  <p>The resource cannot be created because your AWS account is suspended. For assistance, contact AWS Support. </p>
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
 * @public
 */
export class CreateUpdatedImageCommand extends $Command
  .classBuilder<
    CreateUpdatedImageCommandInput,
    CreateUpdatedImageCommandOutput,
    AppStreamClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: AppStreamClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("PhotonAdminProxyService", "CreateUpdatedImage", {})
  .n("AppStreamClient", "CreateUpdatedImageCommand")
  .f(void 0, void 0)
  .ser(se_CreateUpdatedImageCommand)
  .de(de_CreateUpdatedImageCommand)
  .build() {}
