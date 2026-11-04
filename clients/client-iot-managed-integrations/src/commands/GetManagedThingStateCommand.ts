// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetManagedThingStateRequest, GetManagedThingStateResponse } from "../models/models_0";
import { GetManagedThingState$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetManagedThingStateCommand}.
 */
export interface GetManagedThingStateCommandInput extends GetManagedThingStateRequest {}
/**
 * @public
 *
 * The output of {@link GetManagedThingStateCommand}.
 */
export interface GetManagedThingStateCommandOutput extends GetManagedThingStateResponse, __MetadataBearer {}

/**
 * Returns the managed thing state for the given device Id.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, GetManagedThingStateCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, GetManagedThingStateCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * // import type { IoTManagedIntegrationsClientConfig } from "@aws-sdk/client-iot-managed-integrations";
 * const config = {}; // type is IoTManagedIntegrationsClientConfig
 * const client = new IoTManagedIntegrationsClient(config);
 * const input = { // GetManagedThingStateRequest
 *   ManagedThingId: "STRING_VALUE", // required
 * };
 * const command = new GetManagedThingStateCommand(input);
 * const response = await client.send(command);
 * // { // GetManagedThingStateResponse
 * //   Endpoints: [ // StateEndpoints // required
 * //     { // StateEndpoint
 * //       endpointId: "STRING_VALUE", // required
 * //       capabilities: [ // StateCapabilities // required
 * //         { // StateCapability
 * //           id: "STRING_VALUE", // required
 * //           name: "STRING_VALUE", // required
 * //           version: "STRING_VALUE", // required
 * //           properties: "DOCUMENT_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetManagedThingStateCommandInput - {@link GetManagedThingStateCommandInput}
 * @returns {@link GetManagedThingStateCommandOutput}
 * @see {@link GetManagedThingStateCommandInput} for command's `input` shape.
 * @see {@link GetManagedThingStateCommandOutput} for command's `response` shape.
 * @see {@link IoTManagedIntegrationsClientResolvedConfig | config} for IoTManagedIntegrationsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * User is not authorized.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * An unexpected error has occurred.
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
export class GetManagedThingStateCommand extends command<GetManagedThingStateCommandInput, GetManagedThingStateCommandOutput>(
  _ep0,
  _mw0,
  "GetManagedThingState",
  GetManagedThingState$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetManagedThingStateRequest;
      output: GetManagedThingStateResponse;
    };
    sdk: {
      input: GetManagedThingStateCommandInput;
      output: GetManagedThingStateCommandOutput;
    };
  };
}
