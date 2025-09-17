// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import { GetAssetPropertyValueRequest, GetAssetPropertyValueResponse } from "../models/models_0";
import { de_GetAssetPropertyValueCommand, se_GetAssetPropertyValueCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAssetPropertyValueCommand}.
 */
export interface GetAssetPropertyValueCommandInput extends GetAssetPropertyValueRequest {}
/**
 * @public
 *
 * The output of {@link GetAssetPropertyValueCommand}.
 */
export interface GetAssetPropertyValueCommandOutput extends GetAssetPropertyValueResponse, __MetadataBearer {}

/**
 * <p>Gets an asset property's current value. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/query-industrial-data.html#current-values">Querying
 *         current values</a> in the <i>IoT SiteWise User Guide</i>.</p>
 *          <p>To identify an asset property, you must specify one of the following:</p>
 *          <ul>
 *             <li>
 *                <p>The <code>assetId</code> and <code>propertyId</code> of an asset property.</p>
 *             </li>
 *             <li>
 *                <p>A <code>propertyAlias</code>, which is a data stream alias (for example,
 *           <code>/company/windfarm/3/turbine/7/temperature</code>). To define an asset property's alias, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, GetAssetPropertyValueCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, GetAssetPropertyValueCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = { // GetAssetPropertyValueRequest
 *   assetId: "STRING_VALUE",
 *   propertyId: "STRING_VALUE",
 *   propertyAlias: "STRING_VALUE",
 * };
 * const command = new GetAssetPropertyValueCommand(input);
 * const response = await client.send(command);
 * // { // GetAssetPropertyValueResponse
 * //   propertyValue: { // AssetPropertyValue
 * //     value: { // Variant
 * //       stringValue: "STRING_VALUE",
 * //       integerValue: Number("int"),
 * //       doubleValue: Number("double"),
 * //       booleanValue: true || false,
 * //       nullValue: { // PropertyValueNullValue
 * //         valueType: "D" || "B" || "S" || "I" || "U", // required
 * //       },
 * //     },
 * //     timestamp: { // TimeInNanos
 * //       timeInSeconds: Number("long"), // required
 * //       offsetInNanos: Number("int"),
 * //     },
 * //     quality: "GOOD" || "BAD" || "UNCERTAIN",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAssetPropertyValueCommandInput - {@link GetAssetPropertyValueCommandInput}
 * @returns {@link GetAssetPropertyValueCommandOutput}
 * @see {@link GetAssetPropertyValueCommandInput} for command's `input` shape.
 * @see {@link GetAssetPropertyValueCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The requested service is unavailable.</p>
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
export class GetAssetPropertyValueCommand extends $Command
  .classBuilder<
    GetAssetPropertyValueCommandInput,
    GetAssetPropertyValueCommandOutput,
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
  .s("AWSIoTSiteWise", "GetAssetPropertyValue", {})
  .n("IoTSiteWiseClient", "GetAssetPropertyValueCommand")
  .f(void 0, void 0)
  .ser(se_GetAssetPropertyValueCommand)
  .de(de_GetAssetPropertyValueCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAssetPropertyValueRequest;
      output: GetAssetPropertyValueResponse;
    };
    sdk: {
      input: GetAssetPropertyValueCommandInput;
      output: GetAssetPropertyValueCommandOutput;
    };
  };
}
