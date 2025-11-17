// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateImageBuilderRequest, CreateImageBuilderResult } from "../models/models_0";
import { CreateImageBuilder } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateImageBuilderCommand}.
 */
export interface CreateImageBuilderCommandInput extends CreateImageBuilderRequest {}
/**
 * @public
 *
 * The output of {@link CreateImageBuilderCommand}.
 */
export interface CreateImageBuilderCommandOutput extends CreateImageBuilderResult, __MetadataBearer {}

/**
 * <p>Creates an image builder. An image builder is a virtual machine that is used to create an image.</p>
 *          <p>The initial state of the builder is <code>PENDING</code>. When it is ready, the state is <code>RUNNING</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, CreateImageBuilderCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, CreateImageBuilderCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * // import type { AppStreamClientConfig } from "@aws-sdk/client-appstream";
 * const config = {}; // type is AppStreamClientConfig
 * const client = new AppStreamClient(config);
 * const input = { // CreateImageBuilderRequest
 *   Name: "STRING_VALUE", // required
 *   ImageName: "STRING_VALUE",
 *   ImageArn: "STRING_VALUE",
 *   InstanceType: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   DisplayName: "STRING_VALUE",
 *   VpcConfig: { // VpcConfig
 *     SubnetIds: [ // SubnetIdList
 *       "STRING_VALUE",
 *     ],
 *     SecurityGroupIds: [ // SecurityGroupIdList
 *       "STRING_VALUE",
 *     ],
 *   },
 *   IamRoleArn: "STRING_VALUE",
 *   EnableDefaultInternetAccess: true || false,
 *   DomainJoinInfo: { // DomainJoinInfo
 *     DirectoryName: "STRING_VALUE",
 *     OrganizationalUnitDistinguishedName: "STRING_VALUE",
 *   },
 *   AppstreamAgentVersion: "STRING_VALUE",
 *   Tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 *   AccessEndpoints: [ // AccessEndpointList
 *     { // AccessEndpoint
 *       EndpointType: "STREAMING", // required
 *       VpceId: "STRING_VALUE",
 *     },
 *   ],
 *   RootVolumeConfig: { // VolumeConfig
 *     VolumeSizeInGb: Number("int"),
 *   },
 *   SoftwaresToInstall: [ // StringList
 *     "STRING_VALUE",
 *   ],
 *   SoftwaresToUninstall: [
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new CreateImageBuilderCommand(input);
 * const response = await client.send(command);
 * // { // CreateImageBuilderResult
 * //   ImageBuilder: { // ImageBuilder
 * //     Name: "STRING_VALUE", // required
 * //     Arn: "STRING_VALUE",
 * //     ImageArn: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     DisplayName: "STRING_VALUE",
 * //     VpcConfig: { // VpcConfig
 * //       SubnetIds: [ // SubnetIdList
 * //         "STRING_VALUE",
 * //       ],
 * //       SecurityGroupIds: [ // SecurityGroupIdList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     InstanceType: "STRING_VALUE",
 * //     Platform: "WINDOWS" || "WINDOWS_SERVER_2016" || "WINDOWS_SERVER_2019" || "WINDOWS_SERVER_2022" || "AMAZON_LINUX2" || "RHEL8" || "ROCKY_LINUX8",
 * //     IamRoleArn: "STRING_VALUE",
 * //     State: "PENDING" || "UPDATING_AGENT" || "RUNNING" || "STOPPING" || "STOPPED" || "REBOOTING" || "SNAPSHOTTING" || "DELETING" || "FAILED" || "UPDATING" || "PENDING_QUALIFICATION" || "PENDING_SYNCING_APPS" || "SYNCING_APPS" || "PENDING_IMAGE_IMPORT",
 * //     StateChangeReason: { // ImageBuilderStateChangeReason
 * //       Code: "INTERNAL_ERROR" || "IMAGE_UNAVAILABLE",
 * //       Message: "STRING_VALUE",
 * //     },
 * //     CreatedTime: new Date("TIMESTAMP"),
 * //     EnableDefaultInternetAccess: true || false,
 * //     DomainJoinInfo: { // DomainJoinInfo
 * //       DirectoryName: "STRING_VALUE",
 * //       OrganizationalUnitDistinguishedName: "STRING_VALUE",
 * //     },
 * //     NetworkAccessConfiguration: { // NetworkAccessConfiguration
 * //       EniPrivateIpAddress: "STRING_VALUE",
 * //       EniIpv6Addresses: [ // StringList
 * //         "STRING_VALUE",
 * //       ],
 * //       EniId: "STRING_VALUE",
 * //     },
 * //     ImageBuilderErrors: [ // ResourceErrors
 * //       { // ResourceError
 * //         ErrorCode: "IAM_SERVICE_ROLE_MISSING_ENI_DESCRIBE_ACTION" || "IAM_SERVICE_ROLE_MISSING_ENI_CREATE_ACTION" || "IAM_SERVICE_ROLE_MISSING_ENI_DELETE_ACTION" || "NETWORK_INTERFACE_LIMIT_EXCEEDED" || "INTERNAL_SERVICE_ERROR" || "IAM_SERVICE_ROLE_IS_MISSING" || "MACHINE_ROLE_IS_MISSING" || "STS_DISABLED_IN_REGION" || "SUBNET_HAS_INSUFFICIENT_IP_ADDRESSES" || "IAM_SERVICE_ROLE_MISSING_DESCRIBE_SUBNET_ACTION" || "SUBNET_NOT_FOUND" || "IMAGE_NOT_FOUND" || "INVALID_SUBNET_CONFIGURATION" || "SECURITY_GROUPS_NOT_FOUND" || "IGW_NOT_ATTACHED" || "IAM_SERVICE_ROLE_MISSING_DESCRIBE_SECURITY_GROUPS_ACTION" || "FLEET_STOPPED" || "FLEET_INSTANCE_PROVISIONING_FAILURE" || "DOMAIN_JOIN_ERROR_FILE_NOT_FOUND" || "DOMAIN_JOIN_ERROR_ACCESS_DENIED" || "DOMAIN_JOIN_ERROR_LOGON_FAILURE" || "DOMAIN_JOIN_ERROR_INVALID_PARAMETER" || "DOMAIN_JOIN_ERROR_MORE_DATA" || "DOMAIN_JOIN_ERROR_NO_SUCH_DOMAIN" || "DOMAIN_JOIN_ERROR_NOT_SUPPORTED" || "DOMAIN_JOIN_NERR_INVALID_WORKGROUP_NAME" || "DOMAIN_JOIN_NERR_WORKSTATION_NOT_STARTED" || "DOMAIN_JOIN_ERROR_DS_MACHINE_ACCOUNT_QUOTA_EXCEEDED" || "DOMAIN_JOIN_NERR_PASSWORD_EXPIRED" || "DOMAIN_JOIN_INTERNAL_SERVICE_ERROR" || "VALIDATION_ERROR",
 * //         ErrorMessage: "STRING_VALUE",
 * //         ErrorTimestamp: new Date("TIMESTAMP"),
 * //       },
 * //     ],
 * //     AppstreamAgentVersion: "STRING_VALUE",
 * //     AccessEndpoints: [ // AccessEndpointList
 * //       { // AccessEndpoint
 * //         EndpointType: "STREAMING", // required
 * //         VpceId: "STRING_VALUE",
 * //       },
 * //     ],
 * //     RootVolumeConfig: { // VolumeConfig
 * //       VolumeSizeInGb: Number("int"),
 * //     },
 * //     LatestAppstreamAgentVersion: "TRUE" || "FALSE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateImageBuilderCommandInput - {@link CreateImageBuilderCommandInput}
 * @returns {@link CreateImageBuilderCommandOutput}
 * @see {@link CreateImageBuilderCommandInput} for command's `input` shape.
 * @see {@link CreateImageBuilderCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>Indicates an incorrect combination of parameters, or a missing parameter.</p>
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
 * @throws {@link RequestLimitExceededException} (client fault)
 *  <p>WorkSpaces Applications can’t process the request right now because the Describe calls from your AWS account are being throttled by Amazon EC2. Try again later.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The specified resource already exists.</p>
 *
 * @throws {@link ResourceNotAvailableException} (client fault)
 *  <p>The specified resource exists and is not in use, but isn't available.</p>
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
export class CreateImageBuilderCommand extends $Command
  .classBuilder<
    CreateImageBuilderCommandInput,
    CreateImageBuilderCommandOutput,
    AppStreamClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppStreamClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PhotonAdminProxyService", "CreateImageBuilder", {})
  .n("AppStreamClient", "CreateImageBuilderCommand")
  .sc(CreateImageBuilder)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateImageBuilderRequest;
      output: CreateImageBuilderResult;
    };
    sdk: {
      input: CreateImageBuilderCommandInput;
      output: CreateImageBuilderCommandOutput;
    };
  };
}
