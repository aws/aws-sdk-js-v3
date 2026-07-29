// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  StartMetadataModelExportToTargetMessage,
  StartMetadataModelExportToTargetResponse,
} from "../models/models_1";
import { StartMetadataModelExportToTarget$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartMetadataModelExportToTargetCommand}.
 */
export interface StartMetadataModelExportToTargetCommandInput extends StartMetadataModelExportToTargetMessage {}
/**
 * @public
 *
 * The output of {@link StartMetadataModelExportToTargetCommand}.
 */
export interface StartMetadataModelExportToTargetCommandOutput extends StartMetadataModelExportToTargetResponse, __MetadataBearer {}

/**
 * <p>Queues an export of the selected converted metadata models (database objects such as
 *          tables, views, and procedures) to your target database. If other requests created by
 *          <code>Start*</code> operations are already in the migration project's queue, the export
 *          begins after they complete.</p>
 *          <p>This operation requires a non-virtual target data provider.</p>
 *          <p>The export applies only metadata models created by conversion. Metadata models
 *          imported from the database are skipped.</p>
 *          <note>
 *             <p>If objects with the same name already exist on the target database, the export
 *             overwrites them.</p>
 *          </note>
 *          <p>The operation installs the extension pack on the target database. For more
 *          information, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/extension-pack.html">Using extension packs in DMS Schema Conversion</a>.</p>
 *          <p>To check the status of the export request, call
 *          <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeMetadataModelExportsToTarget.html">DescribeMetadataModelExportsToTarget</a> using the returned
 *          <code>RequestIdentifier</code> as a filter.</p>
 *          <p>
 *             <b>Required permissions:</b>
 *             <code>dms:StartMetadataModelExportToTarget</code>. For more information, see
 *          <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdatabasemigrationservice.html">Actions, resources, and condition keys for Database Migration Service</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, StartMetadataModelExportToTargetCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, StartMetadataModelExportToTargetCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * // import type { DatabaseMigrationServiceClientConfig } from "@aws-sdk/client-database-migration-service";
 * const config = {}; // type is DatabaseMigrationServiceClientConfig
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // StartMetadataModelExportToTargetMessage
 *   MigrationProjectIdentifier: "STRING_VALUE", // required
 *   SelectionRules: "STRING_VALUE", // required
 *   OverwriteExtensionPack: true || false,
 * };
 * const command = new StartMetadataModelExportToTargetCommand(input);
 * const response = await client.send(command);
 * // { // StartMetadataModelExportToTargetResponse
 * //   RequestIdentifier: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartMetadataModelExportToTargetCommandInput - {@link StartMetadataModelExportToTargetCommandInput}
 * @returns {@link StartMetadataModelExportToTargetCommandOutput}
 * @see {@link StartMetadataModelExportToTargetCommandInput} for command's `input` shape.
 * @see {@link StartMetadataModelExportToTargetCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link AccessDeniedFault} (client fault)
 *  <p>DMS was denied access to the endpoint. Check that the
 *             role is correctly configured.</p>
 *
 * @throws {@link InvalidResourceStateFault} (client fault)
 *  <p>The resource is in a state that prevents it from being used for database migration.</p>
 *
 * @throws {@link KMSKeyNotAccessibleFault} (client fault)
 *  <p>DMS cannot access the KMS key.</p>
 *
 * @throws {@link ResourceAlreadyExistsFault} (client fault)
 *  <p>The resource you are attempting to create already exists.</p>
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ResourceQuotaExceededFault} (client fault)
 *  <p>The quota for this resource quota has been exceeded.</p>
 *
 * @throws {@link S3AccessDeniedFault} (client fault)
 *  <p>Insufficient privileges are preventing access to an Amazon S3 object.</p>
 *
 * @throws {@link S3ResourceNotFoundFault} (client fault)
 *  <p>A specified Amazon S3 bucket, bucket folder, or other object can't be
 *             found.</p>
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 *
 * @example Export converted metadata models to the target database
 * ```javascript
 * // The following example queues an export of converted metadata models for all objects in the ExampleSchema schema to the target database.
 * const input = {
 *   MigrationProjectIdentifier: "arn:aws:dms:us-east-1:111122223333:migration-project:EXAMPLEABCDEFGHIJKLMNOPQRS",
 *   OverwriteExtensionPack: true,
 *   SelectionRules: `{"rules": [{"rule-type": "selection","rule-id": "1","rule-name": "1","object-locator": {"server-name": "example-target-server.us-east-1.rds.amazonaws.com", "schema-name": "ExampleSchema"},"rule-action": "explicit"}]}`
 * };
 * const command = new StartMetadataModelExportToTargetCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   RequestIdentifier: "a1b2c3d4-5678-90ab-cdef-EXAMPLE11111"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class StartMetadataModelExportToTargetCommand extends command<StartMetadataModelExportToTargetCommandInput, StartMetadataModelExportToTargetCommandOutput>(
  _ep0,
  _mw0,
  "StartMetadataModelExportToTarget",
  StartMetadataModelExportToTarget$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartMetadataModelExportToTargetMessage;
      output: StartMetadataModelExportToTargetResponse;
    };
    sdk: {
      input: StartMetadataModelExportToTargetCommandInput;
      output: StartMetadataModelExportToTargetCommandOutput;
    };
  };
}
