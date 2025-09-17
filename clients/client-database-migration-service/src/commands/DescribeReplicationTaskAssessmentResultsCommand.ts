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
  DescribeReplicationTaskAssessmentResultsMessage,
  DescribeReplicationTaskAssessmentResultsResponse,
  DescribeReplicationTaskAssessmentResultsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  de_DescribeReplicationTaskAssessmentResultsCommand,
  se_DescribeReplicationTaskAssessmentResultsCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeReplicationTaskAssessmentResultsCommand}.
 */
export interface DescribeReplicationTaskAssessmentResultsCommandInput
  extends DescribeReplicationTaskAssessmentResultsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeReplicationTaskAssessmentResultsCommand}.
 */
export interface DescribeReplicationTaskAssessmentResultsCommandOutput
  extends DescribeReplicationTaskAssessmentResultsResponse,
    __MetadataBearer {}

/**
 * <p>Returns the task assessment results from the Amazon S3 bucket that DMS creates in your
 *          Amazon Web Services account. This action always returns the latest results.</p>
 *          <p>For more information about DMS task assessments, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.AssessmentReport.html">Creating a task assessment
 *             report</a> in the <i>Database Migration Service User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeReplicationTaskAssessmentResultsCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeReplicationTaskAssessmentResultsCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * // import type { DatabaseMigrationServiceClientConfig } from "@aws-sdk/client-database-migration-service";
 * const config = {}; // type is DatabaseMigrationServiceClientConfig
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // DescribeReplicationTaskAssessmentResultsMessage
 *   ReplicationTaskArn: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeReplicationTaskAssessmentResultsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeReplicationTaskAssessmentResultsResponse
 * //   Marker: "STRING_VALUE",
 * //   BucketName: "STRING_VALUE",
 * //   ReplicationTaskAssessmentResults: [ // ReplicationTaskAssessmentResultList
 * //     { // ReplicationTaskAssessmentResult
 * //       ReplicationTaskIdentifier: "STRING_VALUE",
 * //       ReplicationTaskArn: "STRING_VALUE",
 * //       ReplicationTaskLastAssessmentDate: new Date("TIMESTAMP"),
 * //       AssessmentStatus: "STRING_VALUE",
 * //       AssessmentResultsFile: "STRING_VALUE",
 * //       AssessmentResults: "STRING_VALUE",
 * //       S3ObjectUrl: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeReplicationTaskAssessmentResultsCommandInput - {@link DescribeReplicationTaskAssessmentResultsCommandInput}
 * @returns {@link DescribeReplicationTaskAssessmentResultsCommandOutput}
 * @see {@link DescribeReplicationTaskAssessmentResultsCommandInput} for command's `input` shape.
 * @see {@link DescribeReplicationTaskAssessmentResultsCommandOutput} for command's `response` shape.
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
export class DescribeReplicationTaskAssessmentResultsCommand extends $Command
  .classBuilder<
    DescribeReplicationTaskAssessmentResultsCommandInput,
    DescribeReplicationTaskAssessmentResultsCommandOutput,
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
  .s("AmazonDMSv20160101", "DescribeReplicationTaskAssessmentResults", {})
  .n("DatabaseMigrationServiceClient", "DescribeReplicationTaskAssessmentResultsCommand")
  .f(void 0, DescribeReplicationTaskAssessmentResultsResponseFilterSensitiveLog)
  .ser(se_DescribeReplicationTaskAssessmentResultsCommand)
  .de(de_DescribeReplicationTaskAssessmentResultsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeReplicationTaskAssessmentResultsMessage;
      output: DescribeReplicationTaskAssessmentResultsResponse;
    };
    sdk: {
      input: DescribeReplicationTaskAssessmentResultsCommandInput;
      output: DescribeReplicationTaskAssessmentResultsCommandOutput;
    };
  };
}
