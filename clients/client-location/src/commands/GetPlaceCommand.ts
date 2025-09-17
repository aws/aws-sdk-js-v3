// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import {
  GetPlaceRequest,
  GetPlaceRequestFilterSensitiveLog,
  GetPlaceResponse,
  GetPlaceResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_GetPlaceCommand, se_GetPlaceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Finds a place by its unique ID. A <code>PlaceId</code> is returned by other search
 *             operations.</p>
 *          <note>
 *             <p>A PlaceId is valid only if all of the following are the same in the original
 *                 search request and the call to <code>GetPlace</code>.</p>
 *             <ul>
 *                <li>
 *                   <p>Customer Amazon Web Services account</p>
 *                </li>
 *                <li>
 *                   <p>Amazon Web Services Region</p>
 *                </li>
 *                <li>
 *                   <p>Data provider specified in the place index resource</p>
 *                </li>
 *             </ul>
 *          </note>
 *          <note>
 *             <p>If your Place index resource is configured with Grab as your geolocation
 *                 provider and Storage as Intended use, the GetPlace operation is unavailable. For
 *                 more information, see <a href="http://aws.amazon.com/service-terms">AWS service
 *                     terms</a>.</p>
 *          </note>
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
 *  <p>The request was denied because of insufficient access or permissions. Check with an
 *       administrator to verify your permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed to process because of an unknown server error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource that you've entered was not found in your AWS account.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because of request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to meet the constraints specified by the AWS service. </p>
 *
 * @throws {@link LocationServiceException}
 * <p>Base exception class for all service exceptions from Location service.</p>
 *
 *
 * @public
 */
export class GetPlaceCommand extends $Command
  .classBuilder<
    GetPlaceCommandInput,
    GetPlaceCommandOutput,
    LocationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LocationClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("LocationService", "GetPlace", {})
  .n("LocationClient", "GetPlaceCommand")
  .f(GetPlaceRequestFilterSensitiveLog, GetPlaceResponseFilterSensitiveLog)
  .ser(se_GetPlaceCommand)
  .de(de_GetPlaceCommand)
  .build() {
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
