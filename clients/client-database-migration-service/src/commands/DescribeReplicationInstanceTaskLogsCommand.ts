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
  DescribeReplicationInstanceTaskLogsMessage,
  DescribeReplicationInstanceTaskLogsResponse,
} from "../models/models_0";
import {
  de_DescribeReplicationInstanceTaskLogsCommand,
  se_DescribeReplicationInstanceTaskLogsCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeReplicationInstanceTaskLogsCommand}.
 */
export interface DescribeReplicationInstanceTaskLogsCommandInput extends DescribeReplicationInstanceTaskLogsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeReplicationInstanceTaskLogsCommand}.
 */
export interface DescribeReplicationInstanceTaskLogsCommandOutput
  extends DescribeReplicationInstanceTaskLogsResponse,
    __MetadataBearer {}

/**
 * <p>Returns information about the task logs for the specified task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeReplicationInstanceTaskLogsCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeReplicationInstanceTaskLogsCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // DescribeReplicationInstanceTaskLogsMessage
 *   ReplicationInstanceArn: "STRING_VALUE", // required
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeReplicationInstanceTaskLogsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeReplicationInstanceTaskLogsResponse
 * //   ReplicationInstanceArn: "STRING_VALUE",
 * //   ReplicationInstanceTaskLogs: [ // ReplicationInstanceTaskLogsList
 * //     { // ReplicationInstanceTaskLog
 * //       ReplicationTaskName: "STRING_VALUE",
 * //       ReplicationTaskArn: "STRING_VALUE",
 * //       ReplicationInstanceTaskLogSize: Number("long"),
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeReplicationInstanceTaskLogsCommandInput - {@link DescribeReplicationInstanceTaskLogsCommandInput}
 * @returns {@link DescribeReplicationInstanceTaskLogsCommandOutput}
 * @see {@link DescribeReplicationInstanceTaskLogsCommandInput} for command's `input` shape.
 * @see {@link DescribeReplicationInstanceTaskLogsCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
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
 *
 * @public
 */
export class DescribeReplicationInstanceTaskLogsCommand extends $Command
  .classBuilder<
    DescribeReplicationInstanceTaskLogsCommandInput,
    DescribeReplicationInstanceTaskLogsCommandOutput,
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
  .s("AmazonDMSv20160101", "DescribeReplicationInstanceTaskLogs", {})
  .n("DatabaseMigrationServiceClient", "DescribeReplicationInstanceTaskLogsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeReplicationInstanceTaskLogsCommand)
  .de(de_DescribeReplicationInstanceTaskLogsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeReplicationInstanceTaskLogsMessage;
      output: DescribeReplicationInstanceTaskLogsResponse;
    };
    sdk: {
      input: DescribeReplicationInstanceTaskLogsCommandInput;
      output: DescribeReplicationInstanceTaskLogsCommandOutput;
    };
  };
}
