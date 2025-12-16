// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import type { DescribeGatewayRequest, DescribeGatewayResponse } from "../models/models_0";
import { DescribeGateway$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeGatewayCommand}.
 */
export interface DescribeGatewayCommandInput extends DescribeGatewayRequest {}
/**
 * @public
 *
 * The output of {@link DescribeGatewayCommand}.
 */
export interface DescribeGatewayCommandOutput extends DescribeGatewayResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about a gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, DescribeGatewayCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, DescribeGatewayCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = { // DescribeGatewayRequest
 *   gatewayId: "STRING_VALUE", // required
 * };
 * const command = new DescribeGatewayCommand(input);
 * const response = await client.send(command);
 * // { // DescribeGatewayResponse
 * //   gatewayId: "STRING_VALUE", // required
 * //   gatewayName: "STRING_VALUE", // required
 * //   gatewayArn: "STRING_VALUE", // required
 * //   gatewayPlatform: { // GatewayPlatform
 * //     greengrass: { // Greengrass
 * //       groupArn: "STRING_VALUE", // required
 * //     },
 * //     greengrassV2: { // GreengrassV2
 * //       coreDeviceThingName: "STRING_VALUE", // required
 * //       coreDeviceOperatingSystem: "LINUX_AARCH64" || "LINUX_AMD64" || "WINDOWS_AMD64",
 * //     },
 * //     siemensIE: { // SiemensIE
 * //       iotCoreThingName: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   gatewayVersion: "STRING_VALUE",
 * //   gatewayCapabilitySummaries: [ // GatewayCapabilitySummaries // required
 * //     { // GatewayCapabilitySummary
 * //       capabilityNamespace: "STRING_VALUE", // required
 * //       capabilitySyncStatus: "IN_SYNC" || "OUT_OF_SYNC" || "SYNC_FAILED" || "UNKNOWN" || "NOT_APPLICABLE", // required
 * //     },
 * //   ],
 * //   creationDate: new Date("TIMESTAMP"), // required
 * //   lastUpdateDate: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param DescribeGatewayCommandInput - {@link DescribeGatewayCommandInput}
 * @returns {@link DescribeGatewayCommandOutput}
 * @see {@link DescribeGatewayCommandInput} for command's `input` shape.
 * @see {@link DescribeGatewayCommandOutput} for command's `response` shape.
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
export class DescribeGatewayCommand extends $Command
  .classBuilder<
    DescribeGatewayCommandInput,
    DescribeGatewayCommandOutput,
    IoTSiteWiseClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTSiteWiseClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIoTSiteWise", "DescribeGateway", {})
  .n("IoTSiteWiseClient", "DescribeGatewayCommand")
  .sc(DescribeGateway$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeGatewayRequest;
      output: DescribeGatewayResponse;
    };
    sdk: {
      input: DescribeGatewayCommandInput;
      output: DescribeGatewayCommandOutput;
    };
  };
}
