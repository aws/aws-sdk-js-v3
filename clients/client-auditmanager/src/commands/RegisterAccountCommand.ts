// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RegisterAccountRequest, RegisterAccountResponse } from "../models/models_0";
import { RegisterAccount$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RegisterAccountCommand}.
 */
export interface RegisterAccountCommandInput extends RegisterAccountRequest {}
/**
 * @public
 *
 * The output of {@link RegisterAccountCommand}.
 */
export interface RegisterAccountCommandOutput extends RegisterAccountResponse, __MetadataBearer {}

/**
 * Enables Audit Manager for the specified Amazon Web Services account.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, RegisterAccountCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, RegisterAccountCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * // import type { AuditManagerClientConfig } from "@aws-sdk/client-auditmanager";
 * const config = {}; // type is AuditManagerClientConfig
 * const client = new AuditManagerClient(config);
 * const input = { // RegisterAccountRequest
 *   kmsKey: "STRING_VALUE",
 *   delegatedAdminAccount: "STRING_VALUE",
 * };
 * const command = new RegisterAccountCommand(input);
 * const response = await client.send(command);
 * // { // RegisterAccountResponse
 * //   status: "ACTIVE" || "INACTIVE" || "PENDING_ACTIVATION",
 * // };
 *
 * ```
 *
 * @param RegisterAccountCommandInput - {@link RegisterAccountCommandInput}
 * @returns {@link RegisterAccountCommandOutput}
 * @see {@link RegisterAccountCommandInput} for command's `input` shape.
 * @see {@link RegisterAccountCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for AuditManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Your account isn't registered with Audit Manager. Check the delegated administrator setup on the Audit Manager settings page, and try again.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal service error occurred during the processing of your request. Try again later.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource that's specified in the request can't be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request has invalid or missing parameters.
 *
 * @throws {@link AuditManagerServiceException}
 *
 * Base exception class for all service exceptions from AuditManager service.
 *
 * @public
 */
export class RegisterAccountCommand extends command<RegisterAccountCommandInput, RegisterAccountCommandOutput>(
  _ep0,
  _mw0,
  "RegisterAccount",
  RegisterAccount$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RegisterAccountRequest;
      output: RegisterAccountResponse;
    };
    sdk: {
      input: RegisterAccountCommandInput;
      output: RegisterAccountCommandOutput;
    };
  };
}
