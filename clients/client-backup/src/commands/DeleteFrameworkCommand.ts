// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteFrameworkInput } from "../models/models_0";
import { DeleteFramework$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteFrameworkCommand}.
 */
export interface DeleteFrameworkCommandInput extends DeleteFrameworkInput {}
/**
 * @public
 *
 * The output of {@link DeleteFrameworkCommand}.
 */
export interface DeleteFrameworkCommandOutput extends __MetadataBearer {}

/**
 * Deletes the framework specified by a framework name.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, DeleteFrameworkCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, DeleteFrameworkCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = { // DeleteFrameworkInput
 *   FrameworkName: "STRING_VALUE", // required
 * };
 * const command = new DeleteFrameworkCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteFrameworkCommandInput - {@link DeleteFrameworkCommandInput}
 * @returns {@link DeleteFrameworkCommandOutput}
 * @see {@link DeleteFrameworkCommandInput} for command's `input` shape.
 * @see {@link DeleteFrameworkCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Backup can't perform the action that you requested until it finishes performing a previous action. Try again later.
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
export class DeleteFrameworkCommand extends command<DeleteFrameworkCommandInput, DeleteFrameworkCommandOutput>(
  _ep0,
  _mw0,
  "DeleteFramework",
  DeleteFramework$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteFrameworkInput;
      output: {};
    };
    sdk: {
      input: DeleteFrameworkCommandInput;
      output: DeleteFrameworkCommandOutput;
    };
  };
}
