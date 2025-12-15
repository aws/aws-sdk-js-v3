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
  DescribeMetadataModelConversionsMessage,
  DescribeMetadataModelConversionsResponse,
} from "../models/models_0";
import { DescribeMetadataModelConversions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeMetadataModelConversionsCommand}.
 */
export interface DescribeMetadataModelConversionsCommandInput extends DescribeMetadataModelConversionsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeMetadataModelConversionsCommand}.
 */
export interface DescribeMetadataModelConversionsCommandOutput
  extends DescribeMetadataModelConversionsResponse,
    __MetadataBearer {}

/**
 * <p>Returns a paginated list of metadata model conversions for a migration project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeMetadataModelConversionsCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeMetadataModelConversionsCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * // import type { DatabaseMigrationServiceClientConfig } from "@aws-sdk/client-database-migration-service";
 * const config = {}; // type is DatabaseMigrationServiceClientConfig
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // DescribeMetadataModelConversionsMessage
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
 * const command = new DescribeMetadataModelConversionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeMetadataModelConversionsResponse
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
 * @param DescribeMetadataModelConversionsCommandInput - {@link DescribeMetadataModelConversionsCommandInput}
 * @returns {@link DescribeMetadataModelConversionsCommandOutput}
 * @see {@link DescribeMetadataModelConversionsCommandInput} for command's `input` shape.
 * @see {@link DescribeMetadataModelConversionsCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 *
 * @example Describe Metadata Model Conversions
 * ```javascript
 * // Returns a paginated list of metadata model conversions for a migration project.
 * const input = {
 *   Filters: [
 *     {
 *       Name: "request-id",
 *       Values: [
 *         "01234567-89ab-cdef-0123-456789abcdef"
 *       ]
 *     }
 *   ],
 *   Marker: "EXAMPLEABCDEFGHIJKLMNOPQRSTUVWXYZ123456",
 *   MaxRecords: 123,
 *   MigrationProjectIdentifier: "arn:aws:dms:us-east-1:012345678901:migration-project:EXAMPLEABCDEFGHIJKLMNOPQRSTUVWXYZ012345"
 * };
 * const command = new DescribeMetadataModelConversionsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Marker: "0123456789abcdefghijklmnopqrs",
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
export class DescribeMetadataModelConversionsCommand extends $Command
  .classBuilder<
    DescribeMetadataModelConversionsCommandInput,
    DescribeMetadataModelConversionsCommandOutput,
    DatabaseMigrationServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DatabaseMigrationServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonDMSv20160101", "DescribeMetadataModelConversions", {})
  .n("DatabaseMigrationServiceClient", "DescribeMetadataModelConversionsCommand")
  .sc(DescribeMetadataModelConversions$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeMetadataModelConversionsMessage;
      output: DescribeMetadataModelConversionsResponse;
    };
    sdk: {
      input: DescribeMetadataModelConversionsCommandInput;
      output: DescribeMetadataModelConversionsCommandOutput;
    };
  };
}
