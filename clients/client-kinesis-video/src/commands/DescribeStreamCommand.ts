// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeStreamInput, DescribeStreamOutput } from "../models/models_0";
import { DescribeStream$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeStreamCommand}.
 */
export interface DescribeStreamCommandInput extends DescribeStreamInput {}
/**
 * @public
 *
 * The output of {@link DescribeStreamCommand}.
 */
export interface DescribeStreamCommandOutput extends DescribeStreamOutput, __MetadataBearer {}

/**
 * Returns the most current information about the specified stream. You must specify either the `StreamName` or the `StreamARN`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoClient, DescribeStreamCommand } from "@aws-sdk/client-kinesis-video"; // ES Modules import
 * // const { KinesisVideoClient, DescribeStreamCommand } = require("@aws-sdk/client-kinesis-video"); // CommonJS import
 * // import type { KinesisVideoClientConfig } from "@aws-sdk/client-kinesis-video";
 * const config = {}; // type is KinesisVideoClientConfig
 * const client = new KinesisVideoClient(config);
 * const input = { // DescribeStreamInput
 *   StreamName: "STRING_VALUE",
 *   StreamARN: "STRING_VALUE",
 * };
 * const command = new DescribeStreamCommand(input);
 * const response = await client.send(command);
 * // { // DescribeStreamOutput
 * //   StreamInfo: { // StreamInfo
 * //     DeviceName: "STRING_VALUE",
 * //     StreamName: "STRING_VALUE",
 * //     StreamARN: "STRING_VALUE",
 * //     MediaType: "STRING_VALUE",
 * //     KmsKeyId: "STRING_VALUE",
 * //     Version: "STRING_VALUE",
 * //     Status: "CREATING" || "ACTIVE" || "UPDATING" || "DELETING",
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     DataRetentionInHours: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeStreamCommandInput - {@link DescribeStreamCommandInput}
 * @returns {@link DescribeStreamCommandOutput}
 * @see {@link DescribeStreamCommandInput} for command's `input` shape.
 * @see {@link DescribeStreamCommandOutput} for command's `response` shape.
 * @see {@link KinesisVideoClientResolvedConfig | config} for KinesisVideoClient's `config` shape.
 *
 * @throws {@link ClientLimitExceededException} (client fault)
 *
 * Kinesis Video Streams has throttled the request because you have exceeded the limit of allowed client calls. Try making the call later.
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *
 * The value for this input parameter is invalid.
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *
 * The caller is not authorized to perform this operation.
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
export class DescribeStreamCommand extends command<DescribeStreamCommandInput, DescribeStreamCommandOutput>(
  _ep0,
  _mw0,
  "DescribeStream",
  DescribeStream$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeStreamInput;
      output: DescribeStreamOutput;
    };
    sdk: {
      input: DescribeStreamCommandInput;
      output: DescribeStreamCommandOutput;
    };
  };
}
