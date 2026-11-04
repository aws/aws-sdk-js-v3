// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetFleetRequest, GetFleetResponse } from "../models/models_0";
import { GetFleet$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetFleetCommand}.
 */
export interface GetFleetCommandInput extends GetFleetRequest {}
/**
 * @public
 *
 * The output of {@link GetFleetCommand}.
 */
export interface GetFleetCommandOutput extends GetFleetResponse, __MetadataBearer {}

/**
 * Retrieves information about a fleet.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, GetFleetCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, GetFleetCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
 * // import type { IoTFleetWiseClientConfig } from "@aws-sdk/client-iotfleetwise";
 * const config = {}; // type is IoTFleetWiseClientConfig
 * const client = new IoTFleetWiseClient(config);
 * const input = { // GetFleetRequest
 *   fleetId: "STRING_VALUE", // required
 * };
 * const command = new GetFleetCommand(input);
 * const response = await client.send(command);
 * // { // GetFleetResponse
 * //   id: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   signalCatalogArn: "STRING_VALUE", // required
 * //   creationTime: new Date("TIMESTAMP"), // required
 * //   lastModificationTime: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param GetFleetCommandInput - {@link GetFleetCommandInput}
 * @returns {@link GetFleetCommandOutput}
 * @see {@link GetFleetCommandInput} for command's `input` shape.
 * @see {@link GetFleetCommandOutput} for command's `response` shape.
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
export class GetFleetCommand extends command<GetFleetCommandInput, GetFleetCommandOutput>(
  _ep0,
  _mw0,
  "GetFleet",
  GetFleet$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetFleetRequest;
      output: GetFleetResponse;
    };
    sdk: {
      input: GetFleetCommandInput;
      output: GetFleetCommandOutput;
    };
  };
}
