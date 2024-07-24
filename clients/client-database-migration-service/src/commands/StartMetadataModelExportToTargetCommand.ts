// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  DatabaseMigrationServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DatabaseMigrationServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StartMetadataModelExportToTargetMessage, StartMetadataModelExportToTargetResponse } from "../models/models_1";
import {
  de_StartMetadataModelExportToTargetCommand,
  se_StartMetadataModelExportToTargetCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartMetadataModelExportToTargetCommand}.
 */
export interface StartMetadataModelExportToTargetCommandInput extends StartMetadataModelExportToTargetMessage {}
/**
 * @public
 *
 * The output of {@link StartMetadataModelExportToTargetCommand}.
 */
export interface StartMetadataModelExportToTargetCommandOutput
  extends StartMetadataModelExportToTargetResponse,
    __MetadataBearer {}

/**
 * <p>Applies converted database objects to your target database. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, StartMetadataModelExportToTargetCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, StartMetadataModelExportToTargetCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // StartMetadataModelExportToTargetMessage
 *   MigrationProjectIdentifier: "STRING_VALUE", // required
 *   SelectionRules: "STRING_VALUE", // required
 *   OverwriteExtensionPack: true || false,
 * };
 * const command = new StartMetadataModelExportToTargetCommand(input);
 * const response = await client.send(command);
 * // { // StartMetadataModelExportToTargetResponse
 * //   RequestIdentifier: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartMetadataModelExportToTargetCommandInput - {@link StartMetadataModelExportToTargetCommandInput}
 * @returns {@link StartMetadataModelExportToTargetCommandOutput}
 * @see {@link StartMetadataModelExportToTargetCommandInput} for command's `input` shape.
 * @see {@link StartMetadataModelExportToTargetCommandOutput} for command's `response` shape.
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
 * @public
 */
export class StartMetadataModelExportToTargetCommand extends $Command
  .classBuilder<
    StartMetadataModelExportToTargetCommandInput,
    StartMetadataModelExportToTargetCommandOutput,
    DatabaseMigrationServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: DatabaseMigrationServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonDMSv20160101", "StartMetadataModelExportToTarget", {})
  .n("DatabaseMigrationServiceClient", "StartMetadataModelExportToTargetCommand")
  .f(void 0, void 0)
  .ser(se_StartMetadataModelExportToTargetCommand)
  .de(de_StartMetadataModelExportToTargetCommand)
  .build() {}
