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
  DescribeDataMigrationsMessage,
  DescribeDataMigrationsResponse,
  DescribeDataMigrationsResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_DescribeDataMigrationsCommand, se_DescribeDataMigrationsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeDataMigrationsCommand}.
 */
export interface DescribeDataMigrationsCommandInput extends DescribeDataMigrationsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeDataMigrationsCommand}.
 */
export interface DescribeDataMigrationsCommandOutput extends DescribeDataMigrationsResponse, __MetadataBearer {}

/**
 * <p>Returns information about data migrations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeDataMigrationsCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeDataMigrationsCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // DescribeDataMigrationsMessage
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 *   WithoutSettings: true || false,
 *   WithoutStatistics: true || false,
 * };
 * const command = new DescribeDataMigrationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDataMigrationsResponse
 * //   DataMigrations: [ // DataMigrations
 * //     { // DataMigration
 * //       DataMigrationName: "STRING_VALUE",
 * //       DataMigrationArn: "STRING_VALUE",
 * //       DataMigrationCreateTime: new Date("TIMESTAMP"),
 * //       DataMigrationStartTime: new Date("TIMESTAMP"),
 * //       DataMigrationEndTime: new Date("TIMESTAMP"),
 * //       ServiceAccessRoleArn: "STRING_VALUE",
 * //       MigrationProjectArn: "STRING_VALUE",
 * //       DataMigrationType: "full-load" || "cdc" || "full-load-and-cdc",
 * //       DataMigrationSettings: { // DataMigrationSettings
 * //         NumberOfJobs: Number("int"),
 * //         CloudwatchLogsEnabled: true || false,
 * //         SelectionRules: "STRING_VALUE",
 * //       },
 * //       SourceDataSettings: [ // SourceDataSettings
 * //         { // SourceDataSetting
 * //           CDCStartPosition: "STRING_VALUE",
 * //           CDCStartTime: new Date("TIMESTAMP"),
 * //           CDCStopTime: new Date("TIMESTAMP"),
 * //           SlotName: "STRING_VALUE",
 * //         },
 * //       ],
 * //       TargetDataSettings: [ // TargetDataSettings
 * //         { // TargetDataSetting
 * //           TablePreparationMode: "do-nothing" || "truncate" || "drop-tables-on-target",
 * //         },
 * //       ],
 * //       DataMigrationStatistics: { // DataMigrationStatistics
 * //         TablesLoaded: Number("int"),
 * //         ElapsedTimeMillis: Number("long"),
 * //         TablesLoading: Number("int"),
 * //         FullLoadPercentage: Number("int"),
 * //         CDCLatency: Number("int"),
 * //         TablesQueued: Number("int"),
 * //         TablesErrored: Number("int"),
 * //         StartTime: new Date("TIMESTAMP"),
 * //         StopTime: new Date("TIMESTAMP"),
 * //       },
 * //       DataMigrationStatus: "STRING_VALUE",
 * //       PublicIpAddresses: [ // PublicIpAddressList
 * //         "STRING_VALUE",
 * //       ],
 * //       DataMigrationCidrBlocks: [ // DataMigrationCidrBlock
 * //         "STRING_VALUE",
 * //       ],
 * //       LastFailureMessage: "STRING_VALUE",
 * //       StopReason: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeDataMigrationsCommandInput - {@link DescribeDataMigrationsCommandInput}
 * @returns {@link DescribeDataMigrationsCommandOutput}
 * @see {@link DescribeDataMigrationsCommandInput} for command's `input` shape.
 * @see {@link DescribeDataMigrationsCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link FailedDependencyFault} (client fault)
 *  <p>A dependency threw an exception.</p>
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
 */
export class DescribeDataMigrationsCommand extends $Command
  .classBuilder<
    DescribeDataMigrationsCommandInput,
    DescribeDataMigrationsCommandOutput,
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
  .s("AmazonDMSv20160101", "DescribeDataMigrations", {})
  .n("DatabaseMigrationServiceClient", "DescribeDataMigrationsCommand")
  .f(void 0, DescribeDataMigrationsResponseFilterSensitiveLog)
  .ser(se_DescribeDataMigrationsCommand)
  .de(de_DescribeDataMigrationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDataMigrationsMessage;
      output: DescribeDataMigrationsResponse;
    };
    sdk: {
      input: DescribeDataMigrationsCommandInput;
      output: DescribeDataMigrationsCommandOutput;
    };
  };
}
