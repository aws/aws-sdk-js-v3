// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DescribeStreamStorageConfigurationInput,
  DescribeStreamStorageConfigurationOutput,
} from "../models/models_0";
import { DescribeStreamStorageConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeStreamStorageConfigurationCommand}.
 */
export interface DescribeStreamStorageConfigurationCommandInput extends DescribeStreamStorageConfigurationInput {}
/**
 * @public
 *
 * The output of {@link DescribeStreamStorageConfigurationCommand}.
 */
export interface DescribeStreamStorageConfigurationCommandOutput extends DescribeStreamStorageConfigurationOutput, __MetadataBearer {}

/**
 * Retrieves the current storage configuration for the specified Kinesis video stream.
 *
 * In the request, you must specify either the `StreamName` or the `StreamARN`.
 *
 * You must have permissions for the `KinesisVideo:DescribeStreamStorageConfiguration` action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoClient, DescribeStreamStorageConfigurationCommand } from "@aws-sdk/client-kinesis-video"; // ES Modules import
 * // const { KinesisVideoClient, DescribeStreamStorageConfigurationCommand } = require("@aws-sdk/client-kinesis-video"); // CommonJS import
 * // import type { KinesisVideoClientConfig } from "@aws-sdk/client-kinesis-video";
 * const config = {}; // type is KinesisVideoClientConfig
 * const client = new KinesisVideoClient(config);
 * const input = { // DescribeStreamStorageConfigurationInput
 *   StreamName: "STRING_VALUE",
 *   StreamARN: "STRING_VALUE",
 * };
 * const command = new DescribeStreamStorageConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeStreamStorageConfigurationOutput
 * //   StreamName: "STRING_VALUE",
 * //   StreamARN: "STRING_VALUE",
 * //   StreamStorageConfiguration: { // StreamStorageConfiguration
 * //     DefaultStorageTier: "HOT" || "WARM", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeStreamStorageConfigurationCommandInput - {@link DescribeStreamStorageConfigurationCommandInput}
 * @returns {@link DescribeStreamStorageConfigurationCommandOutput}
 * @see {@link DescribeStreamStorageConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeStreamStorageConfigurationCommandOutput} for command's `response` shape.
 * @see {@link KinesisVideoClientResolvedConfig | config} for KinesisVideoClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have required permissions to perform this operation.
 *
 * @throws {@link ClientLimitExceededException} (client fault)
 *
 * Kinesis Video Streams has throttled the request because you have exceeded the limit of allowed client calls. Try making the call later.
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *
 * The value for this input parameter is invalid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Amazon Kinesis Video Streams can't find the stream that you specified.
 *
 * @throws {@link KinesisVideoServiceException}
 *
 * Base exception class for all service exceptions from KinesisVideo service.
 *
 * @public
 */
export class DescribeStreamStorageConfigurationCommand extends command<DescribeStreamStorageConfigurationCommandInput, DescribeStreamStorageConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "DescribeStreamStorageConfiguration",
  DescribeStreamStorageConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeStreamStorageConfigurationInput;
      output: DescribeStreamStorageConfigurationOutput;
    };
    sdk: {
      input: DescribeStreamStorageConfigurationCommandInput;
      output: DescribeStreamStorageConfigurationCommandOutput;
    };
  };
}
