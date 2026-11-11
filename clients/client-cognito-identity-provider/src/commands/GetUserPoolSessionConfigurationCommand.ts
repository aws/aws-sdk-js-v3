// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetUserPoolSessionConfigurationRequest,
  GetUserPoolSessionConfigurationResponse,
} from "../models/models_0";
import { GetUserPoolSessionConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetUserPoolSessionConfigurationCommand}.
 */
export interface GetUserPoolSessionConfigurationCommandInput extends GetUserPoolSessionConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetUserPoolSessionConfigurationCommand}.
 */
export interface GetUserPoolSessionConfigurationCommandOutput extends GetUserPoolSessionConfigurationResponse, __MetadataBearer {}

/**
 * <p>Retrieves the session tracking configuration for a user pool, including whether session
 *             tracking is enabled and the pool-wide maximum number of active token sessions for
 *             each user. If you have never called <code>SetUserPoolSessionConfiguration</code> for the
 *             user pool, this operation returns the default values: <code>UserSessionTracking</code> as
 *             <code>DISABLED</code> and a <code>MaxPerUser</code> value of <code>20</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, GetUserPoolSessionConfigurationCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, GetUserPoolSessionConfigurationCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // import type { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
 * const config = {}; // type is CognitoIdentityProviderClientConfig
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // GetUserPoolSessionConfigurationRequest
 *   UserPoolId: "STRING_VALUE", // required
 * };
 * const command = new GetUserPoolSessionConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetUserPoolSessionConfigurationResponse
 * //   UserPoolId: "STRING_VALUE",
 * //   UserSessionTracking: "ENABLED" || "DISABLED",
 * //   TokenSession: { // UserPoolTokenSessionConfigType
 * //     MaxPerUser: Number("int"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetUserPoolSessionConfigurationCommandInput - {@link GetUserPoolSessionConfigurationCommandInput}
 * @returns {@link GetUserPoolSessionConfigurationCommandOutput}
 * @see {@link GetUserPoolSessionConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetUserPoolSessionConfigurationCommandOutput} for command's `response` shape.
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
 * @example Example get the session configuration of a user pool
 * ```javascript
 * // The following example returns the pool-level session configuration, showing that session tracking is enabled with a maximum of 20 concurrent token sessions per user.
 * const input = {
 *   UserPoolId: "us-east-1_EXAMPLE"
 * };
 * const command = new GetUserPoolSessionConfigurationCommand(input);
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
export class GetUserPoolSessionConfigurationCommand extends command<GetUserPoolSessionConfigurationCommandInput, GetUserPoolSessionConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "GetUserPoolSessionConfiguration",
  GetUserPoolSessionConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetUserPoolSessionConfigurationRequest;
      output: GetUserPoolSessionConfigurationResponse;
    };
    sdk: {
      input: GetUserPoolSessionConfigurationCommandInput;
      output: GetUserPoolSessionConfigurationCommandOutput;
    };
  };
}
