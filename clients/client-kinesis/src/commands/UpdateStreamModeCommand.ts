// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateStreamModeInput } from "../models/models_0";
import { UpdateStreamMode$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateStreamModeCommand}.
 */
export interface UpdateStreamModeCommandInput extends UpdateStreamModeInput {}
/**
 * @public
 *
 * The output of {@link UpdateStreamModeCommand}.
 */
export interface UpdateStreamModeCommandOutput extends __MetadataBearer {}

/**
 * <p> Updates the capacity mode of the data stream. Currently, in Kinesis Data Streams, you
 *             can choose between an <b>on-demand</b> capacity mode and a
 *                 <b>provisioned</b> capacity mode for your data stream.
 *         </p>
 *          <p>If you'd still like to proactively scale your on-demand data stream’s capacity, you can unlock the warm throughput feature for on-demand data streams by enabling <code>MinimumThroughputBillingCommitment</code> for your account. Once your account has <code>MinimumThroughputBillingCommitment</code> enabled, you can specify the warm throughput in MiB per second that your stream can support in writes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisClient, UpdateStreamModeCommand } from "@aws-sdk/client-kinesis"; // ES Modules import
 * // const { KinesisClient, UpdateStreamModeCommand } = require("@aws-sdk/client-kinesis"); // CommonJS import
 * // import type { KinesisClientConfig } from "@aws-sdk/client-kinesis";
 * const config = {}; // type is KinesisClientConfig
 * const client = new KinesisClient(config);
 * const input = { // UpdateStreamModeInput
 *   StreamARN: "STRING_VALUE", // required
 *   StreamId: "STRING_VALUE",
 *   StreamModeDetails: { // StreamModeDetails
 *     StreamMode: "PROVISIONED" || "ON_DEMAND", // required
 *   },
 *   WarmThroughputMiBps: Number("int"),
 * };
 * const command = new UpdateStreamModeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateStreamModeCommandInput - {@link UpdateStreamModeCommandInput}
 * @returns {@link UpdateStreamModeCommandOutput}
 * @see {@link UpdateStreamModeCommandInput} for command's `input` shape.
 * @see {@link UpdateStreamModeCommandOutput} for command's `response` shape.
 * @see {@link KinesisClientResolvedConfig | config} for KinesisClient's `config` shape.
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>A specified parameter exceeds its restrictions, is not supported, or can't be used.
 *             For more information, see the returned message.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The requested resource exceeds the maximum number allowed, or the number of concurrent
 *             stream requests exceeds the maximum number allowed. </p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The resource is not available for this operation. For successful operation, the
 *             resource must be in the <code>ACTIVE</code> state.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource could not be found. The stream might not be specified
 *             correctly.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Specifies that you tried to invoke this API for a data stream with the on-demand
 *             capacity mode. This API is only supported for data streams with the provisioned capacity
 *             mode. </p>
 *
 * @throws {@link KinesisServiceException}
 * <p>Base exception class for all service exceptions from Kinesis service.</p>
 *
 *
 * @public
 */
export class UpdateStreamModeCommand extends command<UpdateStreamModeCommandInput, UpdateStreamModeCommandOutput>(
  _ep0,
  _mw0,
  "UpdateStreamMode",
  UpdateStreamMode$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateStreamModeInput;
      output: {};
    };
    sdk: {
      input: UpdateStreamModeCommandInput;
      output: UpdateStreamModeCommandOutput;
    };
  };
}
