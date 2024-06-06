// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateDashboardRequest,
  UpdateDashboardRequestFilterSensitiveLog,
  UpdateDashboardResponse,
} from "../models/models_4";
import { de_UpdateDashboardCommand, se_UpdateDashboardCommand } from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateDashboardCommand}.
 */
export interface UpdateDashboardCommandInput extends UpdateDashboardRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDashboardCommand}.
 */
export interface UpdateDashboardCommandOutput extends UpdateDashboardResponse, __MetadataBearer {}

/**
 * <p>Updates a dashboard in an Amazon Web Services account.</p>
 *          <note>
 *             <p>Updating a Dashboard creates a new dashboard version but does not immediately publish
 *                 the new version.  You can update the published version of a dashboard by
 *                 using the <code>
 *                   <a href="https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateDashboardPublishedVersion.html">UpdateDashboardPublishedVersion</a>
 *                </code> API operation.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateDashboardCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateDashboardCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const input = { // UpdateDashboardRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   DashboardId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   SourceEntity: { // DashboardSourceEntity
 *     SourceTemplate: { // DashboardSourceTemplate
 *       DataSetReferences: [ // DataSetReferenceList // required
 *         { // DataSetReference
 *           DataSetPlaceholder: "STRING_VALUE", // required
 *           DataSetArn: "STRING_VALUE", // required
 *         },
 *       ],
 *       Arn: "STRING_VALUE", // required
 *     },
 *   },
 *   Parameters: { // Parameters
 *     StringParameters: [ // StringParameterList
 *       { // StringParameter
 *         Name: "STRING_VALUE", // required
 *         Values: [ // SensitiveStringList // required
 *           "STRING_VALUE",
 *         ],
 *       },
 *     ],
 *     IntegerParameters: [ // IntegerParameterList
 *       { // IntegerParameter
 *         Name: "STRING_VALUE", // required
 *         Values: [ // SensitiveLongList // required
 *           Number("long"),
 *         ],
 *       },
 *     ],
 *     DecimalParameters: [ // DecimalParameterList
 *       { // DecimalParameter
 *         Name: "STRING_VALUE", // required
 *         Values: [ // SensitiveDoubleList // required
 *           Number("double"),
 *         ],
 *       },
 *     ],
 *     DateTimeParameters: [ // DateTimeParameterList
 *       { // DateTimeParameter
 *         Name: "STRING_VALUE", // required
 *         Values: [ // SensitiveTimestampList // required
 *           new Date("TIMESTAMP"),
 *         ],
 *       },
 *     ],
 *   },
 *   VersionDescription: "STRING_VALUE",
 *   DashboardPublishOptions: { // DashboardPublishOptions
 *     AdHocFilteringOption: { // AdHocFilteringOption
 *       AvailabilityStatus: "ENABLED" || "DISABLED",
 *     },
 *     ExportToCSVOption: { // ExportToCSVOption
 *       AvailabilityStatus: "ENABLED" || "DISABLED",
 *     },
 *     SheetControlsOption: { // SheetControlsOption
 *       VisibilityState: "EXPANDED" || "COLLAPSED",
 *     },
 *     VisualPublishOptions: { // DashboardVisualPublishOptions
 *       ExportHiddenFieldsOption: { // ExportHiddenFieldsOption
 *         AvailabilityStatus: "ENABLED" || "DISABLED",
 *       },
 *     },
 *     SheetLayoutElementMaximizationOption: { // SheetLayoutElementMaximizationOption
 *       AvailabilityStatus: "ENABLED" || "DISABLED",
 *     },
 *     VisualMenuOption: { // VisualMenuOption
 *       AvailabilityStatus: "ENABLED" || "DISABLED",
 *     },
 *     VisualAxisSortOption: { // VisualAxisSortOption
 *       AvailabilityStatus: "ENABLED" || "DISABLED",
 *     },
 *     ExportWithHiddenFieldsOption: { // ExportWithHiddenFieldsOption
 *       AvailabilityStatus: "ENABLED" || "DISABLED",
 *     },
 *     DataPointDrillUpDownOption: { // DataPointDrillUpDownOption
 *       AvailabilityStatus: "ENABLED" || "DISABLED",
 *     },
 *     DataPointMenuLabelOption: { // DataPointMenuLabelOption
 *       AvailabilityStatus: "ENABLED" || "DISABLED",
 *     },
 *     DataPointTooltipOption: { // DataPointTooltipOption
 *       AvailabilityStatus: "ENABLED" || "DISABLED",
 *     },
 *   },
 *   ThemeArn: "STRING_VALUE",
 *   Definition: { // DashboardVersionDefinition
 *     DataSetIdentifierDeclarations: [ // DataSetIdentifierDeclarationList // required
 *       { // DataSetIdentifierDeclaration
 *         Identifier: "STRING_VALUE", // required
 *         DataSetArn: "STRING_VALUE", // required
 *       },
 *     ],
 *     Sheets: [ // SheetDefinitionList
 *       { // SheetDefinition
 *         SheetId: "STRING_VALUE", // required
 *         Title: "STRING_VALUE",
 *         Description: "STRING_VALUE",
 *         Name: "STRING_VALUE",
 *         ParameterControls: [ // ParameterControlList
 *           { // ParameterControl
 *             DateTimePicker: { // ParameterDateTimePickerControl
 *               ParameterControlId: "STRING_VALUE", // required
 *               Title: "STRING_VALUE", // required
 *               SourceParameterName: "STRING_VALUE", // required
 *               DisplayOptions: { // DateTimePickerControlDisplayOptions
 *                 TitleOptions: { // LabelOptions
 *                   Visibility: "HIDDEN" || "VISIBLE",
 *                   FontConfiguration: { // FontConfiguration
 *                     FontSize: { // FontSize
 *                       Relative: "EXTRA_SMALL" || "SMALL" || "MEDIUM" || "LARGE" || "EXTRA_LARGE",
 *                     },
 *                     FontDecoration: "UNDERLINE" || "NONE",
 *                     FontColor: "STRING_VALUE",
 *                     FontWeight: { // FontWeight
 *                       Name: "NORMAL" || "BOLD",
 *                     },
 *                     FontStyle: "NORMAL" || "ITALIC",
 *                   },
 *                   CustomLabel: "STRING_VALUE",
 *                 },
 *                 DateTimeFormat: "STRING_VALUE",
 *                 InfoIconLabelOptions: { // SheetControlInfoIconLabelOptions
 *                   Visibility: "HIDDEN" || "VISIBLE",
 *                   InfoIconText: "STRING_VALUE",
 *                 },
 *               },
 *             },
 *             List: { // ParameterListControl
 *               ParameterControlId: "STRING_VALUE", // required
 *               Title: "STRING_VALUE", // required
 *               SourceParameterName: "STRING_VALUE", // required
 *               DisplayOptions: { // ListControlDisplayOptions
 *                 SearchOptions: { // ListControlSearchOptions
 *                   Visibility: "HIDDEN" || "VISIBLE",
 *                 },
 *                 SelectAllOptions: { // ListControlSelectAllOptions
 *                   Visibility: "HIDDEN" || "VISIBLE",
 *                 },
 *                 TitleOptions: {
 *                   Visibility: "HIDDEN" || "VISIBLE",
 *                   FontConfiguration: {
 *                     FontSize: {
 *                       Relative: "EXTRA_SMALL" || "SMALL" || "MEDIUM" || "LARGE" || "EXTRA_LARGE",
 *                     },
 *                     FontDecoration: "UNDERLINE" || "NONE",
 *                     FontColor: "STRING_VALUE",
 *                     FontWeight: {
 *                       Name: "NORMAL" || "BOLD",
 *                     },
 *                     FontStyle: "NORMAL" || "ITALIC",
 *                   },
 *                   CustomLabel: "STRING_VALUE",
 *                 },
 *                 InfoIconLabelOptions: {
 *                   Visibility: "HIDDEN" || "VISIBLE",
 *                   InfoIconText: "STRING_VALUE",
 *                 },
 *               },
 *               Type: "MULTI_SELECT" || "SINGLE_SELECT",
 *               SelectableValues: { // ParameterSelectableValues
 *                 Values: [ // ParameterSelectableValueList
 *                   "STRING_VALUE",
 *                 ],
 *                 LinkToDataSetColumn: { // ColumnIdentifier
 *                   DataSetIdentifier: "STRING_VALUE", // required
 *                   ColumnName: "STRING_VALUE", // required
 *                 },
 *               },
 *               CascadingControlConfiguration: { // CascadingControlConfiguration
 *                 SourceControls: [ // CascadingControlSourceList
 *                   { // CascadingControlSource
 *                     SourceSheetControlId: "STRING_VALUE",
 *                     ColumnToMatch: {
 *                       DataSetIdentifier: "STRING_VALUE", // required
 *                       ColumnName: "STRING_VALUE", // required
 *                     },
 *                   },
 *                 ],
 *               },
 *             },
 *             Dropdown: { // ParameterDropDownControl
 *               ParameterControlId: "STRING_VALUE", // required
 *               Title: "STRING_VALUE", // required
 *               SourceParameterName: "STRING_VALUE", // required
 *               DisplayOptions: { // DropDownControlDisplayOptions
 *                 SelectAllOptions: {
 *                   Visibility: "HIDDEN" || "VISIBLE",
 *                 },
 *                 TitleOptions: {
 *                   Visibility: "HIDDEN" || "VISIBLE",
 *                   FontConfiguration: {
 *                     FontSize: {
 *                       Relative: "EXTRA_SMALL" || "SMALL" || "MEDIUM" || "LARGE" || "EXTRA_LARGE",
 *                     },
 *                     FontDecoration: "UNDERLINE" || "NONE",
 *                     FontColor: "STRING_VALUE",
 *                     FontWeight: {
 *                       Name: "NORMAL" || "BOLD",
 *                     },
 *                     FontStyle: "NORMAL" || "ITALIC",
 *                   },
 *                   CustomLabel: "STRING_VALUE",
 *                 },
 *                 InfoIconLabelOptions: {
 *                   Visibility: "HIDDEN" || "VISIBLE",
 *                   InfoIconText: "STRING_VALUE",
 *                 },
 *               },
 *               Type: "MULTI_SELECT" || "SINGLE_SELECT",
 *               SelectableValues: {
 *                 Values: [
 *                   "STRING_VALUE",
 *                 ],
 *                 LinkToDataSetColumn: {
 *                   DataSetIdentifier: "STRING_VALUE", // required
 *                   ColumnName: "STRING_VALUE", // required
 *                 },
 *               },
 *               CascadingControlConfiguration: {
 *                 SourceControls: [
 *                   {
 *                     SourceSheetControlId: "STRING_VALUE",
 *                     ColumnToMatch: {
 *                       DataSetIdentifier: "STRING_VALUE", // required
 *                       ColumnName: "STRING_VALUE", // required
 *                     },
 *                   },
 *                 ],
 *               },
 *             },
 *             TextField: { // ParameterTextFieldControl
 *               ParameterControlId: "STRING_VALUE", // required
 *               Title: "STRING_VALUE", // required
 *               SourceParameterName: "STRING_VALUE", // required
 *               DisplayOptions: { // TextFieldControlDisplayOptions
 *                 TitleOptions: {
 *                   Visibility: "HIDDEN" || "VISIBLE",
 *                   FontConfiguration: {
 *                     FontSize: {
 *                       Relative: "EXTRA_SMALL" || "SMALL" || "MEDIUM" || "LARGE" || "EXTRA_LARGE",
 *                     },
 *                     FontDecoration: "UNDERLINE" || "NONE",
 *                     FontColor: "STRING_VALUE",
 *                     FontWeight: {
 *                       Name: "NORMAL" || "BOLD",
 *                     },
 *                     FontStyle: "NORMAL" || "ITALIC",
 *                   },
 *                   CustomLabel: "STRING_VALUE",
 *                 },
 *                 PlaceholderOptions: { // TextControlPlaceholderOptions
 *                   Visibility: "HIDDEN" || "VISIBLE",
 *                 },
 *                 InfoIconLabelOptions: {
 *                   Visibility: "HIDDEN" || "VISIBLE",
 *                   InfoIconText: "STRING_VALUE",
 *                 },
 *               },
 *             },
 *             TextArea: { // ParameterTextAreaControl
 *               ParameterControlId: "STRING_VALUE", // required
 *               Title: "STRING_VALUE", // required
 *               SourceParameterName: "STRING_VALUE", // required
 *               Delimiter: "STRING_VALUE",
 *               DisplayOptions: { // TextAreaControlDisplayOptions
 *                 TitleOptions: {
 *                   Visibility: "HIDDEN" || "VISIBLE",
 *                   FontConfiguration: {
 *                     FontSize: {
 *                       Relative: "EXTRA_SMALL" || "SMALL" || "MEDIUM" || "LARGE" || "EXTRA_LARGE",
 *                     },
 *                     FontDecoration: "UNDERLINE" || "NONE",
 *                     FontColor: "STRING_VALUE",
 *                     FontWeight: {
 *                       Name: "NORMAL" || "BOLD",
 *                     },
 *                     FontStyle: "NORMAL" || "ITALIC",
 *                   },
 *                   CustomLabel: "STRING_VALUE",
 *                 },
 *                 PlaceholderOptions: {
 *                   Visibility: "HIDDEN" || "VISIBLE",
 *                 },
 *                 InfoIconLabelOptions: {
 *                   Visibility: "HIDDEN" || "VISIBLE",
 *                   InfoIconText: "STRING_VALUE",
 *                 },
 *               },
 *             },
 *             Slider: { // ParameterSliderControl
 *               ParameterControlId: "STRING_VALUE", // required
 *               Title: "STRING_VALUE", // required
 *               SourceParameterName: "STRING_VALUE", // required
 *               DisplayOptions: { // SliderControlDisplayOptions
 *                 TitleOptions: "<LabelOptions>",
 *                 InfoIconLabelOptions: "<SheetControlInfoIconLabelOptions>",
 *               },
 *               MaximumValue: Number("double"), // required
 *               MinimumValue: Number("double"), // required
 *               StepSize: Number("double"), // required
 *             },
 *           },
 *         ],
 *         FilterControls: [ // FilterControlList
 *           { // FilterControl
 *             DateTimePicker: { // FilterDateTimePickerControl
 *               FilterControlId: "STRING_VALUE", // required
 *               Title: "STRING_VALUE", // required
 *               SourceFilterId: "STRING_VALUE", // required
 *               DisplayOptions: {
 *                 TitleOptions: "<LabelOptions>",
 *                 DateTimeFormat: "STRING_VALUE",
 *                 InfoIconLabelOptions: "<SheetControlInfoIconLabelOptions>",
 *               },
 *               Type: "SINGLE_VALUED" || "DATE_RANGE",
 *             },
 *             List: { // FilterListControl
 *               FilterControlId: "STRING_VALUE", // required
 *               Title: "STRING_VALUE", // required
 *               SourceFilterId: "STRING_VALUE", // required
 *               DisplayOptions: {
 *                 SearchOptions: {
 *                   Visibility: "HIDDEN" || "VISIBLE",
 *                 },
 *                 SelectAllOptions: {
 *                   Visibility: "HIDDEN" || "VISIBLE",
 *                 },
 *                 TitleOptions: "<LabelOptions>",
 *                 InfoIconLabelOptions: "<SheetControlInfoIconLabelOptions>",
 *               },
 *               Type: "MULTI_SELECT" || "SINGLE_SELECT",
 *               SelectableValues: { // FilterSelectableValues
 *                 Values: [
 *                   "STRING_VALUE",
 *                 ],
 *               },
 *               CascadingControlConfiguration: {
 *                 SourceControls: [
 *                   {
 *                     SourceSheetControlId: "STRING_VALUE",
 *                     ColumnToMatch: {
 *                       DataSetIdentifier: "STRING_VALUE", // required
 *                       ColumnName: "STRING_VALUE", // required
 *                     },
 *                   },
 *                 ],
 *               },
 *             },
 *             Dropdown: { // FilterDropDownControl
 *               FilterControlId: "STRING_VALUE", // required
 *               Title: "STRING_VALUE", // required
 *               SourceFilterId: "STRING_VALUE", // required
 *               DisplayOptions: {
 *                 SelectAllOptions: {
 *                   Visibility: "HIDDEN" || "VISIBLE",
 *                 },
 *                 TitleOptions: "<LabelOptions>",
 *                 InfoIconLabelOptions: "<SheetControlInfoIconLabelOptions>",
 *               },
 *               Type: "MULTI_SELECT" || "SINGLE_SELECT",
 *               SelectableValues: {
 *                 Values: [
 *                   "STRING_VALUE",
 *                 ],
 *               },
 *               CascadingControlConfiguration: {
 *                 SourceControls: [
 *                   {
 *                     SourceSheetControlId: "STRING_VALUE",
 *                     ColumnToMatch: "<ColumnIdentifier>",
 *                   },
 *                 ],
 *               },
 *             },
 *             TextField: { // FilterTextFieldControl
 *               FilterControlId: "STRING_VALUE", // required
 *               Title: "STRING_VALUE", // required
 *               SourceFilterId: "STRING_VALUE", // required
 *               DisplayOptions: {
 *                 TitleOptions: "<LabelOptions>",
 *                 PlaceholderOptions: {
 *                   Visibility: "HIDDEN" || "VISIBLE",
 *                 },
 *                 InfoIconLabelOptions: "<SheetControlInfoIconLabelOptions>",
 *               },
 *             },
 *             TextArea: { // FilterTextAreaControl
 *               FilterControlId: "STRING_VALUE", // required
 *               Title: "STRING_VALUE", // required
 *               SourceFilterId: "STRING_VALUE", // required
 *               Delimiter: "STRING_VALUE",
 *               DisplayOptions: {
 *                 TitleOptions: "<LabelOptions>",
 *                 PlaceholderOptions: {
 *                   Visibility: "HIDDEN" || "VISIBLE",
 *                 },
 *                 InfoIconLabelOptions: "<SheetControlInfoIconLabelOptions>",
 *               },
 *             },
 *             Slider: { // FilterSliderControl
 *               FilterControlId: "STRING_VALUE", // required
 *               Title: "STRING_VALUE", // required
 *               SourceFilterId: "STRING_VALUE", // required
 *               DisplayOptions: {
 *                 TitleOptions: "<LabelOptions>",
 *                 InfoIconLabelOptions: "<SheetControlInfoIconLabelOptions>",
 *               },
 *               Type: "SINGLE_POINT" || "RANGE",
 *               MaximumValue: Number("double"), // required
 *               MinimumValue: Number("double"), // required
 *               StepSize: Number("double"), // required
 *             },
 *             RelativeDateTime: { // FilterRelativeDateTimeControl
 *               FilterControlId: "STRING_VALUE", // required
 *               Title: "STRING_VALUE", // required
 *               SourceFilterId: "STRING_VALUE", // required
 *               DisplayOptions: { // RelativeDateTimeControlDisplayOptions
 *                 TitleOptions: "<LabelOptions>",
 *                 DateTimeFormat: "STRING_VALUE",
 *                 InfoIconLabelOptions: "<SheetControlInfoIconLabelOptions>",
 *               },
 *             },
 *             CrossSheet: { // FilterCrossSheetControl
 *               FilterControlId: "STRING_VALUE", // required
 *               SourceFilterId: "STRING_VALUE", // required
 *               CascadingControlConfiguration: {
 *                 SourceControls: [
 *                   {
 *                     SourceSheetControlId: "STRING_VALUE",
 *                     ColumnToMatch: "<ColumnIdentifier>",
 *                   },
 *                 ],
 *               },
 *             },
 *           },
 *         ],
 *         Visuals: [ // VisualList
 *           { // Visual
 *             TableVisual: { // TableVisual
 *               VisualId: "STRING_VALUE", // required
 *               Title: { // VisualTitleLabelOptions
 *                 Visibility: "HIDDEN" || "VISIBLE",
 *                 FormatText: { // ShortFormatText
 *                   PlainText: "STRING_VALUE",
 *                   RichText: "STRING_VALUE",
 *                 },
 *               },
 *               Subtitle: { // VisualSubtitleLabelOptions
 *                 Visibility: "HIDDEN" || "VISIBLE",
 *                 FormatText: { // LongFormatText
 *                   PlainText: "STRING_VALUE",
 *                   RichText: "STRING_VALUE",
 *                 },
 *               },
 *               ChartConfiguration: { // TableConfiguration
 *                 FieldWells: { // TableFieldWells
 *                   TableAggregatedFieldWells: { // TableAggregatedFieldWells
 *                     GroupBy: [ // DimensionFieldList
 *                       { // DimensionField
 *                         NumericalDimensionField: { // NumericalDimensionField
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: "<ColumnIdentifier>", // required
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: { // NumberFormatConfiguration
 *                             FormatConfiguration: { // NumericFormatConfiguration
 *                               NumberDisplayFormatConfiguration: { // NumberDisplayFormatConfiguration
 *                                 Prefix: "STRING_VALUE",
 *                                 Suffix: "STRING_VALUE",
 *                                 SeparatorConfiguration: { // NumericSeparatorConfiguration
 *                                   DecimalSeparator: "COMMA" || "DOT" || "SPACE",
 *                                   ThousandsSeparator: { // ThousandSeparatorOptions
 *                                     Symbol: "COMMA" || "DOT" || "SPACE",
 *                                     Visibility: "HIDDEN" || "VISIBLE",
 *                                   },
 *                                 },
 *                                 DecimalPlacesConfiguration: { // DecimalPlacesConfiguration
 *                                   DecimalPlaces: Number("long"), // required
 *                                 },
 *                                 NumberScale: "NONE" || "AUTO" || "THOUSANDS" || "MILLIONS" || "BILLIONS" || "TRILLIONS",
 *                                 NegativeValueConfiguration: { // NegativeValueConfiguration
 *                                   DisplayMode: "POSITIVE" || "NEGATIVE", // required
 *                                 },
 *                                 NullValueFormatConfiguration: { // NullValueFormatConfiguration
 *                                   NullString: "STRING_VALUE", // required
 *                                 },
 *                               },
 *                               CurrencyDisplayFormatConfiguration: { // CurrencyDisplayFormatConfiguration
 *                                 Prefix: "STRING_VALUE",
 *                                 Suffix: "STRING_VALUE",
 *                                 SeparatorConfiguration: {
 *                                   DecimalSeparator: "COMMA" || "DOT" || "SPACE",
 *                                   ThousandsSeparator: {
 *                                     Symbol: "COMMA" || "DOT" || "SPACE",
 *                                     Visibility: "HIDDEN" || "VISIBLE",
 *                                   },
 *                                 },
 *                                 Symbol: "STRING_VALUE",
 *                                 DecimalPlacesConfiguration: {
 *                                   DecimalPlaces: Number("long"), // required
 *                                 },
 *                                 NumberScale: "NONE" || "AUTO" || "THOUSANDS" || "MILLIONS" || "BILLIONS" || "TRILLIONS",
 *                                 NegativeValueConfiguration: {
 *                                   DisplayMode: "POSITIVE" || "NEGATIVE", // required
 *                                 },
 *                                 NullValueFormatConfiguration: {
 *                                   NullString: "STRING_VALUE", // required
 *                                 },
 *                               },
 *                               PercentageDisplayFormatConfiguration: { // PercentageDisplayFormatConfiguration
 *                                 Prefix: "STRING_VALUE",
 *                                 Suffix: "STRING_VALUE",
 *                                 SeparatorConfiguration: {
 *                                   DecimalSeparator: "COMMA" || "DOT" || "SPACE",
 *                                   ThousandsSeparator: {
 *                                     Symbol: "COMMA" || "DOT" || "SPACE",
 *                                     Visibility: "HIDDEN" || "VISIBLE",
 *                                   },
 *                                 },
 *                                 DecimalPlacesConfiguration: {
 *                                   DecimalPlaces: Number("long"), // required
 *                                 },
 *                                 NegativeValueConfiguration: {
 *                                   DisplayMode: "POSITIVE" || "NEGATIVE", // required
 *                                 },
 *                                 NullValueFormatConfiguration: {
 *                                   NullString: "STRING_VALUE", // required
 *                                 },
 *                               },
 *                             },
 *                           },
 *                         },
 *                         CategoricalDimensionField: { // CategoricalDimensionField
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: "<ColumnIdentifier>", // required
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: { // StringFormatConfiguration
 *                             NullValueFormatConfiguration: {
 *                               NullString: "STRING_VALUE", // required
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: {
 *                                 Prefix: "STRING_VALUE",
 *                                 Suffix: "STRING_VALUE",
 *                                 SeparatorConfiguration: {
 *                                   DecimalSeparator: "COMMA" || "DOT" || "SPACE",
 *                                   ThousandsSeparator: {
 *                                     Symbol: "COMMA" || "DOT" || "SPACE",
 *                                     Visibility: "HIDDEN" || "VISIBLE",
 *                                   },
 *                                 },
 *                                 DecimalPlacesConfiguration: {
 *                                   DecimalPlaces: Number("long"), // required
 *                                 },
 *                                 NumberScale: "NONE" || "AUTO" || "THOUSANDS" || "MILLIONS" || "BILLIONS" || "TRILLIONS",
 *                                 NegativeValueConfiguration: {
 *                                   DisplayMode: "POSITIVE" || "NEGATIVE", // required
 *                                 },
 *                                 NullValueFormatConfiguration: {
 *                                   NullString: "STRING_VALUE", // required
 *                                 },
 *                               },
 *                               CurrencyDisplayFormatConfiguration: {
 *                                 Prefix: "STRING_VALUE",
 *                                 Suffix: "STRING_VALUE",
 *                                 SeparatorConfiguration: {
 *                                   DecimalSeparator: "COMMA" || "DOT" || "SPACE",
 *                                   ThousandsSeparator: {
 *                                     Symbol: "COMMA" || "DOT" || "SPACE",
 *                                     Visibility: "HIDDEN" || "VISIBLE",
 *                                   },
 *                                 },
 *                                 Symbol: "STRING_VALUE",
 *                                 DecimalPlacesConfiguration: {
 *                                   DecimalPlaces: Number("long"), // required
 *                                 },
 *                                 NumberScale: "NONE" || "AUTO" || "THOUSANDS" || "MILLIONS" || "BILLIONS" || "TRILLIONS",
 *                                 NegativeValueConfiguration: {
 *                                   DisplayMode: "POSITIVE" || "NEGATIVE", // required
 *                                 },
 *                                 NullValueFormatConfiguration: "<NullValueFormatConfiguration>",
 *                               },
 *                               PercentageDisplayFormatConfiguration: {
 *                                 Prefix: "STRING_VALUE",
 *                                 Suffix: "STRING_VALUE",
 *                                 SeparatorConfiguration: "<NumericSeparatorConfiguration>",
 *                                 DecimalPlacesConfiguration: "<DecimalPlacesConfiguration>",
 *                                 NegativeValueConfiguration: "<NegativeValueConfiguration>",
 *                                 NullValueFormatConfiguration: "<NullValueFormatConfiguration>",
 *                               },
 *                             },
 *                           },
 *                         },
 *                         DateDimensionField: { // DateDimensionField
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: "<ColumnIdentifier>", // required
 *                           DateGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: { // DateTimeFormatConfiguration
 *                             DateTimeFormat: "STRING_VALUE",
 *                             NullValueFormatConfiguration: "<NullValueFormatConfiguration>",
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: {
 *                                 Prefix: "STRING_VALUE",
 *                                 Suffix: "STRING_VALUE",
 *                                 SeparatorConfiguration: "<NumericSeparatorConfiguration>",
 *                                 DecimalPlacesConfiguration: "<DecimalPlacesConfiguration>",
 *                                 NumberScale: "NONE" || "AUTO" || "THOUSANDS" || "MILLIONS" || "BILLIONS" || "TRILLIONS",
 *                                 NegativeValueConfiguration: "<NegativeValueConfiguration>",
 *                                 NullValueFormatConfiguration: "<NullValueFormatConfiguration>",
 *                               },
 *                               CurrencyDisplayFormatConfiguration: {
 *                                 Prefix: "STRING_VALUE",
 *                                 Suffix: "STRING_VALUE",
 *                                 SeparatorConfiguration: "<NumericSeparatorConfiguration>",
 *                                 Symbol: "STRING_VALUE",
 *                                 DecimalPlacesConfiguration: "<DecimalPlacesConfiguration>",
 *                                 NumberScale: "NONE" || "AUTO" || "THOUSANDS" || "MILLIONS" || "BILLIONS" || "TRILLIONS",
 *                                 NegativeValueConfiguration: "<NegativeValueConfiguration>",
 *                                 NullValueFormatConfiguration: "<NullValueFormatConfiguration>",
 *                               },
 *                               PercentageDisplayFormatConfiguration: {
 *                                 Prefix: "STRING_VALUE",
 *                                 Suffix: "STRING_VALUE",
 *                                 SeparatorConfiguration: "<NumericSeparatorConfiguration>",
 *                                 DecimalPlacesConfiguration: "<DecimalPlacesConfiguration>",
 *                                 NegativeValueConfiguration: "<NegativeValueConfiguration>",
 *                                 NullValueFormatConfiguration: "<NullValueFormatConfiguration>",
 *                               },
 *                             },
 *                           },
 *                         },
 *                       },
 *                     ],
 *                     Values: [ // MeasureFieldList
 *                       { // MeasureField
 *                         NumericalMeasureField: { // NumericalMeasureField
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: "<ColumnIdentifier>", // required
 *                           AggregationFunction: { // NumericalAggregationFunction
 *                             SimpleNumericalAggregation: "SUM" || "AVERAGE" || "MIN" || "MAX" || "COUNT" || "DISTINCT_COUNT" || "VAR" || "VARP" || "STDEV" || "STDEVP" || "MEDIAN",
 *                             PercentileAggregation: { // PercentileAggregation
 *                               PercentileValue: Number("double"),
 *                             },
 *                           },
 *                           FormatConfiguration: {
 *                             FormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: {
 *                                 Prefix: "STRING_VALUE",
 *                                 Suffix: "STRING_VALUE",
 *                                 SeparatorConfiguration: "<NumericSeparatorConfiguration>",
 *                                 DecimalPlacesConfiguration: "<DecimalPlacesConfiguration>",
 *                                 NumberScale: "NONE" || "AUTO" || "THOUSANDS" || "MILLIONS" || "BILLIONS" || "TRILLIONS",
 *                                 NegativeValueConfiguration: "<NegativeValueConfiguration>",
 *                                 NullValueFormatConfiguration: "<NullValueFormatConfiguration>",
 *                               },
 *                               CurrencyDisplayFormatConfiguration: {
 *                                 Prefix: "STRING_VALUE",
 *                                 Suffix: "STRING_VALUE",
 *                                 SeparatorConfiguration: "<NumericSeparatorConfiguration>",
 *                                 Symbol: "STRING_VALUE",
 *                                 DecimalPlacesConfiguration: "<DecimalPlacesConfiguration>",
 *                                 NumberScale: "NONE" || "AUTO" || "THOUSANDS" || "MILLIONS" || "BILLIONS" || "TRILLIONS",
 *                                 NegativeValueConfiguration: "<NegativeValueConfiguration>",
 *                                 NullValueFormatConfiguration: "<NullValueFormatConfiguration>",
 *                               },
 *                               PercentageDisplayFormatConfiguration: {
 *                                 Prefix: "STRING_VALUE",
 *                                 Suffix: "STRING_VALUE",
 *                                 SeparatorConfiguration: "<NumericSeparatorConfiguration>",
 *                                 DecimalPlacesConfiguration: "<DecimalPlacesConfiguration>",
 *                                 NegativeValueConfiguration: "<NegativeValueConfiguration>",
 *                                 NullValueFormatConfiguration: "<NullValueFormatConfiguration>",
 *                               },
 *                             },
 *                           },
 *                         },
 *                         CategoricalMeasureField: { // CategoricalMeasureField
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: "<ColumnIdentifier>", // required
 *                           AggregationFunction: "COUNT" || "DISTINCT_COUNT",
 *                           FormatConfiguration: {
 *                             NullValueFormatConfiguration: "<NullValueFormatConfiguration>",
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: {
 *                                 Prefix: "STRING_VALUE",
 *                                 Suffix: "STRING_VALUE",
 *                                 SeparatorConfiguration: "<NumericSeparatorConfiguration>",
 *                                 DecimalPlacesConfiguration: "<DecimalPlacesConfiguration>",
 *                                 NumberScale: "NONE" || "AUTO" || "THOUSANDS" || "MILLIONS" || "BILLIONS" || "TRILLIONS",
 *                                 NegativeValueConfiguration: "<NegativeValueConfiguration>",
 *                                 NullValueFormatConfiguration: "<NullValueFormatConfiguration>",
 *                               },
 *                               CurrencyDisplayFormatConfiguration: {
 *                                 Prefix: "STRING_VALUE",
 *                                 Suffix: "STRING_VALUE",
 *                                 SeparatorConfiguration: "<NumericSeparatorConfiguration>",
 *                                 Symbol: "STRING_VALUE",
 *                                 DecimalPlacesConfiguration: "<DecimalPlacesConfiguration>",
 *                                 NumberScale: "NONE" || "AUTO" || "THOUSANDS" || "MILLIONS" || "BILLIONS" || "TRILLIONS",
 *                                 NegativeValueConfiguration: "<NegativeValueConfiguration>",
 *                                 NullValueFormatConfiguration: "<NullValueFormatConfiguration>",
 *                               },
 *                               PercentageDisplayFormatConfiguration: {
 *                                 Prefix: "STRING_VALUE",
 *                                 Suffix: "STRING_VALUE",
 *                                 SeparatorConfiguration: "<NumericSeparatorConfiguration>",
 *                                 DecimalPlacesConfiguration: "<DecimalPlacesConfiguration>",
 *                                 NegativeValueConfiguration: "<NegativeValueConfiguration>",
 *                                 NullValueFormatConfiguration: "<NullValueFormatConfiguration>",
 *                               },
 *                             },
 *                           },
 *                         },
 *                         DateMeasureField: { // DateMeasureField
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: "<ColumnIdentifier>", // required
 *                           AggregationFunction: "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX",
 *                           FormatConfiguration: {
 *                             DateTimeFormat: "STRING_VALUE",
 *                             NullValueFormatConfiguration: "<NullValueFormatConfiguration>",
 *                             NumericFormatConfiguration: "<NumericFormatConfiguration>",
 *                           },
 *                         },
 *                         CalculatedMeasureField: { // CalculatedMeasureField
 *                           FieldId: "STRING_VALUE", // required
 *                           Expression: "STRING_VALUE", // required
 *                         },
 *                       },
 *                     ],
 *                   },
 *                   TableUnaggregatedFieldWells: { // TableUnaggregatedFieldWells
 *                     Values: [ // UnaggregatedFieldList
 *                       { // UnaggregatedField
 *                         FieldId: "STRING_VALUE", // required
 *                         Column: "<ColumnIdentifier>", // required
 *                         FormatConfiguration: { // FormatConfiguration
 *                           StringFormatConfiguration: {
 *                             NullValueFormatConfiguration: "<NullValueFormatConfiguration>",
 *                             NumericFormatConfiguration: "<NumericFormatConfiguration>",
 *                           },
 *                           NumberFormatConfiguration: {
 *                             FormatConfiguration: "<NumericFormatConfiguration>",
 *                           },
 *                           DateTimeFormatConfiguration: {
 *                             DateTimeFormat: "STRING_VALUE",
 *                             NullValueFormatConfiguration: "<NullValueFormatConfiguration>",
 *                             NumericFormatConfiguration: "<NumericFormatConfiguration>",
 *                           },
 *                         },
 *                       },
 *                     ],
 *                   },
 *                 },
 *                 SortConfiguration: { // TableSortConfiguration
 *                   RowSort: [ // RowSortList
 *                     { // FieldSortOptions
 *                       FieldSort: { // FieldSort
 *                         FieldId: "STRING_VALUE", // required
 *                         Direction: "ASC" || "DESC", // required
 *                       },
 *                       ColumnSort: { // ColumnSort
 *                         SortBy: "<ColumnIdentifier>", // required
 *                         Direction: "ASC" || "DESC", // required
 *                         AggregationFunction: { // AggregationFunction
 *                           NumericalAggregationFunction: {
 *                             SimpleNumericalAggregation: "SUM" || "AVERAGE" || "MIN" || "MAX" || "COUNT" || "DISTINCT_COUNT" || "VAR" || "VARP" || "STDEV" || "STDEVP" || "MEDIAN",
 *                             PercentileAggregation: {
 *                               PercentileValue: Number("double"),
 *                             },
 *                           },
 *                           CategoricalAggregationFunction: "COUNT" || "DISTINCT_COUNT",
 *                           DateAggregationFunction: "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX",
 *                           AttributeAggregationFunction: { // AttributeAggregationFunction
 *                             SimpleAttributeAggregation: "UNIQUE_VALUE",
 *                             ValueForMultipleValues: "STRING_VALUE",
 *                           },
 *                         },
 *                       },
 *                     },
 *                   ],
 *                   PaginationConfiguration: { // PaginationConfiguration
 *                     PageSize: Number("long"), // required
 *                     PageNumber: Number("long"), // required
 *                   },
 *                 },
 *                 TableOptions: { // TableOptions
 *                   Orientation: "VERTICAL" || "HORIZONTAL",
 *                   HeaderStyle: { // TableCellStyle
 *                     Visibility: "HIDDEN" || "VISIBLE",
 *                     FontConfiguration: "<FontConfiguration>",
 *                     TextWrap: "NONE" || "WRAP",
 *                     HorizontalTextAlignment: "LEFT" || "CENTER" || "RIGHT" || "AUTO",
 *                     VerticalTextAlignment: "TOP" || "MIDDLE" || "BOTTOM" || "AUTO",
 *                     BackgroundColor: "STRING_VALUE",
 *                     Height: Number("int"),
 *                     Border: { // GlobalTableBorderOptions
 *                       UniformBorder: { // TableBorderOptions
 *                         Color: "STRING_VALUE",
 *                         Thickness: Number("int"),
 *                         Style: "NONE" || "SOLID",
 *                       },
 *                       SideSpecificBorder: { // TableSideBorderOptions
 *                         InnerVertical: {
 *                           Color: "STRING_VALUE",
 *                           Thickness: Number("int"),
 *                           Style: "NONE" || "SOLID",
 *                         },
 *                         InnerHorizontal: {
 *                           Color: "STRING_VALUE",
 *                           Thickness: Number("int"),
 *                           Style: "NONE" || "SOLID",
 *                         },
 *                         Left: {
 *                           Color: "STRING_VALUE",
 *                           Thickness: Number("int"),
 *                           Style: "NONE" || "SOLID",
 *                         },
 *                         Right: {
 *                           Color: "STRING_VALUE",
 *                           Thickness: Number("int"),
 *                           Style: "NONE" || "SOLID",
 *                         },
 *                         Top: "<TableBorderOptions>",
 *                         Bottom: "<TableBorderOptions>",
 *                       },
 *                     },
 *                   },
 *                   CellStyle: {
 *                     Visibility: "HIDDEN" || "VISIBLE",
 *                     FontConfiguration: "<FontConfiguration>",
 *                     TextWrap: "NONE" || "WRAP",
 *                     HorizontalTextAlignment: "LEFT" || "CENTER" || "RIGHT" || "AUTO",
 *                     VerticalTextAlignment: "TOP" || "MIDDLE" || "BOTTOM" || "AUTO",
 *                     BackgroundColor: "STRING_VALUE",
 *                     Height: Number("int"),
 *                     Border: {
 *                       UniformBorder: "<TableBorderOptions>",
 *                       SideSpecificBorder: {
 *                         InnerVertical: "<TableBorderOptions>",
 *                         InnerHorizontal: "<TableBorderOptions>",
 *                         Left: "<TableBorderOptions>",
 *                         Right: "<TableBorderOptions>",
 *                         Top: "<TableBorderOptions>",
 *                         Bottom: "<TableBorderOptions>",
 *                       },
 *                     },
 *                   },
 *                   RowAlternateColorOptions: { // RowAlternateColorOptions
 *                     Status: "ENABLED" || "DISABLED",
 *                     RowAlternateColors: [ // RowAlternateColorList
 *                       "STRING_VALUE",
 *                     ],
 *                     UsePrimaryBackgroundColor: "ENABLED" || "DISABLED",
 *                   },
 *                 },
 *                 TotalOptions: { // TotalOptions
 *                   TotalsVisibility: "HIDDEN" || "VISIBLE",
 *                   Placement: "START" || "END" || "AUTO",
 *                   ScrollStatus: "PINNED" || "SCROLLED",
 *                   CustomLabel: "STRING_VALUE",
 *                   TotalCellStyle: {
 *                     Visibility: "HIDDEN" || "VISIBLE",
 *                     FontConfiguration: "<FontConfiguration>",
 *                     TextWrap: "NONE" || "WRAP",
 *                     HorizontalTextAlignment: "LEFT" || "CENTER" || "RIGHT" || "AUTO",
 *                     VerticalTextAlignment: "TOP" || "MIDDLE" || "BOTTOM" || "AUTO",
 *                     BackgroundColor: "STRING_VALUE",
 *                     Height: Number("int"),
 *                     Border: {
 *                       UniformBorder: "<TableBorderOptions>",
 *                       SideSpecificBorder: {
 *                         InnerVertical: "<TableBorderOptions>",
 *                         InnerHorizontal: "<TableBorderOptions>",
 *                         Left: "<TableBorderOptions>",
 *                         Right: "<TableBorderOptions>",
 *                         Top: "<TableBorderOptions>",
 *                         Bottom: "<TableBorderOptions>",
 *                       },
 *                     },
 *                   },
 *                   TotalAggregationOptions: [ // TotalAggregationOptionList
 *                     { // TotalAggregationOption
 *                       FieldId: "STRING_VALUE", // required
 *                       TotalAggregationFunction: { // TotalAggregationFunction
 *                         SimpleTotalAggregationFunction: "DEFAULT" || "SUM" || "AVERAGE" || "MIN" || "MAX" || "NONE",
 *                       },
 *                     },
 *                   ],
 *                 },
 *                 FieldOptions: { // TableFieldOptions
 *                   SelectedFieldOptions: [ // TableFieldOptionList
 *                     { // TableFieldOption
 *                       FieldId: "STRING_VALUE", // required
 *                       Width: "STRING_VALUE",
 *                       CustomLabel: "STRING_VALUE",
 *                       Visibility: "HIDDEN" || "VISIBLE",
 *                       URLStyling: { // TableFieldURLConfiguration
 *                         LinkConfiguration: { // TableFieldLinkConfiguration
 *                           Target: "NEW_TAB" || "NEW_WINDOW" || "SAME_TAB", // required
 *                           Content: { // TableFieldLinkContentConfiguration
 *                             CustomTextContent: { // TableFieldCustomTextContent
 *                               Value: "STRING_VALUE",
 *                               FontConfiguration: "<FontConfiguration>", // required
 *                             },
 *                             CustomIconContent: { // TableFieldCustomIconContent
 *                               Icon: "LINK",
 *                             },
 *                           },
 *                         },
 *                         ImageConfiguration: { // TableFieldImageConfiguration
 *                           SizingOptions: { // TableCellImageSizingConfiguration
 *                             TableCellImageScalingConfiguration: "FIT_TO_CELL_HEIGHT" || "FIT_TO_CELL_WIDTH" || "DO_NOT_SCALE",
 *                           },
 *                         },
 *                       },
 *                     },
 *                   ],
 *                   Order: [ // FieldOrderList
 *                     "STRING_VALUE",
 *                   ],
 *                   PinnedFieldOptions: { // TablePinnedFieldOptions
 *                     PinnedLeftFields: [ // TableFieldOrderList
 *                       "STRING_VALUE",
 *                     ],
 *                   },
 *                 },
 *                 PaginatedReportOptions: { // TablePaginatedReportOptions
 *                   VerticalOverflowVisibility: "HIDDEN" || "VISIBLE",
 *                   OverflowColumnHeaderVisibility: "HIDDEN" || "VISIBLE",
 *                 },
 *                 TableInlineVisualizations: [ // TableInlineVisualizationList
 *                   { // TableInlineVisualization
 *                     DataBars: { // DataBarsOptions
 *                       FieldId: "STRING_VALUE", // required
 *                       PositiveColor: "STRING_VALUE",
 *                       NegativeColor: "STRING_VALUE",
 *                     },
 *                   },
 *                 ],
 *                 Interactions: { // VisualInteractionOptions
 *                   VisualMenuOption: {
 *                     AvailabilityStatus: "ENABLED" || "DISABLED",
 *                   },
 *                   ContextMenuOption: { // ContextMenuOption
 *                     AvailabilityStatus: "ENABLED" || "DISABLED",
 *                   },
 *                 },
 *               },
 *               ConditionalFormatting: { // TableConditionalFormatting
 *                 ConditionalFormattingOptions: [ // TableConditionalFormattingOptionList
 *                   { // TableConditionalFormattingOption
 *                     Cell: { // TableCellConditionalFormatting
 *                       FieldId: "STRING_VALUE", // required
 *                       TextFormat: { // TextConditionalFormat
 *                         BackgroundColor: { // ConditionalFormattingColor
 *                           Solid: { // ConditionalFormattingSolidColor
 *                             Expression: "STRING_VALUE", // required
 *                             Color: "STRING_VALUE",
 *                           },
 *                           Gradient: { // ConditionalFormattingGradientColor
 *                             Expression: "STRING_VALUE", // required
 *                             Color: { // GradientColor
 *                               Stops: [ // GradientStopList
 *                                 { // GradientStop
 *                                   GradientOffset: Number("double"), // required
 *                                   DataValue: Number("double"),
 *                                   Color: "STRING_VALUE",
 *                                 },
 *                               ],
 *                             },
 *                           },
 *                         },
 *                         TextColor: {
 *                           Solid: {
 *                             Expression: "STRING_VALUE", // required
 *                             Color: "STRING_VALUE",
 *                           },
 *                           Gradient: {
 *                             Expression: "STRING_VALUE", // required
 *                             Color: {
 *                               Stops: [
 *                                 {
 *                                   GradientOffset: Number("double"), // required
 *                                   DataValue: Number("double"),
 *                                   Color: "STRING_VALUE",
 *                                 },
 *                               ],
 *                             },
 *                           },
 *                         },
 *                         Icon: { // ConditionalFormattingIcon
 *                           IconSet: { // ConditionalFormattingIconSet
 *                             Expression: "STRING_VALUE", // required
 *                             IconSetType: "PLUS_MINUS" || "CHECK_X" || "THREE_COLOR_ARROW" || "THREE_GRAY_ARROW" || "CARET_UP_MINUS_DOWN" || "THREE_SHAPE" || "THREE_CIRCLE" || "FLAGS" || "BARS" || "FOUR_COLOR_ARROW" || "FOUR_GRAY_ARROW",
 *                           },
 *                           CustomCondition: { // ConditionalFormattingCustomIconCondition
 *                             Expression: "STRING_VALUE", // required
 *                             IconOptions: { // ConditionalFormattingCustomIconOptions
 *                               Icon: "CARET_UP" || "CARET_DOWN" || "PLUS" || "MINUS" || "ARROW_UP" || "ARROW_DOWN" || "ARROW_LEFT" || "ARROW_UP_LEFT" || "ARROW_DOWN_LEFT" || "ARROW_RIGHT" || "ARROW_UP_RIGHT" || "ARROW_DOWN_RIGHT" || "FACE_UP" || "FACE_DOWN" || "FACE_FLAT" || "ONE_BAR" || "TWO_BAR" || "THREE_BAR" || "CIRCLE" || "TRIANGLE" || "SQUARE" || "FLAG" || "THUMBS_UP" || "THUMBS_DOWN" || "CHECKMARK" || "X",
 *                               UnicodeIcon: "STRING_VALUE",
 *                             },
 *                             Color: "STRING_VALUE",
 *                             DisplayConfiguration: { // ConditionalFormattingIconDisplayConfiguration
 *                               IconDisplayOption: "ICON_ONLY",
 *                             },
 *                           },
 *                         },
 *                       },
 *                     },
 *                     Row: { // TableRowConditionalFormatting
 *                       BackgroundColor: {
 *                         Solid: {
 *                           Expression: "STRING_VALUE", // required
 *                           Color: "STRING_VALUE",
 *                         },
 *                         Gradient: {
 *                           Expression: "STRING_VALUE", // required
 *                           Color: {
 *                             Stops: [
 *                               {
 *                                 GradientOffset: Number("double"), // required
 *                                 DataValue: Number("double"),
 *                                 Color: "STRING_VALUE",
 *                               },
 *                             ],
 *                           },
 *                         },
 *                       },
 *                       TextColor: {
 *                         Solid: {
 *                           Expression: "STRING_VALUE", // required
 *                           Color: "STRING_VALUE",
 *                         },
 *                         Gradient: {
 *                           Expression: "STRING_VALUE", // required
 *                           Color: {
 *                             Stops: [
 *                               {
 *                                 GradientOffset: Number("double"), // required
 *                                 DataValue: Number("double"),
 *                                 Color: "STRING_VALUE",
 *                               },
 *                             ],
 *                           },
 *                         },
 *                       },
 *                     },
 *                   },
 *                 ],
 *               },
 *               Actions: [ // VisualCustomActionList
 *                 { // VisualCustomAction
 *                   CustomActionId: "STRING_VALUE", // required
 *                   Name: "STRING_VALUE", // required
 *                   Status: "ENABLED" || "DISABLED",
 *                   Trigger: "DATA_POINT_CLICK" || "DATA_POINT_MENU", // required
 *                   ActionOperations: [ // VisualCustomActionOperationList // required
 *                     { // VisualCustomActionOperation
 *                       FilterOperation: { // CustomActionFilterOperation
 *                         SelectedFieldsConfiguration: { // FilterOperationSelectedFieldsConfiguration
 *                           SelectedFields: [ // SelectedFieldList
 *                             "STRING_VALUE",
 *                           ],
 *                           SelectedFieldOptions: "ALL_FIELDS",
 *                           SelectedColumns: [ // CustomActionColumnList
 *                             "<ColumnIdentifier>",
 *                           ],
 *                         },
 *                         TargetVisualsConfiguration: { // FilterOperationTargetVisualsConfiguration
 *                           SameSheetTargetVisualConfiguration: { // SameSheetTargetVisualConfiguration
 *                             TargetVisuals: [ // TargetVisualList
 *                               "STRING_VALUE",
 *                             ],
 *                             TargetVisualOptions: "ALL_VISUALS",
 *                           },
 *                         },
 *                       },
 *                       NavigationOperation: { // CustomActionNavigationOperation
 *                         LocalNavigationConfiguration: { // LocalNavigationConfiguration
 *                           TargetSheetId: "STRING_VALUE", // required
 *                         },
 *                       },
 *                       URLOperation: { // CustomActionURLOperation
 *                         URLTemplate: "STRING_VALUE", // required
 *                         URLTarget: "NEW_TAB" || "NEW_WINDOW" || "SAME_TAB", // required
 *                       },
 *                       SetParametersOperation: { // CustomActionSetParametersOperation
 *                         ParameterValueConfigurations: [ // SetParameterValueConfigurationList // required
 *                           { // SetParameterValueConfiguration
 *                             DestinationParameterName: "STRING_VALUE", // required
 *                             Value: { // DestinationParameterValueConfiguration
 *                               CustomValuesConfiguration: { // CustomValuesConfiguration
 *                                 IncludeNullValue: true || false,
 *                                 CustomValues: { // CustomParameterValues
 *                                   StringValues: [ // StringDefaultValueList
 *                                     "STRING_VALUE",
 *                                   ],
 *                                   IntegerValues: [ // IntegerDefaultValueList
 *                                     Number("long"),
 *                                   ],
 *                                   DecimalValues: [ // DecimalDefaultValueList
 *                                     Number("double"),
 *                                   ],
 *                                   DateTimeValues: [ // DateTimeDefaultValueList
 *                                     new Date("TIMESTAMP"),
 *                                   ],
 *                                 },
 *                               },
 *                               SelectAllValueOptions: "ALL_VALUES",
 *                               SourceParameterName: "STRING_VALUE",
 *                               SourceField: "STRING_VALUE",
 *                               SourceColumn: "<ColumnIdentifier>",
 *                             },
 *                           },
 *                         ],
 *                       },
 *                     },
 *                   ],
 *                 },
 *               ],
 *             },
 *             PivotTableVisual: { // PivotTableVisual
 *               VisualId: "STRING_VALUE", // required
 *               Title: {
 *                 Visibility: "HIDDEN" || "VISIBLE",
 *                 FormatText: {
 *                   PlainText: "STRING_VALUE",
 *                   RichText: "STRING_VALUE",
 *                 },
 *               },
 *               Subtitle: {
 *                 Visibility: "HIDDEN" || "VISIBLE",
 *                 FormatText: {
 *                   PlainText: "STRING_VALUE",
 *                   RichText: "STRING_VALUE",
 *                 },
 *               },
 *               ChartConfiguration: { // PivotTableConfiguration
 *                 FieldWells: { // PivotTableFieldWells
 *                   PivotTableAggregatedFieldWells: { // PivotTableAggregatedFieldWells
 *                     Rows: [ // PivotTableDimensionList
 *                       {
 *                         NumericalDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: "<ColumnIdentifier>", // required
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             FormatConfiguration: "<NumericFormatConfiguration>",
 *                           },
 *                         },
 *                         CategoricalDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: "<ColumnIdentifier>", // required
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             NullValueFormatConfiguration: "<NullValueFormatConfiguration>",
 *                             NumericFormatConfiguration: "<NumericFormatConfiguration>",
 *                           },
 *                         },
 *                         DateDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: "<ColumnIdentifier>", // required
 *                           DateGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             DateTimeFormat: "STRING_VALUE",
 *                             NullValueFormatConfiguration: "<NullValueFormatConfiguration>",
 *                             NumericFormatConfiguration: "<NumericFormatConfiguration>",
 *                           },
 *                         },
 *                       },
 *                     ],
 *                     Columns: [
 *                       {
 *                         NumericalDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: "<ColumnIdentifier>", // required
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             FormatConfiguration: "<NumericFormatConfiguration>",
 *                           },
 *                         },
 *                         CategoricalDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: "<ColumnIdentifier>", // required
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             NullValueFormatConfiguration: "<NullValueFormatConfiguration>",
 *                             NumericFormatConfiguration: "<NumericFormatConfiguration>",
 *                           },
 *                         },
 *                         DateDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: "<ColumnIdentifier>", // required
 *                           DateGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             DateTimeFormat: "STRING_VALUE",
 *                             NullValueFormatConfiguration: "<NullValueFormatConfiguration>",
 *                             NumericFormatConfiguration: "<NumericFormatConfiguration>",
 *                           },
 *                         },
 *                       },
 *                     ],
 *                     Values: [ // PivotMeasureFieldList
 *                       {
 *                         NumericalMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: "<ColumnIdentifier>", // required
 *                           AggregationFunction: {
 *                             SimpleNumericalAggregation: "SUM" || "AVERAGE" || "MIN" || "MAX" || "COUNT" || "DISTINCT_COUNT" || "VAR" || "VARP" || "STDEV" || "STDEVP" || "MEDIAN",
 *                             PercentileAggregation: {
 *                               PercentileValue: Number("double"),
 *                             },
 *                           },
 *                           FormatConfiguration: "<NumberFormatConfiguration>",
 *                         },
 *                         CategoricalMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: "<ColumnIdentifier>", // required
 *                           AggregationFunction: "COUNT" || "DISTINCT_COUNT",
 *                           FormatConfiguration: "<StringFormatConfiguration>",
 *                         },
 *                         DateMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: "<ColumnIdentifier>", // required
 *                           AggregationFunction: "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX",
 *                           FormatConfiguration: "<DateTimeFormatConfiguration>",
 *                         },
 *                         CalculatedMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Expression: "STRING_VALUE", // required
 *                         },
 *                       },
 *                     ],
 *                   },
 *                 },
 *                 SortConfiguration: { // PivotTableSortConfiguration
 *                   FieldSortOptions: [ // PivotFieldSortOptionsList
 *                     { // PivotFieldSortOptions
 *                       FieldId: "STRING_VALUE", // required
 *                       SortBy: { // PivotTableSortBy
 *                         Field: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Direction: "ASC" || "DESC", // required
 *                         },
 *                         Column: {
 *                           SortBy: "<ColumnIdentifier>", // required
 *                           Direction: "ASC" || "DESC", // required
 *                           AggregationFunction: {
 *                             NumericalAggregationFunction: {
 *                               SimpleNumericalAggregation: "SUM" || "AVERAGE" || "MIN" || "MAX" || "COUNT" || "DISTINCT_COUNT" || "VAR" || "VARP" || "STDEV" || "STDEVP" || "MEDIAN",
 *                               PercentileAggregation: {
 *                                 PercentileValue: Number("double"),
 *                               },
 *                             },
 *                             CategoricalAggregationFunction: "COUNT" || "DISTINCT_COUNT",
 *                             DateAggregationFunction: "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX",
 *                             AttributeAggregationFunction: {
 *                               SimpleAttributeAggregation: "UNIQUE_VALUE",
 *                               ValueForMultipleValues: "STRING_VALUE",
 *                             },
 *                           },
 *                         },
 *                         DataPath: { // DataPathSort
 *                           Direction: "ASC" || "DESC", // required
 *                           SortPaths: [ // DataPathValueList // required
 *                             { // DataPathValue
 *                               FieldId: "STRING_VALUE",
 *                               FieldValue: "STRING_VALUE",
 *                               DataPathType: { // DataPathType
 *                                 PivotTableDataPathType: "HIERARCHY_ROWS_LAYOUT_COLUMN" || "MULTIPLE_ROW_METRICS_COLUMN" || "EMPTY_COLUMN_HEADER" || "COUNT_METRIC_COLUMN",
 *                               },
 *                             },
 *                           ],
 *                         },
 *                       },
 *                     },
 *                   ],
 *                 },
 *                 TableOptions: { // PivotTableOptions
 *                   MetricPlacement: "ROW" || "COLUMN",
 *                   SingleMetricVisibility: "HIDDEN" || "VISIBLE",
 *                   ColumnNamesVisibility: "HIDDEN" || "VISIBLE",
 *                   ToggleButtonsVisibility: "HIDDEN" || "VISIBLE",
 *                   ColumnHeaderStyle: {
 *                     Visibility: "HIDDEN" || "VISIBLE",
 *                     FontConfiguration: "<FontConfiguration>",
 *                     TextWrap: "NONE" || "WRAP",
 *                     HorizontalTextAlignment: "LEFT" || "CENTER" || "RIGHT" || "AUTO",
 *                     VerticalTextAlignment: "TOP" || "MIDDLE" || "BOTTOM" || "AUTO",
 *                     BackgroundColor: "STRING_VALUE",
 *                     Height: Number("int"),
 *                     Border: {
 *                       UniformBorder: "<TableBorderOptions>",
 *                       SideSpecificBorder: {
 *                         InnerVertical: "<TableBorderOptions>",
 *                         InnerHorizontal: "<TableBorderOptions>",
 *                         Left: "<TableBorderOptions>",
 *                         Right: "<TableBorderOptions>",
 *                         Top: "<TableBorderOptions>",
 *                         Bottom: "<TableBorderOptions>",
 *                       },
 *                     },
 *                   },
 *                   RowHeaderStyle: {
 *                     Visibility: "HIDDEN" || "VISIBLE",
 *                     FontConfiguration: "<FontConfiguration>",
 *                     TextWrap: "NONE" || "WRAP",
 *                     HorizontalTextAlignment: "LEFT" || "CENTER" || "RIGHT" || "AUTO",
 *                     VerticalTextAlignment: "TOP" || "MIDDLE" || "BOTTOM" || "AUTO",
 *                     BackgroundColor: "STRING_VALUE",
 *                     Height: Number("int"),
 *                     Border: {
 *                       UniformBorder: "<TableBorderOptions>",
 *                       SideSpecificBorder: {
 *                         InnerVertical: "<TableBorderOptions>",
 *                         InnerHorizontal: "<TableBorderOptions>",
 *                         Left: "<TableBorderOptions>",
 *                         Right: "<TableBorderOptions>",
 *                         Top: "<TableBorderOptions>",
 *                         Bottom: "<TableBorderOptions>",
 *                       },
 *                     },
 *                   },
 *                   CellStyle: "<TableCellStyle>",
 *                   RowFieldNamesStyle: "<TableCellStyle>",
 *                   RowAlternateColorOptions: {
 *                     Status: "ENABLED" || "DISABLED",
 *                     RowAlternateColors: [
 *                       "STRING_VALUE",
 *                     ],
 *                     UsePrimaryBackgroundColor: "ENABLED" || "DISABLED",
 *                   },
 *                   CollapsedRowDimensionsVisibility: "HIDDEN" || "VISIBLE",
 *                   RowsLayout: "TABULAR" || "HIERARCHY",
 *                   RowsLabelOptions: { // PivotTableRowsLabelOptions
 *                     Visibility: "HIDDEN" || "VISIBLE",
 *                     CustomLabel: "STRING_VALUE",
 *                   },
 *                   DefaultCellWidth: "STRING_VALUE",
 *                 },
 *                 TotalOptions: { // PivotTableTotalOptions
 *                   RowSubtotalOptions: { // SubtotalOptions
 *                     TotalsVisibility: "HIDDEN" || "VISIBLE",
 *                     CustomLabel: "STRING_VALUE",
 *                     FieldLevel: "ALL" || "CUSTOM" || "LAST",
 *                     FieldLevelOptions: [ // PivotTableFieldSubtotalOptionsList
 *                       { // PivotTableFieldSubtotalOptions
 *                         FieldId: "STRING_VALUE",
 *                       },
 *                     ],
 *                     TotalCellStyle: "<TableCellStyle>",
 *                     ValueCellStyle: "<TableCellStyle>",
 *                     MetricHeaderCellStyle: "<TableCellStyle>",
 *                     StyleTargets: [ // TableStyleTargetList
 *                       { // TableStyleTarget
 *                         CellType: "TOTAL" || "METRIC_HEADER" || "VALUE", // required
 *                       },
 *                     ],
 *                   },
 *                   ColumnSubtotalOptions: {
 *                     TotalsVisibility: "HIDDEN" || "VISIBLE",
 *                     CustomLabel: "STRING_VALUE",
 *                     FieldLevel: "ALL" || "CUSTOM" || "LAST",
 *                     FieldLevelOptions: [
 *                       {
 *                         FieldId: "STRING_VALUE",
 *                       },
 *                     ],
 *                     TotalCellStyle: "<TableCellStyle>",
 *                     ValueCellStyle: "<TableCellStyle>",
 *                     MetricHeaderCellStyle: "<TableCellStyle>",
 *                     StyleTargets: [
 *                       {
 *                         CellType: "TOTAL" || "METRIC_HEADER" || "VALUE", // required
 *                       },
 *                     ],
 *                   },
 *                   RowTotalOptions: { // PivotTotalOptions
 *                     TotalsVisibility: "HIDDEN" || "VISIBLE",
 *                     Placement: "START" || "END" || "AUTO",
 *                     ScrollStatus: "PINNED" || "SCROLLED",
 *                     CustomLabel: "STRING_VALUE",
 *                     TotalCellStyle: "<TableCellStyle>",
 *                     ValueCellStyle: "<TableCellStyle>",
 *                     MetricHeaderCellStyle: "<TableCellStyle>",
 *                     TotalAggregationOptions: [
 *                       {
 *                         FieldId: "STRING_VALUE", // required
 *                         TotalAggregationFunction: {
 *                           SimpleTotalAggregationFunction: "DEFAULT" || "SUM" || "AVERAGE" || "MIN" || "MAX" || "NONE",
 *                         },
 *                       },
 *                     ],
 *                   },
 *                   ColumnTotalOptions: {
 *                     TotalsVisibility: "HIDDEN" || "VISIBLE",
 *                     Placement: "START" || "END" || "AUTO",
 *                     ScrollStatus: "PINNED" || "SCROLLED",
 *                     CustomLabel: "STRING_VALUE",
 *                     TotalCellStyle: "<TableCellStyle>",
 *                     ValueCellStyle: "<TableCellStyle>",
 *                     MetricHeaderCellStyle: "<TableCellStyle>",
 *                     TotalAggregationOptions: [
 *                       {
 *                         FieldId: "STRING_VALUE", // required
 *                         TotalAggregationFunction: {
 *                           SimpleTotalAggregationFunction: "DEFAULT" || "SUM" || "AVERAGE" || "MIN" || "MAX" || "NONE",
 *                         },
 *                       },
 *                     ],
 *                   },
 *                 },
 *                 FieldOptions: { // PivotTableFieldOptions
 *                   SelectedFieldOptions: [ // PivotTableFieldOptionList
 *                     { // PivotTableFieldOption
 *                       FieldId: "STRING_VALUE", // required
 *                       CustomLabel: "STRING_VALUE",
 *                       Visibility: "HIDDEN" || "VISIBLE",
 *                     },
 *                   ],
 *                   DataPathOptions: [ // PivotTableDataPathOptionList
 *                     { // PivotTableDataPathOption
 *                       DataPathList: [ // required
 *                         {
 *                           FieldId: "STRING_VALUE",
 *                           FieldValue: "STRING_VALUE",
 *                           DataPathType: {
 *                             PivotTableDataPathType: "HIERARCHY_ROWS_LAYOUT_COLUMN" || "MULTIPLE_ROW_METRICS_COLUMN" || "EMPTY_COLUMN_HEADER" || "COUNT_METRIC_COLUMN",
 *                           },
 *                         },
 *                       ],
 *                       Width: "STRING_VALUE",
 *                     },
 *                   ],
 *                   CollapseStateOptions: [ // PivotTableFieldCollapseStateOptionList
 *                     { // PivotTableFieldCollapseStateOption
 *                       Target: { // PivotTableFieldCollapseStateTarget
 *                         FieldId: "STRING_VALUE",
 *                         FieldDataPathValues: "<DataPathValueList>",
 *                       },
 *                       State: "COLLAPSED" || "EXPANDED",
 *                     },
 *                   ],
 *                 },
 *                 PaginatedReportOptions: { // PivotTablePaginatedReportOptions
 *                   VerticalOverflowVisibility: "HIDDEN" || "VISIBLE",
 *                   OverflowColumnHeaderVisibility: "HIDDEN" || "VISIBLE",
 *                 },
 *                 Interactions: {
 *                   VisualMenuOption: {
 *                     AvailabilityStatus: "ENABLED" || "DISABLED",
 *                   },
 *                   ContextMenuOption: {
 *                     AvailabilityStatus: "ENABLED" || "DISABLED",
 *                   },
 *                 },
 *               },
 *               ConditionalFormatting: { // PivotTableConditionalFormatting
 *                 ConditionalFormattingOptions: [ // PivotTableConditionalFormattingOptionList
 *                   { // PivotTableConditionalFormattingOption
 *                     Cell: { // PivotTableCellConditionalFormatting
 *                       FieldId: "STRING_VALUE", // required
 *                       TextFormat: {
 *                         BackgroundColor: {
 *                           Solid: {
 *                             Expression: "STRING_VALUE", // required
 *                             Color: "STRING_VALUE",
 *                           },
 *                           Gradient: {
 *                             Expression: "STRING_VALUE", // required
 *                             Color: {
 *                               Stops: [
 *                                 {
 *                                   GradientOffset: Number("double"), // required
 *                                   DataValue: Number("double"),
 *                                   Color: "STRING_VALUE",
 *                                 },
 *                               ],
 *                             },
 *                           },
 *                         },
 *                         TextColor: "<ConditionalFormattingColor>",
 *                         Icon: {
 *                           IconSet: {
 *                             Expression: "STRING_VALUE", // required
 *                             IconSetType: "PLUS_MINUS" || "CHECK_X" || "THREE_COLOR_ARROW" || "THREE_GRAY_ARROW" || "CARET_UP_MINUS_DOWN" || "THREE_SHAPE" || "THREE_CIRCLE" || "FLAGS" || "BARS" || "FOUR_COLOR_ARROW" || "FOUR_GRAY_ARROW",
 *                           },
 *                           CustomCondition: {
 *                             Expression: "STRING_VALUE", // required
 *                             IconOptions: {
 *                               Icon: "CARET_UP" || "CARET_DOWN" || "PLUS" || "MINUS" || "ARROW_UP" || "ARROW_DOWN" || "ARROW_LEFT" || "ARROW_UP_LEFT" || "ARROW_DOWN_LEFT" || "ARROW_RIGHT" || "ARROW_UP_RIGHT" || "ARROW_DOWN_RIGHT" || "FACE_UP" || "FACE_DOWN" || "FACE_FLAT" || "ONE_BAR" || "TWO_BAR" || "THREE_BAR" || "CIRCLE" || "TRIANGLE" || "SQUARE" || "FLAG" || "THUMBS_UP" || "THUMBS_DOWN" || "CHECKMARK" || "X",
 *                               UnicodeIcon: "STRING_VALUE",
 *                             },
 *                             Color: "STRING_VALUE",
 *                             DisplayConfiguration: {
 *                               IconDisplayOption: "ICON_ONLY",
 *                             },
 *                           },
 *                         },
 *                       },
 *                       Scope: { // PivotTableConditionalFormattingScope
 *                         Role: "FIELD" || "FIELD_TOTAL" || "GRAND_TOTAL",
 *                       },
 *                       Scopes: [ // PivotTableConditionalFormattingScopeList
 *                         {
 *                           Role: "FIELD" || "FIELD_TOTAL" || "GRAND_TOTAL",
 *                         },
 *                       ],
 *                     },
 *                   },
 *                 ],
 *               },
 *               Actions: [
 *                 {
 *                   CustomActionId: "STRING_VALUE", // required
 *                   Name: "STRING_VALUE", // required
 *                   Status: "ENABLED" || "DISABLED",
 *                   Trigger: "DATA_POINT_CLICK" || "DATA_POINT_MENU", // required
 *                   ActionOperations: [ // required
 *                     {
 *                       FilterOperation: {
 *                         SelectedFieldsConfiguration: {
 *                           SelectedFields: [
 *                             "STRING_VALUE",
 *                           ],
 *                           SelectedFieldOptions: "ALL_FIELDS",
 *                           SelectedColumns: [
 *                             "<ColumnIdentifier>",
 *                           ],
 *                         },
 *                         TargetVisualsConfiguration: {
 *                           SameSheetTargetVisualConfiguration: {
 *                             TargetVisuals: [
 *                               "STRING_VALUE",
 *                             ],
 *                             TargetVisualOptions: "ALL_VISUALS",
 *                           },
 *                         },
 *                       },
 *                       NavigationOperation: {
 *                         LocalNavigationConfiguration: {
 *                           TargetSheetId: "STRING_VALUE", // required
 *                         },
 *                       },
 *                       URLOperation: {
 *                         URLTemplate: "STRING_VALUE", // required
 *                         URLTarget: "NEW_TAB" || "NEW_WINDOW" || "SAME_TAB", // required
 *                       },
 *                       SetParametersOperation: {
 *                         ParameterValueConfigurations: [ // required
 *                           {
 *                             DestinationParameterName: "STRING_VALUE", // required
 *                             Value: {
 *                               CustomValuesConfiguration: {
 *                                 IncludeNullValue: true || false,
 *                                 CustomValues: {
 *                                   StringValues: [
 *                                     "STRING_VALUE",
 *                                   ],
 *                                   IntegerValues: [
 *                                     Number("long"),
 *                                   ],
 *                                   DecimalValues: [
 *                                     Number("double"),
 *                                   ],
 *                                   DateTimeValues: [
 *                                     new Date("TIMESTAMP"),
 *                                   ],
 *                                 },
 *                               },
 *                               SelectAllValueOptions: "ALL_VALUES",
 *                               SourceParameterName: "STRING_VALUE",
 *                               SourceField: "STRING_VALUE",
 *                               SourceColumn: "<ColumnIdentifier>",
 *                             },
 *                           },
 *                         ],
 *                       },
 *                     },
 *                   ],
 *                 },
 *               ],
 *             },
 *             BarChartVisual: { // BarChartVisual
 *               VisualId: "STRING_VALUE", // required
 *               Title: {
 *                 Visibility: "HIDDEN" || "VISIBLE",
 *                 FormatText: {
 *                   PlainText: "STRING_VALUE",
 *                   RichText: "STRING_VALUE",
 *                 },
 *               },
 *               Subtitle: {
 *                 Visibility: "HIDDEN" || "VISIBLE",
 *                 FormatText: {
 *                   PlainText: "STRING_VALUE",
 *                   RichText: "STRING_VALUE",
 *                 },
 *               },
 *               ChartConfiguration: { // BarChartConfiguration
 *                 FieldWells: { // BarChartFieldWells
 *                   BarChartAggregatedFieldWells: { // BarChartAggregatedFieldWells
 *                     Category: [
 *                       {
 *                         NumericalDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: "<ColumnIdentifier>", // required
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: "<NumberFormatConfiguration>",
 *                         },
 *                         CategoricalDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: "<ColumnIdentifier>", // required
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: "<StringFormatConfiguration>",
 *                         },
 *                         DateDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: "<ColumnIdentifier>", // required
 *                           DateGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: "<DateTimeFormatConfiguration>",
 *                         },
 *                       },
 *                     ],
 *                     Values: [
 *                       {
 *                         NumericalMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: "<ColumnIdentifier>", // required
 *                           AggregationFunction: {
 *                             SimpleNumericalAggregation: "SUM" || "AVERAGE" || "MIN" || "MAX" || "COUNT" || "DISTINCT_COUNT" || "VAR" || "VARP" || "STDEV" || "STDEVP" || "MEDIAN",
 *                             PercentileAggregation: {
 *                               PercentileValue: Number("double"),
 *                             },
 *                           },
 *                           FormatConfiguration: "<NumberFormatConfiguration>",
 *                         },
 *                         CategoricalMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: "<ColumnIdentifier>", // required
 *                           AggregationFunction: "COUNT" || "DISTINCT_COUNT",
 *                           FormatConfiguration: "<StringFormatConfiguration>",
 *                         },
 *                         DateMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: "<ColumnIdentifier>", // required
 *                           AggregationFunction: "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX",
 *                           FormatConfiguration: "<DateTimeFormatConfiguration>",
 *                         },
 *                         CalculatedMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Expression: "STRING_VALUE", // required
 *                         },
 *                       },
 *                     ],
 *                     Colors: [
 *                       {
 *                         NumericalDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: "<ColumnIdentifier>", // required
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: "<NumberFormatConfiguration>",
 *                         },
 *                         CategoricalDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: "<ColumnIdentifier>", // required
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: "<StringFormatConfiguration>",
 *                         },
 *                         DateDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: "<ColumnIdentifier>", // required
 *                           DateGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: "<DateTimeFormatConfiguration>",
 *                         },
 *                       },
 *                     ],
 *                     SmallMultiples: [ // SmallMultiplesDimensionFieldList
 *                       "<DimensionField>",
 *                     ],
 *                   },
 *                 },
 *                 SortConfiguration: { // BarChartSortConfiguration
 *                   CategorySort: [ // FieldSortOptionsList
 *                     {
 *                       FieldSort: {
 *                         FieldId: "STRING_VALUE", // required
 *                         Direction: "ASC" || "DESC", // required
 *                       },
 *                       ColumnSort: {
 *                         SortBy: "<ColumnIdentifier>", // required
 *                         Direction: "ASC" || "DESC", // required
 *                         AggregationFunction: {
 *                           NumericalAggregationFunction: "<NumericalAggregationFunction>",
 *                           CategoricalAggregationFunction: "COUNT" || "DISTINCT_COUNT",
 *                           DateAggregationFunction: "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX",
 *                           AttributeAggregationFunction: {
 *                             SimpleAttributeAggregation: "UNIQUE_VALUE",
 *                             ValueForMultipleValues: "STRING_VALUE",
 *                           },
 *                         },
 *                       },
 *                     },
 *                   ],
 *                   CategoryItemsLimit: { // ItemsLimitConfiguration
 *                     ItemsLimit: Number("long"),
 *                     OtherCategories: "INCLUDE" || "EXCLUDE",
 *                   },
 *                   ColorSort: [
 *                     {
 *                       FieldSort: {
 *                         FieldId: "STRING_VALUE", // required
 *                         Direction: "ASC" || "DESC", // required
 *                       },
 *                       ColumnSort: {
 *                         SortBy: "<ColumnIdentifier>", // required
 *                         Direction: "ASC" || "DESC", // required
 *                         AggregationFunction: {
 *                           NumericalAggregationFunction: "<NumericalAggregationFunction>",
 *                           CategoricalAggregationFunction: "COUNT" || "DISTINCT_COUNT",
 *                           DateAggregationFunction: "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX",
 *                           AttributeAggregationFunction: {
 *                             SimpleAttributeAggregation: "UNIQUE_VALUE",
 *                             ValueForMultipleValues: "STRING_VALUE",
 *                           },
 *                         },
 *                       },
 *                     },
 *                   ],
 *                   ColorItemsLimit: {
 *                     ItemsLimit: Number("long"),
 *                     OtherCategories: "INCLUDE" || "EXCLUDE",
 *                   },
 *                   SmallMultiplesSort: [
 *                     {
 *                       FieldSort: {
 *                         FieldId: "STRING_VALUE", // required
 *                         Direction: "ASC" || "DESC", // required
 *                       },
 *                       ColumnSort: {
 *                         SortBy: "<ColumnIdentifier>", // required
 *                         Direction: "ASC" || "DESC", // required
 *                         AggregationFunction: {
 *                           NumericalAggregationFunction: "<NumericalAggregationFunction>",
 *                           CategoricalAggregationFunction: "COUNT" || "DISTINCT_COUNT",
 *                           DateAggregationFunction: "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX",
 *                           AttributeAggregationFunction: {
 *                             SimpleAttributeAggregation: "UNIQUE_VALUE",
 *                             ValueForMultipleValues: "STRING_VALUE",
 *                           },
 *                         },
 *                       },
 *                     },
 *                   ],
 *                   SmallMultiplesLimitConfiguration: {
 *                     ItemsLimit: Number("long"),
 *                     OtherCategories: "INCLUDE" || "EXCLUDE",
 *                   },
 *                 },
 *                 Orientation: "HORIZONTAL" || "VERTICAL",
 *                 BarsArrangement: "CLUSTERED" || "STACKED" || "STACKED_PERCENT",
 *                 VisualPalette: { // VisualPalette
 *                   ChartColor: "STRING_VALUE",
 *                   ColorMap: [ // DataPathColorList
 *                     { // DataPathColor
 *                       Element: "<DataPathValue>", // required
 *                       Color: "STRING_VALUE", // required
 *                       TimeGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *                     },
 *                   ],
 *                 },
 *                 SmallMultiplesOptions: { // SmallMultiplesOptions
 *                   MaxVisibleRows: Number("long"),
 *                   MaxVisibleColumns: Number("long"),
 *                   PanelConfiguration: { // PanelConfiguration
 *                     Title: { // PanelTitleOptions
 *                       Visibility: "HIDDEN" || "VISIBLE",
 *                       FontConfiguration: "<FontConfiguration>",
 *                       HorizontalTextAlignment: "LEFT" || "CENTER" || "RIGHT" || "AUTO",
 *                     },
 *                     BorderVisibility: "HIDDEN" || "VISIBLE",
 *                     BorderThickness: "STRING_VALUE",
 *                     BorderStyle: "SOLID" || "DASHED" || "DOTTED",
 *                     BorderColor: "STRING_VALUE",
 *                     GutterVisibility: "HIDDEN" || "VISIBLE",
 *                     GutterSpacing: "STRING_VALUE",
 *                     BackgroundVisibility: "HIDDEN" || "VISIBLE",
 *                     BackgroundColor: "STRING_VALUE",
 *                   },
 *                   XAxis: { // SmallMultiplesAxisProperties
 *                     Scale: "SHARED" || "INDEPENDENT",
 *                     Placement: "OUTSIDE" || "INSIDE",
 *                   },
 *                   YAxis: {
 *                     Scale: "SHARED" || "INDEPENDENT",
 *                     Placement: "OUTSIDE" || "INSIDE",
 *                   },
 *                 },
 *                 CategoryAxis: { // AxisDisplayOptions
 *                   TickLabelOptions: { // AxisTickLabelOptions
 *                     LabelOptions: "<LabelOptions>",
 *                     RotationAngle: Number("double"),
 *                   },
 *                   AxisLineVisibility: "HIDDEN" || "VISIBLE",
 *                   GridLineVisibility: "HIDDEN" || "VISIBLE",
 *                   DataOptions: { // AxisDataOptions
 *                     NumericAxisOptions: { // NumericAxisOptions
 *                       Scale: { // AxisScale
 *                         Linear: { // AxisLinearScale
 *                           StepCount: Number("int"),
 *                           StepSize: Number("double"),
 *                         },
 *                         Logarithmic: { // AxisLogarithmicScale
 *                           Base: Number("double"),
 *                         },
 *                       },
 *                       Range: { // AxisDisplayRange
 *                         MinMax: { // AxisDisplayMinMaxRange
 *                           Minimum: Number("double"),
 *                           Maximum: Number("double"),
 *                         },
 *                         DataDriven: {},
 *                       },
 *                     },
 *                     DateAxisOptions: { // DateAxisOptions
 *                       MissingDateVisibility: "HIDDEN" || "VISIBLE",
 *                     },
 *                   },
 *                   ScrollbarOptions: { // ScrollBarOptions
 *                     Visibility: "HIDDEN" || "VISIBLE",
 *                     VisibleRange: { // VisibleRangeOptions
 *                       PercentRange: { // PercentVisibleRange
 *                         From: Number("double"),
 *                         To: Number("double"),
 *                       },
 *                     },
 *                   },
 *                   AxisOffset: "STRING_VALUE",
 *                 },
 *                 CategoryLabelOptions: { // ChartAxisLabelOptions
 *                   Visibility: "HIDDEN" || "VISIBLE",
 *                   SortIconVisibility: "HIDDEN" || "VISIBLE",
 *                   AxisLabelOptions: [ // AxisLabelOptionsList
 *                     { // AxisLabelOptions
 *                       FontConfiguration: "<FontConfiguration>",
 *                       CustomLabel: "STRING_VALUE",
 *                       ApplyTo: { // AxisLabelReferenceOptions
 *                         FieldId: "STRING_VALUE", // required
 *                         Column: "<ColumnIdentifier>", // required
 *                       },
 *                     },
 *                   ],
 *                 },
 *                 ValueAxis: {
 *                   TickLabelOptions: {
 *                     LabelOptions: "<LabelOptions>",
 *                     RotationAngle: Number("double"),
 *                   },
 *                   AxisLineVisibility: "HIDDEN" || "VISIBLE",
 *                   GridLineVisibility: "HIDDEN" || "VISIBLE",
 *                   DataOptions: {
 *                     NumericAxisOptions: {
 *                       Scale: {
 *                         Linear: {
 *                           StepCount: Number("int"),
 *                           StepSize: Number("double"),
 *                         },
 *                         Logarithmic: {
 *                           Base: Number("double"),
 *                         },
 *                       },
 *                       Range: {
 *                         MinMax: {
 *                           Minimum: Number("double"),
 *                           Maximum: Number("double"),
 *                         },
 *                         DataDriven: {},
 *                       },
 *                     },
 *                     DateAxisOptions: {
 *                       MissingDateVisibility: "HIDDEN" || "VISIBLE",
 *                     },
 *                   },
 *                   ScrollbarOptions: {
 *                     Visibility: "HIDDEN" || "VISIBLE",
 *                     VisibleRange: {
 *                       PercentRange: {
 *                         From: Number("double"),
 *                         To: Number("double"),
 *                       },
 *                     },
 *                   },
 *                   AxisOffset: "STRING_VALUE",
 *                 },
 *                 ValueLabelOptions: {
 *                   Visibility: "HIDDEN" || "VISIBLE",
 *                   SortIconVisibility: "HIDDEN" || "VISIBLE",
 *                   AxisLabelOptions: [
 *                     {
 *                       FontConfiguration: "<FontConfiguration>",
 *                       CustomLabel: "STRING_VALUE",
 *                       ApplyTo: {
 *                         FieldId: "STRING_VALUE", // required
 *                         Column: "<ColumnIdentifier>", // required
 *                       },
 *                     },
 *                   ],
 *                 },
 *                 ColorLabelOptions: {
 *                   Visibility: "HIDDEN" || "VISIBLE",
 *                   SortIconVisibility: "HIDDEN" || "VISIBLE",
 *                   AxisLabelOptions: [
 *                     {
 *                       FontConfiguration: "<FontConfiguration>",
 *                       CustomLabel: "STRING_VALUE",
 *                       ApplyTo: {
 *                         FieldId: "STRING_VALUE", // required
 *                         Column: "<ColumnIdentifier>", // required
 *                       },
 *                     },
 *                   ],
 *                 },
 *                 Legend: { // LegendOptions
 *                   Visibility: "HIDDEN" || "VISIBLE",
 *                   Title: "<LabelOptions>",
 *                   Position: "AUTO" || "RIGHT" || "BOTTOM" || "TOP",
 *                   Width: "STRING_VALUE",
 *                   Height: "STRING_VALUE",
 *                 },
 *                 DataLabels: { // DataLabelOptions
 *                   Visibility: "HIDDEN" || "VISIBLE",
 *                   CategoryLabelVisibility: "HIDDEN" || "VISIBLE",
 *                   MeasureLabelVisibility: "HIDDEN" || "VISIBLE",
 *                   DataLabelTypes: [ // DataLabelTypes
 *                     { // DataLabelType
 *                       FieldLabelType: { // FieldLabelType
 *                         FieldId: "STRING_VALUE",
 *                         Visibility: "HIDDEN" || "VISIBLE",
 *                       },
 *                       DataPathLabelType: { // DataPathLabelType
 *                         FieldId: "STRING_VALUE",
 *                         FieldValue: "STRING_VALUE",
 *                         Visibility: "HIDDEN" || "VISIBLE",
 *                       },
 *                       RangeEndsLabelType: { // RangeEndsLabelType
 *                         Visibility: "HIDDEN" || "VISIBLE",
 *                       },
 *                       MinimumLabelType: { // MinimumLabelType
 *                         Visibility: "HIDDEN" || "VISIBLE",
 *                       },
 *                       MaximumLabelType: { // MaximumLabelType
 *                         Visibility: "HIDDEN" || "VISIBLE",
 *                       },
 *                     },
 *                   ],
 *                   Position: "INSIDE" || "OUTSIDE" || "LEFT" || "TOP" || "BOTTOM" || "RIGHT",
 *                   LabelContent: "VALUE" || "PERCENT" || "VALUE_AND_PERCENT",
 *                   LabelFontConfiguration: "<FontConfiguration>",
 *                   LabelColor: "STRING_VALUE",
 *                   Overlap: "DISABLE_OVERLAP" || "ENABLE_OVERLAP",
 *                   TotalsVisibility: "HIDDEN" || "VISIBLE",
 *                 },
 *                 Tooltip: { // TooltipOptions
 *                   TooltipVisibility: "HIDDEN" || "VISIBLE",
 *                   SelectedTooltipType: "BASIC" || "DETAILED",
 *                   FieldBasedTooltip: { // FieldBasedTooltip
 *                     AggregationVisibility: "HIDDEN" || "VISIBLE",
 *                     TooltipTitleType: "NONE" || "PRIMARY_VALUE",
 *                     TooltipFields: [ // TooltipItemList
 *                       { // TooltipItem
 *                         FieldTooltipItem: { // FieldTooltipItem
 *                           FieldId: "STRING_VALUE", // required
 *                           Label: "STRING_VALUE",
 *                           Visibility: "HIDDEN" || "VISIBLE",
 *                           TooltipTarget: "BOTH" || "BAR" || "LINE",
 *                         },
 *                         ColumnTooltipItem: { // ColumnTooltipItem
 *                           Column: "<ColumnIdentifier>", // required
 *                           Label: "STRING_VALUE",
 *                           Visibility: "HIDDEN" || "VISIBLE",
 *                           Aggregation: "<AggregationFunction>",
 *                           TooltipTarget: "BOTH" || "BAR" || "LINE",
 *                         },
 *                       },
 *                     ],
 *                   },
 *                 },
 *                 ReferenceLines: [ // ReferenceLineList
 *                   { // ReferenceLine
 *                     Status: "ENABLED" || "DISABLED",
 *                     DataConfiguration: { // ReferenceLineDataConfiguration
 *                       StaticConfiguration: { // ReferenceLineStaticDataConfiguration
 *                         Value: Number("double"), // required
 *                       },
 *                       DynamicConfiguration: { // ReferenceLineDynamicDataConfiguration
 *                         Column: "<ColumnIdentifier>", // required
 *                         MeasureAggregationFunction: "<AggregationFunction>",
 *                         Calculation: "<NumericalAggregationFunction>", // required
 *                       },
 *                       AxisBinding: "PRIMARY_YAXIS" || "SECONDARY_YAXIS",
 *                       SeriesType: "BAR" || "LINE",
 *                     },
 *                     StyleConfiguration: { // ReferenceLineStyleConfiguration
 *                       Pattern: "SOLID" || "DASHED" || "DOTTED",
 *                       Color: "STRING_VALUE",
 *                     },
 *                     LabelConfiguration: { // ReferenceLineLabelConfiguration
 *                       ValueLabelConfiguration: { // ReferenceLineValueLabelConfiguration
 *                         RelativePosition: "BEFORE_CUSTOM_LABEL" || "AFTER_CUSTOM_LABEL",
 *                         FormatConfiguration: "<NumericFormatConfiguration>",
 *                       },
 *                       CustomLabelConfiguration: { // ReferenceLineCustomLabelConfiguration
 *                         CustomLabel: "STRING_VALUE", // required
 *                       },
 *                       FontConfiguration: "<FontConfiguration>",
 *                       FontColor: "STRING_VALUE",
 *                       HorizontalPosition: "LEFT" || "CENTER" || "RIGHT",
 *                       VerticalPosition: "ABOVE" || "BELOW",
 *                     },
 *                   },
 *                 ],
 *                 ContributionAnalysisDefaults: [ // ContributionAnalysisDefaultList
 *                   { // ContributionAnalysisDefault
 *                     MeasureFieldId: "STRING_VALUE", // required
 *                     ContributorDimensions: [ // ContributorDimensionList // required
 *                       "<ColumnIdentifier>",
 *                     ],
 *                   },
 *                 ],
 *                 Interactions: {
 *                   VisualMenuOption: {
 *                     AvailabilityStatus: "ENABLED" || "DISABLED",
 *                   },
 *                   ContextMenuOption: {
 *                     AvailabilityStatus: "ENABLED" || "DISABLED",
 *                   },
 *                 },
 *               },
 *               Actions: [
 *                 {
 *                   CustomActionId: "STRING_VALUE", // required
 *                   Name: "STRING_VALUE", // required
 *                   Status: "ENABLED" || "DISABLED",
 *                   Trigger: "DATA_POINT_CLICK" || "DATA_POINT_MENU", // required
 *                   ActionOperations: [ // required
 *                     {
 *                       FilterOperation: {
 *                         SelectedFieldsConfiguration: {
 *                           SelectedFields: [
 *                             "STRING_VALUE",
 *                           ],
 *                           SelectedFieldOptions: "ALL_FIELDS",
 *                           SelectedColumns: [
 *                             "<ColumnIdentifier>",
 *                           ],
 *                         },
 *                         TargetVisualsConfiguration: {
 *                           SameSheetTargetVisualConfiguration: {
 *                             TargetVisuals: [
 *                               "STRING_VALUE",
 *                             ],
 *                             TargetVisualOptions: "ALL_VISUALS",
 *                           },
 *                         },
 *                       },
 *                       NavigationOperation: {
 *                         LocalNavigationConfiguration: {
 *                           TargetSheetId: "STRING_VALUE", // required
 *                         },
 *                       },
 *                       URLOperation: {
 *                         URLTemplate: "STRING_VALUE", // required
 *                         URLTarget: "NEW_TAB" || "NEW_WINDOW" || "SAME_TAB", // required
 *                       },
 *                       SetParametersOperation: {
 *                         ParameterValueConfigurations: [ // required
 *                           {
 *                             DestinationParameterName: "STRING_VALUE", // required
 *                             Value: {
 *                               CustomValuesConfiguration: {
 *                                 IncludeNullValue: true || false,
 *                                 CustomValues: {
 *                                   StringValues: [
 *                                     "STRING_VALUE",
 *                                   ],
 *                                   IntegerValues: [
 *                                     Number("long"),
 *                                   ],
 *                                   DecimalValues: [
 *                                     Number("double"),
 *                                   ],
 *                                   DateTimeValues: [
 *                                     new Date("TIMESTAMP"),
 *                                   ],
 *                                 },
 *                               },
 *                               SelectAllValueOptions: "ALL_VALUES",
 *                               SourceParameterName: "STRING_VALUE",
 *                               SourceField: "STRING_VALUE",
 *                               SourceColumn: "<ColumnIdentifier>",
 *                             },
 *                           },
 *                         ],
 *                       },
 *                     },
 *                   ],
 *                 },
 *               ],
 *               ColumnHierarchies: [ // ColumnHierarchyList
 *                 { // ColumnHierarchy
 *                   ExplicitHierarchy: { // ExplicitHierarchy
 *                     HierarchyId: "STRING_VALUE", // required
 *                     Columns: [ // ExplicitHierarchyColumnList // required
 *                       "<ColumnIdentifier>",
 *                     ],
 *                     DrillDownFilters: [ // DrillDownFilterList
 *                       { // DrillDownFilter
 *                         NumericEqualityFilter: { // NumericEqualityDrillDownFilter
 *                           Column: "<ColumnIdentifier>", // required
 *                           Value: Number("double"), // required
 *                         },
 *                         CategoryFilter: { // CategoryDrillDownFilter
 *                           Column: "<ColumnIdentifier>", // required
 *                           CategoryValues: [ // CategoryValueList // required
 *                             "STRING_VALUE",
 *                           ],
 *                         },
 *                         TimeRangeFilter: { // TimeRangeDrillDownFilter
 *                           Column: "<ColumnIdentifier>", // required
 *                           RangeMinimum: new Date("TIMESTAMP"), // required
 *                           RangeMaximum: new Date("TIMESTAMP"), // required
 *                           TimeGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND", // required
 *                         },
 *                       },
 *                     ],
 *                   },
 *                   DateTimeHierarchy: { // DateTimeHierarchy
 *                     HierarchyId: "STRING_VALUE", // required
 *                     DrillDownFilters: [
 *                       {
 *                         NumericEqualityFilter: {
 *                           Column: "<ColumnIdentifier>", // required
 *                           Value: Number("double"), // required
 *                         },
 *                         CategoryFilter: {
 *                           Column: "<ColumnIdentifier>", // required
 *                           CategoryValues: [ // required
 *                             "STRING_VALUE",
 *                           ],
 *                         },
 *                         TimeRangeFilter: {
 *                           Column: "<ColumnIdentifier>", // required
 *                           RangeMinimum: new Date("TIMESTAMP"), // required
 *                           RangeMaximum: new Date("TIMESTAMP"), // required
 *                           TimeGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND", // required
 *                         },
 *                       },
 *                     ],
 *                   },
 *                   PredefinedHierarchy: { // PredefinedHierarchy
 *                     HierarchyId: "STRING_VALUE", // required
 *                     Columns: [ // PredefinedHierarchyColumnList // required
 *                       "<ColumnIdentifier>",
 *                     ],
 *                     DrillDownFilters: [
 *                       {
 *                         NumericEqualityFilter: {
 *                           Column: "<ColumnIdentifier>", // required
 *                           Value: Number("double"), // required
 *                         },
 *                         CategoryFilter: {
 *                           Column: "<ColumnIdentifier>", // required
 *                           CategoryValues: [ // required
 *                             "STRING_VALUE",
 *                           ],
 *                         },
 *                         TimeRangeFilter: {
 *                           Column: "<ColumnIdentifier>", // required
 *                           RangeMinimum: new Date("TIMESTAMP"), // required
 *                           RangeMaximum: new Date("TIMESTAMP"), // required
 *                           TimeGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND", // required
 *                         },
 *                       },
 *                     ],
 *                   },
 *                 },
 *               ],
 *             },
 *             KPIVisual: { // KPIVisual
 *               VisualId: "STRING_VALUE", // required
 *               Title: {
 *                 Visibility: "HIDDEN" || "VISIBLE",
 *                 FormatText: {
 *                   PlainText: "STRING_VALUE",
 *                   RichText: "STRING_VALUE",
 *                 },
 *               },
 *               Subtitle: {
 *                 Visibility: "HIDDEN" || "VISIBLE",
 *                 FormatText: {
 *                   PlainText: "STRING_VALUE",
 *                   RichText: "STRING_VALUE",
 *                 },
 *               },
 *               ChartConfiguration: { // KPIConfiguration
 *                 FieldWells: { // KPIFieldWells
 *                   Values: [
 *                     {
 *                       NumericalMeasureField: {
 *                         FieldId: "STRING_VALUE", // required
 *                         Column: "<ColumnIdentifier>", // required
 *                         AggregationFunction: "<NumericalAggregationFunction>",
 *                         FormatConfiguration: "<NumberFormatConfiguration>",
 *                       },
 *                       CategoricalMeasureField: {
 *                         FieldId: "STRING_VALUE", // required
 *                         Column: "<ColumnIdentifier>", // required
 *                         AggregationFunction: "COUNT" || "DISTINCT_COUNT",
 *                         FormatConfiguration: "<StringFormatConfiguration>",
 *                       },
 *                       DateMeasureField: {
 *                         FieldId: "STRING_VALUE", // required
 *                         Column: "<ColumnIdentifier>", // required
 *                         AggregationFunction: "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX",
 *                         FormatConfiguration: "<DateTimeFormatConfiguration>",
 *                       },
 *                       CalculatedMeasureField: {
 *                         FieldId: "STRING_VALUE", // required
 *                         Expression: "STRING_VALUE", // required
 *                       },
 *                     },
 *                   ],
 *                   TargetValues: [
 *                     {
 *                       NumericalMeasureField: {
 *                         FieldId: "STRING_VALUE", // required
 *                         Column: "<ColumnIdentifier>", // required
 *                         AggregationFunction: "<NumericalAggregationFunction>",
 *                         FormatConfiguration: "<NumberFormatConfiguration>",
 *                       },
 *                       CategoricalMeasureField: {
 *                         FieldId: "STRING_VALUE", // required
 *                         Column: "<ColumnIdentifier>", // required
 *                         AggregationFunction: "COUNT" || "DISTINCT_COUNT",
 *                         FormatConfiguration: "<StringFormatConfiguration>",
 *                       },
 *                       DateMeasureField: {
 *                         FieldId: "STRING_VALUE", // required
 *                         Column: "<ColumnIdentifier>", // required
 *                         AggregationFunction: "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX",
 *                         FormatConfiguration: "<DateTimeFormatConfiguration>",
 *                       },
 *                       CalculatedMeasureField: {
 *                         FieldId: "STRING_VALUE", // required
 *                         Expression: "STRING_VALUE", // required
 *                       },
 *                     },
 *                   ],
 *                   TrendGroups: [
 *                     "<DimensionField>",
 *                   ],
 *                 },
 *                 SortConfiguration: { // KPISortConfiguration
 *                   TrendGroupSort: [
 *                     {
 *                       FieldSort: "<FieldSort>",
 *                       ColumnSort: "<ColumnSort>",
 *                     },
 *                   ],
 *                 },
 *                 KPIOptions: { // KPIOptions
 *                   ProgressBar: { // ProgressBarOptions
 *                     Visibility: "HIDDEN" || "VISIBLE",
 *                   },
 *                   TrendArrows: { // TrendArrowOptions
 *                     Visibility: "HIDDEN" || "VISIBLE",
 *                   },
 *                   SecondaryValue: { // SecondaryValueOptions
 *                     Visibility: "HIDDEN" || "VISIBLE",
 *                   },
 *                   Comparison: { // ComparisonConfiguration
 *                     ComparisonMethod: "DIFFERENCE" || "PERCENT_DIFFERENCE" || "PERCENT",
 *                     ComparisonFormat: { // ComparisonFormatConfiguration
 *                       NumberDisplayFormatConfiguration: "<NumberDisplayFormatConfiguration>",
 *                       PercentageDisplayFormatConfiguration: "<PercentageDisplayFormatConfiguration>",
 *                     },
 *                   },
 *                   PrimaryValueDisplayType: "HIDDEN" || "COMPARISON" || "ACTUAL",
 *                   PrimaryValueFontConfiguration: "<FontConfiguration>",
 *                   SecondaryValueFontConfiguration: "<FontConfiguration>",
 *                   Sparkline: { // KPISparklineOptions
 *                     Visibility: "HIDDEN" || "VISIBLE",
 *                     Type: "LINE" || "AREA", // required
 *                     Color: "STRING_VALUE",
 *                     TooltipVisibility: "HIDDEN" || "VISIBLE",
 *                   },
 *                   VisualLayoutOptions: { // KPIVisualLayoutOptions
 *                     StandardLayout: { // KPIVisualStandardLayout
 *                       Type: "CLASSIC" || "VERTICAL", // required
 *                     },
 *                   },
 *                 },
 *                 Interactions: {
 *                   VisualMenuOption: {
 *                     AvailabilityStatus: "ENABLED" || "DISABLED",
 *                   },
 *                   ContextMenuOption: {
 *                     AvailabilityStatus: "ENABLED" || "DISABLED",
 *                   },
 *                 },
 *               },
 *               ConditionalFormatting: { // KPIConditionalFormatting
 *                 ConditionalFormattingOptions: [ // KPIConditionalFormattingOptionList
 *                   { // KPIConditionalFormattingOption
 *                     PrimaryValue: { // KPIPrimaryValueConditionalFormatting
 *                       TextColor: "<ConditionalFormattingColor>",
 *                       Icon: {
 *                         IconSet: {
 *                           Expression: "STRING_VALUE", // required
 *                           IconSetType: "PLUS_MINUS" || "CHECK_X" || "THREE_COLOR_ARROW" || "THREE_GRAY_ARROW" || "CARET_UP_MINUS_DOWN" || "THREE_SHAPE" || "THREE_CIRCLE" || "FLAGS" || "BARS" || "FOUR_COLOR_ARROW" || "FOUR_GRAY_ARROW",
 *                         },
 *                         CustomCondition: {
 *                           Expression: "STRING_VALUE", // required
 *                           IconOptions: {
 *                             Icon: "CARET_UP" || "CARET_DOWN" || "PLUS" || "MINUS" || "ARROW_UP" || "ARROW_DOWN" || "ARROW_LEFT" || "ARROW_UP_LEFT" || "ARROW_DOWN_LEFT" || "ARROW_RIGHT" || "ARROW_UP_RIGHT" || "ARROW_DOWN_RIGHT" || "FACE_UP" || "FACE_DOWN" || "FACE_FLAT" || "ONE_BAR" || "TWO_BAR" || "THREE_BAR" || "CIRCLE" || "TRIANGLE" || "SQUARE" || "FLAG" || "THUMBS_UP" || "THUMBS_DOWN" || "CHECKMARK" || "X",
 *                             UnicodeIcon: "STRING_VALUE",
 *                           },
 *                           Color: "STRING_VALUE",
 *                           DisplayConfiguration: {
 *                             IconDisplayOption: "ICON_ONLY",
 *                           },
 *                         },
 *                       },
 *                     },
 *                     ProgressBar: { // KPIProgressBarConditionalFormatting
 *                       ForegroundColor: "<ConditionalFormattingColor>",
 *                     },
 *                     ActualValue: { // KPIActualValueConditionalFormatting
 *                       TextColor: "<ConditionalFormattingColor>",
 *                       Icon: {
 *                         IconSet: {
 *                           Expression: "STRING_VALUE", // required
 *                           IconSetType: "PLUS_MINUS" || "CHECK_X" || "THREE_COLOR_ARROW" || "THREE_GRAY_ARROW" || "CARET_UP_MINUS_DOWN" || "THREE_SHAPE" || "THREE_CIRCLE" || "FLAGS" || "BARS" || "FOUR_COLOR_ARROW" || "FOUR_GRAY_ARROW",
 *                         },
 *                         CustomCondition: {
 *                           Expression: "STRING_VALUE", // required
 *                           IconOptions: {
 *                             Icon: "CARET_UP" || "CARET_DOWN" || "PLUS" || "MINUS" || "ARROW_UP" || "ARROW_DOWN" || "ARROW_LEFT" || "ARROW_UP_LEFT" || "ARROW_DOWN_LEFT" || "ARROW_RIGHT" || "ARROW_UP_RIGHT" || "ARROW_DOWN_RIGHT" || "FACE_UP" || "FACE_DOWN" || "FACE_FLAT" || "ONE_BAR" || "TWO_BAR" || "THREE_BAR" || "CIRCLE" || "TRIANGLE" || "SQUARE" || "FLAG" || "THUMBS_UP" || "THUMBS_DOWN" || "CHECKMARK" || "X",
 *                             UnicodeIcon: "STRING_VALUE",
 *                           },
 *                           Color: "STRING_VALUE",
 *                           DisplayConfiguration: {
 *                             IconDisplayOption: "ICON_ONLY",
 *                           },
 *                         },
 *                       },
 *                     },
 *                     ComparisonValue: { // KPIComparisonValueConditionalFormatting
 *                       TextColor: "<ConditionalFormattingColor>",
 *                       Icon: {
 *                         IconSet: {
 *                           Expression: "STRING_VALUE", // required
 *                           IconSetType: "PLUS_MINUS" || "CHECK_X" || "THREE_COLOR_ARROW" || "THREE_GRAY_ARROW" || "CARET_UP_MINUS_DOWN" || "THREE_SHAPE" || "THREE_CIRCLE" || "FLAGS" || "BARS" || "FOUR_COLOR_ARROW" || "FOUR_GRAY_ARROW",
 *                         },
 *                         CustomCondition: {
 *                           Expression: "STRING_VALUE", // required
 *                           IconOptions: {
 *                             Icon: "CARET_UP" || "CARET_DOWN" || "PLUS" || "MINUS" || "ARROW_UP" || "ARROW_DOWN" || "ARROW_LEFT" || "ARROW_UP_LEFT" || "ARROW_DOWN_LEFT" || "ARROW_RIGHT" || "ARROW_UP_RIGHT" || "ARROW_DOWN_RIGHT" || "FACE_UP" || "FACE_DOWN" || "FACE_FLAT" || "ONE_BAR" || "TWO_BAR" || "THREE_BAR" || "CIRCLE" || "TRIANGLE" || "SQUARE" || "FLAG" || "THUMBS_UP" || "THUMBS_DOWN" || "CHECKMARK" || "X",
 *                             UnicodeIcon: "STRING_VALUE",
 *                           },
 *                           Color: "STRING_VALUE",
 *                           DisplayConfiguration: {
 *                             IconDisplayOption: "ICON_ONLY",
 *                           },
 *                         },
 *                       },
 *                     },
 *                   },
 *                 ],
 *               },
 *               Actions: [
 *                 {
 *                   CustomActionId: "STRING_VALUE", // required
 *                   Name: "STRING_VALUE", // required
 *                   Status: "ENABLED" || "DISABLED",
 *                   Trigger: "DATA_POINT_CLICK" || "DATA_POINT_MENU", // required
 *                   ActionOperations: [ // required
 *                     {
 *                       FilterOperation: {
 *                         SelectedFieldsConfiguration: {
 *                           SelectedFields: [
 *                             "STRING_VALUE",
 *                           ],
 *                           SelectedFieldOptions: "ALL_FIELDS",
 *                           SelectedColumns: [
 *                             "<ColumnIdentifier>",
 *                           ],
 *                         },
 *                         TargetVisualsConfiguration: {
 *                           SameSheetTargetVisualConfiguration: {
 *                             TargetVisuals: [
 *                               "STRING_VALUE",
 *                             ],
 *                             TargetVisualOptions: "ALL_VISUALS",
 *                           },
 *                         },
 *                       },
 *                       NavigationOperation: {
 *                         LocalNavigationConfiguration: {
 *                           TargetSheetId: "STRING_VALUE", // required
 *                         },
 *                       },
 *                       URLOperation: {
 *                         URLTemplate: "STRING_VALUE", // required
 *                         URLTarget: "NEW_TAB" || "NEW_WINDOW" || "SAME_TAB", // required
 *                       },
 *                       SetParametersOperation: {
 *                         ParameterValueConfigurations: [ // required
 *                           {
 *                             DestinationParameterName: "STRING_VALUE", // required
 *                             Value: {
 *                               CustomValuesConfiguration: {
 *                                 IncludeNullValue: true || false,
 *                                 CustomValues: {
 *                                   StringValues: [
 *                                     "STRING_VALUE",
 *                                   ],
 *                                   IntegerValues: [
 *                                     Number("long"),
 *                                   ],
 *                                   DecimalValues: [
 *                                     Number("double"),
 *                                   ],
 *                                   DateTimeValues: [
 *                                     new Date("TIMESTAMP"),
 *                                   ],
 *                                 },
 *                               },
 *                               SelectAllValueOptions: "ALL_VALUES",
 *                               SourceParameterName: "STRING_VALUE",
 *                               SourceField: "STRING_VALUE",
 *                               SourceColumn: "<ColumnIdentifier>",
 *                             },
 *                           },
 *                         ],
 *                       },
 *                     },
 *                   ],
 *                 },
 *               ],
 *               ColumnHierarchies: [
 *                 {
 *                   ExplicitHierarchy: {
 *                     HierarchyId: "STRING_VALUE", // required
 *                     Columns: [ // required
 *                       "<ColumnIdentifier>",
 *                     ],
 *                     DrillDownFilters: [
 *                       {
 *                         NumericEqualityFilter: {
 *                           Column: "<ColumnIdentifier>", // required
 *                           Value: Number("double"), // required
 *                         },
 *                         CategoryFilter: {
 *                           Column: "<ColumnIdentifier>", // required
 *                           CategoryValues: [ // required
 *                             "STRING_VALUE",
 *                           ],
 *                         },
 *                         TimeRangeFilter: {
 *                           Column: "<ColumnIdentifier>", // required
 *                           RangeMinimum: new Date("TIMESTAMP"), // required
 *                           RangeMaximum: new Date("TIMESTAMP"), // required
 *                           TimeGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND", // required
 *                         },
 *                       },
 *                     ],
 *                   },
 *                   DateTimeHierarchy: {
 *                     HierarchyId: "STRING_VALUE", // required
 *                     DrillDownFilters: [
 *                       {
 *                         NumericEqualityFilter: {
 *                           Column: "<ColumnIdentifier>", // required
 *                           Value: Number("double"), // required
 *                         },
 *                         CategoryFilter: {
 *                           Column: "<ColumnIdentifier>", // required
 *                           CategoryValues: [ // required
 *                             "STRING_VALUE",
 *                           ],
 *                         },
 *                         TimeRangeFilter: {
 *                           Column: "<ColumnIdentifier>", // required
 *                           RangeMinimum: new Date("TIMESTAMP"), // required
 *                           RangeMaximum: new Date("TIMESTAMP"), // required
 *                           TimeGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND", // required
 *                         },
 *                       },
 *                     ],
 *                   },
 *                   PredefinedHierarchy: {
 *                     HierarchyId: "STRING_VALUE", // required
 *                     Columns: [ // required
 *                       "<ColumnIdentifier>",
 *                     ],
 *                     DrillDownFilters: "<DrillDownFilterList>",
 *                   },
 *                 },
 *               ],
 *             },
 *             PieChartVisual: { // PieChartVisual
 *               VisualId: "STRING_VALUE", // required
 *               Title: {
 *                 Visibility: "HIDDEN" || "VISIBLE",
 *                 FormatText: {
 *                   PlainText: "STRING_VALUE",
 *                   RichText: "STRING_VALUE",
 *                 },
 *               },
 *               Subtitle: {
 *                 Visibility: "HIDDEN" || "VISIBLE",
 *                 FormatText: {
 *                   PlainText: "STRING_VALUE",
 *                   RichText: "STRING_VALUE",
 *                 },
 *               },
 *               ChartConfiguration: { // PieChartConfiguration
 *                 FieldWells: { // PieChartFieldWells
 *                   PieChartAggregatedFieldWells: { // PieChartAggregatedFieldWells
 *                     Category: [
 *                       "<DimensionField>",
 *                     ],
 *                     Values: [
 *                       "<MeasureField>",
 *                     ],
 *                     SmallMultiples: [
 *                       "<DimensionField>",
 *                     ],
 *                   },
 *                 },
 *                 SortConfiguration: { // PieChartSortConfiguration
 *                   CategorySort: [
 *                     "<FieldSortOptions>",
 *                   ],
 *                   CategoryItemsLimit: {
 *                     ItemsLimit: Number("long"),
 *                     OtherCategories: "INCLUDE" || "EXCLUDE",
 *                   },
 *                   SmallMultiplesSort: "<FieldSortOptionsList>",
 *                   SmallMultiplesLimitConfiguration: {
 *                     ItemsLimit: Number("long"),
 *                     OtherCategories: "INCLUDE" || "EXCLUDE",
 *                   },
 *                 },
 *                 DonutOptions: { // DonutOptions
 *                   ArcOptions: { // ArcOptions
 *                     ArcThickness: "SMALL" || "MEDIUM" || "LARGE" || "WHOLE",
 *                   },
 *                   DonutCenterOptions: { // DonutCenterOptions
 *                     LabelVisibility: "HIDDEN" || "VISIBLE",
 *                   },
 *                 },
 *                 SmallMultiplesOptions: {
 *                   MaxVisibleRows: Number("long"),
 *                   MaxVisibleColumns: Number("long"),
 *                   PanelConfiguration: {
 *                     Title: {
 *                       Visibility: "HIDDEN" || "VISIBLE",
 *                       FontConfiguration: "<FontConfiguration>",
 *                       HorizontalTextAlignment: "LEFT" || "CENTER" || "RIGHT" || "AUTO",
 *                     },
 *                     BorderVisibility: "HIDDEN" || "VISIBLE",
 *                     BorderThickness: "STRING_VALUE",
 *                     BorderStyle: "SOLID" || "DASHED" || "DOTTED",
 *                     BorderColor: "STRING_VALUE",
 *                     GutterVisibility: "HIDDEN" || "VISIBLE",
 *                     GutterSpacing: "STRING_VALUE",
 *                     BackgroundVisibility: "HIDDEN" || "VISIBLE",
 *                     BackgroundColor: "STRING_VALUE",
 *                   },
 *                   XAxis: {
 *                     Scale: "SHARED" || "INDEPENDENT",
 *                     Placement: "OUTSIDE" || "INSIDE",
 *                   },
 *                   YAxis: {
 *                     Scale: "SHARED" || "INDEPENDENT",
 *                     Placement: "OUTSIDE" || "INSIDE",
 *                   },
 *                 },
 *                 CategoryLabelOptions: {
 *                   Visibility: "HIDDEN" || "VISIBLE",
 *                   SortIconVisibility: "HIDDEN" || "VISIBLE",
 *                   AxisLabelOptions: [
 *                     {
 *                       FontConfiguration: "<FontConfiguration>",
 *                       CustomLabel: "STRING_VALUE",
 *                       ApplyTo: {
 *                         FieldId: "STRING_VALUE", // required
 *                         Column: "<ColumnIdentifier>", // required
 *                       },
 *                     },
 *                   ],
 *                 },
 *                 ValueLabelOptions: {
 *                   Visibility: "HIDDEN" || "VISIBLE",
 *                   SortIconVisibility: "HIDDEN" || "VISIBLE",
 *                   AxisLabelOptions: [
 *                     {
 *                       FontConfiguration: "<FontConfiguration>",
 *                       CustomLabel: "STRING_VALUE",
 *                       ApplyTo: {
 *                         FieldId: "STRING_VALUE", // required
 *                         Column: "<ColumnIdentifier>", // required
 *                       },
 *                     },
 *                   ],
 *                 },
 *                 Legend: {
 *                   Visibility: "HIDDEN" || "VISIBLE",
 *                   Title: "<LabelOptions>",
 *                   Position: "AUTO" || "RIGHT" || "BOTTOM" || "TOP",
 *                   Width: "STRING_VALUE",
 *                   Height: "STRING_VALUE",
 *                 },
 *                 DataLabels: {
 *                   Visibility: "HIDDEN" || "VISIBLE",
 *                   CategoryLabelVisibility: "HIDDEN" || "VISIBLE",
 *                   MeasureLabelVisibility: "HIDDEN" || "VISIBLE",
 *                   DataLabelTypes: [
 *                     {
 *                       FieldLabelType: {
 *                         FieldId: "STRING_VALUE",
 *                         Visibility: "HIDDEN" || "VISIBLE",
 *                       },
 *                       DataPathLabelType: {
 *                         FieldId: "STRING_VALUE",
 *                         FieldValue: "STRING_VALUE",
 *                         Visibility: "HIDDEN" || "VISIBLE",
 *                       },
 *                       RangeEndsLabelType: {
 *                         Visibility: "HIDDEN" || "VISIBLE",
 *                       },
 *                       MinimumLabelType: {
 *                         Visibility: "HIDDEN" || "VISIBLE",
 *                       },
 *                       MaximumLabelType: {
 *                         Visibility: "HIDDEN" || "VISIBLE",
 *                       },
 *                     },
 *                   ],
 *                   Position: "INSIDE" || "OUTSIDE" || "LEFT" || "TOP" || "BOTTOM" || "RIGHT",
 *                   LabelContent: "VALUE" || "PERCENT" || "VALUE_AND_PERCENT",
 *                   LabelFontConfiguration: "<FontConfiguration>",
 *                   LabelColor: "STRING_VALUE",
 *                   Overlap: "DISABLE_OVERLAP" || "ENABLE_OVERLAP",
 *                   TotalsVisibility: "HIDDEN" || "VISIBLE",
 *                 },
 *                 Tooltip: {
 *                   TooltipVisibility: "HIDDEN" || "VISIBLE",
 *                   SelectedTooltipType: "BASIC" || "DETAILED",
 *                   FieldBasedTooltip: {
 *                     AggregationVisibility: "HIDDEN" || "VISIBLE",
 *                     TooltipTitleType: "NONE" || "PRIMARY_VALUE",
 *                     TooltipFields: [
 *                       {
 *                         FieldTooltipItem: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Label: "STRING_VALUE",
 *                           Visibility: "HIDDEN" || "VISIBLE",
 *                           TooltipTarget: "BOTH" || "BAR" || "LINE",
 *                         },
 *                         ColumnTooltipItem: {
 *                           Column: "<ColumnIdentifier>", // required
 *                           Label: "STRING_VALUE",
 *                           Visibility: "HIDDEN" || "VISIBLE",
 *                           Aggregation: "<AggregationFunction>",
 *                           TooltipTarget: "BOTH" || "BAR" || "LINE",
 *                         },
 *                       },
 *                     ],
 *                   },
 *                 },
 *                 VisualPalette: {
 *                   ChartColor: "STRING_VALUE",
 *                   ColorMap: [
 *                     {
 *                       Element: "<DataPathValue>", // required
 *                       Color: "STRING_VALUE", // required
 *                       TimeGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *                     },
 *                   ],
 *                 },
 *                 ContributionAnalysisDefaults: [
 *                   {
 *                     MeasureFieldId: "STRING_VALUE", // required
 *                     ContributorDimensions: [ // required
 *                       "<ColumnIdentifier>",
 *                     ],
 *                   },
 *                 ],
 *                 Interactions: {
 *                   VisualMenuOption: "<VisualMenuOption>",
 *                   ContextMenuOption: {
 *                     AvailabilityStatus: "ENABLED" || "DISABLED",
 *                   },
 *                 },
 *               },
 *               Actions: [
 *                 {
 *                   CustomActionId: "STRING_VALUE", // required
 *                   Name: "STRING_VALUE", // required
 *                   Status: "ENABLED" || "DISABLED",
 *                   Trigger: "DATA_POINT_CLICK" || "DATA_POINT_MENU", // required
 *                   ActionOperations: [ // required
 *                     {
 *                       FilterOperation: {
 *                         SelectedFieldsConfiguration: {
 *                           SelectedFields: [
 *                             "STRING_VALUE",
 *                           ],
 *                           SelectedFieldOptions: "ALL_FIELDS",
 *                           SelectedColumns: [
 *                             "<ColumnIdentifier>",
 *                           ],
 *                         },
 *                         TargetVisualsConfiguration: {
 *                           SameSheetTargetVisualConfiguration: {
 *                             TargetVisuals: [
 *                               "STRING_VALUE",
 *                             ],
 *                             TargetVisualOptions: "ALL_VISUALS",
 *                           },
 *                         },
 *                       },
 *                       NavigationOperation: {
 *                         LocalNavigationConfiguration: {
 *                           TargetSheetId: "STRING_VALUE", // required
 *                         },
 *                       },
 *                       URLOperation: {
 *                         URLTemplate: "STRING_VALUE", // required
 *                         URLTarget: "NEW_TAB" || "NEW_WINDOW" || "SAME_TAB", // required
 *                       },
 *                       SetParametersOperation: {
 *                         ParameterValueConfigurations: [ // required
 *                           {
 *                             DestinationParameterName: "STRING_VALUE", // required
 *                             Value: {
 *                               CustomValuesConfiguration: {
 *                                 IncludeNullValue: true || false,
 *                                 CustomValues: {
 *                                   StringValues: [
 *                                     "STRING_VALUE",
 *                                   ],
 *                                   IntegerValues: [
 *                                     Number("long"),
 *                                   ],
 *                                   DecimalValues: [
 *                                     Number("double"),
 *                                   ],
 *                                   DateTimeValues: [
 *                                     new Date("TIMESTAMP"),
 *                                   ],
 *                                 },
 *                               },
 *                               SelectAllValueOptions: "ALL_VALUES",
 *                               SourceParameterName: "STRING_VALUE",
 *                               SourceField: "STRING_VALUE",
 *                               SourceColumn: "<ColumnIdentifier>",
 *                             },
 *                           },
 *                         ],
 *                       },
 *                     },
 *                   ],
 *                 },
 *               ],
 *               ColumnHierarchies: [
 *                 {
 *                   ExplicitHierarchy: {
 *                     HierarchyId: "STRING_VALUE", // required
 *                     Columns: [ // required
 *                       "<ColumnIdentifier>",
 *                     ],
 *                     DrillDownFilters: "<DrillDownFilterList>",
 *                   },
 *                   DateTimeHierarchy: {
 *                     HierarchyId: "STRING_VALUE", // required
 *                     DrillDownFilters: "<DrillDownFilterList>",
 *                   },
 *                   PredefinedHierarchy: {
 *                     HierarchyId: "STRING_VALUE", // required
 *                     Columns: [ // required
 *                       "<ColumnIdentifier>",
 *                     ],
 *                     DrillDownFilters: "<DrillDownFilterList>",
 *                   },
 *                 },
 *               ],
 *             },
 *             GaugeChartVisual: { // GaugeChartVisual
 *               VisualId: "STRING_VALUE", // required
 *               Title: "<VisualTitleLabelOptions>",
 *               Subtitle: "<VisualSubtitleLabelOptions>",
 *               ChartConfiguration: { // GaugeChartConfiguration
 *                 FieldWells: { // GaugeChartFieldWells
 *                   Values: "<MeasureFieldList>",
 *                   TargetValues: "<MeasureFieldList>",
 *                 },
 *                 GaugeChartOptions: { // GaugeChartOptions
 *                   PrimaryValueDisplayType: "HIDDEN" || "COMPARISON" || "ACTUAL",
 *                   Comparison: {
 *                     ComparisonMethod: "DIFFERENCE" || "PERCENT_DIFFERENCE" || "PERCENT",
 *                     ComparisonFormat: {
 *                       NumberDisplayFormatConfiguration: "<NumberDisplayFormatConfiguration>",
 *                       PercentageDisplayFormatConfiguration: "<PercentageDisplayFormatConfiguration>",
 *                     },
 *                   },
 *                   ArcAxis: { // ArcAxisConfiguration
 *                     Range: { // ArcAxisDisplayRange
 *                       Min: Number("double"),
 *                       Max: Number("double"),
 *                     },
 *                     ReserveRange: Number("int"),
 *                   },
 *                   Arc: { // ArcConfiguration
 *                     ArcAngle: Number("double"),
 *                     ArcThickness: "SMALL" || "MEDIUM" || "LARGE",
 *                   },
 *                   PrimaryValueFontConfiguration: "<FontConfiguration>",
 *                 },
 *                 DataLabels: {
 *                   Visibility: "HIDDEN" || "VISIBLE",
 *                   CategoryLabelVisibility: "HIDDEN" || "VISIBLE",
 *                   MeasureLabelVisibility: "HIDDEN" || "VISIBLE",
 *                   DataLabelTypes: [
 *                     {
 *                       FieldLabelType: {
 *                         FieldId: "STRING_VALUE",
 *                         Visibility: "HIDDEN" || "VISIBLE",
 *                       },
 *                       DataPathLabelType: {
 *                         FieldId: "STRING_VALUE",
 *                         FieldValue: "STRING_VALUE",
 *                         Visibility: "HIDDEN" || "VISIBLE",
 *                       },
 *                       RangeEndsLabelType: {
 *                         Visibility: "HIDDEN" || "VISIBLE",
 *                       },
 *                       MinimumLabelType: {
 *                         Visibility: "HIDDEN" || "VISIBLE",
 *                       },
 *                       MaximumLabelType: {
 *                         Visibility: "HIDDEN" || "VISIBLE",
 *                       },
 *                     },
 *                   ],
 *                   Position: "INSIDE" || "OUTSIDE" || "LEFT" || "TOP" || "BOTTOM" || "RIGHT",
 *                   LabelContent: "VALUE" || "PERCENT" || "VALUE_AND_PERCENT",
 *                   LabelFontConfiguration: "<FontConfiguration>",
 *                   LabelColor: "STRING_VALUE",
 *                   Overlap: "DISABLE_OVERLAP" || "ENABLE_OVERLAP",
 *                   TotalsVisibility: "HIDDEN" || "VISIBLE",
 *                 },
 *                 TooltipOptions: {
 *                   TooltipVisibility: "HIDDEN" || "VISIBLE",
 *                   SelectedTooltipType: "BASIC" || "DETAILED",
 *                   FieldBasedTooltip: {
 *                     AggregationVisibility: "HIDDEN" || "VISIBLE",
 *                     TooltipTitleType: "NONE" || "PRIMARY_VALUE",
 *                     TooltipFields: [
 *                       {
 *                         FieldTooltipItem: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Label: "STRING_VALUE",
 *                           Visibility: "HIDDEN" || "VISIBLE",
 *                           TooltipTarget: "BOTH" || "BAR" || "LINE",
 *                         },
 *                         ColumnTooltipItem: {
 *                           Column: "<ColumnIdentifier>", // required
 *                           Label: "STRING_VALUE",
 *                           Visibility: "HIDDEN" || "VISIBLE",
 *                           Aggregation: "<AggregationFunction>",
 *                           TooltipTarget: "BOTH" || "BAR" || "LINE",
 *                         },
 *                       },
 *                     ],
 *                   },
 *                 },
 *                 VisualPalette: {
 *                   ChartColor: "STRING_VALUE",
 *                   ColorMap: [
 *                     {
 *                       Element: "<DataPathValue>", // required
 *                       Color: "STRING_VALUE", // required
 *                       TimeGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *                     },
 *                   ],
 *                 },
 *                 ColorConfiguration: { // GaugeChartColorConfiguration
 *                   ForegroundColor: "STRING_VALUE",
 *                   BackgroundColor: "STRING_VALUE",
 *                 },
 *                 Interactions: "<VisualInteractionOptions>",
 *               },
 *               ConditionalFormatting: { // GaugeChartConditionalFormatting
 *                 ConditionalFormattingOptions: [ // GaugeChartConditionalFormattingOptionList
 *                   { // GaugeChartConditionalFormattingOption
 *                     PrimaryValue: { // GaugeChartPrimaryValueConditionalFormatting
 *                       TextColor: "<ConditionalFormattingColor>",
 *                       Icon: "<ConditionalFormattingIcon>",
 *                     },
 *                     Arc: { // GaugeChartArcConditionalFormatting
 *                       ForegroundColor: "<ConditionalFormattingColor>",
 *                     },
 *                   },
 *                 ],
 *               },
 *               Actions: "<VisualCustomActionList>",
 *             },
 *             LineChartVisual: { // LineChartVisual
 *               VisualId: "STRING_VALUE", // required
 *               Title: "<VisualTitleLabelOptions>",
 *               Subtitle: "<VisualSubtitleLabelOptions>",
 *               ChartConfiguration: { // LineChartConfiguration
 *                 FieldWells: { // LineChartFieldWells
 *                   LineChartAggregatedFieldWells: { // LineChartAggregatedFieldWells
 *                     Category: "<DimensionFieldList>",
 *                     Values: "<MeasureFieldList>",
 *                     Colors: "<DimensionFieldList>",
 *                     SmallMultiples: [
 *                       "<DimensionField>",
 *                     ],
 *                   },
 *                 },
 *                 SortConfiguration: { // LineChartSortConfiguration
 *                   CategorySort: "<FieldSortOptionsList>",
 *                   CategoryItemsLimitConfiguration: "<ItemsLimitConfiguration>",
 *                   ColorItemsLimitConfiguration: "<ItemsLimitConfiguration>",
 *                   SmallMultiplesSort: "<FieldSortOptionsList>",
 *                   SmallMultiplesLimitConfiguration: "<ItemsLimitConfiguration>",
 *                 },
 *                 ForecastConfigurations: [ // ForecastConfigurationList
 *                   { // ForecastConfiguration
 *                     ForecastProperties: { // TimeBasedForecastProperties
 *                       PeriodsForward: Number("int"),
 *                       PeriodsBackward: Number("int"),
 *                       UpperBoundary: Number("double"),
 *                       LowerBoundary: Number("double"),
 *                       PredictionInterval: Number("int"),
 *                       Seasonality: Number("int"),
 *                     },
 *                     Scenario: { // ForecastScenario
 *                       WhatIfPointScenario: { // WhatIfPointScenario
 *                         Date: new Date("TIMESTAMP"), // required
 *                         Value: Number("double"), // required
 *                       },
 *                       WhatIfRangeScenario: { // WhatIfRangeScenario
 *                         StartDate: new Date("TIMESTAMP"), // required
 *                         EndDate: new Date("TIMESTAMP"), // required
 *                         Value: Number("double"), // required
 *                       },
 *                     },
 *                   },
 *                 ],
 *                 Type: "LINE" || "AREA" || "STACKED_AREA",
 *                 SmallMultiplesOptions: {
 *                   MaxVisibleRows: Number("long"),
 *                   MaxVisibleColumns: Number("long"),
 *                   PanelConfiguration: {
 *                     Title: {
 *                       Visibility: "HIDDEN" || "VISIBLE",
 *                       FontConfiguration: "<FontConfiguration>",
 *                       HorizontalTextAlignment: "LEFT" || "CENTER" || "RIGHT" || "AUTO",
 *                     },
 *                     BorderVisibility: "HIDDEN" || "VISIBLE",
 *                     BorderThickness: "STRING_VALUE",
 *                     BorderStyle: "SOLID" || "DASHED" || "DOTTED",
 *                     BorderColor: "STRING_VALUE",
 *                     GutterVisibility: "HIDDEN" || "VISIBLE",
 *                     GutterSpacing: "STRING_VALUE",
 *                     BackgroundVisibility: "HIDDEN" || "VISIBLE",
 *                     BackgroundColor: "STRING_VALUE",
 *                   },
 *                   XAxis: {
 *                     Scale: "SHARED" || "INDEPENDENT",
 *                     Placement: "OUTSIDE" || "INSIDE",
 *                   },
 *                   YAxis: "<SmallMultiplesAxisProperties>",
 *                 },
 *                 XAxisDisplayOptions: {
 *                   TickLabelOptions: {
 *                     LabelOptions: "<LabelOptions>",
 *                     RotationAngle: Number("double"),
 *                   },
 *                   AxisLineVisibility: "HIDDEN" || "VISIBLE",
 *                   GridLineVisibility: "HIDDEN" || "VISIBLE",
 *                   DataOptions: {
 *                     NumericAxisOptions: {
 *                       Scale: {
 *                         Linear: {
 *                           StepCount: Number("int"),
 *                           StepSize: Number("double"),
 *                         },
 *                         Logarithmic: {
 *                           Base: Number("double"),
 *                         },
 *                       },
 *                       Range: {
 *                         MinMax: {
 *                           Minimum: Number("double"),
 *                           Maximum: Number("double"),
 *                         },
 *                         DataDriven: {},
 *                       },
 *                     },
 *                     DateAxisOptions: {
 *                       MissingDateVisibility: "HIDDEN" || "VISIBLE",
 *                     },
 *                   },
 *                   ScrollbarOptions: {
 *                     Visibility: "HIDDEN" || "VISIBLE",
 *                     VisibleRange: {
 *                       PercentRange: {
 *                         From: Number("double"),
 *                         To: Number("double"),
 *                       },
 *                     },
 *                   },
 *                   AxisOffset: "STRING_VALUE",
 *                 },
 *                 XAxisLabelOptions: "<ChartAxisLabelOptions>",
 *                 PrimaryYAxisDisplayOptions: { // LineSeriesAxisDisplayOptions
 *                   AxisOptions: {
 *                     TickLabelOptions: {
 *                       LabelOptions: "<LabelOptions>",
 *                       RotationAngle: Number("double"),
 *                     },
 *                     AxisLineVisibility: "HIDDEN" || "VISIBLE",
 *                     GridLineVisibility: "HIDDEN" || "VISIBLE",
 *                     DataOptions: {
 *                       NumericAxisOptions: {
 *                         Scale: {
 *                           Linear: {
 *                             StepCount: Number("int"),
 *                             StepSize: Number("double"),
 *                           },
 *                           Logarithmic: {
 *                             Base: Number("double"),
 *                           },
 *                         },
 *                         Range: {
 *                           MinMax: {
 *                             Minimum: Number("double"),
 *                             Maximum: Number("double"),
 *                           },
 *                           DataDriven: {},
 *                         },
 *                       },
 *                       DateAxisOptions: {
 *                         MissingDateVisibility: "HIDDEN" || "VISIBLE",
 *                       },
 *                     },
 *                     ScrollbarOptions: {
 *                       Visibility: "HIDDEN" || "VISIBLE",
 *                       VisibleRange: {
 *                         PercentRange: {
 *                           From: Number("double"),
 *                           To: Number("double"),
 *                         },
 *                       },
 *                     },
 *                     AxisOffset: "STRING_VALUE",
 *                   },
 *                   MissingDataConfigurations: [ // MissingDataConfigurationList
 *                     { // MissingDataConfiguration
 *                       TreatmentOption: "INTERPOLATE" || "SHOW_AS_ZERO" || "SHOW_AS_BLANK",
 *                     },
 *                   ],
 *                 },
 *                 PrimaryYAxisLabelOptions: "<ChartAxisLabelOptions>",
 *                 SecondaryYAxisDisplayOptions: {
 *                   AxisOptions: {
 *                     TickLabelOptions: {
 *                       LabelOptions: "<LabelOptions>",
 *                       RotationAngle: Number("double"),
 *                     },
 *                     AxisLineVisibility: "HIDDEN" || "VISIBLE",
 *                     GridLineVisibility: "HIDDEN" || "VISIBLE",
 *                     DataOptions: {
 *                       NumericAxisOptions: {
 *                         Scale: {
 *                           Linear: {
 *                             StepCount: Number("int"),
 *                             StepSize: Number("double"),
 *                           },
 *                           Logarithmic: {
 *                             Base: Number("double"),
 *                           },
 *                         },
 *                         Range: {
 *                           MinMax: {
 *                             Minimum: Number("double"),
 *                             Maximum: Number("double"),
 *                           },
 *                           DataDriven: {},
 *                         },
 *                       },
 *                       DateAxisOptions: {
 *                         MissingDateVisibility: "HIDDEN" || "VISIBLE",
 *                       },
 *                     },
 *                     ScrollbarOptions: {
 *                       Visibility: "HIDDEN" || "VISIBLE",
 *                       VisibleRange: {
 *                         PercentRange: {
 *                           From: Number("double"),
 *                           To: Number("double"),
 *                         },
 *                       },
 *                     },
 *                     AxisOffset: "STRING_VALUE",
 *                   },
 *                   MissingDataConfigurations: [
 *                     {
 *                       TreatmentOption: "INTERPOLATE" || "SHOW_AS_ZERO" || "SHOW_AS_BLANK",
 *                     },
 *                   ],
 *                 },
 *                 SecondaryYAxisLabelOptions: "<ChartAxisLabelOptions>",
 *                 SingleAxisOptions: { // SingleAxisOptions
 *                   YAxisOptions: { // YAxisOptions
 *                     YAxis: "PRIMARY_Y_AXIS", // required
 *                   },
 *                 },
 *                 DefaultSeriesSettings: { // LineChartDefaultSeriesSettings
 *                   AxisBinding: "PRIMARY_YAXIS" || "SECONDARY_YAXIS",
 *                   LineStyleSettings: { // LineChartLineStyleSettings
 *                     LineVisibility: "HIDDEN" || "VISIBLE",
 *                     LineInterpolation: "LINEAR" || "SMOOTH" || "STEPPED",
 *                     LineStyle: "SOLID" || "DOTTED" || "DASHED",
 *                     LineWidth: "STRING_VALUE",
 *                   },
 *                   MarkerStyleSettings: { // LineChartMarkerStyleSettings
 *                     MarkerVisibility: "HIDDEN" || "VISIBLE",
 *                     MarkerShape: "CIRCLE" || "TRIANGLE" || "SQUARE" || "DIAMOND" || "ROUNDED_SQUARE",
 *                     MarkerSize: "STRING_VALUE",
 *                     MarkerColor: "STRING_VALUE",
 *                   },
 *                 },
 *                 Series: [ // SeriesItemList
 *                   { // SeriesItem
 *                     FieldSeriesItem: { // FieldSeriesItem
 *                       FieldId: "STRING_VALUE", // required
 *                       AxisBinding: "PRIMARY_YAXIS" || "SECONDARY_YAXIS", // required
 *                       Settings: { // LineChartSeriesSettings
 *                         LineStyleSettings: {
 *                           LineVisibility: "HIDDEN" || "VISIBLE",
 *                           LineInterpolation: "LINEAR" || "SMOOTH" || "STEPPED",
 *                           LineStyle: "SOLID" || "DOTTED" || "DASHED",
 *                           LineWidth: "STRING_VALUE",
 *                         },
 *                         MarkerStyleSettings: {
 *                           MarkerVisibility: "HIDDEN" || "VISIBLE",
 *                           MarkerShape: "CIRCLE" || "TRIANGLE" || "SQUARE" || "DIAMOND" || "ROUNDED_SQUARE",
 *                           MarkerSize: "STRING_VALUE",
 *                           MarkerColor: "STRING_VALUE",
 *                         },
 *                       },
 *                     },
 *                     DataFieldSeriesItem: { // DataFieldSeriesItem
 *                       FieldId: "STRING_VALUE", // required
 *                       FieldValue: "STRING_VALUE",
 *                       AxisBinding: "PRIMARY_YAXIS" || "SECONDARY_YAXIS", // required
 *                       Settings: {
 *                         LineStyleSettings: {
 *                           LineVisibility: "HIDDEN" || "VISIBLE",
 *                           LineInterpolation: "LINEAR" || "SMOOTH" || "STEPPED",
 *                           LineStyle: "SOLID" || "DOTTED" || "DASHED",
 *                           LineWidth: "STRING_VALUE",
 *                         },
 *                         MarkerStyleSettings: {
 *                           MarkerVisibility: "HIDDEN" || "VISIBLE",
 *                           MarkerShape: "CIRCLE" || "TRIANGLE" || "SQUARE" || "DIAMOND" || "ROUNDED_SQUARE",
 *                           MarkerSize: "STRING_VALUE",
 *                           MarkerColor: "STRING_VALUE",
 *                         },
 *                       },
 *                     },
 *                   },
 *                 ],
 *                 Legend: {
 *                   Visibility: "HIDDEN" || "VISIBLE",
 *                   Title: "<LabelOptions>",
 *                   Position: "AUTO" || "RIGHT" || "BOTTOM" || "TOP",
 *                   Width: "STRING_VALUE",
 *                   Height: "STRING_VALUE",
 *                 },
 *                 DataLabels: {
 *                   Visibility: "HIDDEN" || "VISIBLE",
 *                   CategoryLabelVisibility: "HIDDEN" || "VISIBLE",
 *                   MeasureLabelVisibility: "HIDDEN" || "VISIBLE",
 *                   DataLabelTypes: [
 *                     {
 *                       FieldLabelType: {
 *                         FieldId: "STRING_VALUE",
 *                         Visibility: "HIDDEN" || "VISIBLE",
 *                       },
 *                       DataPathLabelType: {
 *                         FieldId: "STRING_VALUE",
 *                         FieldValue: "STRING_VALUE",
 *                         Visibility: "HIDDEN" || "VISIBLE",
 *                       },
 *                       RangeEndsLabelType: {
 *                         Visibility: "HIDDEN" || "VISIBLE",
 *                       },
 *                       MinimumLabelType: {
 *                         Visibility: "HIDDEN" || "VISIBLE",
 *                       },
 *                       MaximumLabelType: {
 *                         Visibility: "HIDDEN" || "VISIBLE",
 *                       },
 *                     },
 *                   ],
 *                   Position: "INSIDE" || "OUTSIDE" || "LEFT" || "TOP" || "BOTTOM" || "RIGHT",
 *                   LabelContent: "VALUE" || "PERCENT" || "VALUE_AND_PERCENT",
 *                   LabelFontConfiguration: "<FontConfiguration>",
 *                   LabelColor: "STRING_VALUE",
 *                   Overlap: "DISABLE_OVERLAP" || "ENABLE_OVERLAP",
 *                   TotalsVisibility: "HIDDEN" || "VISIBLE",
 *                 },
 *                 ReferenceLines: [
 *                   {
 *                     Status: "ENABLED" || "DISABLED",
 *                     DataConfiguration: {
 *                       StaticConfiguration: {
 *                         Value: Number("double"), // required
 *                       },
 *                       DynamicConfiguration: {
 *                         Column: "<ColumnIdentifier>", // required
 *                         MeasureAggregationFunction: "<AggregationFunction>",
 *                         Calculation: "<NumericalAggregationFunction>", // required
 *                       },
 *                       AxisBinding: "PRIMARY_YAXIS" || "SECONDARY_YAXIS",
 *                       SeriesType: "BAR" || "LINE",
 *                     },
 *                     StyleConfiguration: {
 *                       Pattern: "SOLID" || "DASHED" || "DOTTED",
 *                       Color: "STRING_VALUE",
 *                     },
 *                     LabelConfiguration: {
 *                       ValueLabelConfiguration: {
 *                         RelativePosition: "BEFORE_CUSTOM_LABEL" || "AFTER_CUSTOM_LABEL",
 *                         FormatConfiguration: "<NumericFormatConfiguration>",
 *                       },
 *                       CustomLabelConfiguration: {
 *                         CustomLabel: "STRING_VALUE", // required
 *                       },
 *                       FontConfiguration: "<FontConfiguration>",
 *                       FontColor: "STRING_VALUE",
 *                       HorizontalPosition: "LEFT" || "CENTER" || "RIGHT",
 *                       VerticalPosition: "ABOVE" || "BELOW",
 *                     },
 *                   },
 *                 ],
 *                 Tooltip: {
 *                   TooltipVisibility: "HIDDEN" || "VISIBLE",
 *                   SelectedTooltipType: "BASIC" || "DETAILED",
 *                   FieldBasedTooltip: {
 *                     AggregationVisibility: "HIDDEN" || "VISIBLE",
 *                     TooltipTitleType: "NONE" || "PRIMARY_VALUE",
 *                     TooltipFields: [
 *                       {
 *                         FieldTooltipItem: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Label: "STRING_VALUE",
 *                           Visibility: "HIDDEN" || "VISIBLE",
 *                           TooltipTarget: "BOTH" || "BAR" || "LINE",
 *                         },
 *                         ColumnTooltipItem: {
 *                           Column: "<ColumnIdentifier>", // required
 *                           Label: "STRING_VALUE",
 *                           Visibility: "HIDDEN" || "VISIBLE",
 *                           Aggregation: "<AggregationFunction>",
 *                           TooltipTarget: "BOTH" || "BAR" || "LINE",
 *                         },
 *                       },
 *                     ],
 *                   },
 *                 },
 *                 ContributionAnalysisDefaults: [
 *                   {
 *                     MeasureFieldId: "STRING_VALUE", // required
 *                     ContributorDimensions: [ // required
 *                       "<ColumnIdentifier>",
 *                     ],
 *                   },
 *                 ],
 *                 VisualPalette: {
 *                   ChartColor: "STRING_VALUE",
 *                   ColorMap: [
 *                     {
 *                       Element: "<DataPathValue>", // required
 *                       Color: "STRING_VALUE", // required
 *                       TimeGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *                     },
 *                   ],
 *                 },
 *                 Interactions: "<VisualInteractionOptions>",
 *               },
 *               Actions: "<VisualCustomActionList>",
 *               ColumnHierarchies: [
 *                 {
 *                   ExplicitHierarchy: {
 *                     HierarchyId: "STRING_VALUE", // required
 *                     Columns: [ // required
 *                       "<ColumnIdentifier>",
 *                     ],
 *                     DrillDownFilters: "<DrillDownFilterList>",
 *                   },
 *                   DateTimeHierarchy: {
 *                     HierarchyId: "STRING_VALUE", // required
 *                     DrillDownFilters: "<DrillDownFilterList>",
 *                   },
 *                   PredefinedHierarchy: {
 *                     HierarchyId: "STRING_VALUE", // required
 *                     Columns: [ // required
 *                       "<ColumnIdentifier>",
 *                     ],
 *                     DrillDownFilters: "<DrillDownFilterList>",
 *                   },
 *                 },
 *               ],
 *             },
 *             HeatMapVisual: { // HeatMapVisual
 *               VisualId: "STRING_VALUE", // required
 *               Title: "<VisualTitleLabelOptions>",
 *               Subtitle: "<VisualSubtitleLabelOptions>",
 *               ChartConfiguration: { // HeatMapConfiguration
 *                 FieldWells: { // HeatMapFieldWells
 *                   HeatMapAggregatedFieldWells: { // HeatMapAggregatedFieldWells
 *                     Rows: [ // HeatMapDimensionFieldList
 *                       "<DimensionField>",
 *                     ],
 *                     Columns: [
 *                       "<DimensionField>",
 *                     ],
 *                     Values: [ // HeatMapMeasureFieldList
 *                       "<MeasureField>",
 *                     ],
 *                   },
 *                 },
 *                 SortConfiguration: { // HeatMapSortConfiguration
 *                   HeatMapRowSort: "<FieldSortOptionsList>",
 *                   HeatMapColumnSort: "<FieldSortOptionsList>",
 *                   HeatMapRowItemsLimitConfiguration: "<ItemsLimitConfiguration>",
 *                   HeatMapColumnItemsLimitConfiguration: "<ItemsLimitConfiguration>",
 *                 },
 *                 RowLabelOptions: "<ChartAxisLabelOptions>",
 *                 ColumnLabelOptions: "<ChartAxisLabelOptions>",
 *                 ColorScale: { // ColorScale
 *                   Colors: [ // ColorScaleColorList // required
 *                     { // DataColor
 *                       Color: "STRING_VALUE",
 *                       DataValue: Number("double"),
 *                     },
 *                   ],
 *                   ColorFillType: "DISCRETE" || "GRADIENT", // required
 *                   NullValueColor: {
 *                     Color: "STRING_VALUE",
 *                     DataValue: Number("double"),
 *                   },
 *                 },
 *                 Legend: {
 *                   Visibility: "HIDDEN" || "VISIBLE",
 *                   Title: "<LabelOptions>",
 *                   Position: "AUTO" || "RIGHT" || "BOTTOM" || "TOP",
 *                   Width: "STRING_VALUE",
 *                   Height: "STRING_VALUE",
 *                 },
 *                 DataLabels: {
 *                   Visibility: "HIDDEN" || "VISIBLE",
 *                   CategoryLabelVisibility: "HIDDEN" || "VISIBLE",
 *                   MeasureLabelVisibility: "HIDDEN" || "VISIBLE",
 *                   DataLabelTypes: [
 *                     {
 *                       FieldLabelType: {
 *                         FieldId: "STRING_VALUE",
 *                         Visibility: "HIDDEN" || "VISIBLE",
 *                       },
 *                       DataPathLabelType: {
 *                         FieldId: "STRING_VALUE",
 *                         FieldValue: "STRING_VALUE",
 *                         Visibility: "HIDDEN" || "VISIBLE",
 *                       },
 *                       RangeEndsLabelType: {
 *                         Visibility: "HIDDEN" || "VISIBLE",
 *                       },
 *                       MinimumLabelType: {
 *                         Visibility: "HIDDEN" || "VISIBLE",
 *                       },
 *                       MaximumLabelType: {
 *                         Visibility: "HIDDEN" || "VISIBLE",
 *                       },
 *                     },
 *                   ],
 *                   Position: "INSIDE" || "OUTSIDE" || "LEFT" || "TOP" || "BOTTOM" || "RIGHT",
 *                   LabelContent: "VALUE" || "PERCENT" || "VALUE_AND_PERCENT",
 *                   LabelFontConfiguration: "<FontConfiguration>",
 *                   LabelColor: "STRING_VALUE",
 *                   Overlap: "DISABLE_OVERLAP" || "ENABLE_OVERLAP",
 *                   TotalsVisibility: "HIDDEN" || "VISIBLE",
 *                 },
 *                 Tooltip: {
 *                   TooltipVisibility: "HIDDEN" || "VISIBLE",
 *                   SelectedTooltipType: "BASIC" || "DETAILED",
 *                   FieldBasedTooltip: {
 *                     AggregationVisibility: "HIDDEN" || "VISIBLE",
 *                     TooltipTitleType: "NONE" || "PRIMARY_VALUE",
 *                     TooltipFields: [
 *                       {
 *                         FieldTooltipItem: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Label: "STRING_VALUE",
 *                           Visibility: "HIDDEN" || "VISIBLE",
 *                           TooltipTarget: "BOTH" || "BAR" || "LINE",
 *                         },
 *                         ColumnTooltipItem: {
 *                           Column: "<ColumnIdentifier>", // required
 *                           Label: "STRING_VALUE",
 *                           Visibility: "HIDDEN" || "VISIBLE",
 *                           Aggregation: "<AggregationFunction>",
 *                           TooltipTarget: "BOTH" || "BAR" || "LINE",
 *                         },
 *                       },
 *                     ],
 *                   },
 *                 },
 *                 Interactions: "<VisualInteractionOptions>",
 *               },
 *               ColumnHierarchies: [
 *                 {
 *                   ExplicitHierarchy: {
 *                     HierarchyId: "STRING_VALUE", // required
 *                     Columns: [ // required
 *                       "<ColumnIdentifier>",
 *                     ],
 *                     DrillDownFilters: "<DrillDownFilterList>",
 *                   },
 *                   DateTimeHierarchy: {
 *                     HierarchyId: "STRING_VALUE", // required
 *                     DrillDownFilters: "<DrillDownFilterList>",
 *                   },
 *                   PredefinedHierarchy: {
 *                     HierarchyId: "STRING_VALUE", // required
 *                     Columns: [ // required
 *                       "<ColumnIdentifier>",
 *                     ],
 *                     DrillDownFilters: "<DrillDownFilterList>",
 *                   },
 *                 },
 *               ],
 *               Actions: "<VisualCustomActionList>",
 *             },
 *             TreeMapVisual: { // TreeMapVisual
 *               VisualId: "STRING_VALUE", // required
 *               Title: "<VisualTitleLabelOptions>",
 *               Subtitle: "<VisualSubtitleLabelOptions>",
 *               ChartConfiguration: { // TreeMapConfiguration
 *                 FieldWells: { // TreeMapFieldWells
 *                   TreeMapAggregatedFieldWells: { // TreeMapAggregatedFieldWells
 *                     Groups: [ // TreeMapDimensionFieldList
 *                       "<DimensionField>",
 *                     ],
 *                     Sizes: [ // TreeMapMeasureFieldList
 *                       "<MeasureField>",
 *                     ],
 *                     Colors: [
 *                       "<MeasureField>",
 *                     ],
 *                   },
 *                 },
 *                 SortConfiguration: { // TreeMapSortConfiguration
 *                   TreeMapSort: "<FieldSortOptionsList>",
 *                   TreeMapGroupItemsLimitConfiguration: "<ItemsLimitConfiguration>",
 *                 },
 *                 GroupLabelOptions: "<ChartAxisLabelOptions>",
 *                 SizeLabelOptions: "<ChartAxisLabelOptions>",
 *                 ColorLabelOptions: "<ChartAxisLabelOptions>",
 *                 ColorScale: {
 *                   Colors: [ // required
 *                     {
 *                       Color: "STRING_VALUE",
 *                       DataValue: Number("double"),
 *                     },
 *                   ],
 *                   ColorFillType: "DISCRETE" || "GRADIENT", // required
 *                   NullValueColor: {
 *                     Color: "STRING_VALUE",
 *                     DataValue: Number("double"),
 *                   },
 *                 },
 *                 Legend: {
 *                   Visibility: "HIDDEN" || "VISIBLE",
 *                   Title: "<LabelOptions>",
 *                   Position: "AUTO" || "RIGHT" || "BOTTOM" || "TOP",
 *                   Width: "STRING_VALUE",
 *                   Height: "STRING_VALUE",
 *                 },
 *                 DataLabels: "<DataLabelOptions>",
 *                 Tooltip: "<TooltipOptions>",
 *                 Interactions: "<VisualInteractionOptions>",
 *               },
 *               Actions: "<VisualCustomActionList>",
 *               ColumnHierarchies: "<ColumnHierarchyList>",
 *             },
 *             GeospatialMapVisual: { // GeospatialMapVisual
 *               VisualId: "STRING_VALUE", // required
 *               Title: "<VisualTitleLabelOptions>",
 *               Subtitle: "<VisualSubtitleLabelOptions>",
 *               ChartConfiguration: { // GeospatialMapConfiguration
 *                 FieldWells: { // GeospatialMapFieldWells
 *                   GeospatialMapAggregatedFieldWells: { // GeospatialMapAggregatedFieldWells
 *                     Geospatial: "<DimensionFieldList>",
 *                     Values: "<MeasureFieldList>",
 *                     Colors: "<DimensionFieldList>",
 *                   },
 *                 },
 *                 Legend: "<LegendOptions>",
 *                 Tooltip: "<TooltipOptions>",
 *                 WindowOptions: { // GeospatialWindowOptions
 *                   Bounds: { // GeospatialCoordinateBounds
 *                     North: Number("double"), // required
 *                     South: Number("double"), // required
 *                     West: Number("double"), // required
 *                     East: Number("double"), // required
 *                   },
 *                   MapZoomMode: "AUTO" || "MANUAL",
 *                 },
 *                 MapStyleOptions: { // GeospatialMapStyleOptions
 *                   BaseMapStyle: "LIGHT_GRAY" || "DARK_GRAY" || "STREET" || "IMAGERY",
 *                 },
 *                 PointStyleOptions: { // GeospatialPointStyleOptions
 *                   SelectedPointStyle: "POINT" || "CLUSTER" || "HEATMAP",
 *                   ClusterMarkerConfiguration: { // ClusterMarkerConfiguration
 *                     ClusterMarker: { // ClusterMarker
 *                       SimpleClusterMarker: { // SimpleClusterMarker
 *                         Color: "STRING_VALUE",
 *                       },
 *                     },
 *                   },
 *                   HeatmapConfiguration: { // GeospatialHeatmapConfiguration
 *                     HeatmapColor: { // GeospatialHeatmapColorScale
 *                       Colors: [ // GeospatialHeatmapDataColorList
 *                         { // GeospatialHeatmapDataColor
 *                           Color: "STRING_VALUE", // required
 *                         },
 *                       ],
 *                     },
 *                   },
 *                 },
 *                 VisualPalette: {
 *                   ChartColor: "STRING_VALUE",
 *                   ColorMap: [
 *                     {
 *                       Element: "<DataPathValue>", // required
 *                       Color: "STRING_VALUE", // required
 *                       TimeGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *                     },
 *                   ],
 *                 },
 *                 Interactions: "<VisualInteractionOptions>",
 *               },
 *               ColumnHierarchies: "<ColumnHierarchyList>",
 *               Actions: "<VisualCustomActionList>",
 *             },
 *             FilledMapVisual: { // FilledMapVisual
 *               VisualId: "STRING_VALUE", // required
 *               Title: "<VisualTitleLabelOptions>",
 *               Subtitle: "<VisualSubtitleLabelOptions>",
 *               ChartConfiguration: { // FilledMapConfiguration
 *                 FieldWells: { // FilledMapFieldWells
 *                   FilledMapAggregatedFieldWells: { // FilledMapAggregatedFieldWells
 *                     Geospatial: [ // FilledMapDimensionFieldList
 *                       "<DimensionField>",
 *                     ],
 *                     Values: [ // FilledMapMeasureFieldList
 *                       "<MeasureField>",
 *                     ],
 *                   },
 *                 },
 *                 SortConfiguration: { // FilledMapSortConfiguration
 *                   CategorySort: "<FieldSortOptionsList>",
 *                 },
 *                 Legend: "<LegendOptions>",
 *                 Tooltip: "<TooltipOptions>",
 *                 WindowOptions: {
 *                   Bounds: {
 *                     North: Number("double"), // required
 *                     South: Number("double"), // required
 *                     West: Number("double"), // required
 *                     East: Number("double"), // required
 *                   },
 *                   MapZoomMode: "AUTO" || "MANUAL",
 *                 },
 *                 MapStyleOptions: {
 *                   BaseMapStyle: "LIGHT_GRAY" || "DARK_GRAY" || "STREET" || "IMAGERY",
 *                 },
 *                 Interactions: "<VisualInteractionOptions>",
 *               },
 *               ConditionalFormatting: { // FilledMapConditionalFormatting
 *                 ConditionalFormattingOptions: [ // FilledMapConditionalFormattingOptionList // required
 *                   { // FilledMapConditionalFormattingOption
 *                     Shape: { // FilledMapShapeConditionalFormatting
 *                       FieldId: "STRING_VALUE", // required
 *                       Format: { // ShapeConditionalFormat
 *                         BackgroundColor: "<ConditionalFormattingColor>", // required
 *                       },
 *                     },
 *                   },
 *                 ],
 *               },
 *               ColumnHierarchies: "<ColumnHierarchyList>",
 *               Actions: "<VisualCustomActionList>",
 *             },
 *             FunnelChartVisual: { // FunnelChartVisual
 *               VisualId: "STRING_VALUE", // required
 *               Title: "<VisualTitleLabelOptions>",
 *               Subtitle: "<VisualSubtitleLabelOptions>",
 *               ChartConfiguration: { // FunnelChartConfiguration
 *                 FieldWells: { // FunnelChartFieldWells
 *                   FunnelChartAggregatedFieldWells: { // FunnelChartAggregatedFieldWells
 *                     Category: [ // FunnelChartDimensionFieldList
 *                       "<DimensionField>",
 *                     ],
 *                     Values: [ // FunnelChartMeasureFieldList
 *                       "<MeasureField>",
 *                     ],
 *                   },
 *                 },
 *                 SortConfiguration: { // FunnelChartSortConfiguration
 *                   CategorySort: "<FieldSortOptionsList>",
 *                   CategoryItemsLimit: "<ItemsLimitConfiguration>",
 *                 },
 *                 CategoryLabelOptions: "<ChartAxisLabelOptions>",
 *                 ValueLabelOptions: "<ChartAxisLabelOptions>",
 *                 Tooltip: "<TooltipOptions>",
 *                 DataLabelOptions: { // FunnelChartDataLabelOptions
 *                   Visibility: "HIDDEN" || "VISIBLE",
 *                   CategoryLabelVisibility: "HIDDEN" || "VISIBLE",
 *                   MeasureLabelVisibility: "HIDDEN" || "VISIBLE",
 *                   Position: "INSIDE" || "OUTSIDE" || "LEFT" || "TOP" || "BOTTOM" || "RIGHT",
 *                   LabelFontConfiguration: "<FontConfiguration>",
 *                   LabelColor: "STRING_VALUE",
 *                   MeasureDataLabelStyle: "VALUE_ONLY" || "PERCENTAGE_BY_FIRST_STAGE" || "PERCENTAGE_BY_PREVIOUS_STAGE" || "VALUE_AND_PERCENTAGE_BY_FIRST_STAGE" || "VALUE_AND_PERCENTAGE_BY_PREVIOUS_STAGE",
 *                 },
 *                 VisualPalette: "<VisualPalette>",
 *                 Interactions: "<VisualInteractionOptions>",
 *               },
 *               Actions: "<VisualCustomActionList>",
 *               ColumnHierarchies: "<ColumnHierarchyList>",
 *             },
 *             ScatterPlotVisual: { // ScatterPlotVisual
 *               VisualId: "STRING_VALUE", // required
 *               Title: "<VisualTitleLabelOptions>",
 *               Subtitle: "<VisualSubtitleLabelOptions>",
 *               ChartConfiguration: { // ScatterPlotConfiguration
 *                 FieldWells: { // ScatterPlotFieldWells
 *                   ScatterPlotCategoricallyAggregatedFieldWells: { // ScatterPlotCategoricallyAggregatedFieldWells
 *                     XAxis: "<MeasureFieldList>",
 *                     YAxis: "<MeasureFieldList>",
 *                     Category: "<DimensionFieldList>",
 *                     Size: "<MeasureFieldList>",
 *                     Label: "<DimensionFieldList>",
 *                   },
 *                   ScatterPlotUnaggregatedFieldWells: { // ScatterPlotUnaggregatedFieldWells
 *                     XAxis: "<DimensionFieldList>",
 *                     YAxis: "<DimensionFieldList>",
 *                     Size: "<MeasureFieldList>",
 *                     Category: "<DimensionFieldList>",
 *                     Label: "<DimensionFieldList>",
 *                   },
 *                 },
 *                 SortConfiguration: { // ScatterPlotSortConfiguration
 *                   ScatterPlotLimitConfiguration: "<ItemsLimitConfiguration>",
 *                 },
 *                 XAxisLabelOptions: "<ChartAxisLabelOptions>",
 *                 XAxisDisplayOptions: "<AxisDisplayOptions>",
 *                 YAxisLabelOptions: "<ChartAxisLabelOptions>",
 *                 YAxisDisplayOptions: "<AxisDisplayOptions>",
 *                 Legend: "<LegendOptions>",
 *                 DataLabels: "<DataLabelOptions>",
 *                 Tooltip: "<TooltipOptions>",
 *                 VisualPalette: "<VisualPalette>",
 *                 Interactions: "<VisualInteractionOptions>",
 *               },
 *               Actions: "<VisualCustomActionList>",
 *               ColumnHierarchies: "<ColumnHierarchyList>",
 *             },
 *             ComboChartVisual: { // ComboChartVisual
 *               VisualId: "STRING_VALUE", // required
 *               Title: "<VisualTitleLabelOptions>",
 *               Subtitle: "<VisualSubtitleLabelOptions>",
 *               ChartConfiguration: { // ComboChartConfiguration
 *                 FieldWells: { // ComboChartFieldWells
 *                   ComboChartAggregatedFieldWells: { // ComboChartAggregatedFieldWells
 *                     Category: "<DimensionFieldList>",
 *                     BarValues: "<MeasureFieldList>",
 *                     Colors: "<DimensionFieldList>",
 *                     LineValues: "<MeasureFieldList>",
 *                   },
 *                 },
 *                 SortConfiguration: { // ComboChartSortConfiguration
 *                   CategorySort: "<FieldSortOptionsList>",
 *                   CategoryItemsLimit: "<ItemsLimitConfiguration>",
 *                   ColorSort: "<FieldSortOptionsList>",
 *                   ColorItemsLimit: "<ItemsLimitConfiguration>",
 *                 },
 *                 BarsArrangement: "CLUSTERED" || "STACKED" || "STACKED_PERCENT",
 *                 CategoryAxis: "<AxisDisplayOptions>",
 *                 CategoryLabelOptions: "<ChartAxisLabelOptions>",
 *                 PrimaryYAxisDisplayOptions: "<AxisDisplayOptions>",
 *                 PrimaryYAxisLabelOptions: "<ChartAxisLabelOptions>",
 *                 SecondaryYAxisDisplayOptions: "<AxisDisplayOptions>",
 *                 SecondaryYAxisLabelOptions: "<ChartAxisLabelOptions>",
 *                 SingleAxisOptions: {
 *                   YAxisOptions: {
 *                     YAxis: "PRIMARY_Y_AXIS", // required
 *                   },
 *                 },
 *                 ColorLabelOptions: "<ChartAxisLabelOptions>",
 *                 Legend: "<LegendOptions>",
 *                 BarDataLabels: "<DataLabelOptions>",
 *                 LineDataLabels: "<DataLabelOptions>",
 *                 Tooltip: "<TooltipOptions>",
 *                 ReferenceLines: [
 *                   {
 *                     Status: "ENABLED" || "DISABLED",
 *                     DataConfiguration: {
 *                       StaticConfiguration: {
 *                         Value: Number("double"), // required
 *                       },
 *                       DynamicConfiguration: {
 *                         Column: "<ColumnIdentifier>", // required
 *                         MeasureAggregationFunction: "<AggregationFunction>",
 *                         Calculation: "<NumericalAggregationFunction>", // required
 *                       },
 *                       AxisBinding: "PRIMARY_YAXIS" || "SECONDARY_YAXIS",
 *                       SeriesType: "BAR" || "LINE",
 *                     },
 *                     StyleConfiguration: {
 *                       Pattern: "SOLID" || "DASHED" || "DOTTED",
 *                       Color: "STRING_VALUE",
 *                     },
 *                     LabelConfiguration: {
 *                       ValueLabelConfiguration: {
 *                         RelativePosition: "BEFORE_CUSTOM_LABEL" || "AFTER_CUSTOM_LABEL",
 *                         FormatConfiguration: "<NumericFormatConfiguration>",
 *                       },
 *                       CustomLabelConfiguration: {
 *                         CustomLabel: "STRING_VALUE", // required
 *                       },
 *                       FontConfiguration: "<FontConfiguration>",
 *                       FontColor: "STRING_VALUE",
 *                       HorizontalPosition: "LEFT" || "CENTER" || "RIGHT",
 *                       VerticalPosition: "ABOVE" || "BELOW",
 *                     },
 *                   },
 *                 ],
 *                 VisualPalette: "<VisualPalette>",
 *                 Interactions: "<VisualInteractionOptions>",
 *               },
 *               Actions: "<VisualCustomActionList>",
 *               ColumnHierarchies: "<ColumnHierarchyList>",
 *             },
 *             BoxPlotVisual: { // BoxPlotVisual
 *               VisualId: "STRING_VALUE", // required
 *               Title: "<VisualTitleLabelOptions>",
 *               Subtitle: "<VisualSubtitleLabelOptions>",
 *               ChartConfiguration: { // BoxPlotChartConfiguration
 *                 FieldWells: { // BoxPlotFieldWells
 *                   BoxPlotAggregatedFieldWells: { // BoxPlotAggregatedFieldWells
 *                     GroupBy: [ // BoxPlotDimensionFieldList
 *                       "<DimensionField>",
 *                     ],
 *                     Values: [ // BoxPlotMeasureFieldList
 *                       "<MeasureField>",
 *                     ],
 *                   },
 *                 },
 *                 SortConfiguration: { // BoxPlotSortConfiguration
 *                   CategorySort: "<FieldSortOptionsList>",
 *                   PaginationConfiguration: {
 *                     PageSize: Number("long"), // required
 *                     PageNumber: Number("long"), // required
 *                   },
 *                 },
 *                 BoxPlotOptions: { // BoxPlotOptions
 *                   StyleOptions: { // BoxPlotStyleOptions
 *                     FillStyle: "SOLID" || "TRANSPARENT",
 *                   },
 *                   OutlierVisibility: "HIDDEN" || "VISIBLE",
 *                   AllDataPointsVisibility: "HIDDEN" || "VISIBLE",
 *                 },
 *                 CategoryAxis: "<AxisDisplayOptions>",
 *                 CategoryLabelOptions: "<ChartAxisLabelOptions>",
 *                 PrimaryYAxisDisplayOptions: "<AxisDisplayOptions>",
 *                 PrimaryYAxisLabelOptions: "<ChartAxisLabelOptions>",
 *                 Legend: "<LegendOptions>",
 *                 Tooltip: "<TooltipOptions>",
 *                 ReferenceLines: [
 *                   {
 *                     Status: "ENABLED" || "DISABLED",
 *                     DataConfiguration: {
 *                       StaticConfiguration: {
 *                         Value: Number("double"), // required
 *                       },
 *                       DynamicConfiguration: {
 *                         Column: "<ColumnIdentifier>", // required
 *                         MeasureAggregationFunction: "<AggregationFunction>",
 *                         Calculation: "<NumericalAggregationFunction>", // required
 *                       },
 *                       AxisBinding: "PRIMARY_YAXIS" || "SECONDARY_YAXIS",
 *                       SeriesType: "BAR" || "LINE",
 *                     },
 *                     StyleConfiguration: {
 *                       Pattern: "SOLID" || "DASHED" || "DOTTED",
 *                       Color: "STRING_VALUE",
 *                     },
 *                     LabelConfiguration: {
 *                       ValueLabelConfiguration: {
 *                         RelativePosition: "BEFORE_CUSTOM_LABEL" || "AFTER_CUSTOM_LABEL",
 *                         FormatConfiguration: "<NumericFormatConfiguration>",
 *                       },
 *                       CustomLabelConfiguration: {
 *                         CustomLabel: "STRING_VALUE", // required
 *                       },
 *                       FontConfiguration: "<FontConfiguration>",
 *                       FontColor: "STRING_VALUE",
 *                       HorizontalPosition: "LEFT" || "CENTER" || "RIGHT",
 *                       VerticalPosition: "ABOVE" || "BELOW",
 *                     },
 *                   },
 *                 ],
 *                 VisualPalette: "<VisualPalette>",
 *                 Interactions: "<VisualInteractionOptions>",
 *               },
 *               Actions: "<VisualCustomActionList>",
 *               ColumnHierarchies: "<ColumnHierarchyList>",
 *             },
 *             WaterfallVisual: { // WaterfallVisual
 *               VisualId: "STRING_VALUE", // required
 *               Title: "<VisualTitleLabelOptions>",
 *               Subtitle: "<VisualSubtitleLabelOptions>",
 *               ChartConfiguration: { // WaterfallChartConfiguration
 *                 FieldWells: { // WaterfallChartFieldWells
 *                   WaterfallChartAggregatedFieldWells: { // WaterfallChartAggregatedFieldWells
 *                     Categories: "<DimensionFieldList>",
 *                     Values: "<MeasureFieldList>",
 *                     Breakdowns: "<DimensionFieldList>",
 *                   },
 *                 },
 *                 SortConfiguration: { // WaterfallChartSortConfiguration
 *                   CategorySort: "<FieldSortOptionsList>",
 *                   BreakdownItemsLimit: "<ItemsLimitConfiguration>",
 *                 },
 *                 WaterfallChartOptions: { // WaterfallChartOptions
 *                   TotalBarLabel: "STRING_VALUE",
 *                 },
 *                 CategoryAxisLabelOptions: "<ChartAxisLabelOptions>",
 *                 CategoryAxisDisplayOptions: "<AxisDisplayOptions>",
 *                 PrimaryYAxisLabelOptions: "<ChartAxisLabelOptions>",
 *                 PrimaryYAxisDisplayOptions: "<AxisDisplayOptions>",
 *                 Legend: "<LegendOptions>",
 *                 DataLabels: "<DataLabelOptions>",
 *                 VisualPalette: "<VisualPalette>",
 *                 ColorConfiguration: { // WaterfallChartColorConfiguration
 *                   GroupColorConfiguration: { // WaterfallChartGroupColorConfiguration
 *                     PositiveBarColor: "STRING_VALUE",
 *                     NegativeBarColor: "STRING_VALUE",
 *                     TotalBarColor: "STRING_VALUE",
 *                   },
 *                 },
 *                 Interactions: "<VisualInteractionOptions>",
 *               },
 *               Actions: "<VisualCustomActionList>",
 *               ColumnHierarchies: "<ColumnHierarchyList>",
 *             },
 *             HistogramVisual: { // HistogramVisual
 *               VisualId: "STRING_VALUE", // required
 *               Title: "<VisualTitleLabelOptions>",
 *               Subtitle: "<VisualSubtitleLabelOptions>",
 *               ChartConfiguration: { // HistogramConfiguration
 *                 FieldWells: { // HistogramFieldWells
 *                   HistogramAggregatedFieldWells: { // HistogramAggregatedFieldWells
 *                     Values: [ // HistogramMeasureFieldList
 *                       "<MeasureField>",
 *                     ],
 *                   },
 *                 },
 *                 XAxisDisplayOptions: "<AxisDisplayOptions>",
 *                 XAxisLabelOptions: "<ChartAxisLabelOptions>",
 *                 YAxisDisplayOptions: "<AxisDisplayOptions>",
 *                 BinOptions: { // HistogramBinOptions
 *                   SelectedBinType: "BIN_COUNT" || "BIN_WIDTH",
 *                   BinCount: { // BinCountOptions
 *                     Value: Number("int"),
 *                   },
 *                   BinWidth: { // BinWidthOptions
 *                     Value: Number("double"),
 *                     BinCountLimit: Number("long"),
 *                   },
 *                   StartValue: Number("double"),
 *                 },
 *                 DataLabels: "<DataLabelOptions>",
 *                 Tooltip: "<TooltipOptions>",
 *                 VisualPalette: "<VisualPalette>",
 *                 Interactions: "<VisualInteractionOptions>",
 *               },
 *               Actions: "<VisualCustomActionList>",
 *             },
 *             WordCloudVisual: { // WordCloudVisual
 *               VisualId: "STRING_VALUE", // required
 *               Title: "<VisualTitleLabelOptions>",
 *               Subtitle: "<VisualSubtitleLabelOptions>",
 *               ChartConfiguration: { // WordCloudChartConfiguration
 *                 FieldWells: { // WordCloudFieldWells
 *                   WordCloudAggregatedFieldWells: { // WordCloudAggregatedFieldWells
 *                     GroupBy: [ // WordCloudDimensionFieldList
 *                       "<DimensionField>",
 *                     ],
 *                     Size: [ // WordCloudMeasureFieldList
 *                       "<MeasureField>",
 *                     ],
 *                   },
 *                 },
 *                 SortConfiguration: { // WordCloudSortConfiguration
 *                   CategoryItemsLimit: "<ItemsLimitConfiguration>",
 *                   CategorySort: "<FieldSortOptionsList>",
 *                 },
 *                 CategoryLabelOptions: "<ChartAxisLabelOptions>",
 *                 WordCloudOptions: { // WordCloudOptions
 *                   WordOrientation: "HORIZONTAL" || "HORIZONTAL_AND_VERTICAL",
 *                   WordScaling: "EMPHASIZE" || "NORMAL",
 *                   CloudLayout: "FLUID" || "NORMAL",
 *                   WordCasing: "LOWER_CASE" || "EXISTING_CASE",
 *                   WordPadding: "NONE" || "SMALL" || "MEDIUM" || "LARGE",
 *                   MaximumStringLength: Number("int"),
 *                 },
 *                 Interactions: "<VisualInteractionOptions>",
 *               },
 *               Actions: "<VisualCustomActionList>",
 *               ColumnHierarchies: "<ColumnHierarchyList>",
 *             },
 *             InsightVisual: { // InsightVisual
 *               VisualId: "STRING_VALUE", // required
 *               Title: "<VisualTitleLabelOptions>",
 *               Subtitle: "<VisualSubtitleLabelOptions>",
 *               InsightConfiguration: { // InsightConfiguration
 *                 Computations: [ // ComputationList
 *                   { // Computation
 *                     TopBottomRanked: { // TopBottomRankedComputation
 *                       ComputationId: "STRING_VALUE", // required
 *                       Name: "STRING_VALUE",
 *                       Category: "<DimensionField>",
 *                       Value: "<MeasureField>",
 *                       ResultSize: Number("int"),
 *                       Type: "TOP" || "BOTTOM", // required
 *                     },
 *                     TopBottomMovers: { // TopBottomMoversComputation
 *                       ComputationId: "STRING_VALUE", // required
 *                       Name: "STRING_VALUE",
 *                       Time: "<DimensionField>",
 *                       Category: "<DimensionField>",
 *                       Value: "<MeasureField>",
 *                       MoverSize: Number("int"),
 *                       SortOrder: "PERCENT_DIFFERENCE" || "ABSOLUTE_DIFFERENCE",
 *                       Type: "TOP" || "BOTTOM", // required
 *                     },
 *                     TotalAggregation: { // TotalAggregationComputation
 *                       ComputationId: "STRING_VALUE", // required
 *                       Name: "STRING_VALUE",
 *                       Value: "<MeasureField>",
 *                     },
 *                     MaximumMinimum: { // MaximumMinimumComputation
 *                       ComputationId: "STRING_VALUE", // required
 *                       Name: "STRING_VALUE",
 *                       Time: "<DimensionField>",
 *                       Value: "<MeasureField>",
 *                       Type: "MAXIMUM" || "MINIMUM", // required
 *                     },
 *                     MetricComparison: { // MetricComparisonComputation
 *                       ComputationId: "STRING_VALUE", // required
 *                       Name: "STRING_VALUE",
 *                       Time: "<DimensionField>",
 *                       FromValue: "<MeasureField>",
 *                       TargetValue: "<MeasureField>",
 *                     },
 *                     PeriodOverPeriod: { // PeriodOverPeriodComputation
 *                       ComputationId: "STRING_VALUE", // required
 *                       Name: "STRING_VALUE",
 *                       Time: "<DimensionField>",
 *                       Value: "<MeasureField>",
 *                     },
 *                     PeriodToDate: { // PeriodToDateComputation
 *                       ComputationId: "STRING_VALUE", // required
 *                       Name: "STRING_VALUE",
 *                       Time: "<DimensionField>",
 *                       Value: "<MeasureField>",
 *                       PeriodTimeGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *                     },
 *                     GrowthRate: { // GrowthRateComputation
 *                       ComputationId: "STRING_VALUE", // required
 *                       Name: "STRING_VALUE",
 *                       Time: "<DimensionField>",
 *                       Value: "<MeasureField>",
 *                       PeriodSize: Number("int"),
 *                     },
 *                     UniqueValues: { // UniqueValuesComputation
 *                       ComputationId: "STRING_VALUE", // required
 *                       Name: "STRING_VALUE",
 *                       Category: "<DimensionField>",
 *                     },
 *                     Forecast: { // ForecastComputation
 *                       ComputationId: "STRING_VALUE", // required
 *                       Name: "STRING_VALUE",
 *                       Time: "<DimensionField>",
 *                       Value: "<MeasureField>",
 *                       PeriodsForward: Number("int"),
 *                       PeriodsBackward: Number("int"),
 *                       UpperBoundary: Number("double"),
 *                       LowerBoundary: Number("double"),
 *                       PredictionInterval: Number("int"),
 *                       Seasonality: "AUTOMATIC" || "CUSTOM",
 *                       CustomSeasonalityValue: Number("int"),
 *                     },
 *                   },
 *                 ],
 *                 CustomNarrative: { // CustomNarrativeOptions
 *                   Narrative: "STRING_VALUE", // required
 *                 },
 *                 Interactions: "<VisualInteractionOptions>",
 *               },
 *               Actions: "<VisualCustomActionList>",
 *               DataSetIdentifier: "STRING_VALUE", // required
 *             },
 *             SankeyDiagramVisual: { // SankeyDiagramVisual
 *               VisualId: "STRING_VALUE", // required
 *               Title: "<VisualTitleLabelOptions>",
 *               Subtitle: "<VisualSubtitleLabelOptions>",
 *               ChartConfiguration: { // SankeyDiagramChartConfiguration
 *                 FieldWells: { // SankeyDiagramFieldWells
 *                   SankeyDiagramAggregatedFieldWells: { // SankeyDiagramAggregatedFieldWells
 *                     Source: "<DimensionFieldList>",
 *                     Destination: "<DimensionFieldList>",
 *                     Weight: "<MeasureFieldList>",
 *                   },
 *                 },
 *                 SortConfiguration: { // SankeyDiagramSortConfiguration
 *                   WeightSort: "<FieldSortOptionsList>",
 *                   SourceItemsLimit: "<ItemsLimitConfiguration>",
 *                   DestinationItemsLimit: "<ItemsLimitConfiguration>",
 *                 },
 *                 DataLabels: "<DataLabelOptions>",
 *                 Interactions: "<VisualInteractionOptions>",
 *               },
 *               Actions: "<VisualCustomActionList>",
 *             },
 *             CustomContentVisual: { // CustomContentVisual
 *               VisualId: "STRING_VALUE", // required
 *               Title: "<VisualTitleLabelOptions>",
 *               Subtitle: "<VisualSubtitleLabelOptions>",
 *               ChartConfiguration: { // CustomContentConfiguration
 *                 ContentUrl: "STRING_VALUE",
 *                 ContentType: "IMAGE" || "OTHER_EMBEDDED_CONTENT",
 *                 ImageScaling: "FIT_TO_HEIGHT" || "FIT_TO_WIDTH" || "DO_NOT_SCALE" || "SCALE_TO_VISUAL",
 *                 Interactions: "<VisualInteractionOptions>",
 *               },
 *               Actions: "<VisualCustomActionList>",
 *               DataSetIdentifier: "STRING_VALUE", // required
 *             },
 *             EmptyVisual: { // EmptyVisual
 *               VisualId: "STRING_VALUE", // required
 *               DataSetIdentifier: "STRING_VALUE", // required
 *               Actions: "<VisualCustomActionList>",
 *             },
 *             RadarChartVisual: { // RadarChartVisual
 *               VisualId: "STRING_VALUE", // required
 *               Title: "<VisualTitleLabelOptions>",
 *               Subtitle: "<VisualSubtitleLabelOptions>",
 *               ChartConfiguration: { // RadarChartConfiguration
 *                 FieldWells: { // RadarChartFieldWells
 *                   RadarChartAggregatedFieldWells: { // RadarChartAggregatedFieldWells
 *                     Category: [ // RadarChartCategoryFieldList
 *                       "<DimensionField>",
 *                     ],
 *                     Color: [ // RadarChartColorFieldList
 *                       "<DimensionField>",
 *                     ],
 *                     Values: [ // RadarChartValuesFieldList
 *                       "<MeasureField>",
 *                     ],
 *                   },
 *                 },
 *                 SortConfiguration: { // RadarChartSortConfiguration
 *                   CategorySort: "<FieldSortOptionsList>",
 *                   CategoryItemsLimit: "<ItemsLimitConfiguration>",
 *                   ColorSort: "<FieldSortOptionsList>",
 *                   ColorItemsLimit: "<ItemsLimitConfiguration>",
 *                 },
 *                 Shape: "CIRCLE" || "POLYGON",
 *                 BaseSeriesSettings: { // RadarChartSeriesSettings
 *                   AreaStyleSettings: { // RadarChartAreaStyleSettings
 *                     Visibility: "HIDDEN" || "VISIBLE",
 *                   },
 *                 },
 *                 StartAngle: Number("double"),
 *                 VisualPalette: "<VisualPalette>",
 *                 AlternateBandColorsVisibility: "HIDDEN" || "VISIBLE",
 *                 AlternateBandEvenColor: "STRING_VALUE",
 *                 AlternateBandOddColor: "STRING_VALUE",
 *                 CategoryAxis: "<AxisDisplayOptions>",
 *                 CategoryLabelOptions: "<ChartAxisLabelOptions>",
 *                 ColorAxis: "<AxisDisplayOptions>",
 *                 ColorLabelOptions: "<ChartAxisLabelOptions>",
 *                 Legend: "<LegendOptions>",
 *                 AxesRangeScale: "AUTO" || "INDEPENDENT" || "SHARED",
 *                 Interactions: "<VisualInteractionOptions>",
 *               },
 *               Actions: "<VisualCustomActionList>",
 *               ColumnHierarchies: "<ColumnHierarchyList>",
 *             },
 *           },
 *         ],
 *         TextBoxes: [ // SheetTextBoxList
 *           { // SheetTextBox
 *             SheetTextBoxId: "STRING_VALUE", // required
 *             Content: "STRING_VALUE",
 *           },
 *         ],
 *         Layouts: [ // LayoutList
 *           { // Layout
 *             Configuration: { // LayoutConfiguration
 *               GridLayout: { // GridLayoutConfiguration
 *                 Elements: [ // GridLayoutElementList // required
 *                   { // GridLayoutElement
 *                     ElementId: "STRING_VALUE", // required
 *                     ElementType: "VISUAL" || "FILTER_CONTROL" || "PARAMETER_CONTROL" || "TEXT_BOX", // required
 *                     ColumnIndex: Number("int"),
 *                     ColumnSpan: Number("int"), // required
 *                     RowIndex: Number("int"),
 *                     RowSpan: Number("int"), // required
 *                   },
 *                 ],
 *                 CanvasSizeOptions: { // GridLayoutCanvasSizeOptions
 *                   ScreenCanvasSizeOptions: { // GridLayoutScreenCanvasSizeOptions
 *                     ResizeOption: "FIXED" || "RESPONSIVE", // required
 *                     OptimizedViewPortWidth: "STRING_VALUE",
 *                   },
 *                 },
 *               },
 *               FreeFormLayout: { // FreeFormLayoutConfiguration
 *                 Elements: [ // FreeFromLayoutElementList // required
 *                   { // FreeFormLayoutElement
 *                     ElementId: "STRING_VALUE", // required
 *                     ElementType: "VISUAL" || "FILTER_CONTROL" || "PARAMETER_CONTROL" || "TEXT_BOX", // required
 *                     XAxisLocation: "STRING_VALUE", // required
 *                     YAxisLocation: "STRING_VALUE", // required
 *                     Width: "STRING_VALUE", // required
 *                     Height: "STRING_VALUE", // required
 *                     Visibility: "HIDDEN" || "VISIBLE",
 *                     RenderingRules: [ // SheetElementRenderingRuleList
 *                       { // SheetElementRenderingRule
 *                         Expression: "STRING_VALUE", // required
 *                         ConfigurationOverrides: { // SheetElementConfigurationOverrides
 *                           Visibility: "HIDDEN" || "VISIBLE",
 *                         },
 *                       },
 *                     ],
 *                     BorderStyle: { // FreeFormLayoutElementBorderStyle
 *                       Visibility: "HIDDEN" || "VISIBLE",
 *                       Color: "STRING_VALUE",
 *                     },
 *                     SelectedBorderStyle: {
 *                       Visibility: "HIDDEN" || "VISIBLE",
 *                       Color: "STRING_VALUE",
 *                     },
 *                     BackgroundStyle: { // FreeFormLayoutElementBackgroundStyle
 *                       Visibility: "HIDDEN" || "VISIBLE",
 *                       Color: "STRING_VALUE",
 *                     },
 *                     LoadingAnimation: { // LoadingAnimation
 *                       Visibility: "HIDDEN" || "VISIBLE",
 *                     },
 *                   },
 *                 ],
 *                 CanvasSizeOptions: { // FreeFormLayoutCanvasSizeOptions
 *                   ScreenCanvasSizeOptions: { // FreeFormLayoutScreenCanvasSizeOptions
 *                     OptimizedViewPortWidth: "STRING_VALUE", // required
 *                   },
 *                 },
 *               },
 *               SectionBasedLayout: { // SectionBasedLayoutConfiguration
 *                 HeaderSections: [ // HeaderFooterSectionConfigurationList // required
 *                   { // HeaderFooterSectionConfiguration
 *                     SectionId: "STRING_VALUE", // required
 *                     Layout: { // SectionLayoutConfiguration
 *                       FreeFormLayout: { // FreeFormSectionLayoutConfiguration
 *                         Elements: [ // required
 *                           {
 *                             ElementId: "STRING_VALUE", // required
 *                             ElementType: "VISUAL" || "FILTER_CONTROL" || "PARAMETER_CONTROL" || "TEXT_BOX", // required
 *                             XAxisLocation: "STRING_VALUE", // required
 *                             YAxisLocation: "STRING_VALUE", // required
 *                             Width: "STRING_VALUE", // required
 *                             Height: "STRING_VALUE", // required
 *                             Visibility: "HIDDEN" || "VISIBLE",
 *                             RenderingRules: [
 *                               {
 *                                 Expression: "STRING_VALUE", // required
 *                                 ConfigurationOverrides: {
 *                                   Visibility: "HIDDEN" || "VISIBLE",
 *                                 },
 *                               },
 *                             ],
 *                             BorderStyle: {
 *                               Visibility: "HIDDEN" || "VISIBLE",
 *                               Color: "STRING_VALUE",
 *                             },
 *                             SelectedBorderStyle: {
 *                               Visibility: "HIDDEN" || "VISIBLE",
 *                               Color: "STRING_VALUE",
 *                             },
 *                             BackgroundStyle: {
 *                               Visibility: "HIDDEN" || "VISIBLE",
 *                               Color: "STRING_VALUE",
 *                             },
 *                             LoadingAnimation: {
 *                               Visibility: "HIDDEN" || "VISIBLE",
 *                             },
 *                           },
 *                         ],
 *                       },
 *                     },
 *                     Style: { // SectionStyle
 *                       Height: "STRING_VALUE",
 *                       Padding: { // Spacing
 *                         Top: "STRING_VALUE",
 *                         Bottom: "STRING_VALUE",
 *                         Left: "STRING_VALUE",
 *                         Right: "STRING_VALUE",
 *                       },
 *                     },
 *                   },
 *                 ],
 *                 BodySections: [ // BodySectionConfigurationList // required
 *                   { // BodySectionConfiguration
 *                     SectionId: "STRING_VALUE", // required
 *                     Content: { // BodySectionContent
 *                       Layout: {
 *                         FreeFormLayout: {
 *                           Elements: "<FreeFromLayoutElementList>", // required
 *                         },
 *                       },
 *                     },
 *                     Style: {
 *                       Height: "STRING_VALUE",
 *                       Padding: {
 *                         Top: "STRING_VALUE",
 *                         Bottom: "STRING_VALUE",
 *                         Left: "STRING_VALUE",
 *                         Right: "STRING_VALUE",
 *                       },
 *                     },
 *                     PageBreakConfiguration: { // SectionPageBreakConfiguration
 *                       After: { // SectionAfterPageBreak
 *                         Status: "ENABLED" || "DISABLED",
 *                       },
 *                     },
 *                   },
 *                 ],
 *                 FooterSections: [ // required
 *                   {
 *                     SectionId: "STRING_VALUE", // required
 *                     Layout: {
 *                       FreeFormLayout: {
 *                         Elements: "<FreeFromLayoutElementList>", // required
 *                       },
 *                     },
 *                     Style: {
 *                       Height: "STRING_VALUE",
 *                       Padding: {
 *                         Top: "STRING_VALUE",
 *                         Bottom: "STRING_VALUE",
 *                         Left: "STRING_VALUE",
 *                         Right: "STRING_VALUE",
 *                       },
 *                     },
 *                   },
 *                 ],
 *                 CanvasSizeOptions: { // SectionBasedLayoutCanvasSizeOptions
 *                   PaperCanvasSizeOptions: { // SectionBasedLayoutPaperCanvasSizeOptions
 *                     PaperSize: "US_LETTER" || "US_LEGAL" || "US_TABLOID_LEDGER" || "A0" || "A1" || "A2" || "A3" || "A4" || "A5" || "JIS_B4" || "JIS_B5",
 *                     PaperOrientation: "PORTRAIT" || "LANDSCAPE",
 *                     PaperMargin: {
 *                       Top: "STRING_VALUE",
 *                       Bottom: "STRING_VALUE",
 *                       Left: "STRING_VALUE",
 *                       Right: "STRING_VALUE",
 *                     },
 *                   },
 *                 },
 *               },
 *             },
 *           },
 *         ],
 *         SheetControlLayouts: [ // SheetControlLayoutList
 *           { // SheetControlLayout
 *             Configuration: { // SheetControlLayoutConfiguration
 *               GridLayout: {
 *                 Elements: [ // required
 *                   {
 *                     ElementId: "STRING_VALUE", // required
 *                     ElementType: "VISUAL" || "FILTER_CONTROL" || "PARAMETER_CONTROL" || "TEXT_BOX", // required
 *                     ColumnIndex: Number("int"),
 *                     ColumnSpan: Number("int"), // required
 *                     RowIndex: Number("int"),
 *                     RowSpan: Number("int"), // required
 *                   },
 *                 ],
 *                 CanvasSizeOptions: {
 *                   ScreenCanvasSizeOptions: {
 *                     ResizeOption: "FIXED" || "RESPONSIVE", // required
 *                     OptimizedViewPortWidth: "STRING_VALUE",
 *                   },
 *                 },
 *               },
 *             },
 *           },
 *         ],
 *         ContentType: "PAGINATED" || "INTERACTIVE",
 *       },
 *     ],
 *     CalculatedFields: [ // CalculatedFields
 *       { // CalculatedField
 *         DataSetIdentifier: "STRING_VALUE", // required
 *         Name: "STRING_VALUE", // required
 *         Expression: "STRING_VALUE", // required
 *       },
 *     ],
 *     ParameterDeclarations: [ // ParameterDeclarationList
 *       { // ParameterDeclaration
 *         StringParameterDeclaration: { // StringParameterDeclaration
 *           ParameterValueType: "MULTI_VALUED" || "SINGLE_VALUED", // required
 *           Name: "STRING_VALUE", // required
 *           DefaultValues: { // StringDefaultValues
 *             DynamicValue: { // DynamicDefaultValue
 *               UserNameColumn: "<ColumnIdentifier>",
 *               GroupNameColumn: "<ColumnIdentifier>",
 *               DefaultValueColumn: "<ColumnIdentifier>", // required
 *             },
 *             StaticValues: "<StringDefaultValueList>",
 *           },
 *           ValueWhenUnset: { // StringValueWhenUnsetConfiguration
 *             ValueWhenUnsetOption: "RECOMMENDED_VALUE" || "NULL",
 *             CustomValue: "STRING_VALUE",
 *           },
 *           MappedDataSetParameters: [ // MappedDataSetParameters
 *             { // MappedDataSetParameter
 *               DataSetIdentifier: "STRING_VALUE", // required
 *               DataSetParameterName: "STRING_VALUE", // required
 *             },
 *           ],
 *         },
 *         DecimalParameterDeclaration: { // DecimalParameterDeclaration
 *           ParameterValueType: "MULTI_VALUED" || "SINGLE_VALUED", // required
 *           Name: "STRING_VALUE", // required
 *           DefaultValues: { // DecimalDefaultValues
 *             DynamicValue: {
 *               UserNameColumn: "<ColumnIdentifier>",
 *               GroupNameColumn: "<ColumnIdentifier>",
 *               DefaultValueColumn: "<ColumnIdentifier>", // required
 *             },
 *             StaticValues: "<DecimalDefaultValueList>",
 *           },
 *           ValueWhenUnset: { // DecimalValueWhenUnsetConfiguration
 *             ValueWhenUnsetOption: "RECOMMENDED_VALUE" || "NULL",
 *             CustomValue: Number("double"),
 *           },
 *           MappedDataSetParameters: [
 *             {
 *               DataSetIdentifier: "STRING_VALUE", // required
 *               DataSetParameterName: "STRING_VALUE", // required
 *             },
 *           ],
 *         },
 *         IntegerParameterDeclaration: { // IntegerParameterDeclaration
 *           ParameterValueType: "MULTI_VALUED" || "SINGLE_VALUED", // required
 *           Name: "STRING_VALUE", // required
 *           DefaultValues: { // IntegerDefaultValues
 *             DynamicValue: {
 *               UserNameColumn: "<ColumnIdentifier>",
 *               GroupNameColumn: "<ColumnIdentifier>",
 *               DefaultValueColumn: "<ColumnIdentifier>", // required
 *             },
 *             StaticValues: "<IntegerDefaultValueList>",
 *           },
 *           ValueWhenUnset: { // IntegerValueWhenUnsetConfiguration
 *             ValueWhenUnsetOption: "RECOMMENDED_VALUE" || "NULL",
 *             CustomValue: Number("long"),
 *           },
 *           MappedDataSetParameters: [
 *             {
 *               DataSetIdentifier: "STRING_VALUE", // required
 *               DataSetParameterName: "STRING_VALUE", // required
 *             },
 *           ],
 *         },
 *         DateTimeParameterDeclaration: { // DateTimeParameterDeclaration
 *           Name: "STRING_VALUE", // required
 *           DefaultValues: { // DateTimeDefaultValues
 *             DynamicValue: {
 *               UserNameColumn: "<ColumnIdentifier>",
 *               GroupNameColumn: "<ColumnIdentifier>",
 *               DefaultValueColumn: "<ColumnIdentifier>", // required
 *             },
 *             StaticValues: "<DateTimeDefaultValueList>",
 *             RollingDate: { // RollingDateConfiguration
 *               DataSetIdentifier: "STRING_VALUE",
 *               Expression: "STRING_VALUE", // required
 *             },
 *           },
 *           TimeGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *           ValueWhenUnset: { // DateTimeValueWhenUnsetConfiguration
 *             ValueWhenUnsetOption: "RECOMMENDED_VALUE" || "NULL",
 *             CustomValue: new Date("TIMESTAMP"),
 *           },
 *           MappedDataSetParameters: [
 *             {
 *               DataSetIdentifier: "STRING_VALUE", // required
 *               DataSetParameterName: "STRING_VALUE", // required
 *             },
 *           ],
 *         },
 *       },
 *     ],
 *     FilterGroups: [ // FilterGroupList
 *       { // FilterGroup
 *         FilterGroupId: "STRING_VALUE", // required
 *         Filters: [ // FilterList // required
 *           { // Filter
 *             CategoryFilter: { // CategoryFilter
 *               FilterId: "STRING_VALUE", // required
 *               Column: "<ColumnIdentifier>", // required
 *               Configuration: { // CategoryFilterConfiguration
 *                 FilterListConfiguration: { // FilterListConfiguration
 *                   MatchOperator: "EQUALS" || "DOES_NOT_EQUAL" || "CONTAINS" || "DOES_NOT_CONTAIN" || "STARTS_WITH" || "ENDS_WITH", // required
 *                   CategoryValues: "<CategoryValueList>",
 *                   SelectAllOptions: "FILTER_ALL_VALUES",
 *                   NullOption: "ALL_VALUES" || "NULLS_ONLY" || "NON_NULLS_ONLY",
 *                 },
 *                 CustomFilterListConfiguration: { // CustomFilterListConfiguration
 *                   MatchOperator: "EQUALS" || "DOES_NOT_EQUAL" || "CONTAINS" || "DOES_NOT_CONTAIN" || "STARTS_WITH" || "ENDS_WITH", // required
 *                   CategoryValues: "<CategoryValueList>",
 *                   SelectAllOptions: "FILTER_ALL_VALUES",
 *                   NullOption: "ALL_VALUES" || "NULLS_ONLY" || "NON_NULLS_ONLY", // required
 *                 },
 *                 CustomFilterConfiguration: { // CustomFilterConfiguration
 *                   MatchOperator: "EQUALS" || "DOES_NOT_EQUAL" || "CONTAINS" || "DOES_NOT_CONTAIN" || "STARTS_WITH" || "ENDS_WITH", // required
 *                   CategoryValue: "STRING_VALUE",
 *                   SelectAllOptions: "FILTER_ALL_VALUES",
 *                   ParameterName: "STRING_VALUE",
 *                   NullOption: "ALL_VALUES" || "NULLS_ONLY" || "NON_NULLS_ONLY", // required
 *                 },
 *               },
 *               DefaultFilterControlConfiguration: { // DefaultFilterControlConfiguration
 *                 Title: "STRING_VALUE", // required
 *                 ControlOptions: { // DefaultFilterControlOptions
 *                   DefaultDateTimePickerOptions: { // DefaultDateTimePickerControlOptions
 *                     Type: "SINGLE_VALUED" || "DATE_RANGE",
 *                     DisplayOptions: {
 *                       TitleOptions: "<LabelOptions>",
 *                       DateTimeFormat: "STRING_VALUE",
 *                       InfoIconLabelOptions: "<SheetControlInfoIconLabelOptions>",
 *                     },
 *                   },
 *                   DefaultListOptions: { // DefaultFilterListControlOptions
 *                     DisplayOptions: {
 *                       SearchOptions: {
 *                         Visibility: "HIDDEN" || "VISIBLE",
 *                       },
 *                       SelectAllOptions: {
 *                         Visibility: "HIDDEN" || "VISIBLE",
 *                       },
 *                       TitleOptions: "<LabelOptions>",
 *                       InfoIconLabelOptions: "<SheetControlInfoIconLabelOptions>",
 *                     },
 *                     Type: "MULTI_SELECT" || "SINGLE_SELECT",
 *                     SelectableValues: {
 *                       Values: [
 *                         "STRING_VALUE",
 *                       ],
 *                     },
 *                   },
 *                   DefaultDropdownOptions: { // DefaultFilterDropDownControlOptions
 *                     DisplayOptions: {
 *                       SelectAllOptions: "<ListControlSelectAllOptions>",
 *                       TitleOptions: "<LabelOptions>",
 *                       InfoIconLabelOptions: "<SheetControlInfoIconLabelOptions>",
 *                     },
 *                     Type: "MULTI_SELECT" || "SINGLE_SELECT",
 *                     SelectableValues: {
 *                       Values: "<ParameterSelectableValueList>",
 *                     },
 *                   },
 *                   DefaultTextFieldOptions: { // DefaultTextFieldControlOptions
 *                     DisplayOptions: {
 *                       TitleOptions: "<LabelOptions>",
 *                       PlaceholderOptions: {
 *                         Visibility: "HIDDEN" || "VISIBLE",
 *                       },
 *                       InfoIconLabelOptions: "<SheetControlInfoIconLabelOptions>",
 *                     },
 *                   },
 *                   DefaultTextAreaOptions: { // DefaultTextAreaControlOptions
 *                     Delimiter: "STRING_VALUE",
 *                     DisplayOptions: {
 *                       TitleOptions: "<LabelOptions>",
 *                       PlaceholderOptions: "<TextControlPlaceholderOptions>",
 *                       InfoIconLabelOptions: "<SheetControlInfoIconLabelOptions>",
 *                     },
 *                   },
 *                   DefaultSliderOptions: { // DefaultSliderControlOptions
 *                     DisplayOptions: {
 *                       TitleOptions: "<LabelOptions>",
 *                       InfoIconLabelOptions: "<SheetControlInfoIconLabelOptions>",
 *                     },
 *                     Type: "SINGLE_POINT" || "RANGE",
 *                     MaximumValue: Number("double"), // required
 *                     MinimumValue: Number("double"), // required
 *                     StepSize: Number("double"), // required
 *                   },
 *                   DefaultRelativeDateTimeOptions: { // DefaultRelativeDateTimeControlOptions
 *                     DisplayOptions: {
 *                       TitleOptions: "<LabelOptions>",
 *                       DateTimeFormat: "STRING_VALUE",
 *                       InfoIconLabelOptions: "<SheetControlInfoIconLabelOptions>",
 *                     },
 *                   },
 *                 },
 *               },
 *             },
 *             NumericRangeFilter: { // NumericRangeFilter
 *               FilterId: "STRING_VALUE", // required
 *               Column: "<ColumnIdentifier>", // required
 *               IncludeMinimum: true || false,
 *               IncludeMaximum: true || false,
 *               RangeMinimum: { // NumericRangeFilterValue
 *                 StaticValue: Number("double"),
 *                 Parameter: "STRING_VALUE",
 *               },
 *               RangeMaximum: {
 *                 StaticValue: Number("double"),
 *                 Parameter: "STRING_VALUE",
 *               },
 *               SelectAllOptions: "FILTER_ALL_VALUES",
 *               AggregationFunction: "<AggregationFunction>",
 *               NullOption: "ALL_VALUES" || "NULLS_ONLY" || "NON_NULLS_ONLY", // required
 *               DefaultFilterControlConfiguration: {
 *                 Title: "STRING_VALUE", // required
 *                 ControlOptions: {
 *                   DefaultDateTimePickerOptions: {
 *                     Type: "SINGLE_VALUED" || "DATE_RANGE",
 *                     DisplayOptions: {
 *                       TitleOptions: "<LabelOptions>",
 *                       DateTimeFormat: "STRING_VALUE",
 *                       InfoIconLabelOptions: "<SheetControlInfoIconLabelOptions>",
 *                     },
 *                   },
 *                   DefaultListOptions: {
 *                     DisplayOptions: {
 *                       SearchOptions: {
 *                         Visibility: "HIDDEN" || "VISIBLE",
 *                       },
 *                       SelectAllOptions: "<ListControlSelectAllOptions>",
 *                       TitleOptions: "<LabelOptions>",
 *                       InfoIconLabelOptions: "<SheetControlInfoIconLabelOptions>",
 *                     },
 *                     Type: "MULTI_SELECT" || "SINGLE_SELECT",
 *                     SelectableValues: {
 *                       Values: "<ParameterSelectableValueList>",
 *                     },
 *                   },
 *                   DefaultDropdownOptions: {
 *                     DisplayOptions: {
 *                       SelectAllOptions: "<ListControlSelectAllOptions>",
 *                       TitleOptions: "<LabelOptions>",
 *                       InfoIconLabelOptions: "<SheetControlInfoIconLabelOptions>",
 *                     },
 *                     Type: "MULTI_SELECT" || "SINGLE_SELECT",
 *                     SelectableValues: "<FilterSelectableValues>",
 *                   },
 *                   DefaultTextFieldOptions: {
 *                     DisplayOptions: {
 *                       TitleOptions: "<LabelOptions>",
 *                       PlaceholderOptions: "<TextControlPlaceholderOptions>",
 *                       InfoIconLabelOptions: "<SheetControlInfoIconLabelOptions>",
 *                     },
 *                   },
 *                   DefaultTextAreaOptions: {
 *                     Delimiter: "STRING_VALUE",
 *                     DisplayOptions: {
 *                       TitleOptions: "<LabelOptions>",
 *                       PlaceholderOptions: "<TextControlPlaceholderOptions>",
 *                       InfoIconLabelOptions: "<SheetControlInfoIconLabelOptions>",
 *                     },
 *                   },
 *                   DefaultSliderOptions: {
 *                     DisplayOptions: {
 *                       TitleOptions: "<LabelOptions>",
 *                       InfoIconLabelOptions: "<SheetControlInfoIconLabelOptions>",
 *                     },
 *                     Type: "SINGLE_POINT" || "RANGE",
 *                     MaximumValue: Number("double"), // required
 *                     MinimumValue: Number("double"), // required
 *                     StepSize: Number("double"), // required
 *                   },
 *                   DefaultRelativeDateTimeOptions: {
 *                     DisplayOptions: {
 *                       TitleOptions: "<LabelOptions>",
 *                       DateTimeFormat: "STRING_VALUE",
 *                       InfoIconLabelOptions: "<SheetControlInfoIconLabelOptions>",
 *                     },
 *                   },
 *                 },
 *               },
 *             },
 *             NumericEqualityFilter: { // NumericEqualityFilter
 *               FilterId: "STRING_VALUE", // required
 *               Column: "<ColumnIdentifier>", // required
 *               Value: Number("double"),
 *               SelectAllOptions: "FILTER_ALL_VALUES",
 *               MatchOperator: "EQUALS" || "DOES_NOT_EQUAL", // required
 *               AggregationFunction: "<AggregationFunction>",
 *               ParameterName: "STRING_VALUE",
 *               NullOption: "ALL_VALUES" || "NULLS_ONLY" || "NON_NULLS_ONLY", // required
 *               DefaultFilterControlConfiguration: {
 *                 Title: "STRING_VALUE", // required
 *                 ControlOptions: {
 *                   DefaultDateTimePickerOptions: {
 *                     Type: "SINGLE_VALUED" || "DATE_RANGE",
 *                     DisplayOptions: {
 *                       TitleOptions: "<LabelOptions>",
 *                       DateTimeFormat: "STRING_VALUE",
 *                       InfoIconLabelOptions: "<SheetControlInfoIconLabelOptions>",
 *                     },
 *                   },
 *                   DefaultListOptions: {
 *                     DisplayOptions: {
 *                       SearchOptions: {
 *                         Visibility: "HIDDEN" || "VISIBLE",
 *                       },
 *                       SelectAllOptions: "<ListControlSelectAllOptions>",
 *                       TitleOptions: "<LabelOptions>",
 *                       InfoIconLabelOptions: "<SheetControlInfoIconLabelOptions>",
 *                     },
 *                     Type: "MULTI_SELECT" || "SINGLE_SELECT",
 *                     SelectableValues: "<FilterSelectableValues>",
 *                   },
 *                   DefaultDropdownOptions: {
 *                     DisplayOptions: {
 *                       SelectAllOptions: "<ListControlSelectAllOptions>",
 *                       TitleOptions: "<LabelOptions>",
 *                       InfoIconLabelOptions: "<SheetControlInfoIconLabelOptions>",
 *                     },
 *                     Type: "MULTI_SELECT" || "SINGLE_SELECT",
 *                     SelectableValues: "<FilterSelectableValues>",
 *                   },
 *                   DefaultTextFieldOptions: {
 *                     DisplayOptions: {
 *                       TitleOptions: "<LabelOptions>",
 *                       PlaceholderOptions: "<TextControlPlaceholderOptions>",
 *                       InfoIconLabelOptions: "<SheetControlInfoIconLabelOptions>",
 *                     },
 *                   },
 *                   DefaultTextAreaOptions: {
 *                     Delimiter: "STRING_VALUE",
 *                     DisplayOptions: {
 *                       TitleOptions: "<LabelOptions>",
 *                       PlaceholderOptions: "<TextControlPlaceholderOptions>",
 *                       InfoIconLabelOptions: "<SheetControlInfoIconLabelOptions>",
 *                     },
 *                   },
 *                   DefaultSliderOptions: {
 *                     DisplayOptions: {
 *                       TitleOptions: "<LabelOptions>",
 *                       InfoIconLabelOptions: "<SheetControlInfoIconLabelOptions>",
 *                     },
 *                     Type: "SINGLE_POINT" || "RANGE",
 *                     MaximumValue: Number("double"), // required
 *                     MinimumValue: Number("double"), // required
 *                     StepSize: Number("double"), // required
 *                   },
 *                   DefaultRelativeDateTimeOptions: {
 *                     DisplayOptions: {
 *                       TitleOptions: "<LabelOptions>",
 *                       DateTimeFormat: "STRING_VALUE",
 *                       InfoIconLabelOptions: "<SheetControlInfoIconLabelOptions>",
 *                     },
 *                   },
 *                 },
 *               },
 *             },
 *             TimeEqualityFilter: { // TimeEqualityFilter
 *               FilterId: "STRING_VALUE", // required
 *               Column: "<ColumnIdentifier>", // required
 *               Value: new Date("TIMESTAMP"),
 *               ParameterName: "STRING_VALUE",
 *               TimeGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *               RollingDate: {
 *                 DataSetIdentifier: "STRING_VALUE",
 *                 Expression: "STRING_VALUE", // required
 *               },
 *               DefaultFilterControlConfiguration: {
 *                 Title: "STRING_VALUE", // required
 *                 ControlOptions: {
 *                   DefaultDateTimePickerOptions: {
 *                     Type: "SINGLE_VALUED" || "DATE_RANGE",
 *                     DisplayOptions: "<DateTimePickerControlDisplayOptions>",
 *                   },
 *                   DefaultListOptions: {
 *                     DisplayOptions: "<ListControlDisplayOptions>",
 *                     Type: "MULTI_SELECT" || "SINGLE_SELECT",
 *                     SelectableValues: "<FilterSelectableValues>",
 *                   },
 *                   DefaultDropdownOptions: {
 *                     DisplayOptions: "<DropDownControlDisplayOptions>",
 *                     Type: "MULTI_SELECT" || "SINGLE_SELECT",
 *                     SelectableValues: "<FilterSelectableValues>",
 *                   },
 *                   DefaultTextFieldOptions: {
 *                     DisplayOptions: "<TextFieldControlDisplayOptions>",
 *                   },
 *                   DefaultTextAreaOptions: {
 *                     Delimiter: "STRING_VALUE",
 *                     DisplayOptions: "<TextAreaControlDisplayOptions>",
 *                   },
 *                   DefaultSliderOptions: {
 *                     DisplayOptions: "<SliderControlDisplayOptions>",
 *                     Type: "SINGLE_POINT" || "RANGE",
 *                     MaximumValue: Number("double"), // required
 *                     MinimumValue: Number("double"), // required
 *                     StepSize: Number("double"), // required
 *                   },
 *                   DefaultRelativeDateTimeOptions: {
 *                     DisplayOptions: {
 *                       TitleOptions: "<LabelOptions>",
 *                       DateTimeFormat: "STRING_VALUE",
 *                       InfoIconLabelOptions: "<SheetControlInfoIconLabelOptions>",
 *                     },
 *                   },
 *                 },
 *               },
 *             },
 *             TimeRangeFilter: { // TimeRangeFilter
 *               FilterId: "STRING_VALUE", // required
 *               Column: "<ColumnIdentifier>", // required
 *               IncludeMinimum: true || false,
 *               IncludeMaximum: true || false,
 *               RangeMinimumValue: { // TimeRangeFilterValue
 *                 StaticValue: new Date("TIMESTAMP"),
 *                 RollingDate: "<RollingDateConfiguration>",
 *                 Parameter: "STRING_VALUE",
 *               },
 *               RangeMaximumValue: {
 *                 StaticValue: new Date("TIMESTAMP"),
 *                 RollingDate: "<RollingDateConfiguration>",
 *                 Parameter: "STRING_VALUE",
 *               },
 *               NullOption: "ALL_VALUES" || "NULLS_ONLY" || "NON_NULLS_ONLY", // required
 *               ExcludePeriodConfiguration: { // ExcludePeriodConfiguration
 *                 Amount: Number("int"), // required
 *                 Granularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND", // required
 *                 Status: "ENABLED" || "DISABLED",
 *               },
 *               TimeGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *               DefaultFilterControlConfiguration: {
 *                 Title: "STRING_VALUE", // required
 *                 ControlOptions: {
 *                   DefaultDateTimePickerOptions: {
 *                     Type: "SINGLE_VALUED" || "DATE_RANGE",
 *                     DisplayOptions: "<DateTimePickerControlDisplayOptions>",
 *                   },
 *                   DefaultListOptions: {
 *                     DisplayOptions: "<ListControlDisplayOptions>",
 *                     Type: "MULTI_SELECT" || "SINGLE_SELECT",
 *                     SelectableValues: "<FilterSelectableValues>",
 *                   },
 *                   DefaultDropdownOptions: {
 *                     DisplayOptions: "<DropDownControlDisplayOptions>",
 *                     Type: "MULTI_SELECT" || "SINGLE_SELECT",
 *                     SelectableValues: "<FilterSelectableValues>",
 *                   },
 *                   DefaultTextFieldOptions: {
 *                     DisplayOptions: "<TextFieldControlDisplayOptions>",
 *                   },
 *                   DefaultTextAreaOptions: {
 *                     Delimiter: "STRING_VALUE",
 *                     DisplayOptions: "<TextAreaControlDisplayOptions>",
 *                   },
 *                   DefaultSliderOptions: {
 *                     DisplayOptions: "<SliderControlDisplayOptions>",
 *                     Type: "SINGLE_POINT" || "RANGE",
 *                     MaximumValue: Number("double"), // required
 *                     MinimumValue: Number("double"), // required
 *                     StepSize: Number("double"), // required
 *                   },
 *                   DefaultRelativeDateTimeOptions: {
 *                     DisplayOptions: "<RelativeDateTimeControlDisplayOptions>",
 *                   },
 *                 },
 *               },
 *             },
 *             RelativeDatesFilter: { // RelativeDatesFilter
 *               FilterId: "STRING_VALUE", // required
 *               Column: "<ColumnIdentifier>", // required
 *               AnchorDateConfiguration: { // AnchorDateConfiguration
 *                 AnchorOption: "NOW",
 *                 ParameterName: "STRING_VALUE",
 *               },
 *               MinimumGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *               TimeGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND", // required
 *               RelativeDateType: "PREVIOUS" || "THIS" || "LAST" || "NOW" || "NEXT", // required
 *               RelativeDateValue: Number("int"),
 *               ParameterName: "STRING_VALUE",
 *               NullOption: "ALL_VALUES" || "NULLS_ONLY" || "NON_NULLS_ONLY", // required
 *               ExcludePeriodConfiguration: {
 *                 Amount: Number("int"), // required
 *                 Granularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND", // required
 *                 Status: "ENABLED" || "DISABLED",
 *               },
 *               DefaultFilterControlConfiguration: "<DefaultFilterControlConfiguration>",
 *             },
 *             TopBottomFilter: { // TopBottomFilter
 *               FilterId: "STRING_VALUE", // required
 *               Column: "<ColumnIdentifier>", // required
 *               Limit: Number("int"),
 *               AggregationSortConfigurations: [ // AggregationSortConfigurationList // required
 *                 { // AggregationSortConfiguration
 *                   Column: "<ColumnIdentifier>", // required
 *                   SortDirection: "ASC" || "DESC", // required
 *                   AggregationFunction: "<AggregationFunction>",
 *                 },
 *               ],
 *               TimeGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *               ParameterName: "STRING_VALUE",
 *               DefaultFilterControlConfiguration: "<DefaultFilterControlConfiguration>",
 *             },
 *           },
 *         ],
 *         ScopeConfiguration: { // FilterScopeConfiguration
 *           SelectedSheets: { // SelectedSheetsFilterScopeConfiguration
 *             SheetVisualScopingConfigurations: [ // SheetVisualScopingConfigurations
 *               { // SheetVisualScopingConfiguration
 *                 SheetId: "STRING_VALUE", // required
 *                 Scope: "ALL_VISUALS" || "SELECTED_VISUALS", // required
 *                 VisualIds: [ // FilteredVisualsList
 *                   "STRING_VALUE",
 *                 ],
 *               },
 *             ],
 *           },
 *           AllSheets: {},
 *         },
 *         Status: "ENABLED" || "DISABLED",
 *         CrossDataset: "ALL_DATASETS" || "SINGLE_DATASET", // required
 *       },
 *     ],
 *     ColumnConfigurations: [ // ColumnConfigurationList
 *       { // ColumnConfiguration
 *         Column: "<ColumnIdentifier>", // required
 *         FormatConfiguration: {
 *           StringFormatConfiguration: "<StringFormatConfiguration>",
 *           NumberFormatConfiguration: "<NumberFormatConfiguration>",
 *           DateTimeFormatConfiguration: "<DateTimeFormatConfiguration>",
 *         },
 *         Role: "DIMENSION" || "MEASURE",
 *         ColorsConfiguration: { // ColorsConfiguration
 *           CustomColors: [ // CustomColorsList
 *             { // CustomColor
 *               FieldValue: "STRING_VALUE",
 *               Color: "STRING_VALUE", // required
 *               SpecialValue: "EMPTY" || "NULL" || "OTHER",
 *             },
 *           ],
 *         },
 *       },
 *     ],
 *     AnalysisDefaults: { // AnalysisDefaults
 *       DefaultNewSheetConfiguration: { // DefaultNewSheetConfiguration
 *         InteractiveLayoutConfiguration: { // DefaultInteractiveLayoutConfiguration
 *           Grid: { // DefaultGridLayoutConfiguration
 *             CanvasSizeOptions: {
 *               ScreenCanvasSizeOptions: {
 *                 ResizeOption: "FIXED" || "RESPONSIVE", // required
 *                 OptimizedViewPortWidth: "STRING_VALUE",
 *               },
 *             },
 *           },
 *           FreeForm: { // DefaultFreeFormLayoutConfiguration
 *             CanvasSizeOptions: {
 *               ScreenCanvasSizeOptions: {
 *                 OptimizedViewPortWidth: "STRING_VALUE", // required
 *               },
 *             },
 *           },
 *         },
 *         PaginatedLayoutConfiguration: { // DefaultPaginatedLayoutConfiguration
 *           SectionBased: { // DefaultSectionBasedLayoutConfiguration
 *             CanvasSizeOptions: {
 *               PaperCanvasSizeOptions: {
 *                 PaperSize: "US_LETTER" || "US_LEGAL" || "US_TABLOID_LEDGER" || "A0" || "A1" || "A2" || "A3" || "A4" || "A5" || "JIS_B4" || "JIS_B5",
 *                 PaperOrientation: "PORTRAIT" || "LANDSCAPE",
 *                 PaperMargin: "<Spacing>",
 *               },
 *             },
 *           },
 *         },
 *         SheetContentType: "PAGINATED" || "INTERACTIVE",
 *       },
 *     },
 *     Options: { // AssetOptions
 *       Timezone: "STRING_VALUE",
 *       WeekStart: "SUNDAY" || "MONDAY" || "TUESDAY" || "WEDNESDAY" || "THURSDAY" || "FRIDAY" || "SATURDAY",
 *     },
 *   },
 *   ValidationStrategy: { // ValidationStrategy
 *     Mode: "STRICT" || "LENIENT", // required
 *   },
 * };
 * const command = new UpdateDashboardCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDashboardResponse
 * //   Arn: "STRING_VALUE",
 * //   VersionArn: "STRING_VALUE",
 * //   DashboardId: "STRING_VALUE",
 * //   CreationStatus: "CREATION_IN_PROGRESS" || "CREATION_SUCCESSFUL" || "CREATION_FAILED" || "UPDATE_IN_PROGRESS" || "UPDATE_SUCCESSFUL" || "UPDATE_FAILED" || "DELETED",
 * //   Status: Number("int"),
 * //   RequestId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateDashboardCommandInput - {@link UpdateDashboardCommandInput}
 * @returns {@link UpdateDashboardCommandOutput}
 * @see {@link UpdateDashboardCommandInput} for command's `input` shape.
 * @see {@link UpdateDashboardCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
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
 *  <p>This error indicates that you are calling an operation on an Amazon QuickSight
 * 			subscription where the edition doesn't include support for that operation. Amazon
 * 			Amazon QuickSight currently has Standard Edition and Enterprise Edition. Not every operation and
 * 			capability is available in every edition.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 * @public
 */
export class UpdateDashboardCommand extends $Command
  .classBuilder<
    UpdateDashboardCommandInput,
    UpdateDashboardCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("QuickSight_20180401", "UpdateDashboard", {})
  .n("QuickSightClient", "UpdateDashboardCommand")
  .f(UpdateDashboardRequestFilterSensitiveLog, void 0)
  .ser(se_UpdateDashboardCommand)
  .de(de_UpdateDashboardCommand)
  .build() {}
