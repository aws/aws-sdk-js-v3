// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MemoryDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MemoryDBClient";
import { DescribeServiceUpdatesRequest, DescribeServiceUpdatesResponse } from "../models/models_0";
import { DescribeServiceUpdates } from "../schemas/schemas_6_Cluster";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeServiceUpdatesCommand}.
 */
export interface DescribeServiceUpdatesCommandInput extends DescribeServiceUpdatesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeServiceUpdatesCommand}.
 */
export interface DescribeServiceUpdatesCommandOutput extends DescribeServiceUpdatesResponse, __MetadataBearer {}

/**
 * <p>Returns details of the service updates.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MemoryDBClient, DescribeServiceUpdatesCommand } from "@aws-sdk/client-memorydb"; // ES Modules import
 * // const { MemoryDBClient, DescribeServiceUpdatesCommand } = require("@aws-sdk/client-memorydb"); // CommonJS import
 * // import type { MemoryDBClientConfig } from "@aws-sdk/client-memorydb";
 * const config = {}; // type is MemoryDBClientConfig
 * const client = new MemoryDBClient(config);
 * const input = { // DescribeServiceUpdatesRequest
 *   ServiceUpdateName: "STRING_VALUE",
 *   ClusterNames: [ // ClusterNameList
 *     "STRING_VALUE",
 *   ],
 *   Status: [ // ServiceUpdateStatusList
 *     "available" || "in-progress" || "complete" || "scheduled",
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeServiceUpdatesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeServiceUpdatesResponse
 * //   NextToken: "STRING_VALUE",
 * //   ServiceUpdates: [ // ServiceUpdateList
 * //     { // ServiceUpdate
 * //       ClusterName: "STRING_VALUE",
 * //       ServiceUpdateName: "STRING_VALUE",
 * //       ReleaseDate: new Date("TIMESTAMP"),
 * //       Description: "STRING_VALUE",
 * //       Status: "available" || "in-progress" || "complete" || "scheduled",
 * //       Type: "security-update",
 * //       Engine: "STRING_VALUE",
 * //       NodesUpdated: "STRING_VALUE",
 * //       AutoUpdateStartDate: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeServiceUpdatesCommandInput - {@link DescribeServiceUpdatesCommandInput}
 * @returns {@link DescribeServiceUpdatesCommandOutput}
 * @see {@link DescribeServiceUpdatesCommandInput} for command's `input` shape.
 * @see {@link DescribeServiceUpdatesCommandOutput} for command's `response` shape.
 * @see {@link MemoryDBClientResolvedConfig | config} for MemoryDBClient's `config` shape.
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p></p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p></p>
 *
 * @throws {@link MemoryDBServiceException}
 * <p>Base exception class for all service exceptions from MemoryDB service.</p>
 *
 *
 * @public
 */
export class DescribeServiceUpdatesCommand extends $Command
  .classBuilder<
    DescribeServiceUpdatesCommandInput,
    DescribeServiceUpdatesCommandOutput,
    MemoryDBClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MemoryDBClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonMemoryDB", "DescribeServiceUpdates", {})
  .n("MemoryDBClient", "DescribeServiceUpdatesCommand")
  .sc(DescribeServiceUpdates)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeServiceUpdatesRequest;
      output: DescribeServiceUpdatesResponse;
    };
    sdk: {
      input: DescribeServiceUpdatesCommandInput;
      output: DescribeServiceUpdatesCommandOutput;
    };
  };
}
