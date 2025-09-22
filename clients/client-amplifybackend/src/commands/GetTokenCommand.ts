// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AmplifyBackendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyBackendClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetTokenRequest, GetTokenResponse } from "../models/models_0";
import { GetToken } from "../schemas/schemas_20_GetToken";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTokenCommand}.
 */
export interface GetTokenCommandInput extends GetTokenRequest {}
/**
 * @public
 *
 * The output of {@link GetTokenCommand}.
 */
export interface GetTokenCommandOutput extends GetTokenResponse, __MetadataBearer {}

/**
 * <p>Gets the challenge token based on the given appId and sessionId.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyBackendClient, GetTokenCommand } from "@aws-sdk/client-amplifybackend"; // ES Modules import
 * // const { AmplifyBackendClient, GetTokenCommand } = require("@aws-sdk/client-amplifybackend"); // CommonJS import
 * // import type { AmplifyBackendClientConfig } from "@aws-sdk/client-amplifybackend";
 * const config = {}; // type is AmplifyBackendClientConfig
 * const client = new AmplifyBackendClient(config);
 * const input = { // GetTokenRequest
 *   AppId: "STRING_VALUE", // required
 *   SessionId: "STRING_VALUE", // required
 * };
 * const command = new GetTokenCommand(input);
 * const response = await client.send(command);
 * // { // GetTokenResponse
 * //   AppId: "STRING_VALUE",
 * //   ChallengeCode: "STRING_VALUE",
 * //   SessionId: "STRING_VALUE",
 * //   Ttl: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetTokenCommandInput - {@link GetTokenCommandInput}
 * @returns {@link GetTokenCommandOutput}
 * @see {@link GetTokenCommandInput} for command's `input` shape.
 * @see {@link GetTokenCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class GetTokenCommand extends $Command
  .classBuilder<
    GetTokenCommandInput,
    GetTokenCommandOutput,
    AmplifyBackendClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AmplifyBackendClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmplifyBackend", "GetToken", {})
  .n("AmplifyBackendClient", "GetTokenCommand")
  .sc(GetToken)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTokenRequest;
      output: GetTokenResponse;
    };
    sdk: {
      input: GetTokenCommandInput;
      output: GetTokenCommandOutput;
    };
  };
}
