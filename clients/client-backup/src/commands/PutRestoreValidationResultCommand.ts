// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutRestoreValidationResultInput } from "../models/models_0";
import { de_PutRestoreValidationResultCommand, se_PutRestoreValidationResultCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutRestoreValidationResultCommand}.
 */
export interface PutRestoreValidationResultCommandInput extends PutRestoreValidationResultInput {}
/**
 * @public
 *
 * The output of {@link PutRestoreValidationResultCommand}.
 */
export interface PutRestoreValidationResultCommandOutput extends __MetadataBearer {}

/**
 * <p>This request allows you to send your independent self-run
 *          restore test validation results.
 *          <code>RestoreJobId</code> and <code>ValidationStatus</code>
 *          are required. Optionally, you can input a
 *          <code>ValidationStatusMessage</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, PutRestoreValidationResultCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, PutRestoreValidationResultCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new BackupClient(config);
 * const input = { // PutRestoreValidationResultInput
 *   RestoreJobId: "STRING_VALUE", // required
 *   ValidationStatus: "FAILED" || "SUCCESSFUL" || "TIMED_OUT" || "VALIDATING", // required
 *   ValidationStatusMessage: "STRING_VALUE",
 * };
 * const command = new PutRestoreValidationResultCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutRestoreValidationResultCommandInput - {@link PutRestoreValidationResultCommandInput}
 * @returns {@link PutRestoreValidationResultCommandOutput}
 * @see {@link PutRestoreValidationResultCommandInput} for command's `input` shape.
 * @see {@link PutRestoreValidationResultCommandOutput} for command's `response` shape.
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
 * @public
 */
export class PutRestoreValidationResultCommand extends $Command
  .classBuilder<
    PutRestoreValidationResultCommandInput,
    PutRestoreValidationResultCommandOutput,
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
  .s("CryoControllerUserManager", "PutRestoreValidationResult", {})
  .n("BackupClient", "PutRestoreValidationResultCommand")
  .f(void 0, void 0)
  .ser(se_PutRestoreValidationResultCommand)
  .de(de_PutRestoreValidationResultCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutRestoreValidationResultInput;
      output: {};
    };
    sdk: {
      input: PutRestoreValidationResultCommandInput;
      output: PutRestoreValidationResultCommandOutput;
    };
  };
}
