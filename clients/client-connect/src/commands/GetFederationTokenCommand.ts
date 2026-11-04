// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetFederationTokenRequest, GetFederationTokenResponse } from "../models/models_2";
import { GetFederationToken$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetFederationTokenCommand}.
 */
export interface GetFederationTokenCommandInput extends GetFederationTokenRequest {}
/**
 * @public
 *
 * The output of {@link GetFederationTokenCommand}.
 */
export interface GetFederationTokenCommandOutput extends GetFederationTokenResponse, __MetadataBearer {}

/**
 * Supports SAML sign-in for Connect Customer. Retrieves a token for federation. The token is for the Connect Customer user which corresponds to the IAM credentials that were used to invoke this action.
 *
 * For more information about how SAML sign-in works in Connect Customer, see [Configure SAML with IAM for Connect Customer in the *Connect Customer Administrator Guide*.](https://docs.aws.amazon.com/connect/latest/adminguide/configure-saml.html)
 *
 * > **Note:**
 * >
 * > This API doesn't support root users. If you try to invoke GetFederationToken with root credentials, an error message similar to the following one appears:
 * >
 * > `Provided identity: Principal: .... User: .... cannot be used for federation with Connect Customer`
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, GetFederationTokenCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, GetFederationTokenCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // GetFederationTokenRequest
 *   InstanceId: "STRING_VALUE", // required
 * };
 * const command = new GetFederationTokenCommand(input);
 * const response = await client.send(command);
 * // { // GetFederationTokenResponse
 * //   UserId: "STRING_VALUE",
 * //   UserArn: "STRING_VALUE",
 * //   Credentials: { // Credentials
 * //     AccessToken: "STRING_VALUE",
 * //     AccessTokenExpiration: new Date("TIMESTAMP"),
 * //     RefreshToken: "STRING_VALUE",
 * //     RefreshTokenExpiration: new Date("TIMESTAMP"),
 * //   },
 * //   SignInUrl: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetFederationTokenCommandInput - {@link GetFederationTokenCommandInput}
 * @returns {@link GetFederationTokenCommandOutput}
 * @see {@link GetFederationTokenCommandInput} for command's `input` shape.
 * @see {@link GetFederationTokenCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link DuplicateResourceException} (client fault)
 *
 * A resource with the specified name already exists.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * Request processing failed because of an error or failure with the service.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more of the specified parameters are not valid.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The throttling limit has been exceeded.
 *
 * @throws {@link UserNotFoundException} (client fault)
 *
 * No user with the specified credentials was found in the Connect Customer instance.
 *
 * @throws {@link ConnectServiceException}
 *
 * Base exception class for all service exceptions from Connect service.
 *
 * @public
 */
export class GetFederationTokenCommand extends command<GetFederationTokenCommandInput, GetFederationTokenCommandOutput>(
  _ep0,
  _mw0,
  "GetFederationToken",
  GetFederationToken$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetFederationTokenRequest;
      output: GetFederationTokenResponse;
    };
    sdk: {
      input: GetFederationTokenCommandInput;
      output: GetFederationTokenCommandOutput;
    };
  };
}
