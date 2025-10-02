// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetGeoLocationRequest, GetGeoLocationResponse } from "../models/models_0";
import { de_GetGeoLocationCommand, se_GetGeoLocationCommand } from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetGeoLocationCommand}.
 */
export interface GetGeoLocationCommandInput extends GetGeoLocationRequest {}
/**
 * @public
 *
 * The output of {@link GetGeoLocationCommand}.
 */
export interface GetGeoLocationCommandOutput extends GetGeoLocationResponse, __MetadataBearer {}

/**
 * <p>Gets information about whether a specified geographic location is supported for Amazon
 * 			Route 53 geolocation resource record sets.</p>
 *          <p>Route 53 does not perform authorization for this API because it retrieves information
 * 			that is already available to the public.</p>
 *          <p>Use the following syntax to determine whether a continent is supported for
 * 			geolocation:</p>
 *          <p>
 *             <code>GET /2013-04-01/geolocation?continentcode=<i>two-letter abbreviation for
 * 					a continent</i>
 *             </code>
 *          </p>
 *          <p>Use the following syntax to determine whether a country is supported for
 * 			geolocation:</p>
 *          <p>
 *             <code>GET /2013-04-01/geolocation?countrycode=<i>two-character country
 * 					code</i>
 *             </code>
 *          </p>
 *          <p>Use the following syntax to determine whether a subdivision of a country is supported
 * 			for geolocation:</p>
 *          <p>
 *             <code>GET /2013-04-01/geolocation?countrycode=<i>two-character country
 * 					code</i>&subdivisioncode=<i>subdivision
 * 			code</i>
 *             </code>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, GetGeoLocationCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, GetGeoLocationCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * // import type { Route53ClientConfig } from "@aws-sdk/client-route-53";
 * const config = {}; // type is Route53ClientConfig
 * const client = new Route53Client(config);
 * const input = { // GetGeoLocationRequest
 *   ContinentCode: "STRING_VALUE",
 *   CountryCode: "STRING_VALUE",
 *   SubdivisionCode: "STRING_VALUE",
 * };
 * const command = new GetGeoLocationCommand(input);
 * const response = await client.send(command);
 * // { // GetGeoLocationResponse
 * //   GeoLocationDetails: { // GeoLocationDetails
 * //     ContinentCode: "STRING_VALUE",
 * //     ContinentName: "STRING_VALUE",
 * //     CountryCode: "STRING_VALUE",
 * //     CountryName: "STRING_VALUE",
 * //     SubdivisionCode: "STRING_VALUE",
 * //     SubdivisionName: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetGeoLocationCommandInput - {@link GetGeoLocationCommandInput}
 * @returns {@link GetGeoLocationCommandOutput}
 * @see {@link GetGeoLocationCommandInput} for command's `input` shape.
 * @see {@link GetGeoLocationCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
 *
 * @throws {@link NoSuchGeoLocation} (client fault)
 *  <p>Amazon Route 53 doesn't support the specified geographic location. For a list of
 * 			supported geolocation codes, see the <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_GeoLocation.html">GeoLocation</a> data
 * 			type.</p>
 *
 * @throws {@link Route53ServiceException}
 * <p>Base exception class for all service exceptions from Route53 service.</p>
 *
 *
 * @public
 */
export class GetGeoLocationCommand extends $Command
  .classBuilder<
    GetGeoLocationCommandInput,
    GetGeoLocationCommandOutput,
    Route53ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSDnsV20130401", "GetGeoLocation", {})
  .n("Route53Client", "GetGeoLocationCommand")
  .f(void 0, void 0)
  .ser(se_GetGeoLocationCommand)
  .de(de_GetGeoLocationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetGeoLocationRequest;
      output: GetGeoLocationResponse;
    };
    sdk: {
      input: GetGeoLocationCommandInput;
      output: GetGeoLocationCommandOutput;
    };
  };
}
