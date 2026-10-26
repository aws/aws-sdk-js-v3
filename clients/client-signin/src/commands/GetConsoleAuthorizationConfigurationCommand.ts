// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep2, _mw0, command } from "../commandBuilder";
import type {
  GetConsoleAuthorizationConfigurationInput,
  GetConsoleAuthorizationConfigurationOutput,
} from "../models/models_0";
import { GetConsoleAuthorizationConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetConsoleAuthorizationConfigurationCommand}.
 */
export interface GetConsoleAuthorizationConfigurationCommandInput extends GetConsoleAuthorizationConfigurationInput {}
/**
 * @public
 *
 * The output of {@link GetConsoleAuthorizationConfigurationCommand}.
 */
export interface GetConsoleAuthorizationConfigurationCommandOutput extends GetConsoleAuthorizationConfigurationOutput, __MetadataBearer {}

/**
 * Get console authorization configuration with automatic scope detection
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SigninClient, GetConsoleAuthorizationConfigurationCommand } from "@aws-sdk/client-signin"; // ES Modules import
 * // const { SigninClient, GetConsoleAuthorizationConfigurationCommand } = require("@aws-sdk/client-signin"); // CommonJS import
 * // import type { SigninClientConfig } from "@aws-sdk/client-signin";
 * const config = {}; // type is SigninClientConfig
 * const client = new SigninClient(config);
 * const input = { // GetConsoleAuthorizationConfigurationInput
 *   targetId: "STRING_VALUE",
 * };
 * const command = new GetConsoleAuthorizationConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetConsoleAuthorizationConfigurationOutput
 * //   targetId: "STRING_VALUE", // required
 * //   scope: "STRING_VALUE", // required
 * //   consoleAuthorizationEnabled: true || false, // required
 * // };
 *
 * ```
 *
 * @param GetConsoleAuthorizationConfigurationCommandInput - {@link GetConsoleAuthorizationConfigurationCommandInput}
 * @returns {@link GetConsoleAuthorizationConfigurationCommandOutput}
 * @see {@link GetConsoleAuthorizationConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetConsoleAuthorizationConfigurationCommandOutput} for command's `response` shape.
 * @see {@link SigninClientResolvedConfig | config} for SigninClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *  The request failed because of an internal server error.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  Error thrown when requested resource is not found
 *
 * HTTP Status Code: 404 Not Found
 *
 * Used when the specified resource does not exist
 *
 * @throws {@link TooManyRequestsError} (client fault)
 *  The request failed because you exceeded the request rate limit for this operation.
 *
 * @throws {@link ValidationException} (client fault)
 *  The request failed because it contains a malformed, missing, or invalid parameter.
 *
 * @throws {@link SigninServiceException}
 * <p>Base exception class for all service exceptions from Signin service.</p>
 *
 *
 * @public
 */
export class GetConsoleAuthorizationConfigurationCommand extends command<GetConsoleAuthorizationConfigurationCommandInput, GetConsoleAuthorizationConfigurationCommandOutput>(
  _ep2,
  _mw0,
  "GetConsoleAuthorizationConfiguration",
  GetConsoleAuthorizationConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetConsoleAuthorizationConfigurationInput;
      output: GetConsoleAuthorizationConfigurationOutput;
    };
    sdk: {
      input: GetConsoleAuthorizationConfigurationCommandInput;
      output: GetConsoleAuthorizationConfigurationCommandOutput;
    };
  };
}
