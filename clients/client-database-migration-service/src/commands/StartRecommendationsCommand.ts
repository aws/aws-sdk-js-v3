// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  DatabaseMigrationServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DatabaseMigrationServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StartRecommendationsRequest } from "../models/models_1";
import { de_StartRecommendationsCommand, se_StartRecommendationsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartRecommendationsCommand}.
 */
export interface StartRecommendationsCommandInput extends StartRecommendationsRequest {}
/**
 * @public
 *
 * The output of {@link StartRecommendationsCommand}.
 */
export interface StartRecommendationsCommandOutput extends __MetadataBearer {}

/**
 * <important>
 *             <p>
 * End of support notice: On May 20, 2026, Amazon Web Services will end support for Amazon Web Services DMS Fleet Advisor;. After May 20, 2026, you will no longer be able to access the Amazon Web Services DMS Fleet Advisor; console or Amazon Web Services DMS Fleet Advisor; resources. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/dms_fleet.advisor-end-of-support.html">Amazon Web Services DMS Fleet Advisor end of support</a>.
 * </p>
 *          </important>
 *          <p>Starts the analysis of your source database to provide recommendations of target
 *             engines.</p>
 *          <p>You can create recommendations for multiple source databases using <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_BatchStartRecommendations.html">BatchStartRecommendations</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, StartRecommendationsCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, StartRecommendationsCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // StartRecommendationsRequest
 *   DatabaseId: "STRING_VALUE", // required
 *   Settings: { // RecommendationSettings
 *     InstanceSizingType: "STRING_VALUE", // required
 *     WorkloadType: "STRING_VALUE", // required
 *   },
 * };
 * const command = new StartRecommendationsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StartRecommendationsCommandInput - {@link StartRecommendationsCommandInput}
 * @returns {@link StartRecommendationsCommandOutput}
 * @see {@link StartRecommendationsCommandInput} for command's `input` shape.
 * @see {@link StartRecommendationsCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link AccessDeniedFault} (client fault)
 *  <p>DMS was denied access to the endpoint. Check that the
 *             role is correctly configured.</p>
 *
 * @throws {@link InvalidResourceStateFault} (client fault)
 *  <p>The resource is in a state that prevents it from being used for database migration.</p>
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 *
 * @public
 */
export class StartRecommendationsCommand extends $Command
  .classBuilder<
    StartRecommendationsCommandInput,
    StartRecommendationsCommandOutput,
    DatabaseMigrationServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DatabaseMigrationServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonDMSv20160101", "StartRecommendations", {})
  .n("DatabaseMigrationServiceClient", "StartRecommendationsCommand")
  .f(void 0, void 0)
  .ser(se_StartRecommendationsCommand)
  .de(de_StartRecommendationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartRecommendationsRequest;
      output: {};
    };
    sdk: {
      input: StartRecommendationsCommandInput;
      output: StartRecommendationsCommandOutput;
    };
  };
}
