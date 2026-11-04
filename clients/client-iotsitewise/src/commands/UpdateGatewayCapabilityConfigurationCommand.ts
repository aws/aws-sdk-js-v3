// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  UpdateGatewayCapabilityConfigurationRequest,
  UpdateGatewayCapabilityConfigurationResponse,
} from "../models/models_1";
import { UpdateGatewayCapabilityConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateGatewayCapabilityConfigurationCommand}.
 */
export interface UpdateGatewayCapabilityConfigurationCommandInput extends UpdateGatewayCapabilityConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateGatewayCapabilityConfigurationCommand}.
 */
export interface UpdateGatewayCapabilityConfigurationCommandOutput extends UpdateGatewayCapabilityConfigurationResponse, __MetadataBearer {}

/**
 * Updates a gateway capability configuration or defines a new capability configuration. Each gateway capability defines data sources for a gateway.
 *
 * Important workflow notes:
 *
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
 * import { IoTSiteWiseClient, UpdateGatewayCapabilityConfigurationCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, UpdateGatewayCapabilityConfigurationCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = { // UpdateGatewayCapabilityConfigurationRequest
 *   gatewayId: "STRING_VALUE", // required
 *   capabilityNamespace: "STRING_VALUE", // required
 *   capabilityConfiguration: "STRING_VALUE", // required
 * };
 * const command = new UpdateGatewayCapabilityConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateGatewayCapabilityConfigurationResponse
 * //   capabilityNamespace: "STRING_VALUE", // required
 * //   capabilitySyncStatus: "IN_SYNC" || "OUT_OF_SYNC" || "SYNC_FAILED" || "UNKNOWN" || "NOT_APPLICABLE", // required
 * // };
 *
 * ```
 *
 * @param UpdateGatewayCapabilityConfigurationCommandInput - {@link UpdateGatewayCapabilityConfigurationCommandInput}
 * @returns {@link UpdateGatewayCapabilityConfigurationCommandOutput}
 * @see {@link UpdateGatewayCapabilityConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateGatewayCapabilityConfigurationCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for IoTSiteWiseClient's `config` shape.
 *
 * @throws {@link ConflictingOperationException} (client fault)
 *
 * Your request has conflicting operations. This can occur if you're trying to perform more than one operation on the same resource at the same time.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * IoT SiteWise can't process your request right now. Try again later.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request isn't valid. This can occur if your request contains malformed JSON or unsupported characters. Check your request and try again.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * You've reached the quota for a resource. For example, this can occur if you're trying to associate more than the allowed number of child assets or attempting to create more than the allowed number of properties for an asset model.
 *
 * For more information, see [Quotas](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html) in the *IoT SiteWise User Guide*.
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
export class UpdateGatewayCapabilityConfigurationCommand extends command<UpdateGatewayCapabilityConfigurationCommandInput, UpdateGatewayCapabilityConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "UpdateGatewayCapabilityConfiguration",
  UpdateGatewayCapabilityConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateGatewayCapabilityConfigurationRequest;
      output: UpdateGatewayCapabilityConfigurationResponse;
    };
    sdk: {
      input: UpdateGatewayCapabilityConfigurationCommandInput;
      output: UpdateGatewayCapabilityConfigurationCommandOutput;
    };
  };
}
