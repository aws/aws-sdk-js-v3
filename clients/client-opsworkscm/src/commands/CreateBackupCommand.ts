// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateBackupRequest, CreateBackupResponse } from "../models/models_0";
import { OpsWorksCMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksCMClient";
import { de_CreateBackupCommand, se_CreateBackupCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateBackupCommand}.
 */
export interface CreateBackupCommandInput extends CreateBackupRequest {}
/**
 * @public
 *
 * The output of {@link CreateBackupCommand}.
 */
export interface CreateBackupCommandOutput extends CreateBackupResponse, __MetadataBearer {}

/**
 * <p>
 *       Creates an application-level backup of a server. While the
 *       server is in the <code>BACKING_UP</code> state, the server cannot be
 *       changed, and no additional backup can be created.
 *     </p>
 *          <p>
 *       Backups can be created for servers in <code>RUNNING</code>, <code>HEALTHY</code>, and <code>UNHEALTHY</code> states.
 *       By default, you can create a maximum of 50
 *       manual backups.
 *     </p>
 *          <p>
 *       This operation is asynchronous.
 *     </p>
 *          <p>
 *       A <code>LimitExceededException</code> is thrown when the maximum number of manual backups is reached.
 *       An <code>InvalidStateException</code> is thrown when the server is not in any of the following states: RUNNING, HEALTHY, or UNHEALTHY.
 *       A <code>ResourceNotFoundException</code> is thrown when the server is not found.
 *       A <code>ValidationException</code> is thrown when parameters of the request are not valid.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksCMClient, CreateBackupCommand } from "@aws-sdk/client-opsworkscm"; // ES Modules import
 * // const { OpsWorksCMClient, CreateBackupCommand } = require("@aws-sdk/client-opsworkscm"); // CommonJS import
 * const client = new OpsWorksCMClient(config);
 * const input = { // CreateBackupRequest
 *   ServerName: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateBackupCommand(input);
 * const response = await client.send(command);
 * // { // CreateBackupResponse
 * //   Backup: { // Backup
 * //     BackupArn: "STRING_VALUE",
 * //     BackupId: "STRING_VALUE",
 * //     BackupType: "AUTOMATED" || "MANUAL",
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     Description: "STRING_VALUE",
 * //     Engine: "STRING_VALUE",
 * //     EngineModel: "STRING_VALUE",
 * //     EngineVersion: "STRING_VALUE",
 * //     InstanceProfileArn: "STRING_VALUE",
 * //     InstanceType: "STRING_VALUE",
 * //     KeyPair: "STRING_VALUE",
 * //     PreferredBackupWindow: "STRING_VALUE",
 * //     PreferredMaintenanceWindow: "STRING_VALUE",
 * //     S3DataSize: Number("int"),
 * //     S3DataUrl: "STRING_VALUE",
 * //     S3LogUrl: "STRING_VALUE",
 * //     SecurityGroupIds: [ // Strings
 * //       "STRING_VALUE",
 * //     ],
 * //     ServerName: "STRING_VALUE",
 * //     ServiceRoleArn: "STRING_VALUE",
 * //     Status: "IN_PROGRESS" || "OK" || "FAILED" || "DELETING",
 * //     StatusDescription: "STRING_VALUE",
 * //     SubnetIds: [
 * //       "STRING_VALUE",
 * //     ],
 * //     ToolsVersion: "STRING_VALUE",
 * //     UserArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateBackupCommandInput - {@link CreateBackupCommandInput}
 * @returns {@link CreateBackupCommandOutput}
 * @see {@link CreateBackupCommandInput} for command's `input` shape.
 * @see {@link CreateBackupCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksCMClientResolvedConfig | config} for OpsWorksCMClient's `config` shape.
 *
 * @throws {@link InvalidStateException} (client fault)
 *  <p>The resource is in a state that does not allow you to perform a specified action.
 *     </p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The limit of servers or backups has been reached.
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
export class CreateBackupCommand extends $Command
  .classBuilder<
    CreateBackupCommandInput,
    CreateBackupCommandOutput,
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
  .s("OpsWorksCM_V2016_11_01", "CreateBackup", {})
  .n("OpsWorksCMClient", "CreateBackupCommand")
  .f(void 0, void 0)
  .ser(se_CreateBackupCommand)
  .de(de_CreateBackupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateBackupRequest;
      output: CreateBackupResponse;
    };
    sdk: {
      input: CreateBackupCommandInput;
      output: CreateBackupCommandOutput;
    };
  };
}
