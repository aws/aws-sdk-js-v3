// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateEnvironmentInput,
  UpdateEnvironmentInputFilterSensitiveLog,
  UpdateEnvironmentOutput,
} from "../models/models_0";
import { MWAAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MWAAClient";
import { de_UpdateEnvironmentCommand, se_UpdateEnvironmentCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateEnvironmentCommand}.
 */
export interface UpdateEnvironmentCommandInput extends UpdateEnvironmentInput {}
/**
 * @public
 *
 * The output of {@link UpdateEnvironmentCommand}.
 */
export interface UpdateEnvironmentCommandOutput extends UpdateEnvironmentOutput, __MetadataBearer {}

/**
 * <p>Updates an Amazon Managed Workflows for Apache Airflow (MWAA) environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MWAAClient, UpdateEnvironmentCommand } from "@aws-sdk/client-mwaa"; // ES Modules import
 * // const { MWAAClient, UpdateEnvironmentCommand } = require("@aws-sdk/client-mwaa"); // CommonJS import
 * // import type { MWAAClientConfig } from "@aws-sdk/client-mwaa";
 * const config = {}; // type is MWAAClientConfig
 * const client = new MWAAClient(config);
 * const input = { // UpdateEnvironmentInput
 *   Name: "STRING_VALUE", // required
 *   ExecutionRoleArn: "STRING_VALUE",
 *   AirflowConfigurationOptions: { // AirflowConfigurationOptions
 *     "<keys>": "STRING_VALUE",
 *   },
 *   AirflowVersion: "STRING_VALUE",
 *   DagS3Path: "STRING_VALUE",
 *   EnvironmentClass: "STRING_VALUE",
 *   LoggingConfiguration: { // LoggingConfigurationInput
 *     DagProcessingLogs: { // ModuleLoggingConfigurationInput
 *       Enabled: true || false, // required
 *       LogLevel: "STRING_VALUE", // required
 *     },
 *     SchedulerLogs: {
 *       Enabled: true || false, // required
 *       LogLevel: "STRING_VALUE", // required
 *     },
 *     WebserverLogs: {
 *       Enabled: true || false, // required
 *       LogLevel: "STRING_VALUE", // required
 *     },
 *     WorkerLogs: {
 *       Enabled: true || false, // required
 *       LogLevel: "STRING_VALUE", // required
 *     },
 *     TaskLogs: {
 *       Enabled: true || false, // required
 *       LogLevel: "STRING_VALUE", // required
 *     },
 *   },
 *   MaxWorkers: Number("int"),
 *   MinWorkers: Number("int"),
 *   MaxWebservers: Number("int"),
 *   MinWebservers: Number("int"),
 *   WorkerReplacementStrategy: "STRING_VALUE",
 *   NetworkConfiguration: { // UpdateNetworkConfigurationInput
 *     SecurityGroupIds: [ // SecurityGroupList // required
 *       "STRING_VALUE",
 *     ],
 *   },
 *   PluginsS3Path: "STRING_VALUE",
 *   PluginsS3ObjectVersion: "STRING_VALUE",
 *   RequirementsS3Path: "STRING_VALUE",
 *   RequirementsS3ObjectVersion: "STRING_VALUE",
 *   Schedulers: Number("int"),
 *   SourceBucketArn: "STRING_VALUE",
 *   StartupScriptS3Path: "STRING_VALUE",
 *   StartupScriptS3ObjectVersion: "STRING_VALUE",
 *   WebserverAccessMode: "STRING_VALUE",
 *   WeeklyMaintenanceWindowStart: "STRING_VALUE",
 * };
 * const command = new UpdateEnvironmentCommand(input);
 * const response = await client.send(command);
 * // { // UpdateEnvironmentOutput
 * //   Arn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateEnvironmentCommandInput - {@link UpdateEnvironmentCommandInput}
 * @returns {@link UpdateEnvironmentCommandOutput}
 * @see {@link UpdateEnvironmentCommandInput} for command's `input` shape.
 * @see {@link UpdateEnvironmentCommandOutput} for command's `response` shape.
 * @see {@link MWAAClientResolvedConfig | config} for MWAAClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>InternalServerException: An internal error has occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>ResourceNotFoundException: The resource is not available.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>ValidationException: The provided input is not valid.</p>
 *
 * @throws {@link MWAAServiceException}
 * <p>Base exception class for all service exceptions from MWAA service.</p>
 *
 *
 * @public
 */
export class UpdateEnvironmentCommand extends $Command
  .classBuilder<
    UpdateEnvironmentCommandInput,
    UpdateEnvironmentCommandOutput,
    MWAAClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MWAAClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonMWAA", "UpdateEnvironment", {})
  .n("MWAAClient", "UpdateEnvironmentCommand")
  .f(UpdateEnvironmentInputFilterSensitiveLog, void 0)
  .ser(se_UpdateEnvironmentCommand)
  .de(de_UpdateEnvironmentCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateEnvironmentInput;
      output: UpdateEnvironmentOutput;
    };
    sdk: {
      input: UpdateEnvironmentCommandInput;
      output: UpdateEnvironmentCommandOutput;
    };
  };
}
