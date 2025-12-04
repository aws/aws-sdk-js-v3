// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeGlobalClustersMessage, GlobalClustersMessage } from "../models/models_0";
import type { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import { DescribeGlobalClusters } from "../schemas/schemas_0";

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
 * <p>Returns information about Neptune global database clusters. This API
 *       supports pagination.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, DescribeGlobalClustersCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, DescribeGlobalClustersCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * // import type { NeptuneClientConfig } from "@aws-sdk/client-neptune";
 * const config = {}; // type is NeptuneClientConfig
 * const client = new NeptuneClient(config);
 * const input = { // DescribeGlobalClustersMessage
 *   GlobalClusterIdentifier: "STRING_VALUE",
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
 * //       FailoverState: { // FailoverState
 * //         Status: "pending" || "failing-over" || "cancelling",
 * //         FromDbClusterArn: "STRING_VALUE",
 * //         ToDbClusterArn: "STRING_VALUE",
 * //         IsDataLossAllowed: true || false,
 * //       },
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
 * @see {@link NeptuneClientResolvedConfig | config} for NeptuneClient's `config` shape.
 *
 * @throws {@link GlobalClusterNotFoundFault} (client fault)
 *  <p>The <code>GlobalClusterIdentifier</code> doesn't refer to an existing global database cluster. </p>
 *
 * @throws {@link NeptuneServiceException}
 * <p>Base exception class for all service exceptions from Neptune service.</p>
 *
 *
 * @public
 */
export class DescribeGlobalClustersCommand extends $Command
  .classBuilder<
    DescribeGlobalClustersCommandInput,
    DescribeGlobalClustersCommandOutput,
    NeptuneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NeptuneClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonRDSv19", "DescribeGlobalClusters", {})
  .n("NeptuneClient", "DescribeGlobalClustersCommand")
  .sc(DescribeGlobalClusters)
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
