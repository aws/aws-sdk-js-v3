// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTEventsDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTEventsDataClient";
import { BatchDeleteDetectorRequest, BatchDeleteDetectorResponse } from "../models/models_0";
import { de_BatchDeleteDetectorCommand, se_BatchDeleteDetectorCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchDeleteDetectorCommand}.
 */
export interface BatchDeleteDetectorCommandInput extends BatchDeleteDetectorRequest {}
/**
 * @public
 *
 * The output of {@link BatchDeleteDetectorCommand}.
 */
export interface BatchDeleteDetectorCommandOutput extends BatchDeleteDetectorResponse, __MetadataBearer {}

/**
 * <p>Deletes one or more detectors that were created. When a detector is deleted, its state will be cleared and the detector will be removed from the list of detectors. The deleted detector will no longer appear if referenced in the <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_ListDetectors.html">ListDetectors</a> API call.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsDataClient, BatchDeleteDetectorCommand } from "@aws-sdk/client-iot-events-data"; // ES Modules import
 * // const { IoTEventsDataClient, BatchDeleteDetectorCommand } = require("@aws-sdk/client-iot-events-data"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new IoTEventsDataClient(config);
 * const input = { // BatchDeleteDetectorRequest
 *   detectors: [ // DeleteDetectorRequests // required
 *     { // DeleteDetectorRequest
 *       messageId: "STRING_VALUE", // required
 *       detectorModelName: "STRING_VALUE", // required
 *       keyValue: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new BatchDeleteDetectorCommand(input);
 * const response = await client.send(command);
 * // { // BatchDeleteDetectorResponse
 * //   batchDeleteDetectorErrorEntries: [ // BatchDeleteDetectorErrorEntries
 * //     { // BatchDeleteDetectorErrorEntry
 * //       messageId: "STRING_VALUE",
 * //       errorCode: "ResourceNotFoundException" || "InvalidRequestException" || "InternalFailureException" || "ServiceUnavailableException" || "ThrottlingException",
 * //       errorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchDeleteDetectorCommandInput - {@link BatchDeleteDetectorCommandInput}
 * @returns {@link BatchDeleteDetectorCommandOutput}
 * @see {@link BatchDeleteDetectorCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteDetectorCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsDataClientResolvedConfig | config} for IoTEventsDataClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request was invalid.</p>
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
 * @public
 */
export class BatchDeleteDetectorCommand extends $Command
  .classBuilder<
    BatchDeleteDetectorCommandInput,
    BatchDeleteDetectorCommandOutput,
    IoTEventsDataClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTEventsDataClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("IotColumboDataService", "BatchDeleteDetector", {})
  .n("IoTEventsDataClient", "BatchDeleteDetectorCommand")
  .f(void 0, void 0)
  .ser(se_BatchDeleteDetectorCommand)
  .de(de_BatchDeleteDetectorCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchDeleteDetectorRequest;
      output: BatchDeleteDetectorResponse;
    };
    sdk: {
      input: BatchDeleteDetectorCommandInput;
      output: BatchDeleteDetectorCommandOutput;
    };
  };
}
