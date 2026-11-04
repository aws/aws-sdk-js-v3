// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UntagStreamInput, UntagStreamOutput } from "../models/models_0";
import { UntagStream$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UntagStreamCommand}.
 */
export interface UntagStreamCommandInput extends UntagStreamInput {}
/**
 * @public
 *
 * The output of {@link UntagStreamCommand}.
 */
export interface UntagStreamCommandOutput extends UntagStreamOutput, __MetadataBearer {}

/**
 * Removes one or more tags from a stream. In the request, specify only a tag key or keys; don't specify the value. If you specify a tag key that does not exist, it's ignored.
 *
 * In the request, you must provide the `StreamName` or `StreamARN`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoClient, UntagStreamCommand } from "@aws-sdk/client-kinesis-video"; // ES Modules import
 * // const { KinesisVideoClient, UntagStreamCommand } = require("@aws-sdk/client-kinesis-video"); // CommonJS import
 * // import type { KinesisVideoClientConfig } from "@aws-sdk/client-kinesis-video";
 * const config = {}; // type is KinesisVideoClientConfig
 * const client = new KinesisVideoClient(config);
 * const input = { // UntagStreamInput
 *   StreamARN: "STRING_VALUE",
 *   StreamName: "STRING_VALUE",
 *   TagKeyList: [ // TagKeyList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UntagStreamCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UntagStreamCommandInput - {@link UntagStreamCommandInput}
 * @returns {@link UntagStreamCommandOutput}
 * @see {@link UntagStreamCommandInput} for command's `input` shape.
 * @see {@link UntagStreamCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidResourceFormatException} (client fault)
 *
 * The format of the `StreamARN` is invalid.
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
export class UntagStreamCommand extends command<UntagStreamCommandInput, UntagStreamCommandOutput>(
  _ep0,
  _mw0,
  "UntagStream",
  UntagStream$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UntagStreamInput;
      output: {};
    };
    sdk: {
      input: UntagStreamCommandInput;
      output: UntagStreamCommandOutput;
    };
  };
}
