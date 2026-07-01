// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DescribeConversionConfigurationMessage,
  DescribeConversionConfigurationResponse,
} from "../models/models_0";
import { DescribeConversionConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface DescribeConversionConfigurationCommandOutput extends DescribeConversionConfigurationResponse, __MetadataBearer {}

/**
 * <p>Returns configuration parameters for a schema conversion project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeConversionConfigurationCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeConversionConfigurationCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * // import type { DatabaseMigrationServiceClientConfig } from "@aws-sdk/client-database-migration-service";
 * const config = {}; // type is DatabaseMigrationServiceClientConfig
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
export class DescribeConversionConfigurationCommand extends command<DescribeConversionConfigurationCommandInput, DescribeConversionConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "DescribeConversionConfiguration",
  DescribeConversionConfiguration$
) {
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
