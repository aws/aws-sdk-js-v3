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
import { StartMetadataModelAssessmentMessage, StartMetadataModelAssessmentResponse } from "../models/models_1";
import {
  de_StartMetadataModelAssessmentCommand,
  se_StartMetadataModelAssessmentCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartMetadataModelAssessmentCommand}.
 */
export interface StartMetadataModelAssessmentCommandInput extends StartMetadataModelAssessmentMessage {}
/**
 * @public
 *
 * The output of {@link StartMetadataModelAssessmentCommand}.
 */
export interface StartMetadataModelAssessmentCommandOutput
  extends StartMetadataModelAssessmentResponse,
    __MetadataBearer {}

/**
 * <p>Creates a database migration assessment report by assessing the migration complexity for
 *          your source database. A database migration assessment report summarizes all of the schema
 *          conversion tasks. It also details the action items for database objects that can't be converted
 *          to the database engine of your target database instance. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, StartMetadataModelAssessmentCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, StartMetadataModelAssessmentCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // StartMetadataModelAssessmentMessage
 *   MigrationProjectIdentifier: "STRING_VALUE", // required
 *   SelectionRules: "STRING_VALUE", // required
 * };
 * const command = new StartMetadataModelAssessmentCommand(input);
 * const response = await client.send(command);
 * // { // StartMetadataModelAssessmentResponse
 * //   RequestIdentifier: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartMetadataModelAssessmentCommandInput - {@link StartMetadataModelAssessmentCommandInput}
 * @returns {@link StartMetadataModelAssessmentCommandOutput}
 * @see {@link StartMetadataModelAssessmentCommandInput} for command's `input` shape.
 * @see {@link StartMetadataModelAssessmentCommandOutput} for command's `response` shape.
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
 * @example Start Metadata Model Assessment
 * ```javascript
 * // Creates a database migration assessment report by assessing the migration complexity for
 * //          your source database.
 * const input = {
 *   "MigrationProjectIdentifier": "arn:aws:dms:us-east-1:012345678901:migration-project:0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ012",
 *   "SelectionRules": "{\"rules\": [{\"rule-type\": \"selection\",\"rule-id\": \"1\",\"rule-name\": \"1\",\"object-locator\": {\"server-name\": \"aurora-pg.cluster-0a1b2c3d4e5f.us-east-1.rds.amazonaws.com\", \"schema-name\": \"schema1\", \"table-name\": \"Cities\"},\"rule-action\": \"explicit\"} ]}"
 * };
 * const command = new StartMetadataModelAssessmentCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "RequestIdentifier": "01234567-89ab-cdef-0123-456789abcdef"
 * }
 * *\/
 * // example id: start-metadata-model-assessment-1689722322596
 * ```
 *
 */
export class StartMetadataModelAssessmentCommand extends $Command
  .classBuilder<
    StartMetadataModelAssessmentCommandInput,
    StartMetadataModelAssessmentCommandOutput,
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
  .s("AmazonDMSv20160101", "StartMetadataModelAssessment", {})
  .n("DatabaseMigrationServiceClient", "StartMetadataModelAssessmentCommand")
  .f(void 0, void 0)
  .ser(se_StartMetadataModelAssessmentCommand)
  .de(de_StartMetadataModelAssessmentCommand)
  .build() {}
