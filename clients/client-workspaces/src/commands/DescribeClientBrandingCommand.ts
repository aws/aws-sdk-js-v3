// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeClientBrandingRequest, DescribeClientBrandingResult } from "../models/models_0";
import { DescribeClientBranding } from "../schemas/schemas_8_ClientBranding";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeClientBrandingCommand}.
 */
export interface DescribeClientBrandingCommandInput extends DescribeClientBrandingRequest {}
/**
 * @public
 *
 * The output of {@link DescribeClientBrandingCommand}.
 */
export interface DescribeClientBrandingCommandOutput extends DescribeClientBrandingResult, __MetadataBearer {}

/**
 * <p>Describes the specified client branding. Client branding allows you to customize the log
 *          in page of various device types for your users. You can add your company logo, the support
 *          email address, support link, link to reset password, and a custom message for users trying
 *          to sign in.</p>
 *          <note>
 *             <p>Only device types that have branding information configured will be shown in the
 *             response.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, DescribeClientBrandingCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, DescribeClientBrandingCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * // import type { WorkSpacesClientConfig } from "@aws-sdk/client-workspaces";
 * const config = {}; // type is WorkSpacesClientConfig
 * const client = new WorkSpacesClient(config);
 * const input = { // DescribeClientBrandingRequest
 *   ResourceId: "STRING_VALUE", // required
 * };
 * const command = new DescribeClientBrandingCommand(input);
 * const response = await client.send(command);
 * // { // DescribeClientBrandingResult
 * //   DeviceTypeWindows: { // DefaultClientBrandingAttributes
 * //     LogoUrl: "STRING_VALUE",
 * //     SupportEmail: "STRING_VALUE",
 * //     SupportLink: "STRING_VALUE",
 * //     ForgotPasswordLink: "STRING_VALUE",
 * //     LoginMessage: { // LoginMessage
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * //   DeviceTypeOsx: {
 * //     LogoUrl: "STRING_VALUE",
 * //     SupportEmail: "STRING_VALUE",
 * //     SupportLink: "STRING_VALUE",
 * //     ForgotPasswordLink: "STRING_VALUE",
 * //     LoginMessage: {
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * //   DeviceTypeAndroid: {
 * //     LogoUrl: "STRING_VALUE",
 * //     SupportEmail: "STRING_VALUE",
 * //     SupportLink: "STRING_VALUE",
 * //     ForgotPasswordLink: "STRING_VALUE",
 * //     LoginMessage: {
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * //   DeviceTypeIos: { // IosClientBrandingAttributes
 * //     LogoUrl: "STRING_VALUE",
 * //     Logo2xUrl: "STRING_VALUE",
 * //     Logo3xUrl: "STRING_VALUE",
 * //     SupportEmail: "STRING_VALUE",
 * //     SupportLink: "STRING_VALUE",
 * //     ForgotPasswordLink: "STRING_VALUE",
 * //     LoginMessage: {
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * //   DeviceTypeLinux: {
 * //     LogoUrl: "STRING_VALUE",
 * //     SupportEmail: "STRING_VALUE",
 * //     SupportLink: "STRING_VALUE",
 * //     ForgotPasswordLink: "STRING_VALUE",
 * //     LoginMessage: {
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * //   DeviceTypeWeb: {
 * //     LogoUrl: "STRING_VALUE",
 * //     SupportEmail: "STRING_VALUE",
 * //     SupportLink: "STRING_VALUE",
 * //     ForgotPasswordLink: "STRING_VALUE",
 * //     LoginMessage: "<LoginMessage>",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeClientBrandingCommandInput - {@link DescribeClientBrandingCommandInput}
 * @returns {@link DescribeClientBrandingCommandOutput}
 * @see {@link DescribeClientBrandingCommandInput} for command's `input` shape.
 * @see {@link DescribeClientBrandingCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user is not authorized to access a resource.</p>
 *
 * @throws {@link InvalidParameterValuesException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link WorkSpacesServiceException}
 * <p>Base exception class for all service exceptions from WorkSpaces service.</p>
 *
 *
 * @public
 */
export class DescribeClientBrandingCommand extends $Command
  .classBuilder<
    DescribeClientBrandingCommandInput,
    DescribeClientBrandingCommandOutput,
    WorkSpacesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WorkspacesService", "DescribeClientBranding", {})
  .n("WorkSpacesClient", "DescribeClientBrandingCommand")
  .sc(DescribeClientBranding)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeClientBrandingRequest;
      output: DescribeClientBrandingResult;
    };
    sdk: {
      input: DescribeClientBrandingCommandInput;
      output: DescribeClientBrandingCommandOutput;
    };
  };
}
