// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  MigrationHubStrategyClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MigrationHubStrategyClient";
import { PutPortfolioPreferencesRequest, PutPortfolioPreferencesResponse } from "../models/models_0";
import { PutPortfolioPreferences } from "../schemas/schemas_4_Portfolio";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutPortfolioPreferencesCommand}.
 */
export interface PutPortfolioPreferencesCommandInput extends PutPortfolioPreferencesRequest {}
/**
 * @public
 *
 * The output of {@link PutPortfolioPreferencesCommand}.
 */
export interface PutPortfolioPreferencesCommandOutput extends PutPortfolioPreferencesResponse, __MetadataBearer {}

/**
 * <p> Saves the specified migration and modernization preferences. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubStrategyClient, PutPortfolioPreferencesCommand } from "@aws-sdk/client-migrationhubstrategy"; // ES Modules import
 * // const { MigrationHubStrategyClient, PutPortfolioPreferencesCommand } = require("@aws-sdk/client-migrationhubstrategy"); // CommonJS import
 * // import type { MigrationHubStrategyClientConfig } from "@aws-sdk/client-migrationhubstrategy";
 * const config = {}; // type is MigrationHubStrategyClientConfig
 * const client = new MigrationHubStrategyClient(config);
 * const input = { // PutPortfolioPreferencesRequest
 *   prioritizeBusinessGoals: { // PrioritizeBusinessGoals
 *     businessGoals: { // BusinessGoals
 *       speedOfMigration: Number("int"),
 *       reduceOperationalOverheadWithManagedServices: Number("int"),
 *       modernizeInfrastructureWithCloudNativeTechnologies: Number("int"),
 *       licenseCostReduction: Number("int"),
 *     },
 *   },
 *   applicationPreferences: { // ApplicationPreferences
 *     managementPreference: { // ManagementPreference Union: only one key present
 *       awsManagedResources: { // AwsManagedResources
 *         targetDestination: [ // AwsManagedTargetDestinations // required
 *           "STRING_VALUE",
 *         ],
 *       },
 *       selfManageResources: { // SelfManageResources
 *         targetDestination: [ // SelfManageTargetDestinations // required
 *           "STRING_VALUE",
 *         ],
 *       },
 *       noPreference: { // NoManagementPreference
 *         targetDestination: [ // NoPreferenceTargetDestinations // required
 *           "STRING_VALUE",
 *         ],
 *       },
 *     },
 *   },
 *   databasePreferences: { // DatabasePreferences
 *     databaseManagementPreference: "STRING_VALUE",
 *     databaseMigrationPreference: { // DatabaseMigrationPreference Union: only one key present
 *       heterogeneous: { // Heterogeneous
 *         targetDatabaseEngine: [ // HeterogeneousTargetDatabaseEngines // required
 *           "STRING_VALUE",
 *         ],
 *       },
 *       homogeneous: { // Homogeneous
 *         targetDatabaseEngine: [ // HomogeneousTargetDatabaseEngines
 *           "STRING_VALUE",
 *         ],
 *       },
 *       noPreference: { // NoDatabaseMigrationPreference
 *         targetDatabaseEngine: [ // TargetDatabaseEngines // required
 *           "STRING_VALUE",
 *         ],
 *       },
 *     },
 *   },
 *   applicationMode: "STRING_VALUE",
 * };
 * const command = new PutPortfolioPreferencesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutPortfolioPreferencesCommandInput - {@link PutPortfolioPreferencesCommandInput}
 * @returns {@link PutPortfolioPreferencesCommandOutput}
 * @see {@link PutPortfolioPreferencesCommandInput} for command's `input` shape.
 * @see {@link PutPortfolioPreferencesCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubStrategyClientResolvedConfig | config} for MigrationHubStrategyClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> The user does not have permission to perform the action. Check the
 *       AWS Identity and Access Management (IAM) policy associated with this user.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p> Exception to indicate that there is an ongoing task when a new task is created. Return
 *       when once the existing tasks are complete. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> The server experienced an internal error. Try again. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p> The request was denied due to request throttling. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> The request body isn't valid. </p>
 *
 * @throws {@link MigrationHubStrategyServiceException}
 * <p>Base exception class for all service exceptions from MigrationHubStrategy service.</p>
 *
 *
 * @public
 */
export class PutPortfolioPreferencesCommand extends $Command
  .classBuilder<
    PutPortfolioPreferencesCommandInput,
    PutPortfolioPreferencesCommandOutput,
    MigrationHubStrategyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MigrationHubStrategyClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSMigrationHubStrategyRecommendation", "PutPortfolioPreferences", {})
  .n("MigrationHubStrategyClient", "PutPortfolioPreferencesCommand")
  .sc(PutPortfolioPreferences)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutPortfolioPreferencesRequest;
      output: {};
    };
    sdk: {
      input: PutPortfolioPreferencesCommandInput;
      output: PutPortfolioPreferencesCommandOutput;
    };
  };
}
