// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyOptionGroupMessage, ModifyOptionGroupResult } from "../models/models_1";
import { de_ModifyOptionGroupCommand, se_ModifyOptionGroupCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyOptionGroupCommand}.
 */
export interface ModifyOptionGroupCommandInput extends ModifyOptionGroupMessage {}
/**
 * @public
 *
 * The output of {@link ModifyOptionGroupCommand}.
 */
export interface ModifyOptionGroupCommandOutput extends ModifyOptionGroupResult, __MetadataBearer {}

/**
 * <p>Modifies an existing option group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, ModifyOptionGroupCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, ModifyOptionGroupCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new RDSClient(config);
 * const input = { // ModifyOptionGroupMessage
 *   OptionGroupName: "STRING_VALUE", // required
 *   OptionsToInclude: [ // OptionConfigurationList
 *     { // OptionConfiguration
 *       OptionName: "STRING_VALUE", // required
 *       Port: Number("int"),
 *       OptionVersion: "STRING_VALUE",
 *       DBSecurityGroupMemberships: [ // DBSecurityGroupNameList
 *         "STRING_VALUE",
 *       ],
 *       VpcSecurityGroupMemberships: [ // VpcSecurityGroupIdList
 *         "STRING_VALUE",
 *       ],
 *       OptionSettings: [ // OptionSettingsList
 *         { // OptionSetting
 *           Name: "STRING_VALUE",
 *           Value: "STRING_VALUE",
 *           DefaultValue: "STRING_VALUE",
 *           Description: "STRING_VALUE",
 *           ApplyType: "STRING_VALUE",
 *           DataType: "STRING_VALUE",
 *           AllowedValues: "STRING_VALUE",
 *           IsModifiable: true || false,
 *           IsCollection: true || false,
 *         },
 *       ],
 *     },
 *   ],
 *   OptionsToRemove: [ // OptionNamesList
 *     "STRING_VALUE",
 *   ],
 *   ApplyImmediately: true || false,
 * };
 * const command = new ModifyOptionGroupCommand(input);
 * const response = await client.send(command);
 * // { // ModifyOptionGroupResult
 * //   OptionGroup: { // OptionGroup
 * //     OptionGroupName: "STRING_VALUE",
 * //     OptionGroupDescription: "STRING_VALUE",
 * //     EngineName: "STRING_VALUE",
 * //     MajorEngineVersion: "STRING_VALUE",
 * //     Options: [ // OptionsList
 * //       { // Option
 * //         OptionName: "STRING_VALUE",
 * //         OptionDescription: "STRING_VALUE",
 * //         Persistent: true || false,
 * //         Permanent: true || false,
 * //         Port: Number("int"),
 * //         OptionVersion: "STRING_VALUE",
 * //         OptionSettings: [ // OptionSettingConfigurationList
 * //           { // OptionSetting
 * //             Name: "STRING_VALUE",
 * //             Value: "STRING_VALUE",
 * //             DefaultValue: "STRING_VALUE",
 * //             Description: "STRING_VALUE",
 * //             ApplyType: "STRING_VALUE",
 * //             DataType: "STRING_VALUE",
 * //             AllowedValues: "STRING_VALUE",
 * //             IsModifiable: true || false,
 * //             IsCollection: true || false,
 * //           },
 * //         ],
 * //         DBSecurityGroupMemberships: [ // DBSecurityGroupMembershipList
 * //           { // DBSecurityGroupMembership
 * //             DBSecurityGroupName: "STRING_VALUE",
 * //             Status: "STRING_VALUE",
 * //           },
 * //         ],
 * //         VpcSecurityGroupMemberships: [ // VpcSecurityGroupMembershipList
 * //           { // VpcSecurityGroupMembership
 * //             VpcSecurityGroupId: "STRING_VALUE",
 * //             Status: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //     AllowsVpcAndNonVpcInstanceMemberships: true || false,
 * //     VpcId: "STRING_VALUE",
 * //     OptionGroupArn: "STRING_VALUE",
 * //     SourceOptionGroup: "STRING_VALUE",
 * //     SourceAccountId: "STRING_VALUE",
 * //     CopyTimestamp: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param ModifyOptionGroupCommandInput - {@link ModifyOptionGroupCommandInput}
 * @returns {@link ModifyOptionGroupCommandOutput}
 * @see {@link ModifyOptionGroupCommandInput} for command's `input` shape.
 * @see {@link ModifyOptionGroupCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link InvalidOptionGroupStateFault} (client fault)
 *  <p>The option group isn't in the <i>available</i> state.</p>
 *
 * @throws {@link OptionGroupNotFoundFault} (client fault)
 *  <p>The specified option group could not be found.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 * @public
 * @example To modify an option group
 * ```javascript
 * // The following example adds an option to an option group.
 * const input = {
 *   "ApplyImmediately": true,
 *   "OptionGroupName": "myawsuser-og02",
 *   "OptionsToInclude": [
 *     {
 *       "DBSecurityGroupMemberships": [
 *         "default"
 *       ],
 *       "OptionName": "MEMCACHED"
 *     }
 *   ]
 * };
 * const command = new ModifyOptionGroupCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "OptionGroup": {}
 * }
 * *\/
 * // example id: to-modify-an-option-group-1473890247875
 * ```
 *
 */
export class ModifyOptionGroupCommand extends $Command
  .classBuilder<
    ModifyOptionGroupCommandInput,
    ModifyOptionGroupCommandOutput,
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
  .s("AmazonRDSv19", "ModifyOptionGroup", {})
  .n("RDSClient", "ModifyOptionGroupCommand")
  .f(void 0, void 0)
  .ser(se_ModifyOptionGroupCommand)
  .de(de_ModifyOptionGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyOptionGroupMessage;
      output: ModifyOptionGroupResult;
    };
    sdk: {
      input: ModifyOptionGroupCommandInput;
      output: ModifyOptionGroupCommandOutput;
    };
  };
}
