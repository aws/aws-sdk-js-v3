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
  DeleteReplicationTaskAssessmentRunMessage,
  DeleteReplicationTaskAssessmentRunResponse,
} from "../models/models_0";
import { DeleteReplicationTaskAssessmentRun$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteReplicationTaskAssessmentRunCommand}.
 */
export interface DeleteReplicationTaskAssessmentRunCommandInput extends DeleteReplicationTaskAssessmentRunMessage {}
/**
 * @public
 *
 * The output of {@link DeleteReplicationTaskAssessmentRunCommand}.
 */
export interface DeleteReplicationTaskAssessmentRunCommandOutput
  extends DeleteReplicationTaskAssessmentRunResponse,
    __MetadataBearer {}

/**
 * <p>Deletes the record of a single premigration assessment run.</p>
 *          <p>This operation removes all metadata that DMS maintains about this assessment run.
 *          However, the operation leaves untouched all information about this assessment run that is
 *          stored in your Amazon S3 bucket.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DeleteReplicationTaskAssessmentRunCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DeleteReplicationTaskAssessmentRunCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * // import type { DatabaseMigrationServiceClientConfig } from "@aws-sdk/client-database-migration-service";
 * const config = {}; // type is DatabaseMigrationServiceClientConfig
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // DeleteReplicationTaskAssessmentRunMessage
 *   ReplicationTaskAssessmentRunArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteReplicationTaskAssessmentRunCommand(input);
 * const response = await client.send(command);
 * // { // DeleteReplicationTaskAssessmentRunResponse
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
 * @param DeleteReplicationTaskAssessmentRunCommandInput - {@link DeleteReplicationTaskAssessmentRunCommandInput}
 * @returns {@link DeleteReplicationTaskAssessmentRunCommandOutput}
 * @see {@link DeleteReplicationTaskAssessmentRunCommandInput} for command's `input` shape.
 * @see {@link DeleteReplicationTaskAssessmentRunCommandOutput} for command's `response` shape.
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
export class DeleteReplicationTaskAssessmentRunCommand extends $Command
  .classBuilder<
    DeleteReplicationTaskAssessmentRunCommandInput,
    DeleteReplicationTaskAssessmentRunCommandOutput,
    DatabaseMigrationServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DatabaseMigrationServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonDMSv20160101", "DeleteReplicationTaskAssessmentRun", {})
  .n("DatabaseMigrationServiceClient", "DeleteReplicationTaskAssessmentRunCommand")
  .sc(DeleteReplicationTaskAssessmentRun$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteReplicationTaskAssessmentRunMessage;
      output: DeleteReplicationTaskAssessmentRunResponse;
    };
    sdk: {
      input: DeleteReplicationTaskAssessmentRunCommandInput;
      output: DeleteReplicationTaskAssessmentRunCommandOutput;
    };
  };
}
