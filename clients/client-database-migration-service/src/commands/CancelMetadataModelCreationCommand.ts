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
import { CancelMetadataModelCreationMessage, CancelMetadataModelCreationResponse } from "../models/models_0";
import { CancelMetadataModelCreation } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface CancelMetadataModelCreationCommandOutput
  extends CancelMetadataModelCreationResponse,
    __MetadataBearer {}

/**
 * <p>Cancels a single metadata model creation operation that was started with <code>StartMetadataModelCreation</code>.</p>
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
 * @public
 */
export class CancelMetadataModelCreationCommand extends $Command
  .classBuilder<
    CancelMetadataModelCreationCommandInput,
    CancelMetadataModelCreationCommandOutput,
    DatabaseMigrationServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DatabaseMigrationServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonDMSv20160101", "CancelMetadataModelCreation", {})
  .n("DatabaseMigrationServiceClient", "CancelMetadataModelCreationCommand")
  .sc(CancelMetadataModelCreation)
  .build() {
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
