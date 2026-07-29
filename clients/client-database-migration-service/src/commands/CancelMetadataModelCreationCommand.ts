// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CancelMetadataModelCreationMessage, CancelMetadataModelCreationResponse } from "../models/models_0";
import { CancelMetadataModelCreation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CancelMetadataModelCreationCommand}.
 */
export interface CancelMetadataModelCreationCommandInput extends CancelMetadataModelCreationMessage {}
/**
 * @public
 *
 * The output of {@link CancelMetadataModelCreationCommand}.
 */
export interface CancelMetadataModelCreationCommandOutput extends CancelMetadataModelCreationResponse, __MetadataBearer {}

/**
 * <p>Cancels a single metadata model creation operation that was started with <code>StartMetadataModelCreation</code>.</p>
 *          <p>
 *             <b>Required permissions:</b>
 *             <code>dms:CancelMetadataModelCreation</code>. For more information, see
 *          <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdatabasemigrationservice.html">Actions, resources, and condition keys for Database Migration Service</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, CancelMetadataModelCreationCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, CancelMetadataModelCreationCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * // import type { DatabaseMigrationServiceClientConfig } from "@aws-sdk/client-database-migration-service";
 * const config = {}; // type is DatabaseMigrationServiceClientConfig
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // CancelMetadataModelCreationMessage
 *   MigrationProjectIdentifier: "STRING_VALUE", // required
 *   RequestIdentifier: "STRING_VALUE", // required
 * };
 * const command = new CancelMetadataModelCreationCommand(input);
 * const response = await client.send(command);
 * // { // CancelMetadataModelCreationResponse
 * //   Request: { // SchemaConversionRequest
 * //     Status: "STRING_VALUE",
 * //     RequestIdentifier: "STRING_VALUE",
 * //     MigrationProjectArn: "STRING_VALUE",
 * //     Error: { // ErrorDetails Union: only one key present
 * //       defaultErrorDetails: { // DefaultErrorDetails
 * //         Message: "STRING_VALUE",
 * //       },
 * //     },
 * //     ExportSqlDetails: { // ExportSqlDetails
 * //       S3ObjectKey: "STRING_VALUE",
 * //       ObjectURL: "STRING_VALUE",
 * //     },
 * //     Progress: { // Progress
 * //       ProgressPercent: Number("double"),
 * //       TotalObjects: Number("long"),
 * //       ProgressStep: "STRING_VALUE",
 * //       ProcessedObject: { // ProcessedObject
 * //         Name: "STRING_VALUE",
 * //         Type: "STRING_VALUE",
 * //         EndpointType: "STRING_VALUE",
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CancelMetadataModelCreationCommandInput - {@link CancelMetadataModelCreationCommandInput}
 * @returns {@link CancelMetadataModelCreationCommandOutput}
 * @see {@link CancelMetadataModelCreationCommandInput} for command's `input` shape.
 * @see {@link CancelMetadataModelCreationCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link AccessDeniedFault} (client fault)
 *  <p>DMS was denied access to the endpoint. Check that the
 *             role is correctly configured.</p>
 *
 * @throws {@link InvalidResourceStateFault} (client fault)
 *  <p>The resource is in a state that prevents it from being used for database migration.</p>
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 *
 * @example Cancel a metadata model creation
 * ```javascript
 * // The following example cancels a metadata model creation operation.
 * const input = {
 *   MigrationProjectIdentifier: "arn:aws:dms:us-east-1:111122223333:migration-project:EXAMPLEABCDEFGHIJKLMNOPQRS",
 *   RequestIdentifier: "a1b2c3d4-5678-90ab-cdef-EXAMPLE11111"
 * };
 * const command = new CancelMetadataModelCreationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Request: {
 *     MigrationProjectArn: "arn:aws:dms:us-east-1:111122223333:migration-project:EXAMPLEABCDEFGHIJKLMNOPQRS",
 *     RequestIdentifier: "a1b2c3d4-5678-90ab-cdef-EXAMPLE11111",
 *     Status: "CANCELING"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CancelMetadataModelCreationCommand extends command<CancelMetadataModelCreationCommandInput, CancelMetadataModelCreationCommandOutput>(
  _ep0,
  _mw0,
  "CancelMetadataModelCreation",
  CancelMetadataModelCreation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelMetadataModelCreationMessage;
      output: CancelMetadataModelCreationResponse;
    };
    sdk: {
      input: CancelMetadataModelCreationCommandInput;
      output: CancelMetadataModelCreationCommandOutput;
    };
  };
}
