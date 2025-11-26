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
import type { DescribeEngineVersionsMessage, DescribeEngineVersionsResponse } from "../models/models_0";
import { DescribeEngineVersions } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeEngineVersionsCommand}.
 */
export interface DescribeEngineVersionsCommandInput extends DescribeEngineVersionsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeEngineVersionsCommand}.
 */
export interface DescribeEngineVersionsCommandOutput extends DescribeEngineVersionsResponse, __MetadataBearer {}

/**
 * <p>Returns information about the replication instance versions used in the project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeEngineVersionsCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeEngineVersionsCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * // import type { DatabaseMigrationServiceClientConfig } from "@aws-sdk/client-database-migration-service";
 * const config = {}; // type is DatabaseMigrationServiceClientConfig
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // DescribeEngineVersionsMessage
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeEngineVersionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeEngineVersionsResponse
 * //   EngineVersions: [ // EngineVersionList
 * //     { // EngineVersion
 * //       Version: "STRING_VALUE",
 * //       Lifecycle: "STRING_VALUE",
 * //       ReleaseStatus: "beta" || "prod",
 * //       LaunchDate: new Date("TIMESTAMP"),
 * //       AutoUpgradeDate: new Date("TIMESTAMP"),
 * //       DeprecationDate: new Date("TIMESTAMP"),
 * //       ForceUpgradeDate: new Date("TIMESTAMP"),
 * //       AvailableUpgrades: [ // AvailableUpgradesList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeEngineVersionsCommandInput - {@link DescribeEngineVersionsCommandInput}
 * @returns {@link DescribeEngineVersionsCommandOutput}
 * @see {@link DescribeEngineVersionsCommandInput} for command's `input` shape.
 * @see {@link DescribeEngineVersionsCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 *
 * @public
 */
export class DescribeEngineVersionsCommand extends $Command
  .classBuilder<
    DescribeEngineVersionsCommandInput,
    DescribeEngineVersionsCommandOutput,
    DatabaseMigrationServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DatabaseMigrationServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonDMSv20160101", "DescribeEngineVersions", {})
  .n("DatabaseMigrationServiceClient", "DescribeEngineVersionsCommand")
  .sc(DescribeEngineVersions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeEngineVersionsMessage;
      output: DescribeEngineVersionsResponse;
    };
    sdk: {
      input: DescribeEngineVersionsCommandInput;
      output: DescribeEngineVersionsCommandOutput;
    };
  };
}
