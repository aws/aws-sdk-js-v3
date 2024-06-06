// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StartReportJobInput, StartReportJobOutput } from "../models/models_0";
import { de_StartReportJobCommand, se_StartReportJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartReportJobCommand}.
 */
export interface StartReportJobCommandInput extends StartReportJobInput {}
/**
 * @public
 *
 * The output of {@link StartReportJobCommand}.
 */
export interface StartReportJobCommandOutput extends StartReportJobOutput, __MetadataBearer {}

/**
 * <p>Starts an on-demand report job for the specified report plan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, StartReportJobCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, StartReportJobCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const input = { // StartReportJobInput
 *   ReportPlanName: "STRING_VALUE", // required
 *   IdempotencyToken: "STRING_VALUE",
 * };
 * const command = new StartReportJobCommand(input);
 * const response = await client.send(command);
 * // { // StartReportJobOutput
 * //   ReportJobId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartReportJobCommandInput - {@link StartReportJobCommandInput}
 * @returns {@link StartReportJobCommandOutput}
 * @see {@link StartReportJobCommandInput} for command's `input` shape.
 * @see {@link StartReportJobCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>Indicates that something is wrong with a parameter's value. For example, the value is
 *          out of range.</p>
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
 * @public
 */
export class StartReportJobCommand extends $Command
  .classBuilder<
    StartReportJobCommandInput,
    StartReportJobCommandOutput,
    BackupClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: BackupClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CryoControllerUserManager", "StartReportJob", {})
  .n("BackupClient", "StartReportJobCommand")
  .f(void 0, void 0)
  .ser(se_StartReportJobCommand)
  .de(de_StartReportJobCommand)
  .build() {}
