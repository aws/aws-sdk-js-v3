// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  StartMetadataModelExportAsScriptMessage,
  StartMetadataModelExportAsScriptResponse,
} from "../models/models_1";
import { StartMetadataModelExportAsScript$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartMetadataModelExportAsScriptCommand}.
 */
export interface StartMetadataModelExportAsScriptCommandInput extends StartMetadataModelExportAsScriptMessage {}
/**
 * @public
 *
 * The output of {@link StartMetadataModelExportAsScriptCommand}.
 */
export interface StartMetadataModelExportAsScriptCommandOutput extends StartMetadataModelExportAsScriptResponse, __MetadataBearer {}

/**
 * <p>Queues an export of metadata models (database objects such as tables, views, and
 *          procedures) as a data definition language (DDL) script. The script is stored as a ZIP
 *          archive in the Amazon S3 bucket associated with the migration project. If other requests
 *          created by <code>Start*</code> operations are already in the migration project's queue,
 *          the export begins after they complete.</p>
 *          <p>When exporting from the target metadata tree, the export applies only to metadata
 *          models created by conversion. Metadata models imported from the database are
 *          skipped.</p>
 *          <p>To check the status of the export request, call
 *          <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeMetadataModelExportsAsScript.html">DescribeMetadataModelExportsAsScript</a> using the returned
 *          <code>RequestIdentifier</code> as a filter.</p>
 *          <p>
 *             <b>Required permissions:</b>
 *             <code>dms:StartMetadataModelExportAsScripts</code>. For more information, see
 *          <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdatabasemigrationservice.html">Actions, resources, and condition keys for Database Migration Service</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, StartMetadataModelExportAsScriptCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, StartMetadataModelExportAsScriptCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * // import type { DatabaseMigrationServiceClientConfig } from "@aws-sdk/client-database-migration-service";
 * const config = {}; // type is DatabaseMigrationServiceClientConfig
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // StartMetadataModelExportAsScriptMessage
 *   MigrationProjectIdentifier: "STRING_VALUE", // required
 *   SelectionRules: "STRING_VALUE", // required
 *   Origin: "SOURCE" || "TARGET", // required
 *   FileName: "STRING_VALUE",
 * };
 * const command = new StartMetadataModelExportAsScriptCommand(input);
 * const response = await client.send(command);
 * // { // StartMetadataModelExportAsScriptResponse
 * //   RequestIdentifier: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartMetadataModelExportAsScriptCommandInput - {@link StartMetadataModelExportAsScriptCommandInput}
 * @returns {@link StartMetadataModelExportAsScriptCommandOutput}
 * @see {@link StartMetadataModelExportAsScriptCommandInput} for command's `input` shape.
 * @see {@link StartMetadataModelExportAsScriptCommandOutput} for command's `response` shape.
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
 * @example Export converted metadata models as DDL scripts
 * ```javascript
 * // The following example queues an export of converted metadata models for all objects in the ExampleSchema schema as data definition language (DDL) scripts to the S3 bucket associated with the migration project.
 * const input = {
 *   FileName: "ExampleScript",
 *   MigrationProjectIdentifier: "arn:aws:dms:us-east-1:111122223333:migration-project:EXAMPLEABCDEFGHIJKLMNOPQRS",
 *   Origin: "TARGET",
 *   SelectionRules: `{"rules": [{"rule-type": "selection","rule-id": "1","rule-name": "1","object-locator": {"server-name": "example-target-server.us-east-1.rds.amazonaws.com", "schema-name": "ExampleSchema"},"rule-action": "explicit"}]}`
 * };
 * const command = new StartMetadataModelExportAsScriptCommand(input);
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
export class StartMetadataModelExportAsScriptCommand extends command<StartMetadataModelExportAsScriptCommandInput, StartMetadataModelExportAsScriptCommandOutput>(
  _ep0,
  _mw0,
  "StartMetadataModelExportAsScript",
  StartMetadataModelExportAsScript$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartMetadataModelExportAsScriptMessage;
      output: StartMetadataModelExportAsScriptResponse;
    };
    sdk: {
      input: StartMetadataModelExportAsScriptCommandInput;
      output: StartMetadataModelExportAsScriptCommandOutput;
    };
  };
}
