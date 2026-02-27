// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityProviderClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteUserPoolClientSecretRequest, DeleteUserPoolClientSecretResponse } from "../models/models_0";
import { DeleteUserPoolClientSecret$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteUserPoolClientSecretCommand}.
 */
export interface DeleteUserPoolClientSecretCommandInput extends DeleteUserPoolClientSecretRequest {}
/**
 * @public
 *
 * The output of {@link DeleteUserPoolClientSecretCommand}.
 */
export interface DeleteUserPoolClientSecretCommandOutput extends DeleteUserPoolClientSecretResponse, __MetadataBearer {}

/**
 * <p>Deletes a specific client secret from a user pool app client. You cannot delete the last remaining secret for an app client.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, DeleteUserPoolClientSecretCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, DeleteUserPoolClientSecretCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // import type { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
 * const config = {}; // type is CognitoIdentityProviderClientConfig
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // DeleteUserPoolClientSecretRequest
 *   UserPoolId: "STRING_VALUE", // required
 *   ClientId: "STRING_VALUE", // required
 *   ClientSecretId: "STRING_VALUE", // required
 * };
 * const command = new DeleteUserPoolClientSecretCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteUserPoolClientSecretCommandInput - {@link DeleteUserPoolClientSecretCommandInput}
 * @returns {@link DeleteUserPoolClientSecretCommandOutput}
 * @see {@link DeleteUserPoolClientSecretCommandInput} for command's `input` shape.
 * @see {@link DeleteUserPoolClientSecretCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for CognitoIdentityProviderClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception is thrown when Amazon Cognito encounters an internal server error.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>This exception is thrown when the Amazon Cognito service encounters an invalid
 *             parameter.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>This exception is thrown when a user exceeds the limit for a requested Amazon Web Services
 *             resource.</p>
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
export class DeleteUserPoolClientSecretCommand extends $Command
  .classBuilder<
    DeleteUserPoolClientSecretCommandInput,
    DeleteUserPoolClientSecretCommandOutput,
    CognitoIdentityProviderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CognitoIdentityProviderClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSCognitoIdentityProviderService", "DeleteUserPoolClientSecret", {})
  .n("CognitoIdentityProviderClient", "DeleteUserPoolClientSecretCommand")
  .sc(DeleteUserPoolClientSecret$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteUserPoolClientSecretRequest;
      output: {};
    };
    sdk: {
      input: DeleteUserPoolClientSecretCommandInput;
      output: DeleteUserPoolClientSecretCommandOutput;
    };
  };
}
