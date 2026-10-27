// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep2, _mw0, command } from "../commandBuilder";
import type {
  PutConsoleAuthorizationConfigurationInput,
  PutConsoleAuthorizationConfigurationOutput,
} from "../models/models_0";
import { PutConsoleAuthorizationConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutConsoleAuthorizationConfigurationCommand}.
 */
export interface PutConsoleAuthorizationConfigurationCommandInput extends PutConsoleAuthorizationConfigurationInput {}
/**
 * @public
 *
 * The output of {@link PutConsoleAuthorizationConfigurationCommand}.
 */
export interface PutConsoleAuthorizationConfigurationCommandOutput extends PutConsoleAuthorizationConfigurationOutput, __MetadataBearer {}

/**
 * Enable console authorization configuration with automatic scope detection
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SigninClient, PutConsoleAuthorizationConfigurationCommand } from "@aws-sdk/client-signin"; // ES Modules import
 * // const { SigninClient, PutConsoleAuthorizationConfigurationCommand } = require("@aws-sdk/client-signin"); // CommonJS import
 * // import type { SigninClientConfig } from "@aws-sdk/client-signin";
 * const config = {}; // type is SigninClientConfig
 * const client = new SigninClient(config);
 * const input = { // PutConsoleAuthorizationConfigurationInput
 *   targetId: "STRING_VALUE",
 * };
 * const command = new PutConsoleAuthorizationConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // PutConsoleAuthorizationConfigurationOutput
 * //   targetId: "STRING_VALUE", // required
 * //   scope: "STRING_VALUE", // required
 * //   consoleAuthorizationEnabled: true || false, // required
 * // };
 *
 * ```
 *
 * @param PutConsoleAuthorizationConfigurationCommandInput - {@link PutConsoleAuthorizationConfigurationCommandInput}
 * @returns {@link PutConsoleAuthorizationConfigurationCommandOutput}
 * @see {@link PutConsoleAuthorizationConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutConsoleAuthorizationConfigurationCommandOutput} for command's `response` shape.
 * @see {@link SigninClientResolvedConfig | config} for SigninClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *  Error thrown when request conflicts with current state
 *
 * HTTP Status Code: 409 Conflict
 *
 * Used when the request conflicts with the current state of the resource
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
export class PutConsoleAuthorizationConfigurationCommand extends command<PutConsoleAuthorizationConfigurationCommandInput, PutConsoleAuthorizationConfigurationCommandOutput>(
  _ep2,
  _mw0,
  "PutConsoleAuthorizationConfiguration",
  PutConsoleAuthorizationConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutConsoleAuthorizationConfigurationInput;
      output: PutConsoleAuthorizationConfigurationOutput;
    };
    sdk: {
      input: PutConsoleAuthorizationConfigurationCommandInput;
      output: PutConsoleAuthorizationConfigurationCommandOutput;
    };
  };
}
