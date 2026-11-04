// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  RegisterOrganizationAdminAccountRequest,
  RegisterOrganizationAdminAccountResponse,
} from "../models/models_0";
import { RegisterOrganizationAdminAccount$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RegisterOrganizationAdminAccountCommand}.
 */
export interface RegisterOrganizationAdminAccountCommandInput extends RegisterOrganizationAdminAccountRequest {}
/**
 * @public
 *
 * The output of {@link RegisterOrganizationAdminAccountCommand}.
 */
export interface RegisterOrganizationAdminAccountCommandOutput extends RegisterOrganizationAdminAccountResponse, __MetadataBearer {}

/**
 * Enables an Amazon Web Services account within the organization as the delegated administrator for Audit Manager.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, RegisterOrganizationAdminAccountCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, RegisterOrganizationAdminAccountCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * // import type { AuditManagerClientConfig } from "@aws-sdk/client-auditmanager";
 * const config = {}; // type is AuditManagerClientConfig
 * const client = new AuditManagerClient(config);
 * const input = { // RegisterOrganizationAdminAccountRequest
 *   adminAccountId: "STRING_VALUE", // required
 * };
 * const command = new RegisterOrganizationAdminAccountCommand(input);
 * const response = await client.send(command);
 * // { // RegisterOrganizationAdminAccountResponse
 * //   adminAccountId: "STRING_VALUE",
 * //   organizationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RegisterOrganizationAdminAccountCommandInput - {@link RegisterOrganizationAdminAccountCommandInput}
 * @returns {@link RegisterOrganizationAdminAccountCommandOutput}
 * @see {@link RegisterOrganizationAdminAccountCommandInput} for command's `input` shape.
 * @see {@link RegisterOrganizationAdminAccountCommandOutput} for command's `response` shape.
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
export class RegisterOrganizationAdminAccountCommand extends command<RegisterOrganizationAdminAccountCommandInput, RegisterOrganizationAdminAccountCommandOutput>(
  _ep0,
  _mw0,
  "RegisterOrganizationAdminAccount",
  RegisterOrganizationAdminAccount$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RegisterOrganizationAdminAccountRequest;
      output: RegisterOrganizationAdminAccountResponse;
    };
    sdk: {
      input: RegisterOrganizationAdminAccountCommandInput;
      output: RegisterOrganizationAdminAccountCommandOutput;
    };
  };
}
