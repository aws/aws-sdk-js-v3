// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListNetworkResourcesRequest,
  ListNetworkResourcesResponse,
  ListNetworkResourcesResponseFilterSensitiveLog,
} from "../models/models_0";
import { PrivateNetworksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PrivateNetworksClient";
import { de_ListNetworkResourcesCommand, se_ListNetworkResourcesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListNetworkResourcesCommand}.
 */
export interface ListNetworkResourcesCommandInput extends ListNetworkResourcesRequest {}
/**
 * @public
 *
 * The output of {@link ListNetworkResourcesCommand}.
 */
export interface ListNetworkResourcesCommandOutput extends ListNetworkResourcesResponse, __MetadataBearer {}

/**
 * <p>Lists network resources. Add filters to your request to return a more specific list of
 *             results. Use filters to match the Amazon Resource Name (ARN) of an order or the status
 *             of network resources.</p>
 *          <p>If you specify multiple filters, filters are joined with an OR, and the request
 * returns results that match all of the specified filters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PrivateNetworksClient, ListNetworkResourcesCommand } from "@aws-sdk/client-privatenetworks"; // ES Modules import
 * // const { PrivateNetworksClient, ListNetworkResourcesCommand } = require("@aws-sdk/client-privatenetworks"); // CommonJS import
 * const client = new PrivateNetworksClient(config);
 * const input = { // ListNetworkResourcesRequest
 *   filters: { // NetworkResourceFilters
 *     "<keys>": [ // NetworkResourceFilterValues
 *       "STRING_VALUE",
 *     ],
 *   },
 *   networkArn: "STRING_VALUE", // required
 *   startToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListNetworkResourcesCommand(input);
 * const response = await client.send(command);
 * // { // ListNetworkResourcesResponse
 * //   networkResources: [ // NetworkResourceList
 * //     { // NetworkResource
 * //       networkResourceArn: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       type: "STRING_VALUE",
 * //       status: "STRING_VALUE",
 * //       statusReason: "STRING_VALUE",
 * //       vendor: "STRING_VALUE",
 * //       model: "STRING_VALUE",
 * //       serialNumber: "STRING_VALUE",
 * //       health: "STRING_VALUE",
 * //       networkArn: "STRING_VALUE",
 * //       networkSiteArn: "STRING_VALUE",
 * //       orderArn: "STRING_VALUE",
 * //       attributes: [ // NameValuePairs
 * //         { // NameValuePair
 * //           name: "STRING_VALUE", // required
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       position: { // Position
 * //         latitude: Number("double"),
 * //         longitude: Number("double"),
 * //         elevation: Number("double"),
 * //         elevationUnit: "STRING_VALUE",
 * //         elevationReference: "STRING_VALUE",
 * //       },
 * //       createdAt: new Date("TIMESTAMP"),
 * //       returnInformation: { // ReturnInformation
 * //         shippingAddress: { // Address
 * //           city: "STRING_VALUE", // required
 * //           company: "STRING_VALUE",
 * //           country: "STRING_VALUE", // required
 * //           name: "STRING_VALUE", // required
 * //           phoneNumber: "STRING_VALUE",
 * //           postalCode: "STRING_VALUE", // required
 * //           stateOrProvince: "STRING_VALUE", // required
 * //           street1: "STRING_VALUE", // required
 * //           street2: "STRING_VALUE",
 * //           street3: "STRING_VALUE",
 * //           emailAddress: "STRING_VALUE",
 * //         },
 * //         returnReason: "STRING_VALUE",
 * //         replacementOrderArn: "STRING_VALUE",
 * //         shippingLabel: "STRING_VALUE",
 * //       },
 * //       commitmentInformation: { // CommitmentInformation
 * //         commitmentConfiguration: { // CommitmentConfiguration
 * //           commitmentLength: "STRING_VALUE", // required
 * //           automaticRenewal: true || false, // required
 * //         },
 * //         startAt: new Date("TIMESTAMP"),
 * //         expiresOn: new Date("TIMESTAMP"),
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListNetworkResourcesCommandInput - {@link ListNetworkResourcesCommandInput}
 * @returns {@link ListNetworkResourcesCommandOutput}
 * @see {@link ListNetworkResourcesCommandInput} for command's `input` shape.
 * @see {@link ListNetworkResourcesCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class ListNetworkResourcesCommand extends $Command
  .classBuilder<
    ListNetworkResourcesCommandInput,
    ListNetworkResourcesCommandOutput,
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
  .s("E5GNetworkControllerLambda", "ListNetworkResources", {})
  .n("PrivateNetworksClient", "ListNetworkResourcesCommand")
  .f(void 0, ListNetworkResourcesResponseFilterSensitiveLog)
  .ser(se_ListNetworkResourcesCommand)
  .de(de_ListNetworkResourcesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListNetworkResourcesRequest;
      output: ListNetworkResourcesResponse;
    };
    sdk: {
      input: ListNetworkResourcesCommandInput;
      output: ListNetworkResourcesCommandOutput;
    };
  };
}
