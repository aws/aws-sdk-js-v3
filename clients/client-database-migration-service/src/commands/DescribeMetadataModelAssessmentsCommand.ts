// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DescribeMetadataModelAssessmentsMessage,
  DescribeMetadataModelAssessmentsResponse,
} from "../models/models_0";
import { DescribeMetadataModelAssessments$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeMetadataModelAssessmentsCommand}.
 */
export interface DescribeMetadataModelAssessmentsCommandInput extends DescribeMetadataModelAssessmentsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeMetadataModelAssessmentsCommand}.
 */
export interface DescribeMetadataModelAssessmentsCommandOutput extends DescribeMetadataModelAssessmentsResponse, __MetadataBearer {}

/**
 * <p>Returns a paginated list of metadata model assessment requests for a migration
 *          project, initiated by
 *          <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_StartMetadataModelAssessment.html">StartMetadataModelAssessment</a>.</p>
 *          <p>
 *             <b>Required permissions:</b>
 *             <code>dms:ListMetadataModelAssessments</code>. For more information, see
 *          <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdatabasemigrationservice.html">Actions, resources, and condition keys for Database Migration Service</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeMetadataModelAssessmentsCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeMetadataModelAssessmentsCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * // import type { DatabaseMigrationServiceClientConfig } from "@aws-sdk/client-database-migration-service";
 * const config = {}; // type is DatabaseMigrationServiceClientConfig
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // DescribeMetadataModelAssessmentsMessage
 *   MigrationProjectIdentifier: "STRING_VALUE", // required
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   Marker: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 * };
 * const command = new DescribeMetadataModelAssessmentsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeMetadataModelAssessmentsResponse
 * //   Marker: "STRING_VALUE",
 * //   Requests: [ // SchemaConversionRequestList
 * //     { // SchemaConversionRequest
 * //       Status: "STRING_VALUE",
 * //       RequestIdentifier: "STRING_VALUE",
 * //       MigrationProjectArn: "STRING_VALUE",
 * //       Error: { // ErrorDetails Union: only one key present
 * //         defaultErrorDetails: { // DefaultErrorDetails
 * //           Message: "STRING_VALUE",
 * //         },
 * //       },
 * //       ExportSqlDetails: { // ExportSqlDetails
 * //         S3ObjectKey: "STRING_VALUE",
 * //         ObjectURL: "STRING_VALUE",
 * //       },
 * //       Progress: { // Progress
 * //         ProgressPercent: Number("double"),
 * //         TotalObjects: Number("long"),
 * //         ProgressStep: "STRING_VALUE",
 * //         ProcessedObject: { // ProcessedObject
 * //           Name: "STRING_VALUE",
 * //           Type: "STRING_VALUE",
 * //           EndpointType: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeMetadataModelAssessmentsCommandInput - {@link DescribeMetadataModelAssessmentsCommandInput}
 * @returns {@link DescribeMetadataModelAssessmentsCommandOutput}
 * @see {@link DescribeMetadataModelAssessmentsCommandInput} for command's `input` shape.
 * @see {@link DescribeMetadataModelAssessmentsCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 *
 * @example Retrieve the status of metadata model assessments
 * ```javascript
 * // The following example retrieves the status of metadata model assessment operations identified by their request IDs.
 * const input = {
 *   Filters: [
 *     {
 *       Name: "request-id",
 *       Values: [
 *         "a1b2c3d4-5678-90ab-cdef-EXAMPLE11111",
 *         "a1b2c3d4-5678-90ab-cdef-EXAMPLE22222",
 *         "a1b2c3d4-5678-90ab-cdef-EXAMPLE33333"
 *       ]
 *     }
 *   ],
 *   MigrationProjectIdentifier: "arn:aws:dms:us-east-1:111122223333:migration-project:EXAMPLEABCDEFGHIJKLMNOPQRS"
 * };
 * const command = new DescribeMetadataModelAssessmentsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Requests: [
 *     {
 *       MigrationProjectArn: "arn:aws:dms:us-east-1:111122223333:migration-project:EXAMPLEABCDEFGHIJKLMNOPQRS",
 *       RequestIdentifier: "a1b2c3d4-5678-90ab-cdef-EXAMPLE11111",
 *       Status: "SUCCESS"
 *     },
 *     {
 *       MigrationProjectArn: "arn:aws:dms:us-east-1:111122223333:migration-project:EXAMPLEABCDEFGHIJKLMNOPQRS",
 *       Progress: {
 *         ProcessedObject: {
 *           EndpointType: "SOURCE",
 *           Name: "ExampleTable",
 *           Type: "table"
 *         },
 *         ProgressPercent: 50.0,
 *         ProgressStep: "ANALYZING",
 *         TotalObjects: 100
 *       },
 *       RequestIdentifier: "a1b2c3d4-5678-90ab-cdef-EXAMPLE22222",
 *       Status: "IN_PROGRESS"
 *     },
 *     {
 *       Error: {
 *         defaultErrorDetails: {
 *           Message: "No objects were found according to the specified selection rules. Please review your selection rules and try again."
 *         }
 *       },
 *       MigrationProjectArn: "arn:aws:dms:us-east-1:111122223333:migration-project:EXAMPLEABCDEFGHIJKLMNOPQRS",
 *       RequestIdentifier: "a1b2c3d4-5678-90ab-cdef-EXAMPLE33333",
 *       Status: "FAILED"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeMetadataModelAssessmentsCommand extends command<DescribeMetadataModelAssessmentsCommandInput, DescribeMetadataModelAssessmentsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeMetadataModelAssessments",
  DescribeMetadataModelAssessments$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeMetadataModelAssessmentsMessage;
      output: DescribeMetadataModelAssessmentsResponse;
    };
    sdk: {
      input: DescribeMetadataModelAssessmentsCommandInput;
      output: DescribeMetadataModelAssessmentsCommandOutput;
    };
  };
}
