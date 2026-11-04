// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AdminRemoveUserFromGroupRequest } from "../models/models_0";
import { AdminRemoveUserFromGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AdminRemoveUserFromGroupCommand}.
 */
export interface AdminRemoveUserFromGroupCommandInput extends AdminRemoveUserFromGroupRequest {}
/**
 * @public
 *
 * The output of {@link AdminRemoveUserFromGroupCommand}.
 */
export interface AdminRemoveUserFromGroupCommandOutput extends __MetadataBearer {}

/**
 * Given a username and a group name, removes them from the group. User pool groups are identifiers that you can reference from the contents of ID and access tokens, and set preferred IAM roles for identity-pool authentication. For more information, see [Adding groups to a user pool](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-user-groups.html).
 *
 * > **Note:**
 * >
 * > Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.
 * >
 * > **Learn more**
 * >
 * > - [Signing Amazon Web Services API Requests](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html)
 * > - [Using the Amazon Cognito user pools API and user pool endpoints](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html)
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, AdminRemoveUserFromGroupCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AdminRemoveUserFromGroupCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // import type { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
 * const config = {}; // type is CognitoIdentityProviderClientConfig
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // AdminRemoveUserFromGroupRequest
 *   UserPoolId: "STRING_VALUE", // required
 *   Username: "STRING_VALUE", // required
 *   GroupName: "STRING_VALUE", // required
 * };
 * const command = new AdminRemoveUserFromGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AdminRemoveUserFromGroupCommandInput - {@link AdminRemoveUserFromGroupCommandInput}
 * @returns {@link AdminRemoveUserFromGroupCommandOutput}
 * @see {@link AdminRemoveUserFromGroupCommandInput} for command's `input` shape.
 * @see {@link AdminRemoveUserFromGroupCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for CognitoIdentityProviderClient's `config` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * This exception is thrown when the Amazon Cognito service can't find the requested resource.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * This exception is thrown when the user has made too many requests for a given operation.
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
export class AdminRemoveUserFromGroupCommand extends command<AdminRemoveUserFromGroupCommandInput, AdminRemoveUserFromGroupCommandOutput>(
  _ep0,
  _mw0,
  "AdminRemoveUserFromGroup",
  AdminRemoveUserFromGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AdminRemoveUserFromGroupRequest;
      output: {};
    };
    sdk: {
      input: AdminRemoveUserFromGroupCommandInput;
      output: AdminRemoveUserFromGroupCommandOutput;
    };
  };
}
