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
 * Queues an assessment of the selected source metadata models (database objects such as tables, views, and procedures) to evaluate conversion complexity to the target database format. If other requests created by `Start*` operations are already in the migration project's queue, the assessment begins after they complete.
 *
 * The assessment request loads metadata models that are not yet in the metadata tree, but does not reload metadata models that are already present. If your source database has changed since the metadata was loaded, refresh the affected metadata models with [StartMetadataModelImport](https://docs.aws.amazon.com/dms/latest/APIReference/API_StartMetadataModelImport.html) before calling this operation.
 *
 * To check the status of the assessment request, call [DescribeMetadataModelAssessments](https://docs.aws.amazon.com/dms/latest/APIReference/API_DescribeMetadataModelAssessments.html) using the returned `RequestIdentifier` as a filter.
 *
 * To export the conversion assessment report after the request completes successfully, call [ExportMetadataModelAssessment](https://docs.aws.amazon.com/dms/latest/APIReference/API_ExportMetadataModelAssessment.html).
 *
 * **Required permissions:** `dms:StartMetadataModelAssessment`. For more information, see [Actions, resources, and condition keys for Database Migration Service](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdatabasemigrationservice.html).
 *
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
 *
 * DMS was denied access to the endpoint. Check that the role is correctly configured.
 *
 * @throws {@link InvalidResourceStateFault} (client fault)
 *
 * The resource is in a state that prevents it from being used for database migration.
 *
 * @throws {@link KMSKeyNotAccessibleFault} (client fault)
 *
 * DMS cannot access the KMS key.
 *
 * @throws {@link ResourceAlreadyExistsFault} (client fault)
 *
 * The resource you are attempting to create already exists.
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *
 * The resource could not be found.
 *
 * @throws {@link ResourceQuotaExceededFault} (client fault)
 *
 * The quota for this resource quota has been exceeded.
 *
 * @throws {@link S3AccessDeniedFault} (client fault)
 *
 * Insufficient privileges are preventing access to an Amazon S3 object.
 *
 * @throws {@link S3ResourceNotFoundFault} (client fault)
 *
 * A specified Amazon S3 bucket, bucket folder, or other object can't be found.
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 *
 * Base exception class for all service exceptions from DatabaseMigrationService service.
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
