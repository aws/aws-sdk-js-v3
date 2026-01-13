// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import type {
  UpdateGatewayCapabilityConfigurationRequest,
  UpdateGatewayCapabilityConfigurationResponse,
} from "../models/models_1";
import { UpdateGatewayCapabilityConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Updates a gateway capability configuration or defines a new capability configuration. Each gateway capability defines data sources for a gateway.</p>
 *          <p>Important workflow notes:</p>
 *          <p>Each gateway capability defines data sources for a gateway. This is the namespace of the gateway capability.</p>
 *          <p>. The namespace follows the format <code>service:capability:version</code>, where:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>service</code> - The service providing the capability, or <code>iotsitewise</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>capability</code> - The specific capability type. Options include: <code>opcuacollector</code> for the OPC UA data source collector, or <code>publisher</code> for data publisher capability.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>version</code> - The version number of the capability. Option include <code>2</code> for Classic streams, V2 gateways, and <code>3</code> for MQTT-enabled, V3 gateways.</p>
 *             </li>
 *          </ul>
 *          <p>After updating a capability configuration, the sync status becomes <code>OUT_OF_SYNC</code> until the gateway processes the configuration.Use <code>DescribeGatewayCapabilityConfiguration</code> to check the sync status and verify the configuration was applied.</p>
 *          <p>A gateway can have multiple capability configurations with different namespaces.</p>
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
 *  <p>Your request has conflicting operations. This can occur if you're trying to perform more
 *       than one operation on the same resource at the same time.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>IoT SiteWise can't process your request right now. Try again later.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *       unsupported characters. Check your request and try again.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You've reached the quota for a resource. For example, this can occur if you're trying to
 *       associate more than the allowed number of child assets or attempting to create more than the
 *       allowed number of properties for an asset model.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a rate limit. For example, you might have exceeded the number of
 *       IoT SiteWise assets that can be created per second, the allowed number of messages per second, and so
 *       on.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
 *
 * @throws {@link IoTSiteWiseServiceException}
 * <p>Base exception class for all service exceptions from IoTSiteWise service.</p>
 *
 *
 * @public
 */
export class UpdateGatewayCapabilityConfigurationCommand extends $Command
  .classBuilder<
    UpdateGatewayCapabilityConfigurationCommandInput,
    UpdateGatewayCapabilityConfigurationCommandOutput,
    IoTSiteWiseClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTSiteWiseClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIoTSiteWise", "UpdateGatewayCapabilityConfiguration", {})
  .n("IoTSiteWiseClient", "UpdateGatewayCapabilityConfigurationCommand")
  .sc(UpdateGatewayCapabilityConfiguration$)
  .build() {
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
