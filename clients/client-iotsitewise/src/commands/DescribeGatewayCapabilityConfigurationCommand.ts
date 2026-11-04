// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DescribeGatewayCapabilityConfigurationRequest,
  DescribeGatewayCapabilityConfigurationResponse,
} from "../models/models_0";
import { DescribeGatewayCapabilityConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeGatewayCapabilityConfigurationCommand}.
 */
export interface DescribeGatewayCapabilityConfigurationCommandInput extends DescribeGatewayCapabilityConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeGatewayCapabilityConfigurationCommand}.
 */
export interface DescribeGatewayCapabilityConfigurationCommandOutput extends DescribeGatewayCapabilityConfigurationResponse, __MetadataBearer {}

/**
 * Each gateway capability defines data sources for a gateway. This is the namespace of the gateway capability.
 *
 * . The namespace follows the format `service:capability:version`, where:
 *
 * - `service` - The service providing the capability, or `iotsitewise`.
 * - `capability` - The specific capability type. Options include: `opcuacollector` for the OPC UA data source collector, or `publisher` for data publisher capability.
 * - `version` - The version number of the capability. Option include `2` for Classic streams, V2 gateways, and `3` for MQTT-enabled, V3 gateways.
 *
 * After updating a capability configuration, the sync status becomes `OUT_OF_SYNC` until the gateway processes the configuration.Use `DescribeGatewayCapabilityConfiguration` to check the sync status and verify the configuration was applied.
 *
 * A gateway can have multiple capability configurations with different namespaces.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, DescribeGatewayCapabilityConfigurationCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, DescribeGatewayCapabilityConfigurationCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = { // DescribeGatewayCapabilityConfigurationRequest
 *   gatewayId: "STRING_VALUE", // required
 *   capabilityNamespace: "STRING_VALUE", // required
 * };
 * const command = new DescribeGatewayCapabilityConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeGatewayCapabilityConfigurationResponse
 * //   gatewayId: "STRING_VALUE", // required
 * //   capabilityNamespace: "STRING_VALUE", // required
 * //   capabilityConfiguration: "STRING_VALUE", // required
 * //   capabilitySyncStatus: "IN_SYNC" || "OUT_OF_SYNC" || "SYNC_FAILED" || "UNKNOWN" || "NOT_APPLICABLE", // required
 * // };
 *
 * ```
 *
 * @param DescribeGatewayCapabilityConfigurationCommandInput - {@link DescribeGatewayCapabilityConfigurationCommandInput}
 * @returns {@link DescribeGatewayCapabilityConfigurationCommandOutput}
 * @see {@link DescribeGatewayCapabilityConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeGatewayCapabilityConfigurationCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for IoTSiteWiseClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * IoT SiteWise can't process your request right now. Try again later.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request isn't valid. This can occur if your request contains malformed JSON or unsupported characters. Check your request and try again.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource can't be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Your request exceeded a rate limit. For example, you might have exceeded the number of IoT SiteWise assets that can be created per second, the allowed number of messages per second, and so on.
 *
 * For more information, see [Quotas](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html) in the *IoT SiteWise User Guide*.
 *
 * @throws {@link IoTSiteWiseServiceException}
 *
 * Base exception class for all service exceptions from IoTSiteWise service.
 *
 * @public
 */
export class DescribeGatewayCapabilityConfigurationCommand extends command<DescribeGatewayCapabilityConfigurationCommandInput, DescribeGatewayCapabilityConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "DescribeGatewayCapabilityConfiguration",
  DescribeGatewayCapabilityConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeGatewayCapabilityConfigurationRequest;
      output: DescribeGatewayCapabilityConfigurationResponse;
    };
    sdk: {
      input: DescribeGatewayCapabilityConfigurationCommandInput;
      output: DescribeGatewayCapabilityConfigurationCommandOutput;
    };
  };
}
