// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListResourceServersRequest, ListResourceServersResponse } from "../models/models_0";
import { ListResourceServers$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListResourceServersCommand}.
 */
export interface ListResourceServersCommandInput extends ListResourceServersRequest {}
/**
 * @public
 *
 * The output of {@link ListResourceServersCommand}.
 */
export interface ListResourceServersCommandOutput extends ListResourceServersResponse, __MetadataBearer {}

/**
 * Given a user pool ID, returns all resource servers and their details. For more information about resource servers, see [Access control with resource servers](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-define-resource-servers.html).
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
 * import { CognitoIdentityProviderClient, ListResourceServersCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, ListResourceServersCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // import type { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
 * const config = {}; // type is CognitoIdentityProviderClientConfig
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // ListResourceServersRequest
 *   UserPoolId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListResourceServersCommand(input);
 * const response = await client.send(command);
 * // { // ListResourceServersResponse
 * //   ResourceServers: [ // ResourceServersListType // required
 * //     { // ResourceServerType
 * //       UserPoolId: "STRING_VALUE",
 * //       Identifier: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Scopes: [ // ResourceServerScopeListType
 * //         { // ResourceServerScopeType
 * //           ScopeName: "STRING_VALUE", // required
 * //           ScopeDescription: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListResourceServersCommandInput - {@link ListResourceServersCommandInput}
 * @returns {@link ListResourceServersCommandOutput}
 * @see {@link ListResourceServersCommandInput} for command's `input` shape.
 * @see {@link ListResourceServersCommandOutput} for command's `response` shape.
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
 * @throws {@link CognitoIdentityProviderServiceException}
 *
 * Base exception class for all service exceptions from CognitoIdentityProvider service.
 *
 * @public
 */
export class ListResourceServersCommand extends command<ListResourceServersCommandInput, ListResourceServersCommandOutput>(
  _ep0,
  _mw0,
  "ListResourceServers",
  ListResourceServers$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListResourceServersRequest;
      output: ListResourceServersResponse;
    };
    sdk: {
      input: ListResourceServersCommandInput;
      output: ListResourceServersCommandOutput;
    };
  };
}
