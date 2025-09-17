// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeDataSetRequest,
  DescribeDataSetResponse,
  DescribeDataSetResponseFilterSensitiveLog,
} from "../models/models_4";
import { de_DescribeDataSetCommand, se_DescribeDataSetCommand } from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeDataSetCommand}.
 */
export interface DescribeDataSetCommandInput extends DescribeDataSetRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDataSetCommand}.
 */
export interface DescribeDataSetCommandOutput extends DescribeDataSetResponse, __MetadataBearer {}

/**
 * <p>Describes a dataset. This operation doesn't support datasets that include uploaded files as a source.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeDataSetCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeDataSetCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // DescribeDataSetRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   DataSetId: "STRING_VALUE", // required
 * };
 * const command = new DescribeDataSetCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDataSetResponse
 * //   DataSet: { // DataSet
 * //     Arn: "STRING_VALUE",
 * //     DataSetId: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     CreatedTime: new Date("TIMESTAMP"),
 * //     LastUpdatedTime: new Date("TIMESTAMP"),
 * //     PhysicalTableMap: { // PhysicalTableMap
 * //       "<keys>": { // PhysicalTable Union: only one key present
 * //         RelationalTable: { // RelationalTable
 * //           DataSourceArn: "STRING_VALUE", // required
 * //           Catalog: "STRING_VALUE",
 * //           Schema: "STRING_VALUE",
 * //           Name: "STRING_VALUE", // required
 * //           InputColumns: [ // InputColumnList // required
 * //             { // InputColumn
 * //               Name: "STRING_VALUE", // required
 * //               Type: "STRING" || "INTEGER" || "DECIMAL" || "DATETIME" || "BIT" || "BOOLEAN" || "JSON", // required
 * //               SubType: "FLOAT" || "FIXED",
 * //             },
 * //           ],
 * //         },
 * //         CustomSql: { // CustomSql
 * //           DataSourceArn: "STRING_VALUE", // required
 * //           Name: "STRING_VALUE", // required
 * //           SqlQuery: "STRING_VALUE", // required
 * //           Columns: [
 * //             {
 * //               Name: "STRING_VALUE", // required
 * //               Type: "STRING" || "INTEGER" || "DECIMAL" || "DATETIME" || "BIT" || "BOOLEAN" || "JSON", // required
 * //               SubType: "FLOAT" || "FIXED",
 * //             },
 * //           ],
 * //         },
 * //         S3Source: { // S3Source
 * //           DataSourceArn: "STRING_VALUE", // required
 * //           UploadSettings: { // UploadSettings
 * //             Format: "CSV" || "TSV" || "CLF" || "ELF" || "XLSX" || "JSON",
 * //             StartFromRow: Number("int"),
 * //             ContainsHeader: true || false,
 * //             TextQualifier: "DOUBLE_QUOTE" || "SINGLE_QUOTE",
 * //             Delimiter: "STRING_VALUE",
 * //           },
 * //           InputColumns: [ // required
 * //             {
 * //               Name: "STRING_VALUE", // required
 * //               Type: "STRING" || "INTEGER" || "DECIMAL" || "DATETIME" || "BIT" || "BOOLEAN" || "JSON", // required
 * //               SubType: "FLOAT" || "FIXED",
 * //             },
 * //           ],
 * //         },
 * //       },
 * //     },
 * //     LogicalTableMap: { // LogicalTableMap
 * //       "<keys>": { // LogicalTable
 * //         Alias: "STRING_VALUE", // required
 * //         DataTransforms: [ // TransformOperationList
 * //           { // TransformOperation Union: only one key present
 * //             ProjectOperation: { // ProjectOperation
 * //               ProjectedColumns: [ // ProjectedColumnList // required
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //             FilterOperation: { // FilterOperation
 * //               ConditionExpression: "STRING_VALUE", // required
 * //             },
 * //             CreateColumnsOperation: { // CreateColumnsOperation
 * //               Columns: [ // CalculatedColumnList // required
 * //                 { // CalculatedColumn
 * //                   ColumnName: "STRING_VALUE", // required
 * //                   ColumnId: "STRING_VALUE", // required
 * //                   Expression: "STRING_VALUE", // required
 * //                 },
 * //               ],
 * //             },
 * //             RenameColumnOperation: { // RenameColumnOperation
 * //               ColumnName: "STRING_VALUE", // required
 * //               NewColumnName: "STRING_VALUE", // required
 * //             },
 * //             CastColumnTypeOperation: { // CastColumnTypeOperation
 * //               ColumnName: "STRING_VALUE", // required
 * //               NewColumnType: "STRING" || "INTEGER" || "DECIMAL" || "DATETIME", // required
 * //               SubType: "FLOAT" || "FIXED",
 * //               Format: "STRING_VALUE",
 * //             },
 * //             TagColumnOperation: { // TagColumnOperation
 * //               ColumnName: "STRING_VALUE", // required
 * //               Tags: [ // ColumnTagList // required
 * //                 { // ColumnTag
 * //                   ColumnGeographicRole: "COUNTRY" || "STATE" || "COUNTY" || "CITY" || "POSTCODE" || "LONGITUDE" || "LATITUDE",
 * //                   ColumnDescription: { // ColumnDescription
 * //                     Text: "STRING_VALUE",
 * //                   },
 * //                 },
 * //               ],
 * //             },
 * //             UntagColumnOperation: { // UntagColumnOperation
 * //               ColumnName: "STRING_VALUE", // required
 * //               TagNames: [ // ColumnTagNames // required
 * //                 "COLUMN_GEOGRAPHIC_ROLE" || "COLUMN_DESCRIPTION",
 * //               ],
 * //             },
 * //             OverrideDatasetParameterOperation: { // OverrideDatasetParameterOperation
 * //               ParameterName: "STRING_VALUE", // required
 * //               NewParameterName: "STRING_VALUE",
 * //               NewDefaultValues: { // NewDefaultValues
 * //                 StringStaticValues: [ // StringDatasetParameterValueList
 * //                   "STRING_VALUE",
 * //                 ],
 * //                 DecimalStaticValues: [ // DecimalDatasetParameterValueList
 * //                   Number("double"),
 * //                 ],
 * //                 DateTimeStaticValues: [ // DateTimeDatasetParameterValueList
 * //                   new Date("TIMESTAMP"),
 * //                 ],
 * //                 IntegerStaticValues: [ // IntegerDatasetParameterValueList
 * //                   Number("long"),
 * //                 ],
 * //               },
 * //             },
 * //           },
 * //         ],
 * //         Source: { // LogicalTableSource
 * //           JoinInstruction: { // JoinInstruction
 * //             LeftOperand: "STRING_VALUE", // required
 * //             RightOperand: "STRING_VALUE", // required
 * //             LeftJoinKeyProperties: { // JoinKeyProperties
 * //               UniqueKey: true || false,
 * //             },
 * //             RightJoinKeyProperties: {
 * //               UniqueKey: true || false,
 * //             },
 * //             Type: "INNER" || "OUTER" || "LEFT" || "RIGHT", // required
 * //             OnClause: "STRING_VALUE", // required
 * //           },
 * //           PhysicalTableId: "STRING_VALUE",
 * //           DataSetArn: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //     OutputColumns: [ // OutputColumnList
 * //       { // OutputColumn
 * //         Name: "STRING_VALUE",
 * //         Description: "STRING_VALUE",
 * //         Type: "STRING" || "INTEGER" || "DECIMAL" || "DATETIME",
 * //         SubType: "FLOAT" || "FIXED",
 * //       },
 * //     ],
 * //     ImportMode: "SPICE" || "DIRECT_QUERY",
 * //     ConsumedSpiceCapacityInBytes: Number("long"),
 * //     ColumnGroups: [ // ColumnGroupList
 * //       { // ColumnGroup
 * //         GeoSpatialColumnGroup: { // GeoSpatialColumnGroup
 * //           Name: "STRING_VALUE", // required
 * //           CountryCode: "US",
 * //           Columns: [ // ColumnList // required
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //     ],
 * //     FieldFolders: { // FieldFolderMap
 * //       "<keys>": { // FieldFolder
 * //         description: "STRING_VALUE",
 * //         columns: [ // FolderColumnList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //     RowLevelPermissionDataSet: { // RowLevelPermissionDataSet
 * //       Namespace: "STRING_VALUE",
 * //       Arn: "STRING_VALUE", // required
 * //       PermissionPolicy: "GRANT_ACCESS" || "DENY_ACCESS", // required
 * //       FormatVersion: "VERSION_1" || "VERSION_2",
 * //       Status: "ENABLED" || "DISABLED",
 * //     },
 * //     RowLevelPermissionTagConfiguration: { // RowLevelPermissionTagConfiguration
 * //       Status: "ENABLED" || "DISABLED",
 * //       TagRules: [ // RowLevelPermissionTagRuleList // required
 * //         { // RowLevelPermissionTagRule
 * //           TagKey: "STRING_VALUE", // required
 * //           ColumnName: "STRING_VALUE", // required
 * //           TagMultiValueDelimiter: "STRING_VALUE",
 * //           MatchAllValue: "STRING_VALUE",
 * //         },
 * //       ],
 * //       TagRuleConfigurations: [ // RowLevelPermissionTagRuleConfigurationList
 * //         [ // RowLevelPermissionTagRuleConfiguration
 * //           "STRING_VALUE",
 * //         ],
 * //       ],
 * //     },
 * //     ColumnLevelPermissionRules: [ // ColumnLevelPermissionRuleList
 * //       { // ColumnLevelPermissionRule
 * //         Principals: [ // PrincipalList
 * //           "STRING_VALUE",
 * //         ],
 * //         ColumnNames: [ // ColumnNameList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     ],
 * //     DataSetUsageConfiguration: { // DataSetUsageConfiguration
 * //       DisableUseAsDirectQuerySource: true || false,
 * //       DisableUseAsImportedSource: true || false,
 * //     },
 * //     DatasetParameters: [ // DatasetParameterList
 * //       { // DatasetParameter
 * //         StringDatasetParameter: { // StringDatasetParameter
 * //           Id: "STRING_VALUE", // required
 * //           Name: "STRING_VALUE", // required
 * //           ValueType: "MULTI_VALUED" || "SINGLE_VALUED", // required
 * //           DefaultValues: { // StringDatasetParameterDefaultValues
 * //             StaticValues: [
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         },
 * //         DecimalDatasetParameter: { // DecimalDatasetParameter
 * //           Id: "STRING_VALUE", // required
 * //           Name: "STRING_VALUE", // required
 * //           ValueType: "MULTI_VALUED" || "SINGLE_VALUED", // required
 * //           DefaultValues: { // DecimalDatasetParameterDefaultValues
 * //             StaticValues: [
 * //               Number("double"),
 * //             ],
 * //           },
 * //         },
 * //         IntegerDatasetParameter: { // IntegerDatasetParameter
 * //           Id: "STRING_VALUE", // required
 * //           Name: "STRING_VALUE", // required
 * //           ValueType: "MULTI_VALUED" || "SINGLE_VALUED", // required
 * //           DefaultValues: { // IntegerDatasetParameterDefaultValues
 * //             StaticValues: [
 * //               Number("long"),
 * //             ],
 * //           },
 * //         },
 * //         DateTimeDatasetParameter: { // DateTimeDatasetParameter
 * //           Id: "STRING_VALUE", // required
 * //           Name: "STRING_VALUE", // required
 * //           ValueType: "MULTI_VALUED" || "SINGLE_VALUED", // required
 * //           TimeGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 * //           DefaultValues: { // DateTimeDatasetParameterDefaultValues
 * //             StaticValues: [
 * //               new Date("TIMESTAMP"),
 * //             ],
 * //           },
 * //         },
 * //       },
 * //     ],
 * //     PerformanceConfiguration: { // PerformanceConfiguration
 * //       UniqueKeys: [ // UniqueKeyList
 * //         { // UniqueKey
 * //           ColumnNames: [ // UniqueKeyColumnNameList // required
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //     UseAs: "RLS_RULES",
 * //   },
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param DescribeDataSetCommandInput - {@link DescribeDataSetCommandInput}
 * @returns {@link DescribeDataSetCommandOutput}
 * @see {@link DescribeDataSetCommandInput} for command's `input` shape.
 * @see {@link DescribeDataSetCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon QuickSight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 *
 * @public
 */
export class DescribeDataSetCommand extends $Command
  .classBuilder<
    DescribeDataSetCommandInput,
    DescribeDataSetCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("QuickSight_20180401", "DescribeDataSet", {})
  .n("QuickSightClient", "DescribeDataSetCommand")
  .f(void 0, DescribeDataSetResponseFilterSensitiveLog)
  .ser(se_DescribeDataSetCommand)
  .de(de_DescribeDataSetCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDataSetRequest;
      output: DescribeDataSetResponse;
    };
    sdk: {
      input: DescribeDataSetCommandInput;
      output: DescribeDataSetCommandOutput;
    };
  };
}
