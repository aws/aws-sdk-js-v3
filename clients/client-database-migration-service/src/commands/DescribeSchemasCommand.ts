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
import { DescribeSchemasMessage, DescribeSchemasResponse } from "../models/models_0";
import { de_DescribeSchemasCommand, se_DescribeSchemasCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeSchemasCommand}.
 */
export interface DescribeSchemasCommandInput extends DescribeSchemasMessage {}
/**
 * @public
 *
 * The output of {@link DescribeSchemasCommand}.
 */
export interface DescribeSchemasCommandOutput extends DescribeSchemasResponse, __MetadataBearer {}

/**
 * <p>Returns information about the schema for the specified endpoint.</p>
 *          <p></p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeSchemasCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeSchemasCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // DescribeSchemasMessage
 *   EndpointArn: "STRING_VALUE", // required
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeSchemasCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSchemasResponse
 * //   Marker: "STRING_VALUE",
 * //   Schemas: [ // SchemaList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeSchemasCommandInput - {@link DescribeSchemasCommandInput}
 * @returns {@link DescribeSchemasCommandOutput}
 * @see {@link DescribeSchemasCommandInput} for command's `input` shape.
 * @see {@link DescribeSchemasCommandOutput} for command's `response` shape.
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
 * @example Describe schemas
 * ```javascript
 * // Returns information about the schema for the specified endpoint.
 * const input = {
 *   "EndpointArn": "",
 *   "Marker": "",
 *   "MaxRecords": 123
 * };
 * const command = new DescribeSchemasCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Marker": "",
 *   "Schemas": []
 * }
 * *\/
 * // example id: describe-schemas-1481755933924
 * ```
 *
 */
export class DescribeSchemasCommand extends $Command
  .classBuilder<
    DescribeSchemasCommandInput,
    DescribeSchemasCommandOutput,
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
  .s("AmazonDMSv20160101", "DescribeSchemas", {})
  .n("DatabaseMigrationServiceClient", "DescribeSchemasCommand")
  .f(void 0, void 0)
  .ser(se_DescribeSchemasCommand)
  .de(de_DescribeSchemasCommand)
  .build() {}
