// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetTokenRequest, GetTokenResponse } from "../models/models_0";
import { GetToken$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Gets the challenge token based on the given appId and sessionId.
 *
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
 *
 * An error returned if a request is not formed properly.
 *
 * @throws {@link GatewayTimeoutException} (server fault)
 *
 * An error returned if there's a temporary issue with the service.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * An error returned when a specific resource type is not found.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * An error that is returned when a limit of a specific type has been exceeded.
 *
 * @throws {@link AmplifyBackendServiceException}
 *
 * Base exception class for all service exceptions from AmplifyBackend service.
 *
 * @public
 */
export class GetTokenCommand extends command<GetTokenCommandInput, GetTokenCommandOutput>(
  _ep0,
  _mw0,
  "GetToken",
  GetToken$
) {
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
