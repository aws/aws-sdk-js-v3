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
  GetUICustomizationRequest,
  GetUICustomizationRequestFilterSensitiveLog,
  GetUICustomizationResponse,
  GetUICustomizationResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_GetUICustomizationCommand, se_GetUICustomizationCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetUICustomizationCommand}.
 */
export interface GetUICustomizationCommandInput extends GetUICustomizationRequest {}
/**
 * @public
 *
 * The output of {@link GetUICustomizationCommand}.
 */
export interface GetUICustomizationCommandOutput extends GetUICustomizationResponse, __MetadataBearer {}

/**
 * <p>Given a user pool ID or app client, returns information about classic hosted UI
 *             branding that you applied, if any. Returns user-pool level branding information if no
 *             app client branding is applied, or if you don't specify an app client ID. Returns
 *             an empty object if you haven't applied hosted UI branding to either the client or
 *             the user pool. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/hosted-ui-classic-branding.html">Hosted UI (classic) branding</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, GetUICustomizationCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, GetUICustomizationCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // GetUICustomizationRequest
 *   UserPoolId: "STRING_VALUE", // required
 *   ClientId: "STRING_VALUE",
 * };
 * const command = new GetUICustomizationCommand(input);
 * const response = await client.send(command);
 * // { // GetUICustomizationResponse
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
 * @param GetUICustomizationCommandInput - {@link GetUICustomizationCommandInput}
 * @returns {@link GetUICustomizationCommandOutput}
 * @see {@link GetUICustomizationCommandInput} for command's `input` shape.
 * @see {@link GetUICustomizationCommandOutput} for command's `response` shape.
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
export class GetUICustomizationCommand extends $Command
  .classBuilder<
    GetUICustomizationCommandInput,
    GetUICustomizationCommandOutput,
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
  .s("AWSCognitoIdentityProviderService", "GetUICustomization", {})
  .n("CognitoIdentityProviderClient", "GetUICustomizationCommand")
  .f(GetUICustomizationRequestFilterSensitiveLog, GetUICustomizationResponseFilterSensitiveLog)
  .ser(se_GetUICustomizationCommand)
  .de(de_GetUICustomizationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetUICustomizationRequest;
      output: GetUICustomizationResponse;
    };
    sdk: {
      input: GetUICustomizationCommandInput;
      output: GetUICustomizationCommandOutput;
    };
  };
}
