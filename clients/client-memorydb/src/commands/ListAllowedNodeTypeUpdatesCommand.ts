// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MemoryDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MemoryDBClient";
import type { ListAllowedNodeTypeUpdatesRequest, ListAllowedNodeTypeUpdatesResponse } from "../models/models_0";
import { ListAllowedNodeTypeUpdates } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAllowedNodeTypeUpdatesCommand}.
 */
export interface ListAllowedNodeTypeUpdatesCommandInput extends ListAllowedNodeTypeUpdatesRequest {}
/**
 * @public
 *
 * The output of {@link ListAllowedNodeTypeUpdatesCommand}.
 */
export interface ListAllowedNodeTypeUpdatesCommandOutput extends ListAllowedNodeTypeUpdatesResponse, __MetadataBearer {}

/**
 * <p>Lists all available node types that you can scale to from your cluster's current node type.
 *
 *          When you use the UpdateCluster operation to scale your cluster, the value of the NodeType parameter must be one of the node types returned by this operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MemoryDBClient, ListAllowedNodeTypeUpdatesCommand } from "@aws-sdk/client-memorydb"; // ES Modules import
 * // const { MemoryDBClient, ListAllowedNodeTypeUpdatesCommand } = require("@aws-sdk/client-memorydb"); // CommonJS import
 * // import type { MemoryDBClientConfig } from "@aws-sdk/client-memorydb";
 * const config = {}; // type is MemoryDBClientConfig
 * const client = new MemoryDBClient(config);
 * const input = { // ListAllowedNodeTypeUpdatesRequest
 *   ClusterName: "STRING_VALUE", // required
 * };
 * const command = new ListAllowedNodeTypeUpdatesCommand(input);
 * const response = await client.send(command);
 * // { // ListAllowedNodeTypeUpdatesResponse
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
 * @param ListAllowedNodeTypeUpdatesCommandInput - {@link ListAllowedNodeTypeUpdatesCommandInput}
 * @returns {@link ListAllowedNodeTypeUpdatesCommandOutput}
 * @see {@link ListAllowedNodeTypeUpdatesCommandInput} for command's `input` shape.
 * @see {@link ListAllowedNodeTypeUpdatesCommandOutput} for command's `response` shape.
 * @see {@link MemoryDBClientResolvedConfig | config} for MemoryDBClient's `config` shape.
 *
 * @throws {@link ClusterNotFoundFault} (client fault)
 *  <p>The specified cluster does not exist.</p>
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>The specified parameter combination is not valid.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The specified parameter value is not valid.</p>
 *
 * @throws {@link ServiceLinkedRoleNotFoundFault} (client fault)
 *  <p>The required service-linked role was not found.</p>
 *
 * @throws {@link MemoryDBServiceException}
 * <p>Base exception class for all service exceptions from MemoryDB service.</p>
 *
 *
 * @public
 */
export class ListAllowedNodeTypeUpdatesCommand extends $Command
  .classBuilder<
    ListAllowedNodeTypeUpdatesCommandInput,
    ListAllowedNodeTypeUpdatesCommandOutput,
    MemoryDBClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MemoryDBClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonMemoryDB", "ListAllowedNodeTypeUpdates", {})
  .n("MemoryDBClient", "ListAllowedNodeTypeUpdatesCommand")
  .sc(ListAllowedNodeTypeUpdates)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAllowedNodeTypeUpdatesRequest;
      output: ListAllowedNodeTypeUpdatesResponse;
    };
    sdk: {
      input: ListAllowedNodeTypeUpdatesCommandInput;
      output: ListAllowedNodeTypeUpdatesCommandOutput;
    };
  };
}
