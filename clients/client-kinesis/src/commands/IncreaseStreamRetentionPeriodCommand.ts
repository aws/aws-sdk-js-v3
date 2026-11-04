// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { IncreaseStreamRetentionPeriodInput } from "../models/models_0";
import { IncreaseStreamRetentionPeriod$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link IncreaseStreamRetentionPeriodCommand}.
 */
export interface IncreaseStreamRetentionPeriodCommandInput extends IncreaseStreamRetentionPeriodInput {}
/**
 * @public
 *
 * The output of {@link IncreaseStreamRetentionPeriodCommand}.
 */
export interface IncreaseStreamRetentionPeriodCommandOutput extends __MetadataBearer {}

/**
 * Increases the Kinesis data stream's retention period, which is the length of time data records are accessible after they are added to the stream. The maximum value of a stream's retention period is 8760 hours (365 days).
 *
 * > **Note:** When invoking this API, you must use either the `StreamARN` or the `StreamName` parameter, or both. It is recommended that you use the `StreamARN` input parameter when you invoke this API.
 *
 * If you choose a longer stream retention period, this operation increases the time period during which records that have not yet expired are accessible. However, it does not make previous, expired data (older than the stream's previous retention period) accessible after the operation has been called. For example, if a stream's retention period is set to 24 hours and is increased to 168 hours, any data that is older than 24 hours remains inaccessible to consumer applications.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisClient, IncreaseStreamRetentionPeriodCommand } from "@aws-sdk/client-kinesis"; // ES Modules import
 * // const { KinesisClient, IncreaseStreamRetentionPeriodCommand } = require("@aws-sdk/client-kinesis"); // CommonJS import
 * // import type { KinesisClientConfig } from "@aws-sdk/client-kinesis";
 * const config = {}; // type is KinesisClientConfig
 * const client = new KinesisClient(config);
 * const input = { // IncreaseStreamRetentionPeriodInput
 *   StreamName: "STRING_VALUE",
 *   RetentionPeriodHours: Number("int"), // required
 *   StreamARN: "STRING_VALUE",
 *   StreamId: "STRING_VALUE",
 * };
 * const command = new IncreaseStreamRetentionPeriodCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param IncreaseStreamRetentionPeriodCommandInput - {@link IncreaseStreamRetentionPeriodCommandInput}
 * @returns {@link IncreaseStreamRetentionPeriodCommandOutput}
 * @see {@link IncreaseStreamRetentionPeriodCommandInput} for command's `input` shape.
 * @see {@link IncreaseStreamRetentionPeriodCommandOutput} for command's `response` shape.
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
export class IncreaseStreamRetentionPeriodCommand extends command<IncreaseStreamRetentionPeriodCommandInput, IncreaseStreamRetentionPeriodCommandOutput>(
  _ep0,
  _mw0,
  "IncreaseStreamRetentionPeriod",
  IncreaseStreamRetentionPeriod$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: IncreaseStreamRetentionPeriodInput;
      output: {};
    };
    sdk: {
      input: IncreaseStreamRetentionPeriodCommandInput;
      output: IncreaseStreamRetentionPeriodCommandOutput;
    };
  };
}
