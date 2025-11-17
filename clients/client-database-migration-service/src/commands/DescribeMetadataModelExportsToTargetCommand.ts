// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  DatabaseMigrationServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DatabaseMigrationServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeMetadataModelExportsToTargetMessage,
  DescribeMetadataModelExportsToTargetResponse,
} from "../models/models_0";
import { DescribeMetadataModelExportsToTarget } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeMetadataModelExportsToTargetCommand}.
 */
export interface DescribeMetadataModelExportsToTargetCommandInput extends DescribeMetadataModelExportsToTargetMessage {}
/**
 * @public
 *
 * The output of {@link DescribeMetadataModelExportsToTargetCommand}.
 */
export interface DescribeMetadataModelExportsToTargetCommandOutput
  extends DescribeMetadataModelExportsToTargetResponse,
    __MetadataBearer {}

/**
 * <p>Returns a paginated list of metadata model exports.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeMetadataModelExportsToTargetCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeMetadataModelExportsToTargetCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * // import type { DatabaseMigrationServiceClientConfig } from "@aws-sdk/client-database-migration-service";
 * const config = {}; // type is DatabaseMigrationServiceClientConfig
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // DescribeMetadataModelExportsToTargetMessage
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
 * const command = new DescribeMetadataModelExportsToTargetCommand(input);
 * const response = await client.send(command);
 * // { // DescribeMetadataModelExportsToTargetResponse
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
 * @param DescribeMetadataModelExportsToTargetCommandInput - {@link DescribeMetadataModelExportsToTargetCommandInput}
 * @returns {@link DescribeMetadataModelExportsToTargetCommandOutput}
 * @see {@link DescribeMetadataModelExportsToTargetCommandInput} for command's `input` shape.
 * @see {@link DescribeMetadataModelExportsToTargetCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 *
 * @example Describe Metadata Model Exports To Target
 * ```javascript
 * // Returns a paginated list of metadata model exports.
 * const input = {
 *   Filters: [
 *     {
 *       Name: "request-id",
 *       Values: [
 *         "01234567-89ab-cdef-0123-456789abcdef"
 *       ]
 *     }
 *   ],
 *   Marker: "0123456789abcdefghijklmnopqrs",
 *   MaxRecords: 20,
 *   MigrationProjectIdentifier: "arn:aws:dms:us-east-1:012345678901:migration-project:0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ012"
 * };
 * const command = new DescribeMetadataModelExportsToTargetCommand(input);
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
export class DescribeMetadataModelExportsToTargetCommand extends $Command
  .classBuilder<
    DescribeMetadataModelExportsToTargetCommandInput,
    DescribeMetadataModelExportsToTargetCommandOutput,
    DatabaseMigrationServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DatabaseMigrationServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonDMSv20160101", "DescribeMetadataModelExportsToTarget", {})
  .n("DatabaseMigrationServiceClient", "DescribeMetadataModelExportsToTargetCommand")
  .sc(DescribeMetadataModelExportsToTarget)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeMetadataModelExportsToTargetMessage;
      output: DescribeMetadataModelExportsToTargetResponse;
    };
    sdk: {
      input: DescribeMetadataModelExportsToTargetCommandInput;
      output: DescribeMetadataModelExportsToTargetCommandOutput;
    };
  };
}
