// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  IoTManagedIntegrationsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IoTManagedIntegrationsClient";
import { GetManagedThingStateRequest, GetManagedThingStateResponse } from "../models/models_0";
import { GetManagedThingState } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p> Returns the managed thing state for the given device Id.</p>
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
 *  <p>User is not authorized.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You are not authorized to perform this operation.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A validation error occurred when performing the API request.</p>
 *
 * @throws {@link IoTManagedIntegrationsServiceException}
 * <p>Base exception class for all service exceptions from IoTManagedIntegrations service.</p>
 *
 *
 * @public
 */
export class GetManagedThingStateCommand extends $Command
  .classBuilder<
    GetManagedThingStateCommandInput,
    GetManagedThingStateCommandOutput,
    IoTManagedIntegrationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTManagedIntegrationsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("IotManagedIntegrations", "GetManagedThingState", {})
  .n("IoTManagedIntegrationsClient", "GetManagedThingStateCommand")
  .sc(GetManagedThingState)
  .build() {
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
