// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { SendActivationCodeRequest, SendActivationCodeResult } from "../models/models_0";
import { SendActivationCode } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SSMContactsClientResolvedConfig } from "../SSMContactsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SendActivationCodeCommand}.
 */
export interface SendActivationCodeCommandInput extends SendActivationCodeRequest {}
/**
 * @public
 *
 * The output of {@link SendActivationCodeCommand}.
 */
export interface SendActivationCodeCommandOutput extends SendActivationCodeResult, __MetadataBearer {}

/**
 * <p>Sends an activation code to a contact channel. The contact can use this code to activate
 *          the contact channel in the console or with the <code>ActivateChannel</code> operation.
 *          Incident Manager can't engage a contact channel until it has been activated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, SendActivationCodeCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, SendActivationCodeCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * // import type { SSMContactsClientConfig } from "@aws-sdk/client-ssm-contacts";
 * const config = {}; // type is SSMContactsClientConfig
 * const client = new SSMContactsClient(config);
 * const input = { // SendActivationCodeRequest
 *   ContactChannelId: "STRING_VALUE", // required
 * };
 * const command = new SendActivationCodeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SendActivationCodeCommandInput - {@link SendActivationCodeCommandInput}
 * @returns {@link SendActivationCodeCommandOutput}
 * @see {@link SendActivationCodeCommandInput} for command's `input` shape.
 * @see {@link SendActivationCodeCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for SSMContactsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this operation.</p>
 *
 * @throws {@link DataEncryptionException} (client fault)
 *  <p>The operation failed to due an encryption key error.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error occurred while processing the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource that doesn't exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Request would cause a service quota to be exceeded.</p>
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
export class SendActivationCodeCommand extends $Command
  .classBuilder<
    SendActivationCodeCommandInput,
    SendActivationCodeCommandOutput,
    SSMContactsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMContactsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SSMContacts", "SendActivationCode", {})
  .n("SSMContactsClient", "SendActivationCodeCommand")
  .sc(SendActivationCode)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SendActivationCodeRequest;
      output: {};
    };
    sdk: {
      input: SendActivationCodeCommandInput;
      output: SendActivationCodeCommandOutput;
    };
  };
}
