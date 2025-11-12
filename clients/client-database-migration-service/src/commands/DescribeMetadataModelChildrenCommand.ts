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
import { DescribeMetadataModelChildrenMessage, DescribeMetadataModelChildrenResponse } from "../models/models_0";
import { DescribeMetadataModelChildren } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeMetadataModelChildrenCommand}.
 */
export interface DescribeMetadataModelChildrenCommandInput extends DescribeMetadataModelChildrenMessage {}
/**
 * @public
 *
 * The output of {@link DescribeMetadataModelChildrenCommand}.
 */
export interface DescribeMetadataModelChildrenCommandOutput
  extends DescribeMetadataModelChildrenResponse,
    __MetadataBearer {}

/**
 * <p>Gets a list of child metadata models for the specified metadata model in the database hierarchy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeMetadataModelChildrenCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeMetadataModelChildrenCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * // import type { DatabaseMigrationServiceClientConfig } from "@aws-sdk/client-database-migration-service";
 * const config = {}; // type is DatabaseMigrationServiceClientConfig
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // DescribeMetadataModelChildrenMessage
 *   SelectionRules: "STRING_VALUE", // required
 *   MigrationProjectIdentifier: "STRING_VALUE", // required
 *   Origin: "SOURCE" || "TARGET", // required
 *   Marker: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 * };
 * const command = new DescribeMetadataModelChildrenCommand(input);
 * const response = await client.send(command);
 * // { // DescribeMetadataModelChildrenResponse
 * //   Marker: "STRING_VALUE",
 * //   MetadataModelChildren: [ // MetadataModelReferenceList
 * //     { // MetadataModelReference
 * //       MetadataModelName: "STRING_VALUE",
 * //       SelectionRules: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeMetadataModelChildrenCommandInput - {@link DescribeMetadataModelChildrenCommandInput}
 * @returns {@link DescribeMetadataModelChildrenCommandOutput}
 * @see {@link DescribeMetadataModelChildrenCommandInput} for command's `input` shape.
 * @see {@link DescribeMetadataModelChildrenCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link AccessDeniedFault} (client fault)
 *  <p>DMS was denied access to the endpoint. Check that the
 *             role is correctly configured.</p>
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 *
 * @public
 */
export class DescribeMetadataModelChildrenCommand extends $Command
  .classBuilder<
    DescribeMetadataModelChildrenCommandInput,
    DescribeMetadataModelChildrenCommandOutput,
    DatabaseMigrationServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DatabaseMigrationServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonDMSv20160101", "DescribeMetadataModelChildren", {})
  .n("DatabaseMigrationServiceClient", "DescribeMetadataModelChildrenCommand")
  .sc(DescribeMetadataModelChildren)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeMetadataModelChildrenMessage;
      output: DescribeMetadataModelChildrenResponse;
    };
    sdk: {
      input: DescribeMetadataModelChildrenCommandInput;
      output: DescribeMetadataModelChildrenCommandOutput;
    };
  };
}
