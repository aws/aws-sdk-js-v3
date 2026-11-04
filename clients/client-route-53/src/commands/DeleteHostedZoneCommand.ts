// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteHostedZoneRequest, DeleteHostedZoneResponse } from "../models/models_0";
import { DeleteHostedZone$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteHostedZoneCommand}.
 */
export interface DeleteHostedZoneCommandInput extends DeleteHostedZoneRequest {}
/**
 * @public
 *
 * The output of {@link DeleteHostedZoneCommand}.
 */
export interface DeleteHostedZoneCommandOutput extends DeleteHostedZoneResponse, __MetadataBearer {}

/**
 * Deletes a hosted zone.
 *
 * If the hosted zone was created by another service, such as Cloud Map, see [Deleting Public Hosted Zones That Were Created by Another Service](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DeleteHostedZone.html#delete-public-hosted-zone-created-by-another-service) in the *Amazon Route 53 Developer Guide* for information about how to delete it. (The process is the same for public and private hosted zones that were created by another service.)
 *
 * If you want to keep your domain registration but you want to stop routing internet traffic to your website or web application, we recommend that you delete resource record sets in the hosted zone instead of deleting the hosted zone.
 *
 * > **Important:** If you delete a hosted zone, you can't undelete it. You must create a new hosted zone and update the name servers for your domain registration, which can require up to 48 hours to take effect. (If you delegated responsibility for a subdomain to a hosted zone and you delete the child hosted zone, you must update the name servers in the parent hosted zone.) In addition, if you delete a hosted zone, someone could hijack the domain and route traffic to their own resources using your domain name.
 *
 * If you want to avoid the monthly charge for the hosted zone, you can transfer DNS service for the domain to a free DNS service. When you transfer DNS service, you have to update the name servers for the domain registration. If the domain is registered with Route 53, see [UpdateDomainNameservers](https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_UpdateDomainNameservers.html) for information about how to replace Route 53 name servers with name servers for the new DNS service. If the domain is registered with another registrar, use the method provided by the registrar to update name servers for the domain registration. For more information, perform an internet search on "free DNS service."
 *
 * You can delete a hosted zone only if it contains only the default SOA and NS records and has DNSSEC signing disabled. If the hosted zone contains other records or has DNSSEC enabled, you must delete the records and disable DNSSEC before deletion. Attempting to delete a hosted zone with additional records or DNSSEC enabled returns a `HostedZoneNotEmpty` error. For information about deleting records, see [ChangeResourceRecordSets](https://docs.aws.amazon.com/Route53/latest/APIReference/API_ChangeResourceRecordSets.html).
 *
 * To verify that the hosted zone has been deleted, do one of the following:
 *
 * - Use the `GetHostedZone` action to request information about the hosted zone.
 * - Use the `ListHostedZones` action to get a list of the hosted zones associated with the current Amazon Web Services account.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, DeleteHostedZoneCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, DeleteHostedZoneCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * // import type { Route53ClientConfig } from "@aws-sdk/client-route-53";
 * const config = {}; // type is Route53ClientConfig
 * const client = new Route53Client(config);
 * const input = { // DeleteHostedZoneRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new DeleteHostedZoneCommand(input);
 * const response = await client.send(command);
 * // { // DeleteHostedZoneResponse
 * //   ChangeInfo: { // ChangeInfo
 * //     Id: "STRING_VALUE", // required
 * //     Status: "PENDING" || "INSYNC", // required
 * //     SubmittedAt: new Date("TIMESTAMP"), // required
 * //     Comment: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteHostedZoneCommandInput - {@link DeleteHostedZoneCommandInput}
 * @returns {@link DeleteHostedZoneCommandOutput}
 * @see {@link DeleteHostedZoneCommandInput} for command's `input` shape.
 * @see {@link DeleteHostedZoneCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link HostedZoneNotEmpty} (client fault)
 *
 * The hosted zone contains resource records that are not SOA or NS records.
 *
 * @throws {@link InvalidDomainName} (client fault)
 *
 * The specified domain name is not valid.
 *
 * @throws {@link InvalidInput} (client fault)
 *
 * The input is not valid.
 *
 * @throws {@link NoSuchHostedZone} (client fault)
 *
 * No hosted zone exists with the ID that you specified.
 *
 * @throws {@link PriorRequestNotComplete} (client fault)
 *
 * If Amazon Route 53 can't process a request before the next request arrives, it will reject subsequent requests for the same hosted zone and return an `HTTP 400 error` (`Bad request`). If Route 53 returns this error repeatedly for the same request, we recommend that you wait, in intervals of increasing duration, before you try the request again.
 *
 * @throws {@link Route53ServiceException}
 *
 * Base exception class for all service exceptions from Route53 service.
 *
 * @public
 */
export class DeleteHostedZoneCommand extends command<DeleteHostedZoneCommandInput, DeleteHostedZoneCommandOutput>(
  _ep0,
  _mw0,
  "DeleteHostedZone",
  DeleteHostedZone$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteHostedZoneRequest;
      output: DeleteHostedZoneResponse;
    };
    sdk: {
      input: DeleteHostedZoneCommandInput;
      output: DeleteHostedZoneCommandOutput;
    };
  };
}
