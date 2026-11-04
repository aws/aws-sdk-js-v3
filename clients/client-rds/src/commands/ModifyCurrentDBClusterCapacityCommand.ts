// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DBClusterCapacityInfo, ModifyCurrentDBClusterCapacityMessage } from "../models/models_1";
import { ModifyCurrentDBClusterCapacity$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ModifyCurrentDBClusterCapacityCommand}.
 */
export interface ModifyCurrentDBClusterCapacityCommandInput extends ModifyCurrentDBClusterCapacityMessage {}
/**
 * @public
 *
 * The output of {@link ModifyCurrentDBClusterCapacityCommand}.
 */
export interface ModifyCurrentDBClusterCapacityCommandOutput extends DBClusterCapacityInfo, __MetadataBearer {}

/**
 * Set the capacity of an Aurora Serverless v1 DB cluster to a specific value.
 *
 * Aurora Serverless v1 scales seamlessly based on the workload on the DB cluster. In some cases, the capacity might not scale fast enough to meet a sudden change in workload, such as a large number of new transactions. Call `ModifyCurrentDBClusterCapacity` to set the capacity explicitly.
 *
 * After this call sets the DB cluster capacity, Aurora Serverless v1 can automatically scale the DB cluster based on the cooldown period for scaling up and the cooldown period for scaling down.
 *
 * For more information about Aurora Serverless v1, see [Using Amazon Aurora Serverless v1](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html) in the *Amazon Aurora User Guide*.
 *
 * > **Important:** If you call `ModifyCurrentDBClusterCapacity` with the default `TimeoutAction`, connections that prevent Aurora Serverless v1 from finding a scaling point might be dropped. For more information about scaling points, see [Autoscaling for Aurora Serverless v1](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.how-it-works.html#aurora-serverless.how-it-works.auto-scaling) in the *Amazon Aurora User Guide*.
 *
 * > **Note:** This operation only applies to Aurora Serverless v1 DB clusters.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, ModifyCurrentDBClusterCapacityCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, ModifyCurrentDBClusterCapacityCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
 * const input = { // ModifyCurrentDBClusterCapacityMessage
 *   DBClusterIdentifier: "STRING_VALUE", // required
 *   Capacity: Number("int"),
 *   SecondsBeforeTimeout: Number("int"),
 *   TimeoutAction: "STRING_VALUE",
 * };
 * const command = new ModifyCurrentDBClusterCapacityCommand(input);
 * const response = await client.send(command);
 * // { // DBClusterCapacityInfo
 * //   DBClusterIdentifier: "STRING_VALUE",
 * //   PendingCapacity: Number("int"),
 * //   CurrentCapacity: Number("int"),
 * //   SecondsBeforeTimeout: Number("int"),
 * //   TimeoutAction: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ModifyCurrentDBClusterCapacityCommandInput - {@link ModifyCurrentDBClusterCapacityCommandInput}
 * @returns {@link ModifyCurrentDBClusterCapacityCommandOutput}
 * @see {@link ModifyCurrentDBClusterCapacityCommandInput} for command's `input` shape.
 * @see {@link ModifyCurrentDBClusterCapacityCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBClusterNotFoundFault} (client fault)
 *
 * `DBClusterIdentifier` doesn't refer to an existing DB cluster.
 *
 * @throws {@link InvalidDBClusterCapacityFault} (client fault)
 *
 * `Capacity` isn't a valid Aurora Serverless DB cluster capacity. Valid capacity values are `2`, `4`, `8`, `16`, `32`, `64`, `128`, and `256`.
 *
 * @throws {@link InvalidDBClusterStateFault} (client fault)
 *
 * The requested operation can't be performed while the cluster is in this state.
 *
 * @throws {@link RDSServiceException}
 *
 * Base exception class for all service exceptions from RDS service.
 *
 * @example To scale the capacity of an Aurora Serverless DB cluster
 * ```javascript
 * // The following example scales the capacity of an Aurora Serverless DB cluster to 8.
 * const input = {
 *   Capacity: 8,
 *   DBClusterIdentifier: "mydbcluster"
 * };
 * const command = new ModifyCurrentDBClusterCapacityCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   CurrentCapacity: 1,
 *   DBClusterIdentifier: "mydbcluster",
 *   PendingCapacity: 8,
 *   SecondsBeforeTimeout: 300,
 *   TimeoutAction: "ForceApplyCapacityChange"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ModifyCurrentDBClusterCapacityCommand extends command<ModifyCurrentDBClusterCapacityCommandInput, ModifyCurrentDBClusterCapacityCommandOutput>(
  _ep0,
  _mw0,
  "ModifyCurrentDBClusterCapacity",
  ModifyCurrentDBClusterCapacity$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyCurrentDBClusterCapacityMessage;
      output: DBClusterCapacityInfo;
    };
    sdk: {
      input: ModifyCurrentDBClusterCapacityCommandInput;
      output: ModifyCurrentDBClusterCapacityCommandOutput;
    };
  };
}
