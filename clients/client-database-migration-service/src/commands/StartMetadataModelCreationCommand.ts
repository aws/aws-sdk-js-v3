// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartMetadataModelCreationMessage, StartMetadataModelCreationResponse } from "../models/models_1";
import { StartMetadataModelCreation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartMetadataModelCreationCommand}.
 */
export interface StartMetadataModelCreationCommandInput extends StartMetadataModelCreationMessage {}
/**
 * @public
 *
 * The output of {@link StartMetadataModelCreationCommand}.
 */
export interface StartMetadataModelCreationCommandOutput extends StartMetadataModelCreationResponse, __MetadataBearer {}

/**
 * Queues the creation of a metadata model in the source metadata tree. If other requests created by `Start*` operations are already in the migration project's queue, the creation begins after they complete.
 *
 * > **Note:** This operation supports only Microsoft SQL Server to Aurora PostgreSQL and Microsoft SQL Server to Amazon RDS for PostgreSQL conversion paths.
 *
 * To check the status of the creation request, call [DescribeMetadataModelCreations](https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeMetadataModelCreations.html) using the returned `RequestIdentifier` as a filter.
 *
 * To cancel a queued or in-progress request, call [CancelMetadataModelCreation](https://docs.aws.amazon.com/dms/latest/APIReference/API_CancelMetadataModelCreation.html) with the returned `RequestIdentifier`.
 *
 * > **Important:** Calling [StartMetadataModelImport](https://docs.aws.amazon.com/dms/latest/APIReference/API_StartMetadataModelImport.html) with `Refresh` deletes metadata models created by this operation.
 *
 * After the creation completes successfully:
 *
 * - To evaluate conversion complexity, call [StartMetadataModelAssessment](https://docs.aws.amazon.com/dms/latest/APIReference/API_StartMetadataModelAssessment.html).
 * - To convert to the target database format, call [StartMetadataModelConversion](https://docs.aws.amazon.com/dms/latest/APIReference/API_StartMetadataModelConversion.html).
 *
 * **Required permissions:** `dms:StartMetadataModelCreation`. For more information, see [Actions, resources, and condition keys for Database Migration Service](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdatabasemigrationservice.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, StartMetadataModelCreationCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, StartMetadataModelCreationCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * // import type { DatabaseMigrationServiceClientConfig } from "@aws-sdk/client-database-migration-service";
 * const config = {}; // type is DatabaseMigrationServiceClientConfig
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // StartMetadataModelCreationMessage
 *   MigrationProjectIdentifier: "STRING_VALUE", // required
 *   SelectionRules: "STRING_VALUE", // required
 *   MetadataModelName: "STRING_VALUE", // required
 *   Properties: { // MetadataModelProperties Union: only one key present
 *     StatementProperties: { // StatementProperties
 *       Definition: "STRING_VALUE", // required
 *     },
 *   },
 * };
 * const command = new StartMetadataModelCreationCommand(input);
 * const response = await client.send(command);
 * // { // StartMetadataModelCreationResponse
 * //   RequestIdentifier: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartMetadataModelCreationCommandInput - {@link StartMetadataModelCreationCommandInput}
 * @returns {@link StartMetadataModelCreationCommandOutput}
 * @see {@link StartMetadataModelCreationCommandInput} for command's `input` shape.
 * @see {@link StartMetadataModelCreationCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link AccessDeniedFault} (client fault)
 *
 * DMS was denied access to the endpoint. Check that the role is correctly configured.
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
 * @throws {@link DatabaseMigrationServiceServiceException}
 *
 * Base exception class for all service exceptions from DatabaseMigrationService service.
 *
 * @example Create a metadata model for a SQL statement
 * ```javascript
 * // The following example queues the creation of a metadata model for a SQL statement. The selection rule specifies the schema where the metadata model is placed, and MetadataModelName provides a unique identifier for use in subsequent operations.
 * const input = {
 *   MetadataModelName: "ExampleStatement",
 *   MigrationProjectIdentifier: "arn:aws:dms:us-east-1:111122223333:migration-project:EXAMPLEABCDEFGHIJKLMNOPQRS",
 *   Properties: {
 *     StatementProperties: {
 *       Definition: "SELECT * FROM ExampleTable;"
 *     }
 *   },
 *   SelectionRules: `{"rules": [{"rule-type": "selection", "rule-id": "1", "rule-name": "1", "object-locator": {"server-name": "example-source-server.us-east-1.rds.amazonaws.com", "database-name": "ExampleDatabase", "schema-name": "ExampleSchema"}, "rule-action": "explicit"}]}`
 * };
 * const command = new StartMetadataModelCreationCommand(input);
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
export class StartMetadataModelCreationCommand extends command<StartMetadataModelCreationCommandInput, StartMetadataModelCreationCommandOutput>(
  _ep0,
  _mw0,
  "StartMetadataModelCreation",
  StartMetadataModelCreation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartMetadataModelCreationMessage;
      output: StartMetadataModelCreationResponse;
    };
    sdk: {
      input: StartMetadataModelCreationCommandInput;
      output: StartMetadataModelCreationCommandOutput;
    };
  };
}
