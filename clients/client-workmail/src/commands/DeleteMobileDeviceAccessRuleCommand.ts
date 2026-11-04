// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteMobileDeviceAccessRuleRequest, DeleteMobileDeviceAccessRuleResponse } from "../models/models_0";
import { DeleteMobileDeviceAccessRule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteMobileDeviceAccessRuleCommand}.
 */
export interface DeleteMobileDeviceAccessRuleCommandInput extends DeleteMobileDeviceAccessRuleRequest {}
/**
 * @public
 *
 * The output of {@link DeleteMobileDeviceAccessRuleCommand}.
 */
export interface DeleteMobileDeviceAccessRuleCommandOutput extends DeleteMobileDeviceAccessRuleResponse, __MetadataBearer {}

/**
 * Deletes a mobile device access rule for the specified WorkMail organization.
 *
 * > **Note:** Deleting already deleted and non-existing rules does not produce an error. In those cases, the service sends back an HTTP 200 response with an empty HTTP body.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, DeleteMobileDeviceAccessRuleCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, DeleteMobileDeviceAccessRuleCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * // import type { WorkMailClientConfig } from "@aws-sdk/client-workmail";
 * const config = {}; // type is WorkMailClientConfig
 * const client = new WorkMailClient(config);
 * const input = { // DeleteMobileDeviceAccessRuleRequest
 *   OrganizationId: "STRING_VALUE", // required
 *   MobileDeviceAccessRuleId: "STRING_VALUE", // required
 * };
 * const command = new DeleteMobileDeviceAccessRuleCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteMobileDeviceAccessRuleCommandInput - {@link DeleteMobileDeviceAccessRuleCommandInput}
 * @returns {@link DeleteMobileDeviceAccessRuleCommandOutput}
 * @see {@link DeleteMobileDeviceAccessRuleCommandInput} for command's `input` shape.
 * @see {@link DeleteMobileDeviceAccessRuleCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more of the input parameters don't match the service's restrictions.
 *
 * @throws {@link OrganizationNotFoundException} (client fault)
 *
 * An operation received a valid organization identifier that either doesn't belong or exist in the system.
 *
 * @throws {@link OrganizationStateException} (client fault)
 *
 * The organization must have a valid state to perform certain operations on the organization or its members.
 *
 * @throws {@link WorkMailServiceException}
 *
 * Base exception class for all service exceptions from WorkMail service.
 *
 * @public
 */
export class DeleteMobileDeviceAccessRuleCommand extends command<DeleteMobileDeviceAccessRuleCommandInput, DeleteMobileDeviceAccessRuleCommandOutput>(
  _ep0,
  _mw0,
  "DeleteMobileDeviceAccessRule",
  DeleteMobileDeviceAccessRule$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteMobileDeviceAccessRuleRequest;
      output: {};
    };
    sdk: {
      input: DeleteMobileDeviceAccessRuleCommandInput;
      output: DeleteMobileDeviceAccessRuleCommandOutput;
    };
  };
}
