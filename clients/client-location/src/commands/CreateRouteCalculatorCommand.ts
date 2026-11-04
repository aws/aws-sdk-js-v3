// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateRouteCalculatorRequest, CreateRouteCalculatorResponse } from "../models/models_0";
import { CreateRouteCalculator$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateRouteCalculatorCommand}.
 */
export interface CreateRouteCalculatorCommandInput extends CreateRouteCalculatorRequest {}
/**
 * @public
 *
 * The output of {@link CreateRouteCalculatorCommand}.
 */
export interface CreateRouteCalculatorCommandOutput extends CreateRouteCalculatorResponse, __MetadataBearer {}

/**
 * > **Important:**
 * >
 * > This operation is no longer current and may be deprecated in the future. We recommend you upgrade to the Routes API V2 unless you require Grab data.
 * >
 * > - `CreateRouteCalculator` is part of a previous Amazon Location Service Routes API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2).
 * > - The Routes API version 2 has a simplified interface that can be used without creating or managing route calculator resources.
 * > - If you are using an Amazon Web Services SDK or the Amazon Web Services CLI, note that the Routes API version 2 is found under `geo-routes` or `geo_routes`, not under `location`.
 * > - Since Grab is not yet fully supported in Routes API version 2, we recommend you continue using API version 1 when using Grab.
 * > - Start your version 2 API journey with the Routes V2 [API Reference](/location/latest/APIReference/API_Operations_Amazon_Location_Service_Routes_V2.html) or the [Developer Guide](/location/latest/developerguide/routes.html).
 *
 * Creates a route calculator resource in your Amazon Web Services account.
 *
 * You can send requests to a route calculator resource to estimate travel time, distance, and get directions. A route calculator sources traffic and road network data from your chosen data provider.
 *
 * > **Note:** If your application is tracking or routing assets you use in your business, such as delivery vehicles or employees, you must not use Esri as your geolocation provider. See section 82 of the [Amazon Web Services service terms](http://aws.amazon.com/service-terms) for more details.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, CreateRouteCalculatorCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, CreateRouteCalculatorCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * // import type { LocationClientConfig } from "@aws-sdk/client-location";
 * const config = {}; // type is LocationClientConfig
 * const client = new LocationClient(config);
 * const input = { // CreateRouteCalculatorRequest
 *   CalculatorName: "STRING_VALUE", // required
 *   DataSource: "STRING_VALUE", // required
 *   PricingPlan: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateRouteCalculatorCommand(input);
 * const response = await client.send(command);
 * // { // CreateRouteCalculatorResponse
 * //   CalculatorName: "STRING_VALUE", // required
 * //   CalculatorArn: "STRING_VALUE", // required
 * //   CreateTime: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param CreateRouteCalculatorCommandInput - {@link CreateRouteCalculatorCommandInput}
 * @returns {@link CreateRouteCalculatorCommandOutput}
 * @see {@link CreateRouteCalculatorCommandInput} for command's `input` shape.
 * @see {@link CreateRouteCalculatorCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The request was denied because of insufficient access or permissions. Check with an administrator to verify your permissions.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request was unsuccessful because of a conflict.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request has failed to process because of an unknown server error, exception, or failure.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The operation was denied because the request would exceed the maximum [quota](https://docs.aws.amazon.com/location/previous/developerguide/location-quotas.html) set for Amazon Location Service.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied because of request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input failed to meet the constraints specified by the AWS service.
 *
 * @throws {@link LocationServiceException}
 *
 * Base exception class for all service exceptions from Location service.
 *
 * @public
 */
export class CreateRouteCalculatorCommand extends command<CreateRouteCalculatorCommandInput, CreateRouteCalculatorCommandOutput>(
  _ep0,
  _mw0,
  "CreateRouteCalculator",
  CreateRouteCalculator$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateRouteCalculatorRequest;
      output: CreateRouteCalculatorResponse;
    };
    sdk: {
      input: CreateRouteCalculatorCommandInput;
      output: CreateRouteCalculatorCommandOutput;
    };
  };
}
