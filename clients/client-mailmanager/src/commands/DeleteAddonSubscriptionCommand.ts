// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteAddonSubscriptionRequest, DeleteAddonSubscriptionResponse } from "../models/models_0";
import { DeleteAddonSubscription$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteAddonSubscriptionCommand}.
 */
export interface DeleteAddonSubscriptionCommandInput extends DeleteAddonSubscriptionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAddonSubscriptionCommand}.
 */
export interface DeleteAddonSubscriptionCommandOutput extends DeleteAddonSubscriptionResponse, __MetadataBearer {}

/**
 * Deletes an Add On subscription.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MailManagerClient, DeleteAddonSubscriptionCommand } from "@aws-sdk/client-mailmanager"; // ES Modules import
 * // const { MailManagerClient, DeleteAddonSubscriptionCommand } = require("@aws-sdk/client-mailmanager"); // CommonJS import
 * // import type { MailManagerClientConfig } from "@aws-sdk/client-mailmanager";
 * const config = {}; // type is MailManagerClientConfig
 * const client = new MailManagerClient(config);
 * const input = { // DeleteAddonSubscriptionRequest
 *   AddonSubscriptionId: "STRING_VALUE", // required
 * };
 * const command = new DeleteAddonSubscriptionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAddonSubscriptionCommandInput - {@link DeleteAddonSubscriptionCommandInput}
 * @returns {@link DeleteAddonSubscriptionCommandOutput}
 * @see {@link DeleteAddonSubscriptionCommandInput} for command's `input` shape.
 * @see {@link DeleteAddonSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link MailManagerClientResolvedConfig | config} for MailManagerClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request configuration has conflicts. For details, see the accompanying error message.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request validation has failed. For details, see the accompanying error message.
 *
 * @throws {@link MailManagerServiceException}
 *
 * Base exception class for all service exceptions from MailManager service.
 *
 * @public
 */
export class DeleteAddonSubscriptionCommand extends command<DeleteAddonSubscriptionCommandInput, DeleteAddonSubscriptionCommandOutput>(
  _ep0,
  _mw0,
  "DeleteAddonSubscription",
  DeleteAddonSubscription$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAddonSubscriptionRequest;
      output: {};
    };
    sdk: {
      input: DeleteAddonSubscriptionCommandInput;
      output: DeleteAddonSubscriptionCommandOutput;
    };
  };
}
