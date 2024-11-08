// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FirehoseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FirehoseClient";
import { DeleteDeliveryStreamInput, DeleteDeliveryStreamOutput } from "../models/models_0";
import { de_DeleteDeliveryStreamCommand, se_DeleteDeliveryStreamCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteDeliveryStreamCommand}.
 */
export interface DeleteDeliveryStreamCommandInput extends DeleteDeliveryStreamInput {}
/**
 * @public
 *
 * The output of {@link DeleteDeliveryStreamCommand}.
 */
export interface DeleteDeliveryStreamCommandOutput extends DeleteDeliveryStreamOutput, __MetadataBearer {}

/**
 * <p>Deletes a Firehose stream and its data.</p>
 *          <p>You can delete a Firehose stream only if it is in one of the following states:
 *             <code>ACTIVE</code>, <code>DELETING</code>, <code>CREATING_FAILED</code>, or
 *             <code>DELETING_FAILED</code>. You can't delete a Firehose stream that is in the
 *          <code>CREATING</code> state. To check the state of a Firehose stream, use <a>DescribeDeliveryStream</a>. </p>
 *          <p>DeleteDeliveryStream is an asynchronous API. When an API request to DeleteDeliveryStream succeeds, the Firehose stream is marked for deletion, and it goes into the
 *          <code>DELETING</code> state.While the Firehose stream is in the <code>DELETING</code> state, the service might
 *          continue to accept records, but it doesn't make any guarantees with respect to delivering
 *          the data. Therefore, as a best practice, first stop any applications that are sending
 *          records before you delete a Firehose stream.</p>
 *          <p>Removal of a Firehose stream that is in the <code>DELETING</code> state is a low priority operation for the service. A stream may remain in the
 *          <code>DELETING</code> state for several minutes. Therefore, as a best practice, applications should not wait for streams in the <code>DELETING</code> state
 *          to be removed. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FirehoseClient, DeleteDeliveryStreamCommand } from "@aws-sdk/client-firehose"; // ES Modules import
 * // const { FirehoseClient, DeleteDeliveryStreamCommand } = require("@aws-sdk/client-firehose"); // CommonJS import
 * const client = new FirehoseClient(config);
 * const input = { // DeleteDeliveryStreamInput
 *   DeliveryStreamName: "STRING_VALUE", // required
 *   AllowForceDelete: true || false,
 * };
 * const command = new DeleteDeliveryStreamCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteDeliveryStreamCommandInput - {@link DeleteDeliveryStreamCommandInput}
 * @returns {@link DeleteDeliveryStreamCommandOutput}
 * @see {@link DeleteDeliveryStreamCommandInput} for command's `input` shape.
 * @see {@link DeleteDeliveryStreamCommandOutput} for command's `response` shape.
 * @see {@link FirehoseClientResolvedConfig | config} for FirehoseClient's `config` shape.
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
export class DeleteDeliveryStreamCommand extends $Command
  .classBuilder<
    DeleteDeliveryStreamCommandInput,
    DeleteDeliveryStreamCommandOutput,
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
  .s("Firehose_20150804", "DeleteDeliveryStream", {})
  .n("FirehoseClient", "DeleteDeliveryStreamCommand")
  .f(void 0, void 0)
  .ser(se_DeleteDeliveryStreamCommand)
  .de(de_DeleteDeliveryStreamCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDeliveryStreamInput;
      output: {};
    };
    sdk: {
      input: DeleteDeliveryStreamCommandInput;
      output: DeleteDeliveryStreamCommandOutput;
    };
  };
}
