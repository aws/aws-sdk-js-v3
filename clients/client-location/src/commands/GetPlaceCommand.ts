// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetPlaceRequest, GetPlaceResponse } from "../models/models_0";
import { GetPlace$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetPlaceCommand}.
 */
export interface GetPlaceCommandInput extends GetPlaceRequest {}
/**
 * @public
 *
 * The output of {@link GetPlaceCommand}.
 */
export interface GetPlaceCommandOutput extends GetPlaceResponse, __MetadataBearer {}

/**
 * > **Important:**
 * >
 * > This operation is no longer current and may be deprecated in the future. We recommend you upgrade to the [V2 `GetPlace`](/location/latest/APIReference/API_geoplaces_GetPlace.html) operation unless you require Grab data.
 * >
 * > - This version of `GetPlace` is part of a previous Amazon Location Service Places API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2).
 * > - Version 2 of the `GetPlace` operation interoperates with the rest of the Places V2 API, while this version does not.
 * > - If you are using an Amazon Web Services SDK or the Amazon Web Services CLI, note that the Places API version 2 is found under `geo-places` or `geo_places`, not under `location`.
 * > - Since Grab is not yet fully supported in Places API version 2, we recommend you continue using API version 1 when using Grab.
 * > - Start your version 2 API journey with the Places V2 [API Reference](/location/latest/APIReference/API_Operations_Amazon_Location_Service_Places_V2.html) or the [Developer Guide](/location/latest/developerguide/places.html).
 *
 * Finds a place by its unique ID. A `PlaceId` is returned by other search operations.
 *
 * > **Note:**
 * >
 * > A PlaceId is valid only if all of the following are the same in the original search request and the call to `GetPlace`.
 * >
 * > - Customer Amazon Web Services account
 * > - Amazon Web Services Region
 * > - Data provider specified in the place index resource
 *
 * > **Note:** If your Place index resource is configured with Grab as your geolocation provider and Storage as Intended use, the GetPlace operation is unavailable. For more information, see [AWS service terms](http://aws.amazon.com/service-terms).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, GetPlaceCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, GetPlaceCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * // import type { LocationClientConfig } from "@aws-sdk/client-location";
 * const config = {}; // type is LocationClientConfig
 * const client = new LocationClient(config);
 * const input = { // GetPlaceRequest
 *   IndexName: "STRING_VALUE", // required
 *   PlaceId: "STRING_VALUE", // required
 *   Language: "STRING_VALUE",
 *   Key: "STRING_VALUE",
 * };
 * const command = new GetPlaceCommand(input);
 * const response = await client.send(command);
 * // { // GetPlaceResponse
 * //   Place: { // Place
 * //     Label: "STRING_VALUE",
 * //     Geometry: { // PlaceGeometry
 * //       Point: [ // Position
 * //         Number("double"),
 * //       ],
 * //     },
 * //     AddressNumber: "STRING_VALUE",
 * //     Street: "STRING_VALUE",
 * //     Neighborhood: "STRING_VALUE",
 * //     Municipality: "STRING_VALUE",
 * //     SubRegion: "STRING_VALUE",
 * //     Region: "STRING_VALUE",
 * //     Country: "STRING_VALUE",
 * //     PostalCode: "STRING_VALUE",
 * //     Interpolated: true || false,
 * //     TimeZone: { // TimeZone
 * //       Name: "STRING_VALUE", // required
 * //       Offset: Number("int"),
 * //     },
 * //     UnitType: "STRING_VALUE",
 * //     UnitNumber: "STRING_VALUE",
 * //     Categories: [ // PlaceCategoryList
 * //       "STRING_VALUE",
 * //     ],
 * //     SupplementalCategories: [ // PlaceSupplementalCategoryList
 * //       "STRING_VALUE",
 * //     ],
 * //     SubMunicipality: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetPlaceCommandInput - {@link GetPlaceCommandInput}
 * @returns {@link GetPlaceCommandOutput}
 * @see {@link GetPlaceCommandInput} for command's `input` shape.
 * @see {@link GetPlaceCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The request was denied because of insufficient access or permissions. Check with an administrator to verify your permissions.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request has failed to process because of an unknown server error, exception, or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource that you've entered was not found in your AWS account.
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
export class GetPlaceCommand extends command<GetPlaceCommandInput, GetPlaceCommandOutput>(
  _ep0,
  _mw0,
  "GetPlace",
  GetPlace$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPlaceRequest;
      output: GetPlaceResponse;
    };
    sdk: {
      input: GetPlaceCommandInput;
      output: GetPlaceCommandOutput;
    };
  };
}
