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
import { DescribeManagedLoginBrandingRequest, DescribeManagedLoginBrandingResponse } from "../models/models_0";
import {
  de_DescribeManagedLoginBrandingCommand,
  se_DescribeManagedLoginBrandingCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeManagedLoginBrandingCommand}.
 */
export interface DescribeManagedLoginBrandingCommandInput extends DescribeManagedLoginBrandingRequest {}
/**
 * @public
 *
 * The output of {@link DescribeManagedLoginBrandingCommand}.
 */
export interface DescribeManagedLoginBrandingCommandOutput
  extends DescribeManagedLoginBrandingResponse,
    __MetadataBearer {}

/**
 * <p>Given the ID of a managed login branding style, returns detailed information about the
 *             style.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, DescribeManagedLoginBrandingCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, DescribeManagedLoginBrandingCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // DescribeManagedLoginBrandingRequest
 *   UserPoolId: "STRING_VALUE", // required
 *   ManagedLoginBrandingId: "STRING_VALUE", // required
 *   ReturnMergedResources: true || false,
 * };
 * const command = new DescribeManagedLoginBrandingCommand(input);
 * const response = await client.send(command);
 * // { // DescribeManagedLoginBrandingResponse
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
 * @param DescribeManagedLoginBrandingCommandInput - {@link DescribeManagedLoginBrandingCommandInput}
 * @returns {@link DescribeManagedLoginBrandingCommandOutput}
 * @see {@link DescribeManagedLoginBrandingCommandInput} for command's `input` shape.
 * @see {@link DescribeManagedLoginBrandingCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for CognitoIdentityProviderClient's `config` shape.
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
export class DescribeManagedLoginBrandingCommand extends $Command
  .classBuilder<
    DescribeManagedLoginBrandingCommandInput,
    DescribeManagedLoginBrandingCommandOutput,
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
  .s("AWSCognitoIdentityProviderService", "DescribeManagedLoginBranding", {})
  .n("CognitoIdentityProviderClient", "DescribeManagedLoginBrandingCommand")
  .f(void 0, void 0)
  .ser(se_DescribeManagedLoginBrandingCommand)
  .de(de_DescribeManagedLoginBrandingCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeManagedLoginBrandingRequest;
      output: DescribeManagedLoginBrandingResponse;
    };
    sdk: {
      input: DescribeManagedLoginBrandingCommandInput;
      output: DescribeManagedLoginBrandingCommandOutput;
    };
  };
}
