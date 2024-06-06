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
import {
  DescribeReplicationTaskAssessmentRunsMessage,
  DescribeReplicationTaskAssessmentRunsResponse,
} from "../models/models_0";
import {
  de_DescribeReplicationTaskAssessmentRunsCommand,
  se_DescribeReplicationTaskAssessmentRunsCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeReplicationTaskAssessmentRunsCommand}.
 */
export interface DescribeReplicationTaskAssessmentRunsCommandInput
  extends DescribeReplicationTaskAssessmentRunsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeReplicationTaskAssessmentRunsCommand}.
 */
export interface DescribeReplicationTaskAssessmentRunsCommandOutput
  extends DescribeReplicationTaskAssessmentRunsResponse,
    __MetadataBearer {}

/**
 * <p>Returns a paginated list of premigration assessment runs based on filter
 *          settings.</p>
 *          <p>These filter settings can specify a combination of premigration assessment runs,
 *          migration tasks, replication instances, and assessment run status values.</p>
 *          <note>
 *             <p>This operation doesn't return information about individual assessments. For this
 *             information, see the <code>DescribeReplicationTaskIndividualAssessments</code>
 *             operation. </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeReplicationTaskAssessmentRunsCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeReplicationTaskAssessmentRunsCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // DescribeReplicationTaskAssessmentRunsMessage
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
 * const command = new DescribeReplicationTaskAssessmentRunsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeReplicationTaskAssessmentRunsResponse
 * //   Marker: "STRING_VALUE",
 * //   ReplicationTaskAssessmentRuns: [ // ReplicationTaskAssessmentRunList
 * //     { // ReplicationTaskAssessmentRun
 * //       ReplicationTaskAssessmentRunArn: "STRING_VALUE",
 * //       ReplicationTaskArn: "STRING_VALUE",
 * //       Status: "STRING_VALUE",
 * //       ReplicationTaskAssessmentRunCreationDate: new Date("TIMESTAMP"),
 * //       AssessmentProgress: { // ReplicationTaskAssessmentRunProgress
 * //         IndividualAssessmentCount: Number("int"),
 * //         IndividualAssessmentCompletedCount: Number("int"),
 * //       },
 * //       LastFailureMessage: "STRING_VALUE",
 * //       ServiceAccessRoleArn: "STRING_VALUE",
 * //       ResultLocationBucket: "STRING_VALUE",
 * //       ResultLocationFolder: "STRING_VALUE",
 * //       ResultEncryptionMode: "STRING_VALUE",
 * //       ResultKmsKeyArn: "STRING_VALUE",
 * //       AssessmentRunName: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeReplicationTaskAssessmentRunsCommandInput - {@link DescribeReplicationTaskAssessmentRunsCommandInput}
 * @returns {@link DescribeReplicationTaskAssessmentRunsCommandOutput}
 * @see {@link DescribeReplicationTaskAssessmentRunsCommandInput} for command's `input` shape.
 * @see {@link DescribeReplicationTaskAssessmentRunsCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 * @public
 */
export class DescribeReplicationTaskAssessmentRunsCommand extends $Command
  .classBuilder<
    DescribeReplicationTaskAssessmentRunsCommandInput,
    DescribeReplicationTaskAssessmentRunsCommandOutput,
    DatabaseMigrationServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: DatabaseMigrationServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonDMSv20160101", "DescribeReplicationTaskAssessmentRuns", {})
  .n("DatabaseMigrationServiceClient", "DescribeReplicationTaskAssessmentRunsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeReplicationTaskAssessmentRunsCommand)
  .de(de_DescribeReplicationTaskAssessmentRunsCommand)
  .build() {}
