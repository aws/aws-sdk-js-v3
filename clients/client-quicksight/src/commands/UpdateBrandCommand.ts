// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateBrandRequest, UpdateBrandResponse } from "../models/models_5";
import { de_UpdateBrandCommand, se_UpdateBrandCommand } from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateBrandCommand}.
 */
export interface UpdateBrandCommandInput extends UpdateBrandRequest {}
/**
 * @public
 *
 * The output of {@link UpdateBrandCommand}.
 */
export interface UpdateBrandCommandOutput extends UpdateBrandResponse, __MetadataBearer {}

/**
 * <p>Updates a brand.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateBrandCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateBrandCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const input = { // UpdateBrandRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   BrandId: "STRING_VALUE", // required
 *   BrandDefinition: { // BrandDefinition
 *     BrandName: "STRING_VALUE", // required
 *     Description: "STRING_VALUE",
 *     ApplicationTheme: { // ApplicationTheme
 *       BrandColorPalette: { // BrandColorPalette
 *         Primary: { // Palette
 *           Foreground: "STRING_VALUE",
 *           Background: "STRING_VALUE",
 *         },
 *         Secondary: {
 *           Foreground: "STRING_VALUE",
 *           Background: "STRING_VALUE",
 *         },
 *         Accent: {
 *           Foreground: "STRING_VALUE",
 *           Background: "STRING_VALUE",
 *         },
 *         Measure: {
 *           Foreground: "STRING_VALUE",
 *           Background: "STRING_VALUE",
 *         },
 *         Dimension: {
 *           Foreground: "STRING_VALUE",
 *           Background: "STRING_VALUE",
 *         },
 *         Success: "<Palette>",
 *         Info: "<Palette>",
 *         Warning: "<Palette>",
 *         Danger: "<Palette>",
 *       },
 *       BrandElementStyle: { // BrandElementStyle
 *         NavbarStyle: { // NavbarStyle
 *           GlobalNavbar: "<Palette>",
 *           ContextualNavbar: "<Palette>",
 *         },
 *       },
 *     },
 *     LogoConfiguration: { // LogoConfiguration
 *       AltText: "STRING_VALUE", // required
 *       LogoSet: { // LogoSetConfiguration
 *         Primary: { // ImageSetConfiguration
 *           Original: { // ImageConfiguration
 *             Source: { // ImageSource Union: only one key present
 *               PublicUrl: "STRING_VALUE",
 *               S3Uri: "STRING_VALUE",
 *             },
 *           },
 *         },
 *         Favicon: {
 *           Original: {
 *             Source: {//  Union: only one key present
 *               PublicUrl: "STRING_VALUE",
 *               S3Uri: "STRING_VALUE",
 *             },
 *           },
 *         },
 *       },
 *     },
 *   },
 * };
 * const command = new UpdateBrandCommand(input);
 * const response = await client.send(command);
 * // { // UpdateBrandResponse
 * //   RequestId: "STRING_VALUE",
 * //   BrandDetail: { // BrandDetail
 * //     BrandId: "STRING_VALUE", // required
 * //     Arn: "STRING_VALUE",
 * //     BrandStatus: "CREATE_IN_PROGRESS" || "CREATE_SUCCEEDED" || "CREATE_FAILED" || "DELETE_IN_PROGRESS" || "DELETE_FAILED",
 * //     CreatedTime: new Date("TIMESTAMP"),
 * //     LastUpdatedTime: new Date("TIMESTAMP"),
 * //     VersionId: "STRING_VALUE",
 * //     VersionStatus: "CREATE_IN_PROGRESS" || "CREATE_SUCCEEDED" || "CREATE_FAILED",
 * //     Errors: [ // ErrorList
 * //       "STRING_VALUE",
 * //     ],
 * //     Logo: { // Logo
 * //       AltText: "STRING_VALUE", // required
 * //       LogoSet: { // LogoSet
 * //         Primary: { // ImageSet
 * //           Original: { // Image
 * //             Source: { // ImageSource Union: only one key present
 * //               PublicUrl: "STRING_VALUE",
 * //               S3Uri: "STRING_VALUE",
 * //             },
 * //             GeneratedImageUrl: "STRING_VALUE",
 * //           },
 * //           Height64: {
 * //             Source: {//  Union: only one key present
 * //               PublicUrl: "STRING_VALUE",
 * //               S3Uri: "STRING_VALUE",
 * //             },
 * //             GeneratedImageUrl: "STRING_VALUE",
 * //           },
 * //           Height32: {
 * //             Source: {//  Union: only one key present
 * //               PublicUrl: "STRING_VALUE",
 * //               S3Uri: "STRING_VALUE",
 * //             },
 * //             GeneratedImageUrl: "STRING_VALUE",
 * //           },
 * //         },
 * //         Favicon: {
 * //           Original: {
 * //             Source: {//  Union: only one key present
 * //               PublicUrl: "STRING_VALUE",
 * //               S3Uri: "STRING_VALUE",
 * //             },
 * //             GeneratedImageUrl: "STRING_VALUE",
 * //           },
 * //           Height64: {
 * //             Source: {//  Union: only one key present
 * //               PublicUrl: "STRING_VALUE",
 * //               S3Uri: "STRING_VALUE",
 * //             },
 * //             GeneratedImageUrl: "STRING_VALUE",
 * //           },
 * //           Height32: "<Image>",
 * //         },
 * //       },
 * //     },
 * //   },
 * //   BrandDefinition: { // BrandDefinition
 * //     BrandName: "STRING_VALUE", // required
 * //     Description: "STRING_VALUE",
 * //     ApplicationTheme: { // ApplicationTheme
 * //       BrandColorPalette: { // BrandColorPalette
 * //         Primary: { // Palette
 * //           Foreground: "STRING_VALUE",
 * //           Background: "STRING_VALUE",
 * //         },
 * //         Secondary: {
 * //           Foreground: "STRING_VALUE",
 * //           Background: "STRING_VALUE",
 * //         },
 * //         Accent: {
 * //           Foreground: "STRING_VALUE",
 * //           Background: "STRING_VALUE",
 * //         },
 * //         Measure: {
 * //           Foreground: "STRING_VALUE",
 * //           Background: "STRING_VALUE",
 * //         },
 * //         Dimension: {
 * //           Foreground: "STRING_VALUE",
 * //           Background: "STRING_VALUE",
 * //         },
 * //         Success: "<Palette>",
 * //         Info: "<Palette>",
 * //         Warning: "<Palette>",
 * //         Danger: "<Palette>",
 * //       },
 * //       BrandElementStyle: { // BrandElementStyle
 * //         NavbarStyle: { // NavbarStyle
 * //           GlobalNavbar: "<Palette>",
 * //           ContextualNavbar: "<Palette>",
 * //         },
 * //       },
 * //     },
 * //     LogoConfiguration: { // LogoConfiguration
 * //       AltText: "STRING_VALUE", // required
 * //       LogoSet: { // LogoSetConfiguration
 * //         Primary: { // ImageSetConfiguration
 * //           Original: { // ImageConfiguration
 * //             Source: "<ImageSource>",
 * //           },
 * //         },
 * //         Favicon: {
 * //           Original: {
 * //             Source: "<ImageSource>",
 * //           },
 * //         },
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateBrandCommandInput - {@link UpdateBrandCommandInput}
 * @returns {@link UpdateBrandCommandOutput}
 * @see {@link UpdateBrandCommandInput} for command's `input` shape.
 * @see {@link UpdateBrandCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon QuickSight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal service exception.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>You don't have this feature activated for your account. To fix this issue, contact Amazon Web Services support.</p>
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
 * @public
 */
export class UpdateBrandCommand extends $Command
  .classBuilder<
    UpdateBrandCommandInput,
    UpdateBrandCommandOutput,
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
  .s("QuickSight_20180401", "UpdateBrand", {})
  .n("QuickSightClient", "UpdateBrandCommand")
  .f(void 0, void 0)
  .ser(se_UpdateBrandCommand)
  .de(de_UpdateBrandCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateBrandRequest;
      output: UpdateBrandResponse;
    };
    sdk: {
      input: UpdateBrandCommandInput;
      output: UpdateBrandCommandOutput;
    };
  };
}
