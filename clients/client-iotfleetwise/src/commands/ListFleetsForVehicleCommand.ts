// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListFleetsForVehicleRequest, ListFleetsForVehicleResponse } from "../models/models_0";
import { ListFleetsForVehicle$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListFleetsForVehicleCommand}.
 */
export interface ListFleetsForVehicleCommandInput extends ListFleetsForVehicleRequest {}
/**
 * @public
 *
 * The output of {@link ListFleetsForVehicleCommand}.
 */
export interface ListFleetsForVehicleCommandOutput extends ListFleetsForVehicleResponse, __MetadataBearer {}

/**
 * Retrieves a list of IDs for all fleets that the vehicle is associated with.
 *
 * > **Note:** This API operation uses pagination. Specify the `nextToken` parameter in the request to return more results.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, ListFleetsForVehicleCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, ListFleetsForVehicleCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
 * // import type { IoTFleetWiseClientConfig } from "@aws-sdk/client-iotfleetwise";
 * const config = {}; // type is IoTFleetWiseClientConfig
 * const client = new IoTFleetWiseClient(config);
 * const input = { // ListFleetsForVehicleRequest
 *   vehicleName: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListFleetsForVehicleCommand(input);
 * const response = await client.send(command);
 * // { // ListFleetsForVehicleResponse
 * //   fleets: [ // fleets
 * //     "STRING_VALUE",
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListFleetsForVehicleCommandInput - {@link ListFleetsForVehicleCommandInput}
 * @returns {@link ListFleetsForVehicleCommandOutput}
 * @see {@link ListFleetsForVehicleCommandInput} for command's `input` shape.
 * @see {@link ListFleetsForVehicleCommandOutput} for command's `response` shape.
 * @see {@link IoTFleetWiseClientResolvedConfig | config} for IoTFleetWiseClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have sufficient permission to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request couldn't be completed because the server temporarily failed.
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
 * @throws {@link IoTFleetWiseServiceException}
 *
 * Base exception class for all service exceptions from IoTFleetWise service.
 *
 * @public
 */
export class ListFleetsForVehicleCommand extends command<ListFleetsForVehicleCommandInput, ListFleetsForVehicleCommandOutput>(
  _ep0,
  _mw0,
  "ListFleetsForVehicle",
  ListFleetsForVehicle$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListFleetsForVehicleRequest;
      output: ListFleetsForVehicleResponse;
    };
    sdk: {
      input: ListFleetsForVehicleCommandInput;
      output: ListFleetsForVehicleCommandOutput;
    };
  };
}
