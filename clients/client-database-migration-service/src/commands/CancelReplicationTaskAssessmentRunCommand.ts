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
import {
  CancelReplicationTaskAssessmentRunMessage,
  CancelReplicationTaskAssessmentRunResponse,
} from "../models/models_0";
import { CancelReplicationTaskAssessmentRun } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CancelReplicationTaskAssessmentRunCommand}.
 */
export interface CancelReplicationTaskAssessmentRunCommandInput extends CancelReplicationTaskAssessmentRunMessage {}
/**
 * @public
 *
 * The output of {@link CancelReplicationTaskAssessmentRunCommand}.
 */
export interface CancelReplicationTaskAssessmentRunCommandOutput
  extends CancelReplicationTaskAssessmentRunResponse,
    __MetadataBearer {}

/**
 * <p>Cancels a single premigration assessment run.</p>
 *          <p>This operation prevents any individual assessments from running if they haven't started
 *          running. It also attempts to cancel any individual assessments that are currently
 *          running.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, CancelReplicationTaskAssessmentRunCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, CancelReplicationTaskAssessmentRunCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * // import type { DatabaseMigrationServiceClientConfig } from "@aws-sdk/client-database-migration-service";
 * const config = {}; // type is DatabaseMigrationServiceClientConfig
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // CancelReplicationTaskAssessmentRunMessage
 *   ReplicationTaskAssessmentRunArn: "STRING_VALUE", // required
 * };
 * const command = new CancelReplicationTaskAssessmentRunCommand(input);
 * const response = await client.send(command);
 * // { // CancelReplicationTaskAssessmentRunResponse
 * //   ReplicationTaskAssessmentRun: { // ReplicationTaskAssessmentRun
 * //     ReplicationTaskAssessmentRunArn: "STRING_VALUE",
 * //     ReplicationTaskArn: "STRING_VALUE",
 * //     Status: "STRING_VALUE",
 * //     ReplicationTaskAssessmentRunCreationDate: new Date("TIMESTAMP"),
 * //     AssessmentProgress: { // ReplicationTaskAssessmentRunProgress
 * //       IndividualAssessmentCount: Number("int"),
 * //       IndividualAssessmentCompletedCount: Number("int"),
 * //     },
 * //     LastFailureMessage: "STRING_VALUE",
 * //     ServiceAccessRoleArn: "STRING_VALUE",
 * //     ResultLocationBucket: "STRING_VALUE",
 * //     ResultLocationFolder: "STRING_VALUE",
 * //     ResultEncryptionMode: "STRING_VALUE",
 * //     ResultKmsKeyArn: "STRING_VALUE",
 * //     AssessmentRunName: "STRING_VALUE",
 * //     IsLatestTaskAssessmentRun: true || false,
 * //     ResultStatistic: { // ReplicationTaskAssessmentRunResultStatistic
 * //       Passed: Number("int"),
 * //       Failed: Number("int"),
 * //       Error: Number("int"),
 * //       Warning: Number("int"),
 * //       Cancelled: Number("int"),
 * //       Skipped: Number("int"),
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CancelReplicationTaskAssessmentRunCommandInput - {@link CancelReplicationTaskAssessmentRunCommandInput}
 * @returns {@link CancelReplicationTaskAssessmentRunCommandOutput}
 * @see {@link CancelReplicationTaskAssessmentRunCommandInput} for command's `input` shape.
 * @see {@link CancelReplicationTaskAssessmentRunCommandOutput} for command's `response` shape.
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
export class CancelReplicationTaskAssessmentRunCommand extends $Command
  .classBuilder<
    CancelReplicationTaskAssessmentRunCommandInput,
    CancelReplicationTaskAssessmentRunCommandOutput,
    DatabaseMigrationServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DatabaseMigrationServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonDMSv20160101", "CancelReplicationTaskAssessmentRun", {})
  .n("DatabaseMigrationServiceClient", "CancelReplicationTaskAssessmentRunCommand")
  .sc(CancelReplicationTaskAssessmentRun)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelReplicationTaskAssessmentRunMessage;
      output: CancelReplicationTaskAssessmentRunResponse;
    };
    sdk: {
      input: CancelReplicationTaskAssessmentRunCommandInput;
      output: CancelReplicationTaskAssessmentRunCommandOutput;
    };
  };
}
