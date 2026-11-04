// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartDeliveryStreamEncryptionInput, StartDeliveryStreamEncryptionOutput } from "../models/models_0";
import { StartDeliveryStreamEncryption$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartDeliveryStreamEncryptionCommand}.
 */
export interface StartDeliveryStreamEncryptionCommandInput extends StartDeliveryStreamEncryptionInput {}
/**
 * @public
 *
 * The output of {@link StartDeliveryStreamEncryptionCommand}.
 */
export interface StartDeliveryStreamEncryptionCommandOutput extends StartDeliveryStreamEncryptionOutput, __MetadataBearer {}

/**
 * Enables server-side encryption (SSE) for the Firehose stream.
 *
 * This operation is asynchronous. It returns immediately. When you invoke it, Firehose first sets the encryption status of the stream to `ENABLING`, and then to `ENABLED`. The encryption status of a Firehose stream is the `Status` property in DeliveryStreamEncryptionConfiguration. If the operation fails, the encryption status changes to `ENABLING_FAILED`. You can continue to read and write data to your Firehose stream while the encryption status is `ENABLING`, but the data is not encrypted. It can take up to 5 seconds after the encryption status changes to `ENABLED` before all records written to the Firehose stream are encrypted. To find out whether a record or a batch of records was encrypted, check the response elements PutRecordOutput$Encrypted and PutRecordBatchOutput$Encrypted, respectively.
 *
 * To check the encryption status of a Firehose stream, use DescribeDeliveryStream.
 *
 * Even if encryption is currently enabled for a Firehose stream, you can still invoke this operation on it to change the ARN of the CMK or both its type and ARN. If you invoke this method to change the CMK, and the old CMK is of type `CUSTOMER_MANAGED_CMK`, Firehose schedules the grant it had on the old CMK for retirement. If the new CMK is of type `CUSTOMER_MANAGED_CMK`, Firehose creates a grant that enables it to use the new CMK to encrypt and decrypt data and to manage the grant.
 *
 * For the KMS grant creation to be successful, the Firehose API operations `StartDeliveryStreamEncryption` and `CreateDeliveryStream` should not be called with session credentials that are more than 6 hours old.
 *
 * If a Firehose stream already has encryption enabled and then you invoke this operation to change the ARN of the CMK or both its type and ARN and you get `ENABLING_FAILED`, this only means that the attempt to change the CMK failed. In this case, encryption remains enabled with the old CMK.
 *
 * If the encryption status of your Firehose stream is `ENABLING_FAILED`, you can invoke this operation again with a valid CMK. The CMK must be enabled and the key policy mustn't explicitly deny the permission for Firehose to invoke KMS encrypt and decrypt operations.
 *
 * You can enable SSE for a Firehose stream only if it's a Firehose stream that uses `DirectPut` as its source.
 *
 * The `StartDeliveryStreamEncryption` and `StopDeliveryStreamEncryption` operations have a combined limit of 25 calls per Firehose stream per 24 hours. For example, you reach the limit if you call `StartDeliveryStreamEncryption` 13 times and `StopDeliveryStreamEncryption` 12 times for the same Firehose stream in a 24-hour period.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FirehoseClient, StartDeliveryStreamEncryptionCommand } from "@aws-sdk/client-firehose"; // ES Modules import
 * // const { FirehoseClient, StartDeliveryStreamEncryptionCommand } = require("@aws-sdk/client-firehose"); // CommonJS import
 * // import type { FirehoseClientConfig } from "@aws-sdk/client-firehose";
 * const config = {}; // type is FirehoseClientConfig
 * const client = new FirehoseClient(config);
 * const input = { // StartDeliveryStreamEncryptionInput
 *   DeliveryStreamName: "STRING_VALUE", // required
 *   DeliveryStreamEncryptionConfigurationInput: { // DeliveryStreamEncryptionConfigurationInput
 *     KeyARN: "STRING_VALUE",
 *     KeyType: "AWS_OWNED_CMK" || "CUSTOMER_MANAGED_CMK", // required
 *   },
 * };
 * const command = new StartDeliveryStreamEncryptionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StartDeliveryStreamEncryptionCommandInput - {@link StartDeliveryStreamEncryptionCommandInput}
 * @returns {@link StartDeliveryStreamEncryptionCommandOutput}
 * @see {@link StartDeliveryStreamEncryptionCommandInput} for command's `input` shape.
 * @see {@link StartDeliveryStreamEncryptionCommandOutput} for command's `response` shape.
 * @see {@link FirehoseClientResolvedConfig | config} for FirehoseClient's `config` shape.
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *
 * The specified input parameter has a value that is not valid.
 *
 * @throws {@link InvalidKMSResourceException} (client fault)
 *
 * Firehose throws this exception when an attempt to put records or to start or stop Firehose stream encryption fails. This happens when the KMS service throws one of the following exception types: `AccessDeniedException`, `InvalidStateException`, `DisabledException`, or `NotFoundException`.
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
export class StartDeliveryStreamEncryptionCommand extends command<StartDeliveryStreamEncryptionCommandInput, StartDeliveryStreamEncryptionCommandOutput>(
  _ep0,
  _mw0,
  "StartDeliveryStreamEncryption",
  StartDeliveryStreamEncryption$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartDeliveryStreamEncryptionInput;
      output: {};
    };
    sdk: {
      input: StartDeliveryStreamEncryptionCommandInput;
      output: StartDeliveryStreamEncryptionCommandOutput;
    };
  };
}
