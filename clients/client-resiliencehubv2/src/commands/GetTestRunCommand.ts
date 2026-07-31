// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetTestRunRequest, GetTestRunResponse } from "../models/models_0";
import { GetTestRun$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetTestRunCommand}.
 */
export interface GetTestRunCommandInput extends GetTestRunRequest {}
/**
 * @public
 *
 * The output of {@link GetTestRunCommand}.
 */
export interface GetTestRunCommandOutput extends GetTestRunResponse, __MetadataBearer {}

/**
 * <p>Retrieves a test run by ID, including its status, results, and the configuration snapshotted when the run started.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Resiliencehubv2Client, GetTestRunCommand } from "@aws-sdk/client-resiliencehubv2"; // ES Modules import
 * // const { Resiliencehubv2Client, GetTestRunCommand } = require("@aws-sdk/client-resiliencehubv2"); // CommonJS import
 * // import type { Resiliencehubv2ClientConfig } from "@aws-sdk/client-resiliencehubv2";
 * const config = {}; // type is Resiliencehubv2ClientConfig
 * const client = new Resiliencehubv2Client(config);
 * const input = { // GetTestRunRequest
 *   testRunId: "STRING_VALUE", // required
 *   serviceArn: "STRING_VALUE", // required
 * };
 * const command = new GetTestRunCommand(input);
 * const response = await client.send(command);
 * // { // GetTestRunResponse
 * //   testRun: { // TestRun
 * //     testRunId: "STRING_VALUE", // required
 * //     testId: "STRING_VALUE", // required
 * //     status: "INITIALIZING" || "RUNNING" || "STOPPING" || "PASSED" || "FAILED" || "STOPPED" || "ERROR", // required
 * //     serviceArn: "STRING_VALUE",
 * //     startedAt: new Date("TIMESTAMP"), // required
 * //     endedAt: new Date("TIMESTAMP"),
 * //     experiments: [ // ExperimentDetailsList
 * //       { // ExperimentDetails
 * //         experimentArn: "STRING_VALUE", // required
 * //         details: "STRING_VALUE",
 * //       },
 * //     ],
 * //     eventCount: Number("int"),
 * //     parameters: { // TestParameters
 * //       "<keys>": [ // StringList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     errorMessage: "STRING_VALUE",
 * //     stopConditions: [ // StopConditionList
 * //       { // StopCondition
 * //         source: "aws:cloudwatch:alarm" || "none", // required
 * //         value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     loggingConfiguration: { // LoggingConfiguration
 * //       s3BucketName: "STRING_VALUE",
 * //       cloudWatchLogGroupArn: "STRING_VALUE",
 * //       logSchemaVersion: "STRING_VALUE",
 * //     },
 * //     roleName: "STRING_VALUE",
 * //     testTemplateArn: "STRING_VALUE", // required
 * //     reportConfiguration: { // TestRunReportConfiguration
 * //       reportOutput: [ // ReportOutputConfigurationList // required
 * //         { // ReportOutputConfiguration Union: only one key present
 * //           s3: { // S3ReportOutputConfiguration
 * //             bucketPath: "STRING_VALUE", // required
 * //             bucketOwner: "STRING_VALUE", // required
 * //           },
 * //         },
 * //       ],
 * //     },
 * //     policy: { // TestRunPolicySnapshot
 * //       policyArn: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       availabilitySlo: { // AvailabilitySlo
 * //         target: Number("double"),
 * //       },
 * //       multiAz: { // MultiAzTargets
 * //         rtoInMinutes: Number("int"),
 * //         rpoInMinutes: Number("int"),
 * //         disasterRecoveryApproach: "ACTIVE_ACTIVE" || "HOT_STANDBY" || "WARM_STANDBY" || "PILOT_LIGHT" || "BACKUP_AND_RESTORE",
 * //       },
 * //       multiRegion: { // MultiRegionTargets
 * //         rtoInMinutes: Number("int"),
 * //         rpoInMinutes: Number("int"),
 * //         disasterRecoveryApproach: "ACTIVE_ACTIVE" || "HOT_STANDBY" || "WARM_STANDBY" || "PILOT_LIGHT" || "BACKUP_AND_RESTORE",
 * //       },
 * //       dataRecovery: { // DataRecoveryTargets
 * //         timeBetweenBackupsInMinutes: Number("int"),
 * //       },
 * //     },
 * //     reportOutput: { // ReportGenerationResult
 * //       reportType: "FAILURE_MODE" || "TESTING", // required
 * //       status: "PENDING" || "SUCCEEDED" || "FAILED", // required
 * //       serviceArn: "STRING_VALUE",
 * //       assessmentId: "STRING_VALUE",
 * //       testRunId: "STRING_VALUE",
 * //       testTemplateArn: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       reportOutput: { // ReportOutput Union: only one key present
 * //         s3ReportOutput: { // S3ReportOutput
 * //           s3ObjectKey: "STRING_VALUE", // required
 * //         },
 * //         failedReportOutput: { // FailedReportOutput
 * //           errorCode: "INSUFFICIENT_PERMISSIONS" || "CONFIGURATION_ERROR" || "INTERNAL_ERROR", // required
 * //           errorMessage: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //     regionSwitchPlanArn: "STRING_VALUE",
 * //     regionSwitchExecutionId: "STRING_VALUE",
 * //     permissionModel: { // PermissionModel
 * //       invokerRoleName: "STRING_VALUE", // required
 * //       crossAccountRoles: [ // CrossAccountRoleList
 * //         { // CrossAccountRole
 * //           crossAccountRoleArn: "STRING_VALUE", // required
 * //           externalId: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //     regions: [ // RegionList
 * //       "STRING_VALUE",
 * //     ],
 * //     accountTargeting: "SINGLE_ACCOUNT" || "MULTI_ACCOUNT",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetTestRunCommandInput - {@link GetTestRunCommandInput}
 * @returns {@link GetTestRunCommandOutput}
 * @see {@link GetTestRunCommandInput} for command's `input` shape.
 * @see {@link GetTestRunCommandOutput} for command's `response` shape.
 * @see {@link Resiliencehubv2ClientResolvedConfig | config} for Resiliencehubv2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access denied — caller lacks required permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal service error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validation error — invalid input parameters.</p>
 *
 * @throws {@link Resiliencehubv2ServiceException}
 * <p>Base exception class for all service exceptions from Resiliencehubv2 service.</p>
 *
 *
 * @public
 */
export class GetTestRunCommand extends command<GetTestRunCommandInput, GetTestRunCommandOutput>(
  _ep0,
  _mw0,
  "GetTestRun",
  GetTestRun$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTestRunRequest;
      output: GetTestRunResponse;
    };
    sdk: {
      input: GetTestRunCommandInput;
      output: GetTestRunCommandOutput;
    };
  };
}
