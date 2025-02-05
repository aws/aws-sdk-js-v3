// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import {
  SearchPlaceIndexForPositionRequest,
  SearchPlaceIndexForPositionRequestFilterSensitiveLog,
  SearchPlaceIndexForPositionResponse,
  SearchPlaceIndexForPositionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  de_SearchPlaceIndexForPositionCommand,
  se_SearchPlaceIndexForPositionCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SearchPlaceIndexForPositionCommand}.
 */
export interface SearchPlaceIndexForPositionCommandInput extends SearchPlaceIndexForPositionRequest {}
/**
 * @public
 *
 * The output of {@link SearchPlaceIndexForPositionCommand}.
 */
export interface SearchPlaceIndexForPositionCommandOutput
  extends SearchPlaceIndexForPositionResponse,
    __MetadataBearer {}

/**
 * <p>Reverse geocodes a given coordinate and returns a legible address. Allows you to
 *             search for Places or points of interest near a given position.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, SearchPlaceIndexForPositionCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, SearchPlaceIndexForPositionCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new LocationClient(config);
 * const input = { // SearchPlaceIndexForPositionRequest
 *   IndexName: "STRING_VALUE", // required
 *   Position: [ // Position // required
 *     Number("double"),
 *   ],
 *   MaxResults: Number("int"),
 *   Language: "STRING_VALUE",
 *   Key: "STRING_VALUE",
 * };
 * const command = new SearchPlaceIndexForPositionCommand(input);
 * const response = await client.send(command);
 * // { // SearchPlaceIndexForPositionResponse
 * //   Summary: { // SearchPlaceIndexForPositionSummary
 * //     Position: [ // Position // required
 * //       Number("double"),
 * //     ],
 * //     MaxResults: Number("int"),
 * //     DataSource: "STRING_VALUE", // required
 * //     Language: "STRING_VALUE",
 * //   },
 * //   Results: [ // SearchForPositionResultList // required
 * //     { // SearchForPositionResult
 * //       Place: { // Place
 * //         Label: "STRING_VALUE",
 * //         Geometry: { // PlaceGeometry
 * //           Point: [
 * //             Number("double"),
 * //           ],
 * //         },
 * //         AddressNumber: "STRING_VALUE",
 * //         Street: "STRING_VALUE",
 * //         Neighborhood: "STRING_VALUE",
 * //         Municipality: "STRING_VALUE",
 * //         SubRegion: "STRING_VALUE",
 * //         Region: "STRING_VALUE",
 * //         Country: "STRING_VALUE",
 * //         PostalCode: "STRING_VALUE",
 * //         Interpolated: true || false,
 * //         TimeZone: { // TimeZone
 * //           Name: "STRING_VALUE", // required
 * //           Offset: Number("int"),
 * //         },
 * //         UnitType: "STRING_VALUE",
 * //         UnitNumber: "STRING_VALUE",
 * //         Categories: [ // PlaceCategoryList
 * //           "STRING_VALUE",
 * //         ],
 * //         SupplementalCategories: [ // PlaceSupplementalCategoryList
 * //           "STRING_VALUE",
 * //         ],
 * //         SubMunicipality: "STRING_VALUE",
 * //       },
 * //       Distance: Number("double"), // required
 * //       PlaceId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param SearchPlaceIndexForPositionCommandInput - {@link SearchPlaceIndexForPositionCommandInput}
 * @returns {@link SearchPlaceIndexForPositionCommandOutput}
 * @see {@link SearchPlaceIndexForPositionCommandInput} for command's `input` shape.
 * @see {@link SearchPlaceIndexForPositionCommandOutput} for command's `response` shape.
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
 * @public
 */
export class SearchPlaceIndexForPositionCommand extends $Command
  .classBuilder<
    SearchPlaceIndexForPositionCommandInput,
    SearchPlaceIndexForPositionCommandOutput,
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
  .s("LocationService", "SearchPlaceIndexForPosition", {})
  .n("LocationClient", "SearchPlaceIndexForPositionCommand")
  .f(SearchPlaceIndexForPositionRequestFilterSensitiveLog, SearchPlaceIndexForPositionResponseFilterSensitiveLog)
  .ser(se_SearchPlaceIndexForPositionCommand)
  .de(de_SearchPlaceIndexForPositionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchPlaceIndexForPositionRequest;
      output: SearchPlaceIndexForPositionResponse;
    };
    sdk: {
      input: SearchPlaceIndexForPositionCommandInput;
      output: SearchPlaceIndexForPositionCommandOutput;
    };
  };
}
