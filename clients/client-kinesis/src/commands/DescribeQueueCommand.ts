// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep5, _mw0, command } from "../commandBuilder";
import type { DescribeQueueInput, DescribeQueueOutput } from "../models/models_0";
import { DescribeQueue$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeQueueCommand}.
 */
export interface DescribeQueueCommandInput extends DescribeQueueInput {}
/**
 * @public
 *
 * The output of {@link DescribeQueueCommand}.
 */
export interface DescribeQueueCommandOutput extends DescribeQueueOutput, __MetadataBearer {}

/**
 * <p>Returns a description of the specified queue, including its status, the data stream it
 *             delivers records from, and its configuration attributes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisClient, DescribeQueueCommand } from "@aws-sdk/client-kinesis"; // ES Modules import
 * // const { KinesisClient, DescribeQueueCommand } = require("@aws-sdk/client-kinesis"); // CommonJS import
 * // import type { KinesisClientConfig } from "@aws-sdk/client-kinesis";
 * const config = {}; // type is KinesisClientConfig
 * const client = new KinesisClient(config);
 * const input = { // DescribeQueueInput
 *   QueueARN: "STRING_VALUE", // required
 * };
 * const command = new DescribeQueueCommand(input);
 * const response = await client.send(command);
 * // { // DescribeQueueOutput
 * //   QueueDescription: { // QueueDescription
 * //     QueueName: "STRING_VALUE", // required
 * //     QueueARN: "STRING_VALUE", // required
 * //     QueueStatus: "CREATING" || "ACTIVE" || "UPDATING" || "DELETING", // required
 * //     QueueCreationTimestamp: new Date("TIMESTAMP"), // required
 * //     StreamConfigurationList: [ // QueueStreamConfigurationList // required
 * //       { // QueueStreamConfiguration
 * //         StreamARN: "STRING_VALUE", // required
 * //         StartingPosition: { // QueueStartingPosition
 * //           Type: "TRIM_HORIZON" || "LATEST" || "AT_TIMESTAMP", // required
 * //           Timestamp: new Date("TIMESTAMP"),
 * //         },
 * //       },
 * //     ],
 * //     QueueAttributes: { // QueueAttributes
 * //       VisibilityTimeoutSeconds: Number("int"),
 * //       DeadLetterConfiguration: { // DeadLetterConfiguration
 * //         TargetType: "BUILT_IN" || "NONE", // required
 * //         MaxReceiveCount: Number("int"),
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeQueueCommandInput - {@link DescribeQueueCommandInput}
 * @returns {@link DescribeQueueCommandOutput}
 * @see {@link DescribeQueueCommandInput} for command's `input` shape.
 * @see {@link DescribeQueueCommandOutput} for command's `response` shape.
 * @see {@link KinesisClientResolvedConfig | config} for KinesisClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Specifies that you do not have the permissions required to perform this
 *             operation.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>The processing of the request failed because of an unknown error, exception, or
 *             failure.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>A specified parameter exceeds its restrictions, is not supported, or can't be used.
 *             For more information, see the returned message.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The requested resource exceeds the maximum number allowed, or the number of concurrent
 *             stream requests exceeds the maximum number allowed. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource could not be found. The stream might not be specified
 *             correctly.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed validation. For example, a parameter value is not valid, a
 *             combination of parameters is not supported, or the operation is not supported for the
 *             stream's capacity mode. The error message describes the specific reason.</p>
 *
 * @throws {@link KinesisServiceException}
 * <p>Base exception class for all service exceptions from Kinesis service.</p>
 *
 *
 * @public
 */
export class DescribeQueueCommand extends command<DescribeQueueCommandInput, DescribeQueueCommandOutput>(
  _ep5,
  _mw0,
  "DescribeQueue",
  DescribeQueue$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeQueueInput;
      output: DescribeQueueOutput;
    };
    sdk: {
      input: DescribeQueueCommandInput;
      output: DescribeQueueCommandOutput;
    };
  };
}
