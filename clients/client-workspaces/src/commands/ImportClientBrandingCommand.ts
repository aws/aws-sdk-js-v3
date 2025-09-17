// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ImportClientBrandingRequest, ImportClientBrandingResult } from "../models/models_0";
import { de_ImportClientBrandingCommand, se_ImportClientBrandingCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ImportClientBrandingCommand}.
 */
export interface ImportClientBrandingCommandInput extends ImportClientBrandingRequest {}
/**
 * @public
 *
 * The output of {@link ImportClientBrandingCommand}.
 */
export interface ImportClientBrandingCommandOutput extends ImportClientBrandingResult, __MetadataBearer {}

/**
 * <p>Imports client branding. Client branding allows you to customize your WorkSpace's client
 *          login portal. You can tailor your login portal company logo, the support email address,
 *          support link, link to reset password, and a custom message for users trying to sign
 *          in.</p>
 *          <p>After you import client branding, the default branding experience for the specified
 *          platform type is replaced with the imported experience</p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>You must specify at least one platform type when importing client
 *                   branding.</p>
 *                </li>
 *                <li>
 *                   <p>You can import up to 6 MB of data with each request. If your request exceeds
 *                   this limit, you can import client branding for different platform types using
 *                   separate requests.</p>
 *                </li>
 *                <li>
 *                   <p>In each platform type, the <code>SupportEmail</code> and
 *                      <code>SupportLink</code> parameters are mutually exclusive. You can specify
 *                   only one parameter for each platform type, but not both.</p>
 *                </li>
 *                <li>
 *                   <p>Imported data can take up to a minute to appear in the WorkSpaces
 *                   client.</p>
 *                </li>
 *             </ul>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, ImportClientBrandingCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, ImportClientBrandingCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * // import type { WorkSpacesClientConfig } from "@aws-sdk/client-workspaces";
 * const config = {}; // type is WorkSpacesClientConfig
 * const client = new WorkSpacesClient(config);
 * const input = { // ImportClientBrandingRequest
 *   ResourceId: "STRING_VALUE", // required
 *   DeviceTypeWindows: { // DefaultImportClientBrandingAttributes
 *     Logo: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *     SupportEmail: "STRING_VALUE",
 *     SupportLink: "STRING_VALUE",
 *     ForgotPasswordLink: "STRING_VALUE",
 *     LoginMessage: { // LoginMessage
 *       "<keys>": "STRING_VALUE",
 *     },
 *   },
 *   DeviceTypeOsx: {
 *     Logo: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *     SupportEmail: "STRING_VALUE",
 *     SupportLink: "STRING_VALUE",
 *     ForgotPasswordLink: "STRING_VALUE",
 *     LoginMessage: {
 *       "<keys>": "STRING_VALUE",
 *     },
 *   },
 *   DeviceTypeAndroid: {
 *     Logo: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *     SupportEmail: "STRING_VALUE",
 *     SupportLink: "STRING_VALUE",
 *     ForgotPasswordLink: "STRING_VALUE",
 *     LoginMessage: {
 *       "<keys>": "STRING_VALUE",
 *     },
 *   },
 *   DeviceTypeIos: { // IosImportClientBrandingAttributes
 *     Logo: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *     Logo2x: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *     Logo3x: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *     SupportEmail: "STRING_VALUE",
 *     SupportLink: "STRING_VALUE",
 *     ForgotPasswordLink: "STRING_VALUE",
 *     LoginMessage: {
 *       "<keys>": "STRING_VALUE",
 *     },
 *   },
 *   DeviceTypeLinux: {
 *     Logo: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *     SupportEmail: "STRING_VALUE",
 *     SupportLink: "STRING_VALUE",
 *     ForgotPasswordLink: "STRING_VALUE",
 *     LoginMessage: {
 *       "<keys>": "STRING_VALUE",
 *     },
 *   },
 *   DeviceTypeWeb: {
 *     Logo: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *     SupportEmail: "STRING_VALUE",
 *     SupportLink: "STRING_VALUE",
 *     ForgotPasswordLink: "STRING_VALUE",
 *     LoginMessage: "<LoginMessage>",
 *   },
 * };
 * const command = new ImportClientBrandingCommand(input);
 * const response = await client.send(command);
 * // { // ImportClientBrandingResult
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
 * @param ImportClientBrandingCommandInput - {@link ImportClientBrandingCommandInput}
 * @returns {@link ImportClientBrandingCommandOutput}
 * @see {@link ImportClientBrandingCommandInput} for command's `input` shape.
 * @see {@link ImportClientBrandingCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user is not authorized to access a resource.</p>
 *
 * @throws {@link InvalidParameterValuesException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *  <p>Your resource limits have been exceeded.</p>
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
export class ImportClientBrandingCommand extends $Command
  .classBuilder<
    ImportClientBrandingCommandInput,
    ImportClientBrandingCommandOutput,
    WorkSpacesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WorkspacesService", "ImportClientBranding", {})
  .n("WorkSpacesClient", "ImportClientBrandingCommand")
  .f(void 0, void 0)
  .ser(se_ImportClientBrandingCommand)
  .de(de_ImportClientBrandingCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ImportClientBrandingRequest;
      output: ImportClientBrandingResult;
    };
    sdk: {
      input: ImportClientBrandingCommandInput;
      output: ImportClientBrandingCommandOutput;
    };
  };
}
