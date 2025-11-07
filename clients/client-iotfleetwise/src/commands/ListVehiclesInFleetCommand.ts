// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTFleetWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTFleetWiseClient";
import { ListVehiclesInFleetRequest, ListVehiclesInFleetResponse } from "../models/models_0";
import { ListVehiclesInFleet } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p> Retrieves a list of summaries of all vehicles associated with a fleet. </p>
 *          <note>
 *             <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the request to return more results.</p>
 *          </note>
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
export class ListVehiclesInFleetCommand extends $Command
  .classBuilder<
    ListVehiclesInFleetCommandInput,
    ListVehiclesInFleetCommandOutput,
    IoTFleetWiseClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTFleetWiseClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("IoTAutobahnControlPlane", "ListVehiclesInFleet", {})
  .n("IoTFleetWiseClient", "ListVehiclesInFleetCommand")
  .sc(ListVehiclesInFleet)
  .build() {
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
