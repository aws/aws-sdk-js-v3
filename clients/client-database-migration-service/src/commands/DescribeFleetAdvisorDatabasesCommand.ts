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
import type { DescribeFleetAdvisorDatabasesRequest, DescribeFleetAdvisorDatabasesResponse } from "../models/models_0";
import { DescribeFleetAdvisorDatabases$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeFleetAdvisorDatabasesCommand}.
 */
export interface DescribeFleetAdvisorDatabasesCommandInput extends DescribeFleetAdvisorDatabasesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeFleetAdvisorDatabasesCommand}.
 */
export interface DescribeFleetAdvisorDatabasesCommandOutput
  extends DescribeFleetAdvisorDatabasesResponse,
    __MetadataBearer {}

/**
 * <important>
 *             <p>
 * End of support notice: On May 20, 2026, Amazon Web Services will end support for Amazon Web Services DMS Fleet Advisor;. After May 20, 2026, you will no longer be able to access the Amazon Web Services DMS Fleet Advisor; console or Amazon Web Services DMS Fleet Advisor; resources. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/dms_fleet.advisor-end-of-support.html">Amazon Web Services DMS Fleet Advisor end of support</a>.
 * </p>
 *          </important>
 *          <p>Returns a list of Fleet Advisor databases in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeFleetAdvisorDatabasesCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeFleetAdvisorDatabasesCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * // import type { DatabaseMigrationServiceClientConfig } from "@aws-sdk/client-database-migration-service";
 * const config = {}; // type is DatabaseMigrationServiceClientConfig
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // DescribeFleetAdvisorDatabasesRequest
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
 * const command = new DescribeFleetAdvisorDatabasesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeFleetAdvisorDatabasesResponse
 * //   Databases: [ // DatabaseList
 * //     { // DatabaseResponse
 * //       DatabaseId: "STRING_VALUE",
 * //       DatabaseName: "STRING_VALUE",
 * //       IpAddress: "STRING_VALUE",
 * //       NumberOfSchemas: Number("long"),
 * //       Server: { // ServerShortInfoResponse
 * //         ServerId: "STRING_VALUE",
 * //         IpAddress: "STRING_VALUE",
 * //         ServerName: "STRING_VALUE",
 * //       },
 * //       SoftwareDetails: { // DatabaseInstanceSoftwareDetailsResponse
 * //         Engine: "STRING_VALUE",
 * //         EngineVersion: "STRING_VALUE",
 * //         EngineEdition: "STRING_VALUE",
 * //         ServicePack: "STRING_VALUE",
 * //         SupportLevel: "STRING_VALUE",
 * //         OsArchitecture: Number("int"),
 * //         Tooltip: "STRING_VALUE",
 * //       },
 * //       Collectors: [ // CollectorsList
 * //         { // CollectorShortInfoResponse
 * //           CollectorReferencedId: "STRING_VALUE",
 * //           CollectorName: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeFleetAdvisorDatabasesCommandInput - {@link DescribeFleetAdvisorDatabasesCommandInput}
 * @returns {@link DescribeFleetAdvisorDatabasesCommandOutput}
 * @see {@link DescribeFleetAdvisorDatabasesCommandInput} for command's `input` shape.
 * @see {@link DescribeFleetAdvisorDatabasesCommandOutput} for command's `response` shape.
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
export class DescribeFleetAdvisorDatabasesCommand extends $Command
  .classBuilder<
    DescribeFleetAdvisorDatabasesCommandInput,
    DescribeFleetAdvisorDatabasesCommandOutput,
    DatabaseMigrationServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DatabaseMigrationServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonDMSv20160101", "DescribeFleetAdvisorDatabases", {})
  .n("DatabaseMigrationServiceClient", "DescribeFleetAdvisorDatabasesCommand")
  .sc(DescribeFleetAdvisorDatabases$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeFleetAdvisorDatabasesRequest;
      output: DescribeFleetAdvisorDatabasesResponse;
    };
    sdk: {
      input: DescribeFleetAdvisorDatabasesCommandInput;
      output: DescribeFleetAdvisorDatabasesCommandOutput;
    };
  };
}
