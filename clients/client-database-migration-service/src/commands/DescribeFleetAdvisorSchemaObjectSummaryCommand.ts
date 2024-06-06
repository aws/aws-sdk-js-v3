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
import {
  DescribeFleetAdvisorSchemaObjectSummaryRequest,
  DescribeFleetAdvisorSchemaObjectSummaryResponse,
} from "../models/models_0";
import {
  de_DescribeFleetAdvisorSchemaObjectSummaryCommand,
  se_DescribeFleetAdvisorSchemaObjectSummaryCommand,
} from "../protocols/Aws_json1_1";

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
 * <p>Provides descriptions of the schemas discovered by your Fleet Advisor
 *             collectors.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeFleetAdvisorSchemaObjectSummaryCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeFleetAdvisorSchemaObjectSummaryCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
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
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: DatabaseMigrationServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonDMSv20160101", "DescribeFleetAdvisorSchemaObjectSummary", {})
  .n("DatabaseMigrationServiceClient", "DescribeFleetAdvisorSchemaObjectSummaryCommand")
  .f(void 0, void 0)
  .ser(se_DescribeFleetAdvisorSchemaObjectSummaryCommand)
  .de(de_DescribeFleetAdvisorSchemaObjectSummaryCommand)
  .build() {}
