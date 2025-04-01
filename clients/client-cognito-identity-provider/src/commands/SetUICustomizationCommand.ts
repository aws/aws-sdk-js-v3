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
 * <p>Configures UI branding settings for domains with the hosted UI (classic) branding
 *             version. Your user pool must have a domain. Configure a domain with .</p>
 *          <p>Set the default configuration for all clients with a <code>ClientId</code> of
 *                 <code>ALL</code>. When the <code>ClientId</code> value is an app client ID, the
 *             settings you pass in this request apply to that app client and override the default
 *                 <code>ALL</code> configuration.</p>
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
 * import { CognitoIdentityProviderClient, SetUICustomizationCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, SetUICustomizationCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
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
