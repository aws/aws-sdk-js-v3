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
import type {
  DescribeOrderableReplicationInstancesMessage,
  DescribeOrderableReplicationInstancesResponse,
} from "../models/models_0";
import { DescribeOrderableReplicationInstances } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeOrderableReplicationInstancesCommand}.
 */
export interface DescribeOrderableReplicationInstancesCommandInput
  extends DescribeOrderableReplicationInstancesMessage {}
/**
 * @public
 *
 * The output of {@link DescribeOrderableReplicationInstancesCommand}.
 */
export interface DescribeOrderableReplicationInstancesCommandOutput
  extends DescribeOrderableReplicationInstancesResponse,
    __MetadataBearer {}

/**
 * <p>Returns information about the replication instance types that can be created in the
 *          specified region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeOrderableReplicationInstancesCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeOrderableReplicationInstancesCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * // import type { DatabaseMigrationServiceClientConfig } from "@aws-sdk/client-database-migration-service";
 * const config = {}; // type is DatabaseMigrationServiceClientConfig
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // DescribeOrderableReplicationInstancesMessage
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeOrderableReplicationInstancesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeOrderableReplicationInstancesResponse
 * //   OrderableReplicationInstances: [ // OrderableReplicationInstanceList
 * //     { // OrderableReplicationInstance
 * //       EngineVersion: "STRING_VALUE",
 * //       ReplicationInstanceClass: "STRING_VALUE",
 * //       StorageType: "STRING_VALUE",
 * //       MinAllocatedStorage: Number("int"),
 * //       MaxAllocatedStorage: Number("int"),
 * //       DefaultAllocatedStorage: Number("int"),
 * //       IncludedAllocatedStorage: Number("int"),
 * //       AvailabilityZones: [ // AvailabilityZonesList
 * //         "STRING_VALUE",
 * //       ],
 * //       ReleaseStatus: "beta" || "prod",
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeOrderableReplicationInstancesCommandInput - {@link DescribeOrderableReplicationInstancesCommandInput}
 * @returns {@link DescribeOrderableReplicationInstancesCommandOutput}
 * @see {@link DescribeOrderableReplicationInstancesCommandInput} for command's `input` shape.
 * @see {@link DescribeOrderableReplicationInstancesCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 *
 * @example Describe orderable replication instances
 * ```javascript
 * // Returns information about the replication instance types that can be created in the specified region.
 * const input = {
 *   Marker: "",
 *   MaxRecords: 123
 * };
 * const command = new DescribeOrderableReplicationInstancesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Marker: "",
 *   OrderableReplicationInstances:   []
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeOrderableReplicationInstancesCommand extends $Command
  .classBuilder<
    DescribeOrderableReplicationInstancesCommandInput,
    DescribeOrderableReplicationInstancesCommandOutput,
    DatabaseMigrationServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DatabaseMigrationServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonDMSv20160101", "DescribeOrderableReplicationInstances", {})
  .n("DatabaseMigrationServiceClient", "DescribeOrderableReplicationInstancesCommand")
  .sc(DescribeOrderableReplicationInstances)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeOrderableReplicationInstancesMessage;
      output: DescribeOrderableReplicationInstancesResponse;
    };
    sdk: {
      input: DescribeOrderableReplicationInstancesCommandInput;
      output: DescribeOrderableReplicationInstancesCommandOutput;
    };
  };
}
