// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BatchEvaluateGeofencesRequest, BatchEvaluateGeofencesResponse } from "../models/models_0";
import { BatchEvaluateGeofences$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link BatchEvaluateGeofencesCommand}.
 */
export interface BatchEvaluateGeofencesCommandInput extends BatchEvaluateGeofencesRequest {}
/**
 * @public
 *
 * The output of {@link BatchEvaluateGeofencesCommand}.
 */
export interface BatchEvaluateGeofencesCommandOutput extends BatchEvaluateGeofencesResponse, __MetadataBearer {}

/**
 * Evaluates device positions against the geofence geometries from a given geofence collection.
 *
 * This operation always returns an empty response because geofences are asynchronously evaluated. The evaluation determines if the device has entered or exited a geofenced area, and then publishes one of the following events to Amazon EventBridge:
 *
 * - `ENTER` if Amazon Location determines that the tracked device has entered a geofenced area.
 * - `EXIT` if Amazon Location determines that the tracked device has exited a geofenced area.
 *
 * > **Note:** The last geofence that a device was observed within is tracked for 30 days after the most recent device position update.
 *
 * > **Note:** Geofence evaluation uses the given device position. It does not account for the optional `Accuracy` of a `DevicePositionUpdate`.
 *
 * > **Note:** The `DeviceID` is used as a string to represent the device. You do not need to have a `Tracker` associated with the `DeviceID`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, BatchEvaluateGeofencesCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, BatchEvaluateGeofencesCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * // import type { LocationClientConfig } from "@aws-sdk/client-location";
 * const config = {}; // type is LocationClientConfig
 * const client = new LocationClient(config);
 * const input = { // BatchEvaluateGeofencesRequest
 *   CollectionName: "STRING_VALUE", // required
 *   DevicePositionUpdates: [ // DevicePositionUpdateList // required
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
 * const command = new BatchEvaluateGeofencesCommand(input);
 * const response = await client.send(command);
 * // { // BatchEvaluateGeofencesResponse
 * //   Errors: [ // BatchEvaluateGeofencesErrorList // required
 * //     { // BatchEvaluateGeofencesError
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
 * @param BatchEvaluateGeofencesCommandInput - {@link BatchEvaluateGeofencesCommandInput}
 * @returns {@link BatchEvaluateGeofencesCommandOutput}
 * @see {@link BatchEvaluateGeofencesCommandInput} for command's `input` shape.
 * @see {@link BatchEvaluateGeofencesCommandOutput} for command's `response` shape.
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
export class BatchEvaluateGeofencesCommand extends command<BatchEvaluateGeofencesCommandInput, BatchEvaluateGeofencesCommandOutput>(
  _ep0,
  _mw0,
  "BatchEvaluateGeofences",
  BatchEvaluateGeofences$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchEvaluateGeofencesRequest;
      output: BatchEvaluateGeofencesResponse;
    };
    sdk: {
      input: BatchEvaluateGeofencesCommandInput;
      output: BatchEvaluateGeofencesCommandOutput;
    };
  };
}
