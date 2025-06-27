// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudHSMV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudHSMV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { RestoreBackupRequest, RestoreBackupResponse } from "../models/models_0";
import { de_RestoreBackupCommand, se_RestoreBackupCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RestoreBackupCommand}.
 */
export interface RestoreBackupCommandInput extends RestoreBackupRequest {}
/**
 * @public
 *
 * The output of {@link RestoreBackupCommand}.
 */
export interface RestoreBackupCommandOutput extends RestoreBackupResponse, __MetadataBearer {}

/**
 * <p>Restores a specified CloudHSM backup that is in the
 *                 <code>PENDING_DELETION</code> state. For more information on deleting a backup, see
 *                 <a>DeleteBackup</a>.</p>
 *          <p>
 *             <b>Cross-account use:</b> No. You cannot perform this operation on an CloudHSM backup in a different Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudHSMV2Client, RestoreBackupCommand } from "@aws-sdk/client-cloudhsm-v2"; // ES Modules import
 * // const { CloudHSMV2Client, RestoreBackupCommand } = require("@aws-sdk/client-cloudhsm-v2"); // CommonJS import
 * const client = new CloudHSMV2Client(config);
 * const input = { // RestoreBackupRequest
 *   BackupId: "STRING_VALUE", // required
 * };
 * const command = new RestoreBackupCommand(input);
 * const response = await client.send(command);
 * // { // RestoreBackupResponse
 * //   Backup: { // Backup
 * //     BackupId: "STRING_VALUE", // required
 * //     BackupArn: "STRING_VALUE",
 * //     BackupState: "CREATE_IN_PROGRESS" || "READY" || "DELETED" || "PENDING_DELETION",
 * //     ClusterId: "STRING_VALUE",
 * //     CreateTimestamp: new Date("TIMESTAMP"),
 * //     CopyTimestamp: new Date("TIMESTAMP"),
 * //     NeverExpires: true || false,
 * //     SourceRegion: "STRING_VALUE",
 * //     SourceBackup: "STRING_VALUE",
 * //     SourceCluster: "STRING_VALUE",
 * //     DeleteTimestamp: new Date("TIMESTAMP"),
 * //     TagList: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     HsmType: "STRING_VALUE",
 * //     Mode: "FIPS" || "NON_FIPS",
 * //   },
 * // };
 *
 * ```
 *
 * @param RestoreBackupCommandInput - {@link RestoreBackupCommandInput}
 * @returns {@link RestoreBackupCommandOutput}
 * @see {@link RestoreBackupCommandInput} for command's `input` shape.
 * @see {@link RestoreBackupCommandOutput} for command's `response` shape.
 * @see {@link CloudHSMV2ClientResolvedConfig | config} for CloudHSMV2Client's `config` shape.
 *
 * @throws {@link CloudHsmAccessDeniedException} (client fault)
 *  <p>The request was rejected because the requester does not have permission to perform the
 *       requested operation.</p>
 *
 * @throws {@link CloudHsmInternalFailureException} (server fault)
 *  <p>The request was rejected because of an CloudHSM internal failure. The request can
 *       be retried.</p>
 *
 * @throws {@link CloudHsmInvalidRequestException} (client fault)
 *  <p>The request was rejected because it is not a valid request.</p>
 *
 * @throws {@link CloudHsmResourceNotFoundException} (client fault)
 *  <p>The request was rejected because it refers to a resource that cannot be
 *       found.</p>
 *
 * @throws {@link CloudHsmServiceException} (client fault)
 *  <p>The request was rejected because an error occurred.</p>
 *
 * @throws {@link CloudHSMV2ServiceException}
 * <p>Base exception class for all service exceptions from CloudHSMV2 service.</p>
 *
 *
 * @public
 */
export class RestoreBackupCommand extends $Command
  .classBuilder<
    RestoreBackupCommandInput,
    RestoreBackupCommandOutput,
    CloudHSMV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudHSMV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("BaldrApiService", "RestoreBackup", {})
  .n("CloudHSMV2Client", "RestoreBackupCommand")
  .f(void 0, void 0)
  .ser(se_RestoreBackupCommand)
  .de(de_RestoreBackupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RestoreBackupRequest;
      output: RestoreBackupResponse;
    };
    sdk: {
      input: RestoreBackupCommandInput;
      output: RestoreBackupCommandOutput;
    };
  };
}
