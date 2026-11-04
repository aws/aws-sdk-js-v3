// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetAssetPropertyValueRequest, GetAssetPropertyValueResponse } from "../models/models_1";
import { GetAssetPropertyValue$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Gets an asset property's current value. For more information, see [Querying current values](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/query-industrial-data.html#current-values) in the *IoT SiteWise User Guide*.
 *
 * To identify an asset property, you must specify one of the following:
 *
 * - The `assetId` and `propertyId` of an asset property.
 * - A `propertyAlias`, which is a data stream alias (for example, `/company/windfarm/3/turbine/7/temperature`). To define an asset property's alias, see [UpdateAssetProperty](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html).
 *
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
export class GetAssetPropertyValueCommand extends command<GetAssetPropertyValueCommandInput, GetAssetPropertyValueCommandOutput>(
  _ep0,
  _mw0,
  "GetAssetPropertyValue",
  GetAssetPropertyValue$
) {
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
