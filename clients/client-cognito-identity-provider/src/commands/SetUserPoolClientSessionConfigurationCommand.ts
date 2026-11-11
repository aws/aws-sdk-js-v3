// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  SetUserPoolClientSessionConfigurationRequest,
  SetUserPoolClientSessionConfigurationResponse,
} from "../models/models_1";
import { SetUserPoolClientSessionConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SetUserPoolClientSessionConfigurationCommand}.
 */
export interface SetUserPoolClientSessionConfigurationCommandInput extends SetUserPoolClientSessionConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link SetUserPoolClientSessionConfigurationCommand}.
 */
export interface SetUserPoolClientSessionConfigurationCommandOutput extends SetUserPoolClientSessionConfigurationResponse, __MetadataBearer {}

/**
 * <p>Sets the session configuration for a user pool app client. The configurable
 *             client-level setting is the maximum validity period for silent reuse of an SSO session.
 *             This operation performs a full replacement of the client-level session configuration;
 *             every request parameter is required, and session tracking must be enabled for the user
 *             pool. The user pool must be in the Essentials or Plus tier. Otherwise, this operation
 *             returns a <code>FeatureUnavailableInTierException</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, SetUserPoolClientSessionConfigurationCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, SetUserPoolClientSessionConfigurationCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // import type { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
 * const config = {}; // type is CognitoIdentityProviderClientConfig
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // SetUserPoolClientSessionConfigurationRequest
 *   UserPoolId: "STRING_VALUE", // required
 *   ClientId: "STRING_VALUE", // required
 *   SSOSession: { // ClientSSOSessionConfigType
 *     MaxValidityMinutes: Number("int"), // required
 *   },
 * };
 * const command = new SetUserPoolClientSessionConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // SetUserPoolClientSessionConfigurationResponse
 * //   UserPoolId: "STRING_VALUE",
 * //   ClientId: "STRING_VALUE",
 * //   SSOSession: { // ClientSSOSessionConfigType
 * //     MaxValidityMinutes: Number("int"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param SetUserPoolClientSessionConfigurationCommandInput - {@link SetUserPoolClientSessionConfigurationCommandInput}
 * @returns {@link SetUserPoolClientSessionConfigurationCommandOutput}
 * @see {@link SetUserPoolClientSessionConfigurationCommandInput} for command's `input` shape.
 * @see {@link SetUserPoolClientSessionConfigurationCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for CognitoIdentityProviderClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>This exception is thrown if two or more modifications are happening
 *             concurrently.</p>
 *
 * @throws {@link FeatureUnavailableInTierException} (client fault)
 *  <p>This exception is thrown when a feature that you attempted to use or configure
 *             isn't included in your user pool's current feature plan. This can occur
 *             when:</p>
 *          <ul>
 *             <li>
 *                <p>You configure a feature that your feature plan doesn't support.</p>
 *             </li>
 *             <li>
 *                <p>You make a request that uses a feature that requires a higher feature
 *                     plan.</p>
 *             </li>
 *          </ul>
 *          <p>To resolve this issue, upgrade your user pool to a feature plan that includes the
 *             feature.</p>
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
 * @throws {@link OperationNotEnabledException} (client fault)
 *  <p>This exception is thrown when an operation is not available in the current region or for the current user pool configuration. This can occur when attempting to perform operations that are not supported in secondary replica regions.</p>
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
 * @example Example set the SSO session validity for an app client
 * ```javascript
 * // The following example configures an app client to silently reuse an SSO session for up to 43200 minutes (30 days) since the last authentication before requiring the user to sign in again.
 * const input = {
 *   ClientId: "1example23456789",
 *   SSOSession: {
 *     MaxValidityMinutes: 43200
 *   },
 *   UserPoolId: "us-east-1_EXAMPLE"
 * };
 * const command = new SetUserPoolClientSessionConfigurationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ClientId: "1example23456789",
 *   SSOSession: {
 *     MaxValidityMinutes: 43200
 *   },
 *   UserPoolId: "us-east-1_EXAMPLE"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class SetUserPoolClientSessionConfigurationCommand extends command<SetUserPoolClientSessionConfigurationCommandInput, SetUserPoolClientSessionConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "SetUserPoolClientSessionConfiguration",
  SetUserPoolClientSessionConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SetUserPoolClientSessionConfigurationRequest;
      output: SetUserPoolClientSessionConfigurationResponse;
    };
    sdk: {
      input: SetUserPoolClientSessionConfigurationCommandInput;
      output: SetUserPoolClientSessionConfigurationCommandOutput;
    };
  };
}
