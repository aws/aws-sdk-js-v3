// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListDeviceDiscoveriesRequest, ListDeviceDiscoveriesResponse } from "../models/models_0";
import { ListDeviceDiscoveries$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Lists all device discovery tasks, with optional filtering by type and status.
 *
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
 *   TypeFilter: "ZWAVE" || "ZIGBEE" || "CLOUD" || "CUSTOM" || "CONTROLLER_CAPABILITY_REDISCOVERY",
 *   StatusFilter: "RUNNING" || "SUCCEEDED" || "FAILED" || "TIMED_OUT",
 * };
 * const command = new ListDeviceDiscoveriesCommand(input);
 * const response = await client.send(command);
 * // { // ListDeviceDiscoveriesResponse
 * //   Items: [ // DeviceDiscoveryListDefinition
 * //     { // DeviceDiscoverySummary
 * //       Id: "STRING_VALUE",
 * //       DiscoveryType: "ZWAVE" || "ZIGBEE" || "CLOUD" || "CUSTOM" || "CONTROLLER_CAPABILITY_REDISCOVERY",
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
 *
 * User is not authorized.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Internal error from the service that indicates an unexpected error or that the service is unavailable.
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
export class ListDeviceDiscoveriesCommand extends command<ListDeviceDiscoveriesCommandInput, ListDeviceDiscoveriesCommandOutput>(
  _ep0,
  _mw0,
  "ListDeviceDiscoveries",
  ListDeviceDiscoveries$
) {
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
