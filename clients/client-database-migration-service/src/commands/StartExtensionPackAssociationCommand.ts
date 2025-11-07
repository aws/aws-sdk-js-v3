// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  DatabaseMigrationServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DatabaseMigrationServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StartExtensionPackAssociationMessage, StartExtensionPackAssociationResponse } from "../models/models_1";
import { StartExtensionPackAssociation } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface StartExtensionPackAssociationCommandOutput
  extends StartExtensionPackAssociationResponse,
    __MetadataBearer {}

/**
 * <p>Applies the extension pack to your target database. An extension pack is an add-on
 *          module that emulates functions present in a source database that are required when
 *          converting objects to the target database. </p>
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
 * @example Start Extension Pack Association
 * ```javascript
 * // Applies the extension pack to your target database.
 * const input = {
 *   MigrationProjectIdentifier: "arn:aws:dms:us-east-1:012345678901:migration-project:0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ012"
 * };
 * const command = new StartExtensionPackAssociationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   RequestIdentifier: "01234567-89ab-cdef-0123-456789abcdef"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class StartExtensionPackAssociationCommand extends $Command
  .classBuilder<
    StartExtensionPackAssociationCommandInput,
    StartExtensionPackAssociationCommandOutput,
    DatabaseMigrationServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DatabaseMigrationServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonDMSv20160101", "StartExtensionPackAssociation", {})
  .n("DatabaseMigrationServiceClient", "StartExtensionPackAssociationCommand")
  .sc(StartExtensionPackAssociation)
  .build() {
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
