// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { BacktrackDBClusterMessage, DBClusterBacktrack } from "../models/models_0";
import { de_BacktrackDBClusterCommand, se_BacktrackDBClusterCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BacktrackDBClusterCommand}.
 */
export interface BacktrackDBClusterCommandInput extends BacktrackDBClusterMessage {}
/**
 * @public
 *
 * The output of {@link BacktrackDBClusterCommand}.
 */
export interface BacktrackDBClusterCommandOutput extends DBClusterBacktrack, __MetadataBearer {}

/**
 * <p>Backtracks a DB cluster to a specific time, without creating a new DB cluster.</p>
 *          <p>For more information on backtracking, see
 *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Managing.Backtrack.html">
 *                 Backtracking an Aurora DB Cluster</a> in the
 *             <i>Amazon Aurora User Guide</i>.</p>
 *          <note>
 *             <p>This action applies only to Aurora MySQL DB clusters.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, BacktrackDBClusterCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, BacktrackDBClusterCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new RDSClient(config);
 * const input = { // BacktrackDBClusterMessage
 *   DBClusterIdentifier: "STRING_VALUE", // required
 *   BacktrackTo: new Date("TIMESTAMP"), // required
 *   Force: true || false,
 *   UseEarliestTimeOnPointInTimeUnavailable: true || false,
 * };
 * const command = new BacktrackDBClusterCommand(input);
 * const response = await client.send(command);
 * // { // DBClusterBacktrack
 * //   DBClusterIdentifier: "STRING_VALUE",
 * //   BacktrackIdentifier: "STRING_VALUE",
 * //   BacktrackTo: new Date("TIMESTAMP"),
 * //   BacktrackedFrom: new Date("TIMESTAMP"),
 * //   BacktrackRequestCreationTime: new Date("TIMESTAMP"),
 * //   Status: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param BacktrackDBClusterCommandInput - {@link BacktrackDBClusterCommandInput}
 * @returns {@link BacktrackDBClusterCommandOutput}
 * @see {@link BacktrackDBClusterCommandInput} for command's `input` shape.
 * @see {@link BacktrackDBClusterCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBClusterNotFoundFault} (client fault)
 *  <p>
 *             <code>DBClusterIdentifier</code> doesn't refer to an existing DB cluster.</p>
 *
 * @throws {@link InvalidDBClusterStateFault} (client fault)
 *  <p>The requested operation can't be performed while the cluster is in this state.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 * @public
 */
export class BacktrackDBClusterCommand extends $Command
  .classBuilder<
    BacktrackDBClusterCommandInput,
    BacktrackDBClusterCommandOutput,
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
  .s("AmazonRDSv19", "BacktrackDBCluster", {})
  .n("RDSClient", "BacktrackDBClusterCommand")
  .f(void 0, void 0)
  .ser(se_BacktrackDBClusterCommand)
  .de(de_BacktrackDBClusterCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BacktrackDBClusterMessage;
      output: DBClusterBacktrack;
    };
    sdk: {
      input: BacktrackDBClusterCommandInput;
      output: BacktrackDBClusterCommandOutput;
    };
  };
}
