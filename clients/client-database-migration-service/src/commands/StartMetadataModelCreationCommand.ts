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
 * <p>Queues the creation of a metadata model in the source metadata tree. If other requests
 *          created by <code>Start*</code> operations are already in the migration project's queue, the
 *          creation begins after they complete.</p>
 *          <note>
 *             <p>This operation supports only Microsoft SQL Server to Aurora PostgreSQL and
 *          Microsoft SQL Server to Amazon RDS for PostgreSQL conversion paths.</p>
 *          </note>
 *          <p>To check the status of the creation request, call
 *          <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeMetadataModelCreations.html">DescribeMetadataModelCreations</a> using the returned
 *          <code>RequestIdentifier</code> as a filter.</p>
 *          <p>To cancel a queued or in-progress request, call
 *          <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_CancelMetadataModelCreation.html">CancelMetadataModelCreation</a> with the returned
 *          <code>RequestIdentifier</code>.</p>
 *          <important>
 *             <p>Calling
 *          <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_StartMetadataModelImport.html">StartMetadataModelImport</a> with <code>Refresh</code> deletes metadata models
 *          created by this operation.</p>
 *          </important>
 *          <p>After the creation completes successfully:</p>
 *          <ul>
 *             <li>
 *                <p>To evaluate conversion complexity, call
 *             <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_StartMetadataModelAssessment.html">StartMetadataModelAssessment</a>.</p>
 *             </li>
 *             <li>
 *                <p>To convert to the target database format, call
 *             <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_StartMetadataModelConversion.html">StartMetadataModelConversion</a>.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Required permissions:</b>
 *             <code>dms:StartMetadataModelCreation</code>. For more information, see
 *          <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdatabasemigrationservice.html">Actions, resources, and condition keys for Database Migration Service</a>.</p>
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
 *  <p>DMS was denied access to the endpoint. Check that the
 *             role is correctly configured.</p>
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
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
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
