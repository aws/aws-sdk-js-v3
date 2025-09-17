// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EFSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EFSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { BackupPolicyDescription, DescribeBackupPolicyRequest } from "../models/models_0";
import { de_DescribeBackupPolicyCommand, se_DescribeBackupPolicyCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeBackupPolicyCommand}.
 */
export interface DescribeBackupPolicyCommandInput extends DescribeBackupPolicyRequest {}
/**
 * @public
 *
 * The output of {@link DescribeBackupPolicyCommand}.
 */
export interface DescribeBackupPolicyCommandOutput extends BackupPolicyDescription, __MetadataBearer {}

/**
 * <p>Returns the backup policy for the specified EFS file system.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EFSClient, DescribeBackupPolicyCommand } from "@aws-sdk/client-efs"; // ES Modules import
 * // const { EFSClient, DescribeBackupPolicyCommand } = require("@aws-sdk/client-efs"); // CommonJS import
 * // import type { EFSClientConfig } from "@aws-sdk/client-efs";
 * const config = {}; // type is EFSClientConfig
 * const client = new EFSClient(config);
 * const input = { // DescribeBackupPolicyRequest
 *   FileSystemId: "STRING_VALUE", // required
 * };
 * const command = new DescribeBackupPolicyCommand(input);
 * const response = await client.send(command);
 * // { // BackupPolicyDescription
 * //   BackupPolicy: { // BackupPolicy
 * //     Status: "ENABLED" || "ENABLING" || "DISABLED" || "DISABLING", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeBackupPolicyCommandInput - {@link DescribeBackupPolicyCommandInput}
 * @returns {@link DescribeBackupPolicyCommandOutput}
 * @see {@link DescribeBackupPolicyCommandInput} for command's `input` shape.
 * @see {@link DescribeBackupPolicyCommandOutput} for command's `response` shape.
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
 * @throws {@link InternalServerError} (server fault)
 *  <p>Returned if an error occurred on the server side.</p>
 *
 * @throws {@link PolicyNotFound} (client fault)
 *  <p>Returned if <code>no backup</code> is specified for a One Zone EFS file system.</p>
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
export class DescribeBackupPolicyCommand extends $Command
  .classBuilder<
    DescribeBackupPolicyCommandInput,
    DescribeBackupPolicyCommandOutput,
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
  .s("MagnolioAPIService_v20150201", "DescribeBackupPolicy", {})
  .n("EFSClient", "DescribeBackupPolicyCommand")
  .f(void 0, void 0)
  .ser(se_DescribeBackupPolicyCommand)
  .de(de_DescribeBackupPolicyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeBackupPolicyRequest;
      output: BackupPolicyDescription;
    };
    sdk: {
      input: DescribeBackupPolicyCommandInput;
      output: DescribeBackupPolicyCommandOutput;
    };
  };
}
