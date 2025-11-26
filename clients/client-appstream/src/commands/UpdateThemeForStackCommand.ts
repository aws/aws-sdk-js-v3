// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateThemeForStackRequest, UpdateThemeForStackResult } from "../models/models_0";
import { UpdateThemeForStack } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateThemeForStackCommand}.
 */
export interface UpdateThemeForStackCommandInput extends UpdateThemeForStackRequest {}
/**
 * @public
 *
 * The output of {@link UpdateThemeForStackCommand}.
 */
export interface UpdateThemeForStackCommandOutput extends UpdateThemeForStackResult, __MetadataBearer {}

/**
 * <p>Updates custom branding that customizes the appearance of the streaming application catalog page.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, UpdateThemeForStackCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, UpdateThemeForStackCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * // import type { AppStreamClientConfig } from "@aws-sdk/client-appstream";
 * const config = {}; // type is AppStreamClientConfig
 * const client = new AppStreamClient(config);
 * const input = { // UpdateThemeForStackRequest
 *   StackName: "STRING_VALUE", // required
 *   FooterLinks: [ // ThemeFooterLinks
 *     { // ThemeFooterLink
 *       DisplayName: "STRING_VALUE",
 *       FooterLinkURL: "STRING_VALUE",
 *     },
 *   ],
 *   TitleText: "STRING_VALUE",
 *   ThemeStyling: "LIGHT_BLUE" || "BLUE" || "PINK" || "RED",
 *   OrganizationLogoS3Location: { // S3Location
 *     S3Bucket: "STRING_VALUE", // required
 *     S3Key: "STRING_VALUE",
 *   },
 *   FaviconS3Location: {
 *     S3Bucket: "STRING_VALUE", // required
 *     S3Key: "STRING_VALUE",
 *   },
 *   State: "ENABLED" || "DISABLED",
 *   AttributesToDelete: [ // ThemeAttributes
 *     "FOOTER_LINKS",
 *   ],
 * };
 * const command = new UpdateThemeForStackCommand(input);
 * const response = await client.send(command);
 * // { // UpdateThemeForStackResult
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
 * @param UpdateThemeForStackCommandInput - {@link UpdateThemeForStackCommandInput}
 * @returns {@link UpdateThemeForStackCommandOutput}
 * @see {@link UpdateThemeForStackCommandInput} for command's `input` shape.
 * @see {@link UpdateThemeForStackCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>An API error occurred. Wait a few minutes and try again.</p>
 *
 * @throws {@link InvalidAccountStatusException} (client fault)
 *  <p>The resource cannot be created because your AWS account is suspended. For assistance, contact AWS Support. </p>
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>Indicates an incorrect combination of parameters, or a missing parameter.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The requested limit exceeds the permitted limit for an account.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>The attempted operation is not permitted.</p>
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
export class UpdateThemeForStackCommand extends $Command
  .classBuilder<
    UpdateThemeForStackCommandInput,
    UpdateThemeForStackCommandOutput,
    AppStreamClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppStreamClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PhotonAdminProxyService", "UpdateThemeForStack", {})
  .n("AppStreamClient", "UpdateThemeForStackCommand")
  .sc(UpdateThemeForStack)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateThemeForStackRequest;
      output: UpdateThemeForStackResult;
    };
    sdk: {
      input: UpdateThemeForStackCommandInput;
      output: UpdateThemeForStackCommandOutput;
    };
  };
}
