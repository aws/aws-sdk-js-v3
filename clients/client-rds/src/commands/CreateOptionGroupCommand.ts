// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateOptionGroupMessage, CreateOptionGroupResult } from "../models/models_0";
import { de_CreateOptionGroupCommand, se_CreateOptionGroupCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateOptionGroupCommand}.
 */
export interface CreateOptionGroupCommandInput extends CreateOptionGroupMessage {}
/**
 * @public
 *
 * The output of {@link CreateOptionGroupCommand}.
 */
export interface CreateOptionGroupCommandOutput extends CreateOptionGroupResult, __MetadataBearer {}

/**
 * <p>Creates a new option group. You can create up to 20 option groups.</p>
 *          <p>This command doesn't apply to RDS Custom.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, CreateOptionGroupCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, CreateOptionGroupCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new RDSClient(config);
 * const input = { // CreateOptionGroupMessage
 *   OptionGroupName: "STRING_VALUE", // required
 *   EngineName: "STRING_VALUE", // required
 *   MajorEngineVersion: "STRING_VALUE", // required
 *   OptionGroupDescription: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateOptionGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateOptionGroupResult
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
 * @param CreateOptionGroupCommandInput - {@link CreateOptionGroupCommandInput}
 * @returns {@link CreateOptionGroupCommandOutput}
 * @see {@link CreateOptionGroupCommandInput} for command's `input` shape.
 * @see {@link CreateOptionGroupCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link OptionGroupAlreadyExistsFault} (client fault)
 *  <p>The option group you are trying to create already exists.</p>
 *
 * @throws {@link OptionGroupQuotaExceededFault} (client fault)
 *  <p>The quota of 20 option groups was exceeded for this Amazon Web Services account.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 * @public
 * @example To Create an Amazon RDS option group
 * ```javascript
 * // The following example creates a new Amazon RDS option group for Oracle MySQL version 8,0 named MyOptionGroup.
 * const input = {
 *   "EngineName": "mysql",
 *   "MajorEngineVersion": "8.0",
 *   "OptionGroupDescription": "MySQL 8.0 option group",
 *   "OptionGroupName": "MyOptionGroup"
 * };
 * const command = new CreateOptionGroupCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "OptionGroup": {
 *     "AllowsVpcAndNonVpcInstanceMemberships": true,
 *     "EngineName": "mysql",
 *     "MajorEngineVersion": "8.0",
 *     "OptionGroupArn": "arn:aws:rds:us-east-1:123456789012:og:myoptiongroup",
 *     "OptionGroupDescription": "MySQL 8.0 option group",
 *     "OptionGroupName": "myoptiongroup",
 *     "Options": []
 *   }
 * }
 * *\/
 * // example id: to-create-an-amazon-rds-option-group-1679958217590
 * ```
 *
 */
export class CreateOptionGroupCommand extends $Command
  .classBuilder<
    CreateOptionGroupCommandInput,
    CreateOptionGroupCommandOutput,
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
  .s("AmazonRDSv19", "CreateOptionGroup", {})
  .n("RDSClient", "CreateOptionGroupCommand")
  .f(void 0, void 0)
  .ser(se_CreateOptionGroupCommand)
  .de(de_CreateOptionGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateOptionGroupMessage;
      output: CreateOptionGroupResult;
    };
    sdk: {
      input: CreateOptionGroupCommandInput;
      output: CreateOptionGroupCommandOutput;
    };
  };
}
