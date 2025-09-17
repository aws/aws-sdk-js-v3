// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StopBackupJobInput } from "../models/models_0";
import { de_StopBackupJobCommand, se_StopBackupJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopBackupJobCommand}.
 */
export interface StopBackupJobCommandInput extends StopBackupJobInput {}
/**
 * @public
 *
 * The output of {@link StopBackupJobCommand}.
 */
export interface StopBackupJobCommandOutput extends __MetadataBearer {}

/**
 * <p>Attempts to cancel a job to create a one-time backup of a resource.</p>
 *          <p>This action is not supported for the following services:</p>
 *          <ul>
 *             <li>
 *                <p>Amazon Aurora</p>
 *             </li>
 *             <li>
 *                <p>Amazon DocumentDB (with MongoDB compatibility)</p>
 *             </li>
 *             <li>
 *                <p>Amazon FSx for Lustre</p>
 *             </li>
 *             <li>
 *                <p>Amazon FSx for NetApp ONTAP</p>
 *             </li>
 *             <li>
 *                <p>Amazon FSx for OpenZFS</p>
 *             </li>
 *             <li>
 *                <p>Amazon FSx for Windows File Server</p>
 *             </li>
 *             <li>
 *                <p>Amazon Neptune</p>
 *             </li>
 *             <li>
 *                <p>SAP HANA databases on Amazon EC2 instances</p>
 *             </li>
 *             <li>
 *                <p>Amazon RDS</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, StopBackupJobCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, StopBackupJobCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = { // StopBackupJobInput
 *   BackupJobId: "STRING_VALUE", // required
 * };
 * const command = new StopBackupJobCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopBackupJobCommandInput - {@link StopBackupJobCommandInput}
 * @returns {@link StopBackupJobCommandOutput}
 * @see {@link StopBackupJobCommandInput} for command's `input` shape.
 * @see {@link StopBackupJobCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>Indicates that something is wrong with a parameter's value. For example, the value is
 *          out of range.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that something is wrong with the input to the request. For example, a
 *          parameter is of the wrong type.</p>
 *
 * @throws {@link MissingParameterValueException} (client fault)
 *  <p>Indicates that a required parameter is missing.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource that is required for the action doesn't exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request failed due to a temporary failure of the server.</p>
 *
 * @throws {@link BackupServiceException}
 * <p>Base exception class for all service exceptions from Backup service.</p>
 *
 *
 * @public
 */
export class StopBackupJobCommand extends $Command
  .classBuilder<
    StopBackupJobCommandInput,
    StopBackupJobCommandOutput,
    BackupClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BackupClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CryoControllerUserManager", "StopBackupJob", {})
  .n("BackupClient", "StopBackupJobCommand")
  .f(void 0, void 0)
  .ser(se_StopBackupJobCommand)
  .de(de_StopBackupJobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopBackupJobInput;
      output: {};
    };
    sdk: {
      input: StopBackupJobCommandInput;
      output: StopBackupJobCommandOutput;
    };
  };
}
