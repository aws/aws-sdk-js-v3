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
import type { ExportMetadataModelAssessmentMessage, ExportMetadataModelAssessmentResponse } from "../models/models_0";
import { ExportMetadataModelAssessment } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ExportMetadataModelAssessmentCommand}.
 */
export interface ExportMetadataModelAssessmentCommandInput extends ExportMetadataModelAssessmentMessage {}
/**
 * @public
 *
 * The output of {@link ExportMetadataModelAssessmentCommand}.
 */
export interface ExportMetadataModelAssessmentCommandOutput
  extends ExportMetadataModelAssessmentResponse,
    __MetadataBearer {}

/**
 * <p>Saves a copy of a database migration assessment report to your Amazon S3 bucket. DMS can
 *          save your assessment report as a comma-separated value (CSV) or a PDF file. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, ExportMetadataModelAssessmentCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, ExportMetadataModelAssessmentCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * // import type { DatabaseMigrationServiceClientConfig } from "@aws-sdk/client-database-migration-service";
 * const config = {}; // type is DatabaseMigrationServiceClientConfig
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // ExportMetadataModelAssessmentMessage
 *   MigrationProjectIdentifier: "STRING_VALUE", // required
 *   SelectionRules: "STRING_VALUE", // required
 *   FileName: "STRING_VALUE",
 *   AssessmentReportTypes: [ // AssessmentReportTypesList
 *     "pdf" || "csv",
 *   ],
 * };
 * const command = new ExportMetadataModelAssessmentCommand(input);
 * const response = await client.send(command);
 * // { // ExportMetadataModelAssessmentResponse
 * //   PdfReport: { // ExportMetadataModelAssessmentResultEntry
 * //     S3ObjectKey: "STRING_VALUE",
 * //     ObjectURL: "STRING_VALUE",
 * //   },
 * //   CsvReport: {
 * //     S3ObjectKey: "STRING_VALUE",
 * //     ObjectURL: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param ExportMetadataModelAssessmentCommandInput - {@link ExportMetadataModelAssessmentCommandInput}
 * @returns {@link ExportMetadataModelAssessmentCommandOutput}
 * @see {@link ExportMetadataModelAssessmentCommandInput} for command's `input` shape.
 * @see {@link ExportMetadataModelAssessmentCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 *
 * @example Export Metadata Model Assessment
 * ```javascript
 * // Saves a copy of a database migration assessment report to your S3 bucket. DMS can save your assessment report as a comma-separated value (CSV) or a PDF file.
 * const input = {
 *   AssessmentReportTypes: [
 *     "pdf"
 *   ],
 *   FileName: "file",
 *   MigrationProjectIdentifier: "arn:aws:dms:us-east-1:012345678901:migration-project:0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ012",
 *   SelectionRules: `{"rules": [{"rule-type": "selection","rule-id": "1","rule-name": "1","object-locator": {"server-name": "aurora-pg.cluster-a1b2c3d4e5f6.us-east-1.rds.amazonaws.com", "schema-name": "schema1", "table-name": "Cities"},"rule-action": "explicit"} ]}`
 * };
 * const command = new ExportMetadataModelAssessmentCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   CsvReport: {
 *     ObjectURL: "url",
 *     S3ObjectKey: "object-name"
 *   },
 *   PdfReport: {
 *     ObjectURL: "url",
 *     S3ObjectKey: "object-name"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ExportMetadataModelAssessmentCommand extends $Command
  .classBuilder<
    ExportMetadataModelAssessmentCommandInput,
    ExportMetadataModelAssessmentCommandOutput,
    DatabaseMigrationServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DatabaseMigrationServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonDMSv20160101", "ExportMetadataModelAssessment", {})
  .n("DatabaseMigrationServiceClient", "ExportMetadataModelAssessmentCommand")
  .sc(ExportMetadataModelAssessment)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ExportMetadataModelAssessmentMessage;
      output: ExportMetadataModelAssessmentResponse;
    };
    sdk: {
      input: ExportMetadataModelAssessmentCommandInput;
      output: ExportMetadataModelAssessmentCommandOutput;
    };
  };
}
