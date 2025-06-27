// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetAppLaunchConfigurationRequest, GetAppLaunchConfigurationResponse } from "../models/models_0";
import { de_GetAppLaunchConfigurationCommand, se_GetAppLaunchConfigurationCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SMSClientResolvedConfig } from "../SMSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAppLaunchConfigurationCommand}.
 */
export interface GetAppLaunchConfigurationCommandInput extends GetAppLaunchConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetAppLaunchConfigurationCommand}.
 */
export interface GetAppLaunchConfigurationCommandOutput extends GetAppLaunchConfigurationResponse, __MetadataBearer {}

/**
 * <p>Retrieves the application launch configuration associated with the specified application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, GetAppLaunchConfigurationCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, GetAppLaunchConfigurationCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const input = { // GetAppLaunchConfigurationRequest
 *   appId: "STRING_VALUE",
 * };
 * const command = new GetAppLaunchConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetAppLaunchConfigurationResponse
 * //   appId: "STRING_VALUE",
 * //   roleName: "STRING_VALUE",
 * //   autoLaunch: true || false,
 * //   serverGroupLaunchConfigurations: [ // ServerGroupLaunchConfigurations
 * //     { // ServerGroupLaunchConfiguration
 * //       serverGroupId: "STRING_VALUE",
 * //       launchOrder: Number("int"),
 * //       serverLaunchConfigurations: [ // ServerLaunchConfigurations
 * //         { // ServerLaunchConfiguration
 * //           server: { // Server
 * //             serverId: "STRING_VALUE",
 * //             serverType: "VIRTUAL_MACHINE",
 * //             vmServer: { // VmServer
 * //               vmServerAddress: { // VmServerAddress
 * //                 vmManagerId: "STRING_VALUE",
 * //                 vmId: "STRING_VALUE",
 * //               },
 * //               vmName: "STRING_VALUE",
 * //               vmManagerName: "STRING_VALUE",
 * //               vmManagerType: "VSPHERE" || "SCVMM" || "HYPERV-MANAGER",
 * //               vmPath: "STRING_VALUE",
 * //             },
 * //             replicationJobId: "STRING_VALUE",
 * //             replicationJobTerminated: true || false,
 * //           },
 * //           logicalId: "STRING_VALUE",
 * //           vpc: "STRING_VALUE",
 * //           subnet: "STRING_VALUE",
 * //           securityGroup: "STRING_VALUE",
 * //           ec2KeyName: "STRING_VALUE",
 * //           userData: { // UserData
 * //             s3Location: { // S3Location
 * //               bucket: "STRING_VALUE",
 * //               key: "STRING_VALUE",
 * //             },
 * //           },
 * //           instanceType: "STRING_VALUE",
 * //           associatePublicIpAddress: true || false,
 * //           iamInstanceProfileName: "STRING_VALUE",
 * //           configureScript: {
 * //             bucket: "STRING_VALUE",
 * //             key: "STRING_VALUE",
 * //           },
 * //           configureScriptType: "SHELL_SCRIPT" || "POWERSHELL_SCRIPT",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetAppLaunchConfigurationCommandInput - {@link GetAppLaunchConfigurationCommandInput}
 * @returns {@link GetAppLaunchConfigurationCommandOutput}
 * @see {@link GetAppLaunchConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetAppLaunchConfigurationCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for SMSClient's `config` shape.
 *
 * @throws {@link InternalError} (server fault)
 *  <p>An internal error occurred.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A specified parameter is not valid.</p>
 *
 * @throws {@link MissingRequiredParameterException} (client fault)
 *  <p>A required parameter is missing.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>This operation is not allowed.</p>
 *
 * @throws {@link UnauthorizedOperationException} (client fault)
 *  <p>You lack permissions needed to perform this operation. Check your IAM policies,
 *             and ensure that you are using the correct access keys.</p>
 *
 * @throws {@link SMSServiceException}
 * <p>Base exception class for all service exceptions from SMS service.</p>
 *
 *
 * @public
 */
export class GetAppLaunchConfigurationCommand extends $Command
  .classBuilder<
    GetAppLaunchConfigurationCommandInput,
    GetAppLaunchConfigurationCommandOutput,
    SMSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SMSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSServerMigrationService_V2016_10_24", "GetAppLaunchConfiguration", {})
  .n("SMSClient", "GetAppLaunchConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_GetAppLaunchConfigurationCommand)
  .de(de_GetAppLaunchConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAppLaunchConfigurationRequest;
      output: GetAppLaunchConfigurationResponse;
    };
    sdk: {
      input: GetAppLaunchConfigurationCommandInput;
      output: GetAppLaunchConfigurationCommandOutput;
    };
  };
}
