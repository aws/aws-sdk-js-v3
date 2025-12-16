// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTEventsDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTEventsDataClient";
import type { DescribeDetectorRequest, DescribeDetectorResponse } from "../models/models_0";
import { DescribeDetector$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeDetectorCommand}.
 */
export interface DescribeDetectorCommandInput extends DescribeDetectorRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDetectorCommand}.
 */
export interface DescribeDetectorCommandOutput extends DescribeDetectorResponse, __MetadataBearer {}

/**
 * <p>Returns information about the specified detector (instance).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsDataClient, DescribeDetectorCommand } from "@aws-sdk/client-iot-events-data"; // ES Modules import
 * // const { IoTEventsDataClient, DescribeDetectorCommand } = require("@aws-sdk/client-iot-events-data"); // CommonJS import
 * // import type { IoTEventsDataClientConfig } from "@aws-sdk/client-iot-events-data";
 * const config = {}; // type is IoTEventsDataClientConfig
 * const client = new IoTEventsDataClient(config);
 * const input = { // DescribeDetectorRequest
 *   detectorModelName: "STRING_VALUE", // required
 *   keyValue: "STRING_VALUE",
 * };
 * const command = new DescribeDetectorCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDetectorResponse
 * //   detector: { // Detector
 * //     detectorModelName: "STRING_VALUE",
 * //     keyValue: "STRING_VALUE",
 * //     detectorModelVersion: "STRING_VALUE",
 * //     state: { // DetectorState
 * //       stateName: "STRING_VALUE", // required
 * //       variables: [ // Variables // required
 * //         { // Variable
 * //           name: "STRING_VALUE", // required
 * //           value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       timers: [ // Timers // required
 * //         { // Timer
 * //           name: "STRING_VALUE", // required
 * //           timestamp: new Date("TIMESTAMP"), // required
 * //         },
 * //       ],
 * //     },
 * //     creationTime: new Date("TIMESTAMP"),
 * //     lastUpdateTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeDetectorCommandInput - {@link DescribeDetectorCommandInput}
 * @returns {@link DescribeDetectorCommandOutput}
 * @see {@link DescribeDetectorCommandInput} for command's `input` shape.
 * @see {@link DescribeDetectorCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsDataClientResolvedConfig | config} for IoTEventsDataClient's `config` shape.
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
 * @throws {@link IoTEventsDataServiceException}
 * <p>Base exception class for all service exceptions from IoTEventsData service.</p>
 *
 *
 * @public
 */
export class DescribeDetectorCommand extends $Command
  .classBuilder<
    DescribeDetectorCommandInput,
    DescribeDetectorCommandOutput,
    IoTEventsDataClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTEventsDataClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("IotColumboDataService", "DescribeDetector", {})
  .n("IoTEventsDataClient", "DescribeDetectorCommand")
  .sc(DescribeDetector$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDetectorRequest;
      output: DescribeDetectorResponse;
    };
    sdk: {
      input: DescribeDetectorCommandInput;
      output: DescribeDetectorCommandOutput;
    };
  };
}
