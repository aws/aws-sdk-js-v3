// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import { ListGatewaysRequest, ListGatewaysResponse } from "../models/models_1";
import { de_ListGatewaysCommand, se_ListGatewaysCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListGatewaysCommand}.
 */
export interface ListGatewaysCommandInput extends ListGatewaysRequest {}
/**
 * @public
 *
 * The output of {@link ListGatewaysCommand}.
 */
export interface ListGatewaysCommandOutput extends ListGatewaysResponse, __MetadataBearer {}

/**
 * <p>Retrieves a paginated list of gateways.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, ListGatewaysCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, ListGatewaysCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const input = { // ListGatewaysRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListGatewaysCommand(input);
 * const response = await client.send(command);
 * // { // ListGatewaysResponse
 * //   gatewaySummaries: [ // GatewaySummaries // required
 * //     { // GatewaySummary
 * //       gatewayId: "STRING_VALUE", // required
 * //       gatewayName: "STRING_VALUE", // required
 * //       gatewayPlatform: { // GatewayPlatform
 * //         greengrass: { // Greengrass
 * //           groupArn: "STRING_VALUE", // required
 * //         },
 * //         greengrassV2: { // GreengrassV2
 * //           coreDeviceThingName: "STRING_VALUE", // required
 * //         },
 * //         siemensIE: { // SiemensIE
 * //           iotCoreThingName: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       gatewayCapabilitySummaries: [ // GatewayCapabilitySummaries
 * //         { // GatewayCapabilitySummary
 * //           capabilityNamespace: "STRING_VALUE", // required
 * //           capabilitySyncStatus: "IN_SYNC" || "OUT_OF_SYNC" || "SYNC_FAILED" || "UNKNOWN" || "NOT_APPLICABLE", // required
 * //         },
 * //       ],
 * //       creationDate: new Date("TIMESTAMP"), // required
 * //       lastUpdateDate: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListGatewaysCommandInput - {@link ListGatewaysCommandInput}
 * @returns {@link ListGatewaysCommandOutput}
 * @see {@link ListGatewaysCommandInput} for command's `input` shape.
 * @see {@link ListGatewaysCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for IoTSiteWiseClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>IoT SiteWise can't process your request right now. Try again later.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *       unsupported characters. Check your request and try again.</p>
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
 * @public
 */
export class ListGatewaysCommand extends $Command
  .classBuilder<
    ListGatewaysCommandInput,
    ListGatewaysCommandOutput,
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
  .s("AWSIoTSiteWise", "ListGateways", {})
  .n("IoTSiteWiseClient", "ListGatewaysCommand")
  .f(void 0, void 0)
  .ser(se_ListGatewaysCommand)
  .de(de_ListGatewaysCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListGatewaysRequest;
      output: ListGatewaysResponse;
    };
    sdk: {
      input: ListGatewaysCommandInput;
      output: ListGatewaysCommandOutput;
    };
  };
}
