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
import type { DescribeEndpointSettingsMessage, DescribeEndpointSettingsResponse } from "../models/models_0";
import { DescribeEndpointSettings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeEndpointSettingsCommand}.
 */
export interface DescribeEndpointSettingsCommandInput extends DescribeEndpointSettingsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeEndpointSettingsCommand}.
 */
export interface DescribeEndpointSettingsCommandOutput extends DescribeEndpointSettingsResponse, __MetadataBearer {}

/**
 * <p>Returns information about the possible endpoint settings available when you create an
 *          endpoint for a specific database engine.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeEndpointSettingsCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeEndpointSettingsCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * // import type { DatabaseMigrationServiceClientConfig } from "@aws-sdk/client-database-migration-service";
 * const config = {}; // type is DatabaseMigrationServiceClientConfig
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // DescribeEndpointSettingsMessage
 *   EngineName: "STRING_VALUE", // required
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeEndpointSettingsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeEndpointSettingsResponse
 * //   Marker: "STRING_VALUE",
 * //   EndpointSettings: [ // EndpointSettingsList
 * //     { // EndpointSetting
 * //       Name: "STRING_VALUE",
 * //       Type: "string" || "boolean" || "integer" || "enum",
 * //       EnumValues: [ // EndpointSettingEnumValues
 * //         "STRING_VALUE",
 * //       ],
 * //       Sensitive: true || false,
 * //       Units: "STRING_VALUE",
 * //       Applicability: "STRING_VALUE",
 * //       IntValueMin: Number("int"),
 * //       IntValueMax: Number("int"),
 * //       DefaultValue: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeEndpointSettingsCommandInput - {@link DescribeEndpointSettingsCommandInput}
 * @returns {@link DescribeEndpointSettingsCommandOutput}
 * @see {@link DescribeEndpointSettingsCommandInput} for command's `input` shape.
 * @see {@link DescribeEndpointSettingsCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 *
 * @public
 */
export class DescribeEndpointSettingsCommand extends $Command
  .classBuilder<
    DescribeEndpointSettingsCommandInput,
    DescribeEndpointSettingsCommandOutput,
    DatabaseMigrationServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DatabaseMigrationServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonDMSv20160101", "DescribeEndpointSettings", {})
  .n("DatabaseMigrationServiceClient", "DescribeEndpointSettingsCommand")
  .sc(DescribeEndpointSettings$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeEndpointSettingsMessage;
      output: DescribeEndpointSettingsResponse;
    };
    sdk: {
      input: DescribeEndpointSettingsCommandInput;
      output: DescribeEndpointSettingsCommandOutput;
    };
  };
}
