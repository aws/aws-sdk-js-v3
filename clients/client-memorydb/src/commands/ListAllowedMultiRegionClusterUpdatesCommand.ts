// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListAllowedMultiRegionClusterUpdatesRequest,
  ListAllowedMultiRegionClusterUpdatesResponse,
} from "../models/models_0";
import { ListAllowedMultiRegionClusterUpdates$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Lists the allowed updates for a multi-Region cluster.
 *
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
 *
 * The specified parameter combination is not valid.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * The specified parameter value is not valid.
 *
 * @throws {@link MultiRegionClusterNotFoundFault} (client fault)
 *
 * The specified multi-Region cluster does not exist.
 *
 * @throws {@link MemoryDBServiceException}
 *
 * Base exception class for all service exceptions from MemoryDB service.
 *
 * @public
 */
export class ListAllowedMultiRegionClusterUpdatesCommand extends command<ListAllowedMultiRegionClusterUpdatesCommandInput, ListAllowedMultiRegionClusterUpdatesCommandOutput>(
  _ep0,
  _mw0,
  "ListAllowedMultiRegionClusterUpdates",
  ListAllowedMultiRegionClusterUpdates$
) {
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
