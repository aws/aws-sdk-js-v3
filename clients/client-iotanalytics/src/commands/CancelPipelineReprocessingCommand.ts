// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTAnalyticsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTAnalyticsClient";
import { CancelPipelineReprocessingRequest, CancelPipelineReprocessingResponse } from "../models/models_0";
import { de_CancelPipelineReprocessingCommand, se_CancelPipelineReprocessingCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CancelPipelineReprocessingCommand}.
 */
export interface CancelPipelineReprocessingCommandInput extends CancelPipelineReprocessingRequest {}
/**
 * @public
 *
 * The output of {@link CancelPipelineReprocessingCommand}.
 */
export interface CancelPipelineReprocessingCommandOutput extends CancelPipelineReprocessingResponse, __MetadataBearer {}

/**
 * <p>Cancels the reprocessing of data through the pipeline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTAnalyticsClient, CancelPipelineReprocessingCommand } from "@aws-sdk/client-iotanalytics"; // ES Modules import
 * // const { IoTAnalyticsClient, CancelPipelineReprocessingCommand } = require("@aws-sdk/client-iotanalytics"); // CommonJS import
 * const client = new IoTAnalyticsClient(config);
 * const input = { // CancelPipelineReprocessingRequest
 *   pipelineName: "STRING_VALUE", // required
 *   reprocessingId: "STRING_VALUE", // required
 * };
 * const command = new CancelPipelineReprocessingCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CancelPipelineReprocessingCommandInput - {@link CancelPipelineReprocessingCommandInput}
 * @returns {@link CancelPipelineReprocessingCommandOutput}
 * @see {@link CancelPipelineReprocessingCommandInput} for command's `input` shape.
 * @see {@link CancelPipelineReprocessingCommandOutput} for command's `response` shape.
 * @see {@link IoTAnalyticsClientResolvedConfig | config} for IoTAnalyticsClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>There was an internal failure.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request was not valid.</p>
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
 * @public
 */
export class CancelPipelineReprocessingCommand extends $Command
  .classBuilder<
    CancelPipelineReprocessingCommandInput,
    CancelPipelineReprocessingCommandOutput,
    IoTAnalyticsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: IoTAnalyticsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIoTAnalytics", "CancelPipelineReprocessing", {})
  .n("IoTAnalyticsClient", "CancelPipelineReprocessingCommand")
  .f(void 0, void 0)
  .ser(se_CancelPipelineReprocessingCommand)
  .de(de_CancelPipelineReprocessingCommand)
  .build() {}
