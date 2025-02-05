// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DBClusterBacktrackMessage, DescribeDBClusterBacktracksMessage } from "../models/models_1";
import { de_DescribeDBClusterBacktracksCommand, se_DescribeDBClusterBacktracksCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeDBClusterBacktracksCommand}.
 */
export interface DescribeDBClusterBacktracksCommandInput extends DescribeDBClusterBacktracksMessage {}
/**
 * @public
 *
 * The output of {@link DescribeDBClusterBacktracksCommand}.
 */
export interface DescribeDBClusterBacktracksCommandOutput extends DBClusterBacktrackMessage, __MetadataBearer {}

/**
 * <p>Returns information about backtracks for a DB cluster.</p>
 *          <p>For more information on Amazon Aurora, see
 *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
 *                 What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p>
 *          <note>
 *             <p>This action only applies to Aurora MySQL DB clusters.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeDBClusterBacktracksCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeDBClusterBacktracksCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new RDSClient(config);
 * const input = { // DescribeDBClusterBacktracksMessage
 *   DBClusterIdentifier: "STRING_VALUE", // required
 *   BacktrackIdentifier: "STRING_VALUE",
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
 * const command = new DescribeDBClusterBacktracksCommand(input);
 * const response = await client.send(command);
 * // { // DBClusterBacktrackMessage
 * //   Marker: "STRING_VALUE",
 * //   DBClusterBacktracks: [ // DBClusterBacktrackList
 * //     { // DBClusterBacktrack
 * //       DBClusterIdentifier: "STRING_VALUE",
 * //       BacktrackIdentifier: "STRING_VALUE",
 * //       BacktrackTo: new Date("TIMESTAMP"),
 * //       BacktrackedFrom: new Date("TIMESTAMP"),
 * //       BacktrackRequestCreationTime: new Date("TIMESTAMP"),
 * //       Status: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeDBClusterBacktracksCommandInput - {@link DescribeDBClusterBacktracksCommandInput}
 * @returns {@link DescribeDBClusterBacktracksCommandOutput}
 * @see {@link DescribeDBClusterBacktracksCommandInput} for command's `input` shape.
 * @see {@link DescribeDBClusterBacktracksCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBClusterBacktrackNotFoundFault} (client fault)
 *  <p>
 *             <code>BacktrackIdentifier</code> doesn't refer to an existing backtrack.</p>
 *
 * @throws {@link DBClusterNotFoundFault} (client fault)
 *  <p>
 *             <code>DBClusterIdentifier</code> doesn't refer to an existing DB cluster.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 * @public
 * @example To describe backtracks for a DB cluster
 * ```javascript
 * // The following example retrieves details about the specified DB cluster.
 * const input = {
 *   "DBClusterIdentifier": "mydbcluster"
 * };
 * const command = new DescribeDBClusterBacktracksCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "DBClusterBacktracks": [
 *     {
 *       "BacktrackIdentifier": "2f5f5294-0dd2-44c9-9f50-EXAMPLE",
 *       "BacktrackRequestCreationTime": "2021-02-12T14:36:18.819Z",
 *       "BacktrackTo": "2021-02-12T04:59:22Z",
 *       "BacktrackedFrom": "2021-02-12T14:37:31.640Z",
 *       "DBClusterIdentifier": "mydbcluster",
 *       "Status": "COMPLETED"
 *     },
 *     {
 *       "BacktrackIdentifier": "3c7a6421-af2a-4ea3-ae95-EXAMPLE",
 *       "BacktrackRequestCreationTime": "2021-02-12T00:07:53.487Z",
 *       "BacktrackTo": "2021-02-11T22:53:46Z",
 *       "BacktrackedFrom": "2021-02-12T00:09:27.006Z",
 *       "DBClusterIdentifier": "mydbcluster",
 *       "Status": "COMPLETED"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-describe-backtracks-for-a-db-cluster-1680212191454
 * ```
 *
 */
export class DescribeDBClusterBacktracksCommand extends $Command
  .classBuilder<
    DescribeDBClusterBacktracksCommandInput,
    DescribeDBClusterBacktracksCommandOutput,
    RDSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonRDSv19", "DescribeDBClusterBacktracks", {})
  .n("RDSClient", "DescribeDBClusterBacktracksCommand")
  .f(void 0, void 0)
  .ser(se_DescribeDBClusterBacktracksCommand)
  .de(de_DescribeDBClusterBacktracksCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDBClusterBacktracksMessage;
      output: DBClusterBacktrackMessage;
    };
    sdk: {
      input: DescribeDBClusterBacktracksCommandInput;
      output: DescribeDBClusterBacktracksCommandOutput;
    };
  };
}
