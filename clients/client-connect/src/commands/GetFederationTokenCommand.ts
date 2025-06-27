// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetFederationTokenRequest,
  GetFederationTokenResponse,
  GetFederationTokenResponseFilterSensitiveLog,
} from "../models/models_1";
import { de_GetFederationTokenCommand, se_GetFederationTokenCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Supports SAML sign-in for Amazon Connect. Retrieves a token for federation. The token is
 *    for the Amazon Connect user which corresponds to the IAM credentials that were
 *    used to invoke this action. </p>
 *          <p>For more information about how SAML sign-in works in Amazon Connect, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/configure-saml.html ">Configure SAML with
 *      IAM for Amazon Connect in the <i>Amazon Connect Administrator
 *      Guide</i>.</a>
 *          </p>
 *          <note>
 *             <p>This API doesn't support root users. If you try to invoke GetFederationToken with root
 *     credentials, an error message similar to the following one appears: </p>
 *             <p>
 *                <code>Provided identity: Principal: .... User: .... cannot be used for federation with
 *       Amazon Connect</code>
 *             </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, GetFederationTokenCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, GetFederationTokenCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // GetFederationTokenRequest
 *   InstanceId: "STRING_VALUE", // required
 * };
 * const command = new GetFederationTokenCommand(input);
 * const response = await client.send(command);
 * // { // GetFederationTokenResponse
 * //   Credentials: { // Credentials
 * //     AccessToken: "STRING_VALUE",
 * //     AccessTokenExpiration: new Date("TIMESTAMP"),
 * //     RefreshToken: "STRING_VALUE",
 * //     RefreshTokenExpiration: new Date("TIMESTAMP"),
 * //   },
 * //   SignInUrl: "STRING_VALUE",
 * //   UserArn: "STRING_VALUE",
 * //   UserId: "STRING_VALUE",
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
 *  <p>A resource with the specified name already exists.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link UserNotFoundException} (client fault)
 *  <p>No user with the specified credentials was found in the Amazon Connect instance.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class GetFederationTokenCommand extends $Command
  .classBuilder<
    GetFederationTokenCommandInput,
    GetFederationTokenCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectService", "GetFederationToken", {})
  .n("ConnectClient", "GetFederationTokenCommand")
  .f(void 0, GetFederationTokenResponseFilterSensitiveLog)
  .ser(se_GetFederationTokenCommand)
  .de(de_GetFederationTokenCommand)
  .build() {
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
