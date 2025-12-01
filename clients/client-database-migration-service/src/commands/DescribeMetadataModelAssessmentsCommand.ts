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
import type {
  DescribeMetadataModelAssessmentsMessage,
  DescribeMetadataModelAssessmentsResponse,
} from "../models/models_0";
import { DescribeMetadataModelAssessments } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface DescribeMetadataModelAssessmentsCommandOutput
  extends DescribeMetadataModelAssessmentsResponse,
    __MetadataBearer {}

/**
 * <p>Returns a paginated list of metadata model assessments for your account in the current
 *          region.</p>
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
 * @example Describe Metadata Model Assessments
 * ```javascript
 * // Returns a paginated list of metadata model assessments for your account in the current region.
 * const input = {
 *   Filters: [
 *     {
 *       Name: "my-migration-project",
 *       Values: [
 *         "arn:aws:dms:us-east-1:012345678901:migration-project:0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ012"
 *       ]
 *     }
 *   ],
 *   Marker: "0123456789abcdefghijklmnopqrs",
 *   MaxRecords: 20,
 *   MigrationProjectIdentifier: ""
 * };
 * const command = new DescribeMetadataModelAssessmentsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Marker: "ASDLKJASDJKHDFHGDNBGDASKJHGFK",
 *   Requests: [
 *     {
 *       MigrationProjectArn: "arn:aws:dms:us-east-1:012345678901:migration-project:0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ012",
 *       RequestIdentifier: "01234567-89ab-cdef-0123-456789abcdef",
 *       Status: "SUCCESS"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeMetadataModelAssessmentsCommand extends $Command
  .classBuilder<
    DescribeMetadataModelAssessmentsCommandInput,
    DescribeMetadataModelAssessmentsCommandOutput,
    DatabaseMigrationServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DatabaseMigrationServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonDMSv20160101", "DescribeMetadataModelAssessments", {})
  .n("DatabaseMigrationServiceClient", "DescribeMetadataModelAssessmentsCommand")
  .sc(DescribeMetadataModelAssessments)
  .build() {
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
