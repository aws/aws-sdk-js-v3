// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTEventsDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTEventsDataClient";
import { BatchUpdateDetectorRequest, BatchUpdateDetectorResponse } from "../models/models_0";
import { de_BatchUpdateDetectorCommand, se_BatchUpdateDetectorCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchUpdateDetectorCommand}.
 */
export interface BatchUpdateDetectorCommandInput extends BatchUpdateDetectorRequest {}
/**
 * @public
 *
 * The output of {@link BatchUpdateDetectorCommand}.
 */
export interface BatchUpdateDetectorCommandOutput extends BatchUpdateDetectorResponse, __MetadataBearer {}

/**
 * <p>Updates the state, variable values, and timer settings of one or more detectors
 *       (instances) of a specified detector model.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsDataClient, BatchUpdateDetectorCommand } from "@aws-sdk/client-iot-events-data"; // ES Modules import
 * // const { IoTEventsDataClient, BatchUpdateDetectorCommand } = require("@aws-sdk/client-iot-events-data"); // CommonJS import
 * // import type { IoTEventsDataClientConfig } from "@aws-sdk/client-iot-events-data";
 * const config = {}; // type is IoTEventsDataClientConfig
 * const client = new IoTEventsDataClient(config);
 * const input = { // BatchUpdateDetectorRequest
 *   detectors: [ // UpdateDetectorRequests // required
 *     { // UpdateDetectorRequest
 *       messageId: "STRING_VALUE", // required
 *       detectorModelName: "STRING_VALUE", // required
 *       keyValue: "STRING_VALUE",
 *       state: { // DetectorStateDefinition
 *         stateName: "STRING_VALUE", // required
 *         variables: [ // VariableDefinitions // required
 *           { // VariableDefinition
 *             name: "STRING_VALUE", // required
 *             value: "STRING_VALUE", // required
 *           },
 *         ],
 *         timers: [ // TimerDefinitions // required
 *           { // TimerDefinition
 *             name: "STRING_VALUE", // required
 *             seconds: Number("int"), // required
 *           },
 *         ],
 *       },
 *     },
 *   ],
 * };
 * const command = new BatchUpdateDetectorCommand(input);
 * const response = await client.send(command);
 * // { // BatchUpdateDetectorResponse
 * //   batchUpdateDetectorErrorEntries: [ // BatchUpdateDetectorErrorEntries
 * //     { // BatchUpdateDetectorErrorEntry
 * //       messageId: "STRING_VALUE",
 * //       errorCode: "ResourceNotFoundException" || "InvalidRequestException" || "InternalFailureException" || "ServiceUnavailableException" || "ThrottlingException",
 * //       errorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchUpdateDetectorCommandInput - {@link BatchUpdateDetectorCommandInput}
 * @returns {@link BatchUpdateDetectorCommandOutput}
 * @see {@link BatchUpdateDetectorCommandInput} for command's `input` shape.
 * @see {@link BatchUpdateDetectorCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class BatchUpdateDetectorCommand extends $Command
  .classBuilder<
    BatchUpdateDetectorCommandInput,
    BatchUpdateDetectorCommandOutput,
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
  .s("IotColumboDataService", "BatchUpdateDetector", {})
  .n("IoTEventsDataClient", "BatchUpdateDetectorCommand")
  .f(void 0, void 0)
  .ser(se_BatchUpdateDetectorCommand)
  .de(de_BatchUpdateDetectorCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchUpdateDetectorRequest;
      output: BatchUpdateDetectorResponse;
    };
    sdk: {
      input: BatchUpdateDetectorCommandInput;
      output: BatchUpdateDetectorCommandOutput;
    };
  };
}
