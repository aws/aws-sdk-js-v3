// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  IoTManagedIntegrationsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IoTManagedIntegrationsClient";
import {
  GetDeviceDiscoveryRequest,
  GetDeviceDiscoveryResponse,
  GetDeviceDiscoveryResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_GetDeviceDiscoveryCommand, se_GetDeviceDiscoveryCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDeviceDiscoveryCommand}.
 */
export interface GetDeviceDiscoveryCommandInput extends GetDeviceDiscoveryRequest {}
/**
 * @public
 *
 * The output of {@link GetDeviceDiscoveryCommand}.
 */
export interface GetDeviceDiscoveryCommandOutput extends GetDeviceDiscoveryResponse, __MetadataBearer {}

/**
 * <p> Get the current state of a device discovery.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, GetDeviceDiscoveryCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, GetDeviceDiscoveryCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * // import type { IoTManagedIntegrationsClientConfig } from "@aws-sdk/client-iot-managed-integrations";
 * const config = {}; // type is IoTManagedIntegrationsClientConfig
 * const client = new IoTManagedIntegrationsClient(config);
 * const input = { // GetDeviceDiscoveryRequest
 *   Identifier: "STRING_VALUE", // required
 * };
 * const command = new GetDeviceDiscoveryCommand(input);
 * const response = await client.send(command);
 * // { // GetDeviceDiscoveryResponse
 * //   Id: "STRING_VALUE", // required
 * //   Arn: "STRING_VALUE", // required
 * //   DiscoveryType: "ZWAVE" || "ZIGBEE" || "CLOUD" || "CUSTOM", // required
 * //   Status: "RUNNING" || "SUCCEEDED" || "FAILED" || "TIMED_OUT", // required
 * //   StartedAt: new Date("TIMESTAMP"), // required
 * //   ControllerId: "STRING_VALUE",
 * //   ConnectorAssociationId: "STRING_VALUE",
 * //   AccountAssociationId: "STRING_VALUE",
 * //   FinishedAt: new Date("TIMESTAMP"),
 * //   Tags: { // TagsMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDeviceDiscoveryCommandInput - {@link GetDeviceDiscoveryCommandInput}
 * @returns {@link GetDeviceDiscoveryCommandOutput}
 * @see {@link GetDeviceDiscoveryCommandInput} for command's `input` shape.
 * @see {@link GetDeviceDiscoveryCommandOutput} for command's `response` shape.
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
export class GetDeviceDiscoveryCommand extends $Command
  .classBuilder<
    GetDeviceDiscoveryCommandInput,
    GetDeviceDiscoveryCommandOutput,
    IoTManagedIntegrationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTManagedIntegrationsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("IotManagedIntegrations", "GetDeviceDiscovery", {})
  .n("IoTManagedIntegrationsClient", "GetDeviceDiscoveryCommand")
  .f(void 0, GetDeviceDiscoveryResponseFilterSensitiveLog)
  .ser(se_GetDeviceDiscoveryCommand)
  .de(de_GetDeviceDiscoveryCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDeviceDiscoveryRequest;
      output: GetDeviceDiscoveryResponse;
    };
    sdk: {
      input: GetDeviceDiscoveryCommandInput;
      output: GetDeviceDiscoveryCommandOutput;
    };
  };
}
