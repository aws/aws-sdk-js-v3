// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartExtensionPackAssociationMessage, StartExtensionPackAssociationResponse } from "../models/models_1";
import { StartExtensionPackAssociation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartExtensionPackAssociationCommand}.
 */
export interface StartExtensionPackAssociationCommandInput extends StartExtensionPackAssociationMessage {}
/**
 * @public
 *
 * The output of {@link StartExtensionPackAssociationCommand}.
 */
export interface StartExtensionPackAssociationCommandOutput extends StartExtensionPackAssociationResponse, __MetadataBearer {}

/**
 * <p>Queues the installation of the extension pack on your target database. If other
 *          requests created by <code>Start*</code> operations are already in the migration project's
 *          queue, the installation begins after they complete.</p>
 *          <p>This operation requires a non-virtual target data provider.</p>
 *          <p>If the extension pack already exists, the operation reinstalls it. To ensure
 *          compatibility, reconvert your database objects if the version has changed since your last
 *          conversion. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/extension-pack.html">Using extension packs in DMS Schema Conversion</a>.</p>
 *          <p>To check the status of the request, call
 *          <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeExtensionPackAssociations.html">DescribeExtensionPackAssociations</a> using the returned
 *          <code>RequestIdentifier</code> as a filter.</p>
 *          <p>
 *             <b>Required permissions:</b>
 *             <code>dms:AssociateExtensionPack</code>. For more information, see
 *          <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdatabasemigrationservice.html">Actions, resources, and condition keys for Database Migration Service</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, StartExtensionPackAssociationCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, StartExtensionPackAssociationCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * // import type { DatabaseMigrationServiceClientConfig } from "@aws-sdk/client-database-migration-service";
 * const config = {}; // type is DatabaseMigrationServiceClientConfig
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // StartExtensionPackAssociationMessage
 *   MigrationProjectIdentifier: "STRING_VALUE", // required
 * };
 * const command = new StartExtensionPackAssociationCommand(input);
 * const response = await client.send(command);
 * // { // StartExtensionPackAssociationResponse
 * //   RequestIdentifier: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartExtensionPackAssociationCommandInput - {@link StartExtensionPackAssociationCommandInput}
 * @returns {@link StartExtensionPackAssociationCommandOutput}
 * @see {@link StartExtensionPackAssociationCommandInput} for command's `input` shape.
 * @see {@link StartExtensionPackAssociationCommandOutput} for command's `response` shape.
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
 * @example Install the extension pack on the target database
 * ```javascript
 * // The following example queues the installation of the extension pack on the target database.
 * const input = {
 *   MigrationProjectIdentifier: "arn:aws:dms:us-east-1:111122223333:migration-project:EXAMPLEABCDEFGHIJKLMNOPQRS"
 * };
 * const command = new StartExtensionPackAssociationCommand(input);
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
export class StartExtensionPackAssociationCommand extends command<StartExtensionPackAssociationCommandInput, StartExtensionPackAssociationCommandOutput>(
  _ep0,
  _mw0,
  "StartExtensionPackAssociation",
  StartExtensionPackAssociation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartExtensionPackAssociationMessage;
      output: StartExtensionPackAssociationResponse;
    };
    sdk: {
      input: StartExtensionPackAssociationCommandInput;
      output: StartExtensionPackAssociationCommandOutput;
    };
  };
}
