// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateMultiRegionClusterRequest, UpdateMultiRegionClusterResponse } from "../models/models_0";
import { UpdateMultiRegionCluster$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateMultiRegionClusterCommand}.
 */
export interface UpdateMultiRegionClusterCommandInput extends UpdateMultiRegionClusterRequest {}
/**
 * @public
 *
 * The output of {@link UpdateMultiRegionClusterCommand}.
 */
export interface UpdateMultiRegionClusterCommandOutput extends UpdateMultiRegionClusterResponse, __MetadataBearer {}

/**
 * Updates the configuration of an existing multi-Region cluster.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MemoryDBClient, UpdateMultiRegionClusterCommand } from "@aws-sdk/client-memorydb"; // ES Modules import
 * // const { MemoryDBClient, UpdateMultiRegionClusterCommand } = require("@aws-sdk/client-memorydb"); // CommonJS import
 * // import type { MemoryDBClientConfig } from "@aws-sdk/client-memorydb";
 * const config = {}; // type is MemoryDBClientConfig
 * const client = new MemoryDBClient(config);
 * const input = { // UpdateMultiRegionClusterRequest
 *   MultiRegionClusterName: "STRING_VALUE", // required
 *   NodeType: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   EngineVersion: "STRING_VALUE",
 *   ShardConfiguration: { // ShardConfigurationRequest
 *     ShardCount: Number("int"),
 *   },
 *   MultiRegionParameterGroupName: "STRING_VALUE",
 *   UpdateStrategy: "coordinated" || "uncoordinated",
 * };
 * const command = new UpdateMultiRegionClusterCommand(input);
 * const response = await client.send(command);
 * // { // UpdateMultiRegionClusterResponse
 * //   MultiRegionCluster: { // MultiRegionCluster
 * //     MultiRegionClusterName: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     Status: "STRING_VALUE",
 * //     NodeType: "STRING_VALUE",
 * //     Engine: "STRING_VALUE",
 * //     EngineVersion: "STRING_VALUE",
 * //     NumberOfShards: Number("int"),
 * //     Clusters: [ // RegionalClusterList
 * //       { // RegionalCluster
 * //         ClusterName: "STRING_VALUE",
 * //         Region: "STRING_VALUE",
 * //         Status: "STRING_VALUE",
 * //         ARN: "STRING_VALUE",
 * //       },
 * //     ],
 * //     MultiRegionParameterGroupName: "STRING_VALUE",
 * //     TLSEnabled: true || false,
 * //     ARN: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateMultiRegionClusterCommandInput - {@link UpdateMultiRegionClusterCommandInput}
 * @returns {@link UpdateMultiRegionClusterCommandOutput}
 * @see {@link UpdateMultiRegionClusterCommandInput} for command's `input` shape.
 * @see {@link UpdateMultiRegionClusterCommandOutput} for command's `response` shape.
 * @see {@link MemoryDBClientResolvedConfig | config} for MemoryDBClient's `config` shape.
 *
 * @throws {@link InvalidMultiRegionClusterStateFault} (client fault)
 *
 * The requested operation cannot be performed on the multi-Region cluster in its current state.
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
 * @throws {@link MultiRegionParameterGroupNotFoundFault} (client fault)
 *
 * The specified multi-Region parameter group does not exist.
 *
 * @throws {@link MemoryDBServiceException}
 *
 * Base exception class for all service exceptions from MemoryDB service.
 *
 * @public
 */
export class UpdateMultiRegionClusterCommand extends command<UpdateMultiRegionClusterCommandInput, UpdateMultiRegionClusterCommandOutput>(
  _ep0,
  _mw0,
  "UpdateMultiRegionCluster",
  UpdateMultiRegionCluster$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateMultiRegionClusterRequest;
      output: UpdateMultiRegionClusterResponse;
    };
    sdk: {
      input: UpdateMultiRegionClusterCommandInput;
      output: UpdateMultiRegionClusterCommandOutput;
    };
  };
}
