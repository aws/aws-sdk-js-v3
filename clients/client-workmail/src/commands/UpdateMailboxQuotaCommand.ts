// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateMailboxQuotaRequest, UpdateMailboxQuotaResponse } from "../models/models_0";
import { UpdateMailboxQuota } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateMailboxQuotaCommand}.
 */
export interface UpdateMailboxQuotaCommandInput extends UpdateMailboxQuotaRequest {}
/**
 * @public
 *
 * The output of {@link UpdateMailboxQuotaCommand}.
 */
export interface UpdateMailboxQuotaCommandOutput extends UpdateMailboxQuotaResponse, __MetadataBearer {}

/**
 * <p>Updates a user's current mailbox quota for a specified organization and
 *          user.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, UpdateMailboxQuotaCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, UpdateMailboxQuotaCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * // import type { WorkMailClientConfig } from "@aws-sdk/client-workmail";
 * const config = {}; // type is WorkMailClientConfig
 * const client = new WorkMailClient(config);
 * const input = { // UpdateMailboxQuotaRequest
 *   OrganizationId: "STRING_VALUE", // required
 *   UserId: "STRING_VALUE", // required
 *   MailboxQuota: Number("int"), // required
 * };
 * const command = new UpdateMailboxQuotaCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateMailboxQuotaCommandInput - {@link UpdateMailboxQuotaCommandInput}
 * @returns {@link UpdateMailboxQuotaCommandOutput}
 * @see {@link UpdateMailboxQuotaCommandInput} for command's `input` shape.
 * @see {@link UpdateMailboxQuotaCommandOutput} for command's `response` shape.
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
export class UpdateMailboxQuotaCommand extends $Command
  .classBuilder<
    UpdateMailboxQuotaCommandInput,
    UpdateMailboxQuotaCommandOutput,
    WorkMailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkMailClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WorkMailService", "UpdateMailboxQuota", {})
  .n("WorkMailClient", "UpdateMailboxQuotaCommand")
  .sc(UpdateMailboxQuota)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateMailboxQuotaRequest;
      output: {};
    };
    sdk: {
      input: UpdateMailboxQuotaCommandInput;
      output: UpdateMailboxQuotaCommandOutput;
    };
  };
}
