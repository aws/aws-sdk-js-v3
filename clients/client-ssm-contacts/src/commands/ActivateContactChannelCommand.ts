// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ActivateContactChannelRequest, ActivateContactChannelResult } from "../models/models_0";
import { de_ActivateContactChannelCommand, se_ActivateContactChannelCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMContactsClientResolvedConfig } from "../SSMContactsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ActivateContactChannelCommand}.
 */
export interface ActivateContactChannelCommandInput extends ActivateContactChannelRequest {}
/**
 * @public
 *
 * The output of {@link ActivateContactChannelCommand}.
 */
export interface ActivateContactChannelCommandOutput extends ActivateContactChannelResult, __MetadataBearer {}

/**
 * <p>Activates a contact's contact channel. Incident Manager can't engage a contact until the
 *          contact channel has been activated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, ActivateContactChannelCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, ActivateContactChannelCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * const client = new SSMContactsClient(config);
 * const input = { // ActivateContactChannelRequest
 *   ContactChannelId: "STRING_VALUE", // required
 *   ActivationCode: "STRING_VALUE", // required
 * };
 * const command = new ActivateContactChannelCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ActivateContactChannelCommandInput - {@link ActivateContactChannelCommandInput}
 * @returns {@link ActivateContactChannelCommandOutput}
 * @see {@link ActivateContactChannelCommandInput} for command's `input` shape.
 * @see {@link ActivateContactChannelCommandOutput} for command's `response` shape.
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
export class ActivateContactChannelCommand extends $Command
  .classBuilder<
    ActivateContactChannelCommandInput,
    ActivateContactChannelCommandOutput,
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
  .s("SSMContacts", "ActivateContactChannel", {})
  .n("SSMContactsClient", "ActivateContactChannelCommand")
  .f(void 0, void 0)
  .ser(se_ActivateContactChannelCommand)
  .de(de_ActivateContactChannelCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ActivateContactChannelRequest;
      output: {};
    };
    sdk: {
      input: ActivateContactChannelCommandInput;
      output: ActivateContactChannelCommandOutput;
    };
  };
}
