// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BatchDeleteGeofenceRequest, BatchDeleteGeofenceResponse } from "../models/models_0";
import { BatchDeleteGeofence$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link BatchDeleteGeofenceCommand}.
 */
export interface BatchDeleteGeofenceCommandInput extends BatchDeleteGeofenceRequest {}
/**
 * @public
 *
 * The output of {@link BatchDeleteGeofenceCommand}.
 */
export interface BatchDeleteGeofenceCommandOutput extends BatchDeleteGeofenceResponse, __MetadataBearer {}

/**
 * Deletes a batch of geofences from a geofence collection.
 *
 * > **Note:** This operation deletes the resource permanently.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, BatchDeleteGeofenceCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, BatchDeleteGeofenceCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * // import type { LocationClientConfig } from "@aws-sdk/client-location";
 * const config = {}; // type is LocationClientConfig
 * const client = new LocationClient(config);
 * const input = { // BatchDeleteGeofenceRequest
 *   CollectionName: "STRING_VALUE", // required
 *   GeofenceIds: [ // IdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchDeleteGeofenceCommand(input);
 * const response = await client.send(command);
 * // { // BatchDeleteGeofenceResponse
 * //   Errors: [ // BatchDeleteGeofenceErrorList // required
 * //     { // BatchDeleteGeofenceError
 * //       GeofenceId: "STRING_VALUE", // required
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
 * @param BatchDeleteGeofenceCommandInput - {@link BatchDeleteGeofenceCommandInput}
 * @returns {@link BatchDeleteGeofenceCommandOutput}
 * @see {@link BatchDeleteGeofenceCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteGeofenceCommandOutput} for command's `response` shape.
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
export class BatchDeleteGeofenceCommand extends command<BatchDeleteGeofenceCommandInput, BatchDeleteGeofenceCommandOutput>(
  _ep0,
  _mw0,
  "BatchDeleteGeofence",
  BatchDeleteGeofence$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchDeleteGeofenceRequest;
      output: BatchDeleteGeofenceResponse;
    };
    sdk: {
      input: BatchDeleteGeofenceCommandInput;
      output: BatchDeleteGeofenceCommandOutput;
    };
  };
}
