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
 *  Error thrown for access denied scenarios with flexible HTTP status mapping
 *
 * Runtime HTTP Status Code Mapping:
 * - HTTP 401 (Unauthorized): TOKEN_EXPIRED, AUTHCODE_EXPIRED
 * - HTTP 403 (Forbidden): USER_CREDENTIALS_CHANGED, INSUFFICIENT_PERMISSIONS
 *
 * The specific HTTP status code is determined at runtime based on the error enum value.
 * Consumers should use the error field to determine the specific access denial reason.
 *
 * @throws {@link InternalServerException} (server fault)
 *  Error thrown when an internal server error occurs
 *
 * HTTP Status Code: 500 Internal Server Error
 *
 * Used for unexpected server-side errors that prevent request processing.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  Error thrown when requested resource is not found
 *
 * HTTP Status Code: 404 Not Found
 *
 * Used when the specified resource does not exist
 *
 * @throws {@link TooManyRequestsError} (client fault)
 *  Error thrown when rate limit is exceeded
 *
 * HTTP Status Code: 429 Too Many Requests
 *
 * Possible OAuth2ErrorCode values:
 * - INVALID_REQUEST: Rate limiting, too many requests, abuse prevention
 *
 * Possible causes:
 * - Too many token requests from the same client
 * - Rate limiting based on client_id or IP address
 * - Abuse prevention mechanisms triggered
 * - Service protection against excessive token generation
 *
 * @throws {@link ValidationException} (client fault)
 *  Error thrown when request validation fails
 *
 * HTTP Status Code: 400 Bad Request
 *
 * Used for request validation errors such as malformed parameters,
 * missing required fields, or invalid parameter values.
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
