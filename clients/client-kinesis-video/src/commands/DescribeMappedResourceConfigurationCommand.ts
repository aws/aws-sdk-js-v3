// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KinesisVideoClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisVideoClient";
import {
  DescribeMappedResourceConfigurationInput,
  DescribeMappedResourceConfigurationOutput,
} from "../models/models_0";
import {
  de_DescribeMappedResourceConfigurationCommand,
  se_DescribeMappedResourceConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface DescribeMappedResourceConfigurationCommandOutput
  extends DescribeMappedResourceConfigurationOutput,
    __MetadataBearer {}

/**
 * <p>Returns the most current information about the stream. The <code>streamName</code>
 *             or <code>streamARN</code> should be provided in the input.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoClient, DescribeMappedResourceConfigurationCommand } from "@aws-sdk/client-kinesis-video"; // ES Modules import
 * // const { KinesisVideoClient, DescribeMappedResourceConfigurationCommand } = require("@aws-sdk/client-kinesis-video"); // CommonJS import
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
 *  <p>You do not have required permissions to perform this operation.</p>
 *
 * @throws {@link ClientLimitExceededException} (client fault)
 *  <p>Kinesis Video Streams has throttled the request because you have exceeded the limit of
 *             allowed client calls. Try making the call later.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>The value for this input parameter is invalid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Amazon Kinesis Video Streams can't find the stream that you specified.</p>
 *
 * @throws {@link KinesisVideoServiceException}
 * <p>Base exception class for all service exceptions from KinesisVideo service.</p>
 *
 *
 * @public
 */
export class DescribeMappedResourceConfigurationCommand extends $Command
  .classBuilder<
    DescribeMappedResourceConfigurationCommandInput,
    DescribeMappedResourceConfigurationCommandOutput,
    KinesisVideoClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KinesisVideoClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("KinesisVideo_20170930", "DescribeMappedResourceConfiguration", {})
  .n("KinesisVideoClient", "DescribeMappedResourceConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_DescribeMappedResourceConfigurationCommand)
  .de(de_DescribeMappedResourceConfigurationCommand)
  .build() {
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
