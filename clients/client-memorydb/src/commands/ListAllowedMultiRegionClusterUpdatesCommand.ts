// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MemoryDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MemoryDBClient";
import type {
  ListAllowedMultiRegionClusterUpdatesRequest,
  ListAllowedMultiRegionClusterUpdatesResponse,
} from "../models/models_0";
import { ListAllowedMultiRegionClusterUpdates$ } from "../schemas/schemas_0";

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
export interface ListAllowedMultiRegionClusterUpdatesCommandOutput extends ListAllowedMultiRegionClusterUpdatesResponse, __MetadataBearer {}

/**
 * <p>Lists the allowed updates for a multi-Region cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MemoryDBClient, ListAllowedMultiRegionClusterUpdatesCommand } from "@aws-sdk/client-memorydb"; // ES Modules import
 * // const { MemoryDBClient, ListAllowedMultiRegionClusterUpdatesCommand } = require("@aws-sdk/client-memorydb"); // CommonJS import
 * // import type { MemoryDBClientConfig } from "@aws-sdk/client-memorydb";
 * const config = {}; // type is MemoryDBClientConfig
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
 *  <p>The specified parameter combination is not valid.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The specified parameter value is not valid.</p>
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonMemoryDB", "ListAllowedMultiRegionClusterUpdates", {})
  .n("MemoryDBClient", "ListAllowedMultiRegionClusterUpdatesCommand")
  .sc(ListAllowedMultiRegionClusterUpdates$)
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
