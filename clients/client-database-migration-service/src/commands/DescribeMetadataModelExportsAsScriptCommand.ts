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
import {
  DescribeMetadataModelExportsAsScriptMessage,
  DescribeMetadataModelExportsAsScriptResponse,
} from "../models/models_0";
import {
  de_DescribeMetadataModelExportsAsScriptCommand,
  se_DescribeMetadataModelExportsAsScriptCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface DescribeMetadataModelExportsAsScriptCommandOutput
  extends DescribeMetadataModelExportsAsScriptResponse,
    __MetadataBearer {}

/**
 * <p>Returns a paginated list of metadata model exports.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeMetadataModelExportsAsScriptCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeMetadataModelExportsAsScriptCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
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
 * @public
 * @example Describe Metadata Model Exports As Script
 * ```javascript
 * // Returns a paginated list of metadata model exports.
 * const input = {
 *   "Filters": [
 *     {
 *       "Name": "request-id",
 *       "Values": [
 *         "01234567-89ab-cdef-0123-456789abcdef"
 *       ]
 *     }
 *   ],
 *   "Marker": "0123456789abcdefghijklmnopqrs",
 *   "MaxRecords": 20,
 *   "MigrationProjectIdentifier": "arn:aws:dms:us-east-1:012345678901:migration-project:0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ012"
 * };
 * const command = new DescribeMetadataModelExportsAsScriptCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Marker": "0123456789abcdefghijklmnopqrs",
 *   "Requests": [
 *     {
 *       "MigrationProjectArn": "arn:aws:dms:us-east-1:012345678901:migration-project:0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ012",
 *       "RequestIdentifier": "01234567-89ab-cdef-0123-456789abcdef",
 *       "Status": "SUCCESS"
 *     }
 *   ]
 * }
 * *\/
 * // example id: describe-metadata-model-exports-as-script-1689719253938
 * ```
 *
 */
export class DescribeMetadataModelExportsAsScriptCommand extends $Command
  .classBuilder<
    DescribeMetadataModelExportsAsScriptCommandInput,
    DescribeMetadataModelExportsAsScriptCommandOutput,
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
  .s("AmazonDMSv20160101", "DescribeMetadataModelExportsAsScript", {})
  .n("DatabaseMigrationServiceClient", "DescribeMetadataModelExportsAsScriptCommand")
  .f(void 0, void 0)
  .ser(se_DescribeMetadataModelExportsAsScriptCommand)
  .de(de_DescribeMetadataModelExportsAsScriptCommand)
  .build() {}
