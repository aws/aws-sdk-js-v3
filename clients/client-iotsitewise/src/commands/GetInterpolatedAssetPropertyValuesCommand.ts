// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetInterpolatedAssetPropertyValuesRequest,
  GetInterpolatedAssetPropertyValuesResponse,
} from "../models/models_1";
import { GetInterpolatedAssetPropertyValues$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetInterpolatedAssetPropertyValuesCommand}.
 */
export interface GetInterpolatedAssetPropertyValuesCommandInput extends GetInterpolatedAssetPropertyValuesRequest {}
/**
 * @public
 *
 * The output of {@link GetInterpolatedAssetPropertyValuesCommand}.
 */
export interface GetInterpolatedAssetPropertyValuesCommandOutput extends GetInterpolatedAssetPropertyValuesResponse, __MetadataBearer {}

/**
 * Get interpolated values for an asset property for a specified time interval, during a period of time. If your time series is missing data points during the specified time interval, you can use interpolation to estimate the missing data.
 *
 * For example, you can use this operation to return the interpolated temperature values for a wind turbine every 24 hours over a duration of 7 days.
 *
 * To identify an asset property, you must specify one of the following:
 *
 * - The `assetId` and `propertyId` of an asset property.
 * - A `propertyAlias`, which is a data stream alias (for example, `/company/windfarm/3/turbine/7/temperature`). To define an asset property's alias, see [UpdateAssetProperty](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, GetInterpolatedAssetPropertyValuesCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, GetInterpolatedAssetPropertyValuesCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = { // GetInterpolatedAssetPropertyValuesRequest
 *   assetId: "STRING_VALUE",
 *   propertyId: "STRING_VALUE",
 *   propertyAlias: "STRING_VALUE",
 *   startTimeInSeconds: Number("long"), // required
 *   startTimeOffsetInNanos: Number("int"),
 *   endTimeInSeconds: Number("long"), // required
 *   endTimeOffsetInNanos: Number("int"),
 *   quality: "GOOD" || "BAD" || "UNCERTAIN", // required
 *   intervalInSeconds: Number("long"), // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   type: "STRING_VALUE", // required
 *   intervalWindowInSeconds: Number("long"),
 * };
 * const command = new GetInterpolatedAssetPropertyValuesCommand(input);
 * const response = await client.send(command);
 * // { // GetInterpolatedAssetPropertyValuesResponse
 * //   interpolatedAssetPropertyValues: [ // InterpolatedAssetPropertyValues // required
 * //     { // InterpolatedAssetPropertyValue
 * //       timestamp: { // TimeInNanos
 * //         timeInSeconds: Number("long"), // required
 * //         offsetInNanos: Number("int"),
 * //       },
 * //       value: { // Variant
 * //         stringValue: "STRING_VALUE",
 * //         integerValue: Number("int"),
 * //         doubleValue: Number("double"),
 * //         booleanValue: true || false,
 * //         nullValue: { // PropertyValueNullValue
 * //           valueType: "D" || "B" || "S" || "I" || "U", // required
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetInterpolatedAssetPropertyValuesCommandInput - {@link GetInterpolatedAssetPropertyValuesCommandInput}
 * @returns {@link GetInterpolatedAssetPropertyValuesCommandOutput}
 * @see {@link GetInterpolatedAssetPropertyValuesCommandInput} for command's `input` shape.
 * @see {@link GetInterpolatedAssetPropertyValuesCommandOutput} for command's `response` shape.
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
export class GetInterpolatedAssetPropertyValuesCommand extends command<GetInterpolatedAssetPropertyValuesCommandInput, GetInterpolatedAssetPropertyValuesCommandOutput>(
  _ep0,
  _mw0,
  "GetInterpolatedAssetPropertyValues",
  GetInterpolatedAssetPropertyValues$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetInterpolatedAssetPropertyValuesRequest;
      output: GetInterpolatedAssetPropertyValuesResponse;
    };
    sdk: {
      input: GetInterpolatedAssetPropertyValuesCommandInput;
      output: GetInterpolatedAssetPropertyValuesCommandOutput;
    };
  };
}
