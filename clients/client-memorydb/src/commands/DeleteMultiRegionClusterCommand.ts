// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MemoryDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MemoryDBClient";
import { DeleteMultiRegionClusterRequest, DeleteMultiRegionClusterResponse } from "../models/models_0";
import { DeleteMultiRegionCluster } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Deletes an existing multi-Region cluster.</p>
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
 *  <p>The requested operation cannot be performed on the multi-Region cluster in its current state.</p>
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
export class DeleteMultiRegionClusterCommand extends $Command
  .classBuilder<
    DeleteMultiRegionClusterCommandInput,
    DeleteMultiRegionClusterCommandOutput,
    MemoryDBClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MemoryDBClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonMemoryDB", "DeleteMultiRegionCluster", {})
  .n("MemoryDBClient", "DeleteMultiRegionClusterCommand")
  .sc(DeleteMultiRegionCluster)
  .build() {
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
