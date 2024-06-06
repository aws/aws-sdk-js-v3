// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetAppReplicationConfigurationRequest, GetAppReplicationConfigurationResponse } from "../models/models_0";
import {
  de_GetAppReplicationConfigurationCommand,
  se_GetAppReplicationConfigurationCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SMSClientResolvedConfig } from "../SMSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAppReplicationConfigurationCommand}.
 */
export interface GetAppReplicationConfigurationCommandInput extends GetAppReplicationConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetAppReplicationConfigurationCommand}.
 */
export interface GetAppReplicationConfigurationCommandOutput
  extends GetAppReplicationConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves the application replication configuration associated with the specified
 *             application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, GetAppReplicationConfigurationCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, GetAppReplicationConfigurationCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const input = { // GetAppReplicationConfigurationRequest
 *   appId: "STRING_VALUE",
 * };
 * const command = new GetAppReplicationConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetAppReplicationConfigurationResponse
 * //   serverGroupReplicationConfigurations: [ // ServerGroupReplicationConfigurations
 * //     { // ServerGroupReplicationConfiguration
 * //       serverGroupId: "STRING_VALUE",
 * //       serverReplicationConfigurations: [ // ServerReplicationConfigurations
 * //         { // ServerReplicationConfiguration
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
 * //           serverReplicationParameters: { // ServerReplicationParameters
 * //             seedTime: new Date("TIMESTAMP"),
 * //             frequency: Number("int"),
 * //             runOnce: true || false,
 * //             licenseType: "AWS" || "BYOL",
 * //             numberOfRecentAmisToKeep: Number("int"),
 * //             encrypted: true || false,
 * //             kmsKeyId: "STRING_VALUE",
 * //           },
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetAppReplicationConfigurationCommandInput - {@link GetAppReplicationConfigurationCommandInput}
 * @returns {@link GetAppReplicationConfigurationCommandOutput}
 * @see {@link GetAppReplicationConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetAppReplicationConfigurationCommandOutput} for command's `response` shape.
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
export class GetAppReplicationConfigurationCommand extends $Command
  .classBuilder<
    GetAppReplicationConfigurationCommandInput,
    GetAppReplicationConfigurationCommandOutput,
    SMSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SMSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSServerMigrationService_V2016_10_24", "GetAppReplicationConfiguration", {})
  .n("SMSClient", "GetAppReplicationConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_GetAppReplicationConfigurationCommand)
  .de(de_GetAppReplicationConfigurationCommand)
  .build() {}
