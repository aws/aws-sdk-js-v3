// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTAnalyticsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTAnalyticsClient";
import { StartPipelineReprocessingRequest, StartPipelineReprocessingResponse } from "../models/models_0";
import { de_StartPipelineReprocessingCommand, se_StartPipelineReprocessingCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartPipelineReprocessingCommand}.
 */
export interface StartPipelineReprocessingCommandInput extends StartPipelineReprocessingRequest {}
/**
 * @public
 *
 * The output of {@link StartPipelineReprocessingCommand}.
 */
export interface StartPipelineReprocessingCommandOutput extends StartPipelineReprocessingResponse, __MetadataBearer {}

/**
 * <p>Starts the reprocessing of raw message data through the pipeline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTAnalyticsClient, StartPipelineReprocessingCommand } from "@aws-sdk/client-iotanalytics"; // ES Modules import
 * // const { IoTAnalyticsClient, StartPipelineReprocessingCommand } = require("@aws-sdk/client-iotanalytics"); // CommonJS import
 * const client = new IoTAnalyticsClient(config);
 * const input = { // StartPipelineReprocessingRequest
 *   pipelineName: "STRING_VALUE", // required
 *   startTime: new Date("TIMESTAMP"),
 *   endTime: new Date("TIMESTAMP"),
 *   channelMessages: { // ChannelMessages
 *     s3Paths: [ // S3PathChannelMessages
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new StartPipelineReprocessingCommand(input);
 * const response = await client.send(command);
 * // { // StartPipelineReprocessingResponse
 * //   reprocessingId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartPipelineReprocessingCommandInput - {@link StartPipelineReprocessingCommandInput}
 * @returns {@link StartPipelineReprocessingCommandOutput}
 * @see {@link StartPipelineReprocessingCommandInput} for command's `input` shape.
 * @see {@link StartPipelineReprocessingCommandOutput} for command's `response` shape.
 * @see {@link IoTAnalyticsClientResolvedConfig | config} for IoTAnalyticsClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>There was an internal failure.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request was not valid.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>A resource with the same name already exists.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource with the specified name could not be found.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link IoTAnalyticsServiceException}
 * <p>Base exception class for all service exceptions from IoTAnalytics service.</p>
 *
 *
 * @public
 */
export class StartPipelineReprocessingCommand extends $Command
  .classBuilder<
    StartPipelineReprocessingCommandInput,
    StartPipelineReprocessingCommandOutput,
    IoTAnalyticsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTAnalyticsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIoTAnalytics", "StartPipelineReprocessing", {})
  .n("IoTAnalyticsClient", "StartPipelineReprocessingCommand")
  .f(void 0, void 0)
  .ser(se_StartPipelineReprocessingCommand)
  .de(de_StartPipelineReprocessingCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartPipelineReprocessingRequest;
      output: StartPipelineReprocessingResponse;
    };
    sdk: {
      input: StartPipelineReprocessingCommandInput;
      output: StartPipelineReprocessingCommandOutput;
    };
  };
}
