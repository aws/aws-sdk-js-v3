// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import type { ListPlaceIndexesRequest, ListPlaceIndexesResponse } from "../models/models_0";
import { ListPlaceIndexes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPlaceIndexesCommand}.
 */
export interface ListPlaceIndexesCommandInput extends ListPlaceIndexesRequest {}
/**
 * @public
 *
 * The output of {@link ListPlaceIndexesCommand}.
 */
export interface ListPlaceIndexesCommandOutput extends ListPlaceIndexesResponse, __MetadataBearer {}

/**
 * <important> <p>This operation is no longer current and may be deprecated in the future. We recommend you upgrade to the Places API V2 unless you require Grab data.</p> <ul> <li> <p> <code>ListPlaceIndexes</code> is part of a previous Amazon Location Service Places API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2).</p> </li> <li> <p>The Places API version 2 has a simplified interface that can be used without creating or managing place index resources.</p> </li> <li> <p>If you are using an Amazon Web Services SDK or the Amazon Web Services CLI, note that the Places API version 2 is found under <code>geo-places</code> or <code>geo_places</code>, not under <code>location</code>.</p> </li> <li> <p>Since Grab is not yet fully supported in Places API version 2, we recommend you continue using API version 1 when using Grab.</p> </li> <li> <p>Start your version 2 API journey with the Places V2 <a href="/location/latest/APIReference/API_Operations_Amazon_Location_Service_Places_V2.html">API Reference</a> or the <a href="/location/latest/developerguide/places.html">Developer Guide</a>.</p> </li> </ul> </important> <p>Lists place index resources in your Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, ListPlaceIndexesCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, ListPlaceIndexesCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * // import type { LocationClientConfig } from "@aws-sdk/client-location";
 * const config = {}; // type is LocationClientConfig
 * const client = new LocationClient(config);
 * const input = { // ListPlaceIndexesRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListPlaceIndexesCommand(input);
 * const response = await client.send(command);
 * // { // ListPlaceIndexesResponse
 * //   Entries: [ // ListPlaceIndexesResponseEntryList // required
 * //     { // ListPlaceIndexesResponseEntry
 * //       IndexName: "STRING_VALUE", // required
 * //       Description: "STRING_VALUE", // required
 * //       DataSource: "STRING_VALUE", // required
 * //       PricingPlan: "STRING_VALUE",
 * //       CreateTime: new Date("TIMESTAMP"), // required
 * //       UpdateTime: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPlaceIndexesCommandInput - {@link ListPlaceIndexesCommandInput}
 * @returns {@link ListPlaceIndexesCommandOutput}
 * @see {@link ListPlaceIndexesCommandInput} for command's `input` shape.
 * @see {@link ListPlaceIndexesCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because of insufficient access or permissions. Check with an administrator to verify your permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed to process because of an unknown server error, exception, or failure.</p>
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
export class ListPlaceIndexesCommand extends $Command
  .classBuilder<
    ListPlaceIndexesCommandInput,
    ListPlaceIndexesCommandOutput,
    LocationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LocationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LocationService", "ListPlaceIndexes", {})
  .n("LocationClient", "ListPlaceIndexesCommand")
  .sc(ListPlaceIndexes$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPlaceIndexesRequest;
      output: ListPlaceIndexesResponse;
    };
    sdk: {
      input: ListPlaceIndexesCommandInput;
      output: ListPlaceIndexesCommandOutput;
    };
  };
}
