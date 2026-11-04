// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteUserAttributesRequest, DeleteUserAttributesResponse } from "../models/models_0";
import { DeleteUserAttributes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteUserAttributesCommand}.
 */
export interface DeleteUserAttributesCommandInput extends DeleteUserAttributesRequest {}
/**
 * @public
 *
 * The output of {@link DeleteUserAttributesCommand}.
 */
export interface DeleteUserAttributesCommandOutput extends DeleteUserAttributesResponse, __MetadataBearer {}

/**
 * Deletes attributes from the currently signed-in user. For example, your application can submit a request to this operation when a user wants to remove their `birthdate` attribute value.
 *
 * Authorize this action with a signed-in user's access token. It must include the scope `aws.cognito.signin.user.admin`.
 *
 * > **Note:** Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see [Using the Amazon Cognito user pools API and user pool endpoints](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, DeleteUserAttributesCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, DeleteUserAttributesCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // import type { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
 * const config = {}; // type is CognitoIdentityProviderClientConfig
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // DeleteUserAttributesRequest
 *   UserAttributeNames: [ // AttributeNameListType // required
 *     "STRING_VALUE",
 *   ],
 *   AccessToken: "STRING_VALUE", // required
 * };
 * const command = new DeleteUserAttributesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteUserAttributesCommandInput - {@link DeleteUserAttributesCommandInput}
 * @returns {@link DeleteUserAttributesCommandOutput}
 * @see {@link DeleteUserAttributesCommandInput} for command's `input` shape.
 * @see {@link DeleteUserAttributesCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for CognitoIdentityProviderClient's `config` shape.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * This exception is thrown when WAF doesn't allow your request based on a web ACL that's associated with your user pool.
 *
 * @throws {@link InternalErrorException} (server fault)
 *
 * This exception is thrown when Amazon Cognito encounters an internal error.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * This exception is thrown when the Amazon Cognito service encounters an invalid parameter.
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *
 * This exception is thrown when a user isn't authorized.
 *
 * @throws {@link OperationNotEnabledException} (client fault)
 *
 * This exception is thrown when an operation is not available in the current region or for the current user pool configuration. This can occur when attempting to perform operations that are not supported in secondary replica regions.
 *
 * @throws {@link PasswordResetRequiredException} (client fault)
 *
 * This exception is thrown when a password reset is required.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * This exception is thrown when the Amazon Cognito service can't find the requested resource.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * This exception is thrown when the user has made too many requests for a given operation.
 *
 * @throws {@link UserNotConfirmedException} (client fault)
 *
 * This exception is thrown when a user isn't confirmed successfully.
 *
 * @throws {@link UserNotFoundException} (client fault)
 *
 * This exception is thrown when a user isn't found.
 *
 * @throws {@link CognitoIdentityProviderServiceException}
 *
 * Base exception class for all service exceptions from CognitoIdentityProvider service.
 *
 * @public
 */
export class DeleteUserAttributesCommand extends command<DeleteUserAttributesCommandInput, DeleteUserAttributesCommandOutput>(
  _ep0,
  _mw0,
  "DeleteUserAttributes",
  DeleteUserAttributes$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteUserAttributesRequest;
      output: {};
    };
    sdk: {
      input: DeleteUserAttributesCommandInput;
      output: DeleteUserAttributesCommandOutput;
    };
  };
}
