// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import { ListTimeSeriesRequest, ListTimeSeriesResponse } from "../models/models_0";
import { de_ListTimeSeriesCommand, se_ListTimeSeriesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTimeSeriesCommand}.
 */
export interface ListTimeSeriesCommandInput extends ListTimeSeriesRequest {}
/**
 * @public
 *
 * The output of {@link ListTimeSeriesCommand}.
 */
export interface ListTimeSeriesCommandOutput extends ListTimeSeriesResponse, __MetadataBearer {}

/**
 * <p>Retrieves a paginated list of time series (data streams).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, ListTimeSeriesCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, ListTimeSeriesCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const input = { // ListTimeSeriesRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   assetId: "STRING_VALUE",
 *   aliasPrefix: "STRING_VALUE",
 *   timeSeriesType: "ASSOCIATED" || "DISASSOCIATED",
 * };
 * const command = new ListTimeSeriesCommand(input);
 * const response = await client.send(command);
 * // { // ListTimeSeriesResponse
 * //   TimeSeriesSummaries: [ // TimeSeriesSummaries // required
 * //     { // TimeSeriesSummary
 * //       assetId: "STRING_VALUE",
 * //       propertyId: "STRING_VALUE",
 * //       alias: "STRING_VALUE",
 * //       timeSeriesId: "STRING_VALUE", // required
 * //       dataType: "STRING" || "INTEGER" || "DOUBLE" || "BOOLEAN" || "STRUCT", // required
 * //       dataTypeSpec: "STRING_VALUE",
 * //       timeSeriesCreationDate: new Date("TIMESTAMP"), // required
 * //       timeSeriesLastUpdateDate: new Date("TIMESTAMP"), // required
 * //       timeSeriesArn: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTimeSeriesCommandInput - {@link ListTimeSeriesCommandInput}
 * @returns {@link ListTimeSeriesCommandOutput}
 * @see {@link ListTimeSeriesCommandInput} for command's `input` shape.
 * @see {@link ListTimeSeriesCommandOutput} for command's `response` shape.
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
 * @public
 */
export class ListTimeSeriesCommand extends $Command
  .classBuilder<
    ListTimeSeriesCommandInput,
    ListTimeSeriesCommandOutput,
    IoTSiteWiseClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: IoTSiteWiseClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIoTSiteWise", "ListTimeSeries", {})
  .n("IoTSiteWiseClient", "ListTimeSeriesCommand")
  .f(void 0, void 0)
  .ser(se_ListTimeSeriesCommand)
  .de(de_ListTimeSeriesCommand)
  .build() {}
