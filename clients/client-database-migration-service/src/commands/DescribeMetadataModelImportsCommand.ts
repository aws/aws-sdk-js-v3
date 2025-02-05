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
import { DescribeMetadataModelImportsMessage, DescribeMetadataModelImportsResponse } from "../models/models_0";
import {
  de_DescribeMetadataModelImportsCommand,
  se_DescribeMetadataModelImportsCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeMetadataModelImportsCommand}.
 */
export interface DescribeMetadataModelImportsCommandInput extends DescribeMetadataModelImportsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeMetadataModelImportsCommand}.
 */
export interface DescribeMetadataModelImportsCommandOutput
  extends DescribeMetadataModelImportsResponse,
    __MetadataBearer {}

/**
 * <p>Returns a paginated list of metadata model imports.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeMetadataModelImportsCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeMetadataModelImportsCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // DescribeMetadataModelImportsMessage
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
 * const command = new DescribeMetadataModelImportsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeMetadataModelImportsResponse
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
 * @param DescribeMetadataModelImportsCommandInput - {@link DescribeMetadataModelImportsCommandInput}
 * @returns {@link DescribeMetadataModelImportsCommandOutput}
 * @see {@link DescribeMetadataModelImportsCommandInput} for command's `input` shape.
 * @see {@link DescribeMetadataModelImportsCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 * @public
 * @example Describe Metadata Model Imports
 * ```javascript
 * // Returns a paginated list of metadata model imports.
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
 * const command = new DescribeMetadataModelImportsCommand(input);
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
 * // example id: describe-metadata-model-imports-1689719771322
 * ```
 *
 */
export class DescribeMetadataModelImportsCommand extends $Command
  .classBuilder<
    DescribeMetadataModelImportsCommandInput,
    DescribeMetadataModelImportsCommandOutput,
    DatabaseMigrationServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DatabaseMigrationServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonDMSv20160101", "DescribeMetadataModelImports", {})
  .n("DatabaseMigrationServiceClient", "DescribeMetadataModelImportsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeMetadataModelImportsCommand)
  .de(de_DescribeMetadataModelImportsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeMetadataModelImportsMessage;
      output: DescribeMetadataModelImportsResponse;
    };
    sdk: {
      input: DescribeMetadataModelImportsCommandInput;
      output: DescribeMetadataModelImportsCommandOutput;
    };
  };
}
