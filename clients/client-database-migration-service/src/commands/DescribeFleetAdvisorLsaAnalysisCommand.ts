// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  DatabaseMigrationServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DatabaseMigrationServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeFleetAdvisorLsaAnalysisRequest, DescribeFleetAdvisorLsaAnalysisResponse } from "../models/models_0";
import { DescribeFleetAdvisorLsaAnalysis } from "../schemas/schemas_11_DescribeFleetAdvisorLsaAnalysis";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeFleetAdvisorLsaAnalysisCommand}.
 */
export interface DescribeFleetAdvisorLsaAnalysisCommandInput extends DescribeFleetAdvisorLsaAnalysisRequest {}
/**
 * @public
 *
 * The output of {@link DescribeFleetAdvisorLsaAnalysisCommand}.
 */
export interface DescribeFleetAdvisorLsaAnalysisCommandOutput
  extends DescribeFleetAdvisorLsaAnalysisResponse,
    __MetadataBearer {}

/**
 * <important>
 *             <p>
 * End of support notice: On May 20, 2026, Amazon Web Services will end support for Amazon Web Services DMS Fleet Advisor;. After May 20, 2026, you will no longer be able to access the Amazon Web Services DMS Fleet Advisor; console or Amazon Web Services DMS Fleet Advisor; resources. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/dms_fleet.advisor-end-of-support.html">Amazon Web Services DMS Fleet Advisor end of support</a>.
 * </p>
 *          </important>
 *          <p>Provides descriptions of large-scale assessment (LSA) analyses produced by your Fleet
 *             Advisor collectors. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeFleetAdvisorLsaAnalysisCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeFleetAdvisorLsaAnalysisCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * // import type { DatabaseMigrationServiceClientConfig } from "@aws-sdk/client-database-migration-service";
 * const config = {}; // type is DatabaseMigrationServiceClientConfig
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // DescribeFleetAdvisorLsaAnalysisRequest
 *   MaxRecords: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeFleetAdvisorLsaAnalysisCommand(input);
 * const response = await client.send(command);
 * // { // DescribeFleetAdvisorLsaAnalysisResponse
 * //   Analysis: [ // FleetAdvisorLsaAnalysisResponseList
 * //     { // FleetAdvisorLsaAnalysisResponse
 * //       LsaAnalysisId: "STRING_VALUE",
 * //       Status: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeFleetAdvisorLsaAnalysisCommandInput - {@link DescribeFleetAdvisorLsaAnalysisCommandInput}
 * @returns {@link DescribeFleetAdvisorLsaAnalysisCommandOutput}
 * @see {@link DescribeFleetAdvisorLsaAnalysisCommandInput} for command's `input` shape.
 * @see {@link DescribeFleetAdvisorLsaAnalysisCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link InvalidResourceStateFault} (client fault)
 *  <p>The resource is in a state that prevents it from being used for database migration.</p>
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 *
 * @public
 */
export class DescribeFleetAdvisorLsaAnalysisCommand extends $Command
  .classBuilder<
    DescribeFleetAdvisorLsaAnalysisCommandInput,
    DescribeFleetAdvisorLsaAnalysisCommandOutput,
    DatabaseMigrationServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DatabaseMigrationServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonDMSv20160101", "DescribeFleetAdvisorLsaAnalysis", {})
  .n("DatabaseMigrationServiceClient", "DescribeFleetAdvisorLsaAnalysisCommand")
  .sc(DescribeFleetAdvisorLsaAnalysis)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeFleetAdvisorLsaAnalysisRequest;
      output: DescribeFleetAdvisorLsaAnalysisResponse;
    };
    sdk: {
      input: DescribeFleetAdvisorLsaAnalysisCommandInput;
      output: DescribeFleetAdvisorLsaAnalysisCommandOutput;
    };
  };
}
