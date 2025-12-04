// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTAnalyticsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTAnalyticsClient";
import type { SampleChannelDataRequest, SampleChannelDataResponse } from "../models/models_0";
import { SampleChannelData } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SampleChannelDataCommand}.
 */
export interface SampleChannelDataCommandInput extends SampleChannelDataRequest {}
/**
 * @public
 *
 * The output of {@link SampleChannelDataCommand}.
 */
export interface SampleChannelDataCommandOutput extends SampleChannelDataResponse, __MetadataBearer {}

/**
 * <p>Retrieves a sample of messages from the specified channel ingested during the specified
 *       timeframe. Up to 10 messages can be retrieved.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTAnalyticsClient, SampleChannelDataCommand } from "@aws-sdk/client-iotanalytics"; // ES Modules import
 * // const { IoTAnalyticsClient, SampleChannelDataCommand } = require("@aws-sdk/client-iotanalytics"); // CommonJS import
 * // import type { IoTAnalyticsClientConfig } from "@aws-sdk/client-iotanalytics";
 * const config = {}; // type is IoTAnalyticsClientConfig
 * const client = new IoTAnalyticsClient(config);
 * const input = { // SampleChannelDataRequest
 *   channelName: "STRING_VALUE", // required
 *   maxMessages: Number("int"),
 *   startTime: new Date("TIMESTAMP"),
 *   endTime: new Date("TIMESTAMP"),
 * };
 * const command = new SampleChannelDataCommand(input);
 * const response = await client.send(command);
 * // { // SampleChannelDataResponse
 * //   payloads: [ // MessagePayloads
 * //     new Uint8Array(),
 * //   ],
 * // };
 *
 * ```
 *
 * @param SampleChannelDataCommandInput - {@link SampleChannelDataCommandInput}
 * @returns {@link SampleChannelDataCommandOutput}
 * @see {@link SampleChannelDataCommandInput} for command's `input` shape.
 * @see {@link SampleChannelDataCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class SampleChannelDataCommand extends $Command
  .classBuilder<
    SampleChannelDataCommandInput,
    SampleChannelDataCommandOutput,
    IoTAnalyticsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTAnalyticsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIoTAnalytics", "SampleChannelData", {})
  .n("IoTAnalyticsClient", "SampleChannelDataCommand")
  .sc(SampleChannelData)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SampleChannelDataRequest;
      output: SampleChannelDataResponse;
    };
    sdk: {
      input: SampleChannelDataCommandInput;
      output: SampleChannelDataCommandOutput;
    };
  };
}
