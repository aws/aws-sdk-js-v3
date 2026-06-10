// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListResourcePermissionStatementsInput, ListResourcePermissionStatementsOutput } from "../models/models_0";
import { ListResourcePermissionStatements$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SigninClientResolvedConfig } from "../SigninClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListResourcePermissionStatementsCommand}.
 */
export interface ListResourcePermissionStatementsCommandInput extends ListResourcePermissionStatementsInput {}
/**
 * @public
 *
 * The output of {@link ListResourcePermissionStatementsCommand}.
 */
export interface ListResourcePermissionStatementsCommandOutput extends ListResourcePermissionStatementsOutput, __MetadataBearer {}

/**
 * Retrieve all permission statements in the account's SignIn resource-based policy
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SigninClient, ListResourcePermissionStatementsCommand } from "@aws-sdk/client-signin"; // ES Modules import
 * // const { SigninClient, ListResourcePermissionStatementsCommand } = require("@aws-sdk/client-signin"); // CommonJS import
 * // import type { SigninClientConfig } from "@aws-sdk/client-signin";
 * const config = {}; // type is SigninClientConfig
 * const client = new SigninClient(config);
 * const input = { // ListResourcePermissionStatementsInput
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListResourcePermissionStatementsCommand(input);
 * const response = await client.send(command);
 * // { // ListResourcePermissionStatementsOutput
 * //   permissionStatements: [ // PermissionStatementSummaries // required
 * //     { // PermissionStatementSummary
 * //       sid: "STRING_VALUE", // required
 * //       condition: { // ConditionBlock
 * //         "<keys>": { // Condition
 * //           "<keys>": [ // ConditionValues
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListResourcePermissionStatementsCommandInput - {@link ListResourcePermissionStatementsCommandInput}
 * @returns {@link ListResourcePermissionStatementsCommandOutput}
 * @see {@link ListResourcePermissionStatementsCommandInput} for command's `input` shape.
 * @see {@link ListResourcePermissionStatementsCommandOutput} for command's `response` shape.
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
export class ListResourcePermissionStatementsCommand extends $Command
  .classBuilder<
    ListResourcePermissionStatementsCommandInput,
    ListResourcePermissionStatementsCommandOutput,
    SigninClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
    IsControlPlane: { type: "staticContextParams", value: true },
  })
  .m(function (this: any, Command: any, cs: any, config: SigninClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Signin", "ListResourcePermissionStatements", {})
  .n("SigninClient", "ListResourcePermissionStatementsCommand")
  .sc(ListResourcePermissionStatements$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListResourcePermissionStatementsInput;
      output: ListResourcePermissionStatementsOutput;
    };
    sdk: {
      input: ListResourcePermissionStatementsCommandInput;
      output: ListResourcePermissionStatementsCommandOutput;
    };
  };
}
