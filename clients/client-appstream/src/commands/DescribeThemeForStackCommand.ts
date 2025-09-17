// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeThemeForStackRequest, DescribeThemeForStackResult } from "../models/models_0";
import { de_DescribeThemeForStackCommand, se_DescribeThemeForStackCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeThemeForStackCommand}.
 */
export interface DescribeThemeForStackCommandInput extends DescribeThemeForStackRequest {}
/**
 * @public
 *
 * The output of {@link DescribeThemeForStackCommand}.
 */
export interface DescribeThemeForStackCommandOutput extends DescribeThemeForStackResult, __MetadataBearer {}

/**
 * <p>Retrieves a list that describes the theme for a specified stack. A theme is custom branding that customizes the appearance of the streaming application catalog page.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, DescribeThemeForStackCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, DescribeThemeForStackCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * // import type { AppStreamClientConfig } from "@aws-sdk/client-appstream";
 * const config = {}; // type is AppStreamClientConfig
 * const client = new AppStreamClient(config);
 * const input = { // DescribeThemeForStackRequest
 *   StackName: "STRING_VALUE", // required
 * };
 * const command = new DescribeThemeForStackCommand(input);
 * const response = await client.send(command);
 * // { // DescribeThemeForStackResult
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
 * @param DescribeThemeForStackCommandInput - {@link DescribeThemeForStackCommandInput}
 * @returns {@link DescribeThemeForStackCommandOutput}
 * @see {@link DescribeThemeForStackCommandInput} for command's `input` shape.
 * @see {@link DescribeThemeForStackCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
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
export class DescribeThemeForStackCommand extends $Command
  .classBuilder<
    DescribeThemeForStackCommandInput,
    DescribeThemeForStackCommandOutput,
    AppStreamClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppStreamClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("PhotonAdminProxyService", "DescribeThemeForStack", {})
  .n("AppStreamClient", "DescribeThemeForStackCommand")
  .f(void 0, void 0)
  .ser(se_DescribeThemeForStackCommand)
  .de(de_DescribeThemeForStackCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeThemeForStackRequest;
      output: DescribeThemeForStackResult;
    };
    sdk: {
      input: DescribeThemeForStackCommandInput;
      output: DescribeThemeForStackCommandOutput;
    };
  };
}
