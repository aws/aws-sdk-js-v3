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
import { DescribeEndpointTypesMessage, DescribeEndpointTypesResponse } from "../models/models_0";
import { de_DescribeEndpointTypesCommand, se_DescribeEndpointTypesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeEndpointTypesCommand}.
 */
export interface DescribeEndpointTypesCommandInput extends DescribeEndpointTypesMessage {}
/**
 * @public
 *
 * The output of {@link DescribeEndpointTypesCommand}.
 */
export interface DescribeEndpointTypesCommandOutput extends DescribeEndpointTypesResponse, __MetadataBearer {}

/**
 * <p>Returns information about the type of endpoints available.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeEndpointTypesCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeEndpointTypesCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // DescribeEndpointTypesMessage
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
 * const command = new DescribeEndpointTypesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeEndpointTypesResponse
 * //   Marker: "STRING_VALUE",
 * //   SupportedEndpointTypes: [ // SupportedEndpointTypeList
 * //     { // SupportedEndpointType
 * //       EngineName: "STRING_VALUE",
 * //       SupportsCDC: true || false,
 * //       EndpointType: "source" || "target",
 * //       ReplicationInstanceEngineMinimumVersion: "STRING_VALUE",
 * //       EngineDisplayName: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeEndpointTypesCommandInput - {@link DescribeEndpointTypesCommandInput}
 * @returns {@link DescribeEndpointTypesCommandOutput}
 * @see {@link DescribeEndpointTypesCommandInput} for command's `input` shape.
 * @see {@link DescribeEndpointTypesCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 *
 * @example Describe endpoint types
 * ```javascript
 * // Returns information about the type of endpoints available.
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
 * const command = new DescribeEndpointTypesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Marker: "",
 *   SupportedEndpointTypes:   []
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeEndpointTypesCommand extends $Command
  .classBuilder<
    DescribeEndpointTypesCommandInput,
    DescribeEndpointTypesCommandOutput,
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
  .s("AmazonDMSv20160101", "DescribeEndpointTypes", {})
  .n("DatabaseMigrationServiceClient", "DescribeEndpointTypesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeEndpointTypesCommand)
  .de(de_DescribeEndpointTypesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeEndpointTypesMessage;
      output: DescribeEndpointTypesResponse;
    };
    sdk: {
      input: DescribeEndpointTypesCommandInput;
      output: DescribeEndpointTypesCommandOutput;
    };
  };
}
