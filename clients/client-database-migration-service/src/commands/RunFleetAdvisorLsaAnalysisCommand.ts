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
import { RunFleetAdvisorLsaAnalysisResponse } from "../models/models_1";
import { de_RunFleetAdvisorLsaAnalysisCommand, se_RunFleetAdvisorLsaAnalysisCommand } from "../protocols/Aws_json1_1";

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
 * <p>Runs large-scale assessment (LSA) analysis on every Fleet Advisor collector in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, RunFleetAdvisorLsaAnalysisCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, RunFleetAdvisorLsaAnalysisCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonDMSv20160101", "RunFleetAdvisorLsaAnalysis", {})
  .n("DatabaseMigrationServiceClient", "RunFleetAdvisorLsaAnalysisCommand")
  .f(void 0, void 0)
  .ser(se_RunFleetAdvisorLsaAnalysisCommand)
  .de(de_RunFleetAdvisorLsaAnalysisCommand)
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
