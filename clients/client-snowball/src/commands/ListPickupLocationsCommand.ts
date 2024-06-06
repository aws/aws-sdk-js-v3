// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListPickupLocationsRequest, ListPickupLocationsResult } from "../models/models_0";
import { de_ListPickupLocationsCommand, se_ListPickupLocationsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPickupLocationsCommand}.
 */
export interface ListPickupLocationsCommandInput extends ListPickupLocationsRequest {}
/**
 * @public
 *
 * The output of {@link ListPickupLocationsCommand}.
 */
export interface ListPickupLocationsCommandOutput extends ListPickupLocationsResult, __MetadataBearer {}

/**
 * <p>A list of locations from which the customer can choose to pickup a device.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, ListPickupLocationsCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, ListPickupLocationsCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * const client = new SnowballClient(config);
 * const input = { // ListPickupLocationsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListPickupLocationsCommand(input);
 * const response = await client.send(command);
 * // { // ListPickupLocationsResult
 * //   Addresses: [ // AddressList
 * //     { // Address
 * //       AddressId: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Company: "STRING_VALUE",
 * //       Street1: "STRING_VALUE",
 * //       Street2: "STRING_VALUE",
 * //       Street3: "STRING_VALUE",
 * //       City: "STRING_VALUE",
 * //       StateOrProvince: "STRING_VALUE",
 * //       PrefectureOrDistrict: "STRING_VALUE",
 * //       Landmark: "STRING_VALUE",
 * //       Country: "STRING_VALUE",
 * //       PostalCode: "STRING_VALUE",
 * //       PhoneNumber: "STRING_VALUE",
 * //       IsRestricted: true || false,
 * //       Type: "CUST_PICKUP" || "AWS_SHIP",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPickupLocationsCommandInput - {@link ListPickupLocationsCommandInput}
 * @returns {@link ListPickupLocationsCommandOutput}
 * @see {@link ListPickupLocationsCommandInput} for command's `input` shape.
 * @see {@link ListPickupLocationsCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for SnowballClient's `config` shape.
 *
 * @throws {@link InvalidResourceException} (client fault)
 *  <p>The specified resource can't be found. Check the information you provided in your last
 *       request, and try again.</p>
 *
 * @throws {@link SnowballServiceException}
 * <p>Base exception class for all service exceptions from Snowball service.</p>
 *
 * @public
 * @example To get a list of locations from which the customer can choose to pickup a device.
 * ```javascript
 * // Returns a specified number of Address objects. Each Address is a pickup location address for Snow Family devices.
 * const input = {};
 * const command = new ListPickupLocationsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Addresses": [
 *     {
 *       "AddressId": "ADID1234ab12-3eec-4eb3-9be6-9374c10eb51b",
 *       "City": "Seattle",
 *       "Company": "My Company",
 *       "Country": "US",
 *       "Name": "My Name",
 *       "PhoneNumber": "425-555-5555",
 *       "PostalCode": "98101",
 *       "StateOrProvince": "WA",
 *       "Street1": "123 Main Street"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-get-a-list-of-locations-from-which-the-customer-can-choose-to-pickup-a-device-1482542167627
 * ```
 *
 */
export class ListPickupLocationsCommand extends $Command
  .classBuilder<
    ListPickupLocationsCommandInput,
    ListPickupLocationsCommandOutput,
    SnowballClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SnowballClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIESnowballJobManagementService", "ListPickupLocations", {})
  .n("SnowballClient", "ListPickupLocationsCommand")
  .f(void 0, void 0)
  .ser(se_ListPickupLocationsCommand)
  .de(de_ListPickupLocationsCommand)
  .build() {}
