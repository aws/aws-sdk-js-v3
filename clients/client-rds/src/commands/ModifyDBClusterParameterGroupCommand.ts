// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DBClusterParameterGroupNameMessage, ModifyDBClusterParameterGroupMessage } from "../models/models_1";
import {
  de_ModifyDBClusterParameterGroupCommand,
  se_ModifyDBClusterParameterGroupCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyDBClusterParameterGroupCommand}.
 */
export interface ModifyDBClusterParameterGroupCommandInput extends ModifyDBClusterParameterGroupMessage {}
/**
 * @public
 *
 * The output of {@link ModifyDBClusterParameterGroupCommand}.
 */
export interface ModifyDBClusterParameterGroupCommandOutput
  extends DBClusterParameterGroupNameMessage,
    __MetadataBearer {}

/**
 * <p>Modifies the parameters of a DB cluster parameter group. To modify more than one parameter,
 *             submit a list of the following: <code>ParameterName</code>, <code>ParameterValue</code>,
 *             and <code>ApplyMethod</code>. A maximum of 20
 *             parameters can be modified in a single request.</p>
 *          <important>
 *             <p>After you create a DB cluster parameter group, you should wait at least 5 minutes
 *                 before creating your first DB cluster that uses that DB cluster parameter group as the default parameter
 *                 group. This allows Amazon RDS to fully complete the create operation before the parameter
 *                 group is used as the default for a new DB cluster. This is especially important for parameters
 *                 that are critical when creating the default database for a DB cluster, such as the character set
 *                 for the default database defined by the <code>character_set_database</code> parameter. You can use the
 *                 <i>Parameter Groups</i> option of the <a href="https://console.aws.amazon.com/rds/">Amazon RDS console</a> or the
 *                 <code>DescribeDBClusterParameters</code> operation to verify
 *                 that your DB cluster parameter group has been created or modified.</p>
 *             <p>If the modified DB cluster parameter group is used by an Aurora Serverless v1 cluster, Aurora
 *                applies the update immediately. The cluster restart might interrupt your workload. In that case,
 *                your application must reopen any connections and retry any transactions that were active
 *                when the parameter changes took effect.</p>
 *          </important>
 *          <p>For more information on Amazon Aurora DB clusters, see
 *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
 *               What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p>
 *          <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB
 *                 cluster deployments</a> in the <i>Amazon RDS User
 *             Guide.</i>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, ModifyDBClusterParameterGroupCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, ModifyDBClusterParameterGroupCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
 * const input = { // ModifyDBClusterParameterGroupMessage
 *   DBClusterParameterGroupName: "STRING_VALUE", // required
 *   Parameters: [ // ParametersList // required
 *     { // Parameter
 *       ParameterName: "STRING_VALUE",
 *       ParameterValue: "STRING_VALUE",
 *       Description: "STRING_VALUE",
 *       Source: "STRING_VALUE",
 *       ApplyType: "STRING_VALUE",
 *       DataType: "STRING_VALUE",
 *       AllowedValues: "STRING_VALUE",
 *       IsModifiable: true || false,
 *       MinimumEngineVersion: "STRING_VALUE",
 *       ApplyMethod: "immediate" || "pending-reboot",
 *       SupportedEngineModes: [ // EngineModeList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new ModifyDBClusterParameterGroupCommand(input);
 * const response = await client.send(command);
 * // { // DBClusterParameterGroupNameMessage
 * //   DBClusterParameterGroupName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ModifyDBClusterParameterGroupCommandInput - {@link ModifyDBClusterParameterGroupCommandInput}
 * @returns {@link ModifyDBClusterParameterGroupCommandOutput}
 * @see {@link ModifyDBClusterParameterGroupCommandInput} for command's `input` shape.
 * @see {@link ModifyDBClusterParameterGroupCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBParameterGroupNotFoundFault} (client fault)
 *  <p>
 *             <code>DBParameterGroupName</code> doesn't refer to an
 *         existing DB parameter group.</p>
 *
 * @throws {@link InvalidDBParameterGroupStateFault} (client fault)
 *  <p>The DB parameter group is in use or is in an invalid state. If you are attempting
 *             to delete the parameter group, you can't delete it when the parameter group is in
 *             this state.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 *
 * @example To modify parameters in a DB cluster parameter group
 * ```javascript
 * // The following example modifies the values of parameters in a DB cluster parameter group.
 * const input = {
 *   DBClusterParameterGroupName: "mydbclusterpg",
 *   Parameters: [
 *     {
 *       ApplyMethod: "immediate",
 *       ParameterName: "server_audit_logging",
 *       ParameterValue: "1"
 *     },
 *     {
 *       ApplyMethod: "immediate",
 *       ParameterName: "server_audit_logs_upload",
 *       ParameterValue: "1"
 *     }
 *   ]
 * };
 * const command = new ModifyDBClusterParameterGroupCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   DBClusterParameterGroupName: "mydbclusterpg"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ModifyDBClusterParameterGroupCommand extends $Command
  .classBuilder<
    ModifyDBClusterParameterGroupCommandInput,
    ModifyDBClusterParameterGroupCommandOutput,
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
  .s("AmazonRDSv19", "ModifyDBClusterParameterGroup", {})
  .n("RDSClient", "ModifyDBClusterParameterGroupCommand")
  .f(void 0, void 0)
  .ser(se_ModifyDBClusterParameterGroupCommand)
  .de(de_ModifyDBClusterParameterGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyDBClusterParameterGroupMessage;
      output: DBClusterParameterGroupNameMessage;
    };
    sdk: {
      input: ModifyDBClusterParameterGroupCommandInput;
      output: ModifyDBClusterParameterGroupCommandOutput;
    };
  };
}
