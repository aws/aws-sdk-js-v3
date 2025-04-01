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
import { DescribeFleetAdvisorDatabasesRequest, DescribeFleetAdvisorDatabasesResponse } from "../models/models_0";
import {
  de_DescribeFleetAdvisorDatabasesCommand,
  se_DescribeFleetAdvisorDatabasesCommand,
} from "../protocols/Aws_json1_1";

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
 * <p>Returns a list of Fleet Advisor databases in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeFleetAdvisorDatabasesCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeFleetAdvisorDatabasesCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonDMSv20160101", "DescribeFleetAdvisorDatabases", {})
  .n("DatabaseMigrationServiceClient", "DescribeFleetAdvisorDatabasesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeFleetAdvisorDatabasesCommand)
  .de(de_DescribeFleetAdvisorDatabasesCommand)
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
