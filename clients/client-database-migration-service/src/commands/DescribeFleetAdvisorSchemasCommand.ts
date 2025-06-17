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
import { DescribeFleetAdvisorSchemasRequest, DescribeFleetAdvisorSchemasResponse } from "../models/models_0";
import { de_DescribeFleetAdvisorSchemasCommand, se_DescribeFleetAdvisorSchemasCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeFleetAdvisorSchemasCommand}.
 */
export interface DescribeFleetAdvisorSchemasCommandInput extends DescribeFleetAdvisorSchemasRequest {}
/**
 * @public
 *
 * The output of {@link DescribeFleetAdvisorSchemasCommand}.
 */
export interface DescribeFleetAdvisorSchemasCommandOutput
  extends DescribeFleetAdvisorSchemasResponse,
    __MetadataBearer {}

/**
 * <important>
 *             <p>
 * End of support notice: On May 20, 2026, Amazon Web Services will end support for Amazon Web Services DMS Fleet Advisor;. After May 20, 2026, you will no longer be able to access the Amazon Web Services DMS Fleet Advisor; console or Amazon Web Services DMS Fleet Advisor; resources. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/dms_fleet.advisor-end-of-support.html">Amazon Web Services DMS Fleet Advisor end of support</a>.
 * </p>
 *          </important>
 *          <p>Returns a list of schemas detected by Fleet Advisor Collectors in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeFleetAdvisorSchemasCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeFleetAdvisorSchemasCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // DescribeFleetAdvisorSchemasRequest
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxRecords: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeFleetAdvisorSchemasCommand(input);
 * const response = await client.send(command);
 * // { // DescribeFleetAdvisorSchemasResponse
 * //   FleetAdvisorSchemas: [ // FleetAdvisorSchemaList
 * //     { // SchemaResponse
 * //       CodeLineCount: Number("long"),
 * //       CodeSize: Number("long"),
 * //       Complexity: "STRING_VALUE",
 * //       Server: { // ServerShortInfoResponse
 * //         ServerId: "STRING_VALUE",
 * //         IpAddress: "STRING_VALUE",
 * //         ServerName: "STRING_VALUE",
 * //       },
 * //       DatabaseInstance: { // DatabaseShortInfoResponse
 * //         DatabaseId: "STRING_VALUE",
 * //         DatabaseName: "STRING_VALUE",
 * //         DatabaseIpAddress: "STRING_VALUE",
 * //         DatabaseEngine: "STRING_VALUE",
 * //       },
 * //       SchemaId: "STRING_VALUE",
 * //       SchemaName: "STRING_VALUE",
 * //       OriginalSchema: { // SchemaShortInfoResponse
 * //         SchemaId: "STRING_VALUE",
 * //         SchemaName: "STRING_VALUE",
 * //         DatabaseId: "STRING_VALUE",
 * //         DatabaseName: "STRING_VALUE",
 * //         DatabaseIpAddress: "STRING_VALUE",
 * //       },
 * //       Similarity: Number("double"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeFleetAdvisorSchemasCommandInput - {@link DescribeFleetAdvisorSchemasCommandInput}
 * @returns {@link DescribeFleetAdvisorSchemasCommandOutput}
 * @see {@link DescribeFleetAdvisorSchemasCommandInput} for command's `input` shape.
 * @see {@link DescribeFleetAdvisorSchemasCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link InvalidResourceStateFault} (client fault)
 *  <p>The resource is in a state that prevents it from being used for database migration.</p>
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 *
 * @public
 */
export class DescribeFleetAdvisorSchemasCommand extends $Command
  .classBuilder<
    DescribeFleetAdvisorSchemasCommandInput,
    DescribeFleetAdvisorSchemasCommandOutput,
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
  .s("AmazonDMSv20160101", "DescribeFleetAdvisorSchemas", {})
  .n("DatabaseMigrationServiceClient", "DescribeFleetAdvisorSchemasCommand")
  .f(void 0, void 0)
  .ser(se_DescribeFleetAdvisorSchemasCommand)
  .de(de_DescribeFleetAdvisorSchemasCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeFleetAdvisorSchemasRequest;
      output: DescribeFleetAdvisorSchemasResponse;
    };
    sdk: {
      input: DescribeFleetAdvisorSchemasCommandInput;
      output: DescribeFleetAdvisorSchemasCommandOutput;
    };
  };
}
