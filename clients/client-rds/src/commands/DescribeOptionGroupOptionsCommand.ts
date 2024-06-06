// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeOptionGroupOptionsMessage, OptionGroupOptionsMessage } from "../models/models_1";
import { de_DescribeOptionGroupOptionsCommand, se_DescribeOptionGroupOptionsCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeOptionGroupOptionsCommand}.
 */
export interface DescribeOptionGroupOptionsCommandInput extends DescribeOptionGroupOptionsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeOptionGroupOptionsCommand}.
 */
export interface DescribeOptionGroupOptionsCommandOutput extends OptionGroupOptionsMessage, __MetadataBearer {}

/**
 * <p>Describes all available options for the specified engine.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeOptionGroupOptionsCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeOptionGroupOptionsCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // DescribeOptionGroupOptionsMessage
 *   EngineName: "STRING_VALUE", // required
 *   MajorEngineVersion: "STRING_VALUE",
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeOptionGroupOptionsCommand(input);
 * const response = await client.send(command);
 * // { // OptionGroupOptionsMessage
 * //   OptionGroupOptions: [ // OptionGroupOptionsList
 * //     { // OptionGroupOption
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       EngineName: "STRING_VALUE",
 * //       MajorEngineVersion: "STRING_VALUE",
 * //       MinimumRequiredMinorEngineVersion: "STRING_VALUE",
 * //       PortRequired: true || false,
 * //       DefaultPort: Number("int"),
 * //       OptionsDependedOn: [ // OptionsDependedOn
 * //         "STRING_VALUE",
 * //       ],
 * //       OptionsConflictsWith: [ // OptionsConflictsWith
 * //         "STRING_VALUE",
 * //       ],
 * //       Persistent: true || false,
 * //       Permanent: true || false,
 * //       RequiresAutoMinorEngineVersionUpgrade: true || false,
 * //       VpcOnly: true || false,
 * //       SupportsOptionVersionDowngrade: true || false,
 * //       OptionGroupOptionSettings: [ // OptionGroupOptionSettingsList
 * //         { // OptionGroupOptionSetting
 * //           SettingName: "STRING_VALUE",
 * //           SettingDescription: "STRING_VALUE",
 * //           DefaultValue: "STRING_VALUE",
 * //           ApplyType: "STRING_VALUE",
 * //           AllowedValues: "STRING_VALUE",
 * //           IsModifiable: true || false,
 * //           IsRequired: true || false,
 * //           MinimumEngineVersionPerAllowedValue: [ // MinimumEngineVersionPerAllowedValueList
 * //             { // MinimumEngineVersionPerAllowedValue
 * //               AllowedValue: "STRING_VALUE",
 * //               MinimumEngineVersion: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       OptionGroupOptionVersions: [ // OptionGroupOptionVersionsList
 * //         { // OptionVersion
 * //           Version: "STRING_VALUE",
 * //           IsDefault: true || false,
 * //         },
 * //       ],
 * //       CopyableCrossAccount: true || false,
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeOptionGroupOptionsCommandInput - {@link DescribeOptionGroupOptionsCommandInput}
 * @returns {@link DescribeOptionGroupOptionsCommandOutput}
 * @see {@link DescribeOptionGroupOptionsCommandInput} for command's `input` shape.
 * @see {@link DescribeOptionGroupOptionsCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 * @public
 * @example To describe all available options
 * ```javascript
 * // The following example lists the options for an RDS for MySQL version 8.0 DB instance.
 * const input = {
 *   "EngineName": "mysql",
 *   "MajorEngineVersion": "8.0"
 * };
 * const command = new DescribeOptionGroupOptionsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "OptionGroupOptions": [
 *     {
 *       "Description": "MariaDB Audit Plugin",
 *       "EngineName": "mysql",
 *       "MajorEngineVersion": "8.0",
 *       "MinimumRequiredMinorEngineVersion": "25",
 *       "Name": "MARIADB_AUDIT_PLUGIN",
 *       "OptionGroupOptionSettings": [
 *         {
 *           "ApplyType": "DYNAMIC",
 *           "IsModifiable": true,
 *           "IsRequired": false,
 *           "MinimumEngineVersionPerAllowedValue": [],
 *           "SettingDescription": "Include specified users",
 *           "SettingName": "SERVER_AUDIT_INCL_USERS"
 *         },
 *         {
 *           "ApplyType": "DYNAMIC",
 *           "IsModifiable": true,
 *           "IsRequired": false,
 *           "MinimumEngineVersionPerAllowedValue": [],
 *           "SettingDescription": "Exclude specified users",
 *           "SettingName": "SERVER_AUDIT_EXCL_USERS"
 *         }
 *       ],
 *       "OptionsConflictsWith": [],
 *       "OptionsDependedOn": [],
 *       "Permanent": false,
 *       "Persistent": false,
 *       "PortRequired": false,
 *       "RequiresAutoMinorEngineVersionUpgrade": false,
 *       "VpcOnly": false
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-describe-all-available-options-1680286049492
 * ```
 *
 */
export class DescribeOptionGroupOptionsCommand extends $Command
  .classBuilder<
    DescribeOptionGroupOptionsCommandInput,
    DescribeOptionGroupOptionsCommandOutput,
    RDSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonRDSv19", "DescribeOptionGroupOptions", {})
  .n("RDSClient", "DescribeOptionGroupOptionsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeOptionGroupOptionsCommand)
  .de(de_DescribeOptionGroupOptionsCommand)
  .build() {}
