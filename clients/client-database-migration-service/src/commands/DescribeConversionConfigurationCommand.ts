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
import { DescribeConversionConfigurationMessage, DescribeConversionConfigurationResponse } from "../models/models_0";
import {
  de_DescribeConversionConfigurationCommand,
  se_DescribeConversionConfigurationCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeConversionConfigurationCommand}.
 */
export interface DescribeConversionConfigurationCommandInput extends DescribeConversionConfigurationMessage {}
/**
 * @public
 *
 * The output of {@link DescribeConversionConfigurationCommand}.
 */
export interface DescribeConversionConfigurationCommandOutput
  extends DescribeConversionConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Returns configuration parameters for a schema conversion project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeConversionConfigurationCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeConversionConfigurationCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // DescribeConversionConfigurationMessage
 *   MigrationProjectIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DescribeConversionConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeConversionConfigurationResponse
 * //   MigrationProjectIdentifier: "STRING_VALUE",
 * //   ConversionConfiguration: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeConversionConfigurationCommandInput - {@link DescribeConversionConfigurationCommandInput}
 * @returns {@link DescribeConversionConfigurationCommandOutput}
 * @see {@link DescribeConversionConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeConversionConfigurationCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 *
 * @example Describe Conversion Configuration
 * ```javascript
 * // Returns configuration parameters for a schema conversion project.
 * const input = {
 *   MigrationProjectIdentifier: "arn:aws:dms:us-east-1:012345678901:migration-project:EXAMPLEABCDEFGHIJKLMNOPQRSTUVWXYZ012345"
 * };
 * const command = new DescribeConversionConfigurationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ConversionConfiguration: `{"Common project settings":{"ShowSeverityLevelInSql":"CRITICAL"},"ORACLE_TO_POSTGRESQL" : {"ToTimeZone":false,"LastDayBuiltinFunctionOracle":false,   "NextDayBuiltinFunctionOracle":false,"ConvertProceduresToFunction":false,"NvlBuiltinFunctionOracle":false,"DbmsAssertBuiltinFunctionOracle":false}}`,
 *   MigrationProjectIdentifier: "arn:aws:dms:us-east-1:012345678901:migration-project:0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ012"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeConversionConfigurationCommand extends $Command
  .classBuilder<
    DescribeConversionConfigurationCommandInput,
    DescribeConversionConfigurationCommandOutput,
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
  .s("AmazonDMSv20160101", "DescribeConversionConfiguration", {})
  .n("DatabaseMigrationServiceClient", "DescribeConversionConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_DescribeConversionConfigurationCommand)
  .de(de_DescribeConversionConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeConversionConfigurationMessage;
      output: DescribeConversionConfigurationResponse;
    };
    sdk: {
      input: DescribeConversionConfigurationCommandInput;
      output: DescribeConversionConfigurationCommandOutput;
    };
  };
}
