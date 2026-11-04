// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteMultiRegionClusterRequest, DeleteMultiRegionClusterResponse } from "../models/models_0";
import { DeleteMultiRegionCluster$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteMultiRegionClusterCommand}.
 */
export interface DeleteMultiRegionClusterCommandInput extends DeleteMultiRegionClusterRequest {}
/**
 * @public
 *
 * The output of {@link DeleteMultiRegionClusterCommand}.
 */
export interface DeleteMultiRegionClusterCommandOutput extends DeleteMultiRegionClusterResponse, __MetadataBearer {}

/**
 * Deletes an existing multi-Region cluster.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MemoryDBClient, DeleteMultiRegionClusterCommand } from "@aws-sdk/client-memorydb"; // ES Modules import
 * // const { MemoryDBClient, DeleteMultiRegionClusterCommand } = require("@aws-sdk/client-memorydb"); // CommonJS import
 * // import type { MemoryDBClientConfig } from "@aws-sdk/client-memorydb";
 * const config = {}; // type is MemoryDBClientConfig
 * const client = new MemoryDBClient(config);
 * const input = { // DeleteMultiRegionClusterRequest
 *   MultiRegionClusterName: "STRING_VALUE", // required
 * };
 * const command = new DeleteMultiRegionClusterCommand(input);
 * const response = await client.send(command);
 * // { // DeleteMultiRegionClusterResponse
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
 * @param DeleteMultiRegionClusterCommandInput - {@link DeleteMultiRegionClusterCommandInput}
 * @returns {@link DeleteMultiRegionClusterCommandOutput}
 * @see {@link DeleteMultiRegionClusterCommandInput} for command's `input` shape.
 * @see {@link DeleteMultiRegionClusterCommandOutput} for command's `response` shape.
 * @see {@link MemoryDBClientResolvedConfig | config} for MemoryDBClient's `config` shape.
 *
 * @throws {@link InvalidMultiRegionClusterStateFault} (client fault)
 *
 * The requested operation cannot be performed on the multi-Region cluster in its current state.
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
export class DeleteMultiRegionClusterCommand extends command<DeleteMultiRegionClusterCommandInput, DeleteMultiRegionClusterCommandOutput>(
  _ep0,
  _mw0,
  "DeleteMultiRegionCluster",
  DeleteMultiRegionCluster$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteMultiRegionClusterRequest;
      output: DeleteMultiRegionClusterResponse;
    };
    sdk: {
      input: DeleteMultiRegionClusterCommandInput;
      output: DeleteMultiRegionClusterCommandOutput;
    };
  };
}
