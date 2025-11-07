// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeAppBlockBuildersRequest, DescribeAppBlockBuildersResult } from "../models/models_0";
import { DescribeAppBlockBuilders } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAppBlockBuildersCommand}.
 */
export interface DescribeAppBlockBuildersCommandInput extends DescribeAppBlockBuildersRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAppBlockBuildersCommand}.
 */
export interface DescribeAppBlockBuildersCommandOutput extends DescribeAppBlockBuildersResult, __MetadataBearer {}

/**
 * <p>Retrieves a list that describes one or more app block builders.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, DescribeAppBlockBuildersCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, DescribeAppBlockBuildersCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * // import type { AppStreamClientConfig } from "@aws-sdk/client-appstream";
 * const config = {}; // type is AppStreamClientConfig
 * const client = new AppStreamClient(config);
 * const input = { // DescribeAppBlockBuildersRequest
 *   Names: [ // StringList
 *     "STRING_VALUE",
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeAppBlockBuildersCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAppBlockBuildersResult
 * //   AppBlockBuilders: [ // AppBlockBuilderList
 * //     { // AppBlockBuilder
 * //       Arn: "STRING_VALUE", // required
 * //       Name: "STRING_VALUE", // required
 * //       DisplayName: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Platform: "WINDOWS_SERVER_2019", // required
 * //       InstanceType: "STRING_VALUE", // required
 * //       EnableDefaultInternetAccess: true || false,
 * //       IamRoleArn: "STRING_VALUE",
 * //       VpcConfig: { // VpcConfig
 * //         SubnetIds: [ // SubnetIdList
 * //           "STRING_VALUE",
 * //         ],
 * //         SecurityGroupIds: [ // SecurityGroupIdList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       State: "STARTING" || "RUNNING" || "STOPPING" || "STOPPED", // required
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //       AppBlockBuilderErrors: [ // ResourceErrors
 * //         { // ResourceError
 * //           ErrorCode: "IAM_SERVICE_ROLE_MISSING_ENI_DESCRIBE_ACTION" || "IAM_SERVICE_ROLE_MISSING_ENI_CREATE_ACTION" || "IAM_SERVICE_ROLE_MISSING_ENI_DELETE_ACTION" || "NETWORK_INTERFACE_LIMIT_EXCEEDED" || "INTERNAL_SERVICE_ERROR" || "IAM_SERVICE_ROLE_IS_MISSING" || "MACHINE_ROLE_IS_MISSING" || "STS_DISABLED_IN_REGION" || "SUBNET_HAS_INSUFFICIENT_IP_ADDRESSES" || "IAM_SERVICE_ROLE_MISSING_DESCRIBE_SUBNET_ACTION" || "SUBNET_NOT_FOUND" || "IMAGE_NOT_FOUND" || "INVALID_SUBNET_CONFIGURATION" || "SECURITY_GROUPS_NOT_FOUND" || "IGW_NOT_ATTACHED" || "IAM_SERVICE_ROLE_MISSING_DESCRIBE_SECURITY_GROUPS_ACTION" || "FLEET_STOPPED" || "FLEET_INSTANCE_PROVISIONING_FAILURE" || "DOMAIN_JOIN_ERROR_FILE_NOT_FOUND" || "DOMAIN_JOIN_ERROR_ACCESS_DENIED" || "DOMAIN_JOIN_ERROR_LOGON_FAILURE" || "DOMAIN_JOIN_ERROR_INVALID_PARAMETER" || "DOMAIN_JOIN_ERROR_MORE_DATA" || "DOMAIN_JOIN_ERROR_NO_SUCH_DOMAIN" || "DOMAIN_JOIN_ERROR_NOT_SUPPORTED" || "DOMAIN_JOIN_NERR_INVALID_WORKGROUP_NAME" || "DOMAIN_JOIN_NERR_WORKSTATION_NOT_STARTED" || "DOMAIN_JOIN_ERROR_DS_MACHINE_ACCOUNT_QUOTA_EXCEEDED" || "DOMAIN_JOIN_NERR_PASSWORD_EXPIRED" || "DOMAIN_JOIN_INTERNAL_SERVICE_ERROR",
 * //           ErrorMessage: "STRING_VALUE",
 * //           ErrorTimestamp: new Date("TIMESTAMP"),
 * //         },
 * //       ],
 * //       StateChangeReason: { // AppBlockBuilderStateChangeReason
 * //         Code: "INTERNAL_ERROR",
 * //         Message: "STRING_VALUE",
 * //       },
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
 * @param DescribeAppBlockBuildersCommandInput - {@link DescribeAppBlockBuildersCommandInput}
 * @returns {@link DescribeAppBlockBuildersCommandOutput}
 * @see {@link DescribeAppBlockBuildersCommandInput} for command's `input` shape.
 * @see {@link DescribeAppBlockBuildersCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>The attempted operation is not permitted.</p>
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
export class DescribeAppBlockBuildersCommand extends $Command
  .classBuilder<
    DescribeAppBlockBuildersCommandInput,
    DescribeAppBlockBuildersCommandOutput,
    AppStreamClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppStreamClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PhotonAdminProxyService", "DescribeAppBlockBuilders", {})
  .n("AppStreamClient", "DescribeAppBlockBuildersCommand")
  .sc(DescribeAppBlockBuilders)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAppBlockBuildersRequest;
      output: DescribeAppBlockBuildersResult;
    };
    sdk: {
      input: DescribeAppBlockBuildersCommandInput;
      output: DescribeAppBlockBuildersCommandOutput;
    };
  };
}
