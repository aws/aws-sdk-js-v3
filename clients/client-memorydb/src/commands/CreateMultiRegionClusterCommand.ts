// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MemoryDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MemoryDBClient";
import { CreateMultiRegionClusterRequest, CreateMultiRegionClusterResponse } from "../models/models_0";
import { de_CreateMultiRegionClusterCommand, se_CreateMultiRegionClusterCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateMultiRegionClusterCommand}.
 */
export interface CreateMultiRegionClusterCommandInput extends CreateMultiRegionClusterRequest {}
/**
 * @public
 *
 * The output of {@link CreateMultiRegionClusterCommand}.
 */
export interface CreateMultiRegionClusterCommandOutput extends CreateMultiRegionClusterResponse, __MetadataBearer {}

/**
 * <p>Creates a new multi-Region cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MemoryDBClient, CreateMultiRegionClusterCommand } from "@aws-sdk/client-memorydb"; // ES Modules import
 * // const { MemoryDBClient, CreateMultiRegionClusterCommand } = require("@aws-sdk/client-memorydb"); // CommonJS import
 * // import type { MemoryDBClientConfig } from "@aws-sdk/client-memorydb";
 * const config = {}; // type is MemoryDBClientConfig
 * const client = new MemoryDBClient(config);
 * const input = { // CreateMultiRegionClusterRequest
 *   MultiRegionClusterNameSuffix: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   Engine: "STRING_VALUE",
 *   EngineVersion: "STRING_VALUE",
 *   NodeType: "STRING_VALUE", // required
 *   MultiRegionParameterGroupName: "STRING_VALUE",
 *   NumShards: Number("int"),
 *   TLSEnabled: true || false,
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateMultiRegionClusterCommand(input);
 * const response = await client.send(command);
 * // { // CreateMultiRegionClusterResponse
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
 * @param CreateMultiRegionClusterCommandInput - {@link CreateMultiRegionClusterCommandInput}
 * @returns {@link CreateMultiRegionClusterCommandOutput}
 * @see {@link CreateMultiRegionClusterCommandInput} for command's `input` shape.
 * @see {@link CreateMultiRegionClusterCommandOutput} for command's `response` shape.
 * @see {@link MemoryDBClientResolvedConfig | config} for MemoryDBClient's `config` shape.
 *
 * @throws {@link ClusterQuotaForCustomerExceededFault} (client fault)
 *  <p>The request cannot be processed because it would exceed the maximum number of clusters allowed for this customer.</p>
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>The specified parameter combination is not valid.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The specified parameter value is not valid.</p>
 *
 * @throws {@link MultiRegionClusterAlreadyExistsFault} (client fault)
 *  <p>A multi-Region cluster with the specified name already exists.</p>
 *
 * @throws {@link MultiRegionParameterGroupNotFoundFault} (client fault)
 *  <p>The specified multi-Region parameter group does not exist.</p>
 *
 * @throws {@link TagQuotaPerResourceExceeded} (client fault)
 *  <p>The request cannot be processed because it would exceed the maximum number of tags allowed per resource.</p>
 *
 * @throws {@link MemoryDBServiceException}
 * <p>Base exception class for all service exceptions from MemoryDB service.</p>
 *
 *
 * @public
 */
export class CreateMultiRegionClusterCommand extends $Command
  .classBuilder<
    CreateMultiRegionClusterCommandInput,
    CreateMultiRegionClusterCommandOutput,
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
  .s("AmazonMemoryDB", "CreateMultiRegionCluster", {})
  .n("MemoryDBClient", "CreateMultiRegionClusterCommand")
  .f(void 0, void 0)
  .ser(se_CreateMultiRegionClusterCommand)
  .de(de_CreateMultiRegionClusterCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateMultiRegionClusterRequest;
      output: CreateMultiRegionClusterResponse;
    };
    sdk: {
      input: CreateMultiRegionClusterCommandInput;
      output: CreateMultiRegionClusterCommandOutput;
    };
  };
}
