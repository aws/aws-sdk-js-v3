// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartMetadataModelConversionMessage, StartMetadataModelConversionResponse } from "../models/models_1";
import { StartMetadataModelConversion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartMetadataModelConversionCommand}.
 */
export interface StartMetadataModelConversionCommandInput extends StartMetadataModelConversionMessage {}
/**
 * @public
 *
 * The output of {@link StartMetadataModelConversionCommand}.
 */
export interface StartMetadataModelConversionCommandOutput extends StartMetadataModelConversionResponse, __MetadataBearer {}

/**
 * Queues a conversion of the selected source metadata models (database objects such as tables, views, and procedures) to the target database format. If other requests created by `Start*` operations are already in the migration project's queue, the conversion begins after they complete.
 *
 * The conversion request loads metadata models that are not yet in the metadata tree, but does not reload metadata models that are already present. If your source database has changed since the metadata was loaded, refresh the affected metadata models with [StartMetadataModelImport](https://docs.aws.amazon.com/dms/latest/APIReference/API_StartMetadataModelImport.html) before calling this operation.
 *
 * > **Note:** If converted objects already exist in the target metadata tree, the conversion overwrites them, including any manual edits.
 *
 * To check the status of the conversion request, call [DescribeMetadataModelConversions](https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeMetadataModelConversions.html) using the returned `RequestIdentifier` as a filter.
 *
 * To cancel a queued or in-progress request, call [CancelMetadataModelConversion](https://docs.aws.amazon.com/dms/latest/APIReference/API_CancelMetadataModelConversion.html) with the returned `RequestIdentifier`.
 *
 * After the conversion completes successfully:
 *
 * - To export a post-conversion assessment report, call [ExportMetadataModelAssessment](https://docs.aws.amazon.com/dms/latest/APIReference/API_ExportMetadataModelAssessment.html).
 * - To retrieve converted code, use any of the following options:
 *
 *   - [DescribeMetadataModel](https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeMetadataModel.html) and [DescribeMetadataModelChildren](https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeMetadataModelChildren.html) – navigate the target metadata tree and retrieve converted definitions.
 *   - [StartMetadataModelExportAsScript](https://docs.aws.amazon.com/dms/latest/APIReference/API_StartMetadataModelExportAsScript.html) – export as data definition language (DDL) scripts to your Amazon S3 bucket.
 *   - [StartMetadataModelExportToTarget](https://docs.aws.amazon.com/dms/latest/APIReference/API_StartMetadataModelExportToTarget.html) – apply directly to your target database.
 *
 * **Required permissions:** `dms:StartMetadataModelConversion`. For more information, see [Actions, resources, and condition keys for Database Migration Service](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdatabasemigrationservice.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, StartMetadataModelConversionCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, StartMetadataModelConversionCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * // import type { DatabaseMigrationServiceClientConfig } from "@aws-sdk/client-database-migration-service";
 * const config = {}; // type is DatabaseMigrationServiceClientConfig
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // StartMetadataModelConversionMessage
 *   MigrationProjectIdentifier: "STRING_VALUE", // required
 *   SelectionRules: "STRING_VALUE", // required
 * };
 * const command = new StartMetadataModelConversionCommand(input);
 * const response = await client.send(command);
 * // { // StartMetadataModelConversionResponse
 * //   RequestIdentifier: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartMetadataModelConversionCommandInput - {@link StartMetadataModelConversionCommandInput}
 * @returns {@link StartMetadataModelConversionCommandOutput}
 * @see {@link StartMetadataModelConversionCommandInput} for command's `input` shape.
 * @see {@link StartMetadataModelConversionCommandOutput} for command's `response` shape.
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
 * @throws {@link KMSKeyNotAccessibleFault} (client fault)
 *
 * DMS cannot access the KMS key.
 *
 * @throws {@link ResourceAlreadyExistsFault} (client fault)
 *
 * The resource you are attempting to create already exists.
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *
 * The resource could not be found.
 *
 * @throws {@link ResourceQuotaExceededFault} (client fault)
 *
 * The quota for this resource quota has been exceeded.
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
 * @example Convert all objects in a schema
 * ```javascript
 * // The following example queues a conversion of all objects in the ExampleSchema schema to the target database format.
 * const input = {
 *   MigrationProjectIdentifier: "arn:aws:dms:us-east-1:111122223333:migration-project:EXAMPLEABCDEFGHIJKLMNOPQRS",
 *   SelectionRules: `{"rules": [{"rule-type": "selection","rule-id": "1","rule-name": "1","object-locator": {"server-name": "example-source-server.us-east-1.rds.amazonaws.com", "schema-name": "ExampleSchema"},"rule-action": "explicit"}]}`
 * };
 * const command = new StartMetadataModelConversionCommand(input);
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
export class StartMetadataModelConversionCommand extends command<StartMetadataModelConversionCommandInput, StartMetadataModelConversionCommandOutput>(
  _ep0,
  _mw0,
  "StartMetadataModelConversion",
  StartMetadataModelConversion$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartMetadataModelConversionMessage;
      output: StartMetadataModelConversionResponse;
    };
    sdk: {
      input: StartMetadataModelConversionCommandInput;
      output: StartMetadataModelConversionCommandOutput;
    };
  };
}
