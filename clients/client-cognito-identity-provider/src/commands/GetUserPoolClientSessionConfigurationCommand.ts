// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetUserPoolClientSessionConfigurationRequest,
  GetUserPoolClientSessionConfigurationResponse,
} from "../models/models_0";
import { GetUserPoolClientSessionConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetUserPoolClientSessionConfigurationCommand}.
 */
export interface GetUserPoolClientSessionConfigurationCommandInput extends GetUserPoolClientSessionConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetUserPoolClientSessionConfigurationCommand}.
 */
export interface GetUserPoolClientSessionConfigurationCommandOutput extends GetUserPoolClientSessionConfigurationResponse, __MetadataBearer {}

/**
 * <p>Retrieves the session configuration for a user pool app client. If you have never
 *             called <code>SetUserPoolClientSessionConfiguration</code> for the app client, this
 *             operation returns the default SSO session maximum validity of <code>60</code>
 *             minutes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, GetUserPoolClientSessionConfigurationCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, GetUserPoolClientSessionConfigurationCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // import type { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
 * const config = {}; // type is CognitoIdentityProviderClientConfig
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // GetUserPoolClientSessionConfigurationRequest
 *   UserPoolId: "STRING_VALUE", // required
 *   ClientId: "STRING_VALUE", // required
 * };
 * const command = new GetUserPoolClientSessionConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetUserPoolClientSessionConfigurationResponse
 * //   UserPoolId: "STRING_VALUE",
 * //   ClientId: "STRING_VALUE",
 * //   SSOSession: { // ClientSSOSessionConfigType
 * //     MaxValidityMinutes: Number("int"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetUserPoolClientSessionConfigurationCommandInput - {@link GetUserPoolClientSessionConfigurationCommandInput}
 * @returns {@link GetUserPoolClientSessionConfigurationCommandOutput}
 * @see {@link GetUserPoolClientSessionConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetUserPoolClientSessionConfigurationCommandOutput} for command's `response` shape.
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
 * @example Example get the session configuration of an app client
 * ```javascript
 * // The following example returns the per-client session configuration, showing an SSO session validity of 43200 minutes (30 days).
 * const input = {
 *   ClientId: "1example23456789",
 *   UserPoolId: "us-east-1_EXAMPLE"
 * };
 * const command = new GetUserPoolClientSessionConfigurationCommand(input);
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
export class GetUserPoolClientSessionConfigurationCommand extends command<GetUserPoolClientSessionConfigurationCommandInput, GetUserPoolClientSessionConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "GetUserPoolClientSessionConfiguration",
  GetUserPoolClientSessionConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetUserPoolClientSessionConfigurationRequest;
      output: GetUserPoolClientSessionConfigurationResponse;
    };
    sdk: {
      input: GetUserPoolClientSessionConfigurationCommandInput;
      output: GetUserPoolClientSessionConfigurationCommandOutput;
    };
  };
}
