// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeregisterAccountRequest, DeregisterAccountResponse } from "../models/models_0";
import { DeregisterAccount$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeregisterAccountCommand}.
 */
export interface DeregisterAccountCommandInput extends DeregisterAccountRequest {}
/**
 * @public
 *
 * The output of {@link DeregisterAccountCommand}.
 */
export interface DeregisterAccountCommandOutput extends DeregisterAccountResponse, __MetadataBearer {}

/**
 * Deregisters an account in Audit Manager.
 *
 * > **Note:**
 * >
 * > Before you deregister, you can use the [UpdateSettings](https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_UpdateSettings.html) API operation to set your preferred data retention policy. By default, Audit Manager retains your data. If you want to delete your data, you can use the `DeregistrationPolicy` attribute to request the deletion of your data.
 * >
 * > For more information about data retention, see [Data Protection](https://docs.aws.amazon.com/audit-manager/latest/userguide/data-protection.html) in the *Audit Manager User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, DeregisterAccountCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, DeregisterAccountCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * // import type { AuditManagerClientConfig } from "@aws-sdk/client-auditmanager";
 * const config = {}; // type is AuditManagerClientConfig
 * const client = new AuditManagerClient(config);
 * const input = {};
 * const command = new DeregisterAccountCommand(input);
 * const response = await client.send(command);
 * // { // DeregisterAccountResponse
 * //   status: "ACTIVE" || "INACTIVE" || "PENDING_ACTIVATION",
 * // };
 *
 * ```
 *
 * @param DeregisterAccountCommandInput - {@link DeregisterAccountCommandInput}
 * @returns {@link DeregisterAccountCommandOutput}
 * @see {@link DeregisterAccountCommandInput} for command's `input` shape.
 * @see {@link DeregisterAccountCommandOutput} for command's `response` shape.
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
export class DeregisterAccountCommand extends command<DeregisterAccountCommandInput, DeregisterAccountCommandOutput>(
  _ep0,
  _mw0,
  "DeregisterAccount",
  DeregisterAccount$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: DeregisterAccountResponse;
    };
    sdk: {
      input: DeregisterAccountCommandInput;
      output: DeregisterAccountCommandOutput;
    };
  };
}
