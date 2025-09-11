// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateThemeRequest, UpdateThemeResponse } from "../models/models_5";
import { de_UpdateThemeCommand, se_UpdateThemeCommand } from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateThemeCommand}.
 */
export interface UpdateThemeCommandInput extends UpdateThemeRequest {}
/**
 * @public
 *
 * The output of {@link UpdateThemeCommand}.
 */
export interface UpdateThemeCommandOutput extends UpdateThemeResponse, __MetadataBearer {}

/**
 * <p>Updates a theme.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateThemeCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateThemeCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const input = { // UpdateThemeRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   ThemeId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
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
 *         Border: { // BorderStyle
 *           Show: true || false,
 *         },
 *       },
 *       TileLayout: { // TileLayoutStyle
 *         Gutter: { // GutterStyle
 *           Show: true || false,
 *         },
 *         Margin: { // MarginStyle
 *           Show: true || false,
 *         },
 *       },
 *     },
 *     Typography: { // Typography
 *       FontFamilies: [ // FontList
 *         { // Font
 *           FontFamily: "STRING_VALUE",
 *         },
 *       ],
 *     },
 *   },
 * };
 * const command = new UpdateThemeCommand(input);
 * const response = await client.send(command);
 * // { // UpdateThemeResponse
 * //   ThemeId: "STRING_VALUE",
 * //   Arn: "STRING_VALUE",
 * //   VersionArn: "STRING_VALUE",
 * //   CreationStatus: "CREATION_IN_PROGRESS" || "CREATION_SUCCESSFUL" || "CREATION_FAILED" || "UPDATE_IN_PROGRESS" || "UPDATE_SUCCESSFUL" || "UPDATE_FAILED" || "DELETED",
 * //   Status: Number("int"),
 * //   RequestId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateThemeCommandInput - {@link UpdateThemeCommandInput}
 * @returns {@link UpdateThemeCommandOutput}
 * @see {@link UpdateThemeCommandInput} for command's `input` shape.
 * @see {@link UpdateThemeCommandOutput} for command's `response` shape.
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
 * 			QuickSight currently has Standard Edition and Enterprise Edition. Not every operation and
 * 			capability is available in every edition.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 *
 * @public
 */
export class UpdateThemeCommand extends $Command
  .classBuilder<
    UpdateThemeCommandInput,
    UpdateThemeCommandOutput,
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
  .s("QuickSight_20180401", "UpdateTheme", {})
  .n("QuickSightClient", "UpdateThemeCommand")
  .f(void 0, void 0)
  .ser(se_UpdateThemeCommand)
  .de(de_UpdateThemeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateThemeRequest;
      output: UpdateThemeResponse;
    };
    sdk: {
      input: UpdateThemeCommandInput;
      output: UpdateThemeCommandOutput;
    };
  };
}
