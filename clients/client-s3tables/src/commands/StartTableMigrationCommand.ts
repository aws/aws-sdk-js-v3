// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartTableMigrationRequest, StartTableMigrationResponse } from "../models/models_0";
import { StartTableMigration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartTableMigrationCommand}.
 */
export interface StartTableMigrationCommandInput extends StartTableMigrationRequest {}
/**
 * @public
 *
 * The output of {@link StartTableMigrationCommand}.
 */
export interface StartTableMigrationCommandOutput extends StartTableMigrationResponse, __MetadataBearer {}

/**
 * <p>Starts migrating an Amazon Web Services Glue Data Catalog table into a new table in a table bucket. The migration runs asynchronously: this operation returns the migration ID and its initial state, and you track progress with <code>GetTableMigration</code>.</p> <p>The namespace must already exist, and a table with the specified name must not. The migration creates the table during planning and commits data to it as it runs. Until you call <code>CompleteTableMigration</code>, you can read the table but you can't write to it. If the migration fails or is cancelled, the table and the data already committed to it remain.</p> <p>The migration first checks the source and the destination, and writes the table compatibility and object compatibility reports to the bucket that you specify in <code>migrationOutput</code>. If you set <code>reviewMigrationPlan</code> to <code>true</code>, the migration waits in the <code>pendingReview</code> state so that you can review the reports, and continues only when you call <code>UpdateTableMigration</code> with <code>requestedState</code> set to <code>queued</code>. If you don't continue or cancel the migration within 30 days, the migration fails. Otherwise it continues to migrate the data, and writes the object migration report when the migration ends. If planning fails, the migration writes no object migration report.</p> <dl> <dt>Permissions</dt> <dd> <ul> <li> <p>You must have the <code>s3tables:StartTableMigration</code> permission to use this operation.</p> </li> <li> <p>You must have the <code>iam:PassRole</code> permission on the role that you specify in <code>roleARN</code>, with a condition that allows passing it to <code>migration.s3tables.amazonaws.com</code>. The associated resource is the table bucket.</p> </li> <li> <p>If <code>destinationTable</code> specifies SSE-KMS encryption, you must have the <code>kms:DescribeKey</code> and <code>kms:GenerateDataKey</code> permissions on the KMS key. You must also grant the S3 Tables maintenance principal access to the key. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-tables-kms-permissions.html">Permissions requirements for S3 Tables SSE-KMS encryption</a>.</p> </li> </ul> </dd> </dl>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3TablesClient, StartTableMigrationCommand } from "@aws-sdk/client-s3tables"; // ES Modules import
 * // const { S3TablesClient, StartTableMigrationCommand } = require("@aws-sdk/client-s3tables"); // CommonJS import
 * // import type { S3TablesClientConfig } from "@aws-sdk/client-s3tables";
 * const config = {}; // type is S3TablesClientConfig
 * const client = new S3TablesClient(config);
 * const input = { // StartTableMigrationRequest
 *   roleARN: "STRING_VALUE", // required
 *   destinationTable: { // DestinationTable
 *     tableBucketARN: "STRING_VALUE", // required
 *     namespace: "STRING_VALUE", // required
 *     name: "STRING_VALUE", // required
 *     encryptionConfiguration: { // EncryptionConfiguration
 *       sseAlgorithm: "AES256" || "aws:kms", // required
 *       kmsKeyArn: "STRING_VALUE",
 *     },
 *     storageClassConfiguration: { // StorageClassConfiguration
 *       storageClass: "STANDARD" || "INTELLIGENT_TIERING", // required
 *     },
 *     tags: { // Tags
 *       "<keys>": "STRING_VALUE",
 *     },
 *     properties: { // MigrationTableProperties
 *       writeFormat: "parquet",
 *       icebergFormatVersion: Number("int"),
 *       compressionCodec: "zstd" || "snappy" || "gzip" || "uncompressed",
 *       dictionaryEncoding: true || false,
 *     },
 *     schema: { // IcebergSchemaV2
 *       type: "struct", // required
 *       fields: [ // SchemaV2FieldList // required
 *         { // SchemaV2Field
 *           id: Number("int"), // required
 *           name: "STRING_VALUE", // required
 *           type: "DOCUMENT_VALUE", // required
 *           required: true || false, // required
 *           doc: "STRING_VALUE",
 *         },
 *       ],
 *       schemaId: Number("int"),
 *       identifierFieldIds: [ // IntegerList
 *         Number("int"),
 *       ],
 *     },
 *     icebergSortOrder: { // IcebergSortOrder
 *       orderId: Number("int"), // required
 *       fields: [ // IcebergSortFieldList // required
 *         { // IcebergSortField
 *           sourceId: Number("int"), // required
 *           transform: "STRING_VALUE", // required
 *           direction: "asc" || "desc", // required
 *           nullOrder: "nulls-first" || "nulls-last", // required
 *         },
 *       ],
 *     },
 *   },
 *   sourceType: "glueTable", // required
 *   source: { // SourceConfiguration Union: only one key present
 *     glueTable: { // GlueTableSource
 *       catalogId: "STRING_VALUE", // required
 *       databaseName: "STRING_VALUE", // required
 *       tableName: "STRING_VALUE", // required
 *     },
 *   },
 *   dataMigration: { // DataMigrationSettings
 *     maintenanceSettings: { // MaintenanceSettings
 *       icebergCompaction: { // MigrationCompactionSettings
 *         targetFileSizeMB: Number("int"),
 *         strategy: "auto" || "binpack" || "sort" || "z-order",
 *       },
 *       icebergSnapshotManagement: { // MigrationSnapshotManagementSettings
 *         minSnapshotsToKeep: Number("int"),
 *         maxSnapshotAgeHours: Number("int"),
 *       },
 *     },
 *     migrationPolicies: { // MigrationPolicies
 *       unmatchedSourceFieldsPolicy: "fail" || "drop",
 *       incompatibleValuesPolicy: "fail" || "setNull",
 *     },
 *   },
 *   reviewMigrationPlan: true || false,
 *   migrationOutput: { // MigrationOutputConfiguration
 *     bucket: "STRING_VALUE", // required
 *     prefixes: { // MigrationReportPrefixes
 *       tableCompatibilityReport: "STRING_VALUE",
 *       objectCompatibilityReport: "STRING_VALUE",
 *       objectMigrationReport: "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new StartTableMigrationCommand(input);
 * const response = await client.send(command);
 * // { // StartTableMigrationResponse
 * //   migrationId: "STRING_VALUE", // required
 * //   state: "new" || "planning" || "pendingReview" || "queued" || "migrating" || "succeeded" || "failed" || "cancelling" || "cancelled", // required
 * // };
 *
 * ```
 *
 * @param StartTableMigrationCommandInput - {@link StartTableMigrationCommandInput}
 * @returns {@link StartTableMigrationCommandOutput}
 * @see {@link StartTableMigrationCommandInput} for command's `input` shape.
 * @see {@link StartTableMigrationCommandOutput} for command's `response` shape.
 * @see {@link S3TablesClientResolvedConfig | config} for S3TablesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The action cannot be performed because you do not have the required permission.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is invalid or malformed.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request failed because there is a conflict with a previous write. You can retry the request.</p>
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
export class StartTableMigrationCommand extends command<StartTableMigrationCommandInput, StartTableMigrationCommandOutput>(
  _ep0,
  _mw0,
  "StartTableMigration",
  StartTableMigration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartTableMigrationRequest;
      output: StartTableMigrationResponse;
    };
    sdk: {
      input: StartTableMigrationCommandInput;
      output: StartTableMigrationCommandOutput;
    };
  };
}
