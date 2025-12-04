// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  DatabaseMigrationServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DatabaseMigrationServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { RunFleetAdvisorLsaAnalysisResponse } from "../models/models_1";
import { RunFleetAdvisorLsaAnalysis } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RunFleetAdvisorLsaAnalysisCommand}.
 */
export interface RunFleetAdvisorLsaAnalysisCommandInput {}
/**
 * @public
 *
 * The output of {@link RunFleetAdvisorLsaAnalysisCommand}.
 */
export interface RunFleetAdvisorLsaAnalysisCommandOutput extends RunFleetAdvisorLsaAnalysisResponse, __MetadataBearer {}

/**
 * <important>
 *             <p>
 * End of support notice: On May 20, 2026, Amazon Web Services will end support for Amazon Web Services DMS Fleet Advisor;. After May 20, 2026, you will no longer be able to access the Amazon Web Services DMS Fleet Advisor; console or Amazon Web Services DMS Fleet Advisor; resources. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/dms_fleet.advisor-end-of-support.html">Amazon Web Services DMS Fleet Advisor end of support</a>.
 * </p>
 *          </important>
 *          <p>Runs large-scale assessment (LSA) analysis on every Fleet Advisor collector in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, RunFleetAdvisorLsaAnalysisCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, RunFleetAdvisorLsaAnalysisCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * // import type { DatabaseMigrationServiceClientConfig } from "@aws-sdk/client-database-migration-service";
 * const config = {}; // type is DatabaseMigrationServiceClientConfig
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = {};
 * const command = new RunFleetAdvisorLsaAnalysisCommand(input);
 * const response = await client.send(command);
 * // { // RunFleetAdvisorLsaAnalysisResponse
 * //   LsaAnalysisId: "STRING_VALUE",
 * //   Status: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RunFleetAdvisorLsaAnalysisCommandInput - {@link RunFleetAdvisorLsaAnalysisCommandInput}
 * @returns {@link RunFleetAdvisorLsaAnalysisCommandOutput}
 * @see {@link RunFleetAdvisorLsaAnalysisCommandInput} for command's `input` shape.
 * @see {@link RunFleetAdvisorLsaAnalysisCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
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
export class RunFleetAdvisorLsaAnalysisCommand extends $Command
  .classBuilder<
    RunFleetAdvisorLsaAnalysisCommandInput,
    RunFleetAdvisorLsaAnalysisCommandOutput,
    DatabaseMigrationServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DatabaseMigrationServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonDMSv20160101", "RunFleetAdvisorLsaAnalysis", {})
  .n("DatabaseMigrationServiceClient", "RunFleetAdvisorLsaAnalysisCommand")
  .sc(RunFleetAdvisorLsaAnalysis)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: RunFleetAdvisorLsaAnalysisResponse;
    };
    sdk: {
      input: RunFleetAdvisorLsaAnalysisCommandInput;
      output: RunFleetAdvisorLsaAnalysisCommandOutput;
    };
  };
}
