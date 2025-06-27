// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MemoryDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MemoryDBClient";
import {
  ListAllowedMultiRegionClusterUpdatesRequest,
  ListAllowedMultiRegionClusterUpdatesResponse,
} from "../models/models_0";
import {
  de_ListAllowedMultiRegionClusterUpdatesCommand,
  se_ListAllowedMultiRegionClusterUpdatesCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAllowedMultiRegionClusterUpdatesCommand}.
 */
export interface ListAllowedMultiRegionClusterUpdatesCommandInput extends ListAllowedMultiRegionClusterUpdatesRequest {}
/**
 * @public
 *
 * The output of {@link ListAllowedMultiRegionClusterUpdatesCommand}.
 */
export interface ListAllowedMultiRegionClusterUpdatesCommandOutput
  extends ListAllowedMultiRegionClusterUpdatesResponse,
    __MetadataBearer {}

/**
 * <p>Lists the allowed updates for a multi-Region cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MemoryDBClient, ListAllowedMultiRegionClusterUpdatesCommand } from "@aws-sdk/client-memorydb"; // ES Modules import
 * // const { MemoryDBClient, ListAllowedMultiRegionClusterUpdatesCommand } = require("@aws-sdk/client-memorydb"); // CommonJS import
 * const client = new MemoryDBClient(config);
 * const input = { // ListAllowedMultiRegionClusterUpdatesRequest
 *   MultiRegionClusterName: "STRING_VALUE", // required
 * };
 * const command = new ListAllowedMultiRegionClusterUpdatesCommand(input);
 * const response = await client.send(command);
 * // { // ListAllowedMultiRegionClusterUpdatesResponse
 * //   ScaleUpNodeTypes: [ // NodeTypeList
 * //     "STRING_VALUE",
 * //   ],
 * //   ScaleDownNodeTypes: [
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListAllowedMultiRegionClusterUpdatesCommandInput - {@link ListAllowedMultiRegionClusterUpdatesCommandInput}
 * @returns {@link ListAllowedMultiRegionClusterUpdatesCommandOutput}
 * @see {@link ListAllowedMultiRegionClusterUpdatesCommandInput} for command's `input` shape.
 * @see {@link ListAllowedMultiRegionClusterUpdatesCommandOutput} for command's `response` shape.
 * @see {@link MemoryDBClientResolvedConfig | config} for MemoryDBClient's `config` shape.
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p></p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p></p>
 *
 * @throws {@link MultiRegionClusterNotFoundFault} (client fault)
 *  <p>The specified multi-Region cluster does not exist.</p>
 *
 * @throws {@link MemoryDBServiceException}
 * <p>Base exception class for all service exceptions from MemoryDB service.</p>
 *
 *
 * @public
 */
export class ListAllowedMultiRegionClusterUpdatesCommand extends $Command
  .classBuilder<
    ListAllowedMultiRegionClusterUpdatesCommandInput,
    ListAllowedMultiRegionClusterUpdatesCommandOutput,
    MemoryDBClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MemoryDBClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonMemoryDB", "ListAllowedMultiRegionClusterUpdates", {})
  .n("MemoryDBClient", "ListAllowedMultiRegionClusterUpdatesCommand")
  .f(void 0, void 0)
  .ser(se_ListAllowedMultiRegionClusterUpdatesCommand)
  .de(de_ListAllowedMultiRegionClusterUpdatesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAllowedMultiRegionClusterUpdatesRequest;
      output: ListAllowedMultiRegionClusterUpdatesResponse;
    };
    sdk: {
      input: ListAllowedMultiRegionClusterUpdatesCommandInput;
      output: ListAllowedMultiRegionClusterUpdatesCommandOutput;
    };
  };
}
