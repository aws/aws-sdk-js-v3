// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeOptionGroupsMessage, OptionGroups } from "../models/models_1";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DescribeOptionGroups } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeOptionGroupsCommand}.
 */
export interface DescribeOptionGroupsCommandInput extends DescribeOptionGroupsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeOptionGroupsCommand}.
 */
export interface DescribeOptionGroupsCommandOutput extends OptionGroups, __MetadataBearer {}

/**
 * <p>Describes the available option groups.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeOptionGroupsCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeOptionGroupsCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
 * const input = { // DescribeOptionGroupsMessage
 *   OptionGroupName: "STRING_VALUE",
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   Marker: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 *   EngineName: "STRING_VALUE",
 *   MajorEngineVersion: "STRING_VALUE",
 * };
 * const command = new DescribeOptionGroupsCommand(input);
 * const response = await client.send(command);
 * // { // OptionGroups
 * //   OptionGroupsList: [ // OptionGroupsList
 * //     { // OptionGroup
 * //       OptionGroupName: "STRING_VALUE",
 * //       OptionGroupDescription: "STRING_VALUE",
 * //       EngineName: "STRING_VALUE",
 * //       MajorEngineVersion: "STRING_VALUE",
 * //       Options: [ // OptionsList
 * //         { // Option
 * //           OptionName: "STRING_VALUE",
 * //           OptionDescription: "STRING_VALUE",
 * //           Persistent: true || false,
 * //           Permanent: true || false,
 * //           Port: Number("int"),
 * //           OptionVersion: "STRING_VALUE",
 * //           OptionSettings: [ // OptionSettingConfigurationList
 * //             { // OptionSetting
 * //               Name: "STRING_VALUE",
 * //               Value: "STRING_VALUE",
 * //               DefaultValue: "STRING_VALUE",
 * //               Description: "STRING_VALUE",
 * //               ApplyType: "STRING_VALUE",
 * //               DataType: "STRING_VALUE",
 * //               AllowedValues: "STRING_VALUE",
 * //               IsModifiable: true || false,
 * //               IsCollection: true || false,
 * //             },
 * //           ],
 * //           DBSecurityGroupMemberships: [ // DBSecurityGroupMembershipList
 * //             { // DBSecurityGroupMembership
 * //               DBSecurityGroupName: "STRING_VALUE",
 * //               Status: "STRING_VALUE",
 * //             },
 * //           ],
 * //           VpcSecurityGroupMemberships: [ // VpcSecurityGroupMembershipList
 * //             { // VpcSecurityGroupMembership
 * //               VpcSecurityGroupId: "STRING_VALUE",
 * //               Status: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       AllowsVpcAndNonVpcInstanceMemberships: true || false,
 * //       VpcId: "STRING_VALUE",
 * //       OptionGroupArn: "STRING_VALUE",
 * //       SourceOptionGroup: "STRING_VALUE",
 * //       SourceAccountId: "STRING_VALUE",
 * //       CopyTimestamp: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeOptionGroupsCommandInput - {@link DescribeOptionGroupsCommandInput}
 * @returns {@link DescribeOptionGroupsCommandOutput}
 * @see {@link DescribeOptionGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeOptionGroupsCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link OptionGroupNotFoundFault} (client fault)
 *  <p>The specified option group could not be found.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 *
 * @example To describe the available option groups
 * ```javascript
 * // The following example lists the options groups for an Oracle Database 19c instance.
 * const input = {
 *   EngineName: "oracle-ee",
 *   MajorEngineVersion: "19"
 * };
 * const command = new DescribeOptionGroupsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   OptionGroupsList: [
 *     {
 *       AllowsVpcAndNonVpcInstanceMemberships: true,
 *       EngineName: "oracle-ee",
 *       MajorEngineVersion: "19",
 *       OptionGroupArn: "arn:aws:rds:us-west-1:111122223333:og:default:oracle-ee-19",
 *       OptionGroupDescription: "Default option group for oracle-ee 19",
 *       OptionGroupName: "default:oracle-ee-19",
 *       Options:       []
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeOptionGroupsCommand extends $Command
  .classBuilder<
    DescribeOptionGroupsCommandInput,
    DescribeOptionGroupsCommandOutput,
    RDSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonRDSv19", "DescribeOptionGroups", {})
  .n("RDSClient", "DescribeOptionGroupsCommand")
  .sc(DescribeOptionGroups)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeOptionGroupsMessage;
      output: OptionGroups;
    };
    sdk: {
      input: DescribeOptionGroupsCommandInput;
      output: DescribeOptionGroupsCommandOutput;
    };
  };
}
