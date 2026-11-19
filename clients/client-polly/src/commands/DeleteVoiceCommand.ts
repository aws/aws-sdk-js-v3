// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteVoiceInput, DeleteVoiceOutput } from "../models/models_0";
import { DeleteVoice$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteVoiceCommand}.
 */
export interface DeleteVoiceCommandInput extends DeleteVoiceInput {}
/**
 * @public
 *
 * The output of {@link DeleteVoiceCommand}.
 */
export interface DeleteVoiceCommandOutput extends DeleteVoiceOutput, __MetadataBearer {}

/**
 * <p>Deletes a custom voice. <code>DescribeVoices</code> and
 *       <code>GetVoice</code> stop returning the voice immediately. You can't
 *       restore a deleted voice.</p>
 *          <p>You can delete a voice in <code>active</code> or <code>failed</code>
 *       status. If the voice is in <code>pending</code> status, the request fails
 *       with <code>ConflictException</code>. If no custom voice with the specified
 *       ID exists in your account and Region, the request fails with
 *       <code>ResourceNotFoundException</code>. You can delete the voice even if
 *       you disabled its Amazon Web Services KMS key or scheduled it for deletion.</p>
 *          <p>This operation requires permissions to perform the
 *       <code>polly:DeleteVoice</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PollyClient, DeleteVoiceCommand } from "@aws-sdk/client-polly"; // ES Modules import
 * // const { PollyClient, DeleteVoiceCommand } = require("@aws-sdk/client-polly"); // CommonJS import
 * // import type { PollyClientConfig } from "@aws-sdk/client-polly";
 * const config = {}; // type is PollyClientConfig
 * const client = new PollyClient(config);
 * const input = { // DeleteVoiceInput
 *   VoiceId: "STRING_VALUE", // required
 * };
 * const command = new DeleteVoiceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteVoiceCommandInput - {@link DeleteVoiceCommandInput}
 * @returns {@link DeleteVoiceCommandOutput}
 * @see {@link DeleteVoiceCommandInput} for command's `input` shape.
 * @see {@link DeleteVoiceCommandOutput} for command's `response` shape.
 * @see {@link PollyClientResolvedConfig | config} for PollyClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request conflicts with the current state of the resource. For
 *       a custom voice, the voice isn't in the status that the operation
 *       requires. Check the status with <code>GetVoice</code>, and then try
 *       again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Amazon Polly can't find the specified resource. Verify that the resource
 *       exists in the Amazon Web Services account and Region of the request and that its ARN or
 *       ID is spelled correctly, and then try again.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>An unknown condition has caused a service failure.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because of request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service.</p>
 *
 * @throws {@link PollyServiceException}
 * <p>Base exception class for all service exceptions from Polly service.</p>
 *
 *
 * @public
 */
export class DeleteVoiceCommand extends command<DeleteVoiceCommandInput, DeleteVoiceCommandOutput>(
  _ep0,
  _mw0,
  "DeleteVoice",
  DeleteVoice$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteVoiceInput;
      output: {};
    };
    sdk: {
      input: DeleteVoiceCommandInput;
      output: DeleteVoiceCommandOutput;
    };
  };
}
