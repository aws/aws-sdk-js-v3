// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteAccessControlRuleRequest, DeleteAccessControlRuleResponse } from "../models/models_0";
import { DeleteAccessControlRule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteAccessControlRuleCommand}.
 */
export interface DeleteAccessControlRuleCommandInput extends DeleteAccessControlRuleRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAccessControlRuleCommand}.
 */
export interface DeleteAccessControlRuleCommandOutput extends DeleteAccessControlRuleResponse, __MetadataBearer {}

/**
 * <p>Deletes an access control rule for the specified WorkMail organization.</p>
 *          <note>
 *             <p>Deleting already deleted and non-existing rules does not produce an error. In those cases, the service sends back an HTTP 200 response with an empty HTTP body.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, DeleteAccessControlRuleCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, DeleteAccessControlRuleCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * // import type { WorkMailClientConfig } from "@aws-sdk/client-workmail";
 * const config = {}; // type is WorkMailClientConfig
 * const client = new WorkMailClient(config);
 * const input = { // DeleteAccessControlRuleRequest
 *   OrganizationId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DeleteAccessControlRuleCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAccessControlRuleCommandInput - {@link DeleteAccessControlRuleCommandInput}
 * @returns {@link DeleteAccessControlRuleCommandOutput}
 * @see {@link DeleteAccessControlRuleCommandInput} for command's `input` shape.
 * @see {@link DeleteAccessControlRuleCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
 *
 * @throws {@link OrganizationNotFoundException} (client fault)
 *  <p>An operation received a valid organization identifier that either doesn't belong or
 *          exist in the system.</p>
 *
 * @throws {@link OrganizationStateException} (client fault)
 *  <p>The organization must have a valid state to perform certain
 *          operations on the organization or its members.</p>
 *
 * @throws {@link WorkMailServiceException}
 * <p>Base exception class for all service exceptions from WorkMail service.</p>
 *
 *
 * @public
 */
export class DeleteAccessControlRuleCommand extends command<DeleteAccessControlRuleCommandInput, DeleteAccessControlRuleCommandOutput>(
  _ep0,
  _mw0,
  "DeleteAccessControlRule",
  DeleteAccessControlRule$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAccessControlRuleRequest;
      output: {};
    };
    sdk: {
      input: DeleteAccessControlRuleCommandInput;
      output: DeleteAccessControlRuleCommandOutput;
    };
  };
}
