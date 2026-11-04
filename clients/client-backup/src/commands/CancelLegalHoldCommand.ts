// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CancelLegalHoldInput, CancelLegalHoldOutput } from "../models/models_0";
import { CancelLegalHold$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CancelLegalHoldCommand}.
 */
export interface CancelLegalHoldCommandInput extends CancelLegalHoldInput {}
/**
 * @public
 *
 * The output of {@link CancelLegalHoldCommand}.
 */
export interface CancelLegalHoldCommandOutput extends CancelLegalHoldOutput, __MetadataBearer {}

/**
 * Removes the specified legal hold on a recovery point. This action can only be performed by a user with sufficient permissions.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, CancelLegalHoldCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, CancelLegalHoldCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = { // CancelLegalHoldInput
 *   LegalHoldId: "STRING_VALUE", // required
 *   CancelDescription: "STRING_VALUE", // required
 *   RetainRecordInDays: Number("long"),
 * };
 * const command = new CancelLegalHoldCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CancelLegalHoldCommandInput - {@link CancelLegalHoldCommandInput}
 * @returns {@link CancelLegalHoldCommandOutput}
 * @see {@link CancelLegalHoldCommandInput} for command's `input` shape.
 * @see {@link CancelLegalHoldCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * Indicates that something is wrong with a parameter's value. For example, the value is out of range.
 *
 * @throws {@link InvalidResourceStateException} (client fault)
 *
 * Backup is already performing an action on this recovery point. It can't perform the action you requested until the first action finishes. Try again later.
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
export class CancelLegalHoldCommand extends command<CancelLegalHoldCommandInput, CancelLegalHoldCommandOutput>(
  _ep0,
  _mw0,
  "CancelLegalHold",
  CancelLegalHold$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelLegalHoldInput;
      output: {};
    };
    sdk: {
      input: CancelLegalHoldCommandInput;
      output: CancelLegalHoldCommandOutput;
    };
  };
}
