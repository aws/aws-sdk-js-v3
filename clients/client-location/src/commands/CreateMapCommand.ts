// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateMapRequest, CreateMapResponse } from "../models/models_0";
import { CreateMap$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateMapCommand}.
 */
export interface CreateMapCommandInput extends CreateMapRequest {}
/**
 * @public
 *
 * The output of {@link CreateMapCommand}.
 */
export interface CreateMapCommandOutput extends CreateMapResponse, __MetadataBearer {}

/**
 * > **Important:**
 * >
 * > This operation is no longer current and may be deprecated in the future. We recommend upgrading to the Maps API V2 unless you require `Grab` data.
 * >
 * > - `CreateMap` is part of a previous Amazon Location Service Maps API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2).
 * > - The Maps API version 2 has a simplified interface that can be used without creating or managing map resources.
 * > - If you are using an AWS SDK or the AWS CLI, note that the Maps API version 2 is found under `geo-maps` or `geo_maps`, not under `location`.
 * > - Since `Grab` is not yet fully supported in Maps API version 2, we recommend you continue using API version 1 when using `Grab`.
 * > - Start your version 2 API journey with the [Maps V2 API Reference](https://docs.aws.amazon.com/location/latest/APIReference/API_Operations_Amazon_Location_Service_Maps_V2.html) or the [Developer Guide](https://docs.aws.amazon.com/location/latest/developerguide/maps.html).
 *
 * Creates a map resource in your Amazon Web Services account, which provides map tiles of different styles sourced from global location data providers.
 *
 * > **Note:** If your application is tracking or routing assets you use in your business, such as delivery vehicles or employees, you must not use Esri as your geolocation provider. See section 82 of the [Amazon Web Services service terms](http://aws.amazon.com/service-terms) for more details.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, CreateMapCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, CreateMapCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * // import type { LocationClientConfig } from "@aws-sdk/client-location";
 * const config = {}; // type is LocationClientConfig
 * const client = new LocationClient(config);
 * const input = { // CreateMapRequest
 *   MapName: "STRING_VALUE", // required
 *   Configuration: { // MapConfiguration
 *     Style: "STRING_VALUE", // required
 *     PoliticalView: "STRING_VALUE",
 *     CustomLayers: [ // CustomLayerList
 *       "STRING_VALUE",
 *     ],
 *   },
 *   PricingPlan: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateMapCommand(input);
 * const response = await client.send(command);
 * // { // CreateMapResponse
 * //   MapName: "STRING_VALUE", // required
 * //   MapArn: "STRING_VALUE", // required
 * //   CreateTime: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param CreateMapCommandInput - {@link CreateMapCommandInput}
 * @returns {@link CreateMapCommandOutput}
 * @see {@link CreateMapCommandInput} for command's `input` shape.
 * @see {@link CreateMapCommandOutput} for command's `response` shape.
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
export class CreateMapCommand extends command<CreateMapCommandInput, CreateMapCommandOutput>(
  _ep0,
  _mw0,
  "CreateMap",
  CreateMap$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateMapRequest;
      output: CreateMapResponse;
    };
    sdk: {
      input: CreateMapCommandInput;
      output: CreateMapCommandOutput;
    };
  };
}
