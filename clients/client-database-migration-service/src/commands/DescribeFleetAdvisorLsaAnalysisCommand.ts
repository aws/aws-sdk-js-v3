// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DescribeFleetAdvisorLsaAnalysisRequest,
  DescribeFleetAdvisorLsaAnalysisResponse,
} from "../models/models_0";
import { DescribeFleetAdvisorLsaAnalysis$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface DescribeFleetAdvisorLsaAnalysisCommandOutput extends DescribeFleetAdvisorLsaAnalysisResponse, __MetadataBearer {}

/**
 * > **Important:** End of support notice: On May 20, 2026, Amazon Web Services will end support for Amazon Web Services DMS Fleet Advisor;. After May 20, 2026, you will no longer be able to access the Amazon Web Services DMS Fleet Advisor; console or Amazon Web Services DMS Fleet Advisor; resources. For more information, see [Amazon Web Services DMS Fleet Advisor end of support](https://docs.aws.amazon.com/dms/latest/userguide/dms_fleet.advisor-end-of-support.html).
 *
 * Provides descriptions of large-scale assessment (LSA) analyses produced by your Fleet Advisor collectors.
 *
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
 *
 * The resource is in a state that prevents it from being used for database migration.
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 *
 * Base exception class for all service exceptions from DatabaseMigrationService service.
 *
 * @public
 */
export class DescribeFleetAdvisorLsaAnalysisCommand extends command<DescribeFleetAdvisorLsaAnalysisCommandInput, DescribeFleetAdvisorLsaAnalysisCommandOutput>(
  _ep0,
  _mw0,
  "DescribeFleetAdvisorLsaAnalysis",
  DescribeFleetAdvisorLsaAnalysis$
) {
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
