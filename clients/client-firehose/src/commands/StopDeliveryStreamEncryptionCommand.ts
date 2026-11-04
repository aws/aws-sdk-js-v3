// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StopDeliveryStreamEncryptionInput, StopDeliveryStreamEncryptionOutput } from "../models/models_0";
import { StopDeliveryStreamEncryption$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface StopDeliveryStreamEncryptionCommandOutput extends StopDeliveryStreamEncryptionOutput, __MetadataBearer {}

/**
 * Disables server-side encryption (SSE) for the Firehose stream.
 *
 * This operation is asynchronous. It returns immediately. When you invoke it, Firehose first sets the encryption status of the stream to `DISABLING`, and then to `DISABLED`. You can continue to read and write data to your stream while its status is `DISABLING`. It can take up to 5 seconds after the encryption status changes to `DISABLED` before all records written to the Firehose stream are no longer subject to encryption. To find out whether a record or a batch of records was encrypted, check the response elements PutRecordOutput$Encrypted and PutRecordBatchOutput$Encrypted, respectively.
 *
 * To check the encryption state of a Firehose stream, use DescribeDeliveryStream.
 *
 * If SSE is enabled using a customer managed CMK and then you invoke `StopDeliveryStreamEncryption`, Firehose schedules the related KMS grant for retirement and then retires it after it ensures that it is finished delivering records to the destination.
 *
 * The `StartDeliveryStreamEncryption` and `StopDeliveryStreamEncryption` operations have a combined limit of 25 calls per Firehose stream per 24 hours. For example, you reach the limit if you call `StartDeliveryStreamEncryption` 13 times and `StopDeliveryStreamEncryption` 12 times for the same Firehose stream in a 24-hour period.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FirehoseClient, StopDeliveryStreamEncryptionCommand } from "@aws-sdk/client-firehose"; // ES Modules import
 * // const { FirehoseClient, StopDeliveryStreamEncryptionCommand } = require("@aws-sdk/client-firehose"); // CommonJS import
 * // import type { FirehoseClientConfig } from "@aws-sdk/client-firehose";
 * const config = {}; // type is FirehoseClientConfig
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
 *
 * The specified input parameter has a value that is not valid.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * You have already reached the limit for a requested resource.
 *
 * @throws {@link ResourceInUseException} (client fault)
 *
 * The resource is already in use and not available for this operation.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource could not be found.
 *
 * @throws {@link FirehoseServiceException}
 *
 * Base exception class for all service exceptions from Firehose service.
 *
 * @public
 */
export class StopDeliveryStreamEncryptionCommand extends command<StopDeliveryStreamEncryptionCommandInput, StopDeliveryStreamEncryptionCommandOutput>(
  _ep0,
  _mw0,
  "StopDeliveryStreamEncryption",
  StopDeliveryStreamEncryption$
) {
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
