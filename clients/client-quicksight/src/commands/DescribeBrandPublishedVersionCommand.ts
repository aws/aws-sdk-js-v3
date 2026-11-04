// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeBrandPublishedVersionRequest, DescribeBrandPublishedVersionResponse } from "../models/models_4";
import { DescribeBrandPublishedVersion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeBrandPublishedVersionCommand}.
 */
export interface DescribeBrandPublishedVersionCommandInput extends DescribeBrandPublishedVersionRequest {}
/**
 * @public
 *
 * The output of {@link DescribeBrandPublishedVersionCommand}.
 */
export interface DescribeBrandPublishedVersionCommandOutput extends DescribeBrandPublishedVersionResponse, __MetadataBearer {}

/**
 * Describes the published version of the brand.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeBrandPublishedVersionCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeBrandPublishedVersionCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // DescribeBrandPublishedVersionRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   BrandId: "STRING_VALUE", // required
 * };
 * const command = new DescribeBrandPublishedVersionCommand(input);
 * const response = await client.send(command);
 * // { // DescribeBrandPublishedVersionResponse
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
 * //       ContextualAccentPalette: { // ContextualAccentPalette
 * //         Connection: "<Palette>",
 * //         Visualization: "<Palette>",
 * //         Insight: "<Palette>",
 * //         Automation: "<Palette>",
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
 * @param DescribeBrandPublishedVersionCommandInput - {@link DescribeBrandPublishedVersionCommandInput}
 * @returns {@link DescribeBrandPublishedVersionCommandOutput}
 * @see {@link DescribeBrandPublishedVersionCommandInput} for command's `input` shape.
 * @see {@link DescribeBrandPublishedVersionCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have access to this item. The provided credentials couldn't be validated. You might not be authorized to carry out the request. Make sure that your account is authorized to use the Amazon Quick Sight service, that your policies have the correct permissions, and that you are using the correct credentials.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Updating or deleting a resource can cause an inconsistent state.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal service exception.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * You don't have this feature activated for your account. To fix this issue, contact Amazon Web Services support.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * One or more resources can't be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Access is throttled.
 *
 * @throws {@link QuickSightServiceException}
 *
 * Base exception class for all service exceptions from QuickSight service.
 *
 * @public
 */
export class DescribeBrandPublishedVersionCommand extends command<DescribeBrandPublishedVersionCommandInput, DescribeBrandPublishedVersionCommandOutput>(
  _ep0,
  _mw0,
  "DescribeBrandPublishedVersion",
  DescribeBrandPublishedVersion$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeBrandPublishedVersionRequest;
      output: DescribeBrandPublishedVersionResponse;
    };
    sdk: {
      input: DescribeBrandPublishedVersionCommandInput;
      output: DescribeBrandPublishedVersionCommandOutput;
    };
  };
}
