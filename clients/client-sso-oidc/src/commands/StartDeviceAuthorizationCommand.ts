// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartDeviceAuthorizationRequest, StartDeviceAuthorizationResponse } from "../models/models_0";
import { StartDeviceAuthorization$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartDeviceAuthorizationCommand}.
 */
export interface StartDeviceAuthorizationCommandInput extends StartDeviceAuthorizationRequest {}
/**
 * @public
 *
 * The output of {@link StartDeviceAuthorizationCommand}.
 */
export interface StartDeviceAuthorizationCommandOutput extends StartDeviceAuthorizationResponse, __MetadataBearer {}

/**
 * Initiates device authorization by requesting a pair of verification codes from the authorization service.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOOIDCClient, StartDeviceAuthorizationCommand } from "@aws-sdk/client-sso-oidc"; // ES Modules import
 * // const { SSOOIDCClient, StartDeviceAuthorizationCommand } = require("@aws-sdk/client-sso-oidc"); // CommonJS import
 * // import type { SSOOIDCClientConfig } from "@aws-sdk/client-sso-oidc";
 * const config = {}; // type is SSOOIDCClientConfig
 * const client = new SSOOIDCClient(config);
 * const input = { // StartDeviceAuthorizationRequest
 *   clientId: "STRING_VALUE", // required
 *   clientSecret: "STRING_VALUE", // required
 *   startUrl: "STRING_VALUE", // required
 * };
 * const command = new StartDeviceAuthorizationCommand(input);
 * const response = await client.send(command);
 * // { // StartDeviceAuthorizationResponse
 * //   deviceCode: "STRING_VALUE",
 * //   userCode: "STRING_VALUE",
 * //   verificationUri: "STRING_VALUE",
 * //   verificationUriComplete: "STRING_VALUE",
 * //   expiresIn: Number("int"),
 * //   interval: Number("int"),
 * // };
 *
 * ```
 *
 * @param StartDeviceAuthorizationCommandInput - {@link StartDeviceAuthorizationCommandInput}
 * @returns {@link StartDeviceAuthorizationCommandOutput}
 * @see {@link StartDeviceAuthorizationCommandInput} for command's `input` shape.
 * @see {@link StartDeviceAuthorizationCommandOutput} for command's `response` shape.
 * @see {@link SSOOIDCClientResolvedConfig | config} for SSOOIDCClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Indicates that an error from the service occurred while trying to process a request.
 *
 * @throws {@link InvalidClientException} (client fault)
 *
 * Indicates that the `clientId` or `clientSecret` in the request is invalid. For example, this can occur when a client sends an incorrect `clientId` or an expired `clientSecret`.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * Indicates that something is wrong with the input to the request. For example, a required parameter might be missing or out of range.
 *
 * @throws {@link SlowDownException} (client fault)
 *
 * Indicates that the client is making the request too frequently and is more than the service can handle.
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *
 * Indicates that the client is not currently authorized to make the request. This can happen when a `clientId` is not issued for a public client.
 *
 * @throws {@link SSOOIDCServiceException}
 *
 * Base exception class for all service exceptions from SSOOIDC service.
 *
 * @example Call OAuth/OIDC /start-device-authorization endpoint
 * ```javascript
 * //
 * const input = {
 *   clientId: "_yzkThXVzLWVhc3QtMQEXAMPLECLIENTID",
 *   clientSecret: "VERYLONGSECRETeyJraWQiOiJrZXktMTU2NDAyODA5OSIsImFsZyI6IkhTMzg0In0",
 *   startUrl: "https://identitycenter.amazonaws.com/ssoins-111111111111"
 * };
 * const command = new StartDeviceAuthorizationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   deviceCode: "yJraWQiOiJrZXktMTU2Njk2ODA4OCIsImFsZyI6IkhTMzIn0EXAMPLEDEVICECODE",
 *   expiresIn: 1579729529,
 *   interval: 1,
 *   userCode: "makdfsk83yJraWQiOiJrZXktMTU2Njk2sImFsZyI6IkhTMzIn0EXAMPLEUSERCODE",
 *   verificationUri: "https://directory-alias-example.awsapps.com/start/#/device",
 *   verificationUriComplete: "https://directory-alias-example.awsapps.com/start/#/device?user_code=makdfsk83yJraWQiOiJrZXktMTU2Njk2sImFsZyI6IkhTMzIn0EXAMPLEUSERCODE"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class StartDeviceAuthorizationCommand extends command<StartDeviceAuthorizationCommandInput, StartDeviceAuthorizationCommandOutput>(
  _ep0,
  _mw0,
  "StartDeviceAuthorization",
  StartDeviceAuthorization$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartDeviceAuthorizationRequest;
      output: StartDeviceAuthorizationResponse;
    };
    sdk: {
      input: StartDeviceAuthorizationCommandInput;
      output: StartDeviceAuthorizationCommandOutput;
    };
  };
}
