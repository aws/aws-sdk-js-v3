// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import type { DescribeTimeSeriesRequest, DescribeTimeSeriesResponse } from "../models/models_0";
import { DescribeTimeSeries } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeTimeSeriesCommand}.
 */
export interface DescribeTimeSeriesCommandInput extends DescribeTimeSeriesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeTimeSeriesCommand}.
 */
export interface DescribeTimeSeriesCommandOutput extends DescribeTimeSeriesResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about a time series (data stream).</p>
 *          <p>To identify a time series, do one of the following:</p>
 *          <ul>
 *             <li>
 *                <p>If the time series isn't associated with an asset property,
 *           specify the <code>alias</code> of the time series.</p>
 *             </li>
 *             <li>
 *                <p>If the time series is associated with an asset property,
 *           specify one of the following: </p>
 *                <ul>
 *                   <li>
 *                      <p>The <code>alias</code> of the time series.</p>
 *                   </li>
 *                   <li>
 *                      <p>The <code>assetId</code> and <code>propertyId</code> that identifies the asset property.</p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, DescribeTimeSeriesCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, DescribeTimeSeriesCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = { // DescribeTimeSeriesRequest
 *   alias: "STRING_VALUE",
 *   assetId: "STRING_VALUE",
 *   propertyId: "STRING_VALUE",
 * };
 * const command = new DescribeTimeSeriesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTimeSeriesResponse
 * //   assetId: "STRING_VALUE",
 * //   propertyId: "STRING_VALUE",
 * //   alias: "STRING_VALUE",
 * //   timeSeriesId: "STRING_VALUE", // required
 * //   dataType: "STRING" || "INTEGER" || "DOUBLE" || "BOOLEAN" || "STRUCT", // required
 * //   dataTypeSpec: "STRING_VALUE",
 * //   timeSeriesCreationDate: new Date("TIMESTAMP"), // required
 * //   timeSeriesLastUpdateDate: new Date("TIMESTAMP"), // required
 * //   timeSeriesArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DescribeTimeSeriesCommandInput - {@link DescribeTimeSeriesCommandInput}
 * @returns {@link DescribeTimeSeriesCommandOutput}
 * @see {@link DescribeTimeSeriesCommandInput} for command's `input` shape.
 * @see {@link DescribeTimeSeriesCommandOutput} for command's `response` shape.
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
export class DescribeTimeSeriesCommand extends $Command
  .classBuilder<
    DescribeTimeSeriesCommandInput,
    DescribeTimeSeriesCommandOutput,
    IoTSiteWiseClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTSiteWiseClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIoTSiteWise", "DescribeTimeSeries", {})
  .n("IoTSiteWiseClient", "DescribeTimeSeriesCommand")
  .sc(DescribeTimeSeries)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeTimeSeriesRequest;
      output: DescribeTimeSeriesResponse;
    };
    sdk: {
      input: DescribeTimeSeriesCommandInput;
      output: DescribeTimeSeriesCommandOutput;
    };
  };
}
