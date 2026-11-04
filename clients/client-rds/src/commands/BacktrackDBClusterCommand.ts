// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BacktrackDBClusterMessage, DBClusterBacktrack } from "../models/models_0";
import { BacktrackDBCluster$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Backtracks a DB cluster to a specific time, without creating a new DB cluster.
 *
 * For more information on backtracking, see [Backtracking an Aurora DB Cluster](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Managing.Backtrack.html) in the *Amazon Aurora User Guide*.
 *
 * > **Note:** This action applies only to Aurora MySQL DB clusters.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, BacktrackDBClusterCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, BacktrackDBClusterCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
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
 *
 * `DBClusterIdentifier` doesn't refer to an existing DB cluster.
 *
 * @throws {@link InvalidDBClusterStateFault} (client fault)
 *
 * The requested operation can't be performed while the cluster is in this state.
 *
 * @throws {@link RDSServiceException}
 *
 * Base exception class for all service exceptions from RDS service.
 *
 * @public
 */
export class BacktrackDBClusterCommand extends command<BacktrackDBClusterCommandInput, BacktrackDBClusterCommandOutput>(
  _ep0,
  _mw0,
  "BacktrackDBCluster",
  BacktrackDBCluster$
) {
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
