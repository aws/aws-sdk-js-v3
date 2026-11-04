// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DBParameterGroupNameMessage, ModifyDBParameterGroupMessage } from "../models/models_1";
import { ModifyDBParameterGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Modifies the parameters of a DB parameter group. To modify more than one parameter, submit a list of the following: `ParameterName`, `ParameterValue`, and `ApplyMethod`. A maximum of 20 parameters can be modified in a single request.
 *
 * > **Important:** After you modify a DB parameter group, you should wait at least 5 minutes before creating your first DB instance that uses that DB parameter group as the default parameter group. This allows Amazon RDS to fully complete the modify operation before the parameter group is used as the default for a new DB instance. This is especially important for parameters that are critical when creating the default database for a DB instance, such as the character set for the default database defined by the `character_set_database` parameter. You can use the *Parameter Groups* option of the [Amazon RDS console](https://console.aws.amazon.com/rds/) or the *DescribeDBParameters* command to verify that your DB parameter group has been created or modified.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, ModifyDBParameterGroupCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, ModifyDBParameterGroupCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
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
 * @example To modify a DB parameter group
 * ```javascript
 * // The following example changes the value of the clr enabled parameter in a DB parameter group. The value of the ApplyMethod parameter causes the DB parameter group to be modified immediately, instead of waiting until the next maintenance window.
 * const input = {
 *   DBParameterGroupName: "test-sqlserver-se-2017",
 *   Parameters: [
 *     {
 *       ApplyMethod: "immediate",
 *       ParameterName: "clr enabled",
 *       ParameterValue: "1"
 *     }
 *   ]
 * };
 * const command = new ModifyDBParameterGroupCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   DBParameterGroupName: "test-sqlserver-se-2017"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ModifyDBParameterGroupCommand extends command<ModifyDBParameterGroupCommandInput, ModifyDBParameterGroupCommandOutput>(
  _ep0,
  _mw0,
  "ModifyDBParameterGroup",
  ModifyDBParameterGroup$
) {
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
