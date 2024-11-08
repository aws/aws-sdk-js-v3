// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FirehoseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FirehoseClient";
import { StopDeliveryStreamEncryptionInput, StopDeliveryStreamEncryptionOutput } from "../models/models_0";
import {
  de_StopDeliveryStreamEncryptionCommand,
  se_StopDeliveryStreamEncryptionCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopDeliveryStreamEncryptionCommand}.
 */
export interface StopDeliveryStreamEncryptionCommandInput extends StopDeliveryStreamEncryptionInput {}
/**
 * @public
 *
 * The output of {@link StopDeliveryStreamEncryptionCommand}.
 */
export interface StopDeliveryStreamEncryptionCommandOutput
  extends StopDeliveryStreamEncryptionOutput,
    __MetadataBearer {}

/**
 * <p>Disables server-side encryption (SSE) for the Firehose stream. </p>
 *          <p>This operation is asynchronous. It returns immediately. When you invoke it, Firehose first sets the encryption status of the stream to <code>DISABLING</code>, and then
 *          to <code>DISABLED</code>. You can continue to read and write data to your stream while its
 *          status is <code>DISABLING</code>. It can take up to 5 seconds after the encryption status
 *          changes to <code>DISABLED</code> before all records written to the Firehose stream are no
 *          longer subject to encryption. To find out whether a record or a batch of records was
 *          encrypted, check the response elements <a>PutRecordOutput$Encrypted</a> and
 *             <a>PutRecordBatchOutput$Encrypted</a>, respectively.</p>
 *          <p>To check the encryption state of a Firehose stream, use <a>DescribeDeliveryStream</a>. </p>
 *          <p>If SSE is enabled using a customer managed CMK and then you invoke
 *             <code>StopDeliveryStreamEncryption</code>, Firehose schedules the related
 *          KMS grant for retirement and then retires it after it ensures that it is finished
 *          delivering records to the destination.</p>
 *          <p>The <code>StartDeliveryStreamEncryption</code> and
 *             <code>StopDeliveryStreamEncryption</code> operations have a combined limit of 25 calls
 *          per Firehose stream per 24 hours. For example, you reach the limit if you call
 *             <code>StartDeliveryStreamEncryption</code> 13 times and
 *             <code>StopDeliveryStreamEncryption</code> 12 times for the same Firehose stream in a
 *          24-hour period.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FirehoseClient, StopDeliveryStreamEncryptionCommand } from "@aws-sdk/client-firehose"; // ES Modules import
 * // const { FirehoseClient, StopDeliveryStreamEncryptionCommand } = require("@aws-sdk/client-firehose"); // CommonJS import
 * const client = new FirehoseClient(config);
 * const input = { // StopDeliveryStreamEncryptionInput
 *   DeliveryStreamName: "STRING_VALUE", // required
 * };
 * const command = new StopDeliveryStreamEncryptionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopDeliveryStreamEncryptionCommandInput - {@link StopDeliveryStreamEncryptionCommandInput}
 * @returns {@link StopDeliveryStreamEncryptionCommandOutput}
 * @see {@link StopDeliveryStreamEncryptionCommandInput} for command's `input` shape.
 * @see {@link StopDeliveryStreamEncryptionCommandOutput} for command's `response` shape.
 * @see {@link FirehoseClientResolvedConfig | config} for FirehoseClient's `config` shape.
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>The specified input parameter has a value that is not valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You have already reached the limit for a requested resource.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The resource is already in use and not available for this operation.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found.</p>
 *
 * @throws {@link FirehoseServiceException}
 * <p>Base exception class for all service exceptions from Firehose service.</p>
 *
 * @public
 */
export class StopDeliveryStreamEncryptionCommand extends $Command
  .classBuilder<
    StopDeliveryStreamEncryptionCommandInput,
    StopDeliveryStreamEncryptionCommandOutput,
    FirehoseClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FirehoseClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Firehose_20150804", "StopDeliveryStreamEncryption", {})
  .n("FirehoseClient", "StopDeliveryStreamEncryptionCommand")
  .f(void 0, void 0)
  .ser(se_StopDeliveryStreamEncryptionCommand)
  .de(de_StopDeliveryStreamEncryptionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopDeliveryStreamEncryptionInput;
      output: {};
    };
    sdk: {
      input: StopDeliveryStreamEncryptionCommandInput;
      output: StopDeliveryStreamEncryptionCommandOutput;
    };
  };
}
