// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssociateAdminAccountRequest } from "../models/models_0";
import { AssociateAdminAccount$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateAdminAccountCommand}.
 */
export interface AssociateAdminAccountCommandInput extends AssociateAdminAccountRequest {}
/**
 * @public
 *
 * The output of {@link AssociateAdminAccountCommand}.
 */
export interface AssociateAdminAccountCommandOutput extends __MetadataBearer {}

/**
 * Sets a Firewall Manager default administrator account. The Firewall Manager default administrator account can manage third-party firewalls and has full administrative scope that allows administration of all policy types, accounts, organizational units, and Regions. This account must be a member account of the organization in Organizations whose resources you want to protect.
 *
 * For information about working with Firewall Manager administrator accounts, see [Managing Firewall Manager administrators](https://docs.aws.amazon.com/organizations/latest/userguide/fms-administrators.html) in the *Firewall Manager Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, AssociateAdminAccountCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, AssociateAdminAccountCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * // import type { FMSClientConfig } from "@aws-sdk/client-fms";
 * const config = {}; // type is FMSClientConfig
 * const client = new FMSClient(config);
 * const input = { // AssociateAdminAccountRequest
 *   AdminAccount: "STRING_VALUE", // required
 * };
 * const command = new AssociateAdminAccountCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateAdminAccountCommandInput - {@link AssociateAdminAccountCommandInput}
 * @returns {@link AssociateAdminAccountCommandOutput}
 * @see {@link AssociateAdminAccountCommandInput} for command's `input` shape.
 * @see {@link AssociateAdminAccountCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for FMSClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (client fault)
 *
 * The operation failed because of a system problem, even though the request was valid. Retry your request.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The parameters of the request were invalid.
 *
 * @throws {@link InvalidOperationException} (client fault)
 *
 * The operation failed because there was nothing to do or the operation wasn't possible. For example, you might have submitted an `AssociateAdminAccount` request for an account ID that was already set as the Firewall Manager administrator. Or you might have tried to access a Region that's disabled by default, and that you need to enable for the Firewall Manager administrator account and for Organizations before you can access it.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The operation exceeds a resource limit, for example, the maximum number of `policy` objects that you can create for an Amazon Web Services account. For more information, see [Firewall Manager Limits](https://docs.aws.amazon.com/waf/latest/developerguide/fms-limits.html) in the *WAF Developer Guide*.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link FMSServiceException}
 *
 * Base exception class for all service exceptions from FMS service.
 *
 * @public
 */
export class AssociateAdminAccountCommand extends command<AssociateAdminAccountCommandInput, AssociateAdminAccountCommandOutput>(
  _ep0,
  _mw0,
  "AssociateAdminAccount",
  AssociateAdminAccount$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateAdminAccountRequest;
      output: {};
    };
    sdk: {
      input: AssociateAdminAccountCommandInput;
      output: AssociateAdminAccountCommandOutput;
    };
  };
}
