// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BatchUpdateDevicePositionRequest, BatchUpdateDevicePositionResponse } from "../models/models_0";
import { BatchUpdateDevicePosition$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Uploads position update data for one or more devices to a tracker resource (up to 10 devices per batch). Amazon Location uses the data when it reports the last known device position and position history. Amazon Location retains location data for 30 days.
 *
 * > **Note:**
 * >
 * > Position updates are handled based on the `PositionFiltering` property of the tracker. When `PositionFiltering` is set to `TimeBased`, updates are evaluated against linked geofence collections, and location data is stored at a maximum of one position per 30 second interval. If your update frequency is more often than every 30 seconds, only one update per 30 seconds is stored for each unique device ID.
 * >
 * > When `PositionFiltering` is set to `DistanceBased` filtering, location data is stored and evaluated against linked geofence collections only if the device has moved more than 30 m (98.4 ft).
 * >
 * > When `PositionFiltering` is set to `AccuracyBased` filtering, location data is stored and evaluated against linked geofence collections only if the device has moved more than the measured accuracy. For example, if two consecutive updates from a device have a horizontal accuracy of 5 m and 10 m, the second update is neither stored or evaluated if the device has moved less than 15 m. If `PositionFiltering` is set to `AccuracyBased` filtering, Amazon Location uses the default value `\{ "Horizontal": 0\}` when accuracy is not provided on a `DevicePositionUpdate`.
 *
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
 *
 * The request was denied because of insufficient access or permissions. Check with an administrator to verify your permissions.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request has failed to process because of an unknown server error, exception, or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource that you've entered was not found in your AWS account.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied because of request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input failed to meet the constraints specified by the AWS service.
 *
 * @throws {@link LocationServiceException}
 *
 * Base exception class for all service exceptions from Location service.
 *
 * @public
 */
export class BatchUpdateDevicePositionCommand extends command<BatchUpdateDevicePositionCommandInput, BatchUpdateDevicePositionCommandOutput>(
  _ep0,
  _mw0,
  "BatchUpdateDevicePosition",
  BatchUpdateDevicePosition$
) {
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
