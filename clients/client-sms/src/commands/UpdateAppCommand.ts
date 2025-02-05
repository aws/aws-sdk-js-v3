// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateAppRequest, UpdateAppResponse } from "../models/models_0";
import { de_UpdateAppCommand, se_UpdateAppCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SMSClientResolvedConfig } from "../SMSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateAppCommand}.
 */
export interface UpdateAppCommandInput extends UpdateAppRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAppCommand}.
 */
export interface UpdateAppCommandOutput extends UpdateAppResponse, __MetadataBearer {}

/**
 * <p>Updates the specified application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, UpdateAppCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, UpdateAppCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SMSClient(config);
 * const input = { // UpdateAppRequest
 *   appId: "STRING_VALUE",
 *   name: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   roleName: "STRING_VALUE",
 *   serverGroups: [ // ServerGroups
 *     { // ServerGroup
 *       serverGroupId: "STRING_VALUE",
 *       name: "STRING_VALUE",
 *       serverList: [ // ServerList
 *         { // Server
 *           serverId: "STRING_VALUE",
 *           serverType: "VIRTUAL_MACHINE",
 *           vmServer: { // VmServer
 *             vmServerAddress: { // VmServerAddress
 *               vmManagerId: "STRING_VALUE",
 *               vmId: "STRING_VALUE",
 *             },
 *             vmName: "STRING_VALUE",
 *             vmManagerName: "STRING_VALUE",
 *             vmManagerType: "VSPHERE" || "SCVMM" || "HYPERV-MANAGER",
 *             vmPath: "STRING_VALUE",
 *           },
 *           replicationJobId: "STRING_VALUE",
 *           replicationJobTerminated: true || false,
 *         },
 *       ],
 *     },
 *   ],
 *   tags: [ // Tags
 *     { // Tag
 *       key: "STRING_VALUE",
 *       value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new UpdateAppCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAppResponse
 * //   appSummary: { // AppSummary
 * //     appId: "STRING_VALUE",
 * //     importedAppId: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     status: "CREATING" || "ACTIVE" || "UPDATING" || "DELETING" || "DELETED" || "DELETE_FAILED",
 * //     statusMessage: "STRING_VALUE",
 * //     replicationConfigurationStatus: "NOT_CONFIGURED" || "CONFIGURED",
 * //     replicationStatus: "READY_FOR_CONFIGURATION" || "CONFIGURATION_IN_PROGRESS" || "CONFIGURATION_INVALID" || "READY_FOR_REPLICATION" || "VALIDATION_IN_PROGRESS" || "REPLICATION_PENDING" || "REPLICATION_IN_PROGRESS" || "REPLICATED" || "PARTIALLY_REPLICATED" || "DELTA_REPLICATION_IN_PROGRESS" || "DELTA_REPLICATED" || "DELTA_REPLICATION_FAILED" || "REPLICATION_FAILED" || "REPLICATION_STOPPING" || "REPLICATION_STOP_FAILED" || "REPLICATION_STOPPED",
 * //     replicationStatusMessage: "STRING_VALUE",
 * //     latestReplicationTime: new Date("TIMESTAMP"),
 * //     launchConfigurationStatus: "NOT_CONFIGURED" || "CONFIGURED",
 * //     launchStatus: "READY_FOR_CONFIGURATION" || "CONFIGURATION_IN_PROGRESS" || "CONFIGURATION_INVALID" || "READY_FOR_LAUNCH" || "VALIDATION_IN_PROGRESS" || "LAUNCH_PENDING" || "LAUNCH_IN_PROGRESS" || "LAUNCHED" || "PARTIALLY_LAUNCHED" || "DELTA_LAUNCH_IN_PROGRESS" || "DELTA_LAUNCH_FAILED" || "LAUNCH_FAILED" || "TERMINATE_IN_PROGRESS" || "TERMINATE_FAILED" || "TERMINATED",
 * //     launchStatusMessage: "STRING_VALUE",
 * //     launchDetails: { // LaunchDetails
 * //       latestLaunchTime: new Date("TIMESTAMP"),
 * //       stackName: "STRING_VALUE",
 * //       stackId: "STRING_VALUE",
 * //     },
 * //     creationTime: new Date("TIMESTAMP"),
 * //     lastModified: new Date("TIMESTAMP"),
 * //     roleName: "STRING_VALUE",
 * //     totalServerGroups: Number("int"),
 * //     totalServers: Number("int"),
 * //   },
 * //   serverGroups: [ // ServerGroups
 * //     { // ServerGroup
 * //       serverGroupId: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       serverList: [ // ServerList
 * //         { // Server
 * //           serverId: "STRING_VALUE",
 * //           serverType: "VIRTUAL_MACHINE",
 * //           vmServer: { // VmServer
 * //             vmServerAddress: { // VmServerAddress
 * //               vmManagerId: "STRING_VALUE",
 * //               vmId: "STRING_VALUE",
 * //             },
 * //             vmName: "STRING_VALUE",
 * //             vmManagerName: "STRING_VALUE",
 * //             vmManagerType: "VSPHERE" || "SCVMM" || "HYPERV-MANAGER",
 * //             vmPath: "STRING_VALUE",
 * //           },
 * //           replicationJobId: "STRING_VALUE",
 * //           replicationJobTerminated: true || false,
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   tags: [ // Tags
 * //     { // Tag
 * //       key: "STRING_VALUE",
 * //       value: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param UpdateAppCommandInput - {@link UpdateAppCommandInput}
 * @returns {@link UpdateAppCommandOutput}
 * @see {@link UpdateAppCommandInput} for command's `input` shape.
 * @see {@link UpdateAppCommandOutput} for command's `response` shape.
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
 * @public
 */
export class UpdateAppCommand extends $Command
  .classBuilder<
    UpdateAppCommandInput,
    UpdateAppCommandOutput,
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
  .s("AWSServerMigrationService_V2016_10_24", "UpdateApp", {})
  .n("SMSClient", "UpdateAppCommand")
  .f(void 0, void 0)
  .ser(se_UpdateAppCommand)
  .de(de_UpdateAppCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAppRequest;
      output: UpdateAppResponse;
    };
    sdk: {
      input: UpdateAppCommandInput;
      output: UpdateAppCommandOutput;
    };
  };
}
