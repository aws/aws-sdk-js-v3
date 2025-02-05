// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { PutAppReplicationConfigurationRequest, PutAppReplicationConfigurationResponse } from "../models/models_0";
import {
  de_PutAppReplicationConfigurationCommand,
  se_PutAppReplicationConfigurationCommand,
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
 * The input for {@link PutAppReplicationConfigurationCommand}.
 */
export interface PutAppReplicationConfigurationCommandInput extends PutAppReplicationConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link PutAppReplicationConfigurationCommand}.
 */
export interface PutAppReplicationConfigurationCommandOutput
  extends PutAppReplicationConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Creates or updates the replication configuration for the specified application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, PutAppReplicationConfigurationCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, PutAppReplicationConfigurationCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SMSClient(config);
 * const input = { // PutAppReplicationConfigurationRequest
 *   appId: "STRING_VALUE",
 *   serverGroupReplicationConfigurations: [ // ServerGroupReplicationConfigurations
 *     { // ServerGroupReplicationConfiguration
 *       serverGroupId: "STRING_VALUE",
 *       serverReplicationConfigurations: [ // ServerReplicationConfigurations
 *         { // ServerReplicationConfiguration
 *           server: { // Server
 *             serverId: "STRING_VALUE",
 *             serverType: "VIRTUAL_MACHINE",
 *             vmServer: { // VmServer
 *               vmServerAddress: { // VmServerAddress
 *                 vmManagerId: "STRING_VALUE",
 *                 vmId: "STRING_VALUE",
 *               },
 *               vmName: "STRING_VALUE",
 *               vmManagerName: "STRING_VALUE",
 *               vmManagerType: "VSPHERE" || "SCVMM" || "HYPERV-MANAGER",
 *               vmPath: "STRING_VALUE",
 *             },
 *             replicationJobId: "STRING_VALUE",
 *             replicationJobTerminated: true || false,
 *           },
 *           serverReplicationParameters: { // ServerReplicationParameters
 *             seedTime: new Date("TIMESTAMP"),
 *             frequency: Number("int"),
 *             runOnce: true || false,
 *             licenseType: "AWS" || "BYOL",
 *             numberOfRecentAmisToKeep: Number("int"),
 *             encrypted: true || false,
 *             kmsKeyId: "STRING_VALUE",
 *           },
 *         },
 *       ],
 *     },
 *   ],
 * };
 * const command = new PutAppReplicationConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutAppReplicationConfigurationCommandInput - {@link PutAppReplicationConfigurationCommandInput}
 * @returns {@link PutAppReplicationConfigurationCommandOutput}
 * @see {@link PutAppReplicationConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutAppReplicationConfigurationCommandOutput} for command's `response` shape.
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
export class PutAppReplicationConfigurationCommand extends $Command
  .classBuilder<
    PutAppReplicationConfigurationCommandInput,
    PutAppReplicationConfigurationCommandOutput,
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
  .s("AWSServerMigrationService_V2016_10_24", "PutAppReplicationConfiguration", {})
  .n("SMSClient", "PutAppReplicationConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_PutAppReplicationConfigurationCommand)
  .de(de_PutAppReplicationConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutAppReplicationConfigurationRequest;
      output: {};
    };
    sdk: {
      input: PutAppReplicationConfigurationCommandInput;
      output: PutAppReplicationConfigurationCommandOutput;
    };
  };
}
