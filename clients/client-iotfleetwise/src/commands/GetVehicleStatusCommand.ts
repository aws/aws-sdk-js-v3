// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetVehicleStatusRequest, GetVehicleStatusResponse } from "../models/models_0";
import { GetVehicleStatus$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Retrieves information about the status of campaigns, decoder manifests, or state templates associated with a vehicle.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, GetVehicleStatusCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, GetVehicleStatusCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
 * // import type { IoTFleetWiseClientConfig } from "@aws-sdk/client-iotfleetwise";
 * const config = {}; // type is IoTFleetWiseClientConfig
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
 *
 * You don't have sufficient permission to perform this action.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource wasn't found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request couldn't be completed due to throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request couldn't be completed because the server temporarily failed.
 *
 * @throws {@link IoTFleetWiseServiceException}
 *
 * Base exception class for all service exceptions from IoTFleetWise service.
 *
 * @public
 */
export class GetVehicleStatusCommand extends command<GetVehicleStatusCommandInput, GetVehicleStatusCommandOutput>(
  _ep0,
  _mw0,
  "GetVehicleStatus",
  GetVehicleStatus$
) {
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
