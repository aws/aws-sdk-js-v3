// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  MigrationHubStrategyClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MigrationHubStrategyClient";
import { GetPortfolioPreferencesRequest, GetPortfolioPreferencesResponse } from "../models/models_0";
import { de_GetPortfolioPreferencesCommand, se_GetPortfolioPreferencesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetPortfolioPreferencesCommand}.
 */
export interface GetPortfolioPreferencesCommandInput extends GetPortfolioPreferencesRequest {}
/**
 * @public
 *
 * The output of {@link GetPortfolioPreferencesCommand}.
 */
export interface GetPortfolioPreferencesCommandOutput extends GetPortfolioPreferencesResponse, __MetadataBearer {}

/**
 * <p> Retrieves your migration and modernization preferences. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubStrategyClient, GetPortfolioPreferencesCommand } from "@aws-sdk/client-migrationhubstrategy"; // ES Modules import
 * // const { MigrationHubStrategyClient, GetPortfolioPreferencesCommand } = require("@aws-sdk/client-migrationhubstrategy"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new MigrationHubStrategyClient(config);
 * const input = {};
 * const command = new GetPortfolioPreferencesCommand(input);
 * const response = await client.send(command);
 * // { // GetPortfolioPreferencesResponse
 * //   prioritizeBusinessGoals: { // PrioritizeBusinessGoals
 * //     businessGoals: { // BusinessGoals
 * //       speedOfMigration: Number("int"),
 * //       reduceOperationalOverheadWithManagedServices: Number("int"),
 * //       modernizeInfrastructureWithCloudNativeTechnologies: Number("int"),
 * //       licenseCostReduction: Number("int"),
 * //     },
 * //   },
 * //   applicationPreferences: { // ApplicationPreferences
 * //     managementPreference: { // ManagementPreference Union: only one key present
 * //       awsManagedResources: { // AwsManagedResources
 * //         targetDestination: [ // AwsManagedTargetDestinations // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       selfManageResources: { // SelfManageResources
 * //         targetDestination: [ // SelfManageTargetDestinations // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       noPreference: { // NoManagementPreference
 * //         targetDestination: [ // NoPreferenceTargetDestinations // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //   },
 * //   databasePreferences: { // DatabasePreferences
 * //     databaseManagementPreference: "STRING_VALUE",
 * //     databaseMigrationPreference: { // DatabaseMigrationPreference Union: only one key present
 * //       heterogeneous: { // Heterogeneous
 * //         targetDatabaseEngine: [ // HeterogeneousTargetDatabaseEngines // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       homogeneous: { // Homogeneous
 * //         targetDatabaseEngine: [ // HomogeneousTargetDatabaseEngines
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       noPreference: { // NoDatabaseMigrationPreference
 * //         targetDatabaseEngine: [ // TargetDatabaseEngines // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //   },
 * //   applicationMode: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetPortfolioPreferencesCommandInput - {@link GetPortfolioPreferencesCommandInput}
 * @returns {@link GetPortfolioPreferencesCommandOutput}
 * @see {@link GetPortfolioPreferencesCommandInput} for command's `input` shape.
 * @see {@link GetPortfolioPreferencesCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubStrategyClientResolvedConfig | config} for MigrationHubStrategyClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> The user does not have permission to perform the action. Check the
 *       AWS Identity and Access Management (IAM) policy associated with this user.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> The server experienced an internal error. Try again. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The specified ID in the request is not found. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p> The request was denied due to request throttling. </p>
 *
 * @throws {@link MigrationHubStrategyServiceException}
 * <p>Base exception class for all service exceptions from MigrationHubStrategy service.</p>
 *
 * @public
 */
export class GetPortfolioPreferencesCommand extends $Command
  .classBuilder<
    GetPortfolioPreferencesCommandInput,
    GetPortfolioPreferencesCommandOutput,
    MigrationHubStrategyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MigrationHubStrategyClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSMigrationHubStrategyRecommendation", "GetPortfolioPreferences", {})
  .n("MigrationHubStrategyClient", "GetPortfolioPreferencesCommand")
  .f(void 0, void 0)
  .ser(se_GetPortfolioPreferencesCommand)
  .de(de_GetPortfolioPreferencesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetPortfolioPreferencesResponse;
    };
    sdk: {
      input: GetPortfolioPreferencesCommandInput;
      output: GetPortfolioPreferencesCommandOutput;
    };
  };
}
