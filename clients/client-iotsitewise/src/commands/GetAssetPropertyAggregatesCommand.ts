// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import type { GetAssetPropertyAggregatesRequest, GetAssetPropertyAggregatesResponse } from "../models/models_0";
import { GetAssetPropertyAggregates } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAssetPropertyAggregatesCommand}.
 */
export interface GetAssetPropertyAggregatesCommandInput extends GetAssetPropertyAggregatesRequest {}
/**
 * @public
 *
 * The output of {@link GetAssetPropertyAggregatesCommand}.
 */
export interface GetAssetPropertyAggregatesCommandOutput extends GetAssetPropertyAggregatesResponse, __MetadataBearer {}

/**
 * <p>Gets aggregated values for an asset property. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/query-industrial-data.html#aggregates">Querying
 *         aggregates</a> in the <i>IoT SiteWise User Guide</i>.</p>
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
 * import { IoTSiteWiseClient, GetAssetPropertyAggregatesCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, GetAssetPropertyAggregatesCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = { // GetAssetPropertyAggregatesRequest
 *   assetId: "STRING_VALUE",
 *   propertyId: "STRING_VALUE",
 *   propertyAlias: "STRING_VALUE",
 *   aggregateTypes: [ // AggregateTypes // required
 *     "AVERAGE" || "COUNT" || "MAXIMUM" || "MINIMUM" || "SUM" || "STANDARD_DEVIATION",
 *   ],
 *   resolution: "STRING_VALUE", // required
 *   qualities: [ // Qualities
 *     "GOOD" || "BAD" || "UNCERTAIN",
 *   ],
 *   startDate: new Date("TIMESTAMP"), // required
 *   endDate: new Date("TIMESTAMP"), // required
 *   timeOrdering: "ASCENDING" || "DESCENDING",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new GetAssetPropertyAggregatesCommand(input);
 * const response = await client.send(command);
 * // { // GetAssetPropertyAggregatesResponse
 * //   aggregatedValues: [ // AggregatedValues // required
 * //     { // AggregatedValue
 * //       timestamp: new Date("TIMESTAMP"), // required
 * //       quality: "GOOD" || "BAD" || "UNCERTAIN",
 * //       value: { // Aggregates
 * //         average: Number("double"),
 * //         count: Number("double"),
 * //         maximum: Number("double"),
 * //         minimum: Number("double"),
 * //         sum: Number("double"),
 * //         standardDeviation: Number("double"),
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetAssetPropertyAggregatesCommandInput - {@link GetAssetPropertyAggregatesCommandInput}
 * @returns {@link GetAssetPropertyAggregatesCommandOutput}
 * @see {@link GetAssetPropertyAggregatesCommandInput} for command's `input` shape.
 * @see {@link GetAssetPropertyAggregatesCommandOutput} for command's `response` shape.
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
export class GetAssetPropertyAggregatesCommand extends $Command
  .classBuilder<
    GetAssetPropertyAggregatesCommandInput,
    GetAssetPropertyAggregatesCommandOutput,
    IoTSiteWiseClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTSiteWiseClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIoTSiteWise", "GetAssetPropertyAggregates", {})
  .n("IoTSiteWiseClient", "GetAssetPropertyAggregatesCommand")
  .sc(GetAssetPropertyAggregates)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAssetPropertyAggregatesRequest;
      output: GetAssetPropertyAggregatesResponse;
    };
    sdk: {
      input: GetAssetPropertyAggregatesCommandInput;
      output: GetAssetPropertyAggregatesCommandOutput;
    };
  };
}
