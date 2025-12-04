// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateTieringConfigurationInput, CreateTieringConfigurationOutput } from "../models/models_0";
import { CreateTieringConfiguration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateTieringConfigurationCommand}.
 */
export interface CreateTieringConfigurationCommandInput extends CreateTieringConfigurationInput {}
/**
 * @public
 *
 * The output of {@link CreateTieringConfigurationCommand}.
 */
export interface CreateTieringConfigurationCommandOutput extends CreateTieringConfigurationOutput, __MetadataBearer {}

/**
 * <p>Creates a tiering configuration.</p>
 *          <p>A tiering configuration enables automatic movement of backup data to a lower-cost storage tier based on the age of backed-up objects in the backup vault.</p>
 *          <p>Each vault can only have one vault-specific tiering configuration, in addition to any global configuration that applies to all vaults.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, CreateTieringConfigurationCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, CreateTieringConfigurationCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = { // CreateTieringConfigurationInput
 *   TieringConfiguration: { // TieringConfigurationInputForCreate
 *     TieringConfigurationName: "STRING_VALUE", // required
 *     BackupVaultName: "STRING_VALUE", // required
 *     ResourceSelection: [ // ResourceSelections // required
 *       { // ResourceSelection
 *         Resources: [ // ResourceArns // required
 *           "STRING_VALUE",
 *         ],
 *         TieringDownSettingsInDays: Number("int"), // required
 *         ResourceType: "STRING_VALUE", // required
 *       },
 *     ],
 *   },
 *   TieringConfigurationTags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 *   CreatorRequestId: "STRING_VALUE",
 * };
 * const command = new CreateTieringConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // CreateTieringConfigurationOutput
 * //   TieringConfigurationArn: "STRING_VALUE",
 * //   TieringConfigurationName: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param CreateTieringConfigurationCommandInput - {@link CreateTieringConfigurationCommandInput}
 * @returns {@link CreateTieringConfigurationCommandOutput}
 * @see {@link CreateTieringConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateTieringConfigurationCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *  <p>The required resource already exists.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Backup can't perform the action that you requested until it finishes
 *          performing a previous action. Try again later.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>Indicates that something is wrong with a parameter's value. For example, the value is
 *          out of range.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit in the request has been exceeded; for example, a maximum number of items allowed
 *          in a request.</p>
 *
 * @throws {@link MissingParameterValueException} (client fault)
 *  <p>Indicates that a required parameter is missing.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request failed due to a temporary failure of the server.</p>
 *
 * @throws {@link BackupServiceException}
 * <p>Base exception class for all service exceptions from Backup service.</p>
 *
 *
 * @public
 */
export class CreateTieringConfigurationCommand extends $Command
  .classBuilder<
    CreateTieringConfigurationCommandInput,
    CreateTieringConfigurationCommandOutput,
    BackupClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BackupClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CryoControllerUserManager", "CreateTieringConfiguration", {})
  .n("BackupClient", "CreateTieringConfigurationCommand")
  .sc(CreateTieringConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateTieringConfigurationInput;
      output: CreateTieringConfigurationOutput;
    };
    sdk: {
      input: CreateTieringConfigurationCommandInput;
      output: CreateTieringConfigurationCommandOutput;
    };
  };
}
