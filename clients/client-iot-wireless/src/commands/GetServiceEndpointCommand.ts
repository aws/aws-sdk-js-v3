// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetServiceEndpointRequest, GetServiceEndpointResponse } from "../models/models_0";
import { GetServiceEndpoint$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetServiceEndpointCommand}.
 */
export interface GetServiceEndpointCommandInput extends GetServiceEndpointRequest {}
/**
 * @public
 *
 * The output of {@link GetServiceEndpointCommand}.
 */
export interface GetServiceEndpointCommandOutput extends GetServiceEndpointResponse, __MetadataBearer {}

/**
 * Gets the account-specific endpoint for Configuration and Update Server (CUPS) protocol or LoRaWAN Network Server (LNS) connections.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, GetServiceEndpointCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, GetServiceEndpointCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * // import type { IoTWirelessClientConfig } from "@aws-sdk/client-iot-wireless";
 * const config = {}; // type is IoTWirelessClientConfig
 * const client = new IoTWirelessClient(config);
 * const input = { // GetServiceEndpointRequest
 *   ServiceType: "CUPS" || "LNS",
 * };
 * const command = new GetServiceEndpointCommand(input);
 * const response = await client.send(command);
 * // { // GetServiceEndpointResponse
 * //   ServiceType: "CUPS" || "LNS",
 * //   ServiceEndpoint: "STRING_VALUE",
 * //   ServerTrust: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetServiceEndpointCommandInput - {@link GetServiceEndpointCommandInput}
 * @returns {@link GetServiceEndpointCommandOutput}
 * @see {@link GetServiceEndpointCommandInput} for command's `input` shape.
 * @see {@link GetServiceEndpointCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for IoTWirelessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * User does not have permission to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred while processing a request.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied because it exceeded the allowed API request rate.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input did not meet the specified constraints.
 *
 * @throws {@link IoTWirelessServiceException}
 *
 * Base exception class for all service exceptions from IoTWireless service.
 *
 * @public
 */
export class GetServiceEndpointCommand extends command<GetServiceEndpointCommandInput, GetServiceEndpointCommandOutput>(
  _ep0,
  _mw0,
  "GetServiceEndpoint",
  GetServiceEndpoint$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetServiceEndpointRequest;
      output: GetServiceEndpointResponse;
    };
    sdk: {
      input: GetServiceEndpointCommandInput;
      output: GetServiceEndpointCommandOutput;
    };
  };
}
