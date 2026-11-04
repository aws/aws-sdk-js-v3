// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteTokenRequest, DeleteTokenResponse } from "../models/models_0";
import { DeleteToken$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteTokenCommand}.
 */
export interface DeleteTokenCommandInput extends DeleteTokenRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTokenCommand}.
 */
export interface DeleteTokenCommandOutput extends DeleteTokenResponse, __MetadataBearer {}

/**
 * Deletes the challenge token based on the given appId and sessionId.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyBackendClient, DeleteTokenCommand } from "@aws-sdk/client-amplifybackend"; // ES Modules import
 * // const { AmplifyBackendClient, DeleteTokenCommand } = require("@aws-sdk/client-amplifybackend"); // CommonJS import
 * // import type { AmplifyBackendClientConfig } from "@aws-sdk/client-amplifybackend";
 * const config = {}; // type is AmplifyBackendClientConfig
 * const client = new AmplifyBackendClient(config);
 * const input = { // DeleteTokenRequest
 *   AppId: "STRING_VALUE", // required
 *   SessionId: "STRING_VALUE", // required
 * };
 * const command = new DeleteTokenCommand(input);
 * const response = await client.send(command);
 * // { // DeleteTokenResponse
 * //   IsSuccess: true || false,
 * // };
 *
 * ```
 *
 * @param DeleteTokenCommandInput - {@link DeleteTokenCommandInput}
 * @returns {@link DeleteTokenCommandOutput}
 * @see {@link DeleteTokenCommandInput} for command's `input` shape.
 * @see {@link DeleteTokenCommandOutput} for command's `response` shape.
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
export class DeleteTokenCommand extends command<DeleteTokenCommandInput, DeleteTokenCommandOutput>(
  _ep0,
  _mw0,
  "DeleteToken",
  DeleteToken$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTokenRequest;
      output: DeleteTokenResponse;
    };
    sdk: {
      input: DeleteTokenCommandInput;
      output: DeleteTokenCommandOutput;
    };
  };
}
