// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateThemeRequest, CreateThemeResponse } from "../models/models_3";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { CreateTheme } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateThemeCommand}.
 */
export interface CreateThemeCommandInput extends CreateThemeRequest {}
/**
 * @public
 *
 * The output of {@link CreateThemeCommand}.
 */
export interface CreateThemeCommandOutput extends CreateThemeResponse, __MetadataBearer {}

/**
 * <p>Creates a theme.</p>
 *          <p>A <i>theme</i> is set of configuration options for color and layout.
 * 			Themes apply to analyses and dashboards. For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/themes-in-quicksight.html">Using
 * 			Themes in Amazon Quick Sight</a> in the <i>Amazon Quick Sight User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, CreateThemeCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, CreateThemeCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // CreateThemeRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   ThemeId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   BaseThemeId: "STRING_VALUE", // required
 *   VersionDescription: "STRING_VALUE",
 *   Configuration: { // ThemeConfiguration
 *     DataColorPalette: { // DataColorPalette
 *       Colors: [ // ColorList
 *         "STRING_VALUE",
 *       ],
 *       MinMaxGradient: [
 *         "STRING_VALUE",
 *       ],
 *       EmptyFillColor: "STRING_VALUE",
 *     },
 *     UIColorPalette: { // UIColorPalette
 *       PrimaryForeground: "STRING_VALUE",
 *       PrimaryBackground: "STRING_VALUE",
 *       SecondaryForeground: "STRING_VALUE",
 *       SecondaryBackground: "STRING_VALUE",
 *       Accent: "STRING_VALUE",
 *       AccentForeground: "STRING_VALUE",
 *       Danger: "STRING_VALUE",
 *       DangerForeground: "STRING_VALUE",
 *       Warning: "STRING_VALUE",
 *       WarningForeground: "STRING_VALUE",
 *       Success: "STRING_VALUE",
 *       SuccessForeground: "STRING_VALUE",
 *       Dimension: "STRING_VALUE",
 *       DimensionForeground: "STRING_VALUE",
 *       Measure: "STRING_VALUE",
 *       MeasureForeground: "STRING_VALUE",
 *     },
 *     Sheet: { // SheetStyle
 *       Tile: { // TileStyle
 *         BackgroundColor: "STRING_VALUE",
 *         Border: { // BorderStyle
 *           Color: "STRING_VALUE",
 *           Show: true || false,
 *           Width: "STRING_VALUE",
 *         },
 *         BorderRadius: "STRING_VALUE",
 *         Padding: "STRING_VALUE",
 *       },
 *       TileLayout: { // TileLayoutStyle
 *         Gutter: { // GutterStyle
 *           Show: true || false,
 *         },
 *         Margin: { // MarginStyle
 *           Show: true || false,
 *         },
 *       },
 *       Background: { // SheetBackgroundStyle
 *         Color: "STRING_VALUE",
 *         Gradient: "STRING_VALUE",
 *       },
 *     },
 *     Typography: { // Typography
 *       FontFamilies: [ // FontList
 *         { // Font
 *           FontFamily: "STRING_VALUE",
 *         },
 *       ],
 *       AxisTitleFontConfiguration: { // FontConfiguration
 *         FontSize: { // FontSize
 *           Relative: "EXTRA_SMALL" || "SMALL" || "MEDIUM" || "LARGE" || "EXTRA_LARGE",
 *           Absolute: "STRING_VALUE",
 *         },
 *         FontDecoration: "UNDERLINE" || "NONE",
 *         FontColor: "STRING_VALUE",
 *         FontWeight: { // FontWeight
 *           Name: "NORMAL" || "BOLD",
 *         },
 *         FontStyle: "NORMAL" || "ITALIC",
 *         FontFamily: "STRING_VALUE",
 *       },
 *       AxisLabelFontConfiguration: {
 *         FontSize: {
 *           Relative: "EXTRA_SMALL" || "SMALL" || "MEDIUM" || "LARGE" || "EXTRA_LARGE",
 *           Absolute: "STRING_VALUE",
 *         },
 *         FontDecoration: "UNDERLINE" || "NONE",
 *         FontColor: "STRING_VALUE",
 *         FontWeight: {
 *           Name: "NORMAL" || "BOLD",
 *         },
 *         FontStyle: "NORMAL" || "ITALIC",
 *         FontFamily: "STRING_VALUE",
 *       },
 *       LegendTitleFontConfiguration: {
 *         FontSize: {
 *           Relative: "EXTRA_SMALL" || "SMALL" || "MEDIUM" || "LARGE" || "EXTRA_LARGE",
 *           Absolute: "STRING_VALUE",
 *         },
 *         FontDecoration: "UNDERLINE" || "NONE",
 *         FontColor: "STRING_VALUE",
 *         FontWeight: {
 *           Name: "NORMAL" || "BOLD",
 *         },
 *         FontStyle: "NORMAL" || "ITALIC",
 *         FontFamily: "STRING_VALUE",
 *       },
 *       LegendValueFontConfiguration: {
 *         FontSize: {
 *           Relative: "EXTRA_SMALL" || "SMALL" || "MEDIUM" || "LARGE" || "EXTRA_LARGE",
 *           Absolute: "STRING_VALUE",
 *         },
 *         FontDecoration: "UNDERLINE" || "NONE",
 *         FontColor: "STRING_VALUE",
 *         FontWeight: {
 *           Name: "NORMAL" || "BOLD",
 *         },
 *         FontStyle: "NORMAL" || "ITALIC",
 *         FontFamily: "STRING_VALUE",
 *       },
 *       DataLabelFontConfiguration: {
 *         FontSize: {
 *           Relative: "EXTRA_SMALL" || "SMALL" || "MEDIUM" || "LARGE" || "EXTRA_LARGE",
 *           Absolute: "STRING_VALUE",
 *         },
 *         FontDecoration: "UNDERLINE" || "NONE",
 *         FontColor: "STRING_VALUE",
 *         FontWeight: {
 *           Name: "NORMAL" || "BOLD",
 *         },
 *         FontStyle: "NORMAL" || "ITALIC",
 *         FontFamily: "STRING_VALUE",
 *       },
 *       VisualTitleFontConfiguration: { // VisualTitleFontConfiguration
 *         FontConfiguration: "<FontConfiguration>",
 *         TextAlignment: "LEFT" || "CENTER" || "RIGHT" || "AUTO",
 *         TextTransform: "CAPITALIZE",
 *       },
 *       VisualSubtitleFontConfiguration: { // VisualSubtitleFontConfiguration
 *         FontConfiguration: "<FontConfiguration>",
 *         TextAlignment: "LEFT" || "CENTER" || "RIGHT" || "AUTO",
 *         TextTransform: "CAPITALIZE",
 *       },
 *     },
 *   },
 *   Permissions: [ // ResourcePermissionList
 *     { // ResourcePermission
 *       Principal: "STRING_VALUE", // required
 *       Actions: [ // ActionList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateThemeCommand(input);
 * const response = await client.send(command);
 * // { // CreateThemeResponse
 * //   Arn: "STRING_VALUE",
 * //   VersionArn: "STRING_VALUE",
 * //   ThemeId: "STRING_VALUE",
 * //   CreationStatus: "CREATION_IN_PROGRESS" || "CREATION_SUCCESSFUL" || "CREATION_FAILED" || "UPDATE_IN_PROGRESS" || "UPDATE_SUCCESSFUL" || "UPDATE_FAILED" || "DELETED",
 * //   Status: Number("int"),
 * //   RequestId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateThemeCommandInput - {@link CreateThemeCommandInput}
 * @returns {@link CreateThemeCommandOutput}
 * @see {@link CreateThemeCommandInput} for command's `input` shape.
 * @see {@link CreateThemeCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon Quick Sight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
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
export class CreateThemeCommand extends $Command
  .classBuilder<
    CreateThemeCommandInput,
    CreateThemeCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QuickSight_20180401", "CreateTheme", {})
  .n("QuickSightClient", "CreateThemeCommand")
  .sc(CreateTheme)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateThemeRequest;
      output: CreateThemeResponse;
    };
    sdk: {
      input: CreateThemeCommandInput;
      output: CreateThemeCommandOutput;
    };
  };
}
