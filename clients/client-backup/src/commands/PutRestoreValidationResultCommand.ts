// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutRestoreValidationResultInput } from "../models/models_0";
import { PutRestoreValidationResult$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * This request allows you to send your independent self-run restore test validation results. `RestoreJobId` and `ValidationStatus` are required. Optionally, you can input a `ValidationStatusMessage`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, PutRestoreValidationResultCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, PutRestoreValidationResultCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
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
 *
 * Indicates that something is wrong with a parameter's value. For example, the value is out of range.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * Indicates that something is wrong with the input to the request. For example, a parameter is of the wrong type.
 *
 * @throws {@link MissingParameterValueException} (client fault)
 *
 * Indicates that a required parameter is missing.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * A resource that is required for the action doesn't exist.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The request failed due to a temporary failure of the server.
 *
 * @throws {@link BackupServiceException}
 *
 * Base exception class for all service exceptions from Backup service.
 *
 * @public
 */
export class PutRestoreValidationResultCommand extends command<PutRestoreValidationResultCommandInput, PutRestoreValidationResultCommandOutput>(
  _ep0,
  _mw0,
  "PutRestoreValidationResult",
  PutRestoreValidationResult$
) {
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
