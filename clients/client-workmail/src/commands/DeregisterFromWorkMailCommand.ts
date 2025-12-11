// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeregisterFromWorkMailRequest, DeregisterFromWorkMailResponse } from "../models/models_0";
import { DeregisterFromWorkMail } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeregisterFromWorkMailCommand}.
 */
export interface DeregisterFromWorkMailCommandInput extends DeregisterFromWorkMailRequest {}
/**
 * @public
 *
 * The output of {@link DeregisterFromWorkMailCommand}.
 */
export interface DeregisterFromWorkMailCommandOutput extends DeregisterFromWorkMailResponse, __MetadataBearer {}

/**
 * <p>Mark a user, group, or resource as no longer used in WorkMail. This action
 *          disassociates the mailbox and schedules it for clean-up. WorkMail keeps mailboxes for 30 days
 *          before they are permanently removed. The functionality in the console is
 *             <i>Disable</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, DeregisterFromWorkMailCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, DeregisterFromWorkMailCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * // import type { WorkMailClientConfig } from "@aws-sdk/client-workmail";
 * const config = {}; // type is WorkMailClientConfig
 * const client = new WorkMailClient(config);
 * const input = { // DeregisterFromWorkMailRequest
 *   OrganizationId: "STRING_VALUE", // required
 *   EntityId: "STRING_VALUE", // required
 * };
 * const command = new DeregisterFromWorkMailCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeregisterFromWorkMailCommandInput - {@link DeregisterFromWorkMailCommandInput}
 * @returns {@link DeregisterFromWorkMailCommandOutput}
 * @see {@link DeregisterFromWorkMailCommandInput} for command's `input` shape.
 * @see {@link DeregisterFromWorkMailCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>The identifier supplied for the user, group, or resource does not exist in your
 *          organization.</p>
 *
 * @throws {@link EntityStateException} (client fault)
 *  <p>You are performing an operation on a user, group, or resource that isn't in the
 *          expected state, such as trying to delete an active user.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the input parameters don't match the service's restrictions.</p>
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
export class DeregisterFromWorkMailCommand extends $Command
  .classBuilder<
    DeregisterFromWorkMailCommandInput,
    DeregisterFromWorkMailCommandOutput,
    WorkMailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkMailClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WorkMailService", "DeregisterFromWorkMail", {})
  .n("WorkMailClient", "DeregisterFromWorkMailCommand")
  .sc(DeregisterFromWorkMail)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeregisterFromWorkMailRequest;
      output: {};
    };
    sdk: {
      input: DeregisterFromWorkMailCommandInput;
      output: DeregisterFromWorkMailCommandOutput;
    };
  };
}
