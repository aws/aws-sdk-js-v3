// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityProviderClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateManagedLoginBrandingRequest, UpdateManagedLoginBrandingResponse } from "../models/models_1";
import { de_UpdateManagedLoginBrandingCommand, se_UpdateManagedLoginBrandingCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateManagedLoginBrandingCommand}.
 */
export interface UpdateManagedLoginBrandingCommandInput extends UpdateManagedLoginBrandingRequest {}
/**
 * @public
 *
 * The output of {@link UpdateManagedLoginBrandingCommand}.
 */
export interface UpdateManagedLoginBrandingCommandOutput extends UpdateManagedLoginBrandingResponse, __MetadataBearer {}

/**
 * <p>Configures the branding settings for a user pool style. This operation is the
 *             programmatic option for the configuration of a style in the branding designer.</p>
 *          <p>Provides values for UI customization in a <code>Settings</code> JSON object and image
 *             files in an <code>Assets</code> array.</p>
 *          <p> This operation has a 2-megabyte request-size limit and include the CSS settings and
 *             image assets for your app client. Your branding settings might exceed 2MB in size. Amazon Cognito
 *             doesn't require that you pass all parameters in one request and preserves existing
 *             style settings that you don't specify. If your request is larger than 2MB, separate it
 *             into multiple requests, each with a size smaller than the limit. </p>
 *          <p>As a best practice, modify the output of <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DescribeManagedLoginBrandingByClient.html">DescribeManagedLoginBrandingByClient</a> into the request parameters for this
 *             operation. To get all settings, set <code>ReturnMergedResources</code> to
 *                 <code>true</code>. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/managed-login-brandingdesigner.html#branding-designer-api">API and SDK operations for managed login branding</a>
 *          </p>
 *          <note>
 *             <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 *     this operation, you must use IAM credentials to authorize requests, and you must
 *     grant yourself the corresponding IAM permission in a policy.</p>
 *             <p class="title">
 *                <b>Learn more</b>
 *             </p>
 *             <ul>
 *                <li>
 *                   <p>
 *                      <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a>
 *                   </p>
 *                </li>
 *                <li>
 *                   <p>
 *                      <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a>
 *                   </p>
 *                </li>
 *             </ul>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, UpdateManagedLoginBrandingCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, UpdateManagedLoginBrandingCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // UpdateManagedLoginBrandingRequest
 *   UserPoolId: "STRING_VALUE",
 *   ManagedLoginBrandingId: "STRING_VALUE",
 *   UseCognitoProvidedValues: true || false,
 *   Settings: "DOCUMENT_VALUE",
 *   Assets: [ // AssetListType
 *     { // AssetType
 *       Category: "FAVICON_ICO" || "FAVICON_SVG" || "EMAIL_GRAPHIC" || "SMS_GRAPHIC" || "AUTH_APP_GRAPHIC" || "PASSWORD_GRAPHIC" || "PASSKEY_GRAPHIC" || "PAGE_HEADER_LOGO" || "PAGE_HEADER_BACKGROUND" || "PAGE_FOOTER_LOGO" || "PAGE_FOOTER_BACKGROUND" || "PAGE_BACKGROUND" || "FORM_BACKGROUND" || "FORM_LOGO" || "IDP_BUTTON_ICON", // required
 *       ColorMode: "LIGHT" || "DARK" || "DYNAMIC", // required
 *       Extension: "ICO" || "JPEG" || "PNG" || "SVG" || "WEBP", // required
 *       Bytes: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *       ResourceId: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new UpdateManagedLoginBrandingCommand(input);
 * const response = await client.send(command);
 * // { // UpdateManagedLoginBrandingResponse
 * //   ManagedLoginBranding: { // ManagedLoginBrandingType
 * //     ManagedLoginBrandingId: "STRING_VALUE",
 * //     UserPoolId: "STRING_VALUE",
 * //     UseCognitoProvidedValues: true || false,
 * //     Settings: "DOCUMENT_VALUE",
 * //     Assets: [ // AssetListType
 * //       { // AssetType
 * //         Category: "FAVICON_ICO" || "FAVICON_SVG" || "EMAIL_GRAPHIC" || "SMS_GRAPHIC" || "AUTH_APP_GRAPHIC" || "PASSWORD_GRAPHIC" || "PASSKEY_GRAPHIC" || "PAGE_HEADER_LOGO" || "PAGE_HEADER_BACKGROUND" || "PAGE_FOOTER_LOGO" || "PAGE_FOOTER_BACKGROUND" || "PAGE_BACKGROUND" || "FORM_BACKGROUND" || "FORM_LOGO" || "IDP_BUTTON_ICON", // required
 * //         ColorMode: "LIGHT" || "DARK" || "DYNAMIC", // required
 * //         Extension: "ICO" || "JPEG" || "PNG" || "SVG" || "WEBP", // required
 * //         Bytes: new Uint8Array(),
 * //         ResourceId: "STRING_VALUE",
 * //       },
 * //     ],
 * //     CreationDate: new Date("TIMESTAMP"),
 * //     LastModifiedDate: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateManagedLoginBrandingCommandInput - {@link UpdateManagedLoginBrandingCommandInput}
 * @returns {@link UpdateManagedLoginBrandingCommandOutput}
 * @see {@link UpdateManagedLoginBrandingCommandInput} for command's `input` shape.
 * @see {@link UpdateManagedLoginBrandingCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for CognitoIdentityProviderClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>This exception is thrown if two or more modifications are happening
 *             concurrently.</p>
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>This exception is thrown when the Amazon Cognito service encounters an invalid
 *             parameter.</p>
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *  <p>This exception is thrown when a user isn't authorized.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when the Amazon Cognito service can't find the requested
 *             resource.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>This exception is thrown when the user has made too many requests for a given
 *             operation.</p>
 *
 * @throws {@link CognitoIdentityProviderServiceException}
 * <p>Base exception class for all service exceptions from CognitoIdentityProvider service.</p>
 *
 * @public
 */
export class UpdateManagedLoginBrandingCommand extends $Command
  .classBuilder<
    UpdateManagedLoginBrandingCommandInput,
    UpdateManagedLoginBrandingCommandOutput,
    CognitoIdentityProviderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CognitoIdentityProviderClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSCognitoIdentityProviderService", "UpdateManagedLoginBranding", {})
  .n("CognitoIdentityProviderClient", "UpdateManagedLoginBrandingCommand")
  .f(void 0, void 0)
  .ser(se_UpdateManagedLoginBrandingCommand)
  .de(de_UpdateManagedLoginBrandingCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateManagedLoginBrandingRequest;
      output: UpdateManagedLoginBrandingResponse;
    };
    sdk: {
      input: UpdateManagedLoginBrandingCommandInput;
      output: UpdateManagedLoginBrandingCommandOutput;
    };
  };
}
