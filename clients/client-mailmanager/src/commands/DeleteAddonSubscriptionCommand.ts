// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MailManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MailManagerClient";
import { DeleteAddonSubscriptionRequest, DeleteAddonSubscriptionResponse } from "../models/models_0";
import { DeleteAddonSubscription } from "../schemas/schemas_3_Addon";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Deletes an Add On subscription.</p>
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
 *  <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request validation has failed. For details, see the accompanying error message.</p>
 *
 * @throws {@link MailManagerServiceException}
 * <p>Base exception class for all service exceptions from MailManager service.</p>
 *
 *
 * @public
 */
export class DeleteAddonSubscriptionCommand extends $Command
  .classBuilder<
    DeleteAddonSubscriptionCommandInput,
    DeleteAddonSubscriptionCommandOutput,
    MailManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MailManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MailManagerSvc", "DeleteAddonSubscription", {})
  .n("MailManagerClient", "DeleteAddonSubscriptionCommand")
  .sc(DeleteAddonSubscription)
  .build() {
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
