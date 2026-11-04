// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetApplicationAccessScopeRequest, GetApplicationAccessScopeResponse } from "../models/models_0";
import { GetApplicationAccessScope$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetApplicationAccessScopeCommand}.
 */
export interface GetApplicationAccessScopeCommandInput extends GetApplicationAccessScopeRequest {}
/**
 * @public
 *
 * The output of {@link GetApplicationAccessScopeCommand}.
 */
export interface GetApplicationAccessScopeCommandOutput extends GetApplicationAccessScopeResponse, __MetadataBearer {}

/**
 * Retrieves the authorized targets for an IAM Identity Center access scope for an application.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, GetApplicationAccessScopeCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, GetApplicationAccessScopeCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * // import type { SSOAdminClientConfig } from "@aws-sdk/client-sso-admin";
 * const config = {}; // type is SSOAdminClientConfig
 * const client = new SSOAdminClient(config);
 * const input = { // GetApplicationAccessScopeRequest
 *   ApplicationArn: "STRING_VALUE", // required
 *   Scope: "STRING_VALUE", // required
 * };
 * const command = new GetApplicationAccessScopeCommand(input);
 * const response = await client.send(command);
 * // { // GetApplicationAccessScopeResponse
 * //   Scope: "STRING_VALUE", // required
 * //   AuthorizedTargets: [ // ScopeTargets
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetApplicationAccessScopeCommandInput - {@link GetApplicationAccessScopeCommandInput}
 * @returns {@link GetApplicationAccessScopeCommandOutput}
 * @see {@link GetApplicationAccessScopeCommandInput} for command's `input` shape.
 * @see {@link GetApplicationAccessScopeCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for SSOAdminClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception, or failure with an internal server.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Indicates that a requested resource is not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Indicates that the principal has crossed the throttling limits of the API operations.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request failed because it contains a syntax error.
 *
 * @throws {@link SSOAdminServiceException}
 *
 * Base exception class for all service exceptions from SSOAdmin service.
 *
 * @public
 */
export class GetApplicationAccessScopeCommand extends command<GetApplicationAccessScopeCommandInput, GetApplicationAccessScopeCommandOutput>(
  _ep0,
  _mw0,
  "GetApplicationAccessScope",
  GetApplicationAccessScope$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetApplicationAccessScopeRequest;
      output: GetApplicationAccessScopeResponse;
    };
    sdk: {
      input: GetApplicationAccessScopeCommandInput;
      output: GetApplicationAccessScopeCommandOutput;
    };
  };
}
