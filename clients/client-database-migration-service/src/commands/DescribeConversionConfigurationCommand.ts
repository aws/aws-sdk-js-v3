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
 *          <p>
 *             <b>Required permissions:</b>
 *             <code>dms:DescribeConversionConfiguration</code>. For more information, see
 *          <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdatabasemigrationservice.html">Actions, resources, and condition keys for Database Migration Service</a>.</p>
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
 * @example Retrieving conversion configuration for a migration project
 * ```javascript
 * // The following example retrieves the conversion configuration for a migration project.
 * const input = {
 *   MigrationProjectIdentifier: "arn:aws:dms:us-east-1:111122223333:migration-project:EXAMPLEABCDEFGHIJKLMNOPQRS"
 * };
 * const command = new DescribeConversionConfigurationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ConversionConfiguration: `{"Common project settings":{"ShowSeverityLevelInSql":"CRITICAL","EnableGenAiConversion":false},"MSSQL_TO_AURORA_POSTGRESQL":{"ConvertProceduresToFunction":true,"UniqueIndexGeneration":true,"CaseSensitivityNames":false},"Conversion version":{"MSSQL_TO_AURORA_POSTGRESQL_target_engine_version":"15"}}`,
 *   MigrationProjectIdentifier: "arn:aws:dms:us-east-1:111122223333:migration-project:EXAMPLEABCDEFGHIJKLMNOPQRS"
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
