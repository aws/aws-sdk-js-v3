// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DBParameterGroupNameMessage, ModifyDBParameterGroupMessage } from "../models/models_1";
import { de_ModifyDBParameterGroupCommand, se_ModifyDBParameterGroupCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyDBParameterGroupCommand}.
 */
export interface ModifyDBParameterGroupCommandInput extends ModifyDBParameterGroupMessage {}
/**
 * @public
 *
 * The output of {@link ModifyDBParameterGroupCommand}.
 */
export interface ModifyDBParameterGroupCommandOutput extends DBParameterGroupNameMessage, __MetadataBearer {}

/**
 * <p>Modifies the parameters of a DB parameter group. To modify more than one parameter,
 *         submit a list of the following: <code>ParameterName</code>, <code>ParameterValue</code>, and
 *         <code>ApplyMethod</code>. A maximum of 20 parameters can be modified in a single request.</p>
 *          <important>
 *             <p>After you modify a DB parameter group, you should wait at least 5 minutes
 *             before creating your first DB instance that uses that DB parameter group as the default parameter
 *             group. This allows Amazon RDS to fully complete the modify operation before the parameter
 *             group is used as the default for a new DB instance. This is especially important for parameters
 *             that are critical when creating the default database for a DB instance, such as the character set
 *             for the default database defined by the <code>character_set_database</code> parameter. You can use the
 *             <i>Parameter Groups</i> option of the <a href="https://console.aws.amazon.com/rds/">Amazon RDS console</a> or the
 *             <i>DescribeDBParameters</i> command to verify
 *             that your DB parameter group has been created or modified.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, ModifyDBParameterGroupCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, ModifyDBParameterGroupCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new RDSClient(config);
 * const input = { // ModifyDBParameterGroupMessage
 *   DBParameterGroupName: "STRING_VALUE", // required
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
 * const command = new ModifyDBParameterGroupCommand(input);
 * const response = await client.send(command);
 * // { // DBParameterGroupNameMessage
 * //   DBParameterGroupName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ModifyDBParameterGroupCommandInput - {@link ModifyDBParameterGroupCommandInput}
 * @returns {@link ModifyDBParameterGroupCommandOutput}
 * @see {@link ModifyDBParameterGroupCommandInput} for command's `input` shape.
 * @see {@link ModifyDBParameterGroupCommandOutput} for command's `response` shape.
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
 * @public
 * @example To modify a DB parameter group
 * ```javascript
 * // The following example changes the value of the clr enabled parameter in a DB parameter group. The value of the ApplyMethod parameter causes the DB parameter group to be modified immediately, instead of waiting until the next maintenance window.
 * const input = {
 *   "DBParameterGroupName": "test-sqlserver-se-2017",
 *   "Parameters": [
 *     {
 *       "ApplyMethod": "immediate",
 *       "ParameterName": "clr enabled",
 *       "ParameterValue": "1"
 *     }
 *   ]
 * };
 * const command = new ModifyDBParameterGroupCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "DBParameterGroupName": "test-sqlserver-se-2017"
 * }
 * *\/
 * // example id: to-modify-a-db-parameter-group-1680382937235
 * ```
 *
 */
export class ModifyDBParameterGroupCommand extends $Command
  .classBuilder<
    ModifyDBParameterGroupCommandInput,
    ModifyDBParameterGroupCommandOutput,
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
  .s("AmazonRDSv19", "ModifyDBParameterGroup", {})
  .n("RDSClient", "ModifyDBParameterGroupCommand")
  .f(void 0, void 0)
  .ser(se_ModifyDBParameterGroupCommand)
  .de(de_ModifyDBParameterGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyDBParameterGroupMessage;
      output: DBParameterGroupNameMessage;
    };
    sdk: {
      input: ModifyDBParameterGroupCommandInput;
      output: ModifyDBParameterGroupCommandOutput;
    };
  };
}
