// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutApplicationAccessScopeRequest } from "../models/models_0";
import { PutApplicationAccessScope$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutApplicationAccessScopeCommand}.
 */
export interface PutApplicationAccessScopeCommandInput extends PutApplicationAccessScopeRequest {}
/**
 * @public
 *
 * The output of {@link PutApplicationAccessScopeCommand}.
 */
export interface PutApplicationAccessScopeCommandOutput extends __MetadataBearer {}

/**
 * Adds or updates the list of authorized targets for an IAM Identity Center access scope for an application.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, PutApplicationAccessScopeCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, PutApplicationAccessScopeCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * // import type { SSOAdminClientConfig } from "@aws-sdk/client-sso-admin";
 * const config = {}; // type is SSOAdminClientConfig
 * const client = new SSOAdminClient(config);
 * const input = { // PutApplicationAccessScopeRequest
 *   Scope: "STRING_VALUE", // required
 *   AuthorizedTargets: [ // ScopeTargets
 *     "STRING_VALUE",
 *   ],
 *   ApplicationArn: "STRING_VALUE", // required
 * };
 * const command = new PutApplicationAccessScopeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutApplicationAccessScopeCommandInput - {@link PutApplicationAccessScopeCommandInput}
 * @returns {@link PutApplicationAccessScopeCommandOutput}
 * @see {@link PutApplicationAccessScopeCommandInput} for command's `input` shape.
 * @see {@link PutApplicationAccessScopeCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for SSOAdminClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Occurs when a conflict with a previous successful write is detected. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.
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
export class PutApplicationAccessScopeCommand extends command<PutApplicationAccessScopeCommandInput, PutApplicationAccessScopeCommandOutput>(
  _ep0,
  _mw0,
  "PutApplicationAccessScope",
  PutApplicationAccessScope$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutApplicationAccessScopeRequest;
      output: {};
    };
    sdk: {
      input: PutApplicationAccessScopeCommandInput;
      output: PutApplicationAccessScopeCommandOutput;
    };
  };
}
