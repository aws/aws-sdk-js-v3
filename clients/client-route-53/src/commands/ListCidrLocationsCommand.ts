// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListCidrLocationsRequest, ListCidrLocationsResponse } from "../models/models_0";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { ListCidrLocations } from "../schemas/schemas_13_Cidr";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCidrLocationsCommand}.
 */
export interface ListCidrLocationsCommandInput extends ListCidrLocationsRequest {}
/**
 * @public
 *
 * The output of {@link ListCidrLocationsCommand}.
 */
export interface ListCidrLocationsCommandOutput extends ListCidrLocationsResponse, __MetadataBearer {}

/**
 * <p>Returns a paginated list of CIDR locations for the given collection (metadata only,
 * 			does not include CIDR blocks).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, ListCidrLocationsCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, ListCidrLocationsCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * // import type { Route53ClientConfig } from "@aws-sdk/client-route-53";
 * const config = {}; // type is Route53ClientConfig
 * const client = new Route53Client(config);
 * const input = { // ListCidrLocationsRequest
 *   CollectionId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListCidrLocationsCommand(input);
 * const response = await client.send(command);
 * // { // ListCidrLocationsResponse
 * //   NextToken: "STRING_VALUE",
 * //   CidrLocations: [ // LocationSummaries
 * //     { // LocationSummary
 * //       LocationName: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListCidrLocationsCommandInput - {@link ListCidrLocationsCommandInput}
 * @returns {@link ListCidrLocationsCommandOutput}
 * @see {@link ListCidrLocationsCommandInput} for command's `input` shape.
 * @see {@link ListCidrLocationsCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
 *
 * @throws {@link NoSuchCidrCollectionException} (client fault)
 *  <p>The CIDR collection you specified, doesn't exist.</p>
 *
 * @throws {@link Route53ServiceException}
 * <p>Base exception class for all service exceptions from Route53 service.</p>
 *
 *
 * @public
 */
export class ListCidrLocationsCommand extends $Command
  .classBuilder<
    ListCidrLocationsCommandInput,
    ListCidrLocationsCommandOutput,
    Route53ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSDnsV20130401", "ListCidrLocations", {})
  .n("Route53Client", "ListCidrLocationsCommand")
  .sc(ListCidrLocations)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCidrLocationsRequest;
      output: ListCidrLocationsResponse;
    };
    sdk: {
      input: ListCidrLocationsCommandInput;
      output: ListCidrLocationsCommandOutput;
    };
  };
}
