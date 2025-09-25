// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTEventsClient";
import { DescribeDetectorModelAnalysisRequest, DescribeDetectorModelAnalysisResponse } from "../models/models_0";
import { DescribeDetectorModelAnalysis } from "../schemas/schemas_9_Detector";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeDetectorModelAnalysisCommand}.
 */
export interface DescribeDetectorModelAnalysisCommandInput extends DescribeDetectorModelAnalysisRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDetectorModelAnalysisCommand}.
 */
export interface DescribeDetectorModelAnalysisCommandOutput
  extends DescribeDetectorModelAnalysisResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves runtime information about a detector model analysis.</p>
 *          <note>
 *             <p>After AWS IoT Events starts analyzing your detector model, you have up to 24 hours to retrieve the analysis results.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsClient, DescribeDetectorModelAnalysisCommand } from "@aws-sdk/client-iot-events"; // ES Modules import
 * // const { IoTEventsClient, DescribeDetectorModelAnalysisCommand } = require("@aws-sdk/client-iot-events"); // CommonJS import
 * // import type { IoTEventsClientConfig } from "@aws-sdk/client-iot-events";
 * const config = {}; // type is IoTEventsClientConfig
 * const client = new IoTEventsClient(config);
 * const input = { // DescribeDetectorModelAnalysisRequest
 *   analysisId: "STRING_VALUE", // required
 * };
 * const command = new DescribeDetectorModelAnalysisCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDetectorModelAnalysisResponse
 * //   status: "RUNNING" || "COMPLETE" || "FAILED",
 * // };
 *
 * ```
 *
 * @param DescribeDetectorModelAnalysisCommandInput - {@link DescribeDetectorModelAnalysisCommandInput}
 * @returns {@link DescribeDetectorModelAnalysisCommandOutput}
 * @see {@link DescribeDetectorModelAnalysisCommandInput} for command's `input` shape.
 * @see {@link DescribeDetectorModelAnalysisCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsClientResolvedConfig | config} for IoTEventsClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request was invalid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource was not found.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request could not be completed due to throttling.</p>
 *
 * @throws {@link IoTEventsServiceException}
 * <p>Base exception class for all service exceptions from IoTEvents service.</p>
 *
 *
 * @public
 */
export class DescribeDetectorModelAnalysisCommand extends $Command
  .classBuilder<
    DescribeDetectorModelAnalysisCommandInput,
    DescribeDetectorModelAnalysisCommandOutput,
    IoTEventsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTEventsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("IotColumboService", "DescribeDetectorModelAnalysis", {})
  .n("IoTEventsClient", "DescribeDetectorModelAnalysisCommand")
  .sc(DescribeDetectorModelAnalysis)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDetectorModelAnalysisRequest;
      output: DescribeDetectorModelAnalysisResponse;
    };
    sdk: {
      input: DescribeDetectorModelAnalysisCommandInput;
      output: DescribeDetectorModelAnalysisCommandOutput;
    };
  };
}
