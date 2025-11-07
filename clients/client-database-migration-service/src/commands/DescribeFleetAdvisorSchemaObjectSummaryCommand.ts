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
import {
  DescribeFleetAdvisorSchemaObjectSummaryRequest,
  DescribeFleetAdvisorSchemaObjectSummaryResponse,
} from "../models/models_0";
import { DescribeFleetAdvisorSchemaObjectSummary } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeFleetAdvisorSchemaObjectSummaryCommand}.
 */
export interface DescribeFleetAdvisorSchemaObjectSummaryCommandInput
  extends DescribeFleetAdvisorSchemaObjectSummaryRequest {}
/**
 * @public
 *
 * The output of {@link DescribeFleetAdvisorSchemaObjectSummaryCommand}.
 */
export interface DescribeFleetAdvisorSchemaObjectSummaryCommandOutput
  extends DescribeFleetAdvisorSchemaObjectSummaryResponse,
    __MetadataBearer {}

/**
 * <important>
 *             <p>
 * End of support notice: On May 20, 2026, Amazon Web Services will end support for Amazon Web Services DMS Fleet Advisor;. After May 20, 2026, you will no longer be able to access the Amazon Web Services DMS Fleet Advisor; console or Amazon Web Services DMS Fleet Advisor; resources. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/dms_fleet.advisor-end-of-support.html">Amazon Web Services DMS Fleet Advisor end of support</a>.
 * </p>
 *          </important>
 *          <p>Provides descriptions of the schemas discovered by your Fleet Advisor
 *             collectors.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeFleetAdvisorSchemaObjectSummaryCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeFleetAdvisorSchemaObjectSummaryCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * // import type { DatabaseMigrationServiceClientConfig } from "@aws-sdk/client-database-migration-service";
 * const config = {}; // type is DatabaseMigrationServiceClientConfig
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // DescribeFleetAdvisorSchemaObjectSummaryRequest
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
 * const command = new DescribeFleetAdvisorSchemaObjectSummaryCommand(input);
 * const response = await client.send(command);
 * // { // DescribeFleetAdvisorSchemaObjectSummaryResponse
 * //   FleetAdvisorSchemaObjects: [ // FleetAdvisorSchemaObjectList
 * //     { // FleetAdvisorSchemaObjectResponse
 * //       SchemaId: "STRING_VALUE",
 * //       ObjectType: "STRING_VALUE",
 * //       NumberOfObjects: Number("long"),
 * //       CodeLineCount: Number("long"),
 * //       CodeSize: Number("long"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeFleetAdvisorSchemaObjectSummaryCommandInput - {@link DescribeFleetAdvisorSchemaObjectSummaryCommandInput}
 * @returns {@link DescribeFleetAdvisorSchemaObjectSummaryCommandOutput}
 * @see {@link DescribeFleetAdvisorSchemaObjectSummaryCommandInput} for command's `input` shape.
 * @see {@link DescribeFleetAdvisorSchemaObjectSummaryCommandOutput} for command's `response` shape.
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
export class DescribeFleetAdvisorSchemaObjectSummaryCommand extends $Command
  .classBuilder<
    DescribeFleetAdvisorSchemaObjectSummaryCommandInput,
    DescribeFleetAdvisorSchemaObjectSummaryCommandOutput,
    DatabaseMigrationServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DatabaseMigrationServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonDMSv20160101", "DescribeFleetAdvisorSchemaObjectSummary", {})
  .n("DatabaseMigrationServiceClient", "DescribeFleetAdvisorSchemaObjectSummaryCommand")
  .sc(DescribeFleetAdvisorSchemaObjectSummary)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeFleetAdvisorSchemaObjectSummaryRequest;
      output: DescribeFleetAdvisorSchemaObjectSummaryResponse;
    };
    sdk: {
      input: DescribeFleetAdvisorSchemaObjectSummaryCommandInput;
      output: DescribeFleetAdvisorSchemaObjectSummaryCommandOutput;
    };
  };
}
