// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateDataSetRequest, UpdateDataSetResponse } from "../models/models_4";
import type { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { UpdateDataSet } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateDataSetCommand}.
 */
export interface UpdateDataSetCommandInput extends UpdateDataSetRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDataSetCommand}.
 */
export interface UpdateDataSetCommandOutput extends UpdateDataSetResponse, __MetadataBearer {}

/**
 * <p>Updates a dataset. This operation doesn't support datasets that include uploaded files
 * 			as a source. Partial updates are not supported by this operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateDataSetCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateDataSetCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // UpdateDataSetRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   DataSetId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   PhysicalTableMap: { // PhysicalTableMap // required
 *     "<keys>": { // PhysicalTable Union: only one key present
 *       RelationalTable: { // RelationalTable
 *         DataSourceArn: "STRING_VALUE", // required
 *         Catalog: "STRING_VALUE",
 *         Schema: "STRING_VALUE",
 *         Name: "STRING_VALUE", // required
 *         InputColumns: [ // InputColumnList // required
 *           { // InputColumn
 *             Name: "STRING_VALUE", // required
 *             Id: "STRING_VALUE",
 *             Type: "STRING" || "INTEGER" || "DECIMAL" || "DATETIME" || "BIT" || "BOOLEAN" || "JSON", // required
 *             SubType: "FLOAT" || "FIXED",
 *           },
 *         ],
 *       },
 *       CustomSql: { // CustomSql
 *         DataSourceArn: "STRING_VALUE", // required
 *         Name: "STRING_VALUE", // required
 *         SqlQuery: "STRING_VALUE", // required
 *         Columns: [
 *           {
 *             Name: "STRING_VALUE", // required
 *             Id: "STRING_VALUE",
 *             Type: "STRING" || "INTEGER" || "DECIMAL" || "DATETIME" || "BIT" || "BOOLEAN" || "JSON", // required
 *             SubType: "FLOAT" || "FIXED",
 *           },
 *         ],
 *       },
 *       S3Source: { // S3Source
 *         DataSourceArn: "STRING_VALUE", // required
 *         UploadSettings: { // UploadSettings
 *           Format: "CSV" || "TSV" || "CLF" || "ELF" || "XLSX" || "JSON",
 *           StartFromRow: Number("int"),
 *           ContainsHeader: true || false,
 *           TextQualifier: "DOUBLE_QUOTE" || "SINGLE_QUOTE",
 *           Delimiter: "STRING_VALUE",
 *           CustomCellAddressRange: "STRING_VALUE",
 *         },
 *         InputColumns: [ // required
 *           {
 *             Name: "STRING_VALUE", // required
 *             Id: "STRING_VALUE",
 *             Type: "STRING" || "INTEGER" || "DECIMAL" || "DATETIME" || "BIT" || "BOOLEAN" || "JSON", // required
 *             SubType: "FLOAT" || "FIXED",
 *           },
 *         ],
 *       },
 *       SaaSTable: { // SaaSTable
 *         DataSourceArn: "STRING_VALUE", // required
 *         TablePath: [ // TablePathElementList // required
 *           { // TablePathElement
 *             Name: "STRING_VALUE",
 *             Id: "STRING_VALUE",
 *           },
 *         ],
 *         InputColumns: [ // required
 *           {
 *             Name: "STRING_VALUE", // required
 *             Id: "STRING_VALUE",
 *             Type: "STRING" || "INTEGER" || "DECIMAL" || "DATETIME" || "BIT" || "BOOLEAN" || "JSON", // required
 *             SubType: "FLOAT" || "FIXED",
 *           },
 *         ],
 *       },
 *     },
 *   },
 *   LogicalTableMap: { // LogicalTableMap
 *     "<keys>": { // LogicalTable
 *       Alias: "STRING_VALUE", // required
 *       DataTransforms: [ // TransformOperationList
 *         { // TransformOperation Union: only one key present
 *           ProjectOperation: { // ProjectOperation
 *             Alias: "STRING_VALUE",
 *             Source: { // TransformOperationSource
 *               TransformOperationId: "STRING_VALUE", // required
 *               ColumnIdMappings: [ // DataSetColumnIdMappingList
 *                 { // DataSetColumnIdMapping
 *                   SourceColumnId: "STRING_VALUE", // required
 *                   TargetColumnId: "STRING_VALUE", // required
 *                 },
 *               ],
 *             },
 *             ProjectedColumns: [ // ProjectedColumnNameList // required
 *               "STRING_VALUE",
 *             ],
 *           },
 *           FilterOperation: { // FilterOperation
 *             ConditionExpression: "STRING_VALUE",
 *             StringFilterCondition: { // DataSetStringFilterCondition
 *               ColumnName: "STRING_VALUE",
 *               ComparisonFilterCondition: { // DataSetStringComparisonFilterCondition
 *                 Operator: "EQUALS" || "DOES_NOT_EQUAL" || "CONTAINS" || "DOES_NOT_CONTAIN" || "STARTS_WITH" || "ENDS_WITH", // required
 *                 Value: { // DataSetStringFilterValue
 *                   StaticValue: "STRING_VALUE",
 *                 },
 *               },
 *               ListFilterCondition: { // DataSetStringListFilterCondition
 *                 Operator: "INCLUDE" || "EXCLUDE", // required
 *                 Values: { // DataSetStringListFilterValue
 *                   StaticValues: [ // DataSetStringFilterStaticValueList
 *                     "STRING_VALUE",
 *                   ],
 *                 },
 *               },
 *             },
 *             NumericFilterCondition: { // DataSetNumericFilterCondition
 *               ColumnName: "STRING_VALUE",
 *               ComparisonFilterCondition: { // DataSetNumericComparisonFilterCondition
 *                 Operator: "EQUALS" || "DOES_NOT_EQUAL" || "GREATER_THAN" || "GREATER_THAN_OR_EQUALS_TO" || "LESS_THAN" || "LESS_THAN_OR_EQUALS_TO", // required
 *                 Value: { // DataSetNumericFilterValue
 *                   StaticValue: Number("double"),
 *                 },
 *               },
 *               RangeFilterCondition: { // DataSetNumericRangeFilterCondition
 *                 RangeMinimum: {
 *                   StaticValue: Number("double"),
 *                 },
 *                 RangeMaximum: {
 *                   StaticValue: Number("double"),
 *                 },
 *                 IncludeMinimum: true || false,
 *                 IncludeMaximum: true || false,
 *               },
 *             },
 *             DateFilterCondition: { // DataSetDateFilterCondition
 *               ColumnName: "STRING_VALUE",
 *               ComparisonFilterCondition: { // DataSetDateComparisonFilterCondition
 *                 Operator: "BEFORE" || "BEFORE_OR_EQUALS_TO" || "AFTER" || "AFTER_OR_EQUALS_TO", // required
 *                 Value: { // DataSetDateFilterValue
 *                   StaticValue: new Date("TIMESTAMP"),
 *                 },
 *               },
 *               RangeFilterCondition: { // DataSetDateRangeFilterCondition
 *                 RangeMinimum: {
 *                   StaticValue: new Date("TIMESTAMP"),
 *                 },
 *                 RangeMaximum: {
 *                   StaticValue: new Date("TIMESTAMP"),
 *                 },
 *                 IncludeMinimum: true || false,
 *                 IncludeMaximum: true || false,
 *               },
 *             },
 *           },
 *           CreateColumnsOperation: { // CreateColumnsOperation
 *             Alias: "STRING_VALUE",
 *             Source: {
 *               TransformOperationId: "STRING_VALUE", // required
 *               ColumnIdMappings: [
 *                 {
 *                   SourceColumnId: "STRING_VALUE", // required
 *                   TargetColumnId: "STRING_VALUE", // required
 *                 },
 *               ],
 *             },
 *             Columns: [ // CalculatedColumnList // required
 *               { // CalculatedColumn
 *                 ColumnName: "STRING_VALUE", // required
 *                 ColumnId: "STRING_VALUE", // required
 *                 Expression: "STRING_VALUE", // required
 *               },
 *             ],
 *           },
 *           RenameColumnOperation: { // RenameColumnOperation
 *             ColumnName: "STRING_VALUE", // required
 *             NewColumnName: "STRING_VALUE", // required
 *           },
 *           CastColumnTypeOperation: { // CastColumnTypeOperation
 *             ColumnName: "STRING_VALUE", // required
 *             NewColumnType: "STRING" || "INTEGER" || "DECIMAL" || "DATETIME", // required
 *             SubType: "FLOAT" || "FIXED",
 *             Format: "STRING_VALUE",
 *           },
 *           TagColumnOperation: { // TagColumnOperation
 *             ColumnName: "STRING_VALUE", // required
 *             Tags: [ // ColumnTagList // required
 *               { // ColumnTag
 *                 ColumnGeographicRole: "COUNTRY" || "STATE" || "COUNTY" || "CITY" || "POSTCODE" || "LONGITUDE" || "LATITUDE",
 *                 ColumnDescription: { // ColumnDescription
 *                   Text: "STRING_VALUE",
 *                 },
 *               },
 *             ],
 *           },
 *           UntagColumnOperation: { // UntagColumnOperation
 *             ColumnName: "STRING_VALUE", // required
 *             TagNames: [ // ColumnTagNames // required
 *               "COLUMN_GEOGRAPHIC_ROLE" || "COLUMN_DESCRIPTION",
 *             ],
 *           },
 *           OverrideDatasetParameterOperation: { // OverrideDatasetParameterOperation
 *             ParameterName: "STRING_VALUE", // required
 *             NewParameterName: "STRING_VALUE",
 *             NewDefaultValues: { // NewDefaultValues
 *               StringStaticValues: [ // StringDatasetParameterValueList
 *                 "STRING_VALUE",
 *               ],
 *               DecimalStaticValues: [ // DecimalDatasetParameterValueList
 *                 Number("double"),
 *               ],
 *               DateTimeStaticValues: [ // DateTimeDatasetParameterValueList
 *                 new Date("TIMESTAMP"),
 *               ],
 *               IntegerStaticValues: [ // IntegerDatasetParameterValueList
 *                 Number("long"),
 *               ],
 *             },
 *           },
 *         },
 *       ],
 *       Source: { // LogicalTableSource
 *         JoinInstruction: { // JoinInstruction
 *           LeftOperand: "STRING_VALUE", // required
 *           RightOperand: "STRING_VALUE", // required
 *           LeftJoinKeyProperties: { // JoinKeyProperties
 *             UniqueKey: true || false,
 *           },
 *           RightJoinKeyProperties: {
 *             UniqueKey: true || false,
 *           },
 *           Type: "INNER" || "OUTER" || "LEFT" || "RIGHT", // required
 *           OnClause: "STRING_VALUE", // required
 *         },
 *         PhysicalTableId: "STRING_VALUE",
 *         DataSetArn: "STRING_VALUE",
 *       },
 *     },
 *   },
 *   ImportMode: "SPICE" || "DIRECT_QUERY", // required
 *   ColumnGroups: [ // ColumnGroupList
 *     { // ColumnGroup
 *       GeoSpatialColumnGroup: { // GeoSpatialColumnGroup
 *         Name: "STRING_VALUE", // required
 *         CountryCode: "US",
 *         Columns: [ // ColumnList // required
 *           "STRING_VALUE",
 *         ],
 *       },
 *     },
 *   ],
 *   FieldFolders: { // FieldFolderMap
 *     "<keys>": { // FieldFolder
 *       description: "STRING_VALUE",
 *       columns: [ // FolderColumnList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 *   RowLevelPermissionDataSet: { // RowLevelPermissionDataSet
 *     Namespace: "STRING_VALUE",
 *     Arn: "STRING_VALUE", // required
 *     PermissionPolicy: "GRANT_ACCESS" || "DENY_ACCESS", // required
 *     FormatVersion: "VERSION_1" || "VERSION_2",
 *     Status: "ENABLED" || "DISABLED",
 *   },
 *   RowLevelPermissionTagConfiguration: { // RowLevelPermissionTagConfiguration
 *     Status: "ENABLED" || "DISABLED",
 *     TagRules: [ // RowLevelPermissionTagRuleList // required
 *       { // RowLevelPermissionTagRule
 *         TagKey: "STRING_VALUE", // required
 *         ColumnName: "STRING_VALUE", // required
 *         TagMultiValueDelimiter: "STRING_VALUE",
 *         MatchAllValue: "STRING_VALUE",
 *       },
 *     ],
 *     TagRuleConfigurations: [ // RowLevelPermissionTagRuleConfigurationList
 *       [ // RowLevelPermissionTagRuleConfiguration
 *         "STRING_VALUE",
 *       ],
 *     ],
 *   },
 *   ColumnLevelPermissionRules: [ // ColumnLevelPermissionRuleList
 *     { // ColumnLevelPermissionRule
 *       Principals: [ // PrincipalList
 *         "STRING_VALUE",
 *       ],
 *       ColumnNames: [ // ColumnLevelPermissionRuleColumnNameList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   DataSetUsageConfiguration: { // DataSetUsageConfiguration
 *     DisableUseAsDirectQuerySource: true || false,
 *     DisableUseAsImportedSource: true || false,
 *   },
 *   DatasetParameters: [ // DatasetParameterList
 *     { // DatasetParameter
 *       StringDatasetParameter: { // StringDatasetParameter
 *         Id: "STRING_VALUE", // required
 *         Name: "STRING_VALUE", // required
 *         ValueType: "MULTI_VALUED" || "SINGLE_VALUED", // required
 *         DefaultValues: { // StringDatasetParameterDefaultValues
 *           StaticValues: [
 *             "STRING_VALUE",
 *           ],
 *         },
 *       },
 *       DecimalDatasetParameter: { // DecimalDatasetParameter
 *         Id: "STRING_VALUE", // required
 *         Name: "STRING_VALUE", // required
 *         ValueType: "MULTI_VALUED" || "SINGLE_VALUED", // required
 *         DefaultValues: { // DecimalDatasetParameterDefaultValues
 *           StaticValues: [
 *             Number("double"),
 *           ],
 *         },
 *       },
 *       IntegerDatasetParameter: { // IntegerDatasetParameter
 *         Id: "STRING_VALUE", // required
 *         Name: "STRING_VALUE", // required
 *         ValueType: "MULTI_VALUED" || "SINGLE_VALUED", // required
 *         DefaultValues: { // IntegerDatasetParameterDefaultValues
 *           StaticValues: [
 *             Number("long"),
 *           ],
 *         },
 *       },
 *       DateTimeDatasetParameter: { // DateTimeDatasetParameter
 *         Id: "STRING_VALUE", // required
 *         Name: "STRING_VALUE", // required
 *         ValueType: "MULTI_VALUED" || "SINGLE_VALUED", // required
 *         TimeGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *         DefaultValues: { // DateTimeDatasetParameterDefaultValues
 *           StaticValues: [
 *             new Date("TIMESTAMP"),
 *           ],
 *         },
 *       },
 *     },
 *   ],
 *   PerformanceConfiguration: { // PerformanceConfiguration
 *     UniqueKeys: [ // UniqueKeyList
 *       { // UniqueKey
 *         ColumnNames: [ // UniqueKeyColumnNameList // required
 *           "STRING_VALUE",
 *         ],
 *       },
 *     ],
 *   },
 *   DataPrepConfiguration: { // DataPrepConfiguration
 *     SourceTableMap: { // SourceTableMap // required
 *       "<keys>": { // SourceTable
 *         PhysicalTableId: "STRING_VALUE",
 *         DataSet: { // ParentDataSet
 *           DataSetArn: "STRING_VALUE", // required
 *           InputColumns: [ // required
 *             {
 *               Name: "STRING_VALUE", // required
 *               Id: "STRING_VALUE",
 *               Type: "STRING" || "INTEGER" || "DECIMAL" || "DATETIME" || "BIT" || "BOOLEAN" || "JSON", // required
 *               SubType: "FLOAT" || "FIXED",
 *             },
 *           ],
 *         },
 *       },
 *     },
 *     TransformStepMap: { // TransformStepMap // required
 *       "<keys>": { // TransformStep
 *         ImportTableStep: { // ImportTableOperation
 *           Alias: "STRING_VALUE", // required
 *           Source: { // ImportTableOperationSource
 *             SourceTableId: "STRING_VALUE", // required
 *             ColumnIdMappings: [
 *               {
 *                 SourceColumnId: "STRING_VALUE", // required
 *                 TargetColumnId: "STRING_VALUE", // required
 *               },
 *             ],
 *           },
 *         },
 *         ProjectStep: {
 *           Alias: "STRING_VALUE",
 *           Source: {
 *             TransformOperationId: "STRING_VALUE", // required
 *             ColumnIdMappings: [
 *               {
 *                 SourceColumnId: "STRING_VALUE", // required
 *                 TargetColumnId: "STRING_VALUE", // required
 *               },
 *             ],
 *           },
 *           ProjectedColumns: [ // required
 *             "STRING_VALUE",
 *           ],
 *         },
 *         FiltersStep: { // FiltersOperation
 *           Alias: "STRING_VALUE", // required
 *           Source: {
 *             TransformOperationId: "STRING_VALUE", // required
 *             ColumnIdMappings: [
 *               {
 *                 SourceColumnId: "STRING_VALUE", // required
 *                 TargetColumnId: "STRING_VALUE", // required
 *               },
 *             ],
 *           },
 *           FilterOperations: [ // FilterOperationList // required
 *             {
 *               ConditionExpression: "STRING_VALUE",
 *               StringFilterCondition: {
 *                 ColumnName: "STRING_VALUE",
 *                 ComparisonFilterCondition: {
 *                   Operator: "EQUALS" || "DOES_NOT_EQUAL" || "CONTAINS" || "DOES_NOT_CONTAIN" || "STARTS_WITH" || "ENDS_WITH", // required
 *                   Value: {
 *                     StaticValue: "STRING_VALUE",
 *                   },
 *                 },
 *                 ListFilterCondition: {
 *                   Operator: "INCLUDE" || "EXCLUDE", // required
 *                   Values: {
 *                     StaticValues: [
 *                       "STRING_VALUE",
 *                     ],
 *                   },
 *                 },
 *               },
 *               NumericFilterCondition: {
 *                 ColumnName: "STRING_VALUE",
 *                 ComparisonFilterCondition: {
 *                   Operator: "EQUALS" || "DOES_NOT_EQUAL" || "GREATER_THAN" || "GREATER_THAN_OR_EQUALS_TO" || "LESS_THAN" || "LESS_THAN_OR_EQUALS_TO", // required
 *                   Value: {
 *                     StaticValue: Number("double"),
 *                   },
 *                 },
 *                 RangeFilterCondition: {
 *                   RangeMinimum: {
 *                     StaticValue: Number("double"),
 *                   },
 *                   RangeMaximum: "<DataSetNumericFilterValue>",
 *                   IncludeMinimum: true || false,
 *                   IncludeMaximum: true || false,
 *                 },
 *               },
 *               DateFilterCondition: {
 *                 ColumnName: "STRING_VALUE",
 *                 ComparisonFilterCondition: {
 *                   Operator: "BEFORE" || "BEFORE_OR_EQUALS_TO" || "AFTER" || "AFTER_OR_EQUALS_TO", // required
 *                   Value: {
 *                     StaticValue: new Date("TIMESTAMP"),
 *                   },
 *                 },
 *                 RangeFilterCondition: {
 *                   RangeMinimum: {
 *                     StaticValue: new Date("TIMESTAMP"),
 *                   },
 *                   RangeMaximum: "<DataSetDateFilterValue>",
 *                   IncludeMinimum: true || false,
 *                   IncludeMaximum: true || false,
 *                 },
 *               },
 *             },
 *           ],
 *         },
 *         CreateColumnsStep: {
 *           Alias: "STRING_VALUE",
 *           Source: {
 *             TransformOperationId: "STRING_VALUE", // required
 *             ColumnIdMappings: "<DataSetColumnIdMappingList>",
 *           },
 *           Columns: [ // required
 *             {
 *               ColumnName: "STRING_VALUE", // required
 *               ColumnId: "STRING_VALUE", // required
 *               Expression: "STRING_VALUE", // required
 *             },
 *           ],
 *         },
 *         RenameColumnsStep: { // RenameColumnsOperation
 *           Alias: "STRING_VALUE", // required
 *           Source: "<TransformOperationSource>", // required
 *           RenameColumnOperations: [ // RenameColumnOperationList // required
 *             {
 *               ColumnName: "STRING_VALUE", // required
 *               NewColumnName: "STRING_VALUE", // required
 *             },
 *           ],
 *         },
 *         CastColumnTypesStep: { // CastColumnTypesOperation
 *           Alias: "STRING_VALUE", // required
 *           Source: "<TransformOperationSource>", // required
 *           CastColumnTypeOperations: [ // CastColumnTypeOperationList // required
 *             {
 *               ColumnName: "STRING_VALUE", // required
 *               NewColumnType: "STRING" || "INTEGER" || "DECIMAL" || "DATETIME", // required
 *               SubType: "FLOAT" || "FIXED",
 *               Format: "STRING_VALUE",
 *             },
 *           ],
 *         },
 *         JoinStep: { // JoinOperation
 *           Alias: "STRING_VALUE", // required
 *           LeftOperand: "<TransformOperationSource>", // required
 *           RightOperand: "<TransformOperationSource>", // required
 *           Type: "INNER" || "OUTER" || "LEFT" || "RIGHT", // required
 *           OnClause: "STRING_VALUE", // required
 *           LeftOperandProperties: { // JoinOperandProperties
 *             OutputColumnNameOverrides: [ // OutputColumnNameOverrideList // required
 *               { // OutputColumnNameOverride
 *                 SourceColumnName: "STRING_VALUE",
 *                 OutputColumnName: "STRING_VALUE", // required
 *               },
 *             ],
 *           },
 *           RightOperandProperties: {
 *             OutputColumnNameOverrides: [ // required
 *               {
 *                 SourceColumnName: "STRING_VALUE",
 *                 OutputColumnName: "STRING_VALUE", // required
 *               },
 *             ],
 *           },
 *         },
 *         AggregateStep: { // AggregateOperation
 *           Alias: "STRING_VALUE", // required
 *           Source: "<TransformOperationSource>", // required
 *           GroupByColumnNames: [ // GroupByColumnNameList
 *             "STRING_VALUE",
 *           ],
 *           Aggregations: [ // AggregationList // required
 *             { // Aggregation
 *               AggregationFunction: { // DataPrepAggregationFunction
 *                 SimpleAggregation: { // DataPrepSimpleAggregationFunction
 *                   InputColumnName: "STRING_VALUE",
 *                   FunctionType: "COUNT" || "DISTINCT_COUNT" || "SUM" || "AVERAGE" || "MAX" || "MIN", // required
 *                 },
 *                 ListAggregation: { // DataPrepListAggregationFunction
 *                   InputColumnName: "STRING_VALUE",
 *                   Separator: "STRING_VALUE", // required
 *                   Distinct: true || false, // required
 *                 },
 *               },
 *               NewColumnName: "STRING_VALUE", // required
 *               NewColumnId: "STRING_VALUE", // required
 *             },
 *           ],
 *         },
 *         PivotStep: { // PivotOperation
 *           Alias: "STRING_VALUE", // required
 *           Source: "<TransformOperationSource>", // required
 *           GroupByColumnNames: [ // PivotGroupByColumnNameList
 *             "STRING_VALUE",
 *           ],
 *           ValueColumnConfiguration: { // ValueColumnConfiguration
 *             AggregationFunction: {
 *               SimpleAggregation: {
 *                 InputColumnName: "STRING_VALUE",
 *                 FunctionType: "COUNT" || "DISTINCT_COUNT" || "SUM" || "AVERAGE" || "MAX" || "MIN", // required
 *               },
 *               ListAggregation: {
 *                 InputColumnName: "STRING_VALUE",
 *                 Separator: "STRING_VALUE", // required
 *                 Distinct: true || false, // required
 *               },
 *             },
 *           },
 *           PivotConfiguration: { // PivotConfiguration
 *             LabelColumnName: "STRING_VALUE",
 *             PivotedLabels: [ // PivotedLabelList // required
 *               { // PivotedLabel
 *                 LabelName: "STRING_VALUE", // required
 *                 NewColumnName: "STRING_VALUE", // required
 *                 NewColumnId: "STRING_VALUE", // required
 *               },
 *             ],
 *           },
 *         },
 *         UnpivotStep: { // UnpivotOperation
 *           Alias: "STRING_VALUE", // required
 *           Source: "<TransformOperationSource>", // required
 *           ColumnsToUnpivot: [ // ColumnToUnpivotList // required
 *             { // ColumnToUnpivot
 *               ColumnName: "STRING_VALUE",
 *               NewValue: "STRING_VALUE",
 *             },
 *           ],
 *           UnpivotedLabelColumnName: "STRING_VALUE", // required
 *           UnpivotedLabelColumnId: "STRING_VALUE", // required
 *           UnpivotedValueColumnName: "STRING_VALUE", // required
 *           UnpivotedValueColumnId: "STRING_VALUE", // required
 *         },
 *         AppendStep: { // AppendOperation
 *           Alias: "STRING_VALUE", // required
 *           FirstSource: "<TransformOperationSource>",
 *           SecondSource: "<TransformOperationSource>",
 *           AppendedColumns: [ // AppendedColumnList // required
 *             { // AppendedColumn
 *               ColumnName: "STRING_VALUE", // required
 *               NewColumnId: "STRING_VALUE", // required
 *             },
 *           ],
 *         },
 *       },
 *     },
 *     DestinationTableMap: { // DestinationTableMap // required
 *       "<keys>": { // DestinationTable
 *         Alias: "STRING_VALUE", // required
 *         Source: { // DestinationTableSource
 *           TransformOperationId: "STRING_VALUE", // required
 *         },
 *       },
 *     },
 *   },
 *   SemanticModelConfiguration: { // SemanticModelConfiguration
 *     TableMap: { // SemanticTableMap
 *       "<keys>": { // SemanticTable
 *         Alias: "STRING_VALUE", // required
 *         DestinationTableId: "STRING_VALUE", // required
 *         RowLevelPermissionConfiguration: { // RowLevelPermissionConfiguration
 *           TagConfiguration: {
 *             Status: "ENABLED" || "DISABLED",
 *             TagRules: [ // required
 *               {
 *                 TagKey: "STRING_VALUE", // required
 *                 ColumnName: "STRING_VALUE", // required
 *                 TagMultiValueDelimiter: "STRING_VALUE",
 *                 MatchAllValue: "STRING_VALUE",
 *               },
 *             ],
 *             TagRuleConfigurations: [
 *               [
 *                 "STRING_VALUE",
 *               ],
 *             ],
 *           },
 *           RowLevelPermissionDataSet: {
 *             Namespace: "STRING_VALUE",
 *             Arn: "STRING_VALUE", // required
 *             PermissionPolicy: "GRANT_ACCESS" || "DENY_ACCESS", // required
 *             FormatVersion: "VERSION_1" || "VERSION_2",
 *             Status: "ENABLED" || "DISABLED",
 *           },
 *         },
 *       },
 *     },
 *   },
 * };
 * const command = new UpdateDataSetCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDataSetResponse
 * //   Arn: "STRING_VALUE",
 * //   DataSetId: "STRING_VALUE",
 * //   IngestionArn: "STRING_VALUE",
 * //   IngestionId: "STRING_VALUE",
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param UpdateDataSetCommandInput - {@link UpdateDataSetCommandInput}
 * @returns {@link UpdateDataSetCommandOutput}
 * @see {@link UpdateDataSetCommandInput} for command's `input` shape.
 * @see {@link UpdateDataSetCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon Quick Sight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidDataSetParameterValueException} (client fault)
 *  <p>An exception thrown when an invalid parameter value is provided for dataset operations.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit is exceeded.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link UnsupportedUserEditionException} (client fault)
 *  <p>This error indicates that you are calling an operation on an Amazon Quick Suite
 * 			subscription where the edition doesn't include support for that operation. Amazon
 * 			Quick Suite currently has Standard Edition and Enterprise Edition. Not every operation and
 * 			capability is available in every edition.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 *
 * @public
 */
export class UpdateDataSetCommand extends $Command
  .classBuilder<
    UpdateDataSetCommandInput,
    UpdateDataSetCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QuickSight_20180401", "UpdateDataSet", {})
  .n("QuickSightClient", "UpdateDataSetCommand")
  .sc(UpdateDataSet)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDataSetRequest;
      output: UpdateDataSetResponse;
    };
    sdk: {
      input: UpdateDataSetCommandInput;
      output: UpdateDataSetCommandOutput;
    };
  };
}
