// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  SetUserPoolSessionConfigurationRequest,
  SetUserPoolSessionConfigurationResponse,
} from "../models/models_1";
import { SetUserPoolSessionConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SetUserPoolSessionConfigurationCommand}.
 */
export interface SetUserPoolSessionConfigurationCommandInput extends SetUserPoolSessionConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link SetUserPoolSessionConfigurationCommand}.
 */
export interface SetUserPoolSessionConfigurationCommandOutput extends SetUserPoolSessionConfigurationResponse, __MetadataBearer {}

/**
 * <p>Enables or disables session tracking for a user pool, and sets the pool-wide maximum
 *             number of active token sessions that each user can have. This operation performs a
 *             full replacement of the pool-level session configuration; every request parameter is
 *             required. The user pool must be in the Essentials or Plus tier. Otherwise, this
 *             operation returns a <code>FeatureUnavailableInTierException</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, SetUserPoolSessionConfigurationCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, SetUserPoolSessionConfigurationCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // import type { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
 * const config = {}; // type is CognitoIdentityProviderClientConfig
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // SetUserPoolSessionConfigurationRequest
 *   UserPoolId: "STRING_VALUE", // required
 *   UserSessionTracking: "ENABLED" || "DISABLED", // required
 *   TokenSession: { // UserPoolTokenSessionConfigType
 *     MaxPerUser: Number("int"), // required
 *   },
 * };
 * const command = new SetUserPoolSessionConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // SetUserPoolSessionConfigurationResponse
 * //   UserPoolId: "STRING_VALUE",
 * //   UserSessionTracking: "ENABLED" || "DISABLED",
 * //   TokenSession: { // UserPoolTokenSessionConfigType
 * //     MaxPerUser: Number("int"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param SetUserPoolSessionConfigurationCommandInput - {@link SetUserPoolSessionConfigurationCommandInput}
 * @returns {@link SetUserPoolSessionConfigurationCommandOutput}
 * @see {@link SetUserPoolSessionConfigurationCommandInput} for command's `input` shape.
 * @see {@link SetUserPoolSessionConfigurationCommandOutput} for command's `response` shape.
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
 * @example Example enable session tracking for a user pool
 * ```javascript
 * // The following example enables server-side session tracking for a user pool and sets the pool-wide maximum to 20 concurrent token sessions per user.
 * const input = {
 *   TokenSession: {
 *     MaxPerUser: 20
 *   },
 *   UserPoolId: "us-east-1_EXAMPLE",
 *   UserSessionTracking: "ENABLED"
 * };
 * const command = new SetUserPoolSessionConfigurationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   TokenSession: {
 *     MaxPerUser: 20
 *   },
 *   UserPoolId: "us-east-1_EXAMPLE",
 *   UserSessionTracking: "ENABLED"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class SetUserPoolSessionConfigurationCommand extends command<SetUserPoolSessionConfigurationCommandInput, SetUserPoolSessionConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "SetUserPoolSessionConfiguration",
  SetUserPoolSessionConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SetUserPoolSessionConfigurationRequest;
      output: SetUserPoolSessionConfigurationResponse;
    };
    sdk: {
      input: SetUserPoolSessionConfigurationCommandInput;
      output: SetUserPoolSessionConfigurationCommandOutput;
    };
  };
}
