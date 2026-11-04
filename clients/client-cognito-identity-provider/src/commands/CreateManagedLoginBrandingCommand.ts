// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateManagedLoginBrandingRequest, CreateManagedLoginBrandingResponse } from "../models/models_0";
import { CreateManagedLoginBranding$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates a new set of branding settings for a user pool style and associates it with an app client. This operation is the programmatic option for the creation of a new style in the branding editor.
 *
 * Provides values for UI customization in a `Settings` JSON object and image files in an `Assets` array. To send the JSON object `Document` type parameter in `Settings`, you might need to update to the most recent version of your Amazon Web Services SDK. To create a new style with default settings, set `UseCognitoProvidedValues` to `true` and don't provide values for any other options.
 *
 * This operation has a 2-megabyte request-size limit and include the CSS settings and image assets for your app client. Your branding settings might exceed 2MB in size. Amazon Cognito doesn't require that you pass all parameters in one request and preserves existing style settings that you don't specify. If your request is larger than 2MB, separate it into multiple requests, each with a size smaller than the limit.
 *
 * > **Note:**
 * >
 * > Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.
 * >
 * > **Learn more**
 * >
 * > - [Signing Amazon Web Services API Requests](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html)
 * > - [Using the Amazon Cognito user pools API and user pool endpoints](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html)
 *
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
 *
 * This exception is thrown if two or more modifications are happening concurrently.
 *
 * @throws {@link InternalErrorException} (server fault)
 *
 * This exception is thrown when Amazon Cognito encounters an internal error.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * This exception is thrown when the Amazon Cognito service encounters an invalid parameter.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * This exception is thrown when a user exceeds the limit for a requested Amazon Web Services resource.
 *
 * @throws {@link ManagedLoginBrandingExistsException} (client fault)
 *
 * This exception is thrown when you attempt to apply a managed login branding style to an app client that already has an assigned style.
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *
 * This exception is thrown when a user isn't authorized.
 *
 * @throws {@link OperationNotEnabledException} (client fault)
 *
 * This exception is thrown when an operation is not available in the current region or for the current user pool configuration. This can occur when attempting to perform operations that are not supported in secondary replica regions.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * This exception is thrown when the Amazon Cognito service can't find the requested resource.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * This exception is thrown when the user has made too many requests for a given operation.
 *
 * @throws {@link CognitoIdentityProviderServiceException}
 *
 * Base exception class for all service exceptions from CognitoIdentityProvider service.
 *
 * @public
 */
export class CreateManagedLoginBrandingCommand extends command<CreateManagedLoginBrandingCommandInput, CreateManagedLoginBrandingCommandOutput>(
  _ep0,
  _mw0,
  "CreateManagedLoginBranding",
  CreateManagedLoginBranding$
) {
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
