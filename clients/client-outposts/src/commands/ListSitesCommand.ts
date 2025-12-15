// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListSitesInput, ListSitesOutput } from "../models/models_0";
import type { OutpostsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OutpostsClient";
import { ListSites$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSitesCommand}.
 */
export interface ListSitesCommandInput extends ListSitesInput {}
/**
 * @public
 *
 * The output of {@link ListSitesCommand}.
 */
export interface ListSitesCommandOutput extends ListSitesOutput, __MetadataBearer {}

/**
 * <p>Lists the Outpost sites for your Amazon Web Services account. Use filters to return specific
 *       results.</p>
 *          <p>Use filters to return specific results. If you specify multiple filters, the results include only the resources that match
 *  all of the specified filters. For a filter where you can specify multiple values, the results include
 *  items that match any of the values that you specify for the filter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OutpostsClient, ListSitesCommand } from "@aws-sdk/client-outposts"; // ES Modules import
 * // const { OutpostsClient, ListSitesCommand } = require("@aws-sdk/client-outposts"); // CommonJS import
 * // import type { OutpostsClientConfig } from "@aws-sdk/client-outposts";
 * const config = {}; // type is OutpostsClientConfig
 * const client = new OutpostsClient(config);
 * const input = { // ListSitesInput
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   OperatingAddressCountryCodeFilter: [ // CountryCodeList
 *     "STRING_VALUE",
 *   ],
 *   OperatingAddressStateOrRegionFilter: [ // StateOrRegionList
 *     "STRING_VALUE",
 *   ],
 *   OperatingAddressCityFilter: [ // CityList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new ListSitesCommand(input);
 * const response = await client.send(command);
 * // { // ListSitesOutput
 * //   Sites: [ // siteListDefinition
 * //     { // Site
 * //       SiteId: "STRING_VALUE",
 * //       AccountId: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       SiteArn: "STRING_VALUE",
 * //       Notes: "STRING_VALUE",
 * //       OperatingAddressCountryCode: "STRING_VALUE",
 * //       OperatingAddressStateOrRegion: "STRING_VALUE",
 * //       OperatingAddressCity: "STRING_VALUE",
 * //       RackPhysicalProperties: { // RackPhysicalProperties
 * //         PowerDrawKva: "POWER_5_KVA" || "POWER_10_KVA" || "POWER_15_KVA" || "POWER_30_KVA",
 * //         PowerPhase: "SINGLE_PHASE" || "THREE_PHASE",
 * //         PowerConnector: "L6_30P" || "IEC309" || "AH530P7W" || "AH532P6W" || "CS8365C",
 * //         PowerFeedDrop: "ABOVE_RACK" || "BELOW_RACK",
 * //         UplinkGbps: "UPLINK_1G" || "UPLINK_10G" || "UPLINK_40G" || "UPLINK_100G",
 * //         UplinkCount: "UPLINK_COUNT_1" || "UPLINK_COUNT_2" || "UPLINK_COUNT_3" || "UPLINK_COUNT_4" || "UPLINK_COUNT_5" || "UPLINK_COUNT_6" || "UPLINK_COUNT_7" || "UPLINK_COUNT_8" || "UPLINK_COUNT_12" || "UPLINK_COUNT_16",
 * //         FiberOpticCableType: "SINGLE_MODE" || "MULTI_MODE",
 * //         OpticalStandard: "OPTIC_10GBASE_SR" || "OPTIC_10GBASE_IR" || "OPTIC_10GBASE_LR" || "OPTIC_40GBASE_SR" || "OPTIC_40GBASE_ESR" || "OPTIC_40GBASE_IR4_LR4L" || "OPTIC_40GBASE_LR4" || "OPTIC_100GBASE_SR4" || "OPTIC_100GBASE_CWDM4" || "OPTIC_100GBASE_LR4" || "OPTIC_100G_PSM4_MSA" || "OPTIC_1000BASE_LX" || "OPTIC_1000BASE_SX",
 * //         MaximumSupportedWeightLbs: "NO_LIMIT" || "MAX_1400_LBS" || "MAX_1600_LBS" || "MAX_1800_LBS" || "MAX_2000_LBS",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSitesCommandInput - {@link ListSitesCommandInput}
 * @returns {@link ListSitesCommandOutput}
 * @see {@link ListSitesCommandInput} for command's `input` shape.
 * @see {@link ListSitesCommandOutput} for command's `response` shape.
 * @see {@link OutpostsClientResolvedConfig | config} for OutpostsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have permission to perform this operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A parameter is not valid.</p>
 *
 * @throws {@link OutpostsServiceException}
 * <p>Base exception class for all service exceptions from Outposts service.</p>
 *
 *
 * @public
 */
export class ListSitesCommand extends $Command
  .classBuilder<
    ListSitesCommandInput,
    ListSitesCommandOutput,
    OutpostsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OutpostsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("OutpostsOlafService", "ListSites", {})
  .n("OutpostsClient", "ListSitesCommand")
  .sc(ListSites$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSitesInput;
      output: ListSitesOutput;
    };
    sdk: {
      input: ListSitesCommandInput;
      output: ListSitesCommandOutput;
    };
  };
}
