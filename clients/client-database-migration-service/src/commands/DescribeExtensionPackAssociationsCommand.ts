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
  DescribeExtensionPackAssociationsMessage,
  DescribeExtensionPackAssociationsResponse,
} from "../models/models_0";
import {
  de_DescribeExtensionPackAssociationsCommand,
  se_DescribeExtensionPackAssociationsCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeExtensionPackAssociationsCommand}.
 */
export interface DescribeExtensionPackAssociationsCommandInput extends DescribeExtensionPackAssociationsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeExtensionPackAssociationsCommand}.
 */
export interface DescribeExtensionPackAssociationsCommandOutput
  extends DescribeExtensionPackAssociationsResponse,
    __MetadataBearer {}

/**
 * <p>Returns a paginated list of extension pack associations for the specified migration project.
 *          An extension pack is an add-on module
 *          that emulates functions present in a source database that are required when converting objects
 *          to the target database.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeExtensionPackAssociationsCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeExtensionPackAssociationsCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // DescribeExtensionPackAssociationsMessage
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
 * const command = new DescribeExtensionPackAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeExtensionPackAssociationsResponse
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
 * @param DescribeExtensionPackAssociationsCommandInput - {@link DescribeExtensionPackAssociationsCommandInput}
 * @returns {@link DescribeExtensionPackAssociationsCommandOutput}
 * @see {@link DescribeExtensionPackAssociationsCommandInput} for command's `input` shape.
 * @see {@link DescribeExtensionPackAssociationsCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 * @public
 * @example Describe Extension Pack Associations
 * ```javascript
 * // Returns a paginated list of extension pack associations for the specified migration project.
 * const input = {
 *   "Filters": [
 *     {
 *       "Name": "instance-profile-identifier",
 *       "Values": [
 *         "arn:aws:dms:us-east-1:012345678901:instance-profile:EXAMPLEABCDEFGHIJKLMNOPQRSTUVWXYZ012345"
 *       ]
 *     }
 *   ],
 *   "Marker": "0123456789abcdefghijklmnopqrs",
 *   "MaxRecords": 20,
 *   "MigrationProjectIdentifier": "arn:aws:dms:us-east-1:012345678901:migration-project:0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ012"
 * };
 * const command = new DescribeExtensionPackAssociationsCommand(input);
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
 * // example id: describe-extension-pack-associations-1689718322580
 * ```
 *
 */
export class DescribeExtensionPackAssociationsCommand extends $Command
  .classBuilder<
    DescribeExtensionPackAssociationsCommandInput,
    DescribeExtensionPackAssociationsCommandOutput,
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
  .s("AmazonDMSv20160101", "DescribeExtensionPackAssociations", {})
  .n("DatabaseMigrationServiceClient", "DescribeExtensionPackAssociationsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeExtensionPackAssociationsCommand)
  .de(de_DescribeExtensionPackAssociationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeExtensionPackAssociationsMessage;
      output: DescribeExtensionPackAssociationsResponse;
    };
    sdk: {
      input: DescribeExtensionPackAssociationsCommandInput;
      output: DescribeExtensionPackAssociationsCommandOutput;
    };
  };
}
