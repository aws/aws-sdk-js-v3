// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep2, _mw0, command } from "../commandBuilder";
import type {
  DeleteConsoleAuthorizationConfigurationInput,
  DeleteConsoleAuthorizationConfigurationOutput,
} from "../models/models_0";
import { DeleteConsoleAuthorizationConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteConsoleAuthorizationConfigurationCommand}.
 */
export interface DeleteConsoleAuthorizationConfigurationCommandInput extends DeleteConsoleAuthorizationConfigurationInput {}
/**
 * @public
 *
 * The output of {@link DeleteConsoleAuthorizationConfigurationCommand}.
 */
export interface DeleteConsoleAuthorizationConfigurationCommandOutput extends DeleteConsoleAuthorizationConfigurationOutput, __MetadataBearer {}

/**
 * Delete console authorization configuration with automatic scope detection
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SigninClient, DeleteConsoleAuthorizationConfigurationCommand } from "@aws-sdk/client-signin"; // ES Modules import
 * // const { SigninClient, DeleteConsoleAuthorizationConfigurationCommand } = require("@aws-sdk/client-signin"); // CommonJS import
 * // import type { SigninClientConfig } from "@aws-sdk/client-signin";
 * const config = {}; // type is SigninClientConfig
 * const client = new SigninClient(config);
 * const input = { // DeleteConsoleAuthorizationConfigurationInput
 *   targetId: "STRING_VALUE",
 * };
 * const command = new DeleteConsoleAuthorizationConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DeleteConsoleAuthorizationConfigurationOutput
 * //   targetId: "STRING_VALUE", // required
 * //   scope: "STRING_VALUE", // required
 * //   consoleAuthorizationEnabled: true || false, // required
 * // };
 *
 * ```
 *
 * @param DeleteConsoleAuthorizationConfigurationCommandInput - {@link DeleteConsoleAuthorizationConfigurationCommandInput}
 * @returns {@link DeleteConsoleAuthorizationConfigurationCommandOutput}
 * @see {@link DeleteConsoleAuthorizationConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteConsoleAuthorizationConfigurationCommandOutput} for command's `response` shape.
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
export class DeleteConsoleAuthorizationConfigurationCommand extends command<DeleteConsoleAuthorizationConfigurationCommandInput, DeleteConsoleAuthorizationConfigurationCommandOutput>(
  _ep2,
  _mw0,
  "DeleteConsoleAuthorizationConfiguration",
  DeleteConsoleAuthorizationConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteConsoleAuthorizationConfigurationInput;
      output: DeleteConsoleAuthorizationConfigurationOutput;
    };
    sdk: {
      input: DeleteConsoleAuthorizationConfigurationCommandInput;
      output: DeleteConsoleAuthorizationConfigurationCommandOutput;
    };
  };
}
