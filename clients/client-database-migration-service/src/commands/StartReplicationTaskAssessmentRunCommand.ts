// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  StartReplicationTaskAssessmentRunMessage,
  StartReplicationTaskAssessmentRunResponse,
} from "../models/models_1";
import { StartReplicationTaskAssessmentRun$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartReplicationTaskAssessmentRunCommand}.
 */
export interface StartReplicationTaskAssessmentRunCommandInput extends StartReplicationTaskAssessmentRunMessage {}
/**
 * @public
 *
 * The output of {@link StartReplicationTaskAssessmentRunCommand}.
 */
export interface StartReplicationTaskAssessmentRunCommandOutput extends StartReplicationTaskAssessmentRunResponse, __MetadataBearer {}

/**
 * Starts a new premigration assessment run for one or more individual assessments of a migration task.
 *
 * The assessments that you can specify depend on the source and target database engine and the migration type defined for the given task. To run this operation, your migration task must already be created. After you run this operation, you can review the status of each individual assessment. You can also run the migration task manually after the assessment run and its individual assessments complete.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, StartReplicationTaskAssessmentRunCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, StartReplicationTaskAssessmentRunCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * // import type { DatabaseMigrationServiceClientConfig } from "@aws-sdk/client-database-migration-service";
 * const config = {}; // type is DatabaseMigrationServiceClientConfig
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // StartReplicationTaskAssessmentRunMessage
 *   ReplicationTaskArn: "STRING_VALUE", // required
 *   ServiceAccessRoleArn: "STRING_VALUE", // required
 *   ResultLocationBucket: "STRING_VALUE", // required
 *   ResultLocationFolder: "STRING_VALUE",
 *   ResultEncryptionMode: "STRING_VALUE",
 *   ResultKmsKeyArn: "STRING_VALUE",
 *   AssessmentRunName: "STRING_VALUE", // required
 *   IncludeOnly: [ // IncludeTestList
 *     "STRING_VALUE",
 *   ],
 *   Exclude: [ // ExcludeTestList
 *     "STRING_VALUE",
 *   ],
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *       ResourceArn: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new StartReplicationTaskAssessmentRunCommand(input);
 * const response = await client.send(command);
 * // { // StartReplicationTaskAssessmentRunResponse
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
 * @param StartReplicationTaskAssessmentRunCommandInput - {@link StartReplicationTaskAssessmentRunCommandInput}
 * @returns {@link StartReplicationTaskAssessmentRunCommandOutput}
 * @see {@link StartReplicationTaskAssessmentRunCommandInput} for command's `input` shape.
 * @see {@link StartReplicationTaskAssessmentRunCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link AccessDeniedFault} (client fault)
 *
 * DMS was denied access to the endpoint. Check that the role is correctly configured.
 *
 * @throws {@link InvalidResourceStateFault} (client fault)
 *
 * The resource is in a state that prevents it from being used for database migration.
 *
 * @throws {@link KMSAccessDeniedFault} (client fault)
 *
 * The ciphertext references a key that doesn't exist or that the DMS account doesn't have access to.
 *
 * @throws {@link KMSDisabledFault} (client fault)
 *
 * The specified KMS key isn't enabled.
 *
 * @throws {@link KMSFault} (client fault)
 *
 * An Key Management Service (KMS) error is preventing access to KMS.
 *
 * @throws {@link KMSInvalidStateFault} (client fault)
 *
 * The state of the specified KMS resource isn't valid for this request.
 *
 * @throws {@link KMSKeyNotAccessibleFault} (client fault)
 *
 * DMS cannot access the KMS key.
 *
 * @throws {@link KMSNotFoundFault} (client fault)
 *
 * The specified KMS entity or resource can't be found.
 *
 * @throws {@link ResourceAlreadyExistsFault} (client fault)
 *
 * The resource you are attempting to create already exists.
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *
 * The resource could not be found.
 *
 * @throws {@link S3AccessDeniedFault} (client fault)
 *
 * Insufficient privileges are preventing access to an Amazon S3 object.
 *
 * @throws {@link S3ResourceNotFoundFault} (client fault)
 *
 * A specified Amazon S3 bucket, bucket folder, or other object can't be found.
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 *
 * Base exception class for all service exceptions from DatabaseMigrationService service.
 *
 * @public
 */
export class StartReplicationTaskAssessmentRunCommand extends command<StartReplicationTaskAssessmentRunCommandInput, StartReplicationTaskAssessmentRunCommandOutput>(
  _ep0,
  _mw0,
  "StartReplicationTaskAssessmentRun",
  StartReplicationTaskAssessmentRun$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartReplicationTaskAssessmentRunMessage;
      output: StartReplicationTaskAssessmentRunResponse;
    };
    sdk: {
      input: StartReplicationTaskAssessmentRunCommandInput;
      output: StartReplicationTaskAssessmentRunCommandOutput;
    };
  };
}
