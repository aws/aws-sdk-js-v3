// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeactivateOrganizationsAccessInput, DeactivateOrganizationsAccessOutput } from "../models/models_0";
import { DeactivateOrganizationsAccess$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeactivateOrganizationsAccessCommand}.
 */
export interface DeactivateOrganizationsAccessCommandInput extends DeactivateOrganizationsAccessInput {}
/**
 * @public
 *
 * The output of {@link DeactivateOrganizationsAccessCommand}.
 */
export interface DeactivateOrganizationsAccessCommandOutput extends DeactivateOrganizationsAccessOutput, __MetadataBearer {}

/**
 * <p>Deactivates trusted access with Organizations. If trusted access is deactivated,
 *       the management account does not have permissions to create and manage
 *       service-managed StackSets for your organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DeactivateOrganizationsAccessCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DeactivateOrganizationsAccessCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * // import type { CloudFormationClientConfig } from "@aws-sdk/client-cloudformation";
 * const config = {}; // type is CloudFormationClientConfig
 * const client = new CloudFormationClient(config);
 * const input = {};
 * const command = new DeactivateOrganizationsAccessCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeactivateOrganizationsAccessCommandInput - {@link DeactivateOrganizationsAccessCommandInput}
 * @returns {@link DeactivateOrganizationsAccessCommandOutput}
 * @see {@link DeactivateOrganizationsAccessCommandInput} for command's `input` shape.
 * @see {@link DeactivateOrganizationsAccessCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link InvalidOperationException} (client fault)
 *  <p>The specified operation isn't valid.</p>
 *
 * @throws {@link OperationNotFoundException} (client fault)
 *  <p>The specified ID refers to an operation that doesn't exist.</p>
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 *
 * @public
 */
export class DeactivateOrganizationsAccessCommand extends command<DeactivateOrganizationsAccessCommandInput, DeactivateOrganizationsAccessCommandOutput>(
  _ep0,
  _mw0,
  "DeactivateOrganizationsAccess",
  DeactivateOrganizationsAccess$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: {};
    };
    sdk: {
      input: DeactivateOrganizationsAccessCommandInput;
      output: DeactivateOrganizationsAccessCommandOutput;
    };
  };
}
