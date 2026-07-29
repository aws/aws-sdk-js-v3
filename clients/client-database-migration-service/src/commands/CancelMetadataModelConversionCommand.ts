// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CancelMetadataModelConversionMessage, CancelMetadataModelConversionResponse } from "../models/models_0";
import { CancelMetadataModelConversion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CancelMetadataModelConversionCommand}.
 */
export interface CancelMetadataModelConversionCommandInput extends CancelMetadataModelConversionMessage {}
/**
 * @public
 *
 * The output of {@link CancelMetadataModelConversionCommand}.
 */
export interface CancelMetadataModelConversionCommandOutput extends CancelMetadataModelConversionResponse, __MetadataBearer {}

/**
 * <p>Cancels a single metadata model conversion operation that was started with <code>StartMetadataModelConversion</code>.</p>
 *          <p>
 *             <b>Required permissions:</b>
 *             <code>dms:CancelMetadataModelConversion</code>. For more information, see
 *          <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdatabasemigrationservice.html">Actions, resources, and condition keys for Database Migration Service</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, CancelMetadataModelConversionCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, CancelMetadataModelConversionCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * // import type { DatabaseMigrationServiceClientConfig } from "@aws-sdk/client-database-migration-service";
 * const config = {}; // type is DatabaseMigrationServiceClientConfig
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // CancelMetadataModelConversionMessage
 *   MigrationProjectIdentifier: "STRING_VALUE", // required
 *   RequestIdentifier: "STRING_VALUE", // required
 * };
 * const command = new CancelMetadataModelConversionCommand(input);
 * const response = await client.send(command);
 * // { // CancelMetadataModelConversionResponse
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
 * @param CancelMetadataModelConversionCommandInput - {@link CancelMetadataModelConversionCommandInput}
 * @returns {@link CancelMetadataModelConversionCommandOutput}
 * @see {@link CancelMetadataModelConversionCommandInput} for command's `input` shape.
 * @see {@link CancelMetadataModelConversionCommandOutput} for command's `response` shape.
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
 * @example Cancel a metadata model conversion
 * ```javascript
 * // The following example cancels a metadata model conversion operation.
 * const input = {
 *   MigrationProjectIdentifier: "arn:aws:dms:us-east-1:111122223333:migration-project:EXAMPLEABCDEFGHIJKLMNOPQRS",
 *   RequestIdentifier: "a1b2c3d4-5678-90ab-cdef-EXAMPLE11111"
 * };
 * const command = new CancelMetadataModelConversionCommand(input);
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
export class CancelMetadataModelConversionCommand extends command<CancelMetadataModelConversionCommandInput, CancelMetadataModelConversionCommandOutput>(
  _ep0,
  _mw0,
  "CancelMetadataModelConversion",
  CancelMetadataModelConversion$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelMetadataModelConversionMessage;
      output: CancelMetadataModelConversionResponse;
    };
    sdk: {
      input: CancelMetadataModelConversionCommandInput;
      output: CancelMetadataModelConversionCommandOutput;
    };
  };
}
