// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DescribeMetadataModelExportsAsScriptMessage,
  DescribeMetadataModelExportsAsScriptResponse,
} from "../models/models_0";
import { DescribeMetadataModelExportsAsScript$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeMetadataModelExportsAsScriptCommand}.
 */
export interface DescribeMetadataModelExportsAsScriptCommandInput extends DescribeMetadataModelExportsAsScriptMessage {}
/**
 * @public
 *
 * The output of {@link DescribeMetadataModelExportsAsScriptCommand}.
 */
export interface DescribeMetadataModelExportsAsScriptCommandOutput extends DescribeMetadataModelExportsAsScriptResponse, __MetadataBearer {}

/**
 * <p>Returns a paginated list of metadata model export requests for a migration
 *          project, initiated by
 *          <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_StartMetadataModelExportAsScript.html">StartMetadataModelExportAsScript</a>.</p>
 *          <p>
 *             <b>Required permissions:</b>
 *             <code>dms:ListMetadataModelExports</code>. For more information, see
 *          <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdatabasemigrationservice.html">Actions, resources, and condition keys for Database Migration Service</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeMetadataModelExportsAsScriptCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeMetadataModelExportsAsScriptCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * // import type { DatabaseMigrationServiceClientConfig } from "@aws-sdk/client-database-migration-service";
 * const config = {}; // type is DatabaseMigrationServiceClientConfig
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // DescribeMetadataModelExportsAsScriptMessage
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
 * const command = new DescribeMetadataModelExportsAsScriptCommand(input);
 * const response = await client.send(command);
 * // { // DescribeMetadataModelExportsAsScriptResponse
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
 * @param DescribeMetadataModelExportsAsScriptCommandInput - {@link DescribeMetadataModelExportsAsScriptCommandInput}
 * @returns {@link DescribeMetadataModelExportsAsScriptCommandOutput}
 * @see {@link DescribeMetadataModelExportsAsScriptCommandInput} for command's `input` shape.
 * @see {@link DescribeMetadataModelExportsAsScriptCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 *
 * @example Retrieve the status of metadata model exports as script
 * ```javascript
 * // The following example retrieves the status of operations that export metadata models as data definition language (DDL) scripts, identified by their request IDs.
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
 * const command = new DescribeMetadataModelExportsAsScriptCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Requests: [
 *     {
 *       ExportSqlDetails: {
 *         ObjectURL: "https://amzn-s3-demo-bucket.s3.us-east-1.amazonaws.com/example-migration-project/ExampleScript.zip",
 *         S3ObjectKey: "s3://amzn-s3-demo-bucket/example-migration-project/ExampleScript.zip"
 *       },
 *       MigrationProjectArn: "arn:aws:dms:us-east-1:111122223333:migration-project:EXAMPLEABCDEFGHIJKLMNOPQRS",
 *       RequestIdentifier: "a1b2c3d4-5678-90ab-cdef-EXAMPLE11111",
 *       Status: "SUCCESS"
 *     },
 *     {
 *       MigrationProjectArn: "arn:aws:dms:us-east-1:111122223333:migration-project:EXAMPLEABCDEFGHIJKLMNOPQRS",
 *       Progress: {
 *         ProcessedObject: {
 *           EndpointType: "TARGET"
 *         },
 *         ProgressPercent: 50.0,
 *         ProgressStep: "IN_PROGRESS",
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
export class DescribeMetadataModelExportsAsScriptCommand extends command<DescribeMetadataModelExportsAsScriptCommandInput, DescribeMetadataModelExportsAsScriptCommandOutput>(
  _ep0,
  _mw0,
  "DescribeMetadataModelExportsAsScript",
  DescribeMetadataModelExportsAsScript$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeMetadataModelExportsAsScriptMessage;
      output: DescribeMetadataModelExportsAsScriptResponse;
    };
    sdk: {
      input: DescribeMetadataModelExportsAsScriptCommandInput;
      output: DescribeMetadataModelExportsAsScriptCommandOutput;
    };
  };
}
