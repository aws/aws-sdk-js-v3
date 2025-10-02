// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteContactChannelRequest, DeleteContactChannelResult } from "../models/models_0";
import { de_DeleteContactChannelCommand, se_DeleteContactChannelCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMContactsClientResolvedConfig } from "../SSMContactsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteContactChannelCommand}.
 */
export interface DeleteContactChannelCommandInput extends DeleteContactChannelRequest {}
/**
 * @public
 *
 * The output of {@link DeleteContactChannelCommand}.
 */
export interface DeleteContactChannelCommandOutput extends DeleteContactChannelResult, __MetadataBearer {}

/**
 * <p>To stop receiving engagements on a contact channel, you can delete the channel from a
 *          contact. Deleting the contact channel does not remove it from the contact's engagement
 *          plan, but the stage that includes the channel will be ignored. If you delete the only
 *          contact channel for a contact, you'll no longer be able to engage that contact during an
 *          incident.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, DeleteContactChannelCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, DeleteContactChannelCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * // import type { SSMContactsClientConfig } from "@aws-sdk/client-ssm-contacts";
 * const config = {}; // type is SSMContactsClientConfig
 * const client = new SSMContactsClient(config);
 * const input = { // DeleteContactChannelRequest
 *   ContactChannelId: "STRING_VALUE", // required
 * };
 * const command = new DeleteContactChannelCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteContactChannelCommandInput - {@link DeleteContactChannelCommandInput}
 * @returns {@link DeleteContactChannelCommandOutput}
 * @see {@link DeleteContactChannelCommandInput} for command's `input` shape.
 * @see {@link DeleteContactChannelCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for SSMContactsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error occurred while processing the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource that doesn't exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services
 *          service.</p>
 *
 * @throws {@link SSMContactsServiceException}
 * <p>Base exception class for all service exceptions from SSMContacts service.</p>
 *
 *
 * @public
 */
export class DeleteContactChannelCommand extends $Command
  .classBuilder<
    DeleteContactChannelCommandInput,
    DeleteContactChannelCommandOutput,
    SSMContactsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMContactsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SSMContacts", "DeleteContactChannel", {})
  .n("SSMContactsClient", "DeleteContactChannelCommand")
  .f(void 0, void 0)
  .ser(se_DeleteContactChannelCommand)
  .de(de_DeleteContactChannelCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteContactChannelRequest;
      output: {};
    };
    sdk: {
      input: DeleteContactChannelCommandInput;
      output: DeleteContactChannelCommandOutput;
    };
  };
}
