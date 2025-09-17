// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import {
  UpdateGeofenceCollectionRequest,
  UpdateGeofenceCollectionResponse,
  UpdateGeofenceCollectionResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_UpdateGeofenceCollectionCommand, se_UpdateGeofenceCollectionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateGeofenceCollectionCommand}.
 */
export interface UpdateGeofenceCollectionCommandInput extends UpdateGeofenceCollectionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateGeofenceCollectionCommand}.
 */
export interface UpdateGeofenceCollectionCommandOutput extends UpdateGeofenceCollectionResponse, __MetadataBearer {}

/**
 * <p>Updates the specified properties of a given geofence collection.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, UpdateGeofenceCollectionCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, UpdateGeofenceCollectionCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * // import type { LocationClientConfig } from "@aws-sdk/client-location";
 * const config = {}; // type is LocationClientConfig
 * const client = new LocationClient(config);
 * const input = { // UpdateGeofenceCollectionRequest
 *   CollectionName: "STRING_VALUE", // required
 *   PricingPlan: "STRING_VALUE",
 *   PricingPlanDataSource: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 * };
 * const command = new UpdateGeofenceCollectionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateGeofenceCollectionResponse
 * //   CollectionName: "STRING_VALUE", // required
 * //   CollectionArn: "STRING_VALUE", // required
 * //   UpdateTime: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param UpdateGeofenceCollectionCommandInput - {@link UpdateGeofenceCollectionCommandInput}
 * @returns {@link UpdateGeofenceCollectionCommandOutput}
 * @see {@link UpdateGeofenceCollectionCommandInput} for command's `input` shape.
 * @see {@link UpdateGeofenceCollectionCommandOutput} for command's `response` shape.
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
export class UpdateGeofenceCollectionCommand extends $Command
  .classBuilder<
    UpdateGeofenceCollectionCommandInput,
    UpdateGeofenceCollectionCommandOutput,
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
  .s("LocationService", "UpdateGeofenceCollection", {})
  .n("LocationClient", "UpdateGeofenceCollectionCommand")
  .f(void 0, UpdateGeofenceCollectionResponseFilterSensitiveLog)
  .ser(se_UpdateGeofenceCollectionCommand)
  .de(de_UpdateGeofenceCollectionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateGeofenceCollectionRequest;
      output: UpdateGeofenceCollectionResponse;
    };
    sdk: {
      input: UpdateGeofenceCollectionCommandInput;
      output: UpdateGeofenceCollectionCommandOutput;
    };
  };
}
