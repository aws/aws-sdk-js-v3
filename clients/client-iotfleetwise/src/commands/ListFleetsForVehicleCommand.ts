// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTFleetWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTFleetWiseClient";
import type { ListFleetsForVehicleRequest, ListFleetsForVehicleResponse } from "../models/models_0";
import { ListFleetsForVehicle } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Retrieves a list of IDs for all fleets that the vehicle is associated with.</p>
 *          <note>
 *             <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the request to return more results.</p>
 *          </note>
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
 *  <p>You don't have sufficient permission to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request couldn't be completed because the server temporarily failed.</p>
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
 * @throws {@link IoTFleetWiseServiceException}
 * <p>Base exception class for all service exceptions from IoTFleetWise service.</p>
 *
 *
 * @public
 */
export class ListFleetsForVehicleCommand extends $Command
  .classBuilder<
    ListFleetsForVehicleCommandInput,
    ListFleetsForVehicleCommandOutput,
    IoTFleetWiseClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTFleetWiseClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("IoTAutobahnControlPlane", "ListFleetsForVehicle", {})
  .n("IoTFleetWiseClient", "ListFleetsForVehicleCommand")
  .sc(ListFleetsForVehicle)
  .build() {
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
