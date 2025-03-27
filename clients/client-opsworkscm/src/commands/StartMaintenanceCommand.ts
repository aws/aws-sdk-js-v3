// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  StartMaintenanceRequest,
  StartMaintenanceRequestFilterSensitiveLog,
  StartMaintenanceResponse,
  StartMaintenanceResponseFilterSensitiveLog,
} from "../models/models_0";
import { OpsWorksCMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksCMClient";
import { de_StartMaintenanceCommand, se_StartMaintenanceCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartMaintenanceCommand}.
 */
export interface StartMaintenanceCommandInput extends StartMaintenanceRequest {}
/**
 * @public
 *
 * The output of {@link StartMaintenanceCommand}.
 */
export interface StartMaintenanceCommandOutput extends StartMaintenanceResponse, __MetadataBearer {}

/**
 * <p>
 *       Manually starts server maintenance. This command can be useful if an earlier maintenance attempt failed, and the underlying
 *       cause of maintenance failure has been resolved. The server is in an <code>UNDER_MAINTENANCE</code> state while maintenance is in progress.
 *     </p>
 *          <p>
 *       Maintenance can only be started on servers in <code>HEALTHY</code> and <code>UNHEALTHY</code> states. Otherwise, an <code>InvalidStateException</code> is thrown.
 *       A <code>ResourceNotFoundException</code> is thrown when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksCMClient, StartMaintenanceCommand } from "@aws-sdk/client-opsworkscm"; // ES Modules import
 * // const { OpsWorksCMClient, StartMaintenanceCommand } = require("@aws-sdk/client-opsworkscm"); // CommonJS import
 * const client = new OpsWorksCMClient(config);
 * const input = { // StartMaintenanceRequest
 *   ServerName: "STRING_VALUE", // required
 *   EngineAttributes: [ // EngineAttributes
 *     { // EngineAttribute
 *       Name: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new StartMaintenanceCommand(input);
 * const response = await client.send(command);
 * // { // StartMaintenanceResponse
 * //   Server: { // Server
 * //     AssociatePublicIpAddress: true || false,
 * //     BackupRetentionCount: Number("int"),
 * //     ServerName: "STRING_VALUE",
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     CloudFormationStackArn: "STRING_VALUE",
 * //     CustomDomain: "STRING_VALUE",
 * //     DisableAutomatedBackup: true || false,
 * //     Endpoint: "STRING_VALUE",
 * //     Engine: "STRING_VALUE",
 * //     EngineModel: "STRING_VALUE",
 * //     EngineAttributes: [ // EngineAttributes
 * //       { // EngineAttribute
 * //         Name: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     EngineVersion: "STRING_VALUE",
 * //     InstanceProfileArn: "STRING_VALUE",
 * //     InstanceType: "STRING_VALUE",
 * //     KeyPair: "STRING_VALUE",
 * //     MaintenanceStatus: "SUCCESS" || "FAILED",
 * //     PreferredMaintenanceWindow: "STRING_VALUE",
 * //     PreferredBackupWindow: "STRING_VALUE",
 * //     SecurityGroupIds: [ // Strings
 * //       "STRING_VALUE",
 * //     ],
 * //     ServiceRoleArn: "STRING_VALUE",
 * //     Status: "BACKING_UP" || "CONNECTION_LOST" || "CREATING" || "DELETING" || "MODIFYING" || "FAILED" || "HEALTHY" || "RUNNING" || "RESTORING" || "SETUP" || "UNDER_MAINTENANCE" || "UNHEALTHY" || "TERMINATED",
 * //     StatusReason: "STRING_VALUE",
 * //     SubnetIds: [
 * //       "STRING_VALUE",
 * //     ],
 * //     ServerArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param StartMaintenanceCommandInput - {@link StartMaintenanceCommandInput}
 * @returns {@link StartMaintenanceCommandOutput}
 * @see {@link StartMaintenanceCommandInput} for command's `input` shape.
 * @see {@link StartMaintenanceCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksCMClientResolvedConfig | config} for OpsWorksCMClient's `config` shape.
 *
 * @throws {@link InvalidStateException} (client fault)
 *  <p>The resource is in a state that does not allow you to perform a specified action.
 *     </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource does not exist, or access was denied.
 *     </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One or more of the provided request parameters are not valid.
 *     </p>
 *
 * @throws {@link OpsWorksCMServiceException}
 * <p>Base exception class for all service exceptions from OpsWorksCM service.</p>
 *
 *
 * @public
 */
export class StartMaintenanceCommand extends $Command
  .classBuilder<
    StartMaintenanceCommandInput,
    StartMaintenanceCommandOutput,
    OpsWorksCMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OpsWorksCMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("OpsWorksCM_V2016_11_01", "StartMaintenance", {})
  .n("OpsWorksCMClient", "StartMaintenanceCommand")
  .f(StartMaintenanceRequestFilterSensitiveLog, StartMaintenanceResponseFilterSensitiveLog)
  .ser(se_StartMaintenanceCommand)
  .de(de_StartMaintenanceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartMaintenanceRequest;
      output: StartMaintenanceResponse;
    };
    sdk: {
      input: StartMaintenanceCommandInput;
      output: StartMaintenanceCommandOutput;
    };
  };
}
