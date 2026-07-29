// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ExportMetadataModelAssessmentMessage, ExportMetadataModelAssessmentResponse } from "../models/models_0";
import { ExportMetadataModelAssessment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface ExportMetadataModelAssessmentCommandOutput extends ExportMetadataModelAssessmentResponse, __MetadataBearer {}

/**
 * <p>Saves a copy of a database migration assessment report to your Amazon S3 bucket. DMS can
 *          save your assessment report as a comma-separated value (CSV) or a PDF file. </p>
 *          <p>
 *             <b>Required permissions:</b>
 *             <code>dms:ExportMetadataModelAssessment</code>. For more information, see
 *          <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdatabasemigrationservice.html">Actions, resources, and condition keys for Database Migration Service</a>.</p>
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
 * @example Export a conversion assessment report
 * ```javascript
 * // The following example exports a conversion assessment report for all objects in the ExampleSchema schema.
 * const input = {
 *   AssessmentReportTypes: [
 *     "pdf",
 *     "csv"
 *   ],
 *   FileName: "example-assessment-report",
 *   MigrationProjectIdentifier: "arn:aws:dms:us-east-1:111122223333:migration-project:EXAMPLEABCDEFGHIJKLMNOPQRS",
 *   SelectionRules: `{"rules": [{"rule-type": "selection", "rule-id": "1", "rule-name": "1", "object-locator": {"server-name": "example-source-server.us-east-1.rds.amazonaws.com", "schema-name": "ExampleSchema"}, "rule-action": "explicit"}]}`
 * };
 * const command = new ExportMetadataModelAssessmentCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   CsvReport: {
 *     ObjectURL: "https://amzn-s3-demo-bucket.s3.amazonaws.com/example-migration-project/example-assessment-report.zip",
 *     S3ObjectKey: "example-migration-project/example-assessment-report.zip"
 *   },
 *   PdfReport: {
 *     ObjectURL: "https://amzn-s3-demo-bucket.s3.amazonaws.com/example-migration-project/example-assessment-report.pdf",
 *     S3ObjectKey: "example-migration-project/example-assessment-report.pdf"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ExportMetadataModelAssessmentCommand extends command<ExportMetadataModelAssessmentCommandInput, ExportMetadataModelAssessmentCommandOutput>(
  _ep0,
  _mw0,
  "ExportMetadataModelAssessment",
  ExportMetadataModelAssessment$
) {
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
