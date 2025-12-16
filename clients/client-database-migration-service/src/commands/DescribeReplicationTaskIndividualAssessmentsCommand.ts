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
import type {
  DescribeReplicationTaskIndividualAssessmentsMessage,
  DescribeReplicationTaskIndividualAssessmentsResponse,
} from "../models/models_0";
import { DescribeReplicationTaskIndividualAssessments$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeReplicationTaskIndividualAssessmentsCommand}.
 */
export interface DescribeReplicationTaskIndividualAssessmentsCommandInput
  extends DescribeReplicationTaskIndividualAssessmentsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeReplicationTaskIndividualAssessmentsCommand}.
 */
export interface DescribeReplicationTaskIndividualAssessmentsCommandOutput
  extends DescribeReplicationTaskIndividualAssessmentsResponse,
    __MetadataBearer {}

/**
 * <p>Returns a paginated list of individual assessments based on filter settings.</p>
 *          <p>These filter settings can specify a combination of premigration assessment runs,
 *          migration tasks, and assessment status values.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeReplicationTaskIndividualAssessmentsCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeReplicationTaskIndividualAssessmentsCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * // import type { DatabaseMigrationServiceClientConfig } from "@aws-sdk/client-database-migration-service";
 * const config = {}; // type is DatabaseMigrationServiceClientConfig
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // DescribeReplicationTaskIndividualAssessmentsMessage
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeReplicationTaskIndividualAssessmentsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeReplicationTaskIndividualAssessmentsResponse
 * //   Marker: "STRING_VALUE",
 * //   ReplicationTaskIndividualAssessments: [ // ReplicationTaskIndividualAssessmentList
 * //     { // ReplicationTaskIndividualAssessment
 * //       ReplicationTaskIndividualAssessmentArn: "STRING_VALUE",
 * //       ReplicationTaskAssessmentRunArn: "STRING_VALUE",
 * //       IndividualAssessmentName: "STRING_VALUE",
 * //       Status: "STRING_VALUE",
 * //       ReplicationTaskIndividualAssessmentStartDate: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeReplicationTaskIndividualAssessmentsCommandInput - {@link DescribeReplicationTaskIndividualAssessmentsCommandInput}
 * @returns {@link DescribeReplicationTaskIndividualAssessmentsCommandOutput}
 * @see {@link DescribeReplicationTaskIndividualAssessmentsCommandInput} for command's `input` shape.
 * @see {@link DescribeReplicationTaskIndividualAssessmentsCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
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
export class DescribeReplicationTaskIndividualAssessmentsCommand extends $Command
  .classBuilder<
    DescribeReplicationTaskIndividualAssessmentsCommandInput,
    DescribeReplicationTaskIndividualAssessmentsCommandOutput,
    DatabaseMigrationServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DatabaseMigrationServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonDMSv20160101", "DescribeReplicationTaskIndividualAssessments", {})
  .n("DatabaseMigrationServiceClient", "DescribeReplicationTaskIndividualAssessmentsCommand")
  .sc(DescribeReplicationTaskIndividualAssessments$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeReplicationTaskIndividualAssessmentsMessage;
      output: DescribeReplicationTaskIndividualAssessmentsResponse;
    };
    sdk: {
      input: DescribeReplicationTaskIndividualAssessmentsCommandInput;
      output: DescribeReplicationTaskIndividualAssessmentsCommandOutput;
    };
  };
}
