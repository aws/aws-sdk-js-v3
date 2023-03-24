// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  UpdateTemplateRequest,
  UpdateTemplateRequestFilterSensitiveLog,
  UpdateTemplateResponse,
} from "../models/models_3";
import {
  deserializeAws_restJson1UpdateTemplateCommand,
  serializeAws_restJson1UpdateTemplateCommand,
} from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 *
 * The input for {@link UpdateTemplateCommand}.
 */
export interface UpdateTemplateCommandInput extends UpdateTemplateRequest {}
/**
 * @public
 *
 * The output of {@link UpdateTemplateCommand}.
 */
export interface UpdateTemplateCommandOutput extends UpdateTemplateResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates a template from an existing Amazon QuickSight analysis or another template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateTemplateCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateTemplateCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const input = {
 *   AwsAccountId: "STRING_VALUE", // required
 *   TemplateId: "STRING_VALUE", // required
 *   SourceEntity: {
 *     SourceAnalysis: {
 *       Arn: "STRING_VALUE", // required
 *       DataSetReferences: [ // required
 *         {
 *           DataSetPlaceholder: "STRING_VALUE", // required
 *           DataSetArn: "STRING_VALUE", // required
 *         },
 *       ],
 *     },
 *     SourceTemplate: {
 *       Arn: "STRING_VALUE", // required
 *     },
 *   },
 *   VersionDescription: "STRING_VALUE",
 *   Name: "STRING_VALUE",
 *   Definition: {
 *     DataSetConfigurations: [ // required
 *       {
 *         Placeholder: "STRING_VALUE",
 *         DataSetSchema: {
 *           ColumnSchemaList: [
 *             {
 *               Name: "STRING_VALUE",
 *               DataType: "STRING_VALUE",
 *               GeographicRole: "STRING_VALUE",
 *             },
 *           ],
 *         },
 *         ColumnGroupSchemaList: [
 *           {
 *             Name: "STRING_VALUE",
 *             ColumnGroupColumnSchemaList: [
 *               {
 *                 Name: "STRING_VALUE",
 *               },
 *             ],
 *           },
 *         ],
 *       },
 *     ],
 *     Sheets: [
 *       {
 *         SheetId: "STRING_VALUE", // required
 *         Title: "STRING_VALUE",
 *         Description: "STRING_VALUE",
 *         Name: "STRING_VALUE",
 *         ParameterControls: [
 *           {
 *             DateTimePicker: {
 *               ParameterControlId: "STRING_VALUE", // required
 *               Title: "STRING_VALUE", // required
 *               SourceParameterName: "STRING_VALUE", // required
 *               DisplayOptions: {
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
 *                 DateTimeFormat: "STRING_VALUE",
 *               },
 *             },
 *             List: {
 *               ParameterControlId: "STRING_VALUE", // required
 *               Title: "STRING_VALUE", // required
 *               SourceParameterName: "STRING_VALUE", // required
 *               DisplayOptions: {
 *                 SearchOptions: {
 *                   Visibility: "HIDDEN" || "VISIBLE",
 *                 },
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
 *             Dropdown: {
 *               ParameterControlId: "STRING_VALUE", // required
 *               Title: "STRING_VALUE", // required
 *               SourceParameterName: "STRING_VALUE", // required
 *               DisplayOptions: {
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
 *             TextField: {
 *               ParameterControlId: "STRING_VALUE", // required
 *               Title: "STRING_VALUE", // required
 *               SourceParameterName: "STRING_VALUE", // required
 *               DisplayOptions: {
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
 *               },
 *             },
 *             TextArea: {
 *               ParameterControlId: "STRING_VALUE", // required
 *               Title: "STRING_VALUE", // required
 *               SourceParameterName: "STRING_VALUE", // required
 *               Delimiter: "STRING_VALUE",
 *               DisplayOptions: {
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
 *               },
 *             },
 *             Slider: {
 *               ParameterControlId: "STRING_VALUE", // required
 *               Title: "STRING_VALUE", // required
 *               SourceParameterName: "STRING_VALUE", // required
 *               DisplayOptions: {
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
 *               },
 *               MaximumValue: Number("double"), // required
 *               MinimumValue: Number("double"), // required
 *               StepSize: Number("double"), // required
 *             },
 *           },
 *         ],
 *         FilterControls: [
 *           {
 *             DateTimePicker: {
 *               FilterControlId: "STRING_VALUE", // required
 *               Title: "STRING_VALUE", // required
 *               SourceFilterId: "STRING_VALUE", // required
 *               DisplayOptions: {
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
 *                 DateTimeFormat: "STRING_VALUE",
 *               },
 *               Type: "SINGLE_VALUED" || "DATE_RANGE",
 *             },
 *             List: {
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
 *                     ColumnToMatch: {
 *                       DataSetIdentifier: "STRING_VALUE", // required
 *                       ColumnName: "STRING_VALUE", // required
 *                     },
 *                   },
 *                 ],
 *               },
 *             },
 *             Dropdown: {
 *               FilterControlId: "STRING_VALUE", // required
 *               Title: "STRING_VALUE", // required
 *               SourceFilterId: "STRING_VALUE", // required
 *               DisplayOptions: {
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
 *                     ColumnToMatch: {
 *                       DataSetIdentifier: "STRING_VALUE", // required
 *                       ColumnName: "STRING_VALUE", // required
 *                     },
 *                   },
 *                 ],
 *               },
 *             },
 *             TextField: {
 *               FilterControlId: "STRING_VALUE", // required
 *               Title: "STRING_VALUE", // required
 *               SourceFilterId: "STRING_VALUE", // required
 *               DisplayOptions: {
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
 *               },
 *             },
 *             TextArea: {
 *               FilterControlId: "STRING_VALUE", // required
 *               Title: "STRING_VALUE", // required
 *               SourceFilterId: "STRING_VALUE", // required
 *               Delimiter: "STRING_VALUE",
 *               DisplayOptions: {
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
 *               },
 *             },
 *             Slider: {
 *               FilterControlId: "STRING_VALUE", // required
 *               Title: "STRING_VALUE", // required
 *               SourceFilterId: "STRING_VALUE", // required
 *               DisplayOptions: {
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
 *               },
 *               Type: "SINGLE_POINT" || "RANGE",
 *               MaximumValue: Number("double"), // required
 *               MinimumValue: Number("double"), // required
 *               StepSize: Number("double"), // required
 *             },
 *             RelativeDateTime: {
 *               FilterControlId: "STRING_VALUE", // required
 *               Title: "STRING_VALUE", // required
 *               SourceFilterId: "STRING_VALUE", // required
 *               DisplayOptions: {
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
 *                 DateTimeFormat: "STRING_VALUE",
 *               },
 *             },
 *           },
 *         ],
 *         Visuals: [
 *           {
 *             TableVisual: {
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
 *               ChartConfiguration: {
 *                 FieldWells: {
 *                   TableAggregatedFieldWells: {
 *                     GroupBy: [
 *                       {
 *                         NumericalDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             FormatConfiguration: {
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
 *                                 NullValueFormatConfiguration: {
 *                                   NullString: "STRING_VALUE", // required
 *                                 },
 *                               },
 *                               PercentageDisplayFormatConfiguration: {
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
 *                         CategoricalDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
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
 *                                 NullValueFormatConfiguration: {
 *                                   NullString: "STRING_VALUE", // required
 *                                 },
 *                               },
 *                               PercentageDisplayFormatConfiguration: {
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
 *                         DateDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           DateGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             DateTimeFormat: "STRING_VALUE",
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
 *                                 NullValueFormatConfiguration: {
 *                                   NullString: "STRING_VALUE", // required
 *                                 },
 *                               },
 *                               PercentageDisplayFormatConfiguration: {
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
 *                       },
 *                     ],
 *                     Values: [
 *                       {
 *                         NumericalMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: {
 *                             SimpleNumericalAggregation: "SUM" || "AVERAGE" || "MIN" || "MAX" || "COUNT" || "DISTINCT_COUNT" || "VAR" || "VARP" || "STDEV" || "STDEVP" || "MEDIAN",
 *                             PercentileAggregation: {
 *                               PercentileValue: Number("double"),
 *                             },
 *                           },
 *                           FormatConfiguration: {
 *                             FormatConfiguration: {
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
 *                                 NullValueFormatConfiguration: {
 *                                   NullString: "STRING_VALUE", // required
 *                                 },
 *                               },
 *                               PercentageDisplayFormatConfiguration: {
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
 *                         CategoricalMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: "COUNT" || "DISTINCT_COUNT",
 *                           FormatConfiguration: {
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
 *                                 NullValueFormatConfiguration: {
 *                                   NullString: "STRING_VALUE", // required
 *                                 },
 *                               },
 *                               PercentageDisplayFormatConfiguration: {
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
 *                         DateMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX",
 *                           FormatConfiguration: {
 *                             DateTimeFormat: "STRING_VALUE",
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
 *                                 NullValueFormatConfiguration: {
 *                                   NullString: "STRING_VALUE", // required
 *                                 },
 *                               },
 *                               PercentageDisplayFormatConfiguration: {
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
 *                         CalculatedMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Expression: "STRING_VALUE", // required
 *                         },
 *                       },
 *                     ],
 *                   },
 *                   TableUnaggregatedFieldWells: {
 *                     Values: [
 *                       {
 *                         FieldId: "STRING_VALUE", // required
 *                         Column: {
 *                           DataSetIdentifier: "<ColumnIdentifier>",
 *                           ColumnName: "<ColumnIdentifier>",
 *                         },
 *                         FormatConfiguration: {
 *                           StringFormatConfiguration: {
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
 *                                 NullValueFormatConfiguration: {
 *                                   NullString: "STRING_VALUE", // required
 *                                 },
 *                               },
 *                               PercentageDisplayFormatConfiguration: {
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
 *                           NumberFormatConfiguration: {
 *                             FormatConfiguration: {
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
 *                                 NullValueFormatConfiguration: {
 *                                   NullString: "STRING_VALUE", // required
 *                                 },
 *                               },
 *                               PercentageDisplayFormatConfiguration: {
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
 *                           DateTimeFormatConfiguration: {
 *                             DateTimeFormat: "STRING_VALUE",
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
 *                                 NullValueFormatConfiguration: {
 *                                   NullString: "STRING_VALUE", // required
 *                                 },
 *                               },
 *                               PercentageDisplayFormatConfiguration: {
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
 *                       },
 *                     ],
 *                   },
 *                 },
 *                 SortConfiguration: {
 *                   RowSort: [
 *                     {
 *                       FieldSort: {
 *                         FieldId: "STRING_VALUE", // required
 *                         Direction: "ASC" || "DESC", // required
 *                       },
 *                       ColumnSort: {
 *                         SortBy: {
 *                           DataSetIdentifier: "<ColumnIdentifier>",
 *                           ColumnName: "<ColumnIdentifier>",
 *                         },
 *                         Direction: "ASC" || "DESC", // required
 *                         AggregationFunction: {
 *                           NumericalAggregationFunction: {
 *                             SimpleNumericalAggregation: "SUM" || "AVERAGE" || "MIN" || "MAX" || "COUNT" || "DISTINCT_COUNT" || "VAR" || "VARP" || "STDEV" || "STDEVP" || "MEDIAN",
 *                             PercentileAggregation: {
 *                               PercentileValue: Number("double"),
 *                             },
 *                           },
 *                           CategoricalAggregationFunction: "COUNT" || "DISTINCT_COUNT",
 *                           DateAggregationFunction: "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX",
 *                         },
 *                       },
 *                     },
 *                   ],
 *                   PaginationConfiguration: {
 *                     PageSize: Number("long"), // required
 *                     PageNumber: Number("long"), // required
 *                   },
 *                 },
 *                 TableOptions: {
 *                   Orientation: "VERTICAL" || "HORIZONTAL",
 *                   HeaderStyle: {
 *                     Visibility: "HIDDEN" || "VISIBLE",
 *                     FontConfiguration: {
 *                       FontSize: {
 *                         Relative: "EXTRA_SMALL" || "SMALL" || "MEDIUM" || "LARGE" || "EXTRA_LARGE",
 *                       },
 *                       FontDecoration: "UNDERLINE" || "NONE",
 *                       FontColor: "STRING_VALUE",
 *                       FontWeight: {
 *                         Name: "NORMAL" || "BOLD",
 *                       },
 *                       FontStyle: "NORMAL" || "ITALIC",
 *                     },
 *                     TextWrap: "NONE" || "WRAP",
 *                     HorizontalTextAlignment: "LEFT" || "CENTER" || "RIGHT" || "AUTO",
 *                     VerticalTextAlignment: "TOP" || "MIDDLE" || "BOTTOM",
 *                     BackgroundColor: "STRING_VALUE",
 *                     Height: Number("int"),
 *                     Border: {
 *                       UniformBorder: {
 *                         Color: "STRING_VALUE",
 *                         Thickness: Number("int"),
 *                         Style: "NONE" || "SOLID",
 *                       },
 *                       SideSpecificBorder: {
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
 *                         Top: {
 *                           Color: "STRING_VALUE",
 *                           Thickness: Number("int"),
 *                           Style: "NONE" || "SOLID",
 *                         },
 *                         Bottom: {
 *                           Color: "STRING_VALUE",
 *                           Thickness: Number("int"),
 *                           Style: "NONE" || "SOLID",
 *                         },
 *                       },
 *                     },
 *                   },
 *                   CellStyle: {
 *                     Visibility: "HIDDEN" || "VISIBLE",
 *                     FontConfiguration: {
 *                       FontSize: {
 *                         Relative: "EXTRA_SMALL" || "SMALL" || "MEDIUM" || "LARGE" || "EXTRA_LARGE",
 *                       },
 *                       FontDecoration: "UNDERLINE" || "NONE",
 *                       FontColor: "STRING_VALUE",
 *                       FontWeight: {
 *                         Name: "NORMAL" || "BOLD",
 *                       },
 *                       FontStyle: "NORMAL" || "ITALIC",
 *                     },
 *                     TextWrap: "NONE" || "WRAP",
 *                     HorizontalTextAlignment: "LEFT" || "CENTER" || "RIGHT" || "AUTO",
 *                     VerticalTextAlignment: "TOP" || "MIDDLE" || "BOTTOM",
 *                     BackgroundColor: "STRING_VALUE",
 *                     Height: Number("int"),
 *                     Border: {
 *                       UniformBorder: {
 *                         Color: "STRING_VALUE",
 *                         Thickness: Number("int"),
 *                         Style: "NONE" || "SOLID",
 *                       },
 *                       SideSpecificBorder: {
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
 *                         Top: {
 *                           Color: "STRING_VALUE",
 *                           Thickness: Number("int"),
 *                           Style: "NONE" || "SOLID",
 *                         },
 *                         Bottom: {
 *                           Color: "STRING_VALUE",
 *                           Thickness: Number("int"),
 *                           Style: "NONE" || "SOLID",
 *                         },
 *                       },
 *                     },
 *                   },
 *                   RowAlternateColorOptions: {
 *                     Status: "ENABLED" || "DISABLED",
 *                     RowAlternateColors: [
 *                       "STRING_VALUE",
 *                     ],
 *                   },
 *                 },
 *                 TotalOptions: {
 *                   TotalsVisibility: "HIDDEN" || "VISIBLE",
 *                   Placement: "START" || "END",
 *                   ScrollStatus: "PINNED" || "SCROLLED",
 *                   CustomLabel: "STRING_VALUE",
 *                   TotalCellStyle: {
 *                     Visibility: "HIDDEN" || "VISIBLE",
 *                     FontConfiguration: {
 *                       FontSize: {
 *                         Relative: "EXTRA_SMALL" || "SMALL" || "MEDIUM" || "LARGE" || "EXTRA_LARGE",
 *                       },
 *                       FontDecoration: "UNDERLINE" || "NONE",
 *                       FontColor: "STRING_VALUE",
 *                       FontWeight: {
 *                         Name: "NORMAL" || "BOLD",
 *                       },
 *                       FontStyle: "NORMAL" || "ITALIC",
 *                     },
 *                     TextWrap: "NONE" || "WRAP",
 *                     HorizontalTextAlignment: "LEFT" || "CENTER" || "RIGHT" || "AUTO",
 *                     VerticalTextAlignment: "TOP" || "MIDDLE" || "BOTTOM",
 *                     BackgroundColor: "STRING_VALUE",
 *                     Height: Number("int"),
 *                     Border: {
 *                       UniformBorder: {
 *                         Color: "STRING_VALUE",
 *                         Thickness: Number("int"),
 *                         Style: "NONE" || "SOLID",
 *                       },
 *                       SideSpecificBorder: {
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
 *                         Top: {
 *                           Color: "STRING_VALUE",
 *                           Thickness: Number("int"),
 *                           Style: "NONE" || "SOLID",
 *                         },
 *                         Bottom: {
 *                           Color: "STRING_VALUE",
 *                           Thickness: Number("int"),
 *                           Style: "NONE" || "SOLID",
 *                         },
 *                       },
 *                     },
 *                   },
 *                 },
 *                 FieldOptions: {
 *                   SelectedFieldOptions: [
 *                     {
 *                       FieldId: "STRING_VALUE", // required
 *                       Width: "STRING_VALUE",
 *                       CustomLabel: "STRING_VALUE",
 *                       Visibility: "HIDDEN" || "VISIBLE",
 *                       URLStyling: {
 *                         LinkConfiguration: {
 *                           Target: "NEW_TAB" || "NEW_WINDOW" || "SAME_TAB", // required
 *                           Content: {
 *                             CustomTextContent: {
 *                               Value: "STRING_VALUE",
 *                               FontConfiguration: {
 *                                 FontSize: "<FontConfiguration>",
 *                                 FontDecoration: "<FontConfiguration>",
 *                                 FontColor: "<FontConfiguration>",
 *                                 FontWeight: "<FontConfiguration>",
 *                                 FontStyle: "<FontConfiguration>",
 *                               },
 *                             },
 *                             CustomIconContent: {
 *                               Icon: "LINK",
 *                             },
 *                           },
 *                         },
 *                         ImageConfiguration: {
 *                           SizingOptions: {
 *                             TableCellImageScalingConfiguration: "FIT_TO_CELL_HEIGHT" || "FIT_TO_CELL_WIDTH" || "DO_NOT_SCALE",
 *                           },
 *                         },
 *                       },
 *                     },
 *                   ],
 *                   Order: [
 *                     "STRING_VALUE",
 *                   ],
 *                 },
 *                 PaginatedReportOptions: {
 *                   VerticalOverflowVisibility: "HIDDEN" || "VISIBLE",
 *                   OverflowColumnHeaderVisibility: "HIDDEN" || "VISIBLE",
 *                 },
 *                 TableInlineVisualizations: [
 *                   {
 *                     DataBars: {
 *                       FieldId: "STRING_VALUE", // required
 *                       PositiveColor: "STRING_VALUE",
 *                       NegativeColor: "STRING_VALUE",
 *                     },
 *                   },
 *                 ],
 *               },
 *               ConditionalFormatting: {
 *                 ConditionalFormattingOptions: [
 *                   {
 *                     Cell: {
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
 *                     },
 *                     Row: {
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
 *                             },
 *                           },
 *                         ],
 *                       },
 *                     },
 *                   ],
 *                 },
 *               ],
 *             },
 *             PivotTableVisual: {
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
 *               ChartConfiguration: {
 *                 FieldWells: {
 *                   PivotTableAggregatedFieldWells: {
 *                     Rows: [
 *                       {
 *                         NumericalDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             FormatConfiguration: {
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
 *                                 NullValueFormatConfiguration: {
 *                                   NullString: "STRING_VALUE", // required
 *                                 },
 *                               },
 *                               PercentageDisplayFormatConfiguration: {
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
 *                         CategoricalDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
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
 *                                 NullValueFormatConfiguration: {
 *                                   NullString: "STRING_VALUE", // required
 *                                 },
 *                               },
 *                               PercentageDisplayFormatConfiguration: {
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
 *                         DateDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           DateGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             DateTimeFormat: "STRING_VALUE",
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
 *                                 NullValueFormatConfiguration: {
 *                                   NullString: "STRING_VALUE", // required
 *                                 },
 *                               },
 *                               PercentageDisplayFormatConfiguration: {
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
 *                       },
 *                     ],
 *                     Columns: [
 *                       {
 *                         NumericalDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             FormatConfiguration: {
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
 *                                 NullValueFormatConfiguration: {
 *                                   NullString: "STRING_VALUE", // required
 *                                 },
 *                               },
 *                               PercentageDisplayFormatConfiguration: {
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
 *                         CategoricalDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
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
 *                                 NullValueFormatConfiguration: {
 *                                   NullString: "STRING_VALUE", // required
 *                                 },
 *                               },
 *                               PercentageDisplayFormatConfiguration: {
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
 *                         DateDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           DateGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             DateTimeFormat: "STRING_VALUE",
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
 *                                 NullValueFormatConfiguration: {
 *                                   NullString: "STRING_VALUE", // required
 *                                 },
 *                               },
 *                               PercentageDisplayFormatConfiguration: {
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
 *                       },
 *                     ],
 *                     Values: [
 *                       {
 *                         NumericalMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: {
 *                             SimpleNumericalAggregation: "SUM" || "AVERAGE" || "MIN" || "MAX" || "COUNT" || "DISTINCT_COUNT" || "VAR" || "VARP" || "STDEV" || "STDEVP" || "MEDIAN",
 *                             PercentileAggregation: {
 *                               PercentileValue: Number("double"),
 *                             },
 *                           },
 *                           FormatConfiguration: {
 *                             FormatConfiguration: {
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
 *                                 NullValueFormatConfiguration: {
 *                                   NullString: "STRING_VALUE", // required
 *                                 },
 *                               },
 *                               PercentageDisplayFormatConfiguration: {
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
 *                         CategoricalMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: "COUNT" || "DISTINCT_COUNT",
 *                           FormatConfiguration: {
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
 *                                 NullValueFormatConfiguration: {
 *                                   NullString: "STRING_VALUE", // required
 *                                 },
 *                               },
 *                               PercentageDisplayFormatConfiguration: {
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
 *                         DateMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX",
 *                           FormatConfiguration: {
 *                             DateTimeFormat: "STRING_VALUE",
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
 *                                 NullValueFormatConfiguration: {
 *                                   NullString: "STRING_VALUE", // required
 *                                 },
 *                               },
 *                               PercentageDisplayFormatConfiguration: {
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
 *                         CalculatedMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Expression: "STRING_VALUE", // required
 *                         },
 *                       },
 *                     ],
 *                   },
 *                 },
 *                 SortConfiguration: {
 *                   FieldSortOptions: [
 *                     {
 *                       FieldId: "STRING_VALUE", // required
 *                       SortBy: {
 *                         Field: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Direction: "ASC" || "DESC", // required
 *                         },
 *                         Column: {
 *                           SortBy: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
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
 *                           },
 *                         },
 *                         DataPath: {
 *                           Direction: "ASC" || "DESC", // required
 *                           SortPaths: [ // required
 *                             {
 *                               FieldId: "STRING_VALUE", // required
 *                               FieldValue: "STRING_VALUE", // required
 *                             },
 *                           ],
 *                         },
 *                       },
 *                     },
 *                   ],
 *                 },
 *                 TableOptions: {
 *                   MetricPlacement: "ROW" || "COLUMN",
 *                   SingleMetricVisibility: "HIDDEN" || "VISIBLE",
 *                   ColumnNamesVisibility: "HIDDEN" || "VISIBLE",
 *                   ToggleButtonsVisibility: "HIDDEN" || "VISIBLE",
 *                   ColumnHeaderStyle: {
 *                     Visibility: "HIDDEN" || "VISIBLE",
 *                     FontConfiguration: {
 *                       FontSize: "<FontConfiguration>",
 *                       FontDecoration: "<FontConfiguration>",
 *                       FontColor: "<FontConfiguration>",
 *                       FontWeight: "<FontConfiguration>",
 *                       FontStyle: "<FontConfiguration>",
 *                     },
 *                     TextWrap: "NONE" || "WRAP",
 *                     HorizontalTextAlignment: "LEFT" || "CENTER" || "RIGHT" || "AUTO",
 *                     VerticalTextAlignment: "TOP" || "MIDDLE" || "BOTTOM",
 *                     BackgroundColor: "STRING_VALUE",
 *                     Height: Number("int"),
 *                     Border: {
 *                       UniformBorder: {
 *                         Color: "STRING_VALUE",
 *                         Thickness: Number("int"),
 *                         Style: "NONE" || "SOLID",
 *                       },
 *                       SideSpecificBorder: {
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
 *                         Top: {
 *                           Color: "STRING_VALUE",
 *                           Thickness: Number("int"),
 *                           Style: "NONE" || "SOLID",
 *                         },
 *                         Bottom: {
 *                           Color: "STRING_VALUE",
 *                           Thickness: Number("int"),
 *                           Style: "NONE" || "SOLID",
 *                         },
 *                       },
 *                     },
 *                   },
 *                   RowHeaderStyle: {
 *                     Visibility: "HIDDEN" || "VISIBLE",
 *                     FontConfiguration: {
 *                       FontSize: "<FontConfiguration>",
 *                       FontDecoration: "<FontConfiguration>",
 *                       FontColor: "<FontConfiguration>",
 *                       FontWeight: "<FontConfiguration>",
 *                       FontStyle: "<FontConfiguration>",
 *                     },
 *                     TextWrap: "NONE" || "WRAP",
 *                     HorizontalTextAlignment: "LEFT" || "CENTER" || "RIGHT" || "AUTO",
 *                     VerticalTextAlignment: "TOP" || "MIDDLE" || "BOTTOM",
 *                     BackgroundColor: "STRING_VALUE",
 *                     Height: Number("int"),
 *                     Border: {
 *                       UniformBorder: {
 *                         Color: "STRING_VALUE",
 *                         Thickness: Number("int"),
 *                         Style: "NONE" || "SOLID",
 *                       },
 *                       SideSpecificBorder: {
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
 *                         Top: {
 *                           Color: "STRING_VALUE",
 *                           Thickness: Number("int"),
 *                           Style: "NONE" || "SOLID",
 *                         },
 *                         Bottom: {
 *                           Color: "STRING_VALUE",
 *                           Thickness: Number("int"),
 *                           Style: "NONE" || "SOLID",
 *                         },
 *                       },
 *                     },
 *                   },
 *                   CellStyle: {
 *                     Visibility: "HIDDEN" || "VISIBLE",
 *                     FontConfiguration: {
 *                       FontSize: "<FontConfiguration>",
 *                       FontDecoration: "<FontConfiguration>",
 *                       FontColor: "<FontConfiguration>",
 *                       FontWeight: "<FontConfiguration>",
 *                       FontStyle: "<FontConfiguration>",
 *                     },
 *                     TextWrap: "NONE" || "WRAP",
 *                     HorizontalTextAlignment: "LEFT" || "CENTER" || "RIGHT" || "AUTO",
 *                     VerticalTextAlignment: "TOP" || "MIDDLE" || "BOTTOM",
 *                     BackgroundColor: "STRING_VALUE",
 *                     Height: Number("int"),
 *                     Border: {
 *                       UniformBorder: {
 *                         Color: "STRING_VALUE",
 *                         Thickness: Number("int"),
 *                         Style: "NONE" || "SOLID",
 *                       },
 *                       SideSpecificBorder: {
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
 *                         Top: {
 *                           Color: "STRING_VALUE",
 *                           Thickness: Number("int"),
 *                           Style: "NONE" || "SOLID",
 *                         },
 *                         Bottom: {
 *                           Color: "STRING_VALUE",
 *                           Thickness: Number("int"),
 *                           Style: "NONE" || "SOLID",
 *                         },
 *                       },
 *                     },
 *                   },
 *                   RowFieldNamesStyle: {
 *                     Visibility: "HIDDEN" || "VISIBLE",
 *                     FontConfiguration: {
 *                       FontSize: "<FontConfiguration>",
 *                       FontDecoration: "<FontConfiguration>",
 *                       FontColor: "<FontConfiguration>",
 *                       FontWeight: "<FontConfiguration>",
 *                       FontStyle: "<FontConfiguration>",
 *                     },
 *                     TextWrap: "NONE" || "WRAP",
 *                     HorizontalTextAlignment: "LEFT" || "CENTER" || "RIGHT" || "AUTO",
 *                     VerticalTextAlignment: "TOP" || "MIDDLE" || "BOTTOM",
 *                     BackgroundColor: "STRING_VALUE",
 *                     Height: Number("int"),
 *                     Border: {
 *                       UniformBorder: {
 *                         Color: "STRING_VALUE",
 *                         Thickness: Number("int"),
 *                         Style: "NONE" || "SOLID",
 *                       },
 *                       SideSpecificBorder: {
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
 *                         Top: {
 *                           Color: "STRING_VALUE",
 *                           Thickness: Number("int"),
 *                           Style: "NONE" || "SOLID",
 *                         },
 *                         Bottom: {
 *                           Color: "STRING_VALUE",
 *                           Thickness: Number("int"),
 *                           Style: "NONE" || "SOLID",
 *                         },
 *                       },
 *                     },
 *                   },
 *                   RowAlternateColorOptions: {
 *                     Status: "ENABLED" || "DISABLED",
 *                     RowAlternateColors: [
 *                       "STRING_VALUE",
 *                     ],
 *                   },
 *                   CollapsedRowDimensionsVisibility: "HIDDEN" || "VISIBLE",
 *                 },
 *                 TotalOptions: {
 *                   RowSubtotalOptions: {
 *                     TotalsVisibility: "HIDDEN" || "VISIBLE",
 *                     CustomLabel: "STRING_VALUE",
 *                     FieldLevel: "ALL" || "CUSTOM" || "LAST",
 *                     FieldLevelOptions: [
 *                       {
 *                         FieldId: "STRING_VALUE",
 *                       },
 *                     ],
 *                     TotalCellStyle: {
 *                       Visibility: "HIDDEN" || "VISIBLE",
 *                       FontConfiguration: {
 *                         FontSize: "<FontConfiguration>",
 *                         FontDecoration: "<FontConfiguration>",
 *                         FontColor: "<FontConfiguration>",
 *                         FontWeight: "<FontConfiguration>",
 *                         FontStyle: "<FontConfiguration>",
 *                       },
 *                       TextWrap: "NONE" || "WRAP",
 *                       HorizontalTextAlignment: "LEFT" || "CENTER" || "RIGHT" || "AUTO",
 *                       VerticalTextAlignment: "TOP" || "MIDDLE" || "BOTTOM",
 *                       BackgroundColor: "STRING_VALUE",
 *                       Height: Number("int"),
 *                       Border: {
 *                         UniformBorder: {
 *                           Color: "STRING_VALUE",
 *                           Thickness: Number("int"),
 *                           Style: "NONE" || "SOLID",
 *                         },
 *                         SideSpecificBorder: {
 *                           InnerVertical: {
 *                             Color: "<TableBorderOptions>",
 *                             Thickness: "<TableBorderOptions>",
 *                             Style: "<TableBorderOptions>",
 *                           },
 *                           InnerHorizontal: {
 *                             Color: "<TableBorderOptions>",
 *                             Thickness: "<TableBorderOptions>",
 *                             Style: "<TableBorderOptions>",
 *                           },
 *                           Left: {
 *                             Color: "<TableBorderOptions>",
 *                             Thickness: "<TableBorderOptions>",
 *                             Style: "<TableBorderOptions>",
 *                           },
 *                           Right: {
 *                             Color: "<TableBorderOptions>",
 *                             Thickness: "<TableBorderOptions>",
 *                             Style: "<TableBorderOptions>",
 *                           },
 *                           Top: {
 *                             Color: "<TableBorderOptions>",
 *                             Thickness: "<TableBorderOptions>",
 *                             Style: "<TableBorderOptions>",
 *                           },
 *                           Bottom: {
 *                             Color: "<TableBorderOptions>",
 *                             Thickness: "<TableBorderOptions>",
 *                             Style: "<TableBorderOptions>",
 *                           },
 *                         },
 *                       },
 *                     },
 *                     ValueCellStyle: {
 *                       Visibility: "HIDDEN" || "VISIBLE",
 *                       FontConfiguration: {
 *                         FontSize: "<FontConfiguration>",
 *                         FontDecoration: "<FontConfiguration>",
 *                         FontColor: "<FontConfiguration>",
 *                         FontWeight: "<FontConfiguration>",
 *                         FontStyle: "<FontConfiguration>",
 *                       },
 *                       TextWrap: "NONE" || "WRAP",
 *                       HorizontalTextAlignment: "LEFT" || "CENTER" || "RIGHT" || "AUTO",
 *                       VerticalTextAlignment: "TOP" || "MIDDLE" || "BOTTOM",
 *                       BackgroundColor: "STRING_VALUE",
 *                       Height: Number("int"),
 *                       Border: {
 *                         UniformBorder: {
 *                           Color: "<TableBorderOptions>",
 *                           Thickness: "<TableBorderOptions>",
 *                           Style: "<TableBorderOptions>",
 *                         },
 *                         SideSpecificBorder: {
 *                           InnerVertical: {
 *                             Color: "<TableBorderOptions>",
 *                             Thickness: "<TableBorderOptions>",
 *                             Style: "<TableBorderOptions>",
 *                           },
 *                           InnerHorizontal: {
 *                             Color: "<TableBorderOptions>",
 *                             Thickness: "<TableBorderOptions>",
 *                             Style: "<TableBorderOptions>",
 *                           },
 *                           Left: {
 *                             Color: "<TableBorderOptions>",
 *                             Thickness: "<TableBorderOptions>",
 *                             Style: "<TableBorderOptions>",
 *                           },
 *                           Right: {
 *                             Color: "<TableBorderOptions>",
 *                             Thickness: "<TableBorderOptions>",
 *                             Style: "<TableBorderOptions>",
 *                           },
 *                           Top: {
 *                             Color: "<TableBorderOptions>",
 *                             Thickness: "<TableBorderOptions>",
 *                             Style: "<TableBorderOptions>",
 *                           },
 *                           Bottom: {
 *                             Color: "<TableBorderOptions>",
 *                             Thickness: "<TableBorderOptions>",
 *                             Style: "<TableBorderOptions>",
 *                           },
 *                         },
 *                       },
 *                     },
 *                     MetricHeaderCellStyle: {
 *                       Visibility: "HIDDEN" || "VISIBLE",
 *                       FontConfiguration: {
 *                         FontSize: "<FontConfiguration>",
 *                         FontDecoration: "<FontConfiguration>",
 *                         FontColor: "<FontConfiguration>",
 *                         FontWeight: "<FontConfiguration>",
 *                         FontStyle: "<FontConfiguration>",
 *                       },
 *                       TextWrap: "NONE" || "WRAP",
 *                       HorizontalTextAlignment: "LEFT" || "CENTER" || "RIGHT" || "AUTO",
 *                       VerticalTextAlignment: "TOP" || "MIDDLE" || "BOTTOM",
 *                       BackgroundColor: "STRING_VALUE",
 *                       Height: Number("int"),
 *                       Border: {
 *                         UniformBorder: {
 *                           Color: "<TableBorderOptions>",
 *                           Thickness: "<TableBorderOptions>",
 *                           Style: "<TableBorderOptions>",
 *                         },
 *                         SideSpecificBorder: {
 *                           InnerVertical: {
 *                             Color: "<TableBorderOptions>",
 *                             Thickness: "<TableBorderOptions>",
 *                             Style: "<TableBorderOptions>",
 *                           },
 *                           InnerHorizontal: {
 *                             Color: "<TableBorderOptions>",
 *                             Thickness: "<TableBorderOptions>",
 *                             Style: "<TableBorderOptions>",
 *                           },
 *                           Left: {
 *                             Color: "<TableBorderOptions>",
 *                             Thickness: "<TableBorderOptions>",
 *                             Style: "<TableBorderOptions>",
 *                           },
 *                           Right: {
 *                             Color: "<TableBorderOptions>",
 *                             Thickness: "<TableBorderOptions>",
 *                             Style: "<TableBorderOptions>",
 *                           },
 *                           Top: {
 *                             Color: "<TableBorderOptions>",
 *                             Thickness: "<TableBorderOptions>",
 *                             Style: "<TableBorderOptions>",
 *                           },
 *                           Bottom: {
 *                             Color: "<TableBorderOptions>",
 *                             Thickness: "<TableBorderOptions>",
 *                             Style: "<TableBorderOptions>",
 *                           },
 *                         },
 *                       },
 *                     },
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
 *                     TotalCellStyle: {
 *                       Visibility: "HIDDEN" || "VISIBLE",
 *                       FontConfiguration: {
 *                         FontSize: "<FontConfiguration>",
 *                         FontDecoration: "<FontConfiguration>",
 *                         FontColor: "<FontConfiguration>",
 *                         FontWeight: "<FontConfiguration>",
 *                         FontStyle: "<FontConfiguration>",
 *                       },
 *                       TextWrap: "NONE" || "WRAP",
 *                       HorizontalTextAlignment: "LEFT" || "CENTER" || "RIGHT" || "AUTO",
 *                       VerticalTextAlignment: "TOP" || "MIDDLE" || "BOTTOM",
 *                       BackgroundColor: "STRING_VALUE",
 *                       Height: Number("int"),
 *                       Border: {
 *                         UniformBorder: {
 *                           Color: "<TableBorderOptions>",
 *                           Thickness: "<TableBorderOptions>",
 *                           Style: "<TableBorderOptions>",
 *                         },
 *                         SideSpecificBorder: {
 *                           InnerVertical: {
 *                             Color: "<TableBorderOptions>",
 *                             Thickness: "<TableBorderOptions>",
 *                             Style: "<TableBorderOptions>",
 *                           },
 *                           InnerHorizontal: {
 *                             Color: "<TableBorderOptions>",
 *                             Thickness: "<TableBorderOptions>",
 *                             Style: "<TableBorderOptions>",
 *                           },
 *                           Left: {
 *                             Color: "<TableBorderOptions>",
 *                             Thickness: "<TableBorderOptions>",
 *                             Style: "<TableBorderOptions>",
 *                           },
 *                           Right: {
 *                             Color: "<TableBorderOptions>",
 *                             Thickness: "<TableBorderOptions>",
 *                             Style: "<TableBorderOptions>",
 *                           },
 *                           Top: {
 *                             Color: "<TableBorderOptions>",
 *                             Thickness: "<TableBorderOptions>",
 *                             Style: "<TableBorderOptions>",
 *                           },
 *                           Bottom: {
 *                             Color: "<TableBorderOptions>",
 *                             Thickness: "<TableBorderOptions>",
 *                             Style: "<TableBorderOptions>",
 *                           },
 *                         },
 *                       },
 *                     },
 *                     ValueCellStyle: {
 *                       Visibility: "HIDDEN" || "VISIBLE",
 *                       FontConfiguration: {
 *                         FontSize: "<FontConfiguration>",
 *                         FontDecoration: "<FontConfiguration>",
 *                         FontColor: "<FontConfiguration>",
 *                         FontWeight: "<FontConfiguration>",
 *                         FontStyle: "<FontConfiguration>",
 *                       },
 *                       TextWrap: "NONE" || "WRAP",
 *                       HorizontalTextAlignment: "LEFT" || "CENTER" || "RIGHT" || "AUTO",
 *                       VerticalTextAlignment: "TOP" || "MIDDLE" || "BOTTOM",
 *                       BackgroundColor: "STRING_VALUE",
 *                       Height: Number("int"),
 *                       Border: {
 *                         UniformBorder: {
 *                           Color: "<TableBorderOptions>",
 *                           Thickness: "<TableBorderOptions>",
 *                           Style: "<TableBorderOptions>",
 *                         },
 *                         SideSpecificBorder: {
 *                           InnerVertical: {
 *                             Color: "<TableBorderOptions>",
 *                             Thickness: "<TableBorderOptions>",
 *                             Style: "<TableBorderOptions>",
 *                           },
 *                           InnerHorizontal: {
 *                             Color: "<TableBorderOptions>",
 *                             Thickness: "<TableBorderOptions>",
 *                             Style: "<TableBorderOptions>",
 *                           },
 *                           Left: {
 *                             Color: "<TableBorderOptions>",
 *                             Thickness: "<TableBorderOptions>",
 *                             Style: "<TableBorderOptions>",
 *                           },
 *                           Right: {
 *                             Color: "<TableBorderOptions>",
 *                             Thickness: "<TableBorderOptions>",
 *                             Style: "<TableBorderOptions>",
 *                           },
 *                           Top: {
 *                             Color: "<TableBorderOptions>",
 *                             Thickness: "<TableBorderOptions>",
 *                             Style: "<TableBorderOptions>",
 *                           },
 *                           Bottom: {
 *                             Color: "<TableBorderOptions>",
 *                             Thickness: "<TableBorderOptions>",
 *                             Style: "<TableBorderOptions>",
 *                           },
 *                         },
 *                       },
 *                     },
 *                     MetricHeaderCellStyle: {
 *                       Visibility: "HIDDEN" || "VISIBLE",
 *                       FontConfiguration: {
 *                         FontSize: "<FontConfiguration>",
 *                         FontDecoration: "<FontConfiguration>",
 *                         FontColor: "<FontConfiguration>",
 *                         FontWeight: "<FontConfiguration>",
 *                         FontStyle: "<FontConfiguration>",
 *                       },
 *                       TextWrap: "NONE" || "WRAP",
 *                       HorizontalTextAlignment: "LEFT" || "CENTER" || "RIGHT" || "AUTO",
 *                       VerticalTextAlignment: "TOP" || "MIDDLE" || "BOTTOM",
 *                       BackgroundColor: "STRING_VALUE",
 *                       Height: Number("int"),
 *                       Border: {
 *                         UniformBorder: {
 *                           Color: "<TableBorderOptions>",
 *                           Thickness: "<TableBorderOptions>",
 *                           Style: "<TableBorderOptions>",
 *                         },
 *                         SideSpecificBorder: {
 *                           InnerVertical: {
 *                             Color: "<TableBorderOptions>",
 *                             Thickness: "<TableBorderOptions>",
 *                             Style: "<TableBorderOptions>",
 *                           },
 *                           InnerHorizontal: {
 *                             Color: "<TableBorderOptions>",
 *                             Thickness: "<TableBorderOptions>",
 *                             Style: "<TableBorderOptions>",
 *                           },
 *                           Left: {
 *                             Color: "<TableBorderOptions>",
 *                             Thickness: "<TableBorderOptions>",
 *                             Style: "<TableBorderOptions>",
 *                           },
 *                           Right: {
 *                             Color: "<TableBorderOptions>",
 *                             Thickness: "<TableBorderOptions>",
 *                             Style: "<TableBorderOptions>",
 *                           },
 *                           Top: {
 *                             Color: "<TableBorderOptions>",
 *                             Thickness: "<TableBorderOptions>",
 *                             Style: "<TableBorderOptions>",
 *                           },
 *                           Bottom: {
 *                             Color: "<TableBorderOptions>",
 *                             Thickness: "<TableBorderOptions>",
 *                             Style: "<TableBorderOptions>",
 *                           },
 *                         },
 *                       },
 *                     },
 *                   },
 *                   RowTotalOptions: {
 *                     TotalsVisibility: "HIDDEN" || "VISIBLE",
 *                     Placement: "START" || "END",
 *                     ScrollStatus: "PINNED" || "SCROLLED",
 *                     CustomLabel: "STRING_VALUE",
 *                     TotalCellStyle: {
 *                       Visibility: "HIDDEN" || "VISIBLE",
 *                       FontConfiguration: {
 *                         FontSize: "<FontConfiguration>",
 *                         FontDecoration: "<FontConfiguration>",
 *                         FontColor: "<FontConfiguration>",
 *                         FontWeight: "<FontConfiguration>",
 *                         FontStyle: "<FontConfiguration>",
 *                       },
 *                       TextWrap: "NONE" || "WRAP",
 *                       HorizontalTextAlignment: "LEFT" || "CENTER" || "RIGHT" || "AUTO",
 *                       VerticalTextAlignment: "TOP" || "MIDDLE" || "BOTTOM",
 *                       BackgroundColor: "STRING_VALUE",
 *                       Height: Number("int"),
 *                       Border: {
 *                         UniformBorder: {
 *                           Color: "<TableBorderOptions>",
 *                           Thickness: "<TableBorderOptions>",
 *                           Style: "<TableBorderOptions>",
 *                         },
 *                         SideSpecificBorder: {
 *                           InnerVertical: {
 *                             Color: "<TableBorderOptions>",
 *                             Thickness: "<TableBorderOptions>",
 *                             Style: "<TableBorderOptions>",
 *                           },
 *                           InnerHorizontal: {
 *                             Color: "<TableBorderOptions>",
 *                             Thickness: "<TableBorderOptions>",
 *                             Style: "<TableBorderOptions>",
 *                           },
 *                           Left: {
 *                             Color: "<TableBorderOptions>",
 *                             Thickness: "<TableBorderOptions>",
 *                             Style: "<TableBorderOptions>",
 *                           },
 *                           Right: {
 *                             Color: "<TableBorderOptions>",
 *                             Thickness: "<TableBorderOptions>",
 *                             Style: "<TableBorderOptions>",
 *                           },
 *                           Top: {
 *                             Color: "<TableBorderOptions>",
 *                             Thickness: "<TableBorderOptions>",
 *                             Style: "<TableBorderOptions>",
 *                           },
 *                           Bottom: {
 *                             Color: "<TableBorderOptions>",
 *                             Thickness: "<TableBorderOptions>",
 *                             Style: "<TableBorderOptions>",
 *                           },
 *                         },
 *                       },
 *                     },
 *                     ValueCellStyle: {
 *                       Visibility: "HIDDEN" || "VISIBLE",
 *                       FontConfiguration: {
 *                         FontSize: "<FontConfiguration>",
 *                         FontDecoration: "<FontConfiguration>",
 *                         FontColor: "<FontConfiguration>",
 *                         FontWeight: "<FontConfiguration>",
 *                         FontStyle: "<FontConfiguration>",
 *                       },
 *                       TextWrap: "NONE" || "WRAP",
 *                       HorizontalTextAlignment: "LEFT" || "CENTER" || "RIGHT" || "AUTO",
 *                       VerticalTextAlignment: "TOP" || "MIDDLE" || "BOTTOM",
 *                       BackgroundColor: "STRING_VALUE",
 *                       Height: Number("int"),
 *                       Border: {
 *                         UniformBorder: {
 *                           Color: "<TableBorderOptions>",
 *                           Thickness: "<TableBorderOptions>",
 *                           Style: "<TableBorderOptions>",
 *                         },
 *                         SideSpecificBorder: {
 *                           InnerVertical: {
 *                             Color: "<TableBorderOptions>",
 *                             Thickness: "<TableBorderOptions>",
 *                             Style: "<TableBorderOptions>",
 *                           },
 *                           InnerHorizontal: {
 *                             Color: "<TableBorderOptions>",
 *                             Thickness: "<TableBorderOptions>",
 *                             Style: "<TableBorderOptions>",
 *                           },
 *                           Left: {
 *                             Color: "<TableBorderOptions>",
 *                             Thickness: "<TableBorderOptions>",
 *                             Style: "<TableBorderOptions>",
 *                           },
 *                           Right: {
 *                             Color: "<TableBorderOptions>",
 *                             Thickness: "<TableBorderOptions>",
 *                             Style: "<TableBorderOptions>",
 *                           },
 *                           Top: {
 *                             Color: "<TableBorderOptions>",
 *                             Thickness: "<TableBorderOptions>",
 *                             Style: "<TableBorderOptions>",
 *                           },
 *                           Bottom: {
 *                             Color: "<TableBorderOptions>",
 *                             Thickness: "<TableBorderOptions>",
 *                             Style: "<TableBorderOptions>",
 *                           },
 *                         },
 *                       },
 *                     },
 *                     MetricHeaderCellStyle: {
 *                       Visibility: "HIDDEN" || "VISIBLE",
 *                       FontConfiguration: {
 *                         FontSize: "<FontConfiguration>",
 *                         FontDecoration: "<FontConfiguration>",
 *                         FontColor: "<FontConfiguration>",
 *                         FontWeight: "<FontConfiguration>",
 *                         FontStyle: "<FontConfiguration>",
 *                       },
 *                       TextWrap: "NONE" || "WRAP",
 *                       HorizontalTextAlignment: "LEFT" || "CENTER" || "RIGHT" || "AUTO",
 *                       VerticalTextAlignment: "TOP" || "MIDDLE" || "BOTTOM",
 *                       BackgroundColor: "STRING_VALUE",
 *                       Height: Number("int"),
 *                       Border: {
 *                         UniformBorder: {
 *                           Color: "<TableBorderOptions>",
 *                           Thickness: "<TableBorderOptions>",
 *                           Style: "<TableBorderOptions>",
 *                         },
 *                         SideSpecificBorder: {
 *                           InnerVertical: {
 *                             Color: "<TableBorderOptions>",
 *                             Thickness: "<TableBorderOptions>",
 *                             Style: "<TableBorderOptions>",
 *                           },
 *                           InnerHorizontal: {
 *                             Color: "<TableBorderOptions>",
 *                             Thickness: "<TableBorderOptions>",
 *                             Style: "<TableBorderOptions>",
 *                           },
 *                           Left: {
 *                             Color: "<TableBorderOptions>",
 *                             Thickness: "<TableBorderOptions>",
 *                             Style: "<TableBorderOptions>",
 *                           },
 *                           Right: {
 *                             Color: "<TableBorderOptions>",
 *                             Thickness: "<TableBorderOptions>",
 *                             Style: "<TableBorderOptions>",
 *                           },
 *                           Top: {
 *                             Color: "<TableBorderOptions>",
 *                             Thickness: "<TableBorderOptions>",
 *                             Style: "<TableBorderOptions>",
 *                           },
 *                           Bottom: {
 *                             Color: "<TableBorderOptions>",
 *                             Thickness: "<TableBorderOptions>",
 *                             Style: "<TableBorderOptions>",
 *                           },
 *                         },
 *                       },
 *                     },
 *                   },
 *                   ColumnTotalOptions: {
 *                     TotalsVisibility: "HIDDEN" || "VISIBLE",
 *                     Placement: "START" || "END",
 *                     ScrollStatus: "PINNED" || "SCROLLED",
 *                     CustomLabel: "STRING_VALUE",
 *                     TotalCellStyle: {
 *                       Visibility: "HIDDEN" || "VISIBLE",
 *                       FontConfiguration: {
 *                         FontSize: "<FontConfiguration>",
 *                         FontDecoration: "<FontConfiguration>",
 *                         FontColor: "<FontConfiguration>",
 *                         FontWeight: "<FontConfiguration>",
 *                         FontStyle: "<FontConfiguration>",
 *                       },
 *                       TextWrap: "NONE" || "WRAP",
 *                       HorizontalTextAlignment: "LEFT" || "CENTER" || "RIGHT" || "AUTO",
 *                       VerticalTextAlignment: "TOP" || "MIDDLE" || "BOTTOM",
 *                       BackgroundColor: "STRING_VALUE",
 *                       Height: Number("int"),
 *                       Border: {
 *                         UniformBorder: {
 *                           Color: "<TableBorderOptions>",
 *                           Thickness: "<TableBorderOptions>",
 *                           Style: "<TableBorderOptions>",
 *                         },
 *                         SideSpecificBorder: {
 *                           InnerVertical: {
 *                             Color: "<TableBorderOptions>",
 *                             Thickness: "<TableBorderOptions>",
 *                             Style: "<TableBorderOptions>",
 *                           },
 *                           InnerHorizontal: {
 *                             Color: "<TableBorderOptions>",
 *                             Thickness: "<TableBorderOptions>",
 *                             Style: "<TableBorderOptions>",
 *                           },
 *                           Left: {
 *                             Color: "<TableBorderOptions>",
 *                             Thickness: "<TableBorderOptions>",
 *                             Style: "<TableBorderOptions>",
 *                           },
 *                           Right: {
 *                             Color: "<TableBorderOptions>",
 *                             Thickness: "<TableBorderOptions>",
 *                             Style: "<TableBorderOptions>",
 *                           },
 *                           Top: {
 *                             Color: "<TableBorderOptions>",
 *                             Thickness: "<TableBorderOptions>",
 *                             Style: "<TableBorderOptions>",
 *                           },
 *                           Bottom: {
 *                             Color: "<TableBorderOptions>",
 *                             Thickness: "<TableBorderOptions>",
 *                             Style: "<TableBorderOptions>",
 *                           },
 *                         },
 *                       },
 *                     },
 *                     ValueCellStyle: {
 *                       Visibility: "HIDDEN" || "VISIBLE",
 *                       FontConfiguration: {
 *                         FontSize: "<FontConfiguration>",
 *                         FontDecoration: "<FontConfiguration>",
 *                         FontColor: "<FontConfiguration>",
 *                         FontWeight: "<FontConfiguration>",
 *                         FontStyle: "<FontConfiguration>",
 *                       },
 *                       TextWrap: "NONE" || "WRAP",
 *                       HorizontalTextAlignment: "LEFT" || "CENTER" || "RIGHT" || "AUTO",
 *                       VerticalTextAlignment: "TOP" || "MIDDLE" || "BOTTOM",
 *                       BackgroundColor: "STRING_VALUE",
 *                       Height: Number("int"),
 *                       Border: {
 *                         UniformBorder: {
 *                           Color: "<TableBorderOptions>",
 *                           Thickness: "<TableBorderOptions>",
 *                           Style: "<TableBorderOptions>",
 *                         },
 *                         SideSpecificBorder: {
 *                           InnerVertical: {
 *                             Color: "<TableBorderOptions>",
 *                             Thickness: "<TableBorderOptions>",
 *                             Style: "<TableBorderOptions>",
 *                           },
 *                           InnerHorizontal: {
 *                             Color: "<TableBorderOptions>",
 *                             Thickness: "<TableBorderOptions>",
 *                             Style: "<TableBorderOptions>",
 *                           },
 *                           Left: {
 *                             Color: "<TableBorderOptions>",
 *                             Thickness: "<TableBorderOptions>",
 *                             Style: "<TableBorderOptions>",
 *                           },
 *                           Right: {
 *                             Color: "<TableBorderOptions>",
 *                             Thickness: "<TableBorderOptions>",
 *                             Style: "<TableBorderOptions>",
 *                           },
 *                           Top: {
 *                             Color: "<TableBorderOptions>",
 *                             Thickness: "<TableBorderOptions>",
 *                             Style: "<TableBorderOptions>",
 *                           },
 *                           Bottom: {
 *                             Color: "<TableBorderOptions>",
 *                             Thickness: "<TableBorderOptions>",
 *                             Style: "<TableBorderOptions>",
 *                           },
 *                         },
 *                       },
 *                     },
 *                     MetricHeaderCellStyle: {
 *                       Visibility: "HIDDEN" || "VISIBLE",
 *                       FontConfiguration: {
 *                         FontSize: "<FontConfiguration>",
 *                         FontDecoration: "<FontConfiguration>",
 *                         FontColor: "<FontConfiguration>",
 *                         FontWeight: "<FontConfiguration>",
 *                         FontStyle: "<FontConfiguration>",
 *                       },
 *                       TextWrap: "NONE" || "WRAP",
 *                       HorizontalTextAlignment: "LEFT" || "CENTER" || "RIGHT" || "AUTO",
 *                       VerticalTextAlignment: "TOP" || "MIDDLE" || "BOTTOM",
 *                       BackgroundColor: "STRING_VALUE",
 *                       Height: Number("int"),
 *                       Border: {
 *                         UniformBorder: {
 *                           Color: "<TableBorderOptions>",
 *                           Thickness: "<TableBorderOptions>",
 *                           Style: "<TableBorderOptions>",
 *                         },
 *                         SideSpecificBorder: {
 *                           InnerVertical: {
 *                             Color: "<TableBorderOptions>",
 *                             Thickness: "<TableBorderOptions>",
 *                             Style: "<TableBorderOptions>",
 *                           },
 *                           InnerHorizontal: {
 *                             Color: "<TableBorderOptions>",
 *                             Thickness: "<TableBorderOptions>",
 *                             Style: "<TableBorderOptions>",
 *                           },
 *                           Left: {
 *                             Color: "<TableBorderOptions>",
 *                             Thickness: "<TableBorderOptions>",
 *                             Style: "<TableBorderOptions>",
 *                           },
 *                           Right: {
 *                             Color: "<TableBorderOptions>",
 *                             Thickness: "<TableBorderOptions>",
 *                             Style: "<TableBorderOptions>",
 *                           },
 *                           Top: {
 *                             Color: "<TableBorderOptions>",
 *                             Thickness: "<TableBorderOptions>",
 *                             Style: "<TableBorderOptions>",
 *                           },
 *                           Bottom: {
 *                             Color: "<TableBorderOptions>",
 *                             Thickness: "<TableBorderOptions>",
 *                             Style: "<TableBorderOptions>",
 *                           },
 *                         },
 *                       },
 *                     },
 *                   },
 *                 },
 *                 FieldOptions: {
 *                   SelectedFieldOptions: [
 *                     {
 *                       FieldId: "STRING_VALUE", // required
 *                       CustomLabel: "STRING_VALUE",
 *                       Visibility: "HIDDEN" || "VISIBLE",
 *                     },
 *                   ],
 *                   DataPathOptions: [
 *                     {
 *                       DataPathList: [ // required
 *                         {
 *                           FieldId: "STRING_VALUE", // required
 *                           FieldValue: "STRING_VALUE", // required
 *                         },
 *                       ],
 *                       Width: "STRING_VALUE",
 *                     },
 *                   ],
 *                 },
 *                 PaginatedReportOptions: {
 *                   VerticalOverflowVisibility: "HIDDEN" || "VISIBLE",
 *                   OverflowColumnHeaderVisibility: "HIDDEN" || "VISIBLE",
 *                 },
 *               },
 *               ConditionalFormatting: {
 *                 ConditionalFormattingOptions: [
 *                   {
 *                     Cell: {
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
 *                       Scope: {
 *                         Role: "FIELD" || "FIELD_TOTAL" || "GRAND_TOTAL",
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
 *                             },
 *                           },
 *                         ],
 *                       },
 *                     },
 *                   ],
 *                 },
 *               ],
 *             },
 *             BarChartVisual: {
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
 *               ChartConfiguration: {
 *                 FieldWells: {
 *                   BarChartAggregatedFieldWells: {
 *                     Category: [
 *                       {
 *                         NumericalDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             FormatConfiguration: {
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
 *                                 NullValueFormatConfiguration: {
 *                                   NullString: "STRING_VALUE", // required
 *                                 },
 *                               },
 *                               PercentageDisplayFormatConfiguration: {
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
 *                         CategoricalDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
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
 *                                 NullValueFormatConfiguration: {
 *                                   NullString: "STRING_VALUE", // required
 *                                 },
 *                               },
 *                               PercentageDisplayFormatConfiguration: {
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
 *                         DateDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           DateGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             DateTimeFormat: "STRING_VALUE",
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
 *                                 NullValueFormatConfiguration: {
 *                                   NullString: "STRING_VALUE", // required
 *                                 },
 *                               },
 *                               PercentageDisplayFormatConfiguration: {
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
 *                       },
 *                     ],
 *                     Values: [
 *                       {
 *                         NumericalMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: {
 *                             SimpleNumericalAggregation: "SUM" || "AVERAGE" || "MIN" || "MAX" || "COUNT" || "DISTINCT_COUNT" || "VAR" || "VARP" || "STDEV" || "STDEVP" || "MEDIAN",
 *                             PercentileAggregation: {
 *                               PercentileValue: Number("double"),
 *                             },
 *                           },
 *                           FormatConfiguration: {
 *                             FormatConfiguration: {
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
 *                                 NullValueFormatConfiguration: {
 *                                   NullString: "STRING_VALUE", // required
 *                                 },
 *                               },
 *                               PercentageDisplayFormatConfiguration: {
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
 *                         CategoricalMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: "COUNT" || "DISTINCT_COUNT",
 *                           FormatConfiguration: {
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
 *                                 NullValueFormatConfiguration: {
 *                                   NullString: "STRING_VALUE", // required
 *                                 },
 *                               },
 *                               PercentageDisplayFormatConfiguration: {
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
 *                         DateMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX",
 *                           FormatConfiguration: {
 *                             DateTimeFormat: "STRING_VALUE",
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
 *                                 NullValueFormatConfiguration: {
 *                                   NullString: "STRING_VALUE", // required
 *                                 },
 *                               },
 *                               PercentageDisplayFormatConfiguration: {
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
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             FormatConfiguration: {
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
 *                                 NullValueFormatConfiguration: {
 *                                   NullString: "STRING_VALUE", // required
 *                                 },
 *                               },
 *                               PercentageDisplayFormatConfiguration: {
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
 *                         CategoricalDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
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
 *                                 NullValueFormatConfiguration: {
 *                                   NullString: "STRING_VALUE", // required
 *                                 },
 *                               },
 *                               PercentageDisplayFormatConfiguration: {
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
 *                         DateDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           DateGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             DateTimeFormat: "STRING_VALUE",
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
 *                                 NullValueFormatConfiguration: {
 *                                   NullString: "STRING_VALUE", // required
 *                                 },
 *                               },
 *                               PercentageDisplayFormatConfiguration: {
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
 *                       },
 *                     ],
 *                     SmallMultiples: [
 *                       {
 *                         NumericalDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             FormatConfiguration: {
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
 *                                 NullValueFormatConfiguration: {
 *                                   NullString: "STRING_VALUE", // required
 *                                 },
 *                               },
 *                               PercentageDisplayFormatConfiguration: {
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
 *                         CategoricalDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
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
 *                                 NullValueFormatConfiguration: {
 *                                   NullString: "STRING_VALUE", // required
 *                                 },
 *                               },
 *                               PercentageDisplayFormatConfiguration: {
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
 *                         DateDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           DateGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             DateTimeFormat: "STRING_VALUE",
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
 *                                 NullValueFormatConfiguration: {
 *                                   NullString: "STRING_VALUE", // required
 *                                 },
 *                               },
 *                               PercentageDisplayFormatConfiguration: {
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
 *                       },
 *                     ],
 *                   },
 *                 },
 *                 SortConfiguration: {
 *                   CategorySort: [
 *                     {
 *                       FieldSort: {
 *                         FieldId: "STRING_VALUE", // required
 *                         Direction: "ASC" || "DESC", // required
 *                       },
 *                       ColumnSort: {
 *                         SortBy: {
 *                           DataSetIdentifier: "<ColumnIdentifier>",
 *                           ColumnName: "<ColumnIdentifier>",
 *                         },
 *                         Direction: "ASC" || "DESC", // required
 *                         AggregationFunction: {
 *                           NumericalAggregationFunction: {
 *                             SimpleNumericalAggregation: "SUM" || "AVERAGE" || "MIN" || "MAX" || "COUNT" || "DISTINCT_COUNT" || "VAR" || "VARP" || "STDEV" || "STDEVP" || "MEDIAN",
 *                             PercentileAggregation: {
 *                               PercentileValue: Number("double"),
 *                             },
 *                           },
 *                           CategoricalAggregationFunction: "COUNT" || "DISTINCT_COUNT",
 *                           DateAggregationFunction: "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX",
 *                         },
 *                       },
 *                     },
 *                   ],
 *                   CategoryItemsLimit: {
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
 *                         SortBy: {
 *                           DataSetIdentifier: "<ColumnIdentifier>",
 *                           ColumnName: "<ColumnIdentifier>",
 *                         },
 *                         Direction: "ASC" || "DESC", // required
 *                         AggregationFunction: {
 *                           NumericalAggregationFunction: {
 *                             SimpleNumericalAggregation: "SUM" || "AVERAGE" || "MIN" || "MAX" || "COUNT" || "DISTINCT_COUNT" || "VAR" || "VARP" || "STDEV" || "STDEVP" || "MEDIAN",
 *                             PercentileAggregation: {
 *                               PercentileValue: Number("double"),
 *                             },
 *                           },
 *                           CategoricalAggregationFunction: "COUNT" || "DISTINCT_COUNT",
 *                           DateAggregationFunction: "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX",
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
 *                         SortBy: {
 *                           DataSetIdentifier: "<ColumnIdentifier>",
 *                           ColumnName: "<ColumnIdentifier>",
 *                         },
 *                         Direction: "ASC" || "DESC", // required
 *                         AggregationFunction: {
 *                           NumericalAggregationFunction: {
 *                             SimpleNumericalAggregation: "SUM" || "AVERAGE" || "MIN" || "MAX" || "COUNT" || "DISTINCT_COUNT" || "VAR" || "VARP" || "STDEV" || "STDEVP" || "MEDIAN",
 *                             PercentileAggregation: {
 *                               PercentileValue: Number("double"),
 *                             },
 *                           },
 *                           CategoricalAggregationFunction: "COUNT" || "DISTINCT_COUNT",
 *                           DateAggregationFunction: "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX",
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
 *                 VisualPalette: {
 *                   ChartColor: "STRING_VALUE",
 *                   ColorMap: [
 *                     {
 *                       Element: {
 *                         FieldId: "<DataPathValue>",
 *                         FieldValue: "<DataPathValue>",
 *                       },
 *                       Color: "STRING_VALUE", // required
 *                       TimeGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *                     },
 *                   ],
 *                 },
 *                 SmallMultiplesOptions: {
 *                   MaxVisibleRows: Number("long"),
 *                   MaxVisibleColumns: Number("long"),
 *                   PanelConfiguration: {
 *                     Title: {
 *                       Visibility: "HIDDEN" || "VISIBLE",
 *                       FontConfiguration: {
 *                         FontSize: "<FontConfiguration>",
 *                         FontDecoration: "<FontConfiguration>",
 *                         FontColor: "<FontConfiguration>",
 *                         FontWeight: "<FontConfiguration>",
 *                         FontStyle: "<FontConfiguration>",
 *                       },
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
 *                 },
 *                 CategoryAxis: {
 *                   TickLabelOptions: {
 *                     LabelOptions: {
 *                       Visibility: "HIDDEN" || "VISIBLE",
 *                       FontConfiguration: {
 *                         FontSize: "<FontConfiguration>",
 *                         FontDecoration: "<FontConfiguration>",
 *                         FontColor: "<FontConfiguration>",
 *                         FontWeight: "<FontConfiguration>",
 *                         FontStyle: "<FontConfiguration>",
 *                       },
 *                       CustomLabel: "STRING_VALUE",
 *                     },
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
 *                 CategoryLabelOptions: {
 *                   Visibility: "HIDDEN" || "VISIBLE",
 *                   SortIconVisibility: "HIDDEN" || "VISIBLE",
 *                   AxisLabelOptions: [
 *                     {
 *                       FontConfiguration: {
 *                         FontSize: "<FontConfiguration>",
 *                         FontDecoration: "<FontConfiguration>",
 *                         FontColor: "<FontConfiguration>",
 *                         FontWeight: "<FontConfiguration>",
 *                         FontStyle: "<FontConfiguration>",
 *                       },
 *                       CustomLabel: "STRING_VALUE",
 *                       ApplyTo: {
 *                         FieldId: "STRING_VALUE", // required
 *                         Column: {
 *                           DataSetIdentifier: "<ColumnIdentifier>",
 *                           ColumnName: "<ColumnIdentifier>",
 *                         },
 *                       },
 *                     },
 *                   ],
 *                 },
 *                 ValueAxis: {
 *                   TickLabelOptions: {
 *                     LabelOptions: {
 *                       Visibility: "HIDDEN" || "VISIBLE",
 *                       FontConfiguration: {
 *                         FontSize: "<FontConfiguration>",
 *                         FontDecoration: "<FontConfiguration>",
 *                         FontColor: "<FontConfiguration>",
 *                         FontWeight: "<FontConfiguration>",
 *                         FontStyle: "<FontConfiguration>",
 *                       },
 *                       CustomLabel: "STRING_VALUE",
 *                     },
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
 *                       FontConfiguration: {
 *                         FontSize: "<FontConfiguration>",
 *                         FontDecoration: "<FontConfiguration>",
 *                         FontColor: "<FontConfiguration>",
 *                         FontWeight: "<FontConfiguration>",
 *                         FontStyle: "<FontConfiguration>",
 *                       },
 *                       CustomLabel: "STRING_VALUE",
 *                       ApplyTo: {
 *                         FieldId: "STRING_VALUE", // required
 *                         Column: {
 *                           DataSetIdentifier: "<ColumnIdentifier>",
 *                           ColumnName: "<ColumnIdentifier>",
 *                         },
 *                       },
 *                     },
 *                   ],
 *                 },
 *                 ColorLabelOptions: {
 *                   Visibility: "HIDDEN" || "VISIBLE",
 *                   SortIconVisibility: "HIDDEN" || "VISIBLE",
 *                   AxisLabelOptions: [
 *                     {
 *                       FontConfiguration: {
 *                         FontSize: "<FontConfiguration>",
 *                         FontDecoration: "<FontConfiguration>",
 *                         FontColor: "<FontConfiguration>",
 *                         FontWeight: "<FontConfiguration>",
 *                         FontStyle: "<FontConfiguration>",
 *                       },
 *                       CustomLabel: "STRING_VALUE",
 *                       ApplyTo: {
 *                         FieldId: "STRING_VALUE", // required
 *                         Column: {
 *                           DataSetIdentifier: "<ColumnIdentifier>",
 *                           ColumnName: "<ColumnIdentifier>",
 *                         },
 *                       },
 *                     },
 *                   ],
 *                 },
 *                 Legend: {
 *                   Visibility: "HIDDEN" || "VISIBLE",
 *                   Title: {
 *                     Visibility: "<LabelOptions>",
 *                     FontConfiguration: "<LabelOptions>",
 *                     CustomLabel: "<LabelOptions>",
 *                   },
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
 *                   LabelFontConfiguration: {
 *                     FontSize: "<FontConfiguration>",
 *                     FontDecoration: "<FontConfiguration>",
 *                     FontColor: "<FontConfiguration>",
 *                     FontWeight: "<FontConfiguration>",
 *                     FontStyle: "<FontConfiguration>",
 *                   },
 *                   LabelColor: "STRING_VALUE",
 *                   Overlap: "DISABLE_OVERLAP" || "ENABLE_OVERLAP",
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
 *                         },
 *                         ColumnTooltipItem: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           Label: "STRING_VALUE",
 *                           Visibility: "HIDDEN" || "VISIBLE",
 *                           Aggregation: {
 *                             NumericalAggregationFunction: {
 *                               SimpleNumericalAggregation: "SUM" || "AVERAGE" || "MIN" || "MAX" || "COUNT" || "DISTINCT_COUNT" || "VAR" || "VARP" || "STDEV" || "STDEVP" || "MEDIAN",
 *                               PercentileAggregation: {
 *                                 PercentileValue: Number("double"),
 *                               },
 *                             },
 *                             CategoricalAggregationFunction: "COUNT" || "DISTINCT_COUNT",
 *                             DateAggregationFunction: "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX",
 *                           },
 *                         },
 *                       },
 *                     ],
 *                   },
 *                 },
 *                 ReferenceLines: [
 *                   {
 *                     Status: "ENABLED" || "DISABLED",
 *                     DataConfiguration: {
 *                       StaticConfiguration: {
 *                         Value: Number("double"), // required
 *                       },
 *                       DynamicConfiguration: {
 *                         Column: {
 *                           DataSetIdentifier: "<ColumnIdentifier>",
 *                           ColumnName: "<ColumnIdentifier>",
 *                         },
 *                         MeasureAggregationFunction: {
 *                           NumericalAggregationFunction: {
 *                             SimpleNumericalAggregation: "SUM" || "AVERAGE" || "MIN" || "MAX" || "COUNT" || "DISTINCT_COUNT" || "VAR" || "VARP" || "STDEV" || "STDEVP" || "MEDIAN",
 *                             PercentileAggregation: {
 *                               PercentileValue: Number("double"),
 *                             },
 *                           },
 *                           CategoricalAggregationFunction: "COUNT" || "DISTINCT_COUNT",
 *                           DateAggregationFunction: "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX",
 *                         },
 *                         Calculation: {
 *                           SimpleNumericalAggregation: "<NumericalAggregationFunction>",
 *                           PercentileAggregation: "<NumericalAggregationFunction>",
 *                         },
 *                       },
 *                       AxisBinding: "PRIMARY_YAXIS" || "SECONDARY_YAXIS",
 *                     },
 *                     StyleConfiguration: {
 *                       Pattern: "SOLID" || "DASHED" || "DOTTED",
 *                       Color: "STRING_VALUE",
 *                     },
 *                     LabelConfiguration: {
 *                       ValueLabelConfiguration: {
 *                         RelativePosition: "BEFORE_CUSTOM_LABEL" || "AFTER_CUSTOM_LABEL",
 *                         FormatConfiguration: {
 *                           NumberDisplayFormatConfiguration: {
 *                             Prefix: "STRING_VALUE",
 *                             Suffix: "STRING_VALUE",
 *                             SeparatorConfiguration: {
 *                               DecimalSeparator: "COMMA" || "DOT" || "SPACE",
 *                               ThousandsSeparator: {
 *                                 Symbol: "COMMA" || "DOT" || "SPACE",
 *                                 Visibility: "HIDDEN" || "VISIBLE",
 *                               },
 *                             },
 *                             DecimalPlacesConfiguration: {
 *                               DecimalPlaces: Number("long"), // required
 *                             },
 *                             NumberScale: "NONE" || "AUTO" || "THOUSANDS" || "MILLIONS" || "BILLIONS" || "TRILLIONS",
 *                             NegativeValueConfiguration: {
 *                               DisplayMode: "POSITIVE" || "NEGATIVE", // required
 *                             },
 *                             NullValueFormatConfiguration: {
 *                               NullString: "STRING_VALUE", // required
 *                             },
 *                           },
 *                           CurrencyDisplayFormatConfiguration: {
 *                             Prefix: "STRING_VALUE",
 *                             Suffix: "STRING_VALUE",
 *                             SeparatorConfiguration: {
 *                               DecimalSeparator: "COMMA" || "DOT" || "SPACE",
 *                               ThousandsSeparator: {
 *                                 Symbol: "COMMA" || "DOT" || "SPACE",
 *                                 Visibility: "HIDDEN" || "VISIBLE",
 *                               },
 *                             },
 *                             Symbol: "STRING_VALUE",
 *                             DecimalPlacesConfiguration: {
 *                               DecimalPlaces: Number("long"), // required
 *                             },
 *                             NumberScale: "NONE" || "AUTO" || "THOUSANDS" || "MILLIONS" || "BILLIONS" || "TRILLIONS",
 *                             NegativeValueConfiguration: {
 *                               DisplayMode: "POSITIVE" || "NEGATIVE", // required
 *                             },
 *                             NullValueFormatConfiguration: {
 *                               NullString: "STRING_VALUE", // required
 *                             },
 *                           },
 *                           PercentageDisplayFormatConfiguration: {
 *                             Prefix: "STRING_VALUE",
 *                             Suffix: "STRING_VALUE",
 *                             SeparatorConfiguration: {
 *                               DecimalSeparator: "COMMA" || "DOT" || "SPACE",
 *                               ThousandsSeparator: {
 *                                 Symbol: "COMMA" || "DOT" || "SPACE",
 *                                 Visibility: "HIDDEN" || "VISIBLE",
 *                               },
 *                             },
 *                             DecimalPlacesConfiguration: {
 *                               DecimalPlaces: Number("long"), // required
 *                             },
 *                             NegativeValueConfiguration: {
 *                               DisplayMode: "POSITIVE" || "NEGATIVE", // required
 *                             },
 *                             NullValueFormatConfiguration: {
 *                               NullString: "STRING_VALUE", // required
 *                             },
 *                           },
 *                         },
 *                       },
 *                       CustomLabelConfiguration: {
 *                         CustomLabel: "STRING_VALUE", // required
 *                       },
 *                       FontConfiguration: {
 *                         FontSize: "<FontConfiguration>",
 *                         FontDecoration: "<FontConfiguration>",
 *                         FontColor: "<FontConfiguration>",
 *                         FontWeight: "<FontConfiguration>",
 *                         FontStyle: "<FontConfiguration>",
 *                       },
 *                       FontColor: "STRING_VALUE",
 *                       HorizontalPosition: "LEFT" || "CENTER" || "RIGHT",
 *                       VerticalPosition: "ABOVE" || "BELOW",
 *                     },
 *                   },
 *                 ],
 *                 ContributionAnalysisDefaults: [
 *                   {
 *                     MeasureFieldId: "STRING_VALUE", // required
 *                     ContributorDimensions: [ // required
 *                       {
 *                         DataSetIdentifier: "<ColumnIdentifier>",
 *                         ColumnName: "<ColumnIdentifier>",
 *                       },
 *                     ],
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
 *                       {
 *                         DataSetIdentifier: "<ColumnIdentifier>",
 *                         ColumnName: "<ColumnIdentifier>",
 *                       },
 *                     ],
 *                     DrillDownFilters: [
 *                       {
 *                         NumericEqualityFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           Value: Number("double"), // required
 *                         },
 *                         CategoryFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           CategoryValues: [ // required
 *                             "STRING_VALUE",
 *                           ],
 *                         },
 *                         TimeRangeFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
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
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           Value: Number("double"), // required
 *                         },
 *                         CategoryFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           CategoryValues: [ // required
 *                             "STRING_VALUE",
 *                           ],
 *                         },
 *                         TimeRangeFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
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
 *                       {
 *                         DataSetIdentifier: "<ColumnIdentifier>",
 *                         ColumnName: "<ColumnIdentifier>",
 *                       },
 *                     ],
 *                     DrillDownFilters: [
 *                       {
 *                         NumericEqualityFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           Value: Number("double"), // required
 *                         },
 *                         CategoryFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           CategoryValues: [ // required
 *                             "STRING_VALUE",
 *                           ],
 *                         },
 *                         TimeRangeFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
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
 *             KPIVisual: {
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
 *               ChartConfiguration: {
 *                 FieldWells: {
 *                   Values: [
 *                     {
 *                       NumericalMeasureField: {
 *                         FieldId: "STRING_VALUE", // required
 *                         Column: {
 *                           DataSetIdentifier: "<ColumnIdentifier>",
 *                           ColumnName: "<ColumnIdentifier>",
 *                         },
 *                         AggregationFunction: {
 *                           SimpleNumericalAggregation: "<NumericalAggregationFunction>",
 *                           PercentileAggregation: "<NumericalAggregationFunction>",
 *                         },
 *                         FormatConfiguration: {
 *                           FormatConfiguration: {
 *                             NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                           },
 *                         },
 *                       },
 *                       CategoricalMeasureField: {
 *                         FieldId: "STRING_VALUE", // required
 *                         Column: {
 *                           DataSetIdentifier: "<ColumnIdentifier>",
 *                           ColumnName: "<ColumnIdentifier>",
 *                         },
 *                         AggregationFunction: "COUNT" || "DISTINCT_COUNT",
 *                         FormatConfiguration: {
 *                           NullValueFormatConfiguration: {
 *                             NullString: "<NullValueFormatConfiguration>",
 *                           },
 *                           NumericFormatConfiguration: {
 *                             NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                           },
 *                         },
 *                       },
 *                       DateMeasureField: {
 *                         FieldId: "STRING_VALUE", // required
 *                         Column: {
 *                           DataSetIdentifier: "<ColumnIdentifier>",
 *                           ColumnName: "<ColumnIdentifier>",
 *                         },
 *                         AggregationFunction: "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX",
 *                         FormatConfiguration: {
 *                           DateTimeFormat: "STRING_VALUE",
 *                           NullValueFormatConfiguration: {
 *                             NullString: "<NullValueFormatConfiguration>",
 *                           },
 *                           NumericFormatConfiguration: {
 *                             NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                           },
 *                         },
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
 *                         Column: {
 *                           DataSetIdentifier: "<ColumnIdentifier>",
 *                           ColumnName: "<ColumnIdentifier>",
 *                         },
 *                         AggregationFunction: {
 *                           SimpleNumericalAggregation: "<NumericalAggregationFunction>",
 *                           PercentileAggregation: "<NumericalAggregationFunction>",
 *                         },
 *                         FormatConfiguration: {
 *                           FormatConfiguration: {
 *                             NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                           },
 *                         },
 *                       },
 *                       CategoricalMeasureField: {
 *                         FieldId: "STRING_VALUE", // required
 *                         Column: {
 *                           DataSetIdentifier: "<ColumnIdentifier>",
 *                           ColumnName: "<ColumnIdentifier>",
 *                         },
 *                         AggregationFunction: "COUNT" || "DISTINCT_COUNT",
 *                         FormatConfiguration: {
 *                           NullValueFormatConfiguration: {
 *                             NullString: "<NullValueFormatConfiguration>",
 *                           },
 *                           NumericFormatConfiguration: {
 *                             NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                           },
 *                         },
 *                       },
 *                       DateMeasureField: {
 *                         FieldId: "STRING_VALUE", // required
 *                         Column: {
 *                           DataSetIdentifier: "<ColumnIdentifier>",
 *                           ColumnName: "<ColumnIdentifier>",
 *                         },
 *                         AggregationFunction: "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX",
 *                         FormatConfiguration: {
 *                           DateTimeFormat: "STRING_VALUE",
 *                           NullValueFormatConfiguration: {
 *                             NullString: "<NullValueFormatConfiguration>",
 *                           },
 *                           NumericFormatConfiguration: {
 *                             NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                           },
 *                         },
 *                       },
 *                       CalculatedMeasureField: {
 *                         FieldId: "STRING_VALUE", // required
 *                         Expression: "STRING_VALUE", // required
 *                       },
 *                     },
 *                   ],
 *                   TrendGroups: [
 *                     {
 *                       NumericalDimensionField: {
 *                         FieldId: "STRING_VALUE", // required
 *                         Column: {
 *                           DataSetIdentifier: "<ColumnIdentifier>",
 *                           ColumnName: "<ColumnIdentifier>",
 *                         },
 *                         HierarchyId: "STRING_VALUE",
 *                         FormatConfiguration: {
 *                           FormatConfiguration: {
 *                             NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                           },
 *                         },
 *                       },
 *                       CategoricalDimensionField: {
 *                         FieldId: "STRING_VALUE", // required
 *                         Column: {
 *                           DataSetIdentifier: "<ColumnIdentifier>",
 *                           ColumnName: "<ColumnIdentifier>",
 *                         },
 *                         HierarchyId: "STRING_VALUE",
 *                         FormatConfiguration: {
 *                           NullValueFormatConfiguration: {
 *                             NullString: "<NullValueFormatConfiguration>",
 *                           },
 *                           NumericFormatConfiguration: {
 *                             NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                           },
 *                         },
 *                       },
 *                       DateDimensionField: {
 *                         FieldId: "STRING_VALUE", // required
 *                         Column: {
 *                           DataSetIdentifier: "<ColumnIdentifier>",
 *                           ColumnName: "<ColumnIdentifier>",
 *                         },
 *                         DateGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *                         HierarchyId: "STRING_VALUE",
 *                         FormatConfiguration: {
 *                           DateTimeFormat: "STRING_VALUE",
 *                           NullValueFormatConfiguration: {
 *                             NullString: "<NullValueFormatConfiguration>",
 *                           },
 *                           NumericFormatConfiguration: {
 *                             NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                           },
 *                         },
 *                       },
 *                     },
 *                   ],
 *                 },
 *                 SortConfiguration: {
 *                   TrendGroupSort: [
 *                     {
 *                       FieldSort: {
 *                         FieldId: "STRING_VALUE", // required
 *                         Direction: "ASC" || "DESC", // required
 *                       },
 *                       ColumnSort: {
 *                         SortBy: {
 *                           DataSetIdentifier: "<ColumnIdentifier>",
 *                           ColumnName: "<ColumnIdentifier>",
 *                         },
 *                         Direction: "ASC" || "DESC", // required
 *                         AggregationFunction: {
 *                           NumericalAggregationFunction: {
 *                             SimpleNumericalAggregation: "<NumericalAggregationFunction>",
 *                             PercentileAggregation: "<NumericalAggregationFunction>",
 *                           },
 *                           CategoricalAggregationFunction: "COUNT" || "DISTINCT_COUNT",
 *                           DateAggregationFunction: "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX",
 *                         },
 *                       },
 *                     },
 *                   ],
 *                 },
 *                 KPIOptions: {
 *                   ProgressBar: {
 *                     Visibility: "HIDDEN" || "VISIBLE",
 *                   },
 *                   TrendArrows: {
 *                     Visibility: "HIDDEN" || "VISIBLE",
 *                   },
 *                   SecondaryValue: {
 *                     Visibility: "HIDDEN" || "VISIBLE",
 *                   },
 *                   Comparison: {
 *                     ComparisonMethod: "DIFFERENCE" || "PERCENT_DIFFERENCE" || "PERCENT",
 *                     ComparisonFormat: {
 *                       NumberDisplayFormatConfiguration: {
 *                         Prefix: "<NumberDisplayFormatConfiguration>",
 *                         Suffix: "<NumberDisplayFormatConfiguration>",
 *                         SeparatorConfiguration: "<NumberDisplayFormatConfiguration>",
 *                         DecimalPlacesConfiguration: "<NumberDisplayFormatConfiguration>",
 *                         NumberScale: "<NumberDisplayFormatConfiguration>",
 *                         NegativeValueConfiguration: "<NumberDisplayFormatConfiguration>",
 *                         NullValueFormatConfiguration: "<NumberDisplayFormatConfiguration>",
 *                       },
 *                       PercentageDisplayFormatConfiguration: {
 *                         Prefix: "<PercentageDisplayFormatConfiguration>",
 *                         Suffix: "<PercentageDisplayFormatConfiguration>",
 *                         SeparatorConfiguration: "<PercentageDisplayFormatConfiguration>",
 *                         DecimalPlacesConfiguration: "<PercentageDisplayFormatConfiguration>",
 *                         NegativeValueConfiguration: "<PercentageDisplayFormatConfiguration>",
 *                         NullValueFormatConfiguration: "<PercentageDisplayFormatConfiguration>",
 *                       },
 *                     },
 *                   },
 *                   PrimaryValueDisplayType: "HIDDEN" || "COMPARISON" || "ACTUAL",
 *                   PrimaryValueFontConfiguration: {
 *                     FontSize: "<FontConfiguration>",
 *                     FontDecoration: "<FontConfiguration>",
 *                     FontColor: "<FontConfiguration>",
 *                     FontWeight: "<FontConfiguration>",
 *                     FontStyle: "<FontConfiguration>",
 *                   },
 *                   SecondaryValueFontConfiguration: {
 *                     FontSize: "<FontConfiguration>",
 *                     FontDecoration: "<FontConfiguration>",
 *                     FontColor: "<FontConfiguration>",
 *                     FontWeight: "<FontConfiguration>",
 *                     FontStyle: "<FontConfiguration>",
 *                   },
 *                 },
 *               },
 *               ConditionalFormatting: {
 *                 ConditionalFormattingOptions: [
 *                   {
 *                     PrimaryValue: {
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
 *                     ProgressBar: {
 *                       ForegroundColor: {
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
 *                       {
 *                         DataSetIdentifier: "<ColumnIdentifier>",
 *                         ColumnName: "<ColumnIdentifier>",
 *                       },
 *                     ],
 *                     DrillDownFilters: [
 *                       {
 *                         NumericEqualityFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           Value: Number("double"), // required
 *                         },
 *                         CategoryFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           CategoryValues: [ // required
 *                             "STRING_VALUE",
 *                           ],
 *                         },
 *                         TimeRangeFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
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
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           Value: Number("double"), // required
 *                         },
 *                         CategoryFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           CategoryValues: [ // required
 *                             "STRING_VALUE",
 *                           ],
 *                         },
 *                         TimeRangeFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
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
 *                       {
 *                         DataSetIdentifier: "<ColumnIdentifier>",
 *                         ColumnName: "<ColumnIdentifier>",
 *                       },
 *                     ],
 *                     DrillDownFilters: [
 *                       {
 *                         NumericEqualityFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           Value: Number("double"), // required
 *                         },
 *                         CategoryFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           CategoryValues: [ // required
 *                             "STRING_VALUE",
 *                           ],
 *                         },
 *                         TimeRangeFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
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
 *             PieChartVisual: {
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
 *               ChartConfiguration: {
 *                 FieldWells: {
 *                   PieChartAggregatedFieldWells: {
 *                     Category: [
 *                       {
 *                         NumericalDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             FormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CategoricalDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         DateDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           DateGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             DateTimeFormat: "STRING_VALUE",
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                       },
 *                     ],
 *                     Values: [
 *                       {
 *                         NumericalMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: {
 *                             SimpleNumericalAggregation: "<NumericalAggregationFunction>",
 *                             PercentileAggregation: "<NumericalAggregationFunction>",
 *                           },
 *                           FormatConfiguration: {
 *                             FormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CategoricalMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: "COUNT" || "DISTINCT_COUNT",
 *                           FormatConfiguration: {
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         DateMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX",
 *                           FormatConfiguration: {
 *                             DateTimeFormat: "STRING_VALUE",
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CalculatedMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Expression: "STRING_VALUE", // required
 *                         },
 *                       },
 *                     ],
 *                     SmallMultiples: [
 *                       {
 *                         NumericalDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             FormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CategoricalDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         DateDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           DateGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             DateTimeFormat: "STRING_VALUE",
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                       },
 *                     ],
 *                   },
 *                 },
 *                 SortConfiguration: {
 *                   CategorySort: [
 *                     {
 *                       FieldSort: {
 *                         FieldId: "STRING_VALUE", // required
 *                         Direction: "ASC" || "DESC", // required
 *                       },
 *                       ColumnSort: {
 *                         SortBy: {
 *                           DataSetIdentifier: "<ColumnIdentifier>",
 *                           ColumnName: "<ColumnIdentifier>",
 *                         },
 *                         Direction: "ASC" || "DESC", // required
 *                         AggregationFunction: {
 *                           NumericalAggregationFunction: {
 *                             SimpleNumericalAggregation: "<NumericalAggregationFunction>",
 *                             PercentileAggregation: "<NumericalAggregationFunction>",
 *                           },
 *                           CategoricalAggregationFunction: "COUNT" || "DISTINCT_COUNT",
 *                           DateAggregationFunction: "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX",
 *                         },
 *                       },
 *                     },
 *                   ],
 *                   CategoryItemsLimit: {
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
 *                         SortBy: {
 *                           DataSetIdentifier: "<ColumnIdentifier>",
 *                           ColumnName: "<ColumnIdentifier>",
 *                         },
 *                         Direction: "ASC" || "DESC", // required
 *                         AggregationFunction: {
 *                           NumericalAggregationFunction: {
 *                             SimpleNumericalAggregation: "<NumericalAggregationFunction>",
 *                             PercentileAggregation: "<NumericalAggregationFunction>",
 *                           },
 *                           CategoricalAggregationFunction: "COUNT" || "DISTINCT_COUNT",
 *                           DateAggregationFunction: "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX",
 *                         },
 *                       },
 *                     },
 *                   ],
 *                   SmallMultiplesLimitConfiguration: {
 *                     ItemsLimit: Number("long"),
 *                     OtherCategories: "INCLUDE" || "EXCLUDE",
 *                   },
 *                 },
 *                 DonutOptions: {
 *                   ArcOptions: {
 *                     ArcThickness: "SMALL" || "MEDIUM" || "LARGE" || "WHOLE",
 *                   },
 *                   DonutCenterOptions: {
 *                     LabelVisibility: "HIDDEN" || "VISIBLE",
 *                   },
 *                 },
 *                 SmallMultiplesOptions: {
 *                   MaxVisibleRows: Number("long"),
 *                   MaxVisibleColumns: Number("long"),
 *                   PanelConfiguration: {
 *                     Title: {
 *                       Visibility: "HIDDEN" || "VISIBLE",
 *                       FontConfiguration: {
 *                         FontSize: "<FontConfiguration>",
 *                         FontDecoration: "<FontConfiguration>",
 *                         FontColor: "<FontConfiguration>",
 *                         FontWeight: "<FontConfiguration>",
 *                         FontStyle: "<FontConfiguration>",
 *                       },
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
 *                 },
 *                 CategoryLabelOptions: {
 *                   Visibility: "HIDDEN" || "VISIBLE",
 *                   SortIconVisibility: "HIDDEN" || "VISIBLE",
 *                   AxisLabelOptions: [
 *                     {
 *                       FontConfiguration: {
 *                         FontSize: "<FontConfiguration>",
 *                         FontDecoration: "<FontConfiguration>",
 *                         FontColor: "<FontConfiguration>",
 *                         FontWeight: "<FontConfiguration>",
 *                         FontStyle: "<FontConfiguration>",
 *                       },
 *                       CustomLabel: "STRING_VALUE",
 *                       ApplyTo: {
 *                         FieldId: "STRING_VALUE", // required
 *                         Column: {
 *                           DataSetIdentifier: "<ColumnIdentifier>",
 *                           ColumnName: "<ColumnIdentifier>",
 *                         },
 *                       },
 *                     },
 *                   ],
 *                 },
 *                 ValueLabelOptions: {
 *                   Visibility: "HIDDEN" || "VISIBLE",
 *                   SortIconVisibility: "HIDDEN" || "VISIBLE",
 *                   AxisLabelOptions: [
 *                     {
 *                       FontConfiguration: {
 *                         FontSize: "<FontConfiguration>",
 *                         FontDecoration: "<FontConfiguration>",
 *                         FontColor: "<FontConfiguration>",
 *                         FontWeight: "<FontConfiguration>",
 *                         FontStyle: "<FontConfiguration>",
 *                       },
 *                       CustomLabel: "STRING_VALUE",
 *                       ApplyTo: {
 *                         FieldId: "STRING_VALUE", // required
 *                         Column: {
 *                           DataSetIdentifier: "<ColumnIdentifier>",
 *                           ColumnName: "<ColumnIdentifier>",
 *                         },
 *                       },
 *                     },
 *                   ],
 *                 },
 *                 Legend: {
 *                   Visibility: "HIDDEN" || "VISIBLE",
 *                   Title: {
 *                     Visibility: "<LabelOptions>",
 *                     FontConfiguration: "<LabelOptions>",
 *                     CustomLabel: "<LabelOptions>",
 *                   },
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
 *                   LabelFontConfiguration: {
 *                     FontSize: "<FontConfiguration>",
 *                     FontDecoration: "<FontConfiguration>",
 *                     FontColor: "<FontConfiguration>",
 *                     FontWeight: "<FontConfiguration>",
 *                     FontStyle: "<FontConfiguration>",
 *                   },
 *                   LabelColor: "STRING_VALUE",
 *                   Overlap: "DISABLE_OVERLAP" || "ENABLE_OVERLAP",
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
 *                         },
 *                         ColumnTooltipItem: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           Label: "STRING_VALUE",
 *                           Visibility: "HIDDEN" || "VISIBLE",
 *                           Aggregation: {
 *                             NumericalAggregationFunction: {
 *                               SimpleNumericalAggregation: "<NumericalAggregationFunction>",
 *                               PercentileAggregation: "<NumericalAggregationFunction>",
 *                             },
 *                             CategoricalAggregationFunction: "COUNT" || "DISTINCT_COUNT",
 *                             DateAggregationFunction: "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX",
 *                           },
 *                         },
 *                       },
 *                     ],
 *                   },
 *                 },
 *                 VisualPalette: {
 *                   ChartColor: "STRING_VALUE",
 *                   ColorMap: [
 *                     {
 *                       Element: {
 *                         FieldId: "<DataPathValue>",
 *                         FieldValue: "<DataPathValue>",
 *                       },
 *                       Color: "STRING_VALUE", // required
 *                       TimeGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *                     },
 *                   ],
 *                 },
 *                 ContributionAnalysisDefaults: [
 *                   {
 *                     MeasureFieldId: "STRING_VALUE", // required
 *                     ContributorDimensions: [ // required
 *                       {
 *                         DataSetIdentifier: "<ColumnIdentifier>",
 *                         ColumnName: "<ColumnIdentifier>",
 *                       },
 *                     ],
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
 *                       {
 *                         DataSetIdentifier: "<ColumnIdentifier>",
 *                         ColumnName: "<ColumnIdentifier>",
 *                       },
 *                     ],
 *                     DrillDownFilters: [
 *                       {
 *                         NumericEqualityFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           Value: Number("double"), // required
 *                         },
 *                         CategoryFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           CategoryValues: [ // required
 *                             "STRING_VALUE",
 *                           ],
 *                         },
 *                         TimeRangeFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
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
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           Value: Number("double"), // required
 *                         },
 *                         CategoryFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           CategoryValues: [ // required
 *                             "STRING_VALUE",
 *                           ],
 *                         },
 *                         TimeRangeFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
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
 *                       {
 *                         DataSetIdentifier: "<ColumnIdentifier>",
 *                         ColumnName: "<ColumnIdentifier>",
 *                       },
 *                     ],
 *                     DrillDownFilters: [
 *                       {
 *                         NumericEqualityFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           Value: Number("double"), // required
 *                         },
 *                         CategoryFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           CategoryValues: [ // required
 *                             "STRING_VALUE",
 *                           ],
 *                         },
 *                         TimeRangeFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
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
 *             GaugeChartVisual: {
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
 *               ChartConfiguration: {
 *                 FieldWells: {
 *                   Values: [
 *                     {
 *                       NumericalMeasureField: {
 *                         FieldId: "STRING_VALUE", // required
 *                         Column: {
 *                           DataSetIdentifier: "<ColumnIdentifier>",
 *                           ColumnName: "<ColumnIdentifier>",
 *                         },
 *                         AggregationFunction: {
 *                           SimpleNumericalAggregation: "<NumericalAggregationFunction>",
 *                           PercentileAggregation: "<NumericalAggregationFunction>",
 *                         },
 *                         FormatConfiguration: {
 *                           FormatConfiguration: {
 *                             NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                           },
 *                         },
 *                       },
 *                       CategoricalMeasureField: {
 *                         FieldId: "STRING_VALUE", // required
 *                         Column: {
 *                           DataSetIdentifier: "<ColumnIdentifier>",
 *                           ColumnName: "<ColumnIdentifier>",
 *                         },
 *                         AggregationFunction: "COUNT" || "DISTINCT_COUNT",
 *                         FormatConfiguration: {
 *                           NullValueFormatConfiguration: {
 *                             NullString: "<NullValueFormatConfiguration>",
 *                           },
 *                           NumericFormatConfiguration: {
 *                             NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                           },
 *                         },
 *                       },
 *                       DateMeasureField: {
 *                         FieldId: "STRING_VALUE", // required
 *                         Column: {
 *                           DataSetIdentifier: "<ColumnIdentifier>",
 *                           ColumnName: "<ColumnIdentifier>",
 *                         },
 *                         AggregationFunction: "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX",
 *                         FormatConfiguration: {
 *                           DateTimeFormat: "STRING_VALUE",
 *                           NullValueFormatConfiguration: {
 *                             NullString: "<NullValueFormatConfiguration>",
 *                           },
 *                           NumericFormatConfiguration: {
 *                             NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                           },
 *                         },
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
 *                         Column: {
 *                           DataSetIdentifier: "<ColumnIdentifier>",
 *                           ColumnName: "<ColumnIdentifier>",
 *                         },
 *                         AggregationFunction: {
 *                           SimpleNumericalAggregation: "<NumericalAggregationFunction>",
 *                           PercentileAggregation: "<NumericalAggregationFunction>",
 *                         },
 *                         FormatConfiguration: {
 *                           FormatConfiguration: {
 *                             NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                           },
 *                         },
 *                       },
 *                       CategoricalMeasureField: {
 *                         FieldId: "STRING_VALUE", // required
 *                         Column: {
 *                           DataSetIdentifier: "<ColumnIdentifier>",
 *                           ColumnName: "<ColumnIdentifier>",
 *                         },
 *                         AggregationFunction: "COUNT" || "DISTINCT_COUNT",
 *                         FormatConfiguration: {
 *                           NullValueFormatConfiguration: {
 *                             NullString: "<NullValueFormatConfiguration>",
 *                           },
 *                           NumericFormatConfiguration: {
 *                             NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                           },
 *                         },
 *                       },
 *                       DateMeasureField: {
 *                         FieldId: "STRING_VALUE", // required
 *                         Column: {
 *                           DataSetIdentifier: "<ColumnIdentifier>",
 *                           ColumnName: "<ColumnIdentifier>",
 *                         },
 *                         AggregationFunction: "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX",
 *                         FormatConfiguration: {
 *                           DateTimeFormat: "STRING_VALUE",
 *                           NullValueFormatConfiguration: {
 *                             NullString: "<NullValueFormatConfiguration>",
 *                           },
 *                           NumericFormatConfiguration: {
 *                             NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                           },
 *                         },
 *                       },
 *                       CalculatedMeasureField: {
 *                         FieldId: "STRING_VALUE", // required
 *                         Expression: "STRING_VALUE", // required
 *                       },
 *                     },
 *                   ],
 *                 },
 *                 GaugeChartOptions: {
 *                   PrimaryValueDisplayType: "HIDDEN" || "COMPARISON" || "ACTUAL",
 *                   Comparison: {
 *                     ComparisonMethod: "DIFFERENCE" || "PERCENT_DIFFERENCE" || "PERCENT",
 *                     ComparisonFormat: {
 *                       NumberDisplayFormatConfiguration: {
 *                         Prefix: "<NumberDisplayFormatConfiguration>",
 *                         Suffix: "<NumberDisplayFormatConfiguration>",
 *                         SeparatorConfiguration: "<NumberDisplayFormatConfiguration>",
 *                         DecimalPlacesConfiguration: "<NumberDisplayFormatConfiguration>",
 *                         NumberScale: "<NumberDisplayFormatConfiguration>",
 *                         NegativeValueConfiguration: "<NumberDisplayFormatConfiguration>",
 *                         NullValueFormatConfiguration: "<NumberDisplayFormatConfiguration>",
 *                       },
 *                       PercentageDisplayFormatConfiguration: {
 *                         Prefix: "<PercentageDisplayFormatConfiguration>",
 *                         Suffix: "<PercentageDisplayFormatConfiguration>",
 *                         SeparatorConfiguration: "<PercentageDisplayFormatConfiguration>",
 *                         DecimalPlacesConfiguration: "<PercentageDisplayFormatConfiguration>",
 *                         NegativeValueConfiguration: "<PercentageDisplayFormatConfiguration>",
 *                         NullValueFormatConfiguration: "<PercentageDisplayFormatConfiguration>",
 *                       },
 *                     },
 *                   },
 *                   ArcAxis: {
 *                     Range: {
 *                       Min: Number("double"),
 *                       Max: Number("double"),
 *                     },
 *                     ReserveRange: Number("int"),
 *                   },
 *                   Arc: {
 *                     ArcAngle: Number("double"),
 *                     ArcThickness: "SMALL" || "MEDIUM" || "LARGE",
 *                   },
 *                   PrimaryValueFontConfiguration: {
 *                     FontSize: "<FontConfiguration>",
 *                     FontDecoration: "<FontConfiguration>",
 *                     FontColor: "<FontConfiguration>",
 *                     FontWeight: "<FontConfiguration>",
 *                     FontStyle: "<FontConfiguration>",
 *                   },
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
 *                   LabelFontConfiguration: {
 *                     FontSize: "<FontConfiguration>",
 *                     FontDecoration: "<FontConfiguration>",
 *                     FontColor: "<FontConfiguration>",
 *                     FontWeight: "<FontConfiguration>",
 *                     FontStyle: "<FontConfiguration>",
 *                   },
 *                   LabelColor: "STRING_VALUE",
 *                   Overlap: "DISABLE_OVERLAP" || "ENABLE_OVERLAP",
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
 *                         },
 *                         ColumnTooltipItem: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           Label: "STRING_VALUE",
 *                           Visibility: "HIDDEN" || "VISIBLE",
 *                           Aggregation: {
 *                             NumericalAggregationFunction: {
 *                               SimpleNumericalAggregation: "<NumericalAggregationFunction>",
 *                               PercentileAggregation: "<NumericalAggregationFunction>",
 *                             },
 *                             CategoricalAggregationFunction: "COUNT" || "DISTINCT_COUNT",
 *                             DateAggregationFunction: "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX",
 *                           },
 *                         },
 *                       },
 *                     ],
 *                   },
 *                 },
 *                 VisualPalette: {
 *                   ChartColor: "STRING_VALUE",
 *                   ColorMap: [
 *                     {
 *                       Element: {
 *                         FieldId: "<DataPathValue>",
 *                         FieldValue: "<DataPathValue>",
 *                       },
 *                       Color: "STRING_VALUE", // required
 *                       TimeGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *                     },
 *                   ],
 *                 },
 *               },
 *               ConditionalFormatting: {
 *                 ConditionalFormattingOptions: [
 *                   {
 *                     PrimaryValue: {
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
 *                     Arc: {
 *                       ForegroundColor: {
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
 *                             },
 *                           },
 *                         ],
 *                       },
 *                     },
 *                   ],
 *                 },
 *               ],
 *             },
 *             LineChartVisual: {
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
 *               ChartConfiguration: {
 *                 FieldWells: {
 *                   LineChartAggregatedFieldWells: {
 *                     Category: [
 *                       {
 *                         NumericalDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             FormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CategoricalDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         DateDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           DateGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             DateTimeFormat: "STRING_VALUE",
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                       },
 *                     ],
 *                     Values: [
 *                       {
 *                         NumericalMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: {
 *                             SimpleNumericalAggregation: "<NumericalAggregationFunction>",
 *                             PercentileAggregation: "<NumericalAggregationFunction>",
 *                           },
 *                           FormatConfiguration: {
 *                             FormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CategoricalMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: "COUNT" || "DISTINCT_COUNT",
 *                           FormatConfiguration: {
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         DateMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX",
 *                           FormatConfiguration: {
 *                             DateTimeFormat: "STRING_VALUE",
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
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
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             FormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CategoricalDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         DateDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           DateGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             DateTimeFormat: "STRING_VALUE",
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                       },
 *                     ],
 *                     SmallMultiples: [
 *                       {
 *                         NumericalDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             FormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CategoricalDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         DateDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           DateGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             DateTimeFormat: "STRING_VALUE",
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                       },
 *                     ],
 *                   },
 *                 },
 *                 SortConfiguration: {
 *                   CategorySort: [
 *                     {
 *                       FieldSort: {
 *                         FieldId: "STRING_VALUE", // required
 *                         Direction: "ASC" || "DESC", // required
 *                       },
 *                       ColumnSort: {
 *                         SortBy: {
 *                           DataSetIdentifier: "<ColumnIdentifier>",
 *                           ColumnName: "<ColumnIdentifier>",
 *                         },
 *                         Direction: "ASC" || "DESC", // required
 *                         AggregationFunction: {
 *                           NumericalAggregationFunction: {
 *                             SimpleNumericalAggregation: "<NumericalAggregationFunction>",
 *                             PercentileAggregation: "<NumericalAggregationFunction>",
 *                           },
 *                           CategoricalAggregationFunction: "COUNT" || "DISTINCT_COUNT",
 *                           DateAggregationFunction: "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX",
 *                         },
 *                       },
 *                     },
 *                   ],
 *                   CategoryItemsLimitConfiguration: {
 *                     ItemsLimit: Number("long"),
 *                     OtherCategories: "INCLUDE" || "EXCLUDE",
 *                   },
 *                   ColorItemsLimitConfiguration: {
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
 *                         SortBy: {
 *                           DataSetIdentifier: "<ColumnIdentifier>",
 *                           ColumnName: "<ColumnIdentifier>",
 *                         },
 *                         Direction: "ASC" || "DESC", // required
 *                         AggregationFunction: {
 *                           NumericalAggregationFunction: {
 *                             SimpleNumericalAggregation: "<NumericalAggregationFunction>",
 *                             PercentileAggregation: "<NumericalAggregationFunction>",
 *                           },
 *                           CategoricalAggregationFunction: "COUNT" || "DISTINCT_COUNT",
 *                           DateAggregationFunction: "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX",
 *                         },
 *                       },
 *                     },
 *                   ],
 *                   SmallMultiplesLimitConfiguration: {
 *                     ItemsLimit: Number("long"),
 *                     OtherCategories: "INCLUDE" || "EXCLUDE",
 *                   },
 *                 },
 *                 ForecastConfigurations: [
 *                   {
 *                     ForecastProperties: {
 *                       PeriodsForward: Number("int"),
 *                       PeriodsBackward: Number("int"),
 *                       UpperBoundary: Number("double"),
 *                       LowerBoundary: Number("double"),
 *                       PredictionInterval: Number("int"),
 *                       Seasonality: Number("int"),
 *                     },
 *                     Scenario: {
 *                       WhatIfPointScenario: {
 *                         Date: new Date("TIMESTAMP"), // required
 *                         Value: Number("double"), // required
 *                       },
 *                       WhatIfRangeScenario: {
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
 *                       FontConfiguration: {
 *                         FontSize: "<FontConfiguration>",
 *                         FontDecoration: "<FontConfiguration>",
 *                         FontColor: "<FontConfiguration>",
 *                         FontWeight: "<FontConfiguration>",
 *                         FontStyle: "<FontConfiguration>",
 *                       },
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
 *                 },
 *                 XAxisDisplayOptions: {
 *                   TickLabelOptions: {
 *                     LabelOptions: {
 *                       Visibility: "<LabelOptions>",
 *                       FontConfiguration: "<LabelOptions>",
 *                       CustomLabel: "<LabelOptions>",
 *                     },
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
 *                 XAxisLabelOptions: {
 *                   Visibility: "HIDDEN" || "VISIBLE",
 *                   SortIconVisibility: "HIDDEN" || "VISIBLE",
 *                   AxisLabelOptions: [
 *                     {
 *                       FontConfiguration: {
 *                         FontSize: "<FontConfiguration>",
 *                         FontDecoration: "<FontConfiguration>",
 *                         FontColor: "<FontConfiguration>",
 *                         FontWeight: "<FontConfiguration>",
 *                         FontStyle: "<FontConfiguration>",
 *                       },
 *                       CustomLabel: "STRING_VALUE",
 *                       ApplyTo: {
 *                         FieldId: "STRING_VALUE", // required
 *                         Column: {
 *                           DataSetIdentifier: "<ColumnIdentifier>",
 *                           ColumnName: "<ColumnIdentifier>",
 *                         },
 *                       },
 *                     },
 *                   ],
 *                 },
 *                 PrimaryYAxisDisplayOptions: {
 *                   AxisOptions: {
 *                     TickLabelOptions: {
 *                       LabelOptions: {
 *                         Visibility: "<LabelOptions>",
 *                         FontConfiguration: "<LabelOptions>",
 *                         CustomLabel: "<LabelOptions>",
 *                       },
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
 *                 PrimaryYAxisLabelOptions: {
 *                   Visibility: "HIDDEN" || "VISIBLE",
 *                   SortIconVisibility: "HIDDEN" || "VISIBLE",
 *                   AxisLabelOptions: [
 *                     {
 *                       FontConfiguration: {
 *                         FontSize: "<FontConfiguration>",
 *                         FontDecoration: "<FontConfiguration>",
 *                         FontColor: "<FontConfiguration>",
 *                         FontWeight: "<FontConfiguration>",
 *                         FontStyle: "<FontConfiguration>",
 *                       },
 *                       CustomLabel: "STRING_VALUE",
 *                       ApplyTo: {
 *                         FieldId: "STRING_VALUE", // required
 *                         Column: {
 *                           DataSetIdentifier: "<ColumnIdentifier>",
 *                           ColumnName: "<ColumnIdentifier>",
 *                         },
 *                       },
 *                     },
 *                   ],
 *                 },
 *                 SecondaryYAxisDisplayOptions: {
 *                   AxisOptions: {
 *                     TickLabelOptions: {
 *                       LabelOptions: {
 *                         Visibility: "<LabelOptions>",
 *                         FontConfiguration: "<LabelOptions>",
 *                         CustomLabel: "<LabelOptions>",
 *                       },
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
 *                 SecondaryYAxisLabelOptions: {
 *                   Visibility: "HIDDEN" || "VISIBLE",
 *                   SortIconVisibility: "HIDDEN" || "VISIBLE",
 *                   AxisLabelOptions: [
 *                     {
 *                       FontConfiguration: {
 *                         FontSize: "<FontConfiguration>",
 *                         FontDecoration: "<FontConfiguration>",
 *                         FontColor: "<FontConfiguration>",
 *                         FontWeight: "<FontConfiguration>",
 *                         FontStyle: "<FontConfiguration>",
 *                       },
 *                       CustomLabel: "STRING_VALUE",
 *                       ApplyTo: {
 *                         FieldId: "STRING_VALUE", // required
 *                         Column: {
 *                           DataSetIdentifier: "<ColumnIdentifier>",
 *                           ColumnName: "<ColumnIdentifier>",
 *                         },
 *                       },
 *                     },
 *                   ],
 *                 },
 *                 DefaultSeriesSettings: {
 *                   AxisBinding: "PRIMARY_YAXIS" || "SECONDARY_YAXIS",
 *                   LineStyleSettings: {
 *                     LineVisibility: "HIDDEN" || "VISIBLE",
 *                     LineInterpolation: "LINEAR" || "SMOOTH" || "STEPPED",
 *                     LineStyle: "SOLID" || "DOTTED" || "DASHED",
 *                     LineWidth: "STRING_VALUE",
 *                   },
 *                   MarkerStyleSettings: {
 *                     MarkerVisibility: "HIDDEN" || "VISIBLE",
 *                     MarkerShape: "CIRCLE" || "TRIANGLE" || "SQUARE" || "DIAMOND" || "ROUNDED_SQUARE",
 *                     MarkerSize: "STRING_VALUE",
 *                     MarkerColor: "STRING_VALUE",
 *                   },
 *                 },
 *                 Series: [
 *                   {
 *                     FieldSeriesItem: {
 *                       FieldId: "STRING_VALUE", // required
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
 *                     DataFieldSeriesItem: {
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
 *                   Title: {
 *                     Visibility: "<LabelOptions>",
 *                     FontConfiguration: "<LabelOptions>",
 *                     CustomLabel: "<LabelOptions>",
 *                   },
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
 *                   LabelFontConfiguration: {
 *                     FontSize: "<FontConfiguration>",
 *                     FontDecoration: "<FontConfiguration>",
 *                     FontColor: "<FontConfiguration>",
 *                     FontWeight: "<FontConfiguration>",
 *                     FontStyle: "<FontConfiguration>",
 *                   },
 *                   LabelColor: "STRING_VALUE",
 *                   Overlap: "DISABLE_OVERLAP" || "ENABLE_OVERLAP",
 *                 },
 *                 ReferenceLines: [
 *                   {
 *                     Status: "ENABLED" || "DISABLED",
 *                     DataConfiguration: {
 *                       StaticConfiguration: {
 *                         Value: Number("double"), // required
 *                       },
 *                       DynamicConfiguration: {
 *                         Column: {
 *                           DataSetIdentifier: "<ColumnIdentifier>",
 *                           ColumnName: "<ColumnIdentifier>",
 *                         },
 *                         MeasureAggregationFunction: {
 *                           NumericalAggregationFunction: {
 *                             SimpleNumericalAggregation: "<NumericalAggregationFunction>",
 *                             PercentileAggregation: "<NumericalAggregationFunction>",
 *                           },
 *                           CategoricalAggregationFunction: "COUNT" || "DISTINCT_COUNT",
 *                           DateAggregationFunction: "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX",
 *                         },
 *                         Calculation: {
 *                           SimpleNumericalAggregation: "<NumericalAggregationFunction>",
 *                           PercentileAggregation: "<NumericalAggregationFunction>",
 *                         },
 *                       },
 *                       AxisBinding: "PRIMARY_YAXIS" || "SECONDARY_YAXIS",
 *                     },
 *                     StyleConfiguration: {
 *                       Pattern: "SOLID" || "DASHED" || "DOTTED",
 *                       Color: "STRING_VALUE",
 *                     },
 *                     LabelConfiguration: {
 *                       ValueLabelConfiguration: {
 *                         RelativePosition: "BEFORE_CUSTOM_LABEL" || "AFTER_CUSTOM_LABEL",
 *                         FormatConfiguration: {
 *                           NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                           CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                           PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                         },
 *                       },
 *                       CustomLabelConfiguration: {
 *                         CustomLabel: "STRING_VALUE", // required
 *                       },
 *                       FontConfiguration: {
 *                         FontSize: "<FontConfiguration>",
 *                         FontDecoration: "<FontConfiguration>",
 *                         FontColor: "<FontConfiguration>",
 *                         FontWeight: "<FontConfiguration>",
 *                         FontStyle: "<FontConfiguration>",
 *                       },
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
 *                         },
 *                         ColumnTooltipItem: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           Label: "STRING_VALUE",
 *                           Visibility: "HIDDEN" || "VISIBLE",
 *                           Aggregation: {
 *                             NumericalAggregationFunction: {
 *                               SimpleNumericalAggregation: "<NumericalAggregationFunction>",
 *                               PercentileAggregation: "<NumericalAggregationFunction>",
 *                             },
 *                             CategoricalAggregationFunction: "COUNT" || "DISTINCT_COUNT",
 *                             DateAggregationFunction: "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX",
 *                           },
 *                         },
 *                       },
 *                     ],
 *                   },
 *                 },
 *                 ContributionAnalysisDefaults: [
 *                   {
 *                     MeasureFieldId: "STRING_VALUE", // required
 *                     ContributorDimensions: [ // required
 *                       {
 *                         DataSetIdentifier: "<ColumnIdentifier>",
 *                         ColumnName: "<ColumnIdentifier>",
 *                       },
 *                     ],
 *                   },
 *                 ],
 *                 VisualPalette: {
 *                   ChartColor: "STRING_VALUE",
 *                   ColorMap: [
 *                     {
 *                       Element: {
 *                         FieldId: "<DataPathValue>",
 *                         FieldValue: "<DataPathValue>",
 *                       },
 *                       Color: "STRING_VALUE", // required
 *                       TimeGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *                     },
 *                   ],
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
 *                       {
 *                         DataSetIdentifier: "<ColumnIdentifier>",
 *                         ColumnName: "<ColumnIdentifier>",
 *                       },
 *                     ],
 *                     DrillDownFilters: [
 *                       {
 *                         NumericEqualityFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           Value: Number("double"), // required
 *                         },
 *                         CategoryFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           CategoryValues: [ // required
 *                             "STRING_VALUE",
 *                           ],
 *                         },
 *                         TimeRangeFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
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
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           Value: Number("double"), // required
 *                         },
 *                         CategoryFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           CategoryValues: [ // required
 *                             "STRING_VALUE",
 *                           ],
 *                         },
 *                         TimeRangeFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
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
 *                       {
 *                         DataSetIdentifier: "<ColumnIdentifier>",
 *                         ColumnName: "<ColumnIdentifier>",
 *                       },
 *                     ],
 *                     DrillDownFilters: [
 *                       {
 *                         NumericEqualityFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           Value: Number("double"), // required
 *                         },
 *                         CategoryFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           CategoryValues: [ // required
 *                             "STRING_VALUE",
 *                           ],
 *                         },
 *                         TimeRangeFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
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
 *             HeatMapVisual: {
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
 *               ChartConfiguration: {
 *                 FieldWells: {
 *                   HeatMapAggregatedFieldWells: {
 *                     Rows: [
 *                       {
 *                         NumericalDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             FormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CategoricalDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         DateDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           DateGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             DateTimeFormat: "STRING_VALUE",
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                       },
 *                     ],
 *                     Columns: [
 *                       {
 *                         NumericalDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             FormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CategoricalDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         DateDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           DateGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             DateTimeFormat: "STRING_VALUE",
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                       },
 *                     ],
 *                     Values: [
 *                       {
 *                         NumericalMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: {
 *                             SimpleNumericalAggregation: "<NumericalAggregationFunction>",
 *                             PercentileAggregation: "<NumericalAggregationFunction>",
 *                           },
 *                           FormatConfiguration: {
 *                             FormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CategoricalMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: "COUNT" || "DISTINCT_COUNT",
 *                           FormatConfiguration: {
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         DateMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX",
 *                           FormatConfiguration: {
 *                             DateTimeFormat: "STRING_VALUE",
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CalculatedMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Expression: "STRING_VALUE", // required
 *                         },
 *                       },
 *                     ],
 *                   },
 *                 },
 *                 SortConfiguration: {
 *                   HeatMapRowSort: [
 *                     {
 *                       FieldSort: {
 *                         FieldId: "STRING_VALUE", // required
 *                         Direction: "ASC" || "DESC", // required
 *                       },
 *                       ColumnSort: {
 *                         SortBy: {
 *                           DataSetIdentifier: "<ColumnIdentifier>",
 *                           ColumnName: "<ColumnIdentifier>",
 *                         },
 *                         Direction: "ASC" || "DESC", // required
 *                         AggregationFunction: {
 *                           NumericalAggregationFunction: {
 *                             SimpleNumericalAggregation: "<NumericalAggregationFunction>",
 *                             PercentileAggregation: "<NumericalAggregationFunction>",
 *                           },
 *                           CategoricalAggregationFunction: "COUNT" || "DISTINCT_COUNT",
 *                           DateAggregationFunction: "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX",
 *                         },
 *                       },
 *                     },
 *                   ],
 *                   HeatMapColumnSort: [
 *                     {
 *                       FieldSort: {
 *                         FieldId: "STRING_VALUE", // required
 *                         Direction: "ASC" || "DESC", // required
 *                       },
 *                       ColumnSort: {
 *                         SortBy: {
 *                           DataSetIdentifier: "<ColumnIdentifier>",
 *                           ColumnName: "<ColumnIdentifier>",
 *                         },
 *                         Direction: "ASC" || "DESC", // required
 *                         AggregationFunction: {
 *                           NumericalAggregationFunction: {
 *                             SimpleNumericalAggregation: "<NumericalAggregationFunction>",
 *                             PercentileAggregation: "<NumericalAggregationFunction>",
 *                           },
 *                           CategoricalAggregationFunction: "COUNT" || "DISTINCT_COUNT",
 *                           DateAggregationFunction: "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX",
 *                         },
 *                       },
 *                     },
 *                   ],
 *                   HeatMapRowItemsLimitConfiguration: {
 *                     ItemsLimit: Number("long"),
 *                     OtherCategories: "INCLUDE" || "EXCLUDE",
 *                   },
 *                   HeatMapColumnItemsLimitConfiguration: {
 *                     ItemsLimit: Number("long"),
 *                     OtherCategories: "INCLUDE" || "EXCLUDE",
 *                   },
 *                 },
 *                 RowLabelOptions: {
 *                   Visibility: "HIDDEN" || "VISIBLE",
 *                   SortIconVisibility: "HIDDEN" || "VISIBLE",
 *                   AxisLabelOptions: [
 *                     {
 *                       FontConfiguration: {
 *                         FontSize: "<FontConfiguration>",
 *                         FontDecoration: "<FontConfiguration>",
 *                         FontColor: "<FontConfiguration>",
 *                         FontWeight: "<FontConfiguration>",
 *                         FontStyle: "<FontConfiguration>",
 *                       },
 *                       CustomLabel: "STRING_VALUE",
 *                       ApplyTo: {
 *                         FieldId: "STRING_VALUE", // required
 *                         Column: {
 *                           DataSetIdentifier: "<ColumnIdentifier>",
 *                           ColumnName: "<ColumnIdentifier>",
 *                         },
 *                       },
 *                     },
 *                   ],
 *                 },
 *                 ColumnLabelOptions: {
 *                   Visibility: "HIDDEN" || "VISIBLE",
 *                   SortIconVisibility: "HIDDEN" || "VISIBLE",
 *                   AxisLabelOptions: [
 *                     {
 *                       FontConfiguration: {
 *                         FontSize: "<FontConfiguration>",
 *                         FontDecoration: "<FontConfiguration>",
 *                         FontColor: "<FontConfiguration>",
 *                         FontWeight: "<FontConfiguration>",
 *                         FontStyle: "<FontConfiguration>",
 *                       },
 *                       CustomLabel: "STRING_VALUE",
 *                       ApplyTo: {
 *                         FieldId: "STRING_VALUE", // required
 *                         Column: {
 *                           DataSetIdentifier: "<ColumnIdentifier>",
 *                           ColumnName: "<ColumnIdentifier>",
 *                         },
 *                       },
 *                     },
 *                   ],
 *                 },
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
 *                   Title: {
 *                     Visibility: "<LabelOptions>",
 *                     FontConfiguration: "<LabelOptions>",
 *                     CustomLabel: "<LabelOptions>",
 *                   },
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
 *                   LabelFontConfiguration: {
 *                     FontSize: "<FontConfiguration>",
 *                     FontDecoration: "<FontConfiguration>",
 *                     FontColor: "<FontConfiguration>",
 *                     FontWeight: "<FontConfiguration>",
 *                     FontStyle: "<FontConfiguration>",
 *                   },
 *                   LabelColor: "STRING_VALUE",
 *                   Overlap: "DISABLE_OVERLAP" || "ENABLE_OVERLAP",
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
 *                         },
 *                         ColumnTooltipItem: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           Label: "STRING_VALUE",
 *                           Visibility: "HIDDEN" || "VISIBLE",
 *                           Aggregation: {
 *                             NumericalAggregationFunction: {
 *                               SimpleNumericalAggregation: "<NumericalAggregationFunction>",
 *                               PercentileAggregation: "<NumericalAggregationFunction>",
 *                             },
 *                             CategoricalAggregationFunction: "COUNT" || "DISTINCT_COUNT",
 *                             DateAggregationFunction: "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX",
 *                           },
 *                         },
 *                       },
 *                     ],
 *                   },
 *                 },
 *               },
 *               ColumnHierarchies: [
 *                 {
 *                   ExplicitHierarchy: {
 *                     HierarchyId: "STRING_VALUE", // required
 *                     Columns: [ // required
 *                       {
 *                         DataSetIdentifier: "<ColumnIdentifier>",
 *                         ColumnName: "<ColumnIdentifier>",
 *                       },
 *                     ],
 *                     DrillDownFilters: [
 *                       {
 *                         NumericEqualityFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           Value: Number("double"), // required
 *                         },
 *                         CategoryFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           CategoryValues: [ // required
 *                             "STRING_VALUE",
 *                           ],
 *                         },
 *                         TimeRangeFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
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
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           Value: Number("double"), // required
 *                         },
 *                         CategoryFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           CategoryValues: [ // required
 *                             "STRING_VALUE",
 *                           ],
 *                         },
 *                         TimeRangeFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
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
 *                       {
 *                         DataSetIdentifier: "<ColumnIdentifier>",
 *                         ColumnName: "<ColumnIdentifier>",
 *                       },
 *                     ],
 *                     DrillDownFilters: [
 *                       {
 *                         NumericEqualityFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           Value: Number("double"), // required
 *                         },
 *                         CategoryFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           CategoryValues: [ // required
 *                             "STRING_VALUE",
 *                           ],
 *                         },
 *                         TimeRangeFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           RangeMinimum: new Date("TIMESTAMP"), // required
 *                           RangeMaximum: new Date("TIMESTAMP"), // required
 *                           TimeGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND", // required
 *                         },
 *                       },
 *                     ],
 *                   },
 *                 },
 *               ],
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
 *                             },
 *                           },
 *                         ],
 *                       },
 *                     },
 *                   ],
 *                 },
 *               ],
 *             },
 *             TreeMapVisual: {
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
 *               ChartConfiguration: {
 *                 FieldWells: {
 *                   TreeMapAggregatedFieldWells: {
 *                     Groups: [
 *                       {
 *                         NumericalDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             FormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CategoricalDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         DateDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           DateGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             DateTimeFormat: "STRING_VALUE",
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                       },
 *                     ],
 *                     Sizes: [
 *                       {
 *                         NumericalMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: {
 *                             SimpleNumericalAggregation: "<NumericalAggregationFunction>",
 *                             PercentileAggregation: "<NumericalAggregationFunction>",
 *                           },
 *                           FormatConfiguration: {
 *                             FormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CategoricalMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: "COUNT" || "DISTINCT_COUNT",
 *                           FormatConfiguration: {
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         DateMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX",
 *                           FormatConfiguration: {
 *                             DateTimeFormat: "STRING_VALUE",
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CalculatedMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Expression: "STRING_VALUE", // required
 *                         },
 *                       },
 *                     ],
 *                     Colors: [
 *                       {
 *                         NumericalMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: {
 *                             SimpleNumericalAggregation: "<NumericalAggregationFunction>",
 *                             PercentileAggregation: "<NumericalAggregationFunction>",
 *                           },
 *                           FormatConfiguration: {
 *                             FormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CategoricalMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: "COUNT" || "DISTINCT_COUNT",
 *                           FormatConfiguration: {
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         DateMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX",
 *                           FormatConfiguration: {
 *                             DateTimeFormat: "STRING_VALUE",
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CalculatedMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Expression: "STRING_VALUE", // required
 *                         },
 *                       },
 *                     ],
 *                   },
 *                 },
 *                 SortConfiguration: {
 *                   TreeMapSort: [
 *                     {
 *                       FieldSort: {
 *                         FieldId: "STRING_VALUE", // required
 *                         Direction: "ASC" || "DESC", // required
 *                       },
 *                       ColumnSort: {
 *                         SortBy: {
 *                           DataSetIdentifier: "<ColumnIdentifier>",
 *                           ColumnName: "<ColumnIdentifier>",
 *                         },
 *                         Direction: "ASC" || "DESC", // required
 *                         AggregationFunction: {
 *                           NumericalAggregationFunction: {
 *                             SimpleNumericalAggregation: "<NumericalAggregationFunction>",
 *                             PercentileAggregation: "<NumericalAggregationFunction>",
 *                           },
 *                           CategoricalAggregationFunction: "COUNT" || "DISTINCT_COUNT",
 *                           DateAggregationFunction: "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX",
 *                         },
 *                       },
 *                     },
 *                   ],
 *                   TreeMapGroupItemsLimitConfiguration: {
 *                     ItemsLimit: Number("long"),
 *                     OtherCategories: "INCLUDE" || "EXCLUDE",
 *                   },
 *                 },
 *                 GroupLabelOptions: {
 *                   Visibility: "HIDDEN" || "VISIBLE",
 *                   SortIconVisibility: "HIDDEN" || "VISIBLE",
 *                   AxisLabelOptions: [
 *                     {
 *                       FontConfiguration: {
 *                         FontSize: "<FontConfiguration>",
 *                         FontDecoration: "<FontConfiguration>",
 *                         FontColor: "<FontConfiguration>",
 *                         FontWeight: "<FontConfiguration>",
 *                         FontStyle: "<FontConfiguration>",
 *                       },
 *                       CustomLabel: "STRING_VALUE",
 *                       ApplyTo: {
 *                         FieldId: "STRING_VALUE", // required
 *                         Column: {
 *                           DataSetIdentifier: "<ColumnIdentifier>",
 *                           ColumnName: "<ColumnIdentifier>",
 *                         },
 *                       },
 *                     },
 *                   ],
 *                 },
 *                 SizeLabelOptions: {
 *                   Visibility: "HIDDEN" || "VISIBLE",
 *                   SortIconVisibility: "HIDDEN" || "VISIBLE",
 *                   AxisLabelOptions: [
 *                     {
 *                       FontConfiguration: {
 *                         FontSize: "<FontConfiguration>",
 *                         FontDecoration: "<FontConfiguration>",
 *                         FontColor: "<FontConfiguration>",
 *                         FontWeight: "<FontConfiguration>",
 *                         FontStyle: "<FontConfiguration>",
 *                       },
 *                       CustomLabel: "STRING_VALUE",
 *                       ApplyTo: {
 *                         FieldId: "STRING_VALUE", // required
 *                         Column: {
 *                           DataSetIdentifier: "<ColumnIdentifier>",
 *                           ColumnName: "<ColumnIdentifier>",
 *                         },
 *                       },
 *                     },
 *                   ],
 *                 },
 *                 ColorLabelOptions: {
 *                   Visibility: "HIDDEN" || "VISIBLE",
 *                   SortIconVisibility: "HIDDEN" || "VISIBLE",
 *                   AxisLabelOptions: [
 *                     {
 *                       FontConfiguration: {
 *                         FontSize: "<FontConfiguration>",
 *                         FontDecoration: "<FontConfiguration>",
 *                         FontColor: "<FontConfiguration>",
 *                         FontWeight: "<FontConfiguration>",
 *                         FontStyle: "<FontConfiguration>",
 *                       },
 *                       CustomLabel: "STRING_VALUE",
 *                       ApplyTo: {
 *                         FieldId: "STRING_VALUE", // required
 *                         Column: {
 *                           DataSetIdentifier: "<ColumnIdentifier>",
 *                           ColumnName: "<ColumnIdentifier>",
 *                         },
 *                       },
 *                     },
 *                   ],
 *                 },
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
 *                   Title: {
 *                     Visibility: "<LabelOptions>",
 *                     FontConfiguration: "<LabelOptions>",
 *                     CustomLabel: "<LabelOptions>",
 *                   },
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
 *                   LabelFontConfiguration: {
 *                     FontSize: "<FontConfiguration>",
 *                     FontDecoration: "<FontConfiguration>",
 *                     FontColor: "<FontConfiguration>",
 *                     FontWeight: "<FontConfiguration>",
 *                     FontStyle: "<FontConfiguration>",
 *                   },
 *                   LabelColor: "STRING_VALUE",
 *                   Overlap: "DISABLE_OVERLAP" || "ENABLE_OVERLAP",
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
 *                         },
 *                         ColumnTooltipItem: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           Label: "STRING_VALUE",
 *                           Visibility: "HIDDEN" || "VISIBLE",
 *                           Aggregation: {
 *                             NumericalAggregationFunction: {
 *                               SimpleNumericalAggregation: "<NumericalAggregationFunction>",
 *                               PercentileAggregation: "<NumericalAggregationFunction>",
 *                             },
 *                             CategoricalAggregationFunction: "COUNT" || "DISTINCT_COUNT",
 *                             DateAggregationFunction: "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX",
 *                           },
 *                         },
 *                       },
 *                     ],
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
 *                       {
 *                         DataSetIdentifier: "<ColumnIdentifier>",
 *                         ColumnName: "<ColumnIdentifier>",
 *                       },
 *                     ],
 *                     DrillDownFilters: [
 *                       {
 *                         NumericEqualityFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           Value: Number("double"), // required
 *                         },
 *                         CategoryFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           CategoryValues: [ // required
 *                             "STRING_VALUE",
 *                           ],
 *                         },
 *                         TimeRangeFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
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
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           Value: Number("double"), // required
 *                         },
 *                         CategoryFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           CategoryValues: [ // required
 *                             "STRING_VALUE",
 *                           ],
 *                         },
 *                         TimeRangeFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
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
 *                       {
 *                         DataSetIdentifier: "<ColumnIdentifier>",
 *                         ColumnName: "<ColumnIdentifier>",
 *                       },
 *                     ],
 *                     DrillDownFilters: [
 *                       {
 *                         NumericEqualityFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           Value: Number("double"), // required
 *                         },
 *                         CategoryFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           CategoryValues: [ // required
 *                             "STRING_VALUE",
 *                           ],
 *                         },
 *                         TimeRangeFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
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
 *             GeospatialMapVisual: {
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
 *               ChartConfiguration: {
 *                 FieldWells: {
 *                   GeospatialMapAggregatedFieldWells: {
 *                     Geospatial: [
 *                       {
 *                         NumericalDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             FormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CategoricalDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         DateDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           DateGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             DateTimeFormat: "STRING_VALUE",
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                       },
 *                     ],
 *                     Values: [
 *                       {
 *                         NumericalMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: {
 *                             SimpleNumericalAggregation: "<NumericalAggregationFunction>",
 *                             PercentileAggregation: "<NumericalAggregationFunction>",
 *                           },
 *                           FormatConfiguration: {
 *                             FormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CategoricalMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: "COUNT" || "DISTINCT_COUNT",
 *                           FormatConfiguration: {
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         DateMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX",
 *                           FormatConfiguration: {
 *                             DateTimeFormat: "STRING_VALUE",
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
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
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             FormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CategoricalDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         DateDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           DateGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             DateTimeFormat: "STRING_VALUE",
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                       },
 *                     ],
 *                   },
 *                 },
 *                 Legend: {
 *                   Visibility: "HIDDEN" || "VISIBLE",
 *                   Title: {
 *                     Visibility: "<LabelOptions>",
 *                     FontConfiguration: "<LabelOptions>",
 *                     CustomLabel: "<LabelOptions>",
 *                   },
 *                   Position: "AUTO" || "RIGHT" || "BOTTOM" || "TOP",
 *                   Width: "STRING_VALUE",
 *                   Height: "STRING_VALUE",
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
 *                         },
 *                         ColumnTooltipItem: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           Label: "STRING_VALUE",
 *                           Visibility: "HIDDEN" || "VISIBLE",
 *                           Aggregation: {
 *                             NumericalAggregationFunction: {
 *                               SimpleNumericalAggregation: "<NumericalAggregationFunction>",
 *                               PercentileAggregation: "<NumericalAggregationFunction>",
 *                             },
 *                             CategoricalAggregationFunction: "COUNT" || "DISTINCT_COUNT",
 *                             DateAggregationFunction: "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX",
 *                           },
 *                         },
 *                       },
 *                     ],
 *                   },
 *                 },
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
 *                 PointStyleOptions: {
 *                   SelectedPointStyle: "POINT" || "CLUSTER",
 *                   ClusterMarkerConfiguration: {
 *                     ClusterMarker: {
 *                       SimpleClusterMarker: {
 *                         Color: "STRING_VALUE",
 *                       },
 *                     },
 *                   },
 *                 },
 *                 VisualPalette: {
 *                   ChartColor: "STRING_VALUE",
 *                   ColorMap: [
 *                     {
 *                       Element: {
 *                         FieldId: "<DataPathValue>",
 *                         FieldValue: "<DataPathValue>",
 *                       },
 *                       Color: "STRING_VALUE", // required
 *                       TimeGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *                     },
 *                   ],
 *                 },
 *               },
 *               ColumnHierarchies: [
 *                 {
 *                   ExplicitHierarchy: {
 *                     HierarchyId: "STRING_VALUE", // required
 *                     Columns: [ // required
 *                       {
 *                         DataSetIdentifier: "<ColumnIdentifier>",
 *                         ColumnName: "<ColumnIdentifier>",
 *                       },
 *                     ],
 *                     DrillDownFilters: [
 *                       {
 *                         NumericEqualityFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           Value: Number("double"), // required
 *                         },
 *                         CategoryFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           CategoryValues: [ // required
 *                             "STRING_VALUE",
 *                           ],
 *                         },
 *                         TimeRangeFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
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
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           Value: Number("double"), // required
 *                         },
 *                         CategoryFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           CategoryValues: [ // required
 *                             "STRING_VALUE",
 *                           ],
 *                         },
 *                         TimeRangeFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
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
 *                       {
 *                         DataSetIdentifier: "<ColumnIdentifier>",
 *                         ColumnName: "<ColumnIdentifier>",
 *                       },
 *                     ],
 *                     DrillDownFilters: [
 *                       {
 *                         NumericEqualityFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           Value: Number("double"), // required
 *                         },
 *                         CategoryFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           CategoryValues: [ // required
 *                             "STRING_VALUE",
 *                           ],
 *                         },
 *                         TimeRangeFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           RangeMinimum: new Date("TIMESTAMP"), // required
 *                           RangeMaximum: new Date("TIMESTAMP"), // required
 *                           TimeGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND", // required
 *                         },
 *                       },
 *                     ],
 *                   },
 *                 },
 *               ],
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
 *                             },
 *                           },
 *                         ],
 *                       },
 *                     },
 *                   ],
 *                 },
 *               ],
 *             },
 *             FilledMapVisual: {
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
 *               ChartConfiguration: {
 *                 FieldWells: {
 *                   FilledMapAggregatedFieldWells: {
 *                     Geospatial: [
 *                       {
 *                         NumericalDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             FormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CategoricalDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         DateDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           DateGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             DateTimeFormat: "STRING_VALUE",
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                       },
 *                     ],
 *                     Values: [
 *                       {
 *                         NumericalMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: {
 *                             SimpleNumericalAggregation: "<NumericalAggregationFunction>",
 *                             PercentileAggregation: "<NumericalAggregationFunction>",
 *                           },
 *                           FormatConfiguration: {
 *                             FormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CategoricalMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: "COUNT" || "DISTINCT_COUNT",
 *                           FormatConfiguration: {
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         DateMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX",
 *                           FormatConfiguration: {
 *                             DateTimeFormat: "STRING_VALUE",
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CalculatedMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Expression: "STRING_VALUE", // required
 *                         },
 *                       },
 *                     ],
 *                   },
 *                 },
 *                 SortConfiguration: {
 *                   CategorySort: [
 *                     {
 *                       FieldSort: {
 *                         FieldId: "STRING_VALUE", // required
 *                         Direction: "ASC" || "DESC", // required
 *                       },
 *                       ColumnSort: {
 *                         SortBy: {
 *                           DataSetIdentifier: "<ColumnIdentifier>",
 *                           ColumnName: "<ColumnIdentifier>",
 *                         },
 *                         Direction: "ASC" || "DESC", // required
 *                         AggregationFunction: {
 *                           NumericalAggregationFunction: {
 *                             SimpleNumericalAggregation: "<NumericalAggregationFunction>",
 *                             PercentileAggregation: "<NumericalAggregationFunction>",
 *                           },
 *                           CategoricalAggregationFunction: "COUNT" || "DISTINCT_COUNT",
 *                           DateAggregationFunction: "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX",
 *                         },
 *                       },
 *                     },
 *                   ],
 *                 },
 *                 Legend: {
 *                   Visibility: "HIDDEN" || "VISIBLE",
 *                   Title: {
 *                     Visibility: "<LabelOptions>",
 *                     FontConfiguration: "<LabelOptions>",
 *                     CustomLabel: "<LabelOptions>",
 *                   },
 *                   Position: "AUTO" || "RIGHT" || "BOTTOM" || "TOP",
 *                   Width: "STRING_VALUE",
 *                   Height: "STRING_VALUE",
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
 *                         },
 *                         ColumnTooltipItem: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           Label: "STRING_VALUE",
 *                           Visibility: "HIDDEN" || "VISIBLE",
 *                           Aggregation: {
 *                             NumericalAggregationFunction: {
 *                               SimpleNumericalAggregation: "<NumericalAggregationFunction>",
 *                               PercentileAggregation: "<NumericalAggregationFunction>",
 *                             },
 *                             CategoricalAggregationFunction: "COUNT" || "DISTINCT_COUNT",
 *                             DateAggregationFunction: "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX",
 *                           },
 *                         },
 *                       },
 *                     ],
 *                   },
 *                 },
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
 *               },
 *               ConditionalFormatting: {
 *                 ConditionalFormattingOptions: [ // required
 *                   {
 *                     Shape: {
 *                       FieldId: "STRING_VALUE", // required
 *                       Format: {
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
 *                       },
 *                     },
 *                   },
 *                 ],
 *               },
 *               ColumnHierarchies: [
 *                 {
 *                   ExplicitHierarchy: {
 *                     HierarchyId: "STRING_VALUE", // required
 *                     Columns: [ // required
 *                       {
 *                         DataSetIdentifier: "<ColumnIdentifier>",
 *                         ColumnName: "<ColumnIdentifier>",
 *                       },
 *                     ],
 *                     DrillDownFilters: [
 *                       {
 *                         NumericEqualityFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           Value: Number("double"), // required
 *                         },
 *                         CategoryFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           CategoryValues: [ // required
 *                             "STRING_VALUE",
 *                           ],
 *                         },
 *                         TimeRangeFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
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
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           Value: Number("double"), // required
 *                         },
 *                         CategoryFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           CategoryValues: [ // required
 *                             "STRING_VALUE",
 *                           ],
 *                         },
 *                         TimeRangeFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
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
 *                       {
 *                         DataSetIdentifier: "<ColumnIdentifier>",
 *                         ColumnName: "<ColumnIdentifier>",
 *                       },
 *                     ],
 *                     DrillDownFilters: [
 *                       {
 *                         NumericEqualityFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           Value: Number("double"), // required
 *                         },
 *                         CategoryFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           CategoryValues: [ // required
 *                             "STRING_VALUE",
 *                           ],
 *                         },
 *                         TimeRangeFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           RangeMinimum: new Date("TIMESTAMP"), // required
 *                           RangeMaximum: new Date("TIMESTAMP"), // required
 *                           TimeGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND", // required
 *                         },
 *                       },
 *                     ],
 *                   },
 *                 },
 *               ],
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
 *                             },
 *                           },
 *                         ],
 *                       },
 *                     },
 *                   ],
 *                 },
 *               ],
 *             },
 *             FunnelChartVisual: {
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
 *               ChartConfiguration: {
 *                 FieldWells: {
 *                   FunnelChartAggregatedFieldWells: {
 *                     Category: [
 *                       {
 *                         NumericalDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             FormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CategoricalDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         DateDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           DateGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             DateTimeFormat: "STRING_VALUE",
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                       },
 *                     ],
 *                     Values: [
 *                       {
 *                         NumericalMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: {
 *                             SimpleNumericalAggregation: "<NumericalAggregationFunction>",
 *                             PercentileAggregation: "<NumericalAggregationFunction>",
 *                           },
 *                           FormatConfiguration: {
 *                             FormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CategoricalMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: "COUNT" || "DISTINCT_COUNT",
 *                           FormatConfiguration: {
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         DateMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX",
 *                           FormatConfiguration: {
 *                             DateTimeFormat: "STRING_VALUE",
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CalculatedMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Expression: "STRING_VALUE", // required
 *                         },
 *                       },
 *                     ],
 *                   },
 *                 },
 *                 SortConfiguration: {
 *                   CategorySort: [
 *                     {
 *                       FieldSort: {
 *                         FieldId: "STRING_VALUE", // required
 *                         Direction: "ASC" || "DESC", // required
 *                       },
 *                       ColumnSort: {
 *                         SortBy: {
 *                           DataSetIdentifier: "<ColumnIdentifier>",
 *                           ColumnName: "<ColumnIdentifier>",
 *                         },
 *                         Direction: "ASC" || "DESC", // required
 *                         AggregationFunction: {
 *                           NumericalAggregationFunction: {
 *                             SimpleNumericalAggregation: "<NumericalAggregationFunction>",
 *                             PercentileAggregation: "<NumericalAggregationFunction>",
 *                           },
 *                           CategoricalAggregationFunction: "COUNT" || "DISTINCT_COUNT",
 *                           DateAggregationFunction: "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX",
 *                         },
 *                       },
 *                     },
 *                   ],
 *                   CategoryItemsLimit: {
 *                     ItemsLimit: Number("long"),
 *                     OtherCategories: "INCLUDE" || "EXCLUDE",
 *                   },
 *                 },
 *                 CategoryLabelOptions: {
 *                   Visibility: "HIDDEN" || "VISIBLE",
 *                   SortIconVisibility: "HIDDEN" || "VISIBLE",
 *                   AxisLabelOptions: [
 *                     {
 *                       FontConfiguration: {
 *                         FontSize: "<FontConfiguration>",
 *                         FontDecoration: "<FontConfiguration>",
 *                         FontColor: "<FontConfiguration>",
 *                         FontWeight: "<FontConfiguration>",
 *                         FontStyle: "<FontConfiguration>",
 *                       },
 *                       CustomLabel: "STRING_VALUE",
 *                       ApplyTo: {
 *                         FieldId: "STRING_VALUE", // required
 *                         Column: {
 *                           DataSetIdentifier: "<ColumnIdentifier>",
 *                           ColumnName: "<ColumnIdentifier>",
 *                         },
 *                       },
 *                     },
 *                   ],
 *                 },
 *                 ValueLabelOptions: {
 *                   Visibility: "HIDDEN" || "VISIBLE",
 *                   SortIconVisibility: "HIDDEN" || "VISIBLE",
 *                   AxisLabelOptions: [
 *                     {
 *                       FontConfiguration: {
 *                         FontSize: "<FontConfiguration>",
 *                         FontDecoration: "<FontConfiguration>",
 *                         FontColor: "<FontConfiguration>",
 *                         FontWeight: "<FontConfiguration>",
 *                         FontStyle: "<FontConfiguration>",
 *                       },
 *                       CustomLabel: "STRING_VALUE",
 *                       ApplyTo: {
 *                         FieldId: "STRING_VALUE", // required
 *                         Column: {
 *                           DataSetIdentifier: "<ColumnIdentifier>",
 *                           ColumnName: "<ColumnIdentifier>",
 *                         },
 *                       },
 *                     },
 *                   ],
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
 *                         },
 *                         ColumnTooltipItem: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           Label: "STRING_VALUE",
 *                           Visibility: "HIDDEN" || "VISIBLE",
 *                           Aggregation: {
 *                             NumericalAggregationFunction: {
 *                               SimpleNumericalAggregation: "<NumericalAggregationFunction>",
 *                               PercentileAggregation: "<NumericalAggregationFunction>",
 *                             },
 *                             CategoricalAggregationFunction: "COUNT" || "DISTINCT_COUNT",
 *                             DateAggregationFunction: "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX",
 *                           },
 *                         },
 *                       },
 *                     ],
 *                   },
 *                 },
 *                 DataLabelOptions: {
 *                   Visibility: "HIDDEN" || "VISIBLE",
 *                   CategoryLabelVisibility: "HIDDEN" || "VISIBLE",
 *                   MeasureLabelVisibility: "HIDDEN" || "VISIBLE",
 *                   Position: "INSIDE" || "OUTSIDE" || "LEFT" || "TOP" || "BOTTOM" || "RIGHT",
 *                   LabelFontConfiguration: {
 *                     FontSize: "<FontConfiguration>",
 *                     FontDecoration: "<FontConfiguration>",
 *                     FontColor: "<FontConfiguration>",
 *                     FontWeight: "<FontConfiguration>",
 *                     FontStyle: "<FontConfiguration>",
 *                   },
 *                   LabelColor: "STRING_VALUE",
 *                   MeasureDataLabelStyle: "VALUE_ONLY" || "PERCENTAGE_BY_FIRST_STAGE" || "PERCENTAGE_BY_PREVIOUS_STAGE" || "VALUE_AND_PERCENTAGE_BY_FIRST_STAGE" || "VALUE_AND_PERCENTAGE_BY_PREVIOUS_STAGE",
 *                 },
 *                 VisualPalette: {
 *                   ChartColor: "STRING_VALUE",
 *                   ColorMap: [
 *                     {
 *                       Element: {
 *                         FieldId: "<DataPathValue>",
 *                         FieldValue: "<DataPathValue>",
 *                       },
 *                       Color: "STRING_VALUE", // required
 *                       TimeGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *                     },
 *                   ],
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
 *                       {
 *                         DataSetIdentifier: "<ColumnIdentifier>",
 *                         ColumnName: "<ColumnIdentifier>",
 *                       },
 *                     ],
 *                     DrillDownFilters: [
 *                       {
 *                         NumericEqualityFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           Value: Number("double"), // required
 *                         },
 *                         CategoryFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           CategoryValues: [ // required
 *                             "STRING_VALUE",
 *                           ],
 *                         },
 *                         TimeRangeFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
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
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           Value: Number("double"), // required
 *                         },
 *                         CategoryFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           CategoryValues: [ // required
 *                             "STRING_VALUE",
 *                           ],
 *                         },
 *                         TimeRangeFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
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
 *                       {
 *                         DataSetIdentifier: "<ColumnIdentifier>",
 *                         ColumnName: "<ColumnIdentifier>",
 *                       },
 *                     ],
 *                     DrillDownFilters: [
 *                       {
 *                         NumericEqualityFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           Value: Number("double"), // required
 *                         },
 *                         CategoryFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           CategoryValues: [ // required
 *                             "STRING_VALUE",
 *                           ],
 *                         },
 *                         TimeRangeFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
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
 *             ScatterPlotVisual: {
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
 *               ChartConfiguration: {
 *                 FieldWells: {
 *                   ScatterPlotCategoricallyAggregatedFieldWells: {
 *                     XAxis: [
 *                       {
 *                         NumericalMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: {
 *                             SimpleNumericalAggregation: "<NumericalAggregationFunction>",
 *                             PercentileAggregation: "<NumericalAggregationFunction>",
 *                           },
 *                           FormatConfiguration: {
 *                             FormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CategoricalMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: "COUNT" || "DISTINCT_COUNT",
 *                           FormatConfiguration: {
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         DateMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX",
 *                           FormatConfiguration: {
 *                             DateTimeFormat: "STRING_VALUE",
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CalculatedMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Expression: "STRING_VALUE", // required
 *                         },
 *                       },
 *                     ],
 *                     YAxis: [
 *                       {
 *                         NumericalMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: {
 *                             SimpleNumericalAggregation: "<NumericalAggregationFunction>",
 *                             PercentileAggregation: "<NumericalAggregationFunction>",
 *                           },
 *                           FormatConfiguration: {
 *                             FormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CategoricalMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: "COUNT" || "DISTINCT_COUNT",
 *                           FormatConfiguration: {
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         DateMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX",
 *                           FormatConfiguration: {
 *                             DateTimeFormat: "STRING_VALUE",
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CalculatedMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Expression: "STRING_VALUE", // required
 *                         },
 *                       },
 *                     ],
 *                     Category: [
 *                       {
 *                         NumericalDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             FormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CategoricalDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         DateDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           DateGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             DateTimeFormat: "STRING_VALUE",
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                       },
 *                     ],
 *                     Size: [
 *                       {
 *                         NumericalMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: {
 *                             SimpleNumericalAggregation: "<NumericalAggregationFunction>",
 *                             PercentileAggregation: "<NumericalAggregationFunction>",
 *                           },
 *                           FormatConfiguration: {
 *                             FormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CategoricalMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: "COUNT" || "DISTINCT_COUNT",
 *                           FormatConfiguration: {
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         DateMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX",
 *                           FormatConfiguration: {
 *                             DateTimeFormat: "STRING_VALUE",
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CalculatedMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Expression: "STRING_VALUE", // required
 *                         },
 *                       },
 *                     ],
 *                   },
 *                   ScatterPlotUnaggregatedFieldWells: {
 *                     XAxis: [
 *                       {
 *                         NumericalDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             FormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CategoricalDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         DateDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           DateGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             DateTimeFormat: "STRING_VALUE",
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                       },
 *                     ],
 *                     YAxis: [
 *                       {
 *                         NumericalDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             FormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CategoricalDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         DateDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           DateGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             DateTimeFormat: "STRING_VALUE",
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                       },
 *                     ],
 *                     Size: [
 *                       {
 *                         NumericalMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: {
 *                             SimpleNumericalAggregation: "<NumericalAggregationFunction>",
 *                             PercentileAggregation: "<NumericalAggregationFunction>",
 *                           },
 *                           FormatConfiguration: {
 *                             FormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CategoricalMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: "COUNT" || "DISTINCT_COUNT",
 *                           FormatConfiguration: {
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         DateMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX",
 *                           FormatConfiguration: {
 *                             DateTimeFormat: "STRING_VALUE",
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CalculatedMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Expression: "STRING_VALUE", // required
 *                         },
 *                       },
 *                     ],
 *                   },
 *                 },
 *                 XAxisLabelOptions: {
 *                   Visibility: "HIDDEN" || "VISIBLE",
 *                   SortIconVisibility: "HIDDEN" || "VISIBLE",
 *                   AxisLabelOptions: [
 *                     {
 *                       FontConfiguration: {
 *                         FontSize: "<FontConfiguration>",
 *                         FontDecoration: "<FontConfiguration>",
 *                         FontColor: "<FontConfiguration>",
 *                         FontWeight: "<FontConfiguration>",
 *                         FontStyle: "<FontConfiguration>",
 *                       },
 *                       CustomLabel: "STRING_VALUE",
 *                       ApplyTo: {
 *                         FieldId: "STRING_VALUE", // required
 *                         Column: {
 *                           DataSetIdentifier: "<ColumnIdentifier>",
 *                           ColumnName: "<ColumnIdentifier>",
 *                         },
 *                       },
 *                     },
 *                   ],
 *                 },
 *                 XAxisDisplayOptions: {
 *                   TickLabelOptions: {
 *                     LabelOptions: {
 *                       Visibility: "<LabelOptions>",
 *                       FontConfiguration: "<LabelOptions>",
 *                       CustomLabel: "<LabelOptions>",
 *                     },
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
 *                 YAxisLabelOptions: {
 *                   Visibility: "HIDDEN" || "VISIBLE",
 *                   SortIconVisibility: "HIDDEN" || "VISIBLE",
 *                   AxisLabelOptions: [
 *                     {
 *                       FontConfiguration: {
 *                         FontSize: "<FontConfiguration>",
 *                         FontDecoration: "<FontConfiguration>",
 *                         FontColor: "<FontConfiguration>",
 *                         FontWeight: "<FontConfiguration>",
 *                         FontStyle: "<FontConfiguration>",
 *                       },
 *                       CustomLabel: "STRING_VALUE",
 *                       ApplyTo: {
 *                         FieldId: "STRING_VALUE", // required
 *                         Column: {
 *                           DataSetIdentifier: "<ColumnIdentifier>",
 *                           ColumnName: "<ColumnIdentifier>",
 *                         },
 *                       },
 *                     },
 *                   ],
 *                 },
 *                 YAxisDisplayOptions: {
 *                   TickLabelOptions: {
 *                     LabelOptions: {
 *                       Visibility: "<LabelOptions>",
 *                       FontConfiguration: "<LabelOptions>",
 *                       CustomLabel: "<LabelOptions>",
 *                     },
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
 *                 Legend: {
 *                   Visibility: "HIDDEN" || "VISIBLE",
 *                   Title: {
 *                     Visibility: "<LabelOptions>",
 *                     FontConfiguration: "<LabelOptions>",
 *                     CustomLabel: "<LabelOptions>",
 *                   },
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
 *                   LabelFontConfiguration: {
 *                     FontSize: "<FontConfiguration>",
 *                     FontDecoration: "<FontConfiguration>",
 *                     FontColor: "<FontConfiguration>",
 *                     FontWeight: "<FontConfiguration>",
 *                     FontStyle: "<FontConfiguration>",
 *                   },
 *                   LabelColor: "STRING_VALUE",
 *                   Overlap: "DISABLE_OVERLAP" || "ENABLE_OVERLAP",
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
 *                         },
 *                         ColumnTooltipItem: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           Label: "STRING_VALUE",
 *                           Visibility: "HIDDEN" || "VISIBLE",
 *                           Aggregation: {
 *                             NumericalAggregationFunction: {
 *                               SimpleNumericalAggregation: "<NumericalAggregationFunction>",
 *                               PercentileAggregation: "<NumericalAggregationFunction>",
 *                             },
 *                             CategoricalAggregationFunction: "COUNT" || "DISTINCT_COUNT",
 *                             DateAggregationFunction: "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX",
 *                           },
 *                         },
 *                       },
 *                     ],
 *                   },
 *                 },
 *                 VisualPalette: {
 *                   ChartColor: "STRING_VALUE",
 *                   ColorMap: [
 *                     {
 *                       Element: {
 *                         FieldId: "<DataPathValue>",
 *                         FieldValue: "<DataPathValue>",
 *                       },
 *                       Color: "STRING_VALUE", // required
 *                       TimeGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *                     },
 *                   ],
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
 *                       {
 *                         DataSetIdentifier: "<ColumnIdentifier>",
 *                         ColumnName: "<ColumnIdentifier>",
 *                       },
 *                     ],
 *                     DrillDownFilters: [
 *                       {
 *                         NumericEqualityFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           Value: Number("double"), // required
 *                         },
 *                         CategoryFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           CategoryValues: [ // required
 *                             "STRING_VALUE",
 *                           ],
 *                         },
 *                         TimeRangeFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
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
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           Value: Number("double"), // required
 *                         },
 *                         CategoryFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           CategoryValues: [ // required
 *                             "STRING_VALUE",
 *                           ],
 *                         },
 *                         TimeRangeFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
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
 *                       {
 *                         DataSetIdentifier: "<ColumnIdentifier>",
 *                         ColumnName: "<ColumnIdentifier>",
 *                       },
 *                     ],
 *                     DrillDownFilters: [
 *                       {
 *                         NumericEqualityFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           Value: Number("double"), // required
 *                         },
 *                         CategoryFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           CategoryValues: [ // required
 *                             "STRING_VALUE",
 *                           ],
 *                         },
 *                         TimeRangeFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
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
 *             ComboChartVisual: {
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
 *               ChartConfiguration: {
 *                 FieldWells: {
 *                   ComboChartAggregatedFieldWells: {
 *                     Category: [
 *                       {
 *                         NumericalDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             FormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CategoricalDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         DateDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           DateGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             DateTimeFormat: "STRING_VALUE",
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                       },
 *                     ],
 *                     BarValues: [
 *                       {
 *                         NumericalMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: {
 *                             SimpleNumericalAggregation: "<NumericalAggregationFunction>",
 *                             PercentileAggregation: "<NumericalAggregationFunction>",
 *                           },
 *                           FormatConfiguration: {
 *                             FormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CategoricalMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: "COUNT" || "DISTINCT_COUNT",
 *                           FormatConfiguration: {
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         DateMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX",
 *                           FormatConfiguration: {
 *                             DateTimeFormat: "STRING_VALUE",
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
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
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             FormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CategoricalDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         DateDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           DateGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             DateTimeFormat: "STRING_VALUE",
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                       },
 *                     ],
 *                     LineValues: [
 *                       {
 *                         NumericalMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: {
 *                             SimpleNumericalAggregation: "<NumericalAggregationFunction>",
 *                             PercentileAggregation: "<NumericalAggregationFunction>",
 *                           },
 *                           FormatConfiguration: {
 *                             FormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CategoricalMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: "COUNT" || "DISTINCT_COUNT",
 *                           FormatConfiguration: {
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         DateMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX",
 *                           FormatConfiguration: {
 *                             DateTimeFormat: "STRING_VALUE",
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CalculatedMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Expression: "STRING_VALUE", // required
 *                         },
 *                       },
 *                     ],
 *                   },
 *                 },
 *                 SortConfiguration: {
 *                   CategorySort: [
 *                     {
 *                       FieldSort: {
 *                         FieldId: "STRING_VALUE", // required
 *                         Direction: "ASC" || "DESC", // required
 *                       },
 *                       ColumnSort: {
 *                         SortBy: {
 *                           DataSetIdentifier: "<ColumnIdentifier>",
 *                           ColumnName: "<ColumnIdentifier>",
 *                         },
 *                         Direction: "ASC" || "DESC", // required
 *                         AggregationFunction: {
 *                           NumericalAggregationFunction: {
 *                             SimpleNumericalAggregation: "<NumericalAggregationFunction>",
 *                             PercentileAggregation: "<NumericalAggregationFunction>",
 *                           },
 *                           CategoricalAggregationFunction: "COUNT" || "DISTINCT_COUNT",
 *                           DateAggregationFunction: "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX",
 *                         },
 *                       },
 *                     },
 *                   ],
 *                   CategoryItemsLimit: {
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
 *                         SortBy: {
 *                           DataSetIdentifier: "<ColumnIdentifier>",
 *                           ColumnName: "<ColumnIdentifier>",
 *                         },
 *                         Direction: "ASC" || "DESC", // required
 *                         AggregationFunction: {
 *                           NumericalAggregationFunction: {
 *                             SimpleNumericalAggregation: "<NumericalAggregationFunction>",
 *                             PercentileAggregation: "<NumericalAggregationFunction>",
 *                           },
 *                           CategoricalAggregationFunction: "COUNT" || "DISTINCT_COUNT",
 *                           DateAggregationFunction: "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX",
 *                         },
 *                       },
 *                     },
 *                   ],
 *                   ColorItemsLimit: {
 *                     ItemsLimit: Number("long"),
 *                     OtherCategories: "INCLUDE" || "EXCLUDE",
 *                   },
 *                 },
 *                 BarsArrangement: "CLUSTERED" || "STACKED" || "STACKED_PERCENT",
 *                 CategoryAxis: {
 *                   TickLabelOptions: {
 *                     LabelOptions: {
 *                       Visibility: "<LabelOptions>",
 *                       FontConfiguration: "<LabelOptions>",
 *                       CustomLabel: "<LabelOptions>",
 *                     },
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
 *                 CategoryLabelOptions: {
 *                   Visibility: "HIDDEN" || "VISIBLE",
 *                   SortIconVisibility: "HIDDEN" || "VISIBLE",
 *                   AxisLabelOptions: [
 *                     {
 *                       FontConfiguration: {
 *                         FontSize: "<FontConfiguration>",
 *                         FontDecoration: "<FontConfiguration>",
 *                         FontColor: "<FontConfiguration>",
 *                         FontWeight: "<FontConfiguration>",
 *                         FontStyle: "<FontConfiguration>",
 *                       },
 *                       CustomLabel: "STRING_VALUE",
 *                       ApplyTo: {
 *                         FieldId: "STRING_VALUE", // required
 *                         Column: {
 *                           DataSetIdentifier: "<ColumnIdentifier>",
 *                           ColumnName: "<ColumnIdentifier>",
 *                         },
 *                       },
 *                     },
 *                   ],
 *                 },
 *                 PrimaryYAxisDisplayOptions: {
 *                   TickLabelOptions: {
 *                     LabelOptions: {
 *                       Visibility: "<LabelOptions>",
 *                       FontConfiguration: "<LabelOptions>",
 *                       CustomLabel: "<LabelOptions>",
 *                     },
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
 *                 PrimaryYAxisLabelOptions: {
 *                   Visibility: "HIDDEN" || "VISIBLE",
 *                   SortIconVisibility: "HIDDEN" || "VISIBLE",
 *                   AxisLabelOptions: [
 *                     {
 *                       FontConfiguration: {
 *                         FontSize: "<FontConfiguration>",
 *                         FontDecoration: "<FontConfiguration>",
 *                         FontColor: "<FontConfiguration>",
 *                         FontWeight: "<FontConfiguration>",
 *                         FontStyle: "<FontConfiguration>",
 *                       },
 *                       CustomLabel: "STRING_VALUE",
 *                       ApplyTo: {
 *                         FieldId: "STRING_VALUE", // required
 *                         Column: {
 *                           DataSetIdentifier: "<ColumnIdentifier>",
 *                           ColumnName: "<ColumnIdentifier>",
 *                         },
 *                       },
 *                     },
 *                   ],
 *                 },
 *                 SecondaryYAxisDisplayOptions: {
 *                   TickLabelOptions: {
 *                     LabelOptions: {
 *                       Visibility: "<LabelOptions>",
 *                       FontConfiguration: "<LabelOptions>",
 *                       CustomLabel: "<LabelOptions>",
 *                     },
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
 *                 SecondaryYAxisLabelOptions: {
 *                   Visibility: "HIDDEN" || "VISIBLE",
 *                   SortIconVisibility: "HIDDEN" || "VISIBLE",
 *                   AxisLabelOptions: [
 *                     {
 *                       FontConfiguration: {
 *                         FontSize: "<FontConfiguration>",
 *                         FontDecoration: "<FontConfiguration>",
 *                         FontColor: "<FontConfiguration>",
 *                         FontWeight: "<FontConfiguration>",
 *                         FontStyle: "<FontConfiguration>",
 *                       },
 *                       CustomLabel: "STRING_VALUE",
 *                       ApplyTo: {
 *                         FieldId: "STRING_VALUE", // required
 *                         Column: {
 *                           DataSetIdentifier: "<ColumnIdentifier>",
 *                           ColumnName: "<ColumnIdentifier>",
 *                         },
 *                       },
 *                     },
 *                   ],
 *                 },
 *                 ColorLabelOptions: {
 *                   Visibility: "HIDDEN" || "VISIBLE",
 *                   SortIconVisibility: "HIDDEN" || "VISIBLE",
 *                   AxisLabelOptions: [
 *                     {
 *                       FontConfiguration: {
 *                         FontSize: "<FontConfiguration>",
 *                         FontDecoration: "<FontConfiguration>",
 *                         FontColor: "<FontConfiguration>",
 *                         FontWeight: "<FontConfiguration>",
 *                         FontStyle: "<FontConfiguration>",
 *                       },
 *                       CustomLabel: "STRING_VALUE",
 *                       ApplyTo: {
 *                         FieldId: "STRING_VALUE", // required
 *                         Column: {
 *                           DataSetIdentifier: "<ColumnIdentifier>",
 *                           ColumnName: "<ColumnIdentifier>",
 *                         },
 *                       },
 *                     },
 *                   ],
 *                 },
 *                 Legend: {
 *                   Visibility: "HIDDEN" || "VISIBLE",
 *                   Title: {
 *                     Visibility: "<LabelOptions>",
 *                     FontConfiguration: "<LabelOptions>",
 *                     CustomLabel: "<LabelOptions>",
 *                   },
 *                   Position: "AUTO" || "RIGHT" || "BOTTOM" || "TOP",
 *                   Width: "STRING_VALUE",
 *                   Height: "STRING_VALUE",
 *                 },
 *                 BarDataLabels: {
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
 *                   LabelFontConfiguration: {
 *                     FontSize: "<FontConfiguration>",
 *                     FontDecoration: "<FontConfiguration>",
 *                     FontColor: "<FontConfiguration>",
 *                     FontWeight: "<FontConfiguration>",
 *                     FontStyle: "<FontConfiguration>",
 *                   },
 *                   LabelColor: "STRING_VALUE",
 *                   Overlap: "DISABLE_OVERLAP" || "ENABLE_OVERLAP",
 *                 },
 *                 LineDataLabels: {
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
 *                   LabelFontConfiguration: {
 *                     FontSize: "<FontConfiguration>",
 *                     FontDecoration: "<FontConfiguration>",
 *                     FontColor: "<FontConfiguration>",
 *                     FontWeight: "<FontConfiguration>",
 *                     FontStyle: "<FontConfiguration>",
 *                   },
 *                   LabelColor: "STRING_VALUE",
 *                   Overlap: "DISABLE_OVERLAP" || "ENABLE_OVERLAP",
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
 *                         },
 *                         ColumnTooltipItem: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           Label: "STRING_VALUE",
 *                           Visibility: "HIDDEN" || "VISIBLE",
 *                           Aggregation: {
 *                             NumericalAggregationFunction: {
 *                               SimpleNumericalAggregation: "<NumericalAggregationFunction>",
 *                               PercentileAggregation: "<NumericalAggregationFunction>",
 *                             },
 *                             CategoricalAggregationFunction: "COUNT" || "DISTINCT_COUNT",
 *                             DateAggregationFunction: "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX",
 *                           },
 *                         },
 *                       },
 *                     ],
 *                   },
 *                 },
 *                 ReferenceLines: [
 *                   {
 *                     Status: "ENABLED" || "DISABLED",
 *                     DataConfiguration: {
 *                       StaticConfiguration: {
 *                         Value: Number("double"), // required
 *                       },
 *                       DynamicConfiguration: {
 *                         Column: {
 *                           DataSetIdentifier: "<ColumnIdentifier>",
 *                           ColumnName: "<ColumnIdentifier>",
 *                         },
 *                         MeasureAggregationFunction: {
 *                           NumericalAggregationFunction: {
 *                             SimpleNumericalAggregation: "<NumericalAggregationFunction>",
 *                             PercentileAggregation: "<NumericalAggregationFunction>",
 *                           },
 *                           CategoricalAggregationFunction: "COUNT" || "DISTINCT_COUNT",
 *                           DateAggregationFunction: "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX",
 *                         },
 *                         Calculation: {
 *                           SimpleNumericalAggregation: "<NumericalAggregationFunction>",
 *                           PercentileAggregation: "<NumericalAggregationFunction>",
 *                         },
 *                       },
 *                       AxisBinding: "PRIMARY_YAXIS" || "SECONDARY_YAXIS",
 *                     },
 *                     StyleConfiguration: {
 *                       Pattern: "SOLID" || "DASHED" || "DOTTED",
 *                       Color: "STRING_VALUE",
 *                     },
 *                     LabelConfiguration: {
 *                       ValueLabelConfiguration: {
 *                         RelativePosition: "BEFORE_CUSTOM_LABEL" || "AFTER_CUSTOM_LABEL",
 *                         FormatConfiguration: {
 *                           NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                           CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                           PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                         },
 *                       },
 *                       CustomLabelConfiguration: {
 *                         CustomLabel: "STRING_VALUE", // required
 *                       },
 *                       FontConfiguration: {
 *                         FontSize: "<FontConfiguration>",
 *                         FontDecoration: "<FontConfiguration>",
 *                         FontColor: "<FontConfiguration>",
 *                         FontWeight: "<FontConfiguration>",
 *                         FontStyle: "<FontConfiguration>",
 *                       },
 *                       FontColor: "STRING_VALUE",
 *                       HorizontalPosition: "LEFT" || "CENTER" || "RIGHT",
 *                       VerticalPosition: "ABOVE" || "BELOW",
 *                     },
 *                   },
 *                 ],
 *                 VisualPalette: {
 *                   ChartColor: "STRING_VALUE",
 *                   ColorMap: [
 *                     {
 *                       Element: {
 *                         FieldId: "<DataPathValue>",
 *                         FieldValue: "<DataPathValue>",
 *                       },
 *                       Color: "STRING_VALUE", // required
 *                       TimeGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *                     },
 *                   ],
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
 *                       {
 *                         DataSetIdentifier: "<ColumnIdentifier>",
 *                         ColumnName: "<ColumnIdentifier>",
 *                       },
 *                     ],
 *                     DrillDownFilters: [
 *                       {
 *                         NumericEqualityFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           Value: Number("double"), // required
 *                         },
 *                         CategoryFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           CategoryValues: [ // required
 *                             "STRING_VALUE",
 *                           ],
 *                         },
 *                         TimeRangeFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
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
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           Value: Number("double"), // required
 *                         },
 *                         CategoryFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           CategoryValues: [ // required
 *                             "STRING_VALUE",
 *                           ],
 *                         },
 *                         TimeRangeFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
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
 *                       {
 *                         DataSetIdentifier: "<ColumnIdentifier>",
 *                         ColumnName: "<ColumnIdentifier>",
 *                       },
 *                     ],
 *                     DrillDownFilters: [
 *                       {
 *                         NumericEqualityFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           Value: Number("double"), // required
 *                         },
 *                         CategoryFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           CategoryValues: [ // required
 *                             "STRING_VALUE",
 *                           ],
 *                         },
 *                         TimeRangeFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
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
 *             BoxPlotVisual: {
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
 *               ChartConfiguration: {
 *                 FieldWells: {
 *                   BoxPlotAggregatedFieldWells: {
 *                     GroupBy: [
 *                       {
 *                         NumericalDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             FormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CategoricalDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         DateDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           DateGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             DateTimeFormat: "STRING_VALUE",
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                       },
 *                     ],
 *                     Values: [
 *                       {
 *                         NumericalMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: {
 *                             SimpleNumericalAggregation: "<NumericalAggregationFunction>",
 *                             PercentileAggregation: "<NumericalAggregationFunction>",
 *                           },
 *                           FormatConfiguration: {
 *                             FormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CategoricalMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: "COUNT" || "DISTINCT_COUNT",
 *                           FormatConfiguration: {
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         DateMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX",
 *                           FormatConfiguration: {
 *                             DateTimeFormat: "STRING_VALUE",
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CalculatedMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Expression: "STRING_VALUE", // required
 *                         },
 *                       },
 *                     ],
 *                   },
 *                 },
 *                 SortConfiguration: {
 *                   CategorySort: [
 *                     {
 *                       FieldSort: {
 *                         FieldId: "STRING_VALUE", // required
 *                         Direction: "ASC" || "DESC", // required
 *                       },
 *                       ColumnSort: {
 *                         SortBy: {
 *                           DataSetIdentifier: "<ColumnIdentifier>",
 *                           ColumnName: "<ColumnIdentifier>",
 *                         },
 *                         Direction: "ASC" || "DESC", // required
 *                         AggregationFunction: {
 *                           NumericalAggregationFunction: {
 *                             SimpleNumericalAggregation: "<NumericalAggregationFunction>",
 *                             PercentileAggregation: "<NumericalAggregationFunction>",
 *                           },
 *                           CategoricalAggregationFunction: "COUNT" || "DISTINCT_COUNT",
 *                           DateAggregationFunction: "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX",
 *                         },
 *                       },
 *                     },
 *                   ],
 *                   PaginationConfiguration: {
 *                     PageSize: Number("long"), // required
 *                     PageNumber: Number("long"), // required
 *                   },
 *                 },
 *                 BoxPlotOptions: {
 *                   StyleOptions: {
 *                     FillStyle: "SOLID" || "TRANSPARENT",
 *                   },
 *                   OutlierVisibility: "HIDDEN" || "VISIBLE",
 *                   AllDataPointsVisibility: "HIDDEN" || "VISIBLE",
 *                 },
 *                 CategoryAxis: {
 *                   TickLabelOptions: {
 *                     LabelOptions: {
 *                       Visibility: "<LabelOptions>",
 *                       FontConfiguration: "<LabelOptions>",
 *                       CustomLabel: "<LabelOptions>",
 *                     },
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
 *                 CategoryLabelOptions: {
 *                   Visibility: "HIDDEN" || "VISIBLE",
 *                   SortIconVisibility: "HIDDEN" || "VISIBLE",
 *                   AxisLabelOptions: [
 *                     {
 *                       FontConfiguration: {
 *                         FontSize: "<FontConfiguration>",
 *                         FontDecoration: "<FontConfiguration>",
 *                         FontColor: "<FontConfiguration>",
 *                         FontWeight: "<FontConfiguration>",
 *                         FontStyle: "<FontConfiguration>",
 *                       },
 *                       CustomLabel: "STRING_VALUE",
 *                       ApplyTo: {
 *                         FieldId: "STRING_VALUE", // required
 *                         Column: {
 *                           DataSetIdentifier: "<ColumnIdentifier>",
 *                           ColumnName: "<ColumnIdentifier>",
 *                         },
 *                       },
 *                     },
 *                   ],
 *                 },
 *                 PrimaryYAxisDisplayOptions: {
 *                   TickLabelOptions: {
 *                     LabelOptions: {
 *                       Visibility: "<LabelOptions>",
 *                       FontConfiguration: "<LabelOptions>",
 *                       CustomLabel: "<LabelOptions>",
 *                     },
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
 *                 PrimaryYAxisLabelOptions: {
 *                   Visibility: "HIDDEN" || "VISIBLE",
 *                   SortIconVisibility: "HIDDEN" || "VISIBLE",
 *                   AxisLabelOptions: [
 *                     {
 *                       FontConfiguration: {
 *                         FontSize: "<FontConfiguration>",
 *                         FontDecoration: "<FontConfiguration>",
 *                         FontColor: "<FontConfiguration>",
 *                         FontWeight: "<FontConfiguration>",
 *                         FontStyle: "<FontConfiguration>",
 *                       },
 *                       CustomLabel: "STRING_VALUE",
 *                       ApplyTo: {
 *                         FieldId: "STRING_VALUE", // required
 *                         Column: {
 *                           DataSetIdentifier: "<ColumnIdentifier>",
 *                           ColumnName: "<ColumnIdentifier>",
 *                         },
 *                       },
 *                     },
 *                   ],
 *                 },
 *                 Legend: {
 *                   Visibility: "HIDDEN" || "VISIBLE",
 *                   Title: {
 *                     Visibility: "<LabelOptions>",
 *                     FontConfiguration: "<LabelOptions>",
 *                     CustomLabel: "<LabelOptions>",
 *                   },
 *                   Position: "AUTO" || "RIGHT" || "BOTTOM" || "TOP",
 *                   Width: "STRING_VALUE",
 *                   Height: "STRING_VALUE",
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
 *                         },
 *                         ColumnTooltipItem: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           Label: "STRING_VALUE",
 *                           Visibility: "HIDDEN" || "VISIBLE",
 *                           Aggregation: {
 *                             NumericalAggregationFunction: {
 *                               SimpleNumericalAggregation: "<NumericalAggregationFunction>",
 *                               PercentileAggregation: "<NumericalAggregationFunction>",
 *                             },
 *                             CategoricalAggregationFunction: "COUNT" || "DISTINCT_COUNT",
 *                             DateAggregationFunction: "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX",
 *                           },
 *                         },
 *                       },
 *                     ],
 *                   },
 *                 },
 *                 ReferenceLines: [
 *                   {
 *                     Status: "ENABLED" || "DISABLED",
 *                     DataConfiguration: {
 *                       StaticConfiguration: {
 *                         Value: Number("double"), // required
 *                       },
 *                       DynamicConfiguration: {
 *                         Column: {
 *                           DataSetIdentifier: "<ColumnIdentifier>",
 *                           ColumnName: "<ColumnIdentifier>",
 *                         },
 *                         MeasureAggregationFunction: {
 *                           NumericalAggregationFunction: {
 *                             SimpleNumericalAggregation: "<NumericalAggregationFunction>",
 *                             PercentileAggregation: "<NumericalAggregationFunction>",
 *                           },
 *                           CategoricalAggregationFunction: "COUNT" || "DISTINCT_COUNT",
 *                           DateAggregationFunction: "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX",
 *                         },
 *                         Calculation: {
 *                           SimpleNumericalAggregation: "<NumericalAggregationFunction>",
 *                           PercentileAggregation: "<NumericalAggregationFunction>",
 *                         },
 *                       },
 *                       AxisBinding: "PRIMARY_YAXIS" || "SECONDARY_YAXIS",
 *                     },
 *                     StyleConfiguration: {
 *                       Pattern: "SOLID" || "DASHED" || "DOTTED",
 *                       Color: "STRING_VALUE",
 *                     },
 *                     LabelConfiguration: {
 *                       ValueLabelConfiguration: {
 *                         RelativePosition: "BEFORE_CUSTOM_LABEL" || "AFTER_CUSTOM_LABEL",
 *                         FormatConfiguration: {
 *                           NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                           CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                           PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                         },
 *                       },
 *                       CustomLabelConfiguration: {
 *                         CustomLabel: "STRING_VALUE", // required
 *                       },
 *                       FontConfiguration: {
 *                         FontSize: "<FontConfiguration>",
 *                         FontDecoration: "<FontConfiguration>",
 *                         FontColor: "<FontConfiguration>",
 *                         FontWeight: "<FontConfiguration>",
 *                         FontStyle: "<FontConfiguration>",
 *                       },
 *                       FontColor: "STRING_VALUE",
 *                       HorizontalPosition: "LEFT" || "CENTER" || "RIGHT",
 *                       VerticalPosition: "ABOVE" || "BELOW",
 *                     },
 *                   },
 *                 ],
 *                 VisualPalette: {
 *                   ChartColor: "STRING_VALUE",
 *                   ColorMap: [
 *                     {
 *                       Element: {
 *                         FieldId: "<DataPathValue>",
 *                         FieldValue: "<DataPathValue>",
 *                       },
 *                       Color: "STRING_VALUE", // required
 *                       TimeGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *                     },
 *                   ],
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
 *                       {
 *                         DataSetIdentifier: "<ColumnIdentifier>",
 *                         ColumnName: "<ColumnIdentifier>",
 *                       },
 *                     ],
 *                     DrillDownFilters: [
 *                       {
 *                         NumericEqualityFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           Value: Number("double"), // required
 *                         },
 *                         CategoryFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           CategoryValues: [ // required
 *                             "STRING_VALUE",
 *                           ],
 *                         },
 *                         TimeRangeFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
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
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           Value: Number("double"), // required
 *                         },
 *                         CategoryFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           CategoryValues: [ // required
 *                             "STRING_VALUE",
 *                           ],
 *                         },
 *                         TimeRangeFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
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
 *                       {
 *                         DataSetIdentifier: "<ColumnIdentifier>",
 *                         ColumnName: "<ColumnIdentifier>",
 *                       },
 *                     ],
 *                     DrillDownFilters: [
 *                       {
 *                         NumericEqualityFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           Value: Number("double"), // required
 *                         },
 *                         CategoryFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           CategoryValues: [ // required
 *                             "STRING_VALUE",
 *                           ],
 *                         },
 *                         TimeRangeFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
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
 *             WaterfallVisual: {
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
 *               ChartConfiguration: {
 *                 FieldWells: {
 *                   WaterfallChartAggregatedFieldWells: {
 *                     Categories: [
 *                       {
 *                         NumericalDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             FormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CategoricalDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         DateDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           DateGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             DateTimeFormat: "STRING_VALUE",
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                       },
 *                     ],
 *                     Values: [
 *                       {
 *                         NumericalMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: {
 *                             SimpleNumericalAggregation: "<NumericalAggregationFunction>",
 *                             PercentileAggregation: "<NumericalAggregationFunction>",
 *                           },
 *                           FormatConfiguration: {
 *                             FormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CategoricalMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: "COUNT" || "DISTINCT_COUNT",
 *                           FormatConfiguration: {
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         DateMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX",
 *                           FormatConfiguration: {
 *                             DateTimeFormat: "STRING_VALUE",
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CalculatedMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Expression: "STRING_VALUE", // required
 *                         },
 *                       },
 *                     ],
 *                     Breakdowns: [
 *                       {
 *                         NumericalDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             FormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CategoricalDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         DateDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           DateGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             DateTimeFormat: "STRING_VALUE",
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                       },
 *                     ],
 *                   },
 *                 },
 *                 SortConfiguration: {
 *                   CategorySort: [
 *                     {
 *                       FieldSort: {
 *                         FieldId: "STRING_VALUE", // required
 *                         Direction: "ASC" || "DESC", // required
 *                       },
 *                       ColumnSort: {
 *                         SortBy: {
 *                           DataSetIdentifier: "<ColumnIdentifier>",
 *                           ColumnName: "<ColumnIdentifier>",
 *                         },
 *                         Direction: "ASC" || "DESC", // required
 *                         AggregationFunction: {
 *                           NumericalAggregationFunction: {
 *                             SimpleNumericalAggregation: "<NumericalAggregationFunction>",
 *                             PercentileAggregation: "<NumericalAggregationFunction>",
 *                           },
 *                           CategoricalAggregationFunction: "COUNT" || "DISTINCT_COUNT",
 *                           DateAggregationFunction: "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX",
 *                         },
 *                       },
 *                     },
 *                   ],
 *                   BreakdownItemsLimit: {
 *                     ItemsLimit: Number("long"),
 *                     OtherCategories: "INCLUDE" || "EXCLUDE",
 *                   },
 *                 },
 *                 WaterfallChartOptions: {
 *                   TotalBarLabel: "STRING_VALUE",
 *                 },
 *                 CategoryAxisLabelOptions: {
 *                   Visibility: "HIDDEN" || "VISIBLE",
 *                   SortIconVisibility: "HIDDEN" || "VISIBLE",
 *                   AxisLabelOptions: [
 *                     {
 *                       FontConfiguration: {
 *                         FontSize: "<FontConfiguration>",
 *                         FontDecoration: "<FontConfiguration>",
 *                         FontColor: "<FontConfiguration>",
 *                         FontWeight: "<FontConfiguration>",
 *                         FontStyle: "<FontConfiguration>",
 *                       },
 *                       CustomLabel: "STRING_VALUE",
 *                       ApplyTo: {
 *                         FieldId: "STRING_VALUE", // required
 *                         Column: {
 *                           DataSetIdentifier: "<ColumnIdentifier>",
 *                           ColumnName: "<ColumnIdentifier>",
 *                         },
 *                       },
 *                     },
 *                   ],
 *                 },
 *                 CategoryAxisDisplayOptions: {
 *                   TickLabelOptions: {
 *                     LabelOptions: {
 *                       Visibility: "<LabelOptions>",
 *                       FontConfiguration: "<LabelOptions>",
 *                       CustomLabel: "<LabelOptions>",
 *                     },
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
 *                 PrimaryYAxisLabelOptions: {
 *                   Visibility: "HIDDEN" || "VISIBLE",
 *                   SortIconVisibility: "HIDDEN" || "VISIBLE",
 *                   AxisLabelOptions: [
 *                     {
 *                       FontConfiguration: {
 *                         FontSize: "<FontConfiguration>",
 *                         FontDecoration: "<FontConfiguration>",
 *                         FontColor: "<FontConfiguration>",
 *                         FontWeight: "<FontConfiguration>",
 *                         FontStyle: "<FontConfiguration>",
 *                       },
 *                       CustomLabel: "STRING_VALUE",
 *                       ApplyTo: {
 *                         FieldId: "STRING_VALUE", // required
 *                         Column: {
 *                           DataSetIdentifier: "<ColumnIdentifier>",
 *                           ColumnName: "<ColumnIdentifier>",
 *                         },
 *                       },
 *                     },
 *                   ],
 *                 },
 *                 PrimaryYAxisDisplayOptions: {
 *                   TickLabelOptions: {
 *                     LabelOptions: {
 *                       Visibility: "<LabelOptions>",
 *                       FontConfiguration: "<LabelOptions>",
 *                       CustomLabel: "<LabelOptions>",
 *                     },
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
 *                 Legend: {
 *                   Visibility: "HIDDEN" || "VISIBLE",
 *                   Title: {
 *                     Visibility: "<LabelOptions>",
 *                     FontConfiguration: "<LabelOptions>",
 *                     CustomLabel: "<LabelOptions>",
 *                   },
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
 *                   LabelFontConfiguration: {
 *                     FontSize: "<FontConfiguration>",
 *                     FontDecoration: "<FontConfiguration>",
 *                     FontColor: "<FontConfiguration>",
 *                     FontWeight: "<FontConfiguration>",
 *                     FontStyle: "<FontConfiguration>",
 *                   },
 *                   LabelColor: "STRING_VALUE",
 *                   Overlap: "DISABLE_OVERLAP" || "ENABLE_OVERLAP",
 *                 },
 *                 VisualPalette: {
 *                   ChartColor: "STRING_VALUE",
 *                   ColorMap: [
 *                     {
 *                       Element: {
 *                         FieldId: "<DataPathValue>",
 *                         FieldValue: "<DataPathValue>",
 *                       },
 *                       Color: "STRING_VALUE", // required
 *                       TimeGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *                     },
 *                   ],
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
 *                       {
 *                         DataSetIdentifier: "<ColumnIdentifier>",
 *                         ColumnName: "<ColumnIdentifier>",
 *                       },
 *                     ],
 *                     DrillDownFilters: [
 *                       {
 *                         NumericEqualityFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           Value: Number("double"), // required
 *                         },
 *                         CategoryFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           CategoryValues: [ // required
 *                             "STRING_VALUE",
 *                           ],
 *                         },
 *                         TimeRangeFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
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
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           Value: Number("double"), // required
 *                         },
 *                         CategoryFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           CategoryValues: [ // required
 *                             "STRING_VALUE",
 *                           ],
 *                         },
 *                         TimeRangeFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
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
 *                       {
 *                         DataSetIdentifier: "<ColumnIdentifier>",
 *                         ColumnName: "<ColumnIdentifier>",
 *                       },
 *                     ],
 *                     DrillDownFilters: [
 *                       {
 *                         NumericEqualityFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           Value: Number("double"), // required
 *                         },
 *                         CategoryFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           CategoryValues: [ // required
 *                             "STRING_VALUE",
 *                           ],
 *                         },
 *                         TimeRangeFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
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
 *             HistogramVisual: {
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
 *               ChartConfiguration: {
 *                 FieldWells: {
 *                   HistogramAggregatedFieldWells: {
 *                     Values: [
 *                       {
 *                         NumericalMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: {
 *                             SimpleNumericalAggregation: "<NumericalAggregationFunction>",
 *                             PercentileAggregation: "<NumericalAggregationFunction>",
 *                           },
 *                           FormatConfiguration: {
 *                             FormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CategoricalMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: "COUNT" || "DISTINCT_COUNT",
 *                           FormatConfiguration: {
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         DateMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX",
 *                           FormatConfiguration: {
 *                             DateTimeFormat: "STRING_VALUE",
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CalculatedMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Expression: "STRING_VALUE", // required
 *                         },
 *                       },
 *                     ],
 *                   },
 *                 },
 *                 XAxisDisplayOptions: {
 *                   TickLabelOptions: {
 *                     LabelOptions: {
 *                       Visibility: "<LabelOptions>",
 *                       FontConfiguration: "<LabelOptions>",
 *                       CustomLabel: "<LabelOptions>",
 *                     },
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
 *                 XAxisLabelOptions: {
 *                   Visibility: "HIDDEN" || "VISIBLE",
 *                   SortIconVisibility: "HIDDEN" || "VISIBLE",
 *                   AxisLabelOptions: [
 *                     {
 *                       FontConfiguration: {
 *                         FontSize: "<FontConfiguration>",
 *                         FontDecoration: "<FontConfiguration>",
 *                         FontColor: "<FontConfiguration>",
 *                         FontWeight: "<FontConfiguration>",
 *                         FontStyle: "<FontConfiguration>",
 *                       },
 *                       CustomLabel: "STRING_VALUE",
 *                       ApplyTo: {
 *                         FieldId: "STRING_VALUE", // required
 *                         Column: {
 *                           DataSetIdentifier: "<ColumnIdentifier>",
 *                           ColumnName: "<ColumnIdentifier>",
 *                         },
 *                       },
 *                     },
 *                   ],
 *                 },
 *                 YAxisDisplayOptions: {
 *                   TickLabelOptions: {
 *                     LabelOptions: {
 *                       Visibility: "<LabelOptions>",
 *                       FontConfiguration: "<LabelOptions>",
 *                       CustomLabel: "<LabelOptions>",
 *                     },
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
 *                 BinOptions: {
 *                   SelectedBinType: "BIN_COUNT" || "BIN_WIDTH",
 *                   BinCount: {
 *                     Value: Number("int"),
 *                   },
 *                   BinWidth: {
 *                     Value: Number("double"),
 *                     BinCountLimit: Number("long"),
 *                   },
 *                   StartValue: Number("double"),
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
 *                   LabelFontConfiguration: {
 *                     FontSize: "<FontConfiguration>",
 *                     FontDecoration: "<FontConfiguration>",
 *                     FontColor: "<FontConfiguration>",
 *                     FontWeight: "<FontConfiguration>",
 *                     FontStyle: "<FontConfiguration>",
 *                   },
 *                   LabelColor: "STRING_VALUE",
 *                   Overlap: "DISABLE_OVERLAP" || "ENABLE_OVERLAP",
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
 *                         },
 *                         ColumnTooltipItem: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           Label: "STRING_VALUE",
 *                           Visibility: "HIDDEN" || "VISIBLE",
 *                           Aggregation: {
 *                             NumericalAggregationFunction: {
 *                               SimpleNumericalAggregation: "<NumericalAggregationFunction>",
 *                               PercentileAggregation: "<NumericalAggregationFunction>",
 *                             },
 *                             CategoricalAggregationFunction: "COUNT" || "DISTINCT_COUNT",
 *                             DateAggregationFunction: "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX",
 *                           },
 *                         },
 *                       },
 *                     ],
 *                   },
 *                 },
 *                 VisualPalette: {
 *                   ChartColor: "STRING_VALUE",
 *                   ColorMap: [
 *                     {
 *                       Element: {
 *                         FieldId: "<DataPathValue>",
 *                         FieldValue: "<DataPathValue>",
 *                       },
 *                       Color: "STRING_VALUE", // required
 *                       TimeGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *                     },
 *                   ],
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
 *                             },
 *                           },
 *                         ],
 *                       },
 *                     },
 *                   ],
 *                 },
 *               ],
 *             },
 *             WordCloudVisual: {
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
 *               ChartConfiguration: {
 *                 FieldWells: {
 *                   WordCloudAggregatedFieldWells: {
 *                     GroupBy: [
 *                       {
 *                         NumericalDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             FormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CategoricalDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         DateDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           DateGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             DateTimeFormat: "STRING_VALUE",
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                       },
 *                     ],
 *                     Size: [
 *                       {
 *                         NumericalMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: {
 *                             SimpleNumericalAggregation: "<NumericalAggregationFunction>",
 *                             PercentileAggregation: "<NumericalAggregationFunction>",
 *                           },
 *                           FormatConfiguration: {
 *                             FormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CategoricalMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: "COUNT" || "DISTINCT_COUNT",
 *                           FormatConfiguration: {
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         DateMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX",
 *                           FormatConfiguration: {
 *                             DateTimeFormat: "STRING_VALUE",
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CalculatedMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Expression: "STRING_VALUE", // required
 *                         },
 *                       },
 *                     ],
 *                   },
 *                 },
 *                 SortConfiguration: {
 *                   CategoryItemsLimit: {
 *                     ItemsLimit: Number("long"),
 *                     OtherCategories: "INCLUDE" || "EXCLUDE",
 *                   },
 *                   CategorySort: [
 *                     {
 *                       FieldSort: {
 *                         FieldId: "STRING_VALUE", // required
 *                         Direction: "ASC" || "DESC", // required
 *                       },
 *                       ColumnSort: {
 *                         SortBy: {
 *                           DataSetIdentifier: "<ColumnIdentifier>",
 *                           ColumnName: "<ColumnIdentifier>",
 *                         },
 *                         Direction: "ASC" || "DESC", // required
 *                         AggregationFunction: {
 *                           NumericalAggregationFunction: {
 *                             SimpleNumericalAggregation: "<NumericalAggregationFunction>",
 *                             PercentileAggregation: "<NumericalAggregationFunction>",
 *                           },
 *                           CategoricalAggregationFunction: "COUNT" || "DISTINCT_COUNT",
 *                           DateAggregationFunction: "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX",
 *                         },
 *                       },
 *                     },
 *                   ],
 *                 },
 *                 CategoryLabelOptions: {
 *                   Visibility: "HIDDEN" || "VISIBLE",
 *                   SortIconVisibility: "HIDDEN" || "VISIBLE",
 *                   AxisLabelOptions: [
 *                     {
 *                       FontConfiguration: {
 *                         FontSize: "<FontConfiguration>",
 *                         FontDecoration: "<FontConfiguration>",
 *                         FontColor: "<FontConfiguration>",
 *                         FontWeight: "<FontConfiguration>",
 *                         FontStyle: "<FontConfiguration>",
 *                       },
 *                       CustomLabel: "STRING_VALUE",
 *                       ApplyTo: {
 *                         FieldId: "STRING_VALUE", // required
 *                         Column: {
 *                           DataSetIdentifier: "<ColumnIdentifier>",
 *                           ColumnName: "<ColumnIdentifier>",
 *                         },
 *                       },
 *                     },
 *                   ],
 *                 },
 *                 WordCloudOptions: {
 *                   WordOrientation: "HORIZONTAL" || "HORIZONTAL_AND_VERTICAL",
 *                   WordScaling: "EMPHASIZE" || "NORMAL",
 *                   CloudLayout: "FLUID" || "NORMAL",
 *                   WordCasing: "LOWER_CASE" || "EXISTING_CASE",
 *                   WordPadding: "NONE" || "SMALL" || "MEDIUM" || "LARGE",
 *                   MaximumStringLength: Number("int"),
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
 *                       {
 *                         DataSetIdentifier: "<ColumnIdentifier>",
 *                         ColumnName: "<ColumnIdentifier>",
 *                       },
 *                     ],
 *                     DrillDownFilters: [
 *                       {
 *                         NumericEqualityFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           Value: Number("double"), // required
 *                         },
 *                         CategoryFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           CategoryValues: [ // required
 *                             "STRING_VALUE",
 *                           ],
 *                         },
 *                         TimeRangeFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
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
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           Value: Number("double"), // required
 *                         },
 *                         CategoryFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           CategoryValues: [ // required
 *                             "STRING_VALUE",
 *                           ],
 *                         },
 *                         TimeRangeFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
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
 *                       {
 *                         DataSetIdentifier: "<ColumnIdentifier>",
 *                         ColumnName: "<ColumnIdentifier>",
 *                       },
 *                     ],
 *                     DrillDownFilters: [
 *                       {
 *                         NumericEqualityFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           Value: Number("double"), // required
 *                         },
 *                         CategoryFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           CategoryValues: [ // required
 *                             "STRING_VALUE",
 *                           ],
 *                         },
 *                         TimeRangeFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
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
 *             InsightVisual: {
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
 *               InsightConfiguration: {
 *                 Computations: [
 *                   {
 *                     TopBottomRanked: {
 *                       ComputationId: "STRING_VALUE", // required
 *                       Name: "STRING_VALUE",
 *                       Category: {
 *                         NumericalDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             FormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CategoricalDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         DateDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           DateGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             DateTimeFormat: "STRING_VALUE",
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                       },
 *                       Value: {
 *                         NumericalMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: {
 *                             SimpleNumericalAggregation: "<NumericalAggregationFunction>",
 *                             PercentileAggregation: "<NumericalAggregationFunction>",
 *                           },
 *                           FormatConfiguration: {
 *                             FormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CategoricalMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: "COUNT" || "DISTINCT_COUNT",
 *                           FormatConfiguration: {
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         DateMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX",
 *                           FormatConfiguration: {
 *                             DateTimeFormat: "STRING_VALUE",
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CalculatedMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Expression: "STRING_VALUE", // required
 *                         },
 *                       },
 *                       ResultSize: Number("int"),
 *                       Type: "TOP" || "BOTTOM", // required
 *                     },
 *                     TopBottomMovers: {
 *                       ComputationId: "STRING_VALUE", // required
 *                       Name: "STRING_VALUE",
 *                       Time: {
 *                         NumericalDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             FormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CategoricalDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         DateDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           DateGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             DateTimeFormat: "STRING_VALUE",
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                       },
 *                       Category: {
 *                         NumericalDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             FormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CategoricalDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         DateDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           DateGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             DateTimeFormat: "STRING_VALUE",
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                       },
 *                       Value: {
 *                         NumericalMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: {
 *                             SimpleNumericalAggregation: "<NumericalAggregationFunction>",
 *                             PercentileAggregation: "<NumericalAggregationFunction>",
 *                           },
 *                           FormatConfiguration: {
 *                             FormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CategoricalMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: "COUNT" || "DISTINCT_COUNT",
 *                           FormatConfiguration: {
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         DateMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX",
 *                           FormatConfiguration: {
 *                             DateTimeFormat: "STRING_VALUE",
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CalculatedMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Expression: "STRING_VALUE", // required
 *                         },
 *                       },
 *                       MoverSize: Number("int"),
 *                       SortOrder: "PERCENT_DIFFERENCE" || "ABSOLUTE_DIFFERENCE",
 *                       Type: "TOP" || "BOTTOM", // required
 *                     },
 *                     TotalAggregation: {
 *                       ComputationId: "STRING_VALUE", // required
 *                       Name: "STRING_VALUE",
 *                       Value: {
 *                         NumericalMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: {
 *                             SimpleNumericalAggregation: "<NumericalAggregationFunction>",
 *                             PercentileAggregation: "<NumericalAggregationFunction>",
 *                           },
 *                           FormatConfiguration: {
 *                             FormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CategoricalMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: "COUNT" || "DISTINCT_COUNT",
 *                           FormatConfiguration: {
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         DateMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX",
 *                           FormatConfiguration: {
 *                             DateTimeFormat: "STRING_VALUE",
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CalculatedMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Expression: "STRING_VALUE", // required
 *                         },
 *                       },
 *                     },
 *                     MaximumMinimum: {
 *                       ComputationId: "STRING_VALUE", // required
 *                       Name: "STRING_VALUE",
 *                       Time: {
 *                         NumericalDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             FormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CategoricalDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         DateDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           DateGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             DateTimeFormat: "STRING_VALUE",
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                       },
 *                       Value: {
 *                         NumericalMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: {
 *                             SimpleNumericalAggregation: "<NumericalAggregationFunction>",
 *                             PercentileAggregation: "<NumericalAggregationFunction>",
 *                           },
 *                           FormatConfiguration: {
 *                             FormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CategoricalMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: "COUNT" || "DISTINCT_COUNT",
 *                           FormatConfiguration: {
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         DateMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX",
 *                           FormatConfiguration: {
 *                             DateTimeFormat: "STRING_VALUE",
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CalculatedMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Expression: "STRING_VALUE", // required
 *                         },
 *                       },
 *                       Type: "MAXIMUM" || "MINIMUM", // required
 *                     },
 *                     MetricComparison: {
 *                       ComputationId: "STRING_VALUE", // required
 *                       Name: "STRING_VALUE",
 *                       Time: {
 *                         NumericalDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             FormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CategoricalDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         DateDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           DateGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             DateTimeFormat: "STRING_VALUE",
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                       },
 *                       FromValue: {
 *                         NumericalMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: {
 *                             SimpleNumericalAggregation: "<NumericalAggregationFunction>",
 *                             PercentileAggregation: "<NumericalAggregationFunction>",
 *                           },
 *                           FormatConfiguration: {
 *                             FormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CategoricalMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: "COUNT" || "DISTINCT_COUNT",
 *                           FormatConfiguration: {
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         DateMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX",
 *                           FormatConfiguration: {
 *                             DateTimeFormat: "STRING_VALUE",
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CalculatedMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Expression: "STRING_VALUE", // required
 *                         },
 *                       },
 *                       TargetValue: {
 *                         NumericalMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: {
 *                             SimpleNumericalAggregation: "<NumericalAggregationFunction>",
 *                             PercentileAggregation: "<NumericalAggregationFunction>",
 *                           },
 *                           FormatConfiguration: {
 *                             FormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CategoricalMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: "COUNT" || "DISTINCT_COUNT",
 *                           FormatConfiguration: {
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         DateMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX",
 *                           FormatConfiguration: {
 *                             DateTimeFormat: "STRING_VALUE",
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CalculatedMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Expression: "STRING_VALUE", // required
 *                         },
 *                       },
 *                     },
 *                     PeriodOverPeriod: {
 *                       ComputationId: "STRING_VALUE", // required
 *                       Name: "STRING_VALUE",
 *                       Time: {
 *                         NumericalDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             FormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CategoricalDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         DateDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           DateGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             DateTimeFormat: "STRING_VALUE",
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                       },
 *                       Value: {
 *                         NumericalMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: {
 *                             SimpleNumericalAggregation: "<NumericalAggregationFunction>",
 *                             PercentileAggregation: "<NumericalAggregationFunction>",
 *                           },
 *                           FormatConfiguration: {
 *                             FormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CategoricalMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: "COUNT" || "DISTINCT_COUNT",
 *                           FormatConfiguration: {
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         DateMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX",
 *                           FormatConfiguration: {
 *                             DateTimeFormat: "STRING_VALUE",
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CalculatedMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Expression: "STRING_VALUE", // required
 *                         },
 *                       },
 *                     },
 *                     PeriodToDate: {
 *                       ComputationId: "STRING_VALUE", // required
 *                       Name: "STRING_VALUE",
 *                       Time: {
 *                         NumericalDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             FormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CategoricalDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         DateDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           DateGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             DateTimeFormat: "STRING_VALUE",
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                       },
 *                       Value: {
 *                         NumericalMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: {
 *                             SimpleNumericalAggregation: "<NumericalAggregationFunction>",
 *                             PercentileAggregation: "<NumericalAggregationFunction>",
 *                           },
 *                           FormatConfiguration: {
 *                             FormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CategoricalMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: "COUNT" || "DISTINCT_COUNT",
 *                           FormatConfiguration: {
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         DateMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX",
 *                           FormatConfiguration: {
 *                             DateTimeFormat: "STRING_VALUE",
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CalculatedMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Expression: "STRING_VALUE", // required
 *                         },
 *                       },
 *                       PeriodTimeGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *                     },
 *                     GrowthRate: {
 *                       ComputationId: "STRING_VALUE", // required
 *                       Name: "STRING_VALUE",
 *                       Time: {
 *                         NumericalDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             FormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CategoricalDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         DateDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           DateGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             DateTimeFormat: "STRING_VALUE",
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                       },
 *                       Value: {
 *                         NumericalMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: {
 *                             SimpleNumericalAggregation: "<NumericalAggregationFunction>",
 *                             PercentileAggregation: "<NumericalAggregationFunction>",
 *                           },
 *                           FormatConfiguration: {
 *                             FormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CategoricalMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: "COUNT" || "DISTINCT_COUNT",
 *                           FormatConfiguration: {
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         DateMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX",
 *                           FormatConfiguration: {
 *                             DateTimeFormat: "STRING_VALUE",
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CalculatedMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Expression: "STRING_VALUE", // required
 *                         },
 *                       },
 *                       PeriodSize: Number("int"),
 *                     },
 *                     UniqueValues: {
 *                       ComputationId: "STRING_VALUE", // required
 *                       Name: "STRING_VALUE",
 *                       Category: {
 *                         NumericalDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             FormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CategoricalDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         DateDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           DateGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             DateTimeFormat: "STRING_VALUE",
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                       },
 *                     },
 *                     Forecast: {
 *                       ComputationId: "STRING_VALUE", // required
 *                       Name: "STRING_VALUE",
 *                       Time: {
 *                         NumericalDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             FormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CategoricalDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         DateDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           DateGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             DateTimeFormat: "STRING_VALUE",
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                       },
 *                       Value: {
 *                         NumericalMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: {
 *                             SimpleNumericalAggregation: "<NumericalAggregationFunction>",
 *                             PercentileAggregation: "<NumericalAggregationFunction>",
 *                           },
 *                           FormatConfiguration: {
 *                             FormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CategoricalMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: "COUNT" || "DISTINCT_COUNT",
 *                           FormatConfiguration: {
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         DateMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX",
 *                           FormatConfiguration: {
 *                             DateTimeFormat: "STRING_VALUE",
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CalculatedMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Expression: "STRING_VALUE", // required
 *                         },
 *                       },
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
 *                 CustomNarrative: {
 *                   Narrative: "STRING_VALUE", // required
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
 *                             },
 *                           },
 *                         ],
 *                       },
 *                     },
 *                   ],
 *                 },
 *               ],
 *               DataSetIdentifier: "STRING_VALUE", // required
 *             },
 *             SankeyDiagramVisual: {
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
 *               ChartConfiguration: {
 *                 FieldWells: {
 *                   SankeyDiagramAggregatedFieldWells: {
 *                     Source: [
 *                       {
 *                         NumericalDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             FormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CategoricalDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         DateDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           DateGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             DateTimeFormat: "STRING_VALUE",
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                       },
 *                     ],
 *                     Destination: [
 *                       {
 *                         NumericalDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             FormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CategoricalDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         DateDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           DateGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             DateTimeFormat: "STRING_VALUE",
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                       },
 *                     ],
 *                     Weight: [
 *                       {
 *                         NumericalMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: {
 *                             SimpleNumericalAggregation: "<NumericalAggregationFunction>",
 *                             PercentileAggregation: "<NumericalAggregationFunction>",
 *                           },
 *                           FormatConfiguration: {
 *                             FormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CategoricalMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: "COUNT" || "DISTINCT_COUNT",
 *                           FormatConfiguration: {
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         DateMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX",
 *                           FormatConfiguration: {
 *                             DateTimeFormat: "STRING_VALUE",
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CalculatedMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Expression: "STRING_VALUE", // required
 *                         },
 *                       },
 *                     ],
 *                   },
 *                 },
 *                 SortConfiguration: {
 *                   WeightSort: [
 *                     {
 *                       FieldSort: {
 *                         FieldId: "STRING_VALUE", // required
 *                         Direction: "ASC" || "DESC", // required
 *                       },
 *                       ColumnSort: {
 *                         SortBy: {
 *                           DataSetIdentifier: "<ColumnIdentifier>",
 *                           ColumnName: "<ColumnIdentifier>",
 *                         },
 *                         Direction: "ASC" || "DESC", // required
 *                         AggregationFunction: {
 *                           NumericalAggregationFunction: {
 *                             SimpleNumericalAggregation: "<NumericalAggregationFunction>",
 *                             PercentileAggregation: "<NumericalAggregationFunction>",
 *                           },
 *                           CategoricalAggregationFunction: "COUNT" || "DISTINCT_COUNT",
 *                           DateAggregationFunction: "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX",
 *                         },
 *                       },
 *                     },
 *                   ],
 *                   SourceItemsLimit: {
 *                     ItemsLimit: Number("long"),
 *                     OtherCategories: "INCLUDE" || "EXCLUDE",
 *                   },
 *                   DestinationItemsLimit: {
 *                     ItemsLimit: Number("long"),
 *                     OtherCategories: "INCLUDE" || "EXCLUDE",
 *                   },
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
 *                   LabelFontConfiguration: {
 *                     FontSize: "<FontConfiguration>",
 *                     FontDecoration: "<FontConfiguration>",
 *                     FontColor: "<FontConfiguration>",
 *                     FontWeight: "<FontConfiguration>",
 *                     FontStyle: "<FontConfiguration>",
 *                   },
 *                   LabelColor: "STRING_VALUE",
 *                   Overlap: "DISABLE_OVERLAP" || "ENABLE_OVERLAP",
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
 *                             },
 *                           },
 *                         ],
 *                       },
 *                     },
 *                   ],
 *                 },
 *               ],
 *             },
 *             CustomContentVisual: {
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
 *               ChartConfiguration: {
 *                 ContentUrl: "STRING_VALUE",
 *                 ContentType: "IMAGE" || "OTHER_EMBEDDED_CONTENT",
 *                 ImageScaling: "FIT_TO_HEIGHT" || "FIT_TO_WIDTH" || "DO_NOT_SCALE" || "SCALE_TO_VISUAL",
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
 *                             },
 *                           },
 *                         ],
 *                       },
 *                     },
 *                   ],
 *                 },
 *               ],
 *               DataSetIdentifier: "STRING_VALUE", // required
 *             },
 *             EmptyVisual: {
 *               VisualId: "STRING_VALUE", // required
 *               DataSetIdentifier: "STRING_VALUE", // required
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
 *                             },
 *                           },
 *                         ],
 *                       },
 *                     },
 *                   ],
 *                 },
 *               ],
 *             },
 *             RadarChartVisual: {
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
 *               ChartConfiguration: {
 *                 FieldWells: {
 *                   RadarChartAggregatedFieldWells: {
 *                     Category: [
 *                       {
 *                         NumericalDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             FormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CategoricalDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         DateDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           DateGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             DateTimeFormat: "STRING_VALUE",
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                       },
 *                     ],
 *                     Color: [
 *                       {
 *                         NumericalDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             FormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CategoricalDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         DateDimensionField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           DateGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *                           HierarchyId: "STRING_VALUE",
 *                           FormatConfiguration: {
 *                             DateTimeFormat: "STRING_VALUE",
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                       },
 *                     ],
 *                     Values: [
 *                       {
 *                         NumericalMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: {
 *                             SimpleNumericalAggregation: "<NumericalAggregationFunction>",
 *                             PercentileAggregation: "<NumericalAggregationFunction>",
 *                           },
 *                           FormatConfiguration: {
 *                             FormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CategoricalMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: "COUNT" || "DISTINCT_COUNT",
 *                           FormatConfiguration: {
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         DateMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           AggregationFunction: "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX",
 *                           FormatConfiguration: {
 *                             DateTimeFormat: "STRING_VALUE",
 *                             NullValueFormatConfiguration: {
 *                               NullString: "<NullValueFormatConfiguration>",
 *                             },
 *                             NumericFormatConfiguration: {
 *                               NumberDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               CurrencyDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                               PercentageDisplayFormatConfiguration: "<NumericFormatConfiguration>",
 *                             },
 *                           },
 *                         },
 *                         CalculatedMeasureField: {
 *                           FieldId: "STRING_VALUE", // required
 *                           Expression: "STRING_VALUE", // required
 *                         },
 *                       },
 *                     ],
 *                   },
 *                 },
 *                 SortConfiguration: {
 *                   CategorySort: [
 *                     {
 *                       FieldSort: {
 *                         FieldId: "STRING_VALUE", // required
 *                         Direction: "ASC" || "DESC", // required
 *                       },
 *                       ColumnSort: {
 *                         SortBy: {
 *                           DataSetIdentifier: "<ColumnIdentifier>",
 *                           ColumnName: "<ColumnIdentifier>",
 *                         },
 *                         Direction: "ASC" || "DESC", // required
 *                         AggregationFunction: {
 *                           NumericalAggregationFunction: {
 *                             SimpleNumericalAggregation: "<NumericalAggregationFunction>",
 *                             PercentileAggregation: "<NumericalAggregationFunction>",
 *                           },
 *                           CategoricalAggregationFunction: "COUNT" || "DISTINCT_COUNT",
 *                           DateAggregationFunction: "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX",
 *                         },
 *                       },
 *                     },
 *                   ],
 *                   CategoryItemsLimit: {
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
 *                         SortBy: {
 *                           DataSetIdentifier: "<ColumnIdentifier>",
 *                           ColumnName: "<ColumnIdentifier>",
 *                         },
 *                         Direction: "ASC" || "DESC", // required
 *                         AggregationFunction: {
 *                           NumericalAggregationFunction: {
 *                             SimpleNumericalAggregation: "<NumericalAggregationFunction>",
 *                             PercentileAggregation: "<NumericalAggregationFunction>",
 *                           },
 *                           CategoricalAggregationFunction: "COUNT" || "DISTINCT_COUNT",
 *                           DateAggregationFunction: "COUNT" || "DISTINCT_COUNT" || "MIN" || "MAX",
 *                         },
 *                       },
 *                     },
 *                   ],
 *                   ColorItemsLimit: {
 *                     ItemsLimit: Number("long"),
 *                     OtherCategories: "INCLUDE" || "EXCLUDE",
 *                   },
 *                 },
 *                 Shape: "CIRCLE" || "POLYGON",
 *                 BaseSeriesSettings: {
 *                   AreaStyleSettings: {
 *                     Visibility: "HIDDEN" || "VISIBLE",
 *                   },
 *                 },
 *                 StartAngle: Number("double"),
 *                 VisualPalette: {
 *                   ChartColor: "STRING_VALUE",
 *                   ColorMap: [
 *                     {
 *                       Element: {
 *                         FieldId: "<DataPathValue>",
 *                         FieldValue: "<DataPathValue>",
 *                       },
 *                       Color: "STRING_VALUE", // required
 *                       TimeGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *                     },
 *                   ],
 *                 },
 *                 AlternateBandColorsVisibility: "HIDDEN" || "VISIBLE",
 *                 AlternateBandEvenColor: "STRING_VALUE",
 *                 AlternateBandOddColor: "STRING_VALUE",
 *                 CategoryAxis: {
 *                   TickLabelOptions: {
 *                     LabelOptions: {
 *                       Visibility: "<LabelOptions>",
 *                       FontConfiguration: "<LabelOptions>",
 *                       CustomLabel: "<LabelOptions>",
 *                     },
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
 *                 CategoryLabelOptions: {
 *                   Visibility: "HIDDEN" || "VISIBLE",
 *                   SortIconVisibility: "HIDDEN" || "VISIBLE",
 *                   AxisLabelOptions: [
 *                     {
 *                       FontConfiguration: {
 *                         FontSize: "<FontConfiguration>",
 *                         FontDecoration: "<FontConfiguration>",
 *                         FontColor: "<FontConfiguration>",
 *                         FontWeight: "<FontConfiguration>",
 *                         FontStyle: "<FontConfiguration>",
 *                       },
 *                       CustomLabel: "STRING_VALUE",
 *                       ApplyTo: {
 *                         FieldId: "STRING_VALUE", // required
 *                         Column: {
 *                           DataSetIdentifier: "<ColumnIdentifier>",
 *                           ColumnName: "<ColumnIdentifier>",
 *                         },
 *                       },
 *                     },
 *                   ],
 *                 },
 *                 ColorAxis: {
 *                   TickLabelOptions: {
 *                     LabelOptions: {
 *                       Visibility: "<LabelOptions>",
 *                       FontConfiguration: "<LabelOptions>",
 *                       CustomLabel: "<LabelOptions>",
 *                     },
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
 *                 ColorLabelOptions: {
 *                   Visibility: "HIDDEN" || "VISIBLE",
 *                   SortIconVisibility: "HIDDEN" || "VISIBLE",
 *                   AxisLabelOptions: [
 *                     {
 *                       FontConfiguration: {
 *                         FontSize: "<FontConfiguration>",
 *                         FontDecoration: "<FontConfiguration>",
 *                         FontColor: "<FontConfiguration>",
 *                         FontWeight: "<FontConfiguration>",
 *                         FontStyle: "<FontConfiguration>",
 *                       },
 *                       CustomLabel: "STRING_VALUE",
 *                       ApplyTo: {
 *                         FieldId: "STRING_VALUE", // required
 *                         Column: {
 *                           DataSetIdentifier: "<ColumnIdentifier>",
 *                           ColumnName: "<ColumnIdentifier>",
 *                         },
 *                       },
 *                     },
 *                   ],
 *                 },
 *                 Legend: {
 *                   Visibility: "HIDDEN" || "VISIBLE",
 *                   Title: {
 *                     Visibility: "<LabelOptions>",
 *                     FontConfiguration: "<LabelOptions>",
 *                     CustomLabel: "<LabelOptions>",
 *                   },
 *                   Position: "AUTO" || "RIGHT" || "BOTTOM" || "TOP",
 *                   Width: "STRING_VALUE",
 *                   Height: "STRING_VALUE",
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
 *                       {
 *                         DataSetIdentifier: "<ColumnIdentifier>",
 *                         ColumnName: "<ColumnIdentifier>",
 *                       },
 *                     ],
 *                     DrillDownFilters: [
 *                       {
 *                         NumericEqualityFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           Value: Number("double"), // required
 *                         },
 *                         CategoryFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           CategoryValues: [ // required
 *                             "STRING_VALUE",
 *                           ],
 *                         },
 *                         TimeRangeFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
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
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           Value: Number("double"), // required
 *                         },
 *                         CategoryFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           CategoryValues: [ // required
 *                             "STRING_VALUE",
 *                           ],
 *                         },
 *                         TimeRangeFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
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
 *                       {
 *                         DataSetIdentifier: "<ColumnIdentifier>",
 *                         ColumnName: "<ColumnIdentifier>",
 *                       },
 *                     ],
 *                     DrillDownFilters: [
 *                       {
 *                         NumericEqualityFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           Value: Number("double"), // required
 *                         },
 *                         CategoryFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
 *                           CategoryValues: [ // required
 *                             "STRING_VALUE",
 *                           ],
 *                         },
 *                         TimeRangeFilter: {
 *                           Column: {
 *                             DataSetIdentifier: "<ColumnIdentifier>",
 *                             ColumnName: "<ColumnIdentifier>",
 *                           },
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
 *           },
 *         ],
 *         TextBoxes: [
 *           {
 *             SheetTextBoxId: "STRING_VALUE", // required
 *             Content: "STRING_VALUE",
 *           },
 *         ],
 *         Layouts: [
 *           {
 *             Configuration: {
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
 *               FreeFormLayout: {
 *                 Elements: [ // required
 *                   {
 *                     ElementId: "STRING_VALUE", // required
 *                     ElementType: "VISUAL" || "FILTER_CONTROL" || "PARAMETER_CONTROL" || "TEXT_BOX", // required
 *                     XAxisLocation: "STRING_VALUE", // required
 *                     YAxisLocation: "STRING_VALUE", // required
 *                     Width: "STRING_VALUE", // required
 *                     Height: "STRING_VALUE", // required
 *                     Visibility: "HIDDEN" || "VISIBLE",
 *                     RenderingRules: [
 *                       {
 *                         Expression: "STRING_VALUE", // required
 *                         ConfigurationOverrides: {
 *                           Visibility: "HIDDEN" || "VISIBLE",
 *                         },
 *                       },
 *                     ],
 *                     BorderStyle: {
 *                       Visibility: "HIDDEN" || "VISIBLE",
 *                       Color: "STRING_VALUE",
 *                     },
 *                     SelectedBorderStyle: {
 *                       Visibility: "HIDDEN" || "VISIBLE",
 *                       Color: "STRING_VALUE",
 *                     },
 *                     BackgroundStyle: {
 *                       Visibility: "HIDDEN" || "VISIBLE",
 *                       Color: "STRING_VALUE",
 *                     },
 *                     LoadingAnimation: {
 *                       Visibility: "HIDDEN" || "VISIBLE",
 *                     },
 *                   },
 *                 ],
 *                 CanvasSizeOptions: {
 *                   ScreenCanvasSizeOptions: {
 *                     OptimizedViewPortWidth: "STRING_VALUE", // required
 *                   },
 *                 },
 *               },
 *               SectionBasedLayout: {
 *                 HeaderSections: [ // required
 *                   {
 *                     SectionId: "STRING_VALUE", // required
 *                     Layout: {
 *                       FreeFormLayout: {
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
 *                 BodySections: [ // required
 *                   {
 *                     SectionId: "STRING_VALUE", // required
 *                     Content: {
 *                       Layout: {
 *                         FreeFormLayout: {
 *                           Elements: [ // required
 *                             "<FreeFromLayoutElementList>",
 *                           ],
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
 *                     PageBreakConfiguration: {
 *                       After: {
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
 *                         Elements: [ // required
 *                           "<FreeFromLayoutElementList>",
 *                         ],
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
 *                 CanvasSizeOptions: {
 *                   PaperCanvasSizeOptions: {
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
 *         SheetControlLayouts: [
 *           {
 *             Configuration: {
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
 *     CalculatedFields: [
 *       {
 *         DataSetIdentifier: "STRING_VALUE", // required
 *         Name: "STRING_VALUE", // required
 *         Expression: "STRING_VALUE", // required
 *       },
 *     ],
 *     ParameterDeclarations: [
 *       {
 *         StringParameterDeclaration: {
 *           ParameterValueType: "MULTI_VALUED" || "SINGLE_VALUED", // required
 *           Name: "STRING_VALUE", // required
 *           DefaultValues: {
 *             DynamicValue: {
 *               UserNameColumn: {
 *                 DataSetIdentifier: "<ColumnIdentifier>",
 *                 ColumnName: "<ColumnIdentifier>",
 *               },
 *               GroupNameColumn: {
 *                 DataSetIdentifier: "<ColumnIdentifier>",
 *                 ColumnName: "<ColumnIdentifier>",
 *               },
 *               DefaultValueColumn: {
 *                 DataSetIdentifier: "<ColumnIdentifier>",
 *                 ColumnName: "<ColumnIdentifier>",
 *               },
 *             },
 *             StaticValues: [
 *               "STRING_VALUE",
 *             ],
 *           },
 *           ValueWhenUnset: {
 *             ValueWhenUnsetOption: "RECOMMENDED_VALUE" || "NULL",
 *             CustomValue: "STRING_VALUE",
 *           },
 *         },
 *         DecimalParameterDeclaration: {
 *           ParameterValueType: "MULTI_VALUED" || "SINGLE_VALUED", // required
 *           Name: "STRING_VALUE", // required
 *           DefaultValues: {
 *             DynamicValue: {
 *               UserNameColumn: {
 *                 DataSetIdentifier: "<ColumnIdentifier>",
 *                 ColumnName: "<ColumnIdentifier>",
 *               },
 *               GroupNameColumn: {
 *                 DataSetIdentifier: "<ColumnIdentifier>",
 *                 ColumnName: "<ColumnIdentifier>",
 *               },
 *               DefaultValueColumn: {
 *                 DataSetIdentifier: "<ColumnIdentifier>",
 *                 ColumnName: "<ColumnIdentifier>",
 *               },
 *             },
 *             StaticValues: [
 *               Number("double"),
 *             ],
 *           },
 *           ValueWhenUnset: {
 *             ValueWhenUnsetOption: "RECOMMENDED_VALUE" || "NULL",
 *             CustomValue: Number("double"),
 *           },
 *         },
 *         IntegerParameterDeclaration: {
 *           ParameterValueType: "MULTI_VALUED" || "SINGLE_VALUED", // required
 *           Name: "STRING_VALUE", // required
 *           DefaultValues: {
 *             DynamicValue: {
 *               UserNameColumn: {
 *                 DataSetIdentifier: "<ColumnIdentifier>",
 *                 ColumnName: "<ColumnIdentifier>",
 *               },
 *               GroupNameColumn: {
 *                 DataSetIdentifier: "<ColumnIdentifier>",
 *                 ColumnName: "<ColumnIdentifier>",
 *               },
 *               DefaultValueColumn: {
 *                 DataSetIdentifier: "<ColumnIdentifier>",
 *                 ColumnName: "<ColumnIdentifier>",
 *               },
 *             },
 *             StaticValues: [
 *               Number("long"),
 *             ],
 *           },
 *           ValueWhenUnset: {
 *             ValueWhenUnsetOption: "RECOMMENDED_VALUE" || "NULL",
 *             CustomValue: Number("long"),
 *           },
 *         },
 *         DateTimeParameterDeclaration: {
 *           Name: "STRING_VALUE", // required
 *           DefaultValues: {
 *             DynamicValue: {
 *               UserNameColumn: {
 *                 DataSetIdentifier: "<ColumnIdentifier>",
 *                 ColumnName: "<ColumnIdentifier>",
 *               },
 *               GroupNameColumn: {
 *                 DataSetIdentifier: "<ColumnIdentifier>",
 *                 ColumnName: "<ColumnIdentifier>",
 *               },
 *               DefaultValueColumn: {
 *                 DataSetIdentifier: "<ColumnIdentifier>",
 *                 ColumnName: "<ColumnIdentifier>",
 *               },
 *             },
 *             StaticValues: [
 *               new Date("TIMESTAMP"),
 *             ],
 *             RollingDate: {
 *               DataSetIdentifier: "STRING_VALUE",
 *               Expression: "STRING_VALUE", // required
 *             },
 *           },
 *           TimeGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *           ValueWhenUnset: {
 *             ValueWhenUnsetOption: "RECOMMENDED_VALUE" || "NULL",
 *             CustomValue: new Date("TIMESTAMP"),
 *           },
 *         },
 *       },
 *     ],
 *     FilterGroups: [
 *       {
 *         FilterGroupId: "STRING_VALUE", // required
 *         Filters: [ // required
 *           {
 *             CategoryFilter: {
 *               FilterId: "STRING_VALUE", // required
 *               Column: {
 *                 DataSetIdentifier: "<ColumnIdentifier>",
 *                 ColumnName: "<ColumnIdentifier>",
 *               },
 *               Configuration: {
 *                 FilterListConfiguration: {
 *                   MatchOperator: "EQUALS" || "DOES_NOT_EQUAL" || "CONTAINS" || "DOES_NOT_CONTAIN" || "STARTS_WITH" || "ENDS_WITH", // required
 *                   CategoryValues: [
 *                     "STRING_VALUE",
 *                   ],
 *                   SelectAllOptions: "FILTER_ALL_VALUES",
 *                 },
 *                 CustomFilterListConfiguration: {
 *                   MatchOperator: "EQUALS" || "DOES_NOT_EQUAL" || "CONTAINS" || "DOES_NOT_CONTAIN" || "STARTS_WITH" || "ENDS_WITH", // required
 *                   CategoryValues: [
 *                     "STRING_VALUE",
 *                   ],
 *                   SelectAllOptions: "FILTER_ALL_VALUES",
 *                   NullOption: "ALL_VALUES" || "NULLS_ONLY" || "NON_NULLS_ONLY", // required
 *                 },
 *                 CustomFilterConfiguration: {
 *                   MatchOperator: "EQUALS" || "DOES_NOT_EQUAL" || "CONTAINS" || "DOES_NOT_CONTAIN" || "STARTS_WITH" || "ENDS_WITH", // required
 *                   CategoryValue: "STRING_VALUE",
 *                   SelectAllOptions: "FILTER_ALL_VALUES",
 *                   ParameterName: "STRING_VALUE",
 *                   NullOption: "ALL_VALUES" || "NULLS_ONLY" || "NON_NULLS_ONLY", // required
 *                 },
 *               },
 *             },
 *             NumericRangeFilter: {
 *               FilterId: "STRING_VALUE", // required
 *               Column: {
 *                 DataSetIdentifier: "<ColumnIdentifier>",
 *                 ColumnName: "<ColumnIdentifier>",
 *               },
 *               IncludeMinimum: true || false,
 *               IncludeMaximum: true || false,
 *               RangeMinimum: {
 *                 StaticValue: Number("double"),
 *                 Parameter: "STRING_VALUE",
 *               },
 *               RangeMaximum: {
 *                 StaticValue: Number("double"),
 *                 Parameter: "STRING_VALUE",
 *               },
 *               SelectAllOptions: "FILTER_ALL_VALUES",
 *               AggregationFunction: {
 *                 NumericalAggregationFunction: "<AggregationFunction>",
 *                 CategoricalAggregationFunction: "<AggregationFunction>",
 *                 DateAggregationFunction: "<AggregationFunction>",
 *               },
 *               NullOption: "ALL_VALUES" || "NULLS_ONLY" || "NON_NULLS_ONLY", // required
 *             },
 *             NumericEqualityFilter: {
 *               FilterId: "STRING_VALUE", // required
 *               Column: {
 *                 DataSetIdentifier: "<ColumnIdentifier>",
 *                 ColumnName: "<ColumnIdentifier>",
 *               },
 *               Value: Number("double"),
 *               SelectAllOptions: "FILTER_ALL_VALUES",
 *               MatchOperator: "EQUALS" || "DOES_NOT_EQUAL", // required
 *               AggregationFunction: {
 *                 NumericalAggregationFunction: "<AggregationFunction>",
 *                 CategoricalAggregationFunction: "<AggregationFunction>",
 *                 DateAggregationFunction: "<AggregationFunction>",
 *               },
 *               ParameterName: "STRING_VALUE",
 *               NullOption: "ALL_VALUES" || "NULLS_ONLY" || "NON_NULLS_ONLY", // required
 *             },
 *             TimeEqualityFilter: {
 *               FilterId: "STRING_VALUE", // required
 *               Column: {
 *                 DataSetIdentifier: "<ColumnIdentifier>",
 *                 ColumnName: "<ColumnIdentifier>",
 *               },
 *               Value: new Date("TIMESTAMP"),
 *               ParameterName: "STRING_VALUE",
 *               TimeGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *             },
 *             TimeRangeFilter: {
 *               FilterId: "STRING_VALUE", // required
 *               Column: {
 *                 DataSetIdentifier: "<ColumnIdentifier>",
 *                 ColumnName: "<ColumnIdentifier>",
 *               },
 *               IncludeMinimum: true || false,
 *               IncludeMaximum: true || false,
 *               RangeMinimumValue: {
 *                 StaticValue: new Date("TIMESTAMP"),
 *                 RollingDate: {
 *                   DataSetIdentifier: "STRING_VALUE",
 *                   Expression: "STRING_VALUE", // required
 *                 },
 *                 Parameter: "STRING_VALUE",
 *               },
 *               RangeMaximumValue: {
 *                 StaticValue: new Date("TIMESTAMP"),
 *                 RollingDate: {
 *                   DataSetIdentifier: "STRING_VALUE",
 *                   Expression: "STRING_VALUE", // required
 *                 },
 *                 Parameter: "STRING_VALUE",
 *               },
 *               NullOption: "ALL_VALUES" || "NULLS_ONLY" || "NON_NULLS_ONLY", // required
 *               ExcludePeriodConfiguration: {
 *                 Amount: Number("int"), // required
 *                 Granularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND", // required
 *                 Status: "ENABLED" || "DISABLED",
 *               },
 *               TimeGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *             },
 *             RelativeDatesFilter: {
 *               FilterId: "STRING_VALUE", // required
 *               Column: {
 *                 DataSetIdentifier: "<ColumnIdentifier>",
 *                 ColumnName: "<ColumnIdentifier>",
 *               },
 *               AnchorDateConfiguration: {
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
 *             },
 *             TopBottomFilter: {
 *               FilterId: "STRING_VALUE", // required
 *               Column: {
 *                 DataSetIdentifier: "<ColumnIdentifier>",
 *                 ColumnName: "<ColumnIdentifier>",
 *               },
 *               Limit: Number("int"),
 *               AggregationSortConfigurations: [ // required
 *                 {
 *                   Column: {
 *                     DataSetIdentifier: "<ColumnIdentifier>",
 *                     ColumnName: "<ColumnIdentifier>",
 *                   },
 *                   SortDirection: "ASC" || "DESC", // required
 *                   AggregationFunction: {
 *                     NumericalAggregationFunction: "<AggregationFunction>",
 *                     CategoricalAggregationFunction: "<AggregationFunction>",
 *                     DateAggregationFunction: "<AggregationFunction>",
 *                   },
 *                 },
 *               ],
 *               TimeGranularity: "YEAR" || "QUARTER" || "MONTH" || "WEEK" || "DAY" || "HOUR" || "MINUTE" || "SECOND" || "MILLISECOND",
 *               ParameterName: "STRING_VALUE",
 *             },
 *           },
 *         ],
 *         ScopeConfiguration: {
 *           SelectedSheets: {
 *             SheetVisualScopingConfigurations: [
 *               {
 *                 SheetId: "STRING_VALUE", // required
 *                 Scope: "ALL_VISUALS" || "SELECTED_VISUALS", // required
 *                 VisualIds: [
 *                   "STRING_VALUE",
 *                 ],
 *               },
 *             ],
 *           },
 *         },
 *         Status: "ENABLED" || "DISABLED",
 *         CrossDataset: "ALL_DATASETS" || "SINGLE_DATASET", // required
 *       },
 *     ],
 *     ColumnConfigurations: [
 *       {
 *         Column: {
 *           DataSetIdentifier: "<ColumnIdentifier>",
 *           ColumnName: "<ColumnIdentifier>",
 *         },
 *         FormatConfiguration: {
 *           StringFormatConfiguration: {
 *             NullValueFormatConfiguration: "<StringFormatConfiguration>",
 *             NumericFormatConfiguration: "<StringFormatConfiguration>",
 *           },
 *           NumberFormatConfiguration: {
 *             FormatConfiguration: "<NumberFormatConfiguration>",
 *           },
 *           DateTimeFormatConfiguration: {
 *             DateTimeFormat: "<DateTimeFormatConfiguration>",
 *             NullValueFormatConfiguration: "<DateTimeFormatConfiguration>",
 *             NumericFormatConfiguration: "<DateTimeFormatConfiguration>",
 *           },
 *         },
 *         Role: "DIMENSION" || "MEASURE",
 *       },
 *     ],
 *     AnalysisDefaults: {
 *       DefaultNewSheetConfiguration: {
 *         InteractiveLayoutConfiguration: {
 *           Grid: {
 *             CanvasSizeOptions: {
 *               ScreenCanvasSizeOptions: {
 *                 ResizeOption: "FIXED" || "RESPONSIVE", // required
 *                 OptimizedViewPortWidth: "STRING_VALUE",
 *               },
 *             },
 *           },
 *           FreeForm: {
 *             CanvasSizeOptions: {
 *               ScreenCanvasSizeOptions: {
 *                 OptimizedViewPortWidth: "STRING_VALUE", // required
 *               },
 *             },
 *           },
 *         },
 *         PaginatedLayoutConfiguration: {
 *           SectionBased: {
 *             CanvasSizeOptions: {
 *               PaperCanvasSizeOptions: {
 *                 PaperSize: "US_LETTER" || "US_LEGAL" || "US_TABLOID_LEDGER" || "A0" || "A1" || "A2" || "A3" || "A4" || "A5" || "JIS_B4" || "JIS_B5",
 *                 PaperOrientation: "PORTRAIT" || "LANDSCAPE",
 *                 PaperMargin: {
 *                   Top: "<Spacing>",
 *                   Bottom: "<Spacing>",
 *                   Left: "<Spacing>",
 *                   Right: "<Spacing>",
 *                 },
 *               },
 *             },
 *           },
 *         },
 *         SheetContentType: "PAGINATED" || "INTERACTIVE",
 *       },
 *     },
 *   },
 * };
 * const command = new UpdateTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param UpdateTemplateCommandInput - {@link UpdateTemplateCommandInput}
 * @returns {@link UpdateTemplateCommandOutput}
 * @see {@link UpdateTemplateCommandInput} for command's `input` shape.
 * @see {@link UpdateTemplateCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceExistsException} (client fault)
 *  <p>The resource specified already exists. </p>
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
 *
 */
export class UpdateTemplateCommand extends $Command<
  UpdateTemplateCommandInput,
  UpdateTemplateCommandOutput,
  QuickSightClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: UpdateTemplateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QuickSightClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateTemplateCommandInput, UpdateTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateTemplateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "UpdateTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateTemplateRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: UpdateTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateTemplateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateTemplateCommandOutput> {
    return deserializeAws_restJson1UpdateTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
