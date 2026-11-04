// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StopStreamEncryptionInput } from "../models/models_0";
import { StopStreamEncryption$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StopStreamEncryptionCommand}.
 */
export interface StopStreamEncryptionCommandInput extends StopStreamEncryptionInput {}
/**
 * @public
 *
 * The output of {@link StopStreamEncryptionCommand}.
 */
export interface StopStreamEncryptionCommandOutput extends __MetadataBearer {}

/**
 * Disables server-side encryption for a specified stream.
 *
 * > **Note:** When invoking this API, you must use either the `StreamARN` or the `StreamName` parameter, or both. It is recommended that you use the `StreamARN` input parameter when you invoke this API.
 *
 * Stopping encryption is an asynchronous operation. Upon receiving the request, Kinesis Data Streams returns immediately and sets the status of the stream to `UPDATING`. After the update is complete, Kinesis Data Streams sets the status of the stream back to `ACTIVE`. Stopping encryption normally takes a few seconds to complete, but it can take minutes. You can continue to read and write data to your stream while its status is `UPDATING`. Once the status of the stream is `ACTIVE`, records written to the stream are no longer encrypted by Kinesis Data Streams.
 *
 * API Limits: You can successfully disable server-side encryption 25 times in a rolling 24-hour period.
 *
 * Note: It can take up to 5 seconds after the stream is in an `ACTIVE` status before all records written to the stream are no longer subject to encryption. After you disabled encryption, you can verify that encryption is not applied by inspecting the API response from `PutRecord` or `PutRecords`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisClient, StopStreamEncryptionCommand } from "@aws-sdk/client-kinesis"; // ES Modules import
 * // const { KinesisClient, StopStreamEncryptionCommand } = require("@aws-sdk/client-kinesis"); // CommonJS import
 * // import type { KinesisClientConfig } from "@aws-sdk/client-kinesis";
 * const config = {}; // type is KinesisClientConfig
 * const client = new KinesisClient(config);
 * const input = { // StopStreamEncryptionInput
 *   StreamName: "STRING_VALUE",
 *   EncryptionType: "NONE" || "KMS", // required
 *   KeyId: "STRING_VALUE", // required
 *   StreamARN: "STRING_VALUE",
 *   StreamId: "STRING_VALUE",
 * };
 * const command = new StopStreamEncryptionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopStreamEncryptionCommandInput - {@link StopStreamEncryptionCommandInput}
 * @returns {@link StopStreamEncryptionCommandOutput}
 * @see {@link StopStreamEncryptionCommandInput} for command's `input` shape.
 * @see {@link StopStreamEncryptionCommandOutput} for command's `response` shape.
 * @see {@link KinesisClientResolvedConfig | config} for KinesisClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Specifies that you do not have the permissions required to perform this operation.
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *
 * A specified parameter exceeds its restrictions, is not supported, or can't be used. For more information, see the returned message.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The requested resource exceeds the maximum number allowed, or the number of concurrent stream requests exceeds the maximum number allowed.
 *
 * @throws {@link ResourceInUseException} (client fault)
 *
 * The resource is not available for this operation. For successful operation, the resource must be in the `ACTIVE` state.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource could not be found. The stream might not be specified correctly.
 *
 * @throws {@link KinesisServiceException}
 *
 * Base exception class for all service exceptions from Kinesis service.
 *
 * @public
 */
export class StopStreamEncryptionCommand extends command<StopStreamEncryptionCommandInput, StopStreamEncryptionCommandOutput>(
  _ep0,
  _mw0,
  "StopStreamEncryption",
  StopStreamEncryption$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopStreamEncryptionInput;
      output: {};
    };
    sdk: {
      input: StopStreamEncryptionCommandInput;
      output: StopStreamEncryptionCommandOutput;
    };
  };
}
