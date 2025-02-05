// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListNetworkSitesRequest, ListNetworkSitesResponse } from "../models/models_0";
import { PrivateNetworksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PrivateNetworksClient";
import { de_ListNetworkSitesCommand, se_ListNetworkSitesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListNetworkSitesCommand}.
 */
export interface ListNetworkSitesCommandInput extends ListNetworkSitesRequest {}
/**
 * @public
 *
 * The output of {@link ListNetworkSitesCommand}.
 */
export interface ListNetworkSitesCommandOutput extends ListNetworkSitesResponse, __MetadataBearer {}

/**
 * <p>Lists network sites. Add filters to your request to return a more specific list of
 *             results. Use filters to match the status of the network site.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PrivateNetworksClient, ListNetworkSitesCommand } from "@aws-sdk/client-privatenetworks"; // ES Modules import
 * // const { PrivateNetworksClient, ListNetworkSitesCommand } = require("@aws-sdk/client-privatenetworks"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new PrivateNetworksClient(config);
 * const input = { // ListNetworkSitesRequest
 *   filters: { // NetworkSiteFilters
 *     "<keys>": [ // NetworkSiteFilterValues
 *       "STRING_VALUE",
 *     ],
 *   },
 *   networkArn: "STRING_VALUE", // required
 *   startToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListNetworkSitesCommand(input);
 * const response = await client.send(command);
 * // { // ListNetworkSitesResponse
 * //   networkSites: [ // NetworkSiteList
 * //     { // NetworkSite
 * //       networkSiteArn: "STRING_VALUE", // required
 * //       networkSiteName: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       status: "STRING_VALUE", // required
 * //       statusReason: "STRING_VALUE",
 * //       networkArn: "STRING_VALUE", // required
 * //       pendingPlan: { // SitePlan
 * //         resourceDefinitions: [ // NetworkResourceDefinitions
 * //           { // NetworkResourceDefinition
 * //             type: "STRING_VALUE", // required
 * //             options: [ // Options
 * //               { // NameValuePair
 * //                 name: "STRING_VALUE", // required
 * //                 value: "STRING_VALUE",
 * //               },
 * //             ],
 * //             count: Number("int"), // required
 * //           },
 * //         ],
 * //         options: [
 * //           {
 * //             name: "STRING_VALUE", // required
 * //             value: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //       currentPlan: {
 * //         resourceDefinitions: [
 * //           {
 * //             type: "STRING_VALUE", // required
 * //             options: [
 * //               {
 * //                 name: "STRING_VALUE", // required
 * //                 value: "STRING_VALUE",
 * //               },
 * //             ],
 * //             count: Number("int"), // required
 * //           },
 * //         ],
 * //         options: [
 * //           {
 * //             name: "STRING_VALUE", // required
 * //             value: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //       createdAt: new Date("TIMESTAMP"),
 * //       availabilityZone: "STRING_VALUE",
 * //       availabilityZoneId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListNetworkSitesCommandInput - {@link ListNetworkSitesCommandInput}
 * @returns {@link ListNetworkSitesCommandOutput}
 * @see {@link ListNetworkSitesCommandInput} for command's `input` shape.
 * @see {@link ListNetworkSitesCommandOutput} for command's `response` shape.
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
export class ListNetworkSitesCommand extends $Command
  .classBuilder<
    ListNetworkSitesCommandInput,
    ListNetworkSitesCommandOutput,
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
  .s("E5GNetworkControllerLambda", "ListNetworkSites", {})
  .n("PrivateNetworksClient", "ListNetworkSitesCommand")
  .f(void 0, void 0)
  .ser(se_ListNetworkSitesCommand)
  .de(de_ListNetworkSitesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListNetworkSitesRequest;
      output: ListNetworkSitesResponse;
    };
    sdk: {
      input: ListNetworkSitesCommandInput;
      output: ListNetworkSitesCommandOutput;
    };
  };
}
