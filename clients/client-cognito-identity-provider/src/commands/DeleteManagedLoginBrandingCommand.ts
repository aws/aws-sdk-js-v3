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
import { DeleteManagedLoginBrandingRequest } from "../models/models_0";
import { de_DeleteManagedLoginBrandingCommand, se_DeleteManagedLoginBrandingCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteManagedLoginBrandingCommand}.
 */
export interface DeleteManagedLoginBrandingCommandInput extends DeleteManagedLoginBrandingRequest {}
/**
 * @public
 *
 * The output of {@link DeleteManagedLoginBrandingCommand}.
 */
export interface DeleteManagedLoginBrandingCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a managed login branding style. When you delete a style, you delete the
 *             branding association for an app client. When an app client doesn't have a style
 *             assigned, your managed login pages for that app client are nonfunctional until you
 *             create a new style or switch the domain branding version.</p>
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
 * import { CognitoIdentityProviderClient, DeleteManagedLoginBrandingCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, DeleteManagedLoginBrandingCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // DeleteManagedLoginBrandingRequest
 *   ManagedLoginBrandingId: "STRING_VALUE", // required
 *   UserPoolId: "STRING_VALUE", // required
 * };
 * const command = new DeleteManagedLoginBrandingCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteManagedLoginBrandingCommandInput - {@link DeleteManagedLoginBrandingCommandInput}
 * @returns {@link DeleteManagedLoginBrandingCommandOutput}
 * @see {@link DeleteManagedLoginBrandingCommandInput} for command's `input` shape.
 * @see {@link DeleteManagedLoginBrandingCommandOutput} for command's `response` shape.
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
export class DeleteManagedLoginBrandingCommand extends $Command
  .classBuilder<
    DeleteManagedLoginBrandingCommandInput,
    DeleteManagedLoginBrandingCommandOutput,
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
  .s("AWSCognitoIdentityProviderService", "DeleteManagedLoginBranding", {})
  .n("CognitoIdentityProviderClient", "DeleteManagedLoginBrandingCommand")
  .f(void 0, void 0)
  .ser(se_DeleteManagedLoginBrandingCommand)
  .de(de_DeleteManagedLoginBrandingCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteManagedLoginBrandingRequest;
      output: {};
    };
    sdk: {
      input: DeleteManagedLoginBrandingCommandInput;
      output: DeleteManagedLoginBrandingCommandOutput;
    };
  };
}
