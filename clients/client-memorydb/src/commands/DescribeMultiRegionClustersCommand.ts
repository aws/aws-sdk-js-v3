// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MemoryDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MemoryDBClient";
import { DescribeMultiRegionClustersRequest, DescribeMultiRegionClustersResponse } from "../models/models_0";
import { de_DescribeMultiRegionClustersCommand, se_DescribeMultiRegionClustersCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeMultiRegionClustersCommand}.
 */
export interface DescribeMultiRegionClustersCommandInput extends DescribeMultiRegionClustersRequest {}
/**
 * @public
 *
 * The output of {@link DescribeMultiRegionClustersCommand}.
 */
export interface DescribeMultiRegionClustersCommandOutput
  extends DescribeMultiRegionClustersResponse,
    __MetadataBearer {}

/**
 * <p>Returns details about one or more multi-Region clusters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MemoryDBClient, DescribeMultiRegionClustersCommand } from "@aws-sdk/client-memorydb"; // ES Modules import
 * // const { MemoryDBClient, DescribeMultiRegionClustersCommand } = require("@aws-sdk/client-memorydb"); // CommonJS import
 * const client = new MemoryDBClient(config);
 * const input = { // DescribeMultiRegionClustersRequest
 *   MultiRegionClusterName: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   ShowClusterDetails: true || false,
 * };
 * const command = new DescribeMultiRegionClustersCommand(input);
 * const response = await client.send(command);
 * // { // DescribeMultiRegionClustersResponse
 * //   NextToken: "STRING_VALUE",
 * //   MultiRegionClusters: [ // MultiRegionClusterList
 * //     { // MultiRegionCluster
 * //       MultiRegionClusterName: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Status: "STRING_VALUE",
 * //       NodeType: "STRING_VALUE",
 * //       Engine: "STRING_VALUE",
 * //       EngineVersion: "STRING_VALUE",
 * //       NumberOfShards: Number("int"),
 * //       Clusters: [ // RegionalClusterList
 * //         { // RegionalCluster
 * //           ClusterName: "STRING_VALUE",
 * //           Region: "STRING_VALUE",
 * //           Status: "STRING_VALUE",
 * //           ARN: "STRING_VALUE",
 * //         },
 * //       ],
 * //       MultiRegionParameterGroupName: "STRING_VALUE",
 * //       TLSEnabled: true || false,
 * //       ARN: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeMultiRegionClustersCommandInput - {@link DescribeMultiRegionClustersCommandInput}
 * @returns {@link DescribeMultiRegionClustersCommandOutput}
 * @see {@link DescribeMultiRegionClustersCommandInput} for command's `input` shape.
 * @see {@link DescribeMultiRegionClustersCommandOutput} for command's `response` shape.
 * @see {@link MemoryDBClientResolvedConfig | config} for MemoryDBClient's `config` shape.
 *
 * @throws {@link ClusterNotFoundFault} (client fault)
 *  <p></p>
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
export class DescribeMultiRegionClustersCommand extends $Command
  .classBuilder<
    DescribeMultiRegionClustersCommandInput,
    DescribeMultiRegionClustersCommandOutput,
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
  .s("AmazonMemoryDB", "DescribeMultiRegionClusters", {})
  .n("MemoryDBClient", "DescribeMultiRegionClustersCommand")
  .f(void 0, void 0)
  .ser(se_DescribeMultiRegionClustersCommand)
  .de(de_DescribeMultiRegionClustersCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeMultiRegionClustersRequest;
      output: DescribeMultiRegionClustersResponse;
    };
    sdk: {
      input: DescribeMultiRegionClustersCommandInput;
      output: DescribeMultiRegionClustersCommandOutput;
    };
  };
}
