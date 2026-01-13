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
import type { DescribeMetadataModelMessage, DescribeMetadataModelResponse } from "../models/models_0";
import { DescribeMetadataModel$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeMetadataModelCommand}.
 */
export interface DescribeMetadataModelCommandInput extends DescribeMetadataModelMessage {}
/**
 * @public
 *
 * The output of {@link DescribeMetadataModelCommand}.
 */
export interface DescribeMetadataModelCommandOutput extends DescribeMetadataModelResponse, __MetadataBearer {}

/**
 * <p>Gets detailed information about the specified metadata model, including its definition and corresponding converted objects in the target database if applicable.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeMetadataModelCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeMetadataModelCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * // import type { DatabaseMigrationServiceClientConfig } from "@aws-sdk/client-database-migration-service";
 * const config = {}; // type is DatabaseMigrationServiceClientConfig
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // DescribeMetadataModelMessage
 *   SelectionRules: "STRING_VALUE", // required
 *   MigrationProjectIdentifier: "STRING_VALUE", // required
 *   Origin: "SOURCE" || "TARGET", // required
 * };
 * const command = new DescribeMetadataModelCommand(input);
 * const response = await client.send(command);
 * // { // DescribeMetadataModelResponse
 * //   MetadataModelName: "STRING_VALUE",
 * //   MetadataModelType: "STRING_VALUE",
 * //   TargetMetadataModels: [ // MetadataModelReferenceList
 * //     { // MetadataModelReference
 * //       MetadataModelName: "STRING_VALUE",
 * //       SelectionRules: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Definition: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeMetadataModelCommandInput - {@link DescribeMetadataModelCommandInput}
 * @returns {@link DescribeMetadataModelCommandOutput}
 * @see {@link DescribeMetadataModelCommandInput} for command's `input` shape.
 * @see {@link DescribeMetadataModelCommandOutput} for command's `response` shape.
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
export class DescribeMetadataModelCommand extends $Command
  .classBuilder<
    DescribeMetadataModelCommandInput,
    DescribeMetadataModelCommandOutput,
    DatabaseMigrationServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DatabaseMigrationServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonDMSv20160101", "DescribeMetadataModel", {})
  .n("DatabaseMigrationServiceClient", "DescribeMetadataModelCommand")
  .sc(DescribeMetadataModel$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeMetadataModelMessage;
      output: DescribeMetadataModelResponse;
    };
    sdk: {
      input: DescribeMetadataModelCommandInput;
      output: DescribeMetadataModelCommandOutput;
    };
  };
}
