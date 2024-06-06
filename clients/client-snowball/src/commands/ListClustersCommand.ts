// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListClustersRequest, ListClustersResult } from "../models/models_0";
import { de_ListClustersCommand, se_ListClustersCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListClustersCommand}.
 */
export interface ListClustersCommandInput extends ListClustersRequest {}
/**
 * @public
 *
 * The output of {@link ListClustersCommand}.
 */
export interface ListClustersCommandOutput extends ListClustersResult, __MetadataBearer {}

/**
 * <p>Returns an array of <code>ClusterListEntry</code> objects of the specified length. Each
 *         <code>ClusterListEntry</code> object contains a cluster's state, a cluster's ID, and other
 *       important status information.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, ListClustersCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, ListClustersCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * const client = new SnowballClient(config);
 * const input = { // ListClustersRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListClustersCommand(input);
 * const response = await client.send(command);
 * // { // ListClustersResult
 * //   ClusterListEntries: [ // ClusterListEntryList
 * //     { // ClusterListEntry
 * //       ClusterId: "STRING_VALUE",
 * //       ClusterState: "AwaitingQuorum" || "Pending" || "InUse" || "Complete" || "Cancelled",
 * //       CreationDate: new Date("TIMESTAMP"),
 * //       Description: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListClustersCommandInput - {@link ListClustersCommandInput}
 * @returns {@link ListClustersCommandOutput}
 * @see {@link ListClustersCommandInput} for command's `input` shape.
 * @see {@link ListClustersCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for SnowballClient's `config` shape.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The <code>NextToken</code> string was altered unexpectedly, and the operation has
 *       stopped. Run the operation without changing the <code>NextToken</code> string, and try
 *       again.</p>
 *
 * @throws {@link SnowballServiceException}
 * <p>Base exception class for all service exceptions from Snowball service.</p>
 *
 * @public
 * @example To get a list of clusters that you've created for AWS Snowball
 * ```javascript
 * // Returns an array of ClusterListEntry objects of the specified length. Each ClusterListEntry object contains a cluster's state, a cluster's ID, and other important status information.
 * const input = {};
 * const command = new ListClustersCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ClusterListEntries": [
 *     {
 *       "ClusterId": "CID123e4567-e89b-12d3-a456-426655440000",
 *       "ClusterState": "Pending",
 *       "CreationDate": "1480475517.0",
 *       "Description": "MyCluster"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-get-a-list-of-clusters-that-youve-created-for-aws-snowball-1482862223003
 * ```
 *
 */
export class ListClustersCommand extends $Command
  .classBuilder<
    ListClustersCommandInput,
    ListClustersCommandOutput,
    SnowballClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SnowballClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIESnowballJobManagementService", "ListClusters", {})
  .n("SnowballClient", "ListClustersCommand")
  .f(void 0, void 0)
  .ser(se_ListClustersCommand)
  .de(de_ListClustersCommand)
  .build() {}
