// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListDomainDeliverabilityCampaignsRequest,
  ListDomainDeliverabilityCampaignsResponse,
} from "../models/models_0";
import { ListDomainDeliverabilityCampaigns$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface ListDomainDeliverabilityCampaignsCommandOutput extends ListDomainDeliverabilityCampaignsResponse, __MetadataBearer {}

/**
 * Retrieve deliverability data for all the campaigns that used a specific domain to send email during a specified time range. This data is available for a domain only if you enabled the Deliverability dashboard for the domain.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, ListDomainDeliverabilityCampaignsCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, ListDomainDeliverabilityCampaignsCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * // import type { SESv2ClientConfig } from "@aws-sdk/client-sesv2";
 * const config = {}; // type is SESv2ClientConfig
 * const client = new SESv2Client(config);
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
 * @see {@link SESv2ClientResolvedConfig | config} for SESv2Client's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The input you provided is invalid.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The resource you attempted to access doesn't exist.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * Too many requests have been made to the operation.
 *
 * @throws {@link SESv2ServiceException}
 *
 * Base exception class for all service exceptions from SESv2 service.
 *
 * @public
 */
export class ListDomainDeliverabilityCampaignsCommand extends command<ListDomainDeliverabilityCampaignsCommandInput, ListDomainDeliverabilityCampaignsCommandOutput>(
  _ep0,
  _mw0,
  "ListDomainDeliverabilityCampaigns",
  ListDomainDeliverabilityCampaigns$
) {
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
