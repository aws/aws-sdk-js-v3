// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep2, _mw0, command } from "../commandBuilder";
import type { GetResourcePolicyInput, GetResourcePolicyOutput } from "../models/models_0";
import { GetResourcePolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetResourcePolicyCommand}.
 */
export interface GetResourcePolicyCommandInput extends GetResourcePolicyInput {}
/**
 * @public
 *
 * The output of {@link GetResourcePolicyCommand}.
 */
export interface GetResourcePolicyCommandOutput extends GetResourcePolicyOutput, __MetadataBearer {}

/**
 * Retrieve the account's consolidated SignIn resource-based policy
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SigninClient, GetResourcePolicyCommand } from "@aws-sdk/client-signin"; // ES Modules import
 * // const { SigninClient, GetResourcePolicyCommand } = require("@aws-sdk/client-signin"); // CommonJS import
 * // import type { SigninClientConfig } from "@aws-sdk/client-signin";
 * const config = {}; // type is SigninClientConfig
 * const client = new SigninClient(config);
 * const input = {};
 * const command = new GetResourcePolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetResourcePolicyOutput
 * //   signinResourceBasedPolicy: { // SigninResourceBasedPolicy
 * //     version: "STRING_VALUE",
 * //     statement: [ // PolicyStatements
 * //       { // PolicyStatement
 * //         effect: "STRING_VALUE",
 * //         principal: { // Principal
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         action: [ // PolicyActions
 * //           "STRING_VALUE",
 * //         ],
 * //         resource: "STRING_VALUE",
 * //         condition: { // ConditionBlock
 * //           "<keys>": { // Condition
 * //             "<keys>": [ // ConditionValues
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         },
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetResourcePolicyCommandInput - {@link GetResourcePolicyCommandInput}
 * @returns {@link GetResourcePolicyCommandOutput}
 * @see {@link GetResourcePolicyCommandInput} for command's `input` shape.
 * @see {@link GetResourcePolicyCommandOutput} for command's `response` shape.
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
 * @throws {@link SigninServiceException}
 * <p>Base exception class for all service exceptions from Signin service.</p>
 *
 *
 * @public
 */
export class GetResourcePolicyCommand extends command<GetResourcePolicyCommandInput, GetResourcePolicyCommandOutput>(
  _ep2,
  _mw0,
  "GetResourcePolicy",
  GetResourcePolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetResourcePolicyOutput;
    };
    sdk: {
      input: GetResourcePolicyCommandInput;
      output: GetResourcePolicyCommandOutput;
    };
  };
}
