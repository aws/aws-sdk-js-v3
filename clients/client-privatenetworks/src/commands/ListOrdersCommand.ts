// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListOrdersRequest, ListOrdersResponse, ListOrdersResponseFilterSensitiveLog } from "../models/models_0";
import { PrivateNetworksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PrivateNetworksClient";
import { de_ListOrdersCommand, se_ListOrdersCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListOrdersCommand}.
 */
export interface ListOrdersCommandInput extends ListOrdersRequest {}
/**
 * @public
 *
 * The output of {@link ListOrdersCommand}.
 */
export interface ListOrdersCommandOutput extends ListOrdersResponse, __MetadataBearer {}

/**
 * <p>Lists orders. Add filters to your request to return a more specific list of results.
 *             Use filters to match the Amazon Resource Name (ARN) of the network site or the status of
 *             the order.</p>
 *          <p>If you specify multiple filters, filters are joined with an OR, and the request
 * returns results that match all of the specified filters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PrivateNetworksClient, ListOrdersCommand } from "@aws-sdk/client-privatenetworks"; // ES Modules import
 * // const { PrivateNetworksClient, ListOrdersCommand } = require("@aws-sdk/client-privatenetworks"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new PrivateNetworksClient(config);
 * const input = { // ListOrdersRequest
 *   networkArn: "STRING_VALUE", // required
 *   startToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   filters: { // OrderFilters
 *     "<keys>": [ // OrderFilterValues
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new ListOrdersCommand(input);
 * const response = await client.send(command);
 * // { // ListOrdersResponse
 * //   orders: [ // OrderList
 * //     { // Order
 * //       orderArn: "STRING_VALUE",
 * //       shippingAddress: { // Address
 * //         city: "STRING_VALUE", // required
 * //         company: "STRING_VALUE",
 * //         country: "STRING_VALUE", // required
 * //         name: "STRING_VALUE", // required
 * //         phoneNumber: "STRING_VALUE",
 * //         postalCode: "STRING_VALUE", // required
 * //         stateOrProvince: "STRING_VALUE", // required
 * //         street1: "STRING_VALUE", // required
 * //         street2: "STRING_VALUE",
 * //         street3: "STRING_VALUE",
 * //         emailAddress: "STRING_VALUE",
 * //       },
 * //       networkArn: "STRING_VALUE",
 * //       networkSiteArn: "STRING_VALUE",
 * //       trackingInformation: [ // TrackingInformationList
 * //         { // TrackingInformation
 * //           trackingNumber: "STRING_VALUE",
 * //         },
 * //       ],
 * //       acknowledgmentStatus: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       orderedResources: [ // OrderedResourceDefinitions
 * //         { // OrderedResourceDefinition
 * //           type: "STRING_VALUE", // required
 * //           count: Number("int"), // required
 * //           commitmentConfiguration: { // CommitmentConfiguration
 * //             commitmentLength: "STRING_VALUE", // required
 * //             automaticRenewal: true || false, // required
 * //           },
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListOrdersCommandInput - {@link ListOrdersCommandInput}
 * @returns {@link ListOrdersCommandOutput}
 * @see {@link ListOrdersCommandInput} for command's `input` shape.
 * @see {@link ListOrdersCommandOutput} for command's `response` shape.
 * @see {@link PrivateNetworksClientResolvedConfig | config} for PrivateNetworksClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Information about an internal error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource was not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed validation.</p>
 *
 * @throws {@link PrivateNetworksServiceException}
 * <p>Base exception class for all service exceptions from PrivateNetworks service.</p>
 *
 * @public
 */
export class ListOrdersCommand extends $Command
  .classBuilder<
    ListOrdersCommandInput,
    ListOrdersCommandOutput,
    PrivateNetworksClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PrivateNetworksClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("E5GNetworkControllerLambda", "ListOrders", {})
  .n("PrivateNetworksClient", "ListOrdersCommand")
  .f(void 0, ListOrdersResponseFilterSensitiveLog)
  .ser(se_ListOrdersCommand)
  .de(de_ListOrdersCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListOrdersRequest;
      output: ListOrdersResponse;
    };
    sdk: {
      input: ListOrdersCommandInput;
      output: ListOrdersCommandOutput;
    };
  };
}
