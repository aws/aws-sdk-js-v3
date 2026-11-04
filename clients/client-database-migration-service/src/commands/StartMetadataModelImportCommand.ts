// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartMetadataModelImportMessage, StartMetadataModelImportResponse } from "../models/models_1";
import { StartMetadataModelImport$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartMetadataModelImportCommand}.
 */
export interface StartMetadataModelImportCommandInput extends StartMetadataModelImportMessage {}
/**
 * @public
 *
 * The output of {@link StartMetadataModelImportCommand}.
 */
export interface StartMetadataModelImportCommandOutput extends StartMetadataModelImportResponse, __MetadataBearer {}

/**
 * Queues an import of metadata models (database objects such as tables, views, and procedures) from your data provider into the metadata tree. If other requests created by `Start*` operations are already in the migration project's queue, the import begins after they complete.
 *
 * To check the status of the import request, call [DescribeMetadataModelImports](https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeMetadataModelImports.html) using the returned `RequestIdentifier` as a filter.
 *
 * **Required permissions:** `dms:StartMetadataModelImport`. For more information, see [Actions, resources, and condition keys for Database Migration Service](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdatabasemigrationservice.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, StartMetadataModelImportCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, StartMetadataModelImportCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * // import type { DatabaseMigrationServiceClientConfig } from "@aws-sdk/client-database-migration-service";
 * const config = {}; // type is DatabaseMigrationServiceClientConfig
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // StartMetadataModelImportMessage
 *   MigrationProjectIdentifier: "STRING_VALUE", // required
 *   SelectionRules: "STRING_VALUE", // required
 *   Origin: "SOURCE" || "TARGET", // required
 *   Refresh: true || false,
 * };
 * const command = new StartMetadataModelImportCommand(input);
 * const response = await client.send(command);
 * // { // StartMetadataModelImportResponse
 * //   RequestIdentifier: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartMetadataModelImportCommandInput - {@link StartMetadataModelImportCommandInput}
 * @returns {@link StartMetadataModelImportCommandOutput}
 * @see {@link StartMetadataModelImportCommandInput} for command's `input` shape.
 * @see {@link StartMetadataModelImportCommandOutput} for command's `response` shape.
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
 * @example Import metadata from the source database
 * ```javascript
 * // The following example queues a metadata import for all objects in the ExampleSchema schema from the source database.
 * const input = {
 *   MigrationProjectIdentifier: "arn:aws:dms:us-east-1:111122223333:migration-project:EXAMPLEABCDEFGHIJKLMNOPQRS",
 *   Origin: "SOURCE",
 *   Refresh: false,
 *   SelectionRules: `{"rules": [{"rule-type": "selection","rule-id": "1","rule-name": "1","object-locator": {"server-name": "example-source-server.us-east-1.rds.amazonaws.com", "schema-name": "ExampleSchema"},"rule-action": "explicit"}]}`
 * };
 * const command = new StartMetadataModelImportCommand(input);
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
export class StartMetadataModelImportCommand extends command<StartMetadataModelImportCommandInput, StartMetadataModelImportCommandOutput>(
  _ep0,
  _mw0,
  "StartMetadataModelImport",
  StartMetadataModelImport$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartMetadataModelImportMessage;
      output: StartMetadataModelImportResponse;
    };
    sdk: {
      input: StartMetadataModelImportCommandInput;
      output: StartMetadataModelImportCommandOutput;
    };
  };
}
