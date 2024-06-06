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
import { DescribeRefreshSchemasStatusMessage, DescribeRefreshSchemasStatusResponse } from "../models/models_0";
import {
  de_DescribeRefreshSchemasStatusCommand,
  se_DescribeRefreshSchemasStatusCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeRefreshSchemasStatusCommand}.
 */
export interface DescribeRefreshSchemasStatusCommandInput extends DescribeRefreshSchemasStatusMessage {}
/**
 * @public
 *
 * The output of {@link DescribeRefreshSchemasStatusCommand}.
 */
export interface DescribeRefreshSchemasStatusCommandOutput
  extends DescribeRefreshSchemasStatusResponse,
    __MetadataBearer {}

/**
 * <p>Returns the status of the RefreshSchemas operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeRefreshSchemasStatusCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeRefreshSchemasStatusCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // DescribeRefreshSchemasStatusMessage
 *   EndpointArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeRefreshSchemasStatusCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRefreshSchemasStatusResponse
 * //   RefreshSchemasStatus: { // RefreshSchemasStatus
 * //     EndpointArn: "STRING_VALUE",
 * //     ReplicationInstanceArn: "STRING_VALUE",
 * //     Status: "successful" || "failed" || "refreshing",
 * //     LastRefreshDate: new Date("TIMESTAMP"),
 * //     LastFailureMessage: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeRefreshSchemasStatusCommandInput - {@link DescribeRefreshSchemasStatusCommandInput}
 * @returns {@link DescribeRefreshSchemasStatusCommandOutput}
 * @see {@link DescribeRefreshSchemasStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeRefreshSchemasStatusCommandOutput} for command's `response` shape.
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
 * @public
 * @example Describe refresh schema status
 * ```javascript
 * // Returns the status of the refresh-schemas operation.
 * const input = {
 *   "EndpointArn": ""
 * };
 * const command = new DescribeRefreshSchemasStatusCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "RefreshSchemasStatus": {}
 * }
 * *\/
 * // example id: describe-refresh-schema-status-1481755303497
 * ```
 *
 */
export class DescribeRefreshSchemasStatusCommand extends $Command
  .classBuilder<
    DescribeRefreshSchemasStatusCommandInput,
    DescribeRefreshSchemasStatusCommandOutput,
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
  .s("AmazonDMSv20160101", "DescribeRefreshSchemasStatus", {})
  .n("DatabaseMigrationServiceClient", "DescribeRefreshSchemasStatusCommand")
  .f(void 0, void 0)
  .ser(se_DescribeRefreshSchemasStatusCommand)
  .de(de_DescribeRefreshSchemasStatusCommand)
  .build() {}
