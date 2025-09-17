// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import {
  DescribeGatewayCapabilityConfigurationRequest,
  DescribeGatewayCapabilityConfigurationResponse,
} from "../models/models_0";
import {
  de_DescribeGatewayCapabilityConfigurationCommand,
  se_DescribeGatewayCapabilityConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeGatewayCapabilityConfigurationCommand}.
 */
export interface DescribeGatewayCapabilityConfigurationCommandInput
  extends DescribeGatewayCapabilityConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeGatewayCapabilityConfigurationCommand}.
 */
export interface DescribeGatewayCapabilityConfigurationCommandOutput
  extends DescribeGatewayCapabilityConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Each gateway capability defines data sources for a gateway. This is the namespace of the gateway capability.</p>
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
 *  <p>IoT SiteWise can't process your request right now. Try again later.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *       unsupported characters. Check your request and try again.</p>
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
export class DescribeGatewayCapabilityConfigurationCommand extends $Command
  .classBuilder<
    DescribeGatewayCapabilityConfigurationCommandInput,
    DescribeGatewayCapabilityConfigurationCommandOutput,
    IoTSiteWiseClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTSiteWiseClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIoTSiteWise", "DescribeGatewayCapabilityConfiguration", {})
  .n("IoTSiteWiseClient", "DescribeGatewayCapabilityConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_DescribeGatewayCapabilityConfigurationCommand)
  .de(de_DescribeGatewayCapabilityConfigurationCommand)
  .build() {
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
