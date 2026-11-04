// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DescribeMappedResourceConfigurationInput,
  DescribeMappedResourceConfigurationOutput,
} from "../models/models_0";
import { DescribeMappedResourceConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeMappedResourceConfigurationCommand}.
 */
export interface DescribeMappedResourceConfigurationCommandInput extends DescribeMappedResourceConfigurationInput {}
/**
 * @public
 *
 * The output of {@link DescribeMappedResourceConfigurationCommand}.
 */
export interface DescribeMappedResourceConfigurationCommandOutput extends DescribeMappedResourceConfigurationOutput, __MetadataBearer {}

/**
 * Returns the most current information about the stream. The `streamName` or `streamARN` should be provided in the input.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoClient, DescribeMappedResourceConfigurationCommand } from "@aws-sdk/client-kinesis-video"; // ES Modules import
 * // const { KinesisVideoClient, DescribeMappedResourceConfigurationCommand } = require("@aws-sdk/client-kinesis-video"); // CommonJS import
 * // import type { KinesisVideoClientConfig } from "@aws-sdk/client-kinesis-video";
 * const config = {}; // type is KinesisVideoClientConfig
 * const client = new KinesisVideoClient(config);
 * const input = { // DescribeMappedResourceConfigurationInput
 *   StreamName: "STRING_VALUE",
 *   StreamARN: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeMappedResourceConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeMappedResourceConfigurationOutput
 * //   MappedResourceConfigurationList: [ // MappedResourceConfigurationList
 * //     { // MappedResourceConfigurationListItem
 * //       Type: "STRING_VALUE",
 * //       ARN: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeMappedResourceConfigurationCommandInput - {@link DescribeMappedResourceConfigurationCommandInput}
 * @returns {@link DescribeMappedResourceConfigurationCommandOutput}
 * @see {@link DescribeMappedResourceConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeMappedResourceConfigurationCommandOutput} for command's `response` shape.
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
export class DescribeMappedResourceConfigurationCommand extends command<DescribeMappedResourceConfigurationCommandInput, DescribeMappedResourceConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "DescribeMappedResourceConfiguration",
  DescribeMappedResourceConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeMappedResourceConfigurationInput;
      output: DescribeMappedResourceConfigurationOutput;
    };
    sdk: {
      input: DescribeMappedResourceConfigurationCommandInput;
      output: DescribeMappedResourceConfigurationCommandOutput;
    };
  };
}
