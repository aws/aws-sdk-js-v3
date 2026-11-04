// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeTimeSeriesRequest, DescribeTimeSeriesResponse } from "../models/models_1";
import { DescribeTimeSeries$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Retrieves information about a time series (data stream).
 *
 * To identify a time series, do one of the following:
 *
 * - If the time series isn't associated with an asset property, specify the `alias` of the time series.
 * - If the time series is associated with an asset property, specify one of the following:
 *
 *   - The `alias` of the time series.
 *   - The `assetId` and `propertyId` that identifies the asset property.
 *
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
 *   workspaceName: "STRING_VALUE",
 * };
 * const command = new DescribeTimeSeriesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTimeSeriesResponse
 * //   assetId: "STRING_VALUE",
 * //   propertyId: "STRING_VALUE",
 * //   alias: "STRING_VALUE",
 * //   timeSeriesId: "STRING_VALUE", // required
 * //   dataType: "STRING" || "INTEGER" || "DOUBLE" || "BOOLEAN" || "STRUCT" || "VIDEO" || "ANNOTATION" || "JSON", // required
 * //   dataTypeSpec: "STRING_VALUE",
 * //   timeSeriesCreationDate: new Date("TIMESTAMP"), // required
 * //   timeSeriesLastUpdateDate: new Date("TIMESTAMP"), // required
 * //   timeSeriesArn: "STRING_VALUE", // required
 * //   workspaceName: "STRING_VALUE",
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
export class DescribeTimeSeriesCommand extends command<DescribeTimeSeriesCommandInput, DescribeTimeSeriesCommandOutput>(
  _ep0,
  _mw0,
  "DescribeTimeSeries",
  DescribeTimeSeries$
) {
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
