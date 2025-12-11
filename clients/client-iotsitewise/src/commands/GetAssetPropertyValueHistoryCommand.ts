// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import type { GetAssetPropertyValueHistoryRequest, GetAssetPropertyValueHistoryResponse } from "../models/models_0";
import { GetAssetPropertyValueHistory } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAssetPropertyValueHistoryCommand}.
 */
export interface GetAssetPropertyValueHistoryCommandInput extends GetAssetPropertyValueHistoryRequest {}
/**
 * @public
 *
 * The output of {@link GetAssetPropertyValueHistoryCommand}.
 */
export interface GetAssetPropertyValueHistoryCommandOutput
  extends GetAssetPropertyValueHistoryResponse,
    __MetadataBearer {}

/**
 * <p>Gets the history of an asset property's values. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/query-industrial-data.html#historical-values">Querying
 *         historical values</a> in the <i>IoT SiteWise User Guide</i>.</p>
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
 * import { IoTSiteWiseClient, GetAssetPropertyValueHistoryCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, GetAssetPropertyValueHistoryCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = { // GetAssetPropertyValueHistoryRequest
 *   assetId: "STRING_VALUE",
 *   propertyId: "STRING_VALUE",
 *   propertyAlias: "STRING_VALUE",
 *   startDate: new Date("TIMESTAMP"),
 *   endDate: new Date("TIMESTAMP"),
 *   qualities: [ // Qualities
 *     "GOOD" || "BAD" || "UNCERTAIN",
 *   ],
 *   timeOrdering: "ASCENDING" || "DESCENDING",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new GetAssetPropertyValueHistoryCommand(input);
 * const response = await client.send(command);
 * // { // GetAssetPropertyValueHistoryResponse
 * //   assetPropertyValueHistory: [ // AssetPropertyValueHistory // required
 * //     { // AssetPropertyValue
 * //       value: { // Variant
 * //         stringValue: "STRING_VALUE",
 * //         integerValue: Number("int"),
 * //         doubleValue: Number("double"),
 * //         booleanValue: true || false,
 * //         nullValue: { // PropertyValueNullValue
 * //           valueType: "D" || "B" || "S" || "I" || "U", // required
 * //         },
 * //       },
 * //       timestamp: { // TimeInNanos
 * //         timeInSeconds: Number("long"), // required
 * //         offsetInNanos: Number("int"),
 * //       },
 * //       quality: "GOOD" || "BAD" || "UNCERTAIN",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetAssetPropertyValueHistoryCommandInput - {@link GetAssetPropertyValueHistoryCommandInput}
 * @returns {@link GetAssetPropertyValueHistoryCommandOutput}
 * @see {@link GetAssetPropertyValueHistoryCommandInput} for command's `input` shape.
 * @see {@link GetAssetPropertyValueHistoryCommandOutput} for command's `response` shape.
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
export class GetAssetPropertyValueHistoryCommand extends $Command
  .classBuilder<
    GetAssetPropertyValueHistoryCommandInput,
    GetAssetPropertyValueHistoryCommandOutput,
    IoTSiteWiseClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTSiteWiseClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIoTSiteWise", "GetAssetPropertyValueHistory", {})
  .n("IoTSiteWiseClient", "GetAssetPropertyValueHistoryCommand")
  .sc(GetAssetPropertyValueHistory)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAssetPropertyValueHistoryRequest;
      output: GetAssetPropertyValueHistoryResponse;
    };
    sdk: {
      input: GetAssetPropertyValueHistoryCommandInput;
      output: GetAssetPropertyValueHistoryCommandOutput;
    };
  };
}
