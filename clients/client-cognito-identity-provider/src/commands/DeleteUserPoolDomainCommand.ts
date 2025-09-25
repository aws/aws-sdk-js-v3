// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityProviderClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteUserPoolDomainRequest, DeleteUserPoolDomainResponse } from "../models/models_0";
import { DeleteUserPoolDomain } from "../schemas/schemas_8_UserPool";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteUserPoolDomainCommand}.
 */
export interface DeleteUserPoolDomainCommandInput extends DeleteUserPoolDomainRequest {}
/**
 * @public
 *
 * The output of {@link DeleteUserPoolDomainCommand}.
 */
export interface DeleteUserPoolDomainCommandOutput extends DeleteUserPoolDomainResponse, __MetadataBearer {}

/**
 * <p>Given a user pool ID and domain identifier, deletes a user pool domain. After you
 *             delete a user pool domain, your managed login pages and authorization server are no
 *             longer available.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, DeleteUserPoolDomainCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, DeleteUserPoolDomainCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // import type { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
 * const config = {}; // type is CognitoIdentityProviderClientConfig
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // DeleteUserPoolDomainRequest
 *   Domain: "STRING_VALUE", // required
 *   UserPoolId: "STRING_VALUE", // required
 * };
 * const command = new DeleteUserPoolDomainCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteUserPoolDomainCommandInput - {@link DeleteUserPoolDomainCommandInput}
 * @returns {@link DeleteUserPoolDomainCommandOutput}
 * @see {@link DeleteUserPoolDomainCommandInput} for command's `input` shape.
 * @see {@link DeleteUserPoolDomainCommandOutput} for command's `response` shape.
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
 * @throws {@link CognitoIdentityProviderServiceException}
 * <p>Base exception class for all service exceptions from CognitoIdentityProvider service.</p>
 *
 *
 * @public
 */
export class DeleteUserPoolDomainCommand extends $Command
  .classBuilder<
    DeleteUserPoolDomainCommandInput,
    DeleteUserPoolDomainCommandOutput,
    CognitoIdentityProviderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CognitoIdentityProviderClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSCognitoIdentityProviderService", "DeleteUserPoolDomain", {})
  .n("CognitoIdentityProviderClient", "DeleteUserPoolDomainCommand")
  .sc(DeleteUserPoolDomain)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteUserPoolDomainRequest;
      output: {};
    };
    sdk: {
      input: DeleteUserPoolDomainCommandInput;
      output: DeleteUserPoolDomainCommandOutput;
    };
  };
}
