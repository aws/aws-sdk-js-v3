// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  CopyOptionGroupMessage,
  CopyOptionGroupResult,
  CopyOptionGroupResultFilterSensitiveLog,
} from "../models/models_0";
import { de_CopyOptionGroupCommand, se_CopyOptionGroupCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CopyOptionGroupCommand}.
 */
export interface CopyOptionGroupCommandInput extends CopyOptionGroupMessage {}
/**
 * @public
 *
 * The output of {@link CopyOptionGroupCommand}.
 */
export interface CopyOptionGroupCommandOutput extends CopyOptionGroupResult, __MetadataBearer {}

/**
 * <p>Copies the specified option group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, CopyOptionGroupCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, CopyOptionGroupCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
 * const input = { // CopyOptionGroupMessage
 *   SourceOptionGroupIdentifier: "STRING_VALUE", // required
 *   TargetOptionGroupIdentifier: "STRING_VALUE", // required
 *   TargetOptionGroupDescription: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CopyOptionGroupCommand(input);
 * const response = await client.send(command);
 * // { // CopyOptionGroupResult
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
 * @param CopyOptionGroupCommandInput - {@link CopyOptionGroupCommandInput}
 * @returns {@link CopyOptionGroupCommandOutput}
 * @see {@link CopyOptionGroupCommandInput} for command's `input` shape.
 * @see {@link CopyOptionGroupCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link OptionGroupAlreadyExistsFault} (client fault)
 *  <p>The option group you are trying to create already exists.</p>
 *
 * @throws {@link OptionGroupNotFoundFault} (client fault)
 *  <p>The specified option group could not be found.</p>
 *
 * @throws {@link OptionGroupQuotaExceededFault} (client fault)
 *  <p>The quota of 20 option groups was exceeded for this Amazon Web Services account.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 *
 * @example To copy an option group
 * ```javascript
 * // The following example makes a copy of an option group.
 * const input = {
 *   SourceOptionGroupIdentifier: "myoptiongroup",
 *   TargetOptionGroupDescription: "My option group copy",
 *   TargetOptionGroupIdentifier: "new-option-group"
 * };
 * const command = new CopyOptionGroupCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   OptionGroup: {
 *     AllowsVpcAndNonVpcInstanceMemberships: true,
 *     EngineName: "oracle-ee",
 *     MajorEngineVersion: "11.2",
 *     OptionGroupArn: "arn:aws:rds:us-east-1:123456789012:og:new-option-group",
 *     OptionGroupDescription: "My option group copy",
 *     OptionGroupName: "new-option-group",
 *     Options:     []
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CopyOptionGroupCommand extends $Command
  .classBuilder<
    CopyOptionGroupCommandInput,
    CopyOptionGroupCommandOutput,
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
  .s("AmazonRDSv19", "CopyOptionGroup", {})
  .n("RDSClient", "CopyOptionGroupCommand")
  .f(void 0, CopyOptionGroupResultFilterSensitiveLog)
  .ser(se_CopyOptionGroupCommand)
  .de(de_CopyOptionGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CopyOptionGroupMessage;
      output: CopyOptionGroupResult;
    };
    sdk: {
      input: CopyOptionGroupCommandInput;
      output: CopyOptionGroupCommandOutput;
    };
  };
}
