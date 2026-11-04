// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListTimeSeriesRequest, ListTimeSeriesResponse } from "../models/models_1";
import { ListTimeSeries$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Retrieves a paginated list of time series (data streams).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, ListTimeSeriesCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, ListTimeSeriesCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = { // ListTimeSeriesRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   assetId: "STRING_VALUE",
 *   aliasPrefix: "STRING_VALUE",
 *   timeSeriesType: "ASSOCIATED" || "DISASSOCIATED",
 *   workspaceName: "STRING_VALUE",
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
 * //       dataType: "STRING" || "INTEGER" || "DOUBLE" || "BOOLEAN" || "STRUCT" || "VIDEO" || "ANNOTATION" || "JSON", // required
 * //       dataTypeSpec: "STRING_VALUE",
 * //       timeSeriesCreationDate: new Date("TIMESTAMP"), // required
 * //       timeSeriesLastUpdateDate: new Date("TIMESTAMP"), // required
 * //       timeSeriesArn: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * //   workspaceName: "STRING_VALUE",
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
 *
 * IoT SiteWise can't process your request right now. Try again later.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request isn't valid. This can occur if your request contains malformed JSON or unsupported characters. Check your request and try again.
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
export class ListTimeSeriesCommand extends command<ListTimeSeriesCommandInput, ListTimeSeriesCommandOutput>(
  _ep0,
  _mw0,
  "ListTimeSeries",
  ListTimeSeries$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTimeSeriesRequest;
      output: ListTimeSeriesResponse;
    };
    sdk: {
      input: ListTimeSeriesCommandInput;
      output: ListTimeSeriesCommandOutput;
    };
  };
}
