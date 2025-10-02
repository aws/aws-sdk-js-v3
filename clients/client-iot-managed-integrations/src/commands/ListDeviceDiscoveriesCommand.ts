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
import { ListDeviceDiscoveriesRequest, ListDeviceDiscoveriesResponse } from "../models/models_0";
import { de_ListDeviceDiscoveriesCommand, se_ListDeviceDiscoveriesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDeviceDiscoveriesCommand}.
 */
export interface ListDeviceDiscoveriesCommandInput extends ListDeviceDiscoveriesRequest {}
/**
 * @public
 *
 * The output of {@link ListDeviceDiscoveriesCommand}.
 */
export interface ListDeviceDiscoveriesCommandOutput extends ListDeviceDiscoveriesResponse, __MetadataBearer {}

/**
 * <p>Lists all device discovery tasks, with optional filtering by type and status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, ListDeviceDiscoveriesCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, ListDeviceDiscoveriesCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * // import type { IoTManagedIntegrationsClientConfig } from "@aws-sdk/client-iot-managed-integrations";
 * const config = {}; // type is IoTManagedIntegrationsClientConfig
 * const client = new IoTManagedIntegrationsClient(config);
 * const input = { // ListDeviceDiscoveriesRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   TypeFilter: "ZWAVE" || "ZIGBEE" || "CLOUD" || "CUSTOM",
 *   StatusFilter: "RUNNING" || "SUCCEEDED" || "FAILED" || "TIMED_OUT",
 * };
 * const command = new ListDeviceDiscoveriesCommand(input);
 * const response = await client.send(command);
 * // { // ListDeviceDiscoveriesResponse
 * //   Items: [ // DeviceDiscoveryListDefinition
 * //     { // DeviceDiscoverySummary
 * //       Id: "STRING_VALUE",
 * //       DiscoveryType: "ZWAVE" || "ZIGBEE" || "CLOUD" || "CUSTOM",
 * //       Status: "RUNNING" || "SUCCEEDED" || "FAILED" || "TIMED_OUT",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDeviceDiscoveriesCommandInput - {@link ListDeviceDiscoveriesCommandInput}
 * @returns {@link ListDeviceDiscoveriesCommandOutput}
 * @see {@link ListDeviceDiscoveriesCommandInput} for command's `input` shape.
 * @see {@link ListDeviceDiscoveriesCommandOutput} for command's `response` shape.
 * @see {@link IoTManagedIntegrationsClientResolvedConfig | config} for IoTManagedIntegrationsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User is not authorized.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal error from the service that indicates an unexpected error or that the service is unavailable.</p>
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
export class ListDeviceDiscoveriesCommand extends $Command
  .classBuilder<
    ListDeviceDiscoveriesCommandInput,
    ListDeviceDiscoveriesCommandOutput,
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
  .s("IotManagedIntegrations", "ListDeviceDiscoveries", {})
  .n("IoTManagedIntegrationsClient", "ListDeviceDiscoveriesCommand")
  .f(void 0, void 0)
  .ser(se_ListDeviceDiscoveriesCommand)
  .de(de_ListDeviceDiscoveriesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDeviceDiscoveriesRequest;
      output: ListDeviceDiscoveriesResponse;
    };
    sdk: {
      input: ListDeviceDiscoveriesCommandInput;
      output: ListDeviceDiscoveriesCommandOutput;
    };
  };
}
