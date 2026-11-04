// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetAssetPropertyAggregatesRequest, GetAssetPropertyAggregatesResponse } from "../models/models_1";
import { GetAssetPropertyAggregates$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Gets aggregated values for an asset property. For more information, see [Querying aggregates](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/query-industrial-data.html#aggregates) in the *IoT SiteWise User Guide*.
 *
 * To identify an asset property, you must specify one of the following:
 *
 * - The `assetId` and `propertyId` of an asset property.
 * - A `propertyAlias`, which is a data stream alias (for example, `/company/windfarm/3/turbine/7/temperature`). To define an asset property's alias, see [UpdateAssetProperty](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html).
 *
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
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The requested service is unavailable.
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
export class GetAssetPropertyAggregatesCommand extends command<GetAssetPropertyAggregatesCommandInput, GetAssetPropertyAggregatesCommandOutput>(
  _ep0,
  _mw0,
  "GetAssetPropertyAggregates",
  GetAssetPropertyAggregates$
) {
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
