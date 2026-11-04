// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateTieringConfigurationInput, UpdateTieringConfigurationOutput } from "../models/models_0";
import { UpdateTieringConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateTieringConfigurationCommand}.
 */
export interface UpdateTieringConfigurationCommandInput extends UpdateTieringConfigurationInput {}
/**
 * @public
 *
 * The output of {@link UpdateTieringConfigurationCommand}.
 */
export interface UpdateTieringConfigurationCommandOutput extends UpdateTieringConfigurationOutput, __MetadataBearer {}

/**
 * This request will send changes to your specified tiering configuration. `TieringConfigurationName` cannot be updated after it is created.
 *
 * `ResourceSelection` can contain:
 *
 * - `Resources`
 * - `TieringDownSettingsInDays`
 * - `ResourceType`
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, UpdateTieringConfigurationCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, UpdateTieringConfigurationCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = { // UpdateTieringConfigurationInput
 *   TieringConfigurationName: "STRING_VALUE", // required
 *   TieringConfiguration: { // TieringConfigurationInputForUpdate
 *     ResourceSelection: [ // ResourceSelections // required
 *       { // ResourceSelection
 *         Resources: [ // ResourceArns // required
 *           "STRING_VALUE",
 *         ],
 *         TieringDownSettingsInDays: Number("int"), // required
 *         ResourceType: "STRING_VALUE", // required
 *       },
 *     ],
 *     BackupVaultName: "STRING_VALUE", // required
 *   },
 * };
 * const command = new UpdateTieringConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateTieringConfigurationOutput
 * //   TieringConfigurationArn: "STRING_VALUE",
 * //   TieringConfigurationName: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   LastUpdatedTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param UpdateTieringConfigurationCommandInput - {@link UpdateTieringConfigurationCommandInput}
 * @returns {@link UpdateTieringConfigurationCommandOutput}
 * @see {@link UpdateTieringConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateTieringConfigurationCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *
 * The required resource already exists.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Backup can't perform the action that you requested until it finishes performing a previous action. Try again later.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * Indicates that something is wrong with a parameter's value. For example, the value is out of range.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * A limit in the request has been exceeded; for example, a maximum number of items allowed in a request.
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
export class UpdateTieringConfigurationCommand extends command<UpdateTieringConfigurationCommandInput, UpdateTieringConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "UpdateTieringConfiguration",
  UpdateTieringConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateTieringConfigurationInput;
      output: UpdateTieringConfigurationOutput;
    };
    sdk: {
      input: UpdateTieringConfigurationCommandInput;
      output: UpdateTieringConfigurationCommandOutput;
    };
  };
}
