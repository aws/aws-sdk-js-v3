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
import { DescribeEndpointSettingsMessage, DescribeEndpointSettingsResponse } from "../models/models_0";
import { de_DescribeEndpointSettingsCommand, se_DescribeEndpointSettingsCommand } from "../protocols/Aws_json1_1";

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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonDMSv20160101", "DescribeEndpointSettings", {})
  .n("DatabaseMigrationServiceClient", "DescribeEndpointSettingsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeEndpointSettingsCommand)
  .de(de_DescribeEndpointSettingsCommand)
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
