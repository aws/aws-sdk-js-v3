// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListVehiclesInFleetRequest, ListVehiclesInFleetResponse } from "../models/models_0";
import { ListVehiclesInFleet$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListVehiclesInFleetCommand}.
 */
export interface ListVehiclesInFleetCommandInput extends ListVehiclesInFleetRequest {}
/**
 * @public
 *
 * The output of {@link ListVehiclesInFleetCommand}.
 */
export interface ListVehiclesInFleetCommandOutput extends ListVehiclesInFleetResponse, __MetadataBearer {}

/**
 * Retrieves a list of summaries of all vehicles associated with a fleet.
 *
 * > **Note:** This API operation uses pagination. Specify the `nextToken` parameter in the request to return more results.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, ListVehiclesInFleetCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, ListVehiclesInFleetCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
 * // import type { IoTFleetWiseClientConfig } from "@aws-sdk/client-iotfleetwise";
 * const config = {}; // type is IoTFleetWiseClientConfig
 * const client = new IoTFleetWiseClient(config);
 * const input = { // ListVehiclesInFleetRequest
 *   fleetId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListVehiclesInFleetCommand(input);
 * const response = await client.send(command);
 * // { // ListVehiclesInFleetResponse
 * //   vehicles: [ // vehicles
 * //     "STRING_VALUE",
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListVehiclesInFleetCommandInput - {@link ListVehiclesInFleetCommandInput}
 * @returns {@link ListVehiclesInFleetCommandOutput}
 * @see {@link ListVehiclesInFleetCommandInput} for command's `input` shape.
 * @see {@link ListVehiclesInFleetCommandOutput} for command's `response` shape.
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
export class ListVehiclesInFleetCommand extends command<ListVehiclesInFleetCommandInput, ListVehiclesInFleetCommandOutput>(
  _ep0,
  _mw0,
  "ListVehiclesInFleet",
  ListVehiclesInFleet$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListVehiclesInFleetRequest;
      output: ListVehiclesInFleetResponse;
    };
    sdk: {
      input: ListVehiclesInFleetCommandInput;
      output: ListVehiclesInFleetCommandOutput;
    };
  };
}
