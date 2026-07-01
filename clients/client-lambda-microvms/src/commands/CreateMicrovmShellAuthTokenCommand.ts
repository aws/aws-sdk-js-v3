// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateMicrovmShellAuthTokenRequest, CreateMicrovmShellAuthTokenResponse } from "../models/models_0";
import { CreateMicrovmShellAuthToken$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateMicrovmShellAuthTokenCommand}.
 */
export interface CreateMicrovmShellAuthTokenCommandInput extends CreateMicrovmShellAuthTokenRequest {}
/**
 * @public
 *
 * The output of {@link CreateMicrovmShellAuthTokenCommand}.
 */
export interface CreateMicrovmShellAuthTokenCommandOutput extends CreateMicrovmShellAuthTokenResponse, __MetadataBearer {}

/**
 * <p>Creates a shell authentication token for interactive shell access to a running MicroVM. The MicroVM must have been run with the SHELL_INGRESS network connector attached.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaMicrovmsClient, CreateMicrovmShellAuthTokenCommand } from "@aws-sdk/client-lambda-microvms"; // ES Modules import
 * // const { LambdaMicrovmsClient, CreateMicrovmShellAuthTokenCommand } = require("@aws-sdk/client-lambda-microvms"); // CommonJS import
 * // import type { LambdaMicrovmsClientConfig } from "@aws-sdk/client-lambda-microvms";
 * const config = {}; // type is LambdaMicrovmsClientConfig
 * const client = new LambdaMicrovmsClient(config);
 * const input = { // CreateMicrovmShellAuthTokenRequest
 *   microvmIdentifier: "STRING_VALUE", // required
 *   expirationInMinutes: Number("int"), // required
 * };
 * const command = new CreateMicrovmShellAuthTokenCommand(input);
 * const response = await client.send(command);
 * // { // CreateMicrovmShellAuthTokenResponse
 * //   authToken: { // TokenParts // required
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateMicrovmShellAuthTokenCommandInput - {@link CreateMicrovmShellAuthTokenCommandInput}
 * @returns {@link CreateMicrovmShellAuthTokenCommandOutput}
 * @see {@link CreateMicrovmShellAuthTokenCommandInput} for command's `input` shape.
 * @see {@link CreateMicrovmShellAuthTokenCommandOutput} for command's `response` shape.
 * @see {@link LambdaMicrovmsClientResolvedConfig | config} for LambdaMicrovmsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry the request later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. Retry the request later.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input does not satisfy the constraints specified by the service.</p>
 *
 * @throws {@link LambdaMicrovmsServiceException}
 * <p>Base exception class for all service exceptions from LambdaMicrovms service.</p>
 *
 *
 * @public
 */
export class CreateMicrovmShellAuthTokenCommand extends command<CreateMicrovmShellAuthTokenCommandInput, CreateMicrovmShellAuthTokenCommandOutput>(
  _ep0,
  _mw0,
  "CreateMicrovmShellAuthToken",
  CreateMicrovmShellAuthToken$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateMicrovmShellAuthTokenRequest;
      output: CreateMicrovmShellAuthTokenResponse;
    };
    sdk: {
      input: CreateMicrovmShellAuthTokenCommandInput;
      output: CreateMicrovmShellAuthTokenCommandOutput;
    };
  };
}
