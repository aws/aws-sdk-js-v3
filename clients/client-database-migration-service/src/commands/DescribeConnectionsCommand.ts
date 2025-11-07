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
import { DescribeConnectionsMessage, DescribeConnectionsResponse } from "../models/models_0";
import { DescribeConnections } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeConnectionsCommand}.
 */
export interface DescribeConnectionsCommandInput extends DescribeConnectionsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeConnectionsCommand}.
 */
export interface DescribeConnectionsCommandOutput extends DescribeConnectionsResponse, __MetadataBearer {}

/**
 * <p>Describes the status of the connections that have been made between the replication
 *          instance and an endpoint. Connections are created when you test an endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeConnectionsCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeConnectionsCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * // import type { DatabaseMigrationServiceClientConfig } from "@aws-sdk/client-database-migration-service";
 * const config = {}; // type is DatabaseMigrationServiceClientConfig
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // DescribeConnectionsMessage
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
 * };
 * const command = new DescribeConnectionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeConnectionsResponse
 * //   Marker: "STRING_VALUE",
 * //   Connections: [ // ConnectionList
 * //     { // Connection
 * //       ReplicationInstanceArn: "STRING_VALUE",
 * //       EndpointArn: "STRING_VALUE",
 * //       Status: "STRING_VALUE",
 * //       LastFailureMessage: "STRING_VALUE",
 * //       EndpointIdentifier: "STRING_VALUE",
 * //       ReplicationInstanceIdentifier: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeConnectionsCommandInput - {@link DescribeConnectionsCommandInput}
 * @returns {@link DescribeConnectionsCommandOutput}
 * @see {@link DescribeConnectionsCommandInput} for command's `input` shape.
 * @see {@link DescribeConnectionsCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 *
 * @example Describe connections
 * ```javascript
 * // Describes the status of the connections that have been made between the replication instance and an endpoint. Connections are created when you test an endpoint.
 * const input = {
 *   Filters: [
 *     {
 *       Name: "string",
 *       Values: [
 *         "string",
 *         "string"
 *       ]
 *     }
 *   ],
 *   Marker: "",
 *   MaxRecords: 123
 * };
 * const command = new DescribeConnectionsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Connections: [
 *     {
 *       EndpointArn: "arn:aws:dms:us-east-arn:aws:dms:us-east-1:123456789012:endpoint:ZW5UAN6P4E77EC7YWHK4RZZ3BE",
 *       EndpointIdentifier: "testsrc1",
 *       ReplicationInstanceArn: "arn:aws:dms:us-east-1:123456789012:rep:6UTDJGBOUS3VI3SUWA66XFJCJQ",
 *       ReplicationInstanceIdentifier: "test",
 *       Status: "successful"
 *     }
 *   ],
 *   Marker: ""
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeConnectionsCommand extends $Command
  .classBuilder<
    DescribeConnectionsCommandInput,
    DescribeConnectionsCommandOutput,
    DatabaseMigrationServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DatabaseMigrationServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonDMSv20160101", "DescribeConnections", {})
  .n("DatabaseMigrationServiceClient", "DescribeConnectionsCommand")
  .sc(DescribeConnections)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeConnectionsMessage;
      output: DescribeConnectionsResponse;
    };
    sdk: {
      input: DescribeConnectionsCommandInput;
      output: DescribeConnectionsCommandOutput;
    };
  };
}
