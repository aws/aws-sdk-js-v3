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
import { DeleteUserPoolClientRequest, DeleteUserPoolClientRequestFilterSensitiveLog } from "../models/models_0";
import { de_DeleteUserPoolClientCommand, se_DeleteUserPoolClientCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteUserPoolClientCommand}.
 */
export interface DeleteUserPoolClientCommandInput extends DeleteUserPoolClientRequest {}
/**
 * @public
 *
 * The output of {@link DeleteUserPoolClientCommand}.
 */
export interface DeleteUserPoolClientCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a user pool app client. After you delete an app client, users can no longer
 *             sign in to the associated application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, DeleteUserPoolClientCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, DeleteUserPoolClientCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // import type { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
 * const config = {}; // type is CognitoIdentityProviderClientConfig
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // DeleteUserPoolClientRequest
 *   UserPoolId: "STRING_VALUE", // required
 *   ClientId: "STRING_VALUE", // required
 * };
 * const command = new DeleteUserPoolClientCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteUserPoolClientCommandInput - {@link DeleteUserPoolClientCommandInput}
 * @returns {@link DeleteUserPoolClientCommandOutput}
 * @see {@link DeleteUserPoolClientCommandInput} for command's `input` shape.
 * @see {@link DeleteUserPoolClientCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class DeleteUserPoolClientCommand extends $Command
  .classBuilder<
    DeleteUserPoolClientCommandInput,
    DeleteUserPoolClientCommandOutput,
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
  .s("AWSCognitoIdentityProviderService", "DeleteUserPoolClient", {})
  .n("CognitoIdentityProviderClient", "DeleteUserPoolClientCommand")
  .f(DeleteUserPoolClientRequestFilterSensitiveLog, void 0)
  .ser(se_DeleteUserPoolClientCommand)
  .de(de_DeleteUserPoolClientCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteUserPoolClientRequest;
      output: {};
    };
    sdk: {
      input: DeleteUserPoolClientCommandInput;
      output: DeleteUserPoolClientCommandOutput;
    };
  };
}
