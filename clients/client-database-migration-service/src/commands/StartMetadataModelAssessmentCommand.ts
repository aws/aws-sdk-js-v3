// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartMetadataModelAssessmentMessage, StartMetadataModelAssessmentResponse } from "../models/models_1";
import { StartMetadataModelAssessment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface StartMetadataModelAssessmentCommandOutput extends StartMetadataModelAssessmentResponse, __MetadataBearer {}

/**
 * <p>Queues an assessment of the selected source metadata models (database objects such as
 *          tables, views, and procedures) to evaluate conversion complexity to the target database
 *          format. If other requests created by <code>Start*</code> operations are already in the
 *          migration project's queue, the assessment begins after they complete.</p>
 *          <p>The assessment request loads metadata models that are not yet in the metadata tree, but
 *          does not reload metadata models that are already present. If your source database has
 *          changed since the metadata was loaded, refresh the affected metadata models with
 *          <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_StartMetadataModelImport.html">StartMetadataModelImport</a> before calling this operation.</p>
 *          <p>To check the status of the assessment request, call
 *          <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeMetadataModelAssessments.html">DescribeMetadataModelAssessments</a> using the returned
 *          <code>RequestIdentifier</code> as a filter.</p>
 *          <p>To export the conversion assessment report after the request completes successfully,
 *          call <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_ExportMetadataModelAssessment.html">ExportMetadataModelAssessment</a>.</p>
 *          <p>
 *             <b>Required permissions:</b>
 *             <code>dms:StartMetadataModelAssessment</code>. For more information, see
 *          <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdatabasemigrationservice.html">Actions, resources, and condition keys for Database Migration Service</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, StartMetadataModelAssessmentCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, StartMetadataModelAssessmentCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * // import type { DatabaseMigrationServiceClientConfig } from "@aws-sdk/client-database-migration-service";
 * const config = {}; // type is DatabaseMigrationServiceClientConfig
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
 *
 * @example Assess all objects in a schema
 * ```javascript
 * // The following example queues an assessment of the conversion complexity for all objects in the ExampleSchema schema.
 * const input = {
 *   MigrationProjectIdentifier: "arn:aws:dms:us-east-1:111122223333:migration-project:EXAMPLEABCDEFGHIJKLMNOPQRS",
 *   SelectionRules: `{"rules": [{"rule-type": "selection","rule-id": "1","rule-name": "1","object-locator": {"server-name": "example-source-server.us-east-1.rds.amazonaws.com", "schema-name": "ExampleSchema"},"rule-action": "explicit"}]}`
 * };
 * const command = new StartMetadataModelAssessmentCommand(input);
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
export class StartMetadataModelAssessmentCommand extends command<StartMetadataModelAssessmentCommandInput, StartMetadataModelAssessmentCommandOutput>(
  _ep0,
  _mw0,
  "StartMetadataModelAssessment",
  StartMetadataModelAssessment$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartMetadataModelAssessmentMessage;
      output: StartMetadataModelAssessmentResponse;
    };
    sdk: {
      input: StartMetadataModelAssessmentCommandInput;
      output: StartMetadataModelAssessmentCommandOutput;
    };
  };
}
