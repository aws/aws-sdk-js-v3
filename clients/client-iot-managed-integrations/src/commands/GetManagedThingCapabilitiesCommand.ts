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
import { GetManagedThingCapabilitiesRequest, GetManagedThingCapabilitiesResponse } from "../models/models_0";
import { GetManagedThingCapabilities } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetManagedThingCapabilitiesCommand}.
 */
export interface GetManagedThingCapabilitiesCommandInput extends GetManagedThingCapabilitiesRequest {}
/**
 * @public
 *
 * The output of {@link GetManagedThingCapabilitiesCommand}.
 */
export interface GetManagedThingCapabilitiesCommandOutput
  extends GetManagedThingCapabilitiesResponse,
    __MetadataBearer {}

/**
 * <p>Get the capabilities for a managed thing using the device ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, GetManagedThingCapabilitiesCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, GetManagedThingCapabilitiesCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * // import type { IoTManagedIntegrationsClientConfig } from "@aws-sdk/client-iot-managed-integrations";
 * const config = {}; // type is IoTManagedIntegrationsClientConfig
 * const client = new IoTManagedIntegrationsClient(config);
 * const input = { // GetManagedThingCapabilitiesRequest
 *   Identifier: "STRING_VALUE", // required
 * };
 * const command = new GetManagedThingCapabilitiesCommand(input);
 * const response = await client.send(command);
 * // { // GetManagedThingCapabilitiesResponse
 * //   ManagedThingId: "STRING_VALUE",
 * //   Capabilities: "STRING_VALUE",
 * //   CapabilityReport: { // CapabilityReport
 * //     version: "STRING_VALUE", // required
 * //     nodeId: "STRING_VALUE",
 * //     endpoints: [ // CapabilityReportEndpoints // required
 * //       { // CapabilityReportEndpoint
 * //         id: "STRING_VALUE", // required
 * //         deviceTypes: [ // DeviceTypes // required
 * //           "STRING_VALUE",
 * //         ],
 * //         capabilities: [ // CapabilityReportCapabilities // required
 * //           { // CapabilityReportCapability
 * //             id: "STRING_VALUE", // required
 * //             name: "STRING_VALUE", // required
 * //             version: "STRING_VALUE", // required
 * //             properties: [ // CapabilityReportProperties // required
 * //               "STRING_VALUE",
 * //             ],
 * //             actions: [ // CapabilityReportActions // required
 * //               "STRING_VALUE",
 * //             ],
 * //             events: [ // CapabilityReportEvents // required
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetManagedThingCapabilitiesCommandInput - {@link GetManagedThingCapabilitiesCommandInput}
 * @returns {@link GetManagedThingCapabilitiesCommandOutput}
 * @see {@link GetManagedThingCapabilitiesCommandInput} for command's `input` shape.
 * @see {@link GetManagedThingCapabilitiesCommandOutput} for command's `response` shape.
 * @see {@link IoTManagedIntegrationsClientResolvedConfig | config} for IoTManagedIntegrationsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User is not authorized.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal error from the service that indicates an unexpected error or that the service is unavailable.</p>
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
export class GetManagedThingCapabilitiesCommand extends $Command
  .classBuilder<
    GetManagedThingCapabilitiesCommandInput,
    GetManagedThingCapabilitiesCommandOutput,
    IoTManagedIntegrationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTManagedIntegrationsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("IotManagedIntegrations", "GetManagedThingCapabilities", {})
  .n("IoTManagedIntegrationsClient", "GetManagedThingCapabilitiesCommand")
  .sc(GetManagedThingCapabilities)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetManagedThingCapabilitiesRequest;
      output: GetManagedThingCapabilitiesResponse;
    };
    sdk: {
      input: GetManagedThingCapabilitiesCommandInput;
      output: GetManagedThingCapabilitiesCommandOutput;
    };
  };
}
