// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteTieringConfigurationInput, DeleteTieringConfigurationOutput } from "../models/models_0";
import { DeleteTieringConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteTieringConfigurationCommand}.
 */
export interface DeleteTieringConfigurationCommandInput extends DeleteTieringConfigurationInput {}
/**
 * @public
 *
 * The output of {@link DeleteTieringConfigurationCommand}.
 */
export interface DeleteTieringConfigurationCommandOutput extends DeleteTieringConfigurationOutput, __MetadataBearer {}

/**
 * Deletes the tiering configuration specified by a tiering configuration name.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, DeleteTieringConfigurationCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, DeleteTieringConfigurationCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = { // DeleteTieringConfigurationInput
 *   TieringConfigurationName: "STRING_VALUE", // required
 * };
 * const command = new DeleteTieringConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteTieringConfigurationCommandInput - {@link DeleteTieringConfigurationCommandInput}
 * @returns {@link DeleteTieringConfigurationCommandOutput}
 * @see {@link DeleteTieringConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteTieringConfigurationCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * Indicates that something is wrong with a parameter's value. For example, the value is out of range.
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
export class DeleteTieringConfigurationCommand extends command<DeleteTieringConfigurationCommandInput, DeleteTieringConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteTieringConfiguration",
  DeleteTieringConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTieringConfigurationInput;
      output: {};
    };
    sdk: {
      input: DeleteTieringConfigurationCommandInput;
      output: DeleteTieringConfigurationCommandOutput;
    };
  };
}
