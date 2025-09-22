// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DBClusterCapacityInfo, ModifyCurrentDBClusterCapacityMessage } from "../models/models_1";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { ModifyCurrentDBClusterCapacity } from "../schemas/schemas_25_ModifyCurrentDBClusterCapacity";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Set the capacity of an Aurora Serverless v1 DB cluster to a specific value.</p>
 *          <p>Aurora Serverless v1 scales seamlessly based on the workload on the DB cluster. In some cases, the capacity might not scale
 *         fast enough to meet a sudden change in workload, such as a large number of new transactions. Call <code>ModifyCurrentDBClusterCapacity</code>
 *         to set the capacity explicitly.</p>
 *          <p>After this call sets the DB cluster capacity, Aurora Serverless v1 can automatically scale
 *             the DB cluster based on the cooldown period for scaling up and the cooldown period
 *             for scaling down.</p>
 *          <p>For more information about Aurora Serverless v1, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html">Using Amazon Aurora Serverless v1</a> in the
 *           <i>Amazon Aurora User Guide</i>.</p>
 *          <important>
 *             <p>If you call <code>ModifyCurrentDBClusterCapacity</code> with the default <code>TimeoutAction</code>, connections that
 *               prevent Aurora Serverless v1 from finding a scaling point might be dropped. For more information about scaling points,
 *               see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.how-it-works.html#aurora-serverless.how-it-works.auto-scaling">
 *                   Autoscaling for Aurora Serverless v1</a> in the <i>Amazon Aurora User Guide</i>.</p>
 *          </important>
 *          <note>
 *             <p>This operation only applies to Aurora Serverless v1 DB clusters.</p>
 *          </note>
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
 *  <p>
 *             <code>DBClusterIdentifier</code> doesn't refer to an existing DB cluster.</p>
 *
 * @throws {@link InvalidDBClusterCapacityFault} (client fault)
 *  <p>
 *             <code>Capacity</code> isn't a valid Aurora Serverless DB cluster
 *             capacity. Valid capacity values are <code>2</code>, <code>4</code>, <code>8</code>, <code>16</code>,
 *             <code>32</code>, <code>64</code>, <code>128</code>, and <code>256</code>.</p>
 *
 * @throws {@link InvalidDBClusterStateFault} (client fault)
 *  <p>The requested operation can't be performed while the cluster is in this state.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
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
export class ModifyCurrentDBClusterCapacityCommand extends $Command
  .classBuilder<
    ModifyCurrentDBClusterCapacityCommandInput,
    ModifyCurrentDBClusterCapacityCommandOutput,
    RDSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonRDSv19", "ModifyCurrentDBClusterCapacity", {})
  .n("RDSClient", "ModifyCurrentDBClusterCapacityCommand")
  .sc(ModifyCurrentDBClusterCapacity)
  .build() {
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
