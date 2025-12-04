// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import type { BatchDeleteGeofenceRequest, BatchDeleteGeofenceResponse } from "../models/models_0";
import { BatchDeleteGeofence } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Deletes a batch of geofences from a geofence collection.</p> <note> <p>This operation deletes the resource permanently.</p> </note>
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
 *  <p>The request was denied because of insufficient access or permissions. Check with an administrator to verify your permissions.</p>
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
export class BatchDeleteGeofenceCommand extends $Command
  .classBuilder<
    BatchDeleteGeofenceCommandInput,
    BatchDeleteGeofenceCommandOutput,
    LocationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LocationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LocationService", "BatchDeleteGeofence", {})
  .n("LocationClient", "BatchDeleteGeofenceCommand")
  .sc(BatchDeleteGeofence)
  .build() {
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
