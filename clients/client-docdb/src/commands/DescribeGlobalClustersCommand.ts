// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DocDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeGlobalClustersMessage, GlobalClustersMessage } from "../models/models_0";
import { de_DescribeGlobalClustersCommand, se_DescribeGlobalClustersCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeGlobalClustersCommand}.
 */
export interface DescribeGlobalClustersCommandInput extends DescribeGlobalClustersMessage {}
/**
 * @public
 *
 * The output of {@link DescribeGlobalClustersCommand}.
 */
export interface DescribeGlobalClustersCommandOutput extends GlobalClustersMessage, __MetadataBearer {}

/**
 * <p>Returns information about Amazon DocumentDB global  clusters. This API supports pagination.</p>
 *          <note>
 *             <p>This action only applies to Amazon DocumentDB clusters.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBClient, DescribeGlobalClustersCommand } from "@aws-sdk/client-docdb"; // ES Modules import
 * // const { DocDBClient, DescribeGlobalClustersCommand } = require("@aws-sdk/client-docdb"); // CommonJS import
 * const client = new DocDBClient(config);
 * const input = { // DescribeGlobalClustersMessage
 *   GlobalClusterIdentifier: "STRING_VALUE",
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeGlobalClustersCommand(input);
 * const response = await client.send(command);
 * // { // GlobalClustersMessage
 * //   Marker: "STRING_VALUE",
 * //   GlobalClusters: [ // GlobalClusterList
 * //     { // GlobalCluster
 * //       GlobalClusterIdentifier: "STRING_VALUE",
 * //       GlobalClusterResourceId: "STRING_VALUE",
 * //       GlobalClusterArn: "STRING_VALUE",
 * //       Status: "STRING_VALUE",
 * //       Engine: "STRING_VALUE",
 * //       EngineVersion: "STRING_VALUE",
 * //       DatabaseName: "STRING_VALUE",
 * //       StorageEncrypted: true || false,
 * //       DeletionProtection: true || false,
 * //       GlobalClusterMembers: [ // GlobalClusterMemberList
 * //         { // GlobalClusterMember
 * //           DBClusterArn: "STRING_VALUE",
 * //           Readers: [ // ReadersArnList
 * //             "STRING_VALUE",
 * //           ],
 * //           IsWriter: true || false,
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeGlobalClustersCommandInput - {@link DescribeGlobalClustersCommandInput}
 * @returns {@link DescribeGlobalClustersCommandOutput}
 * @see {@link DescribeGlobalClustersCommandInput} for command's `input` shape.
 * @see {@link DescribeGlobalClustersCommandOutput} for command's `response` shape.
 * @see {@link DocDBClientResolvedConfig | config} for DocDBClient's `config` shape.
 *
 * @throws {@link GlobalClusterNotFoundFault} (client fault)
 *  <p>The <code>GlobalClusterIdentifier</code> doesn't refer to an existing global cluster.</p>
 *
 * @throws {@link DocDBServiceException}
 * <p>Base exception class for all service exceptions from DocDB service.</p>
 *
 *
 * @public
 */
export class DescribeGlobalClustersCommand extends $Command
  .classBuilder<
    DescribeGlobalClustersCommandInput,
    DescribeGlobalClustersCommandOutput,
    DocDBClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DocDBClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonRDSv19", "DescribeGlobalClusters", {})
  .n("DocDBClient", "DescribeGlobalClustersCommand")
  .f(void 0, void 0)
  .ser(se_DescribeGlobalClustersCommand)
  .de(de_DescribeGlobalClustersCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeGlobalClustersMessage;
      output: GlobalClustersMessage;
    };
    sdk: {
      input: DescribeGlobalClustersCommandInput;
      output: DescribeGlobalClustersCommandOutput;
    };
  };
}
