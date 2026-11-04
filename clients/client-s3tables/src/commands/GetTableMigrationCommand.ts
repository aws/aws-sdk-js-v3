// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetTableMigrationRequest, GetTableMigrationResponse } from "../models/models_0";
import { GetTableMigration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetTableMigrationCommand}.
 */
export interface GetTableMigrationCommandInput extends GetTableMigrationRequest {}
/**
 * @public
 *
 * The output of {@link GetTableMigrationCommand}.
 */
export interface GetTableMigrationCommandOutput extends GetTableMigrationResponse, __MetadataBearer {}

/**
 * <p>Gets the details of a migration, including its state, the reason it failed, its statistics and the location of its reports. Identify the migration by its <code>migrationId</code>, or specify the <code>tableARN</code> of a destination table to get that table's most recent migration.</p> <dl> <dt>Permissions</dt> <dd> <ul> <li> <p>You must have the <code>s3tables:GetTableMigration</code> permission to use this operation.</p> </li> </ul> </dd> </dl>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3TablesClient, GetTableMigrationCommand } from "@aws-sdk/client-s3tables"; // ES Modules import
 * // const { S3TablesClient, GetTableMigrationCommand } = require("@aws-sdk/client-s3tables"); // CommonJS import
 * // import type { S3TablesClientConfig } from "@aws-sdk/client-s3tables";
 * const config = {}; // type is S3TablesClientConfig
 * const client = new S3TablesClient(config);
 * const input = { // GetTableMigrationRequest
 *   migrationId: "STRING_VALUE",
 *   tableARN: "STRING_VALUE",
 * };
 * const command = new GetTableMigrationCommand(input);
 * const response = await client.send(command);
 * // { // GetTableMigrationResponse
 * //   migrationId: "STRING_VALUE", // required
 * //   tableBucketARN: "STRING_VALUE", // required
 * //   namespace: "STRING_VALUE", // required
 * //   tableARN: "STRING_VALUE",
 * //   name: "STRING_VALUE", // required
 * //   type: "start" || "sync", // required
 * //   state: "new" || "planning" || "pendingReview" || "queued" || "migrating" || "succeeded" || "failed" || "cancelling" || "cancelled", // required
 * //   roleARN: "STRING_VALUE", // required
 * //   reviewMigrationPlan: true || false, // required
 * //   hasValidPlan: true || false,
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   stateUpdatedAt: new Date("TIMESTAMP"), // required
 * //   failureReason: { // MigrationFailureReason
 * //     code: "rolePermissions" || "sourcePermissions" || "destinationPermissions" || "resourceNotFound" || "sourceNotSupported" || "objectMigrationReport" || "objectCompatibilityReport" || "tableCompatibilityReport" || "internalError" || "reportBucketNotSupported", // required
 * //     detail: "STRING_VALUE",
 * //   },
 * //   planningStats: { // PlanningStats
 * //     objectsScanned: Number("long"),
 * //     objectsPlanned: Number("long"),
 * //     partitionCount: Number("long"),
 * //   },
 * //   migrationStats: { // MigrationStats
 * //     objectsMigrated: Number("long"),
 * //     objectsFailedMigration: Number("long"),
 * //     objectsPendingMigration: Number("long"),
 * //   },
 * //   sourceType: "glueTable", // required
 * //   source: { // SourceConfiguration Union: only one key present
 * //     glueTable: { // GlueTableSource
 * //       catalogId: "STRING_VALUE", // required
 * //       databaseName: "STRING_VALUE", // required
 * //       tableName: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   dataMigration: { // DataMigrationOverview
 * //     maintenanceSettings: { // MaintenanceSettings
 * //       icebergCompaction: { // MigrationCompactionSettings
 * //         targetFileSizeMB: Number("int"),
 * //         strategy: "auto" || "binpack" || "sort" || "z-order",
 * //       },
 * //       icebergSnapshotManagement: { // MigrationSnapshotManagementSettings
 * //         minSnapshotsToKeep: Number("int"),
 * //         maxSnapshotAgeHours: Number("int"),
 * //       },
 * //     },
 * //     migrationPolicies: { // MigrationPolicies
 * //       unmatchedSourceFieldsPolicy: "fail" || "drop",
 * //       incompatibleValuesPolicy: "fail" || "setNull",
 * //     },
 * //   },
 * //   migrationOutput: { // MigrationOutputOverview
 * //     bucket: "STRING_VALUE", // required
 * //     tableCompatibilityReport: { // ReportOverview
 * //       prefix: "STRING_VALUE",
 * //       key: "STRING_VALUE",
 * //       checksumCRC64NVME: "STRING_VALUE",
 * //       invalidFindings: { // FindingCategoryCounts
 * //         "<keys>": Number("long"),
 * //       },
 * //     },
 * //     objectCompatibilityReport: {
 * //       prefix: "STRING_VALUE",
 * //       key: "STRING_VALUE",
 * //       checksumCRC64NVME: "STRING_VALUE",
 * //       invalidFindings: {
 * //         "<keys>": Number("long"),
 * //       },
 * //     },
 * //     objectMigrationReport: {
 * //       prefix: "STRING_VALUE",
 * //       key: "STRING_VALUE",
 * //       checksumCRC64NVME: "STRING_VALUE",
 * //       invalidFindings: {
 * //         "<keys>": Number("long"),
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetTableMigrationCommandInput - {@link GetTableMigrationCommandInput}
 * @returns {@link GetTableMigrationCommandOutput}
 * @see {@link GetTableMigrationCommandInput} for command's `input` shape.
 * @see {@link GetTableMigrationCommandOutput} for command's `response` shape.
 * @see {@link S3TablesClientResolvedConfig | config} for S3TablesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The action cannot be performed because you do not have the required permission.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is invalid or malformed.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The caller isn't authorized to make the request.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>The request failed due to an internal server error.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The request was rejected because the specified resource could not be found.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link S3TablesServiceException}
 * <p>Base exception class for all service exceptions from S3Tables service.</p>
 *
 *
 * @public
 */
export class GetTableMigrationCommand extends command<GetTableMigrationCommandInput, GetTableMigrationCommandOutput>(
  _ep0,
  _mw0,
  "GetTableMigration",
  GetTableMigration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTableMigrationRequest;
      output: GetTableMigrationResponse;
    };
    sdk: {
      input: GetTableMigrationCommandInput;
      output: GetTableMigrationCommandOutput;
    };
  };
}
