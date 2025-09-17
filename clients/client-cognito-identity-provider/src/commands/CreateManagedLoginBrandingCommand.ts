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
import {
  CreateManagedLoginBrandingRequest,
  CreateManagedLoginBrandingRequestFilterSensitiveLog,
  CreateManagedLoginBrandingResponse,
} from "../models/models_0";
import { de_CreateManagedLoginBrandingCommand, se_CreateManagedLoginBrandingCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateManagedLoginBrandingCommand}.
 */
export interface CreateManagedLoginBrandingCommandInput extends CreateManagedLoginBrandingRequest {}
/**
 * @public
 *
 * The output of {@link CreateManagedLoginBrandingCommand}.
 */
export interface CreateManagedLoginBrandingCommandOutput extends CreateManagedLoginBrandingResponse, __MetadataBearer {}

/**
 * <p>Creates a new set of branding settings for a user pool style and associates it with an
 *             app client. This operation is the programmatic option for the creation of a new style in
 *             the branding editor.</p>
 *          <p>Provides values for UI customization in a <code>Settings</code> JSON object and image
 *             files in an <code>Assets</code> array. To send the JSON object <code>Document</code>
 *             type parameter in <code>Settings</code>, you might need to update to the most recent
 *             version of your Amazon Web Services SDK. To create a new style with default settings, set
 *                 <code>UseCognitoProvidedValues</code> to <code>true</code> and don't provide
 *             values for any other options.</p>
 *          <p> This operation has a 2-megabyte request-size limit and include the CSS settings and
 *             image assets for your app client. Your branding settings might exceed 2MB in size. Amazon Cognito
 *             doesn't require that you pass all parameters in one request and preserves existing
 *             style settings that you don't specify. If your request is larger than 2MB, separate it
 *             into multiple requests, each with a size smaller than the limit. </p>
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
 * import { CognitoIdentityProviderClient, CreateManagedLoginBrandingCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, CreateManagedLoginBrandingCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // import type { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
 * const config = {}; // type is CognitoIdentityProviderClientConfig
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // CreateManagedLoginBrandingRequest
 *   UserPoolId: "STRING_VALUE", // required
 *   ClientId: "STRING_VALUE", // required
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
 * const command = new CreateManagedLoginBrandingCommand(input);
 * const response = await client.send(command);
 * // { // CreateManagedLoginBrandingResponse
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
 * @param CreateManagedLoginBrandingCommandInput - {@link CreateManagedLoginBrandingCommandInput}
 * @returns {@link CreateManagedLoginBrandingCommandOutput}
 * @see {@link CreateManagedLoginBrandingCommandInput} for command's `input` shape.
 * @see {@link CreateManagedLoginBrandingCommandOutput} for command's `response` shape.
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
 * @throws {@link LimitExceededException} (client fault)
 *  <p>This exception is thrown when a user exceeds the limit for a requested Amazon Web Services
 *             resource.</p>
 *
 * @throws {@link ManagedLoginBrandingExistsException} (client fault)
 *  <p>This exception is thrown when you attempt to apply a managed login branding style to
 *             an app client that already has an assigned style.</p>
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
 *
 * @public
 */
export class CreateManagedLoginBrandingCommand extends $Command
  .classBuilder<
    CreateManagedLoginBrandingCommandInput,
    CreateManagedLoginBrandingCommandOutput,
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
  .s("AWSCognitoIdentityProviderService", "CreateManagedLoginBranding", {})
  .n("CognitoIdentityProviderClient", "CreateManagedLoginBrandingCommand")
  .f(CreateManagedLoginBrandingRequestFilterSensitiveLog, void 0)
  .ser(se_CreateManagedLoginBrandingCommand)
  .de(de_CreateManagedLoginBrandingCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateManagedLoginBrandingRequest;
      output: CreateManagedLoginBrandingResponse;
    };
    sdk: {
      input: CreateManagedLoginBrandingCommandInput;
      output: CreateManagedLoginBrandingCommandOutput;
    };
  };
}
