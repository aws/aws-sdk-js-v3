// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeThemeRequest, DescribeThemeResponse } from "../models/models_4";
import { de_DescribeThemeCommand, se_DescribeThemeCommand } from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeThemeCommand}.
 */
export interface DescribeThemeCommandInput extends DescribeThemeRequest {}
/**
 * @public
 *
 * The output of {@link DescribeThemeCommand}.
 */
export interface DescribeThemeCommandOutput extends DescribeThemeResponse, __MetadataBearer {}

/**
 * <p>Describes a theme.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeThemeCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeThemeCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // DescribeThemeRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   ThemeId: "STRING_VALUE", // required
 *   VersionNumber: Number("long"),
 *   AliasName: "STRING_VALUE",
 * };
 * const command = new DescribeThemeCommand(input);
 * const response = await client.send(command);
 * // { // DescribeThemeResponse
 * //   Theme: { // Theme
 * //     Arn: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     ThemeId: "STRING_VALUE",
 * //     Version: { // ThemeVersion
 * //       VersionNumber: Number("long"),
 * //       Arn: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       BaseThemeId: "STRING_VALUE",
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //       Configuration: { // ThemeConfiguration
 * //         DataColorPalette: { // DataColorPalette
 * //           Colors: [ // ColorList
 * //             "STRING_VALUE",
 * //           ],
 * //           MinMaxGradient: [
 * //             "STRING_VALUE",
 * //           ],
 * //           EmptyFillColor: "STRING_VALUE",
 * //         },
 * //         UIColorPalette: { // UIColorPalette
 * //           PrimaryForeground: "STRING_VALUE",
 * //           PrimaryBackground: "STRING_VALUE",
 * //           SecondaryForeground: "STRING_VALUE",
 * //           SecondaryBackground: "STRING_VALUE",
 * //           Accent: "STRING_VALUE",
 * //           AccentForeground: "STRING_VALUE",
 * //           Danger: "STRING_VALUE",
 * //           DangerForeground: "STRING_VALUE",
 * //           Warning: "STRING_VALUE",
 * //           WarningForeground: "STRING_VALUE",
 * //           Success: "STRING_VALUE",
 * //           SuccessForeground: "STRING_VALUE",
 * //           Dimension: "STRING_VALUE",
 * //           DimensionForeground: "STRING_VALUE",
 * //           Measure: "STRING_VALUE",
 * //           MeasureForeground: "STRING_VALUE",
 * //         },
 * //         Sheet: { // SheetStyle
 * //           Tile: { // TileStyle
 * //             Border: { // BorderStyle
 * //               Show: true || false,
 * //             },
 * //           },
 * //           TileLayout: { // TileLayoutStyle
 * //             Gutter: { // GutterStyle
 * //               Show: true || false,
 * //             },
 * //             Margin: { // MarginStyle
 * //               Show: true || false,
 * //             },
 * //           },
 * //         },
 * //         Typography: { // Typography
 * //           FontFamilies: [ // FontList
 * //             { // Font
 * //               FontFamily: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //       },
 * //       Errors: [ // ThemeErrorList
 * //         { // ThemeError
 * //           Type: "INTERNAL_FAILURE",
 * //           Message: "STRING_VALUE",
 * //         },
 * //       ],
 * //       Status: "CREATION_IN_PROGRESS" || "CREATION_SUCCESSFUL" || "CREATION_FAILED" || "UPDATE_IN_PROGRESS" || "UPDATE_SUCCESSFUL" || "UPDATE_FAILED" || "DELETED",
 * //     },
 * //     CreatedTime: new Date("TIMESTAMP"),
 * //     LastUpdatedTime: new Date("TIMESTAMP"),
 * //     Type: "QUICKSIGHT" || "CUSTOM" || "ALL",
 * //   },
 * //   Status: Number("int"),
 * //   RequestId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeThemeCommandInput - {@link DescribeThemeCommandInput}
 * @returns {@link DescribeThemeCommandOutput}
 * @see {@link DescribeThemeCommandInput} for command's `input` shape.
 * @see {@link DescribeThemeCommandOutput} for command's `response` shape.
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
export class DescribeThemeCommand extends $Command
  .classBuilder<
    DescribeThemeCommandInput,
    DescribeThemeCommandOutput,
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
  .s("QuickSight_20180401", "DescribeTheme", {})
  .n("QuickSightClient", "DescribeThemeCommand")
  .f(void 0, void 0)
  .ser(se_DescribeThemeCommand)
  .de(de_DescribeThemeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeThemeRequest;
      output: DescribeThemeResponse;
    };
    sdk: {
      input: DescribeThemeCommandInput;
      output: DescribeThemeCommandOutput;
    };
  };
}
