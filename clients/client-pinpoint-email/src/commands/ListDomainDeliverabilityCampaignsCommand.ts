// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  ListDomainDeliverabilityCampaignsRequest,
  ListDomainDeliverabilityCampaignsResponse,
} from "../models/models_0";
import type { PinpointEmailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointEmailClient";
import { ListDomainDeliverabilityCampaigns } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDomainDeliverabilityCampaignsCommand}.
 */
export interface ListDomainDeliverabilityCampaignsCommandInput extends ListDomainDeliverabilityCampaignsRequest {}
/**
 * @public
 *
 * The output of {@link ListDomainDeliverabilityCampaignsCommand}.
 */
export interface ListDomainDeliverabilityCampaignsCommandOutput
  extends ListDomainDeliverabilityCampaignsResponse,
    __MetadataBearer {}

/**
 * <p>Retrieve deliverability data for all the campaigns that used a specific domain to send
 *             email during a specified time range. This data is available for a domain only if you
 *             enabled the Deliverability dashboard (<code>PutDeliverabilityDashboardOption</code> operation)
 *             for the domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointEmailClient, ListDomainDeliverabilityCampaignsCommand } from "@aws-sdk/client-pinpoint-email"; // ES Modules import
 * // const { PinpointEmailClient, ListDomainDeliverabilityCampaignsCommand } = require("@aws-sdk/client-pinpoint-email"); // CommonJS import
 * // import type { PinpointEmailClientConfig } from "@aws-sdk/client-pinpoint-email";
 * const config = {}; // type is PinpointEmailClientConfig
 * const client = new PinpointEmailClient(config);
 * const input = { // ListDomainDeliverabilityCampaignsRequest
 *   StartDate: new Date("TIMESTAMP"), // required
 *   EndDate: new Date("TIMESTAMP"), // required
 *   SubscribedDomain: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   PageSize: Number("int"),
 * };
 * const command = new ListDomainDeliverabilityCampaignsCommand(input);
 * const response = await client.send(command);
 * // { // ListDomainDeliverabilityCampaignsResponse
 * //   DomainDeliverabilityCampaigns: [ // DomainDeliverabilityCampaignList // required
 * //     { // DomainDeliverabilityCampaign
 * //       CampaignId: "STRING_VALUE",
 * //       ImageUrl: "STRING_VALUE",
 * //       Subject: "STRING_VALUE",
 * //       FromAddress: "STRING_VALUE",
 * //       SendingIps: [ // IpList
 * //         "STRING_VALUE",
 * //       ],
 * //       FirstSeenDateTime: new Date("TIMESTAMP"),
 * //       LastSeenDateTime: new Date("TIMESTAMP"),
 * //       InboxCount: Number("long"),
 * //       SpamCount: Number("long"),
 * //       ReadRate: Number("double"),
 * //       DeleteRate: Number("double"),
 * //       ReadDeleteRate: Number("double"),
 * //       ProjectedVolume: Number("long"),
 * //       Esps: [ // Esps
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDomainDeliverabilityCampaignsCommandInput - {@link ListDomainDeliverabilityCampaignsCommandInput}
 * @returns {@link ListDomainDeliverabilityCampaignsCommandOutput}
 * @see {@link ListDomainDeliverabilityCampaignsCommandInput} for command's `input` shape.
 * @see {@link ListDomainDeliverabilityCampaignsCommandOutput} for command's `response` shape.
 * @see {@link PinpointEmailClientResolvedConfig | config} for PinpointEmailClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource you attempted to access doesn't exist.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Too many requests have been made to the operation.</p>
 *
 * @throws {@link PinpointEmailServiceException}
 * <p>Base exception class for all service exceptions from PinpointEmail service.</p>
 *
 *
 * @public
 */
export class ListDomainDeliverabilityCampaignsCommand extends $Command
  .classBuilder<
    ListDomainDeliverabilityCampaignsCommandInput,
    ListDomainDeliverabilityCampaignsCommandOutput,
    PinpointEmailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointEmailClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonPinpointEmailService", "ListDomainDeliverabilityCampaigns", {})
  .n("PinpointEmailClient", "ListDomainDeliverabilityCampaignsCommand")
  .sc(ListDomainDeliverabilityCampaigns)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDomainDeliverabilityCampaignsRequest;
      output: ListDomainDeliverabilityCampaignsResponse;
    };
    sdk: {
      input: ListDomainDeliverabilityCampaignsCommandInput;
      output: ListDomainDeliverabilityCampaignsCommandOutput;
    };
  };
}
