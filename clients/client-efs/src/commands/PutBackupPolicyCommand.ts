// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EFSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EFSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { BackupPolicyDescription, PutBackupPolicyRequest } from "../models/models_0";
import { de_PutBackupPolicyCommand, se_PutBackupPolicyCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutBackupPolicyCommand}.
 */
export interface PutBackupPolicyCommandInput extends PutBackupPolicyRequest {}
/**
 * @public
 *
 * The output of {@link PutBackupPolicyCommand}.
 */
export interface PutBackupPolicyCommandOutput extends BackupPolicyDescription, __MetadataBearer {}

/**
 * <p>Updates the file system's backup policy. Use this action to start or stop automatic backups of the file system. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EFSClient, PutBackupPolicyCommand } from "@aws-sdk/client-efs"; // ES Modules import
 * // const { EFSClient, PutBackupPolicyCommand } = require("@aws-sdk/client-efs"); // CommonJS import
 * const client = new EFSClient(config);
 * const input = { // PutBackupPolicyRequest
 *   FileSystemId: "STRING_VALUE", // required
 *   BackupPolicy: { // BackupPolicy
 *     Status: "ENABLED" || "ENABLING" || "DISABLED" || "DISABLING", // required
 *   },
 * };
 * const command = new PutBackupPolicyCommand(input);
 * const response = await client.send(command);
 * // { // BackupPolicyDescription
 * //   BackupPolicy: { // BackupPolicy
 * //     Status: "ENABLED" || "ENABLING" || "DISABLED" || "DISABLING", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param PutBackupPolicyCommandInput - {@link PutBackupPolicyCommandInput}
 * @returns {@link PutBackupPolicyCommandOutput}
 * @see {@link PutBackupPolicyCommandInput} for command's `input` shape.
 * @see {@link PutBackupPolicyCommandOutput} for command's `response` shape.
 * @see {@link EFSClientResolvedConfig | config} for EFSClient's `config` shape.
 *
 * @throws {@link BadRequest} (client fault)
 *  <p>Returned if the request is malformed or contains an error such as an invalid
 *             parameter value or a missing required parameter.</p>
 *
 * @throws {@link FileSystemNotFound} (client fault)
 *  <p>Returned if the specified <code>FileSystemId</code> value doesn't exist in the
 *             requester's Amazon Web Services account.</p>
 *
 * @throws {@link IncorrectFileSystemLifeCycleState} (client fault)
 *  <p>Returned if the file system's lifecycle state is not "available".</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Returned if an error occurred on the server side.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Returned if the Backup service is not available in the Amazon Web Services Region in which the request was made.</p>
 *
 * @throws {@link EFSServiceException}
 * <p>Base exception class for all service exceptions from EFS service.</p>
 *
 *
 * @public
 */
export class PutBackupPolicyCommand extends $Command
  .classBuilder<
    PutBackupPolicyCommandInput,
    PutBackupPolicyCommandOutput,
    EFSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EFSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MagnolioAPIService_v20150201", "PutBackupPolicy", {})
  .n("EFSClient", "PutBackupPolicyCommand")
  .f(void 0, void 0)
  .ser(se_PutBackupPolicyCommand)
  .de(de_PutBackupPolicyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutBackupPolicyRequest;
      output: BackupPolicyDescription;
    };
    sdk: {
      input: PutBackupPolicyCommandInput;
      output: PutBackupPolicyCommandOutput;
    };
  };
}
