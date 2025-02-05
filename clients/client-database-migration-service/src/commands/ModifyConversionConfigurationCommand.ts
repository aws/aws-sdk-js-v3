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
import { ModifyConversionConfigurationMessage, ModifyConversionConfigurationResponse } from "../models/models_1";
import {
  de_ModifyConversionConfigurationCommand,
  se_ModifyConversionConfigurationCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyConversionConfigurationCommand}.
 */
export interface ModifyConversionConfigurationCommandInput extends ModifyConversionConfigurationMessage {}
/**
 * @public
 *
 * The output of {@link ModifyConversionConfigurationCommand}.
 */
export interface ModifyConversionConfigurationCommandOutput
  extends ModifyConversionConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Modifies the specified schema conversion configuration using the provided parameters. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, ModifyConversionConfigurationCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, ModifyConversionConfigurationCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // ModifyConversionConfigurationMessage
 *   MigrationProjectIdentifier: "STRING_VALUE", // required
 *   ConversionConfiguration: "STRING_VALUE", // required
 * };
 * const command = new ModifyConversionConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // ModifyConversionConfigurationResponse
 * //   MigrationProjectIdentifier: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ModifyConversionConfigurationCommandInput - {@link ModifyConversionConfigurationCommandInput}
 * @returns {@link ModifyConversionConfigurationCommandOutput}
 * @see {@link ModifyConversionConfigurationCommandInput} for command's `input` shape.
 * @see {@link ModifyConversionConfigurationCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link InvalidResourceStateFault} (client fault)
 *  <p>The resource is in a state that prevents it from being used for database migration.</p>
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 * @public
 * @example Modify Conversion Configuration
 * ```javascript
 * // Modifies the specified schema conversion configuration using the provided parameters.
 * const input = {
 *   "ConversionConfiguration": "{\"Common project settings\":{\"ShowSeverityLevelInSql\":\"CRITICAL\"},\"ORACLE_TO_POSTGRESQL\" : {\"ToTimeZone\":false,\"LastDayBuiltinFunctionOracle\":false,   \"NextDayBuiltinFunctionOracle\":false,\"ConvertProceduresToFunction\":false,\"NvlBuiltinFunctionOracle\":false,\"DbmsAssertBuiltinFunctionOracle\":false}}",
 *   "MigrationProjectIdentifier": "arn:aws:dms:us-east-1:012345678901:migration-project:0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ012"
 * };
 * const command = new ModifyConversionConfigurationCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "MigrationProjectIdentifier": "arn:aws:dms:us-east-1:012345678901:migration-project:0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ012"
 * }
 * *\/
 * // example id: modify-conversion-configuration-1689720529855
 * ```
 *
 */
export class ModifyConversionConfigurationCommand extends $Command
  .classBuilder<
    ModifyConversionConfigurationCommandInput,
    ModifyConversionConfigurationCommandOutput,
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
  .s("AmazonDMSv20160101", "ModifyConversionConfiguration", {})
  .n("DatabaseMigrationServiceClient", "ModifyConversionConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_ModifyConversionConfigurationCommand)
  .de(de_ModifyConversionConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyConversionConfigurationMessage;
      output: ModifyConversionConfigurationResponse;
    };
    sdk: {
      input: ModifyConversionConfigurationCommandInput;
      output: ModifyConversionConfigurationCommandOutput;
    };
  };
}
