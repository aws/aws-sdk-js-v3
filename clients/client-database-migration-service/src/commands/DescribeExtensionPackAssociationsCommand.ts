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
  DescribeExtensionPackAssociationsMessage,
  DescribeExtensionPackAssociationsResponse,
} from "../models/models_0";
import { DescribeExtensionPackAssociations$ } from "../schemas/schemas_0";

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
 * <p>Returns a paginated list of extension pack associations for the specified migration
 *          project. An extension pack is an add-on module that emulates functions present in a source
 *          database that are required when converting objects to the target database.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeExtensionPackAssociationsCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeExtensionPackAssociationsCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * // import type { DatabaseMigrationServiceClientConfig } from "@aws-sdk/client-database-migration-service";
 * const config = {}; // type is DatabaseMigrationServiceClientConfig
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
 * @param DescribeExtensionPackAssociationsCommandInput - {@link DescribeExtensionPackAssociationsCommandInput}
 * @returns {@link DescribeExtensionPackAssociationsCommandOutput}
 * @see {@link DescribeExtensionPackAssociationsCommandInput} for command's `input` shape.
 * @see {@link DescribeExtensionPackAssociationsCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 *
 * @example Describe Extension Pack Associations
 * ```javascript
 * // Returns a paginated list of extension pack associations for the specified migration project.
 * const input = {
 *   Filters: [
 *     {
 *       Name: "instance-profile-identifier",
 *       Values: [
 *         "arn:aws:dms:us-east-1:012345678901:instance-profile:EXAMPLEABCDEFGHIJKLMNOPQRSTUVWXYZ012345"
 *       ]
 *     }
 *   ],
 *   Marker: "0123456789abcdefghijklmnopqrs",
 *   MaxRecords: 20,
 *   MigrationProjectIdentifier: "arn:aws:dms:us-east-1:012345678901:migration-project:0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ012"
 * };
 * const command = new DescribeExtensionPackAssociationsCommand(input);
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonDMSv20160101", "DescribeExtensionPackAssociations", {})
  .n("DatabaseMigrationServiceClient", "DescribeExtensionPackAssociationsCommand")
  .sc(DescribeExtensionPackAssociations$)
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
