// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AmplifyBackendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyBackendClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateTokenRequest, CreateTokenResponse } from "../models/models_0";
import { de_CreateTokenCommand, se_CreateTokenCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateTokenCommand}.
 */
export interface CreateTokenCommandInput extends CreateTokenRequest {}
/**
 * @public
 *
 * The output of {@link CreateTokenCommand}.
 */
export interface CreateTokenCommandOutput extends CreateTokenResponse, __MetadataBearer {}

/**
 * <p>Generates a one-time challenge code to authenticate a user into your Amplify Admin UI.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyBackendClient, CreateTokenCommand } from "@aws-sdk/client-amplifybackend"; // ES Modules import
 * // const { AmplifyBackendClient, CreateTokenCommand } = require("@aws-sdk/client-amplifybackend"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new AmplifyBackendClient(config);
 * const input = { // CreateTokenRequest
 *   AppId: "STRING_VALUE", // required
 * };
 * const command = new CreateTokenCommand(input);
 * const response = await client.send(command);
 * // { // CreateTokenResponse
 * //   AppId: "STRING_VALUE",
 * //   ChallengeCode: "STRING_VALUE",
 * //   SessionId: "STRING_VALUE",
 * //   Ttl: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateTokenCommandInput - {@link CreateTokenCommandInput}
 * @returns {@link CreateTokenCommandOutput}
 * @see {@link CreateTokenCommandInput} for command's `input` shape.
 * @see {@link CreateTokenCommandOutput} for command's `response` shape.
 * @see {@link AmplifyBackendClientResolvedConfig | config} for AmplifyBackendClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>An error returned if a request is not formed properly.</p>
 *
 * @throws {@link GatewayTimeoutException} (server fault)
 *  <p>An error returned if there's a temporary issue with the service.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>An error returned when a specific resource type is not found.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>An error that is returned when a limit of a specific type has been exceeded.</p>
 *
 * @throws {@link AmplifyBackendServiceException}
 * <p>Base exception class for all service exceptions from AmplifyBackend service.</p>
 *
 * @public
 */
export class CreateTokenCommand extends $Command
  .classBuilder<
    CreateTokenCommandInput,
    CreateTokenCommandOutput,
    AmplifyBackendClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AmplifyBackendClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmplifyBackend", "CreateToken", {})
  .n("AmplifyBackendClient", "CreateTokenCommand")
  .f(void 0, void 0)
  .ser(se_CreateTokenCommand)
  .de(de_CreateTokenCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateTokenRequest;
      output: CreateTokenResponse;
    };
    sdk: {
      input: CreateTokenCommandInput;
      output: CreateTokenCommandOutput;
    };
  };
}
