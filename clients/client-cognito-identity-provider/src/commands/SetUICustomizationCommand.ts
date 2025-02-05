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
  SetUICustomizationRequest,
  SetUICustomizationRequestFilterSensitiveLog,
  SetUICustomizationResponse,
  SetUICustomizationResponseFilterSensitiveLog,
} from "../models/models_1";
import { de_SetUICustomizationCommand, se_SetUICustomizationCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SetUICustomizationCommand}.
 */
export interface SetUICustomizationCommandInput extends SetUICustomizationRequest {}
/**
 * @public
 *
 * The output of {@link SetUICustomizationCommand}.
 */
export interface SetUICustomizationCommandOutput extends SetUICustomizationResponse, __MetadataBearer {}

/**
 * <p>Sets the user interface (UI) customization information for a user pool's built-in app
 *             UI.</p>
 *          <p>You can specify app UI customization settings for a single client (with a specific
 *                 <code>clientId</code>) or for all clients (by setting the <code>clientId</code> to
 *                 <code>ALL</code>). If you specify <code>ALL</code>, the default configuration is
 *             used for every client that has no previously set UI customization. If you specify UI
 *             customization settings for a particular client, it will no longer return to the
 *                 <code>ALL</code> configuration.</p>
 *          <note>
 *             <p>To use this API, your user pool must have a domain associated with it. Otherwise,
 *                 there is no place to host the app's pages, and the service will throw an
 *                 error.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, SetUICustomizationCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, SetUICustomizationCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // SetUICustomizationRequest
 *   UserPoolId: "STRING_VALUE", // required
 *   ClientId: "STRING_VALUE",
 *   CSS: "STRING_VALUE",
 *   ImageFile: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 * };
 * const command = new SetUICustomizationCommand(input);
 * const response = await client.send(command);
 * // { // SetUICustomizationResponse
 * //   UICustomization: { // UICustomizationType
 * //     UserPoolId: "STRING_VALUE",
 * //     ClientId: "STRING_VALUE",
 * //     ImageUrl: "STRING_VALUE",
 * //     CSS: "STRING_VALUE",
 * //     CSSVersion: "STRING_VALUE",
 * //     LastModifiedDate: new Date("TIMESTAMP"),
 * //     CreationDate: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param SetUICustomizationCommandInput - {@link SetUICustomizationCommandInput}
 * @returns {@link SetUICustomizationCommandOutput}
 * @see {@link SetUICustomizationCommandInput} for command's `input` shape.
 * @see {@link SetUICustomizationCommandOutput} for command's `response` shape.
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
export class SetUICustomizationCommand extends $Command
  .classBuilder<
    SetUICustomizationCommandInput,
    SetUICustomizationCommandOutput,
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
  .s("AWSCognitoIdentityProviderService", "SetUICustomization", {})
  .n("CognitoIdentityProviderClient", "SetUICustomizationCommand")
  .f(SetUICustomizationRequestFilterSensitiveLog, SetUICustomizationResponseFilterSensitiveLog)
  .ser(se_SetUICustomizationCommand)
  .de(de_SetUICustomizationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SetUICustomizationRequest;
      output: SetUICustomizationResponse;
    };
    sdk: {
      input: SetUICustomizationCommandInput;
      output: SetUICustomizationCommandOutput;
    };
  };
}
