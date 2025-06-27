// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTFleetWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTFleetWiseClient";
import { GetVehicleStatusRequest, GetVehicleStatusResponse } from "../models/models_0";
import { de_GetVehicleStatusCommand, se_GetVehicleStatusCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetVehicleStatusCommand}.
 */
export interface GetVehicleStatusCommandInput extends GetVehicleStatusRequest {}
/**
 * @public
 *
 * The output of {@link GetVehicleStatusCommand}.
 */
export interface GetVehicleStatusCommandOutput extends GetVehicleStatusResponse, __MetadataBearer {}

/**
 * <p> Retrieves information about the status of campaigns, decoder manifests, or state templates
 *             associated with a vehicle.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, GetVehicleStatusCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, GetVehicleStatusCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
 * const client = new IoTFleetWiseClient(config);
 * const input = { // GetVehicleStatusRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   vehicleName: "STRING_VALUE", // required
 * };
 * const command = new GetVehicleStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetVehicleStatusResponse
 * //   campaigns: [ // VehicleStatusList
 * //     { // VehicleStatus
 * //       campaignName: "STRING_VALUE",
 * //       vehicleName: "STRING_VALUE",
 * //       status: "CREATED" || "READY" || "HEALTHY" || "SUSPENDED" || "DELETING" || "READY_FOR_CHECKIN",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetVehicleStatusCommandInput - {@link GetVehicleStatusCommandInput}
 * @returns {@link GetVehicleStatusCommandOutput}
 * @see {@link GetVehicleStatusCommandInput} for command's `input` shape.
 * @see {@link GetVehicleStatusCommandOutput} for command's `response` shape.
 * @see {@link IoTFleetWiseClientResolvedConfig | config} for IoTFleetWiseClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permission to perform this action.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource wasn't found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request couldn't be completed due to throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request couldn't be completed because the server temporarily failed.</p>
 *
 * @throws {@link IoTFleetWiseServiceException}
 * <p>Base exception class for all service exceptions from IoTFleetWise service.</p>
 *
 *
 * @public
 */
export class GetVehicleStatusCommand extends $Command
  .classBuilder<
    GetVehicleStatusCommandInput,
    GetVehicleStatusCommandOutput,
    IoTFleetWiseClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTFleetWiseClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("IoTAutobahnControlPlane", "GetVehicleStatus", {})
  .n("IoTFleetWiseClient", "GetVehicleStatusCommand")
  .f(void 0, void 0)
  .ser(se_GetVehicleStatusCommand)
  .de(de_GetVehicleStatusCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetVehicleStatusRequest;
      output: GetVehicleStatusResponse;
    };
    sdk: {
      input: GetVehicleStatusCommandInput;
      output: GetVehicleStatusCommandOutput;
    };
  };
}
