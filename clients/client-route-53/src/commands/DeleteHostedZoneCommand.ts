// smithy-typescript generated code
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteHostedZoneRequest, DeleteHostedZoneResponse } from "../models/models_0";
import { de_DeleteHostedZoneCommand, se_DeleteHostedZoneCommand } from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Deletes a hosted zone.</p>
 *          <p>If the hosted zone was created by another service, such as Cloud Map, see
 * 				<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DeleteHostedZone.html#delete-public-hosted-zone-created-by-another-service">Deleting Public Hosted Zones That Were Created by Another Service</a> in the
 * 					<i>Amazon Route 53 Developer Guide</i> for information
 * 			about how to delete it. (The process is the same for public and private hosted zones
 * 			that were created by another service.)</p>
 *          <p>If you want to keep your domain registration but you want to stop routing internet
 * 			traffic to your website or web application, we recommend that you delete resource record
 * 			sets in the hosted zone instead of deleting the hosted zone.</p>
 *          <important>
 *             <p>If you delete a hosted zone, you can't undelete it. You must create a new hosted
 * 				zone and update the name servers for your domain registration, which can require up
 * 				to 48 hours to take effect. (If you delegated responsibility for a subdomain to a
 * 				hosted zone and you delete the child hosted zone, you must update the name servers
 * 				in the parent hosted zone.) In addition, if you delete a hosted zone, someone could
 * 				hijack the domain and route traffic to their own resources using your domain
 * 				name.</p>
 *          </important>
 *          <p>If you want to avoid the monthly charge for the hosted zone, you can transfer DNS
 * 			service for the domain to a free DNS service. When you transfer DNS service, you have to
 * 			update the name servers for the domain registration. If the domain is registered with
 * 				Route 53, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_UpdateDomainNameservers.html">UpdateDomainNameservers</a> for information about how to replace Route 53 name servers with name servers for the new DNS service. If the domain is
 * 			registered with another registrar, use the method provided by the registrar to update
 * 			name servers for the domain registration. For more information, perform an internet
 * 			search on "free DNS service."</p>
 *          <p>You can delete a hosted zone only if it contains only the default SOA and NS records
 * 			and has DNSSEC signing disabled. If the hosted zone contains other records or has DNSSEC
 * 			enabled, you must delete the records and disable DNSSEC before deletion. Attempting to
 * 			delete a hosted zone with additional records or DNSSEC enabled returns a
 * 				<code>HostedZoneNotEmpty</code> error. For information about deleting records, see
 * 				<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_ChangeResourceRecordSets.html">ChangeResourceRecordSets</a>. </p>
 *          <p>To verify that the hosted zone has been deleted, do one of the following:</p>
 *          <ul>
 *             <li>
 *                <p>Use the <code>GetHostedZone</code> action to request information about the
 * 					hosted zone.</p>
 *             </li>
 *             <li>
 *                <p>Use the <code>ListHostedZones</code> action to get a list of the hosted zones
 * 					associated with the current Amazon Web Services account.</p>
 *             </li>
 *          </ul>
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
 *  <p>The hosted zone contains resource records that are not SOA or NS records.</p>
 *
 * @throws {@link InvalidDomainName} (client fault)
 *  <p>The specified domain name is not valid.</p>
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
 *
 * @throws {@link NoSuchHostedZone} (client fault)
 *  <p>No hosted zone exists with the ID that you specified.</p>
 *
 * @throws {@link PriorRequestNotComplete} (client fault)
 *  <p>If Amazon Route 53 can't process a request before the next request arrives, it will
 * 			reject subsequent requests for the same hosted zone and return an <code>HTTP 400
 * 				error</code> (<code>Bad request</code>). If Route 53 returns this error repeatedly
 * 			for the same request, we recommend that you wait, in intervals of increasing duration,
 * 			before you try the request again.</p>
 *
 * @throws {@link Route53ServiceException}
 * <p>Base exception class for all service exceptions from Route53 service.</p>
 *
 *
 * @public
 */
export class DeleteHostedZoneCommand extends $Command
  .classBuilder<
    DeleteHostedZoneCommandInput,
    DeleteHostedZoneCommandOutput,
    Route53ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getIdNormalizerPlugin(config),
    ];
  })
  .s("AWSDnsV20130401", "DeleteHostedZone", {})
  .n("Route53Client", "DeleteHostedZoneCommand")
  .f(void 0, void 0)
  .ser(se_DeleteHostedZoneCommand)
  .de(de_DeleteHostedZoneCommand)
  .build() {
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
