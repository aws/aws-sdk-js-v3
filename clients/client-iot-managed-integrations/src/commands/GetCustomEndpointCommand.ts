// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetCustomEndpointRequest, GetCustomEndpointResponse } from "../models/models_0";
import { GetCustomEndpoint$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetCustomEndpointCommand}.
 */
export interface GetCustomEndpointCommandInput extends GetCustomEndpointRequest {}
/**
 * @public
 *
 * The output of {@link GetCustomEndpointCommand}.
 */
export interface GetCustomEndpointCommandOutput extends GetCustomEndpointResponse, __MetadataBearer {}

/**
 * Returns the IoT managed integrations custom endpoint.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, GetCustomEndpointCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, GetCustomEndpointCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * // import type { IoTManagedIntegrationsClientConfig } from "@aws-sdk/client-iot-managed-integrations";
 * const config = {}; // type is IoTManagedIntegrationsClientConfig
 * const client = new IoTManagedIntegrationsClient(config);
 * const input = {};
 * const command = new GetCustomEndpointCommand(input);
 * const response = await client.send(command);
 * // { // GetCustomEndpointResponse
 * //   EndpointAddress: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GetCustomEndpointCommandInput - {@link GetCustomEndpointCommandInput}
 * @returns {@link GetCustomEndpointCommandOutput}
 * @see {@link GetCustomEndpointCommandInput} for command's `input` shape.
 * @see {@link GetCustomEndpointCommandOutput} for command's `response` shape.
 * @see {@link IoTManagedIntegrationsClientResolvedConfig | config} for IoTManagedIntegrationsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * User is not authorized.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Internal error from the service that indicates an unexpected error or that the service is unavailable.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is temporarily unavailable.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate exceeds the limit.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You are not authorized to perform this operation.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * A validation error occurred when performing the API request.
 *
 * @throws {@link IoTManagedIntegrationsServiceException}
 *
 * Base exception class for all service exceptions from IoTManagedIntegrations service.
 *
 * @public
 */
export class GetCustomEndpointCommand extends command<GetCustomEndpointCommandInput, GetCustomEndpointCommandOutput>(
  _ep0,
  _mw0,
  "GetCustomEndpoint",
  GetCustomEndpoint$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetCustomEndpointResponse;
    };
    sdk: {
      input: GetCustomEndpointCommandInput;
      output: GetCustomEndpointCommandOutput;
    };
  };
}
