// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListGeoLocationsRequest, ListGeoLocationsResponse } from "../models/models_0";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { ListGeoLocations } from "../schemas/schemas_7_List";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListGeoLocationsCommand}.
 */
export interface ListGeoLocationsCommandInput extends ListGeoLocationsRequest {}
/**
 * @public
 *
 * The output of {@link ListGeoLocationsCommand}.
 */
export interface ListGeoLocationsCommandOutput extends ListGeoLocationsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of supported geographic locations.</p>
 *          <p>Countries are listed first, and continents are listed last. If Amazon Route 53
 * 			supports subdivisions for a country (for example, states or provinces), the subdivisions
 * 			for that country are listed in alphabetical order immediately after the corresponding
 * 			country.</p>
 *          <p>Route 53 does not perform authorization for this API because it retrieves information
 * 			that is already available to the public.</p>
 *          <p>For a list of supported geolocation codes, see the <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_GeoLocation.html">GeoLocation</a> data
 * 			type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, ListGeoLocationsCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, ListGeoLocationsCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * // import type { Route53ClientConfig } from "@aws-sdk/client-route-53";
 * const config = {}; // type is Route53ClientConfig
 * const client = new Route53Client(config);
 * const input = { // ListGeoLocationsRequest
 *   StartContinentCode: "STRING_VALUE",
 *   StartCountryCode: "STRING_VALUE",
 *   StartSubdivisionCode: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListGeoLocationsCommand(input);
 * const response = await client.send(command);
 * // { // ListGeoLocationsResponse
 * //   GeoLocationDetailsList: [ // GeoLocationDetailsList // required
 * //     { // GeoLocationDetails
 * //       ContinentCode: "STRING_VALUE",
 * //       ContinentName: "STRING_VALUE",
 * //       CountryCode: "STRING_VALUE",
 * //       CountryName: "STRING_VALUE",
 * //       SubdivisionCode: "STRING_VALUE",
 * //       SubdivisionName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   IsTruncated: true || false, // required
 * //   NextContinentCode: "STRING_VALUE",
 * //   NextCountryCode: "STRING_VALUE",
 * //   NextSubdivisionCode: "STRING_VALUE",
 * //   MaxItems: Number("int"), // required
 * // };
 *
 * ```
 *
 * @param ListGeoLocationsCommandInput - {@link ListGeoLocationsCommandInput}
 * @returns {@link ListGeoLocationsCommandOutput}
 * @see {@link ListGeoLocationsCommandInput} for command's `input` shape.
 * @see {@link ListGeoLocationsCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
 *
 * @throws {@link Route53ServiceException}
 * <p>Base exception class for all service exceptions from Route53 service.</p>
 *
 *
 * @public
 */
export class ListGeoLocationsCommand extends $Command
  .classBuilder<
    ListGeoLocationsCommandInput,
    ListGeoLocationsCommandOutput,
    Route53ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSDnsV20130401", "ListGeoLocations", {})
  .n("Route53Client", "ListGeoLocationsCommand")
  .sc(ListGeoLocations)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListGeoLocationsRequest;
      output: ListGeoLocationsResponse;
    };
    sdk: {
      input: ListGeoLocationsCommandInput;
      output: ListGeoLocationsCommandOutput;
    };
  };
}
