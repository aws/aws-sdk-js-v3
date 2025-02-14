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
  DescribeApplicableIndividualAssessmentsMessage,
  DescribeApplicableIndividualAssessmentsResponse,
} from "../models/models_0";
import {
  de_DescribeApplicableIndividualAssessmentsCommand,
  se_DescribeApplicableIndividualAssessmentsCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeApplicableIndividualAssessmentsCommand}.
 */
export interface DescribeApplicableIndividualAssessmentsCommandInput
  extends DescribeApplicableIndividualAssessmentsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeApplicableIndividualAssessmentsCommand}.
 */
export interface DescribeApplicableIndividualAssessmentsCommandOutput
  extends DescribeApplicableIndividualAssessmentsResponse,
    __MetadataBearer {}

/**
 * <p>Provides a list of individual assessments that you can specify for a new premigration
 *          assessment run, given one or more parameters.</p>
 *          <p>If you specify an existing migration task, this operation provides the default
 *          individual assessments you can specify for that task. Otherwise, the specified parameters
 *          model elements of a possible migration task on which to base a premigration assessment
 *          run.</p>
 *          <p>To use these migration task modeling parameters, you must specify an existing
 *          replication instance, a source database engine, a target database engine, and a migration
 *          type. This combination of parameters potentially limits the default individual assessments
 *          available for an assessment run created for a corresponding migration task.</p>
 *          <p>If you specify no parameters, this operation provides a list of all possible individual
 *          assessments that you can specify for an assessment run. If you specify any one of the task
 *          modeling parameters, you must specify all of them or the operation cannot provide a list of
 *          individual assessments. The only parameter that you can specify alone is for an existing
 *          migration task. The specified task definition then determines the default list of
 *          individual assessments that you can specify in an assessment run for the task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeApplicableIndividualAssessmentsCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeApplicableIndividualAssessmentsCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // DescribeApplicableIndividualAssessmentsMessage
 *   ReplicationTaskArn: "STRING_VALUE",
 *   ReplicationInstanceArn: "STRING_VALUE",
 *   SourceEngineName: "STRING_VALUE",
 *   TargetEngineName: "STRING_VALUE",
 *   MigrationType: "full-load" || "cdc" || "full-load-and-cdc",
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeApplicableIndividualAssessmentsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeApplicableIndividualAssessmentsResponse
 * //   IndividualAssessmentNames: [ // IndividualAssessmentNameList
 * //     "STRING_VALUE",
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeApplicableIndividualAssessmentsCommandInput - {@link DescribeApplicableIndividualAssessmentsCommandInput}
 * @returns {@link DescribeApplicableIndividualAssessmentsCommandOutput}
 * @see {@link DescribeApplicableIndividualAssessmentsCommandInput} for command's `input` shape.
 * @see {@link DescribeApplicableIndividualAssessmentsCommandOutput} for command's `response` shape.
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
 * @public
 */
export class DescribeApplicableIndividualAssessmentsCommand extends $Command
  .classBuilder<
    DescribeApplicableIndividualAssessmentsCommandInput,
    DescribeApplicableIndividualAssessmentsCommandOutput,
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
  .s("AmazonDMSv20160101", "DescribeApplicableIndividualAssessments", {})
  .n("DatabaseMigrationServiceClient", "DescribeApplicableIndividualAssessmentsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeApplicableIndividualAssessmentsCommand)
  .de(de_DescribeApplicableIndividualAssessmentsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeApplicableIndividualAssessmentsMessage;
      output: DescribeApplicableIndividualAssessmentsResponse;
    };
    sdk: {
      input: DescribeApplicableIndividualAssessmentsCommandInput;
      output: DescribeApplicableIndividualAssessmentsCommandOutput;
    };
  };
}
