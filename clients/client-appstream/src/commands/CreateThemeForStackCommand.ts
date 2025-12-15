// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateThemeForStackRequest, CreateThemeForStackResult } from "../models/models_0";
import { CreateThemeForStack$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateThemeForStackCommand}.
 */
export interface CreateThemeForStackCommandInput extends CreateThemeForStackRequest {}
/**
 * @public
 *
 * The output of {@link CreateThemeForStackCommand}.
 */
export interface CreateThemeForStackCommandOutput extends CreateThemeForStackResult, __MetadataBearer {}

/**
 * <p>Creates custom branding that customizes the appearance of the streaming application catalog page.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, CreateThemeForStackCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, CreateThemeForStackCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * // import type { AppStreamClientConfig } from "@aws-sdk/client-appstream";
 * const config = {}; // type is AppStreamClientConfig
 * const client = new AppStreamClient(config);
 * const input = { // CreateThemeForStackRequest
 *   StackName: "STRING_VALUE", // required
 *   FooterLinks: [ // ThemeFooterLinks
 *     { // ThemeFooterLink
 *       DisplayName: "STRING_VALUE",
 *       FooterLinkURL: "STRING_VALUE",
 *     },
 *   ],
 *   TitleText: "STRING_VALUE", // required
 *   ThemeStyling: "LIGHT_BLUE" || "BLUE" || "PINK" || "RED", // required
 *   OrganizationLogoS3Location: { // S3Location
 *     S3Bucket: "STRING_VALUE", // required
 *     S3Key: "STRING_VALUE",
 *   },
 *   FaviconS3Location: {
 *     S3Bucket: "STRING_VALUE", // required
 *     S3Key: "STRING_VALUE",
 *   },
 * };
 * const command = new CreateThemeForStackCommand(input);
 * const response = await client.send(command);
 * // { // CreateThemeForStackResult
 * //   Theme: { // Theme
 * //     StackName: "STRING_VALUE",
 * //     State: "ENABLED" || "DISABLED",
 * //     ThemeTitleText: "STRING_VALUE",
 * //     ThemeStyling: "LIGHT_BLUE" || "BLUE" || "PINK" || "RED",
 * //     ThemeFooterLinks: [ // ThemeFooterLinks
 * //       { // ThemeFooterLink
 * //         DisplayName: "STRING_VALUE",
 * //         FooterLinkURL: "STRING_VALUE",
 * //       },
 * //     ],
 * //     ThemeOrganizationLogoURL: "STRING_VALUE",
 * //     ThemeFaviconURL: "STRING_VALUE",
 * //     CreatedTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateThemeForStackCommandInput - {@link CreateThemeForStackCommandInput}
 * @returns {@link CreateThemeForStackCommandOutput}
 * @see {@link CreateThemeForStackCommandInput} for command's `input` shape.
 * @see {@link CreateThemeForStackCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>An API error occurred. Wait a few minutes and try again.</p>
 *
 * @throws {@link InvalidAccountStatusException} (client fault)
 *  <p>The resource cannot be created because your AWS account is suspended. For assistance, contact AWS Support. </p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The requested limit exceeds the permitted limit for an account.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>The attempted operation is not permitted.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The specified resource already exists.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link AppStreamServiceException}
 * <p>Base exception class for all service exceptions from AppStream service.</p>
 *
 *
 * @public
 */
export class CreateThemeForStackCommand extends $Command
  .classBuilder<
    CreateThemeForStackCommandInput,
    CreateThemeForStackCommandOutput,
    AppStreamClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppStreamClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PhotonAdminProxyService", "CreateThemeForStack", {})
  .n("AppStreamClient", "CreateThemeForStackCommand")
  .sc(CreateThemeForStack$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateThemeForStackRequest;
      output: CreateThemeForStackResult;
    };
    sdk: {
      input: CreateThemeForStackCommandInput;
      output: CreateThemeForStackCommandOutput;
    };
  };
}
