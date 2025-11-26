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
import type { StartMetadataModelConversionMessage, StartMetadataModelConversionResponse } from "../models/models_1";
import { StartMetadataModelConversion } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface StartMetadataModelConversionCommandOutput
  extends StartMetadataModelConversionResponse,
    __MetadataBearer {}

/**
 * <p>Converts your source database objects to a format compatible with the target database. </p>
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
 * @example Start Metadata Model Conversion
 * ```javascript
 * // Converts your source database objects to a format compatible with the target database.
 * const input = {
 *   MigrationProjectIdentifier: "arn:aws:dms:us-east-1:012345678901:migration-project:0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ012",
 *   SelectionRules: `{"rules": [{"rule-type": "selection","rule-id": "1","rule-name": "1","object-locator": {"server-name": "aurora-pg.cluster-0a1b2c3d4e5f.us-east-1.rds.amazonaws.com", "schema-name": "schema1", "table-name": "Cities"},"rule-action": "explicit"} ]}`
 * };
 * const command = new StartMetadataModelConversionCommand(input);
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
export class StartMetadataModelConversionCommand extends $Command
  .classBuilder<
    StartMetadataModelConversionCommandInput,
    StartMetadataModelConversionCommandOutput,
    DatabaseMigrationServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DatabaseMigrationServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonDMSv20160101", "StartMetadataModelConversion", {})
  .n("DatabaseMigrationServiceClient", "StartMetadataModelConversionCommand")
  .sc(StartMetadataModelConversion)
  .build() {
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
