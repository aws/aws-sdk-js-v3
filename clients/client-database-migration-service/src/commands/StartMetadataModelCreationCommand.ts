// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  DatabaseMigrationServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DatabaseMigrationServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { StartMetadataModelCreationMessage, StartMetadataModelCreationResponse } from "../models/models_1";
import { StartMetadataModelCreation } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Creates source metadata model of the given type with the specified properties for schema conversion operations.</p>
 *          <note>
 *             <p>This action supports only these directions: from SQL Server to Aurora PostgreSQL, or from SQL Server to RDS for PostgreSQL.</p>
 *          </note>
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
 * @public
 */
export class StartMetadataModelCreationCommand extends $Command
  .classBuilder<
    StartMetadataModelCreationCommandInput,
    StartMetadataModelCreationCommandOutput,
    DatabaseMigrationServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DatabaseMigrationServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonDMSv20160101", "StartMetadataModelCreation", {})
  .n("DatabaseMigrationServiceClient", "StartMetadataModelCreationCommand")
  .sc(StartMetadataModelCreation)
  .build() {
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
