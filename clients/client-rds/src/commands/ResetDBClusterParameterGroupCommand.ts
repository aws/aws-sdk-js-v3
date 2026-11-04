// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DBClusterParameterGroupNameMessage, ResetDBClusterParameterGroupMessage } from "../models/models_1";
import { ResetDBClusterParameterGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ResetDBClusterParameterGroupCommand}.
 */
export interface ResetDBClusterParameterGroupCommandInput extends ResetDBClusterParameterGroupMessage {}
/**
 * @public
 *
 * The output of {@link ResetDBClusterParameterGroupCommand}.
 */
export interface ResetDBClusterParameterGroupCommandOutput extends DBClusterParameterGroupNameMessage, __MetadataBearer {}

/**
 * Modifies the parameters of a DB cluster parameter group to the default value. To reset specific parameters submit a list of the following: `ParameterName` and `ApplyMethod`. To reset the entire DB cluster parameter group, specify the `DBClusterParameterGroupName` and `ResetAllParameters` parameters.
 *
 * When resetting the entire group, dynamic parameters are updated immediately and static parameters are set to `pending-reboot` to take effect on the next DB instance restart or `RebootDBInstance` request. You must call `RebootDBInstance` for every DB instance in your DB cluster that you want the updated static parameter to apply to.
 *
 * For more information on Amazon Aurora DB clusters, see [What is Amazon Aurora?](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html) in the *Amazon Aurora User Guide*.
 *
 * For more information on Multi-AZ DB clusters, see [Multi-AZ DB cluster deployments](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html) in the *Amazon RDS User Guide.*
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, ResetDBClusterParameterGroupCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, ResetDBClusterParameterGroupCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
 * const input = { // ResetDBClusterParameterGroupMessage
 *   DBClusterParameterGroupName: "STRING_VALUE", // required
 *   ResetAllParameters: true || false,
 *   Parameters: [ // ParametersList
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
 * const command = new ResetDBClusterParameterGroupCommand(input);
 * const response = await client.send(command);
 * // { // DBClusterParameterGroupNameMessage
 * //   DBClusterParameterGroupName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ResetDBClusterParameterGroupCommandInput - {@link ResetDBClusterParameterGroupCommandInput}
 * @returns {@link ResetDBClusterParameterGroupCommandOutput}
 * @see {@link ResetDBClusterParameterGroupCommandInput} for command's `input` shape.
 * @see {@link ResetDBClusterParameterGroupCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBParameterGroupNotFoundFault} (client fault)
 *
 * `DBParameterGroupName` doesn't refer to an existing DB parameter group.
 *
 * @throws {@link InvalidDBParameterGroupStateFault} (client fault)
 *
 * The DB parameter group is in use or is in an invalid state. If you are attempting to delete the parameter group, you can't delete it when the parameter group is in this state.
 *
 * @throws {@link RDSServiceException}
 *
 * Base exception class for all service exceptions from RDS service.
 *
 * @example To reset all parameters to their default values
 * ```javascript
 * // The following example resets all parameter values in a customer-created DB cluster parameter group to their default values.
 * const input = {
 *   DBClusterParameterGroupName: "mydbclpg",
 *   ResetAllParameters: true
 * };
 * const command = new ResetDBClusterParameterGroupCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   DBClusterParameterGroupName: "mydbclpg"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ResetDBClusterParameterGroupCommand extends command<ResetDBClusterParameterGroupCommandInput, ResetDBClusterParameterGroupCommandOutput>(
  _ep0,
  _mw0,
  "ResetDBClusterParameterGroup",
  ResetDBClusterParameterGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ResetDBClusterParameterGroupMessage;
      output: DBClusterParameterGroupNameMessage;
    };
    sdk: {
      input: ResetDBClusterParameterGroupCommandInput;
      output: ResetDBClusterParameterGroupCommandOutput;
    };
  };
}
