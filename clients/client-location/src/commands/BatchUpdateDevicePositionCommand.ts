// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import {
  BatchUpdateDevicePositionRequest,
  BatchUpdateDevicePositionRequestFilterSensitiveLog,
  BatchUpdateDevicePositionResponse,
  BatchUpdateDevicePositionResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_BatchUpdateDevicePositionCommand, se_BatchUpdateDevicePositionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchUpdateDevicePositionCommand}.
 */
export interface BatchUpdateDevicePositionCommandInput extends BatchUpdateDevicePositionRequest {}
/**
 * @public
 *
 * The output of {@link BatchUpdateDevicePositionCommand}.
 */
export interface BatchUpdateDevicePositionCommandOutput extends BatchUpdateDevicePositionResponse, __MetadataBearer {}

/**
 * <p>Uploads position update data for one or more devices to a tracker resource (up to
 *            10 devices per batch). Amazon Location uses the data when it reports the last known device
 *            position and position history. Amazon Location retains location data for 30 days.</p>
 *          <note>
 *             <p>Position updates are handled based on the <code>PositionFiltering</code>
 *                property of the tracker. When <code>PositionFiltering</code> is set to
 *                <code>TimeBased</code>, updates are evaluated against linked geofence collections,
 *                and location data is stored at a maximum of one position per 30 second interval.
 *                If your update frequency is more often than every 30 seconds, only one update per
 *                30 seconds is stored for each unique device ID.</p>
 *             <p>When <code>PositionFiltering</code> is set to <code>DistanceBased</code>
 *                 filtering, location data is stored and evaluated against linked geofence
 *                 collections only if the device has moved more than 30 m (98.4 ft).</p>
 *             <p>When <code>PositionFiltering</code> is set to <code>AccuracyBased</code>
 *                 filtering, location data is stored and evaluated against linked geofence
 *                 collections only if the device has moved more than the measured accuracy. For
 *                 example, if two consecutive updates from a device have a horizontal accuracy of
 *                 5 m and 10 m, the second update is neither stored or evaluated if the device has
 *                 moved less than 15 m. If <code>PositionFiltering</code> is set to
 *                 <code>AccuracyBased</code> filtering, Amazon Location uses the default value
 *                 <code>\{ "Horizontal": 0\}</code> when accuracy is not provided on a
 *                 <code>DevicePositionUpdate</code>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, BatchUpdateDevicePositionCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, BatchUpdateDevicePositionCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * // import type { LocationClientConfig } from "@aws-sdk/client-location";
 * const config = {}; // type is LocationClientConfig
 * const client = new LocationClient(config);
 * const input = { // BatchUpdateDevicePositionRequest
 *   TrackerName: "STRING_VALUE", // required
 *   Updates: [ // DevicePositionUpdateList // required
 *     { // DevicePositionUpdate
 *       DeviceId: "STRING_VALUE", // required
 *       SampleTime: new Date("TIMESTAMP"), // required
 *       Position: [ // Position // required
 *         Number("double"),
 *       ],
 *       Accuracy: { // PositionalAccuracy
 *         Horizontal: Number("double"), // required
 *       },
 *       PositionProperties: { // PositionPropertyMap
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *   ],
 * };
 * const command = new BatchUpdateDevicePositionCommand(input);
 * const response = await client.send(command);
 * // { // BatchUpdateDevicePositionResponse
 * //   Errors: [ // BatchUpdateDevicePositionErrorList // required
 * //     { // BatchUpdateDevicePositionError
 * //       DeviceId: "STRING_VALUE", // required
 * //       SampleTime: new Date("TIMESTAMP"), // required
 * //       Error: { // BatchItemError
 * //         Code: "STRING_VALUE",
 * //         Message: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchUpdateDevicePositionCommandInput - {@link BatchUpdateDevicePositionCommandInput}
 * @returns {@link BatchUpdateDevicePositionCommandOutput}
 * @see {@link BatchUpdateDevicePositionCommandInput} for command's `input` shape.
 * @see {@link BatchUpdateDevicePositionCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because of insufficient access or permissions. Check with an
 *       administrator to verify your permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed to process because of an unknown server error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource that you've entered was not found in your AWS account.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because of request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to meet the constraints specified by the AWS service. </p>
 *
 * @throws {@link LocationServiceException}
 * <p>Base exception class for all service exceptions from Location service.</p>
 *
 *
 * @public
 */
export class BatchUpdateDevicePositionCommand extends $Command
  .classBuilder<
    BatchUpdateDevicePositionCommandInput,
    BatchUpdateDevicePositionCommandOutput,
    LocationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LocationClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("LocationService", "BatchUpdateDevicePosition", {})
  .n("LocationClient", "BatchUpdateDevicePositionCommand")
  .f(BatchUpdateDevicePositionRequestFilterSensitiveLog, BatchUpdateDevicePositionResponseFilterSensitiveLog)
  .ser(se_BatchUpdateDevicePositionCommand)
  .de(de_BatchUpdateDevicePositionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchUpdateDevicePositionRequest;
      output: BatchUpdateDevicePositionResponse;
    };
    sdk: {
      input: BatchUpdateDevicePositionCommandInput;
      output: BatchUpdateDevicePositionCommandOutput;
    };
  };
}
