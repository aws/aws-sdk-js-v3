// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeImageBuildersRequest, DescribeImageBuildersResult } from "../models/models_0";
import { de_DescribeImageBuildersCommand, se_DescribeImageBuildersCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeImageBuildersCommand}.
 */
export interface DescribeImageBuildersCommandInput extends DescribeImageBuildersRequest {}
/**
 * @public
 *
 * The output of {@link DescribeImageBuildersCommand}.
 */
export interface DescribeImageBuildersCommandOutput extends DescribeImageBuildersResult, __MetadataBearer {}

/**
 * <p>Retrieves a list that describes one or more specified image builders, if the image builder names are provided. Otherwise, all image builders in the account are described.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, DescribeImageBuildersCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, DescribeImageBuildersCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const input = { // DescribeImageBuildersRequest
 *   Names: [ // StringList
 *     "STRING_VALUE",
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeImageBuildersCommand(input);
 * const response = await client.send(command);
 * // { // DescribeImageBuildersResult
 * //   ImageBuilders: [ // ImageBuilderList
 * //     { // ImageBuilder
 * //       Name: "STRING_VALUE", // required
 * //       Arn: "STRING_VALUE",
 * //       ImageArn: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       DisplayName: "STRING_VALUE",
 * //       VpcConfig: { // VpcConfig
 * //         SubnetIds: [ // SubnetIdList
 * //           "STRING_VALUE",
 * //         ],
 * //         SecurityGroupIds: [ // SecurityGroupIdList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       InstanceType: "STRING_VALUE",
 * //       Platform: "WINDOWS" || "WINDOWS_SERVER_2016" || "WINDOWS_SERVER_2019" || "WINDOWS_SERVER_2022" || "AMAZON_LINUX2",
 * //       IamRoleArn: "STRING_VALUE",
 * //       State: "PENDING" || "UPDATING_AGENT" || "RUNNING" || "STOPPING" || "STOPPED" || "REBOOTING" || "SNAPSHOTTING" || "DELETING" || "FAILED" || "UPDATING" || "PENDING_QUALIFICATION",
 * //       StateChangeReason: { // ImageBuilderStateChangeReason
 * //         Code: "INTERNAL_ERROR" || "IMAGE_UNAVAILABLE",
 * //         Message: "STRING_VALUE",
 * //       },
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //       EnableDefaultInternetAccess: true || false,
 * //       DomainJoinInfo: { // DomainJoinInfo
 * //         DirectoryName: "STRING_VALUE",
 * //         OrganizationalUnitDistinguishedName: "STRING_VALUE",
 * //       },
 * //       NetworkAccessConfiguration: { // NetworkAccessConfiguration
 * //         EniPrivateIpAddress: "STRING_VALUE",
 * //         EniId: "STRING_VALUE",
 * //       },
 * //       ImageBuilderErrors: [ // ResourceErrors
 * //         { // ResourceError
 * //           ErrorCode: "IAM_SERVICE_ROLE_MISSING_ENI_DESCRIBE_ACTION" || "IAM_SERVICE_ROLE_MISSING_ENI_CREATE_ACTION" || "IAM_SERVICE_ROLE_MISSING_ENI_DELETE_ACTION" || "NETWORK_INTERFACE_LIMIT_EXCEEDED" || "INTERNAL_SERVICE_ERROR" || "IAM_SERVICE_ROLE_IS_MISSING" || "MACHINE_ROLE_IS_MISSING" || "STS_DISABLED_IN_REGION" || "SUBNET_HAS_INSUFFICIENT_IP_ADDRESSES" || "IAM_SERVICE_ROLE_MISSING_DESCRIBE_SUBNET_ACTION" || "SUBNET_NOT_FOUND" || "IMAGE_NOT_FOUND" || "INVALID_SUBNET_CONFIGURATION" || "SECURITY_GROUPS_NOT_FOUND" || "IGW_NOT_ATTACHED" || "IAM_SERVICE_ROLE_MISSING_DESCRIBE_SECURITY_GROUPS_ACTION" || "FLEET_STOPPED" || "FLEET_INSTANCE_PROVISIONING_FAILURE" || "DOMAIN_JOIN_ERROR_FILE_NOT_FOUND" || "DOMAIN_JOIN_ERROR_ACCESS_DENIED" || "DOMAIN_JOIN_ERROR_LOGON_FAILURE" || "DOMAIN_JOIN_ERROR_INVALID_PARAMETER" || "DOMAIN_JOIN_ERROR_MORE_DATA" || "DOMAIN_JOIN_ERROR_NO_SUCH_DOMAIN" || "DOMAIN_JOIN_ERROR_NOT_SUPPORTED" || "DOMAIN_JOIN_NERR_INVALID_WORKGROUP_NAME" || "DOMAIN_JOIN_NERR_WORKSTATION_NOT_STARTED" || "DOMAIN_JOIN_ERROR_DS_MACHINE_ACCOUNT_QUOTA_EXCEEDED" || "DOMAIN_JOIN_NERR_PASSWORD_EXPIRED" || "DOMAIN_JOIN_INTERNAL_SERVICE_ERROR",
 * //           ErrorMessage: "STRING_VALUE",
 * //           ErrorTimestamp: new Date("TIMESTAMP"),
 * //         },
 * //       ],
 * //       AppstreamAgentVersion: "STRING_VALUE",
 * //       AccessEndpoints: [ // AccessEndpointList
 * //         { // AccessEndpoint
 * //           EndpointType: "STREAMING", // required
 * //           VpceId: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeImageBuildersCommandInput - {@link DescribeImageBuildersCommandInput}
 * @returns {@link DescribeImageBuildersCommandOutput}
 * @see {@link DescribeImageBuildersCommandInput} for command's `input` shape.
 * @see {@link DescribeImageBuildersCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link AppStreamServiceException}
 * <p>Base exception class for all service exceptions from AppStream service.</p>
 *
 * @public
 */
export class DescribeImageBuildersCommand extends $Command
  .classBuilder<
    DescribeImageBuildersCommandInput,
    DescribeImageBuildersCommandOutput,
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
  .s("PhotonAdminProxyService", "DescribeImageBuilders", {})
  .n("AppStreamClient", "DescribeImageBuildersCommand")
  .f(void 0, void 0)
  .ser(se_DescribeImageBuildersCommand)
  .de(de_DescribeImageBuildersCommand)
  .build() {}
