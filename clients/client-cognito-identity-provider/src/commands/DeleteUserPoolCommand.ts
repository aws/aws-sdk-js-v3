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
import { DeleteUserPoolRequest } from "../models/models_0";
import { de_DeleteUserPoolCommand, se_DeleteUserPoolCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteUserPoolCommand}.
 */
export interface DeleteUserPoolCommandInput extends DeleteUserPoolRequest {}
/**
 * @public
 *
 * The output of {@link DeleteUserPoolCommand}.
 */
export interface DeleteUserPoolCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a user pool. After you delete a user pool, users can no longer sign in to any
 *             associated applications. </p>
 *          <p></p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, DeleteUserPoolCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, DeleteUserPoolCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // DeleteUserPoolRequest
 *   UserPoolId: "STRING_VALUE", // required
 * };
 * const command = new DeleteUserPoolCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteUserPoolCommandInput - {@link DeleteUserPoolCommandInput}
 * @returns {@link DeleteUserPoolCommandOutput}
 * @see {@link DeleteUserPoolCommandInput} for command's `input` shape.
 * @see {@link DeleteUserPoolCommandOutput} for command's `response` shape.
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
 * @throws {@link UserImportInProgressException} (client fault)
 *  <p>This exception is thrown when you're trying to modify a user pool while a user import
 *             job is in progress for that pool.</p>
 *
 * @throws {@link CognitoIdentityProviderServiceException}
 * <p>Base exception class for all service exceptions from CognitoIdentityProvider service.</p>
 *
 * @public
 */
export class DeleteUserPoolCommand extends $Command
  .classBuilder<
    DeleteUserPoolCommandInput,
    DeleteUserPoolCommandOutput,
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
  .s("AWSCognitoIdentityProviderService", "DeleteUserPool", {})
  .n("CognitoIdentityProviderClient", "DeleteUserPoolCommand")
  .f(void 0, void 0)
  .ser(se_DeleteUserPoolCommand)
  .de(de_DeleteUserPoolCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteUserPoolRequest;
      output: {};
    };
    sdk: {
      input: DeleteUserPoolCommandInput;
      output: DeleteUserPoolCommandOutput;
    };
  };
}
