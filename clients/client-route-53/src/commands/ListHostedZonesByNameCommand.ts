// smithy-typescript generated code
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListHostedZonesByNameRequest, ListHostedZonesByNameResponse } from "../models/models_0";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { ListHostedZonesByName } from "../schemas/schemas_7_List";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListHostedZonesByNameCommand}.
 */
export interface ListHostedZonesByNameCommandInput extends ListHostedZonesByNameRequest {}
/**
 * @public
 *
 * The output of {@link ListHostedZonesByNameCommand}.
 */
export interface ListHostedZonesByNameCommandOutput extends ListHostedZonesByNameResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of your hosted zones in lexicographic order. The response includes a
 * 				<code>HostedZones</code> child element for each hosted zone created by the current
 * 				Amazon Web Services account. </p>
 *          <p>
 *             <code>ListHostedZonesByName</code> sorts hosted zones by name with the labels
 * 			reversed. For example:</p>
 *          <p>
 *             <code>com.example.www.</code>
 *          </p>
 *          <p>Note the trailing dot, which can change the sort order in some circumstances.</p>
 *          <p>If the domain name includes escape characters or Punycode,
 * 				<code>ListHostedZonesByName</code> alphabetizes the domain name using the escaped or
 * 			Punycoded value, which is the format that Amazon Route 53 saves in its database. For
 * 			example, to create a hosted zone for exämple.com, you specify ex\344mple.com for
 * 			the domain name. <code>ListHostedZonesByName</code> alphabetizes it as:</p>
 *          <p>
 *             <code>com.ex\344mple.</code>
 *          </p>
 *          <p>The labels are reversed and alphabetized using the escaped value. For more information
 * 			about valid domain name formats, including internationalized domain names, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DomainNameFormat.html">DNS
 * 				Domain Name Format</a> in the <i>Amazon Route 53 Developer
 * 				Guide</i>.</p>
 *          <p>Route 53 returns up to 100 items in each response. If you have a lot of hosted zones,
 * 			use the <code>MaxItems</code> parameter to list them in groups of up to 100. The
 * 			response includes values that help navigate from one group of <code>MaxItems</code>
 * 			hosted zones to the next:</p>
 *          <ul>
 *             <li>
 *                <p>The <code>DNSName</code> and <code>HostedZoneId</code> elements in the
 * 					response contain the values, if any, specified for the <code>dnsname</code> and
 * 						<code>hostedzoneid</code> parameters in the request that produced the
 * 					current response.</p>
 *             </li>
 *             <li>
 *                <p>The <code>MaxItems</code> element in the response contains the value, if any,
 * 					that you specified for the <code>maxitems</code> parameter in the request that
 * 					produced the current response.</p>
 *             </li>
 *             <li>
 *                <p>If the value of <code>IsTruncated</code> in the response is true, there are
 * 					more hosted zones associated with the current Amazon Web Services account. </p>
 *                <p>If <code>IsTruncated</code> is false, this response includes the last hosted
 * 					zone that is associated with the current account. The <code>NextDNSName</code>
 * 					element and <code>NextHostedZoneId</code> elements are omitted from the
 * 					response.</p>
 *             </li>
 *             <li>
 *                <p>The <code>NextDNSName</code> and <code>NextHostedZoneId</code> elements in the
 * 					response contain the domain name and the hosted zone ID of the next hosted zone
 * 					that is associated with the current Amazon Web Services account. If you want to
 * 					list more hosted zones, make another call to <code>ListHostedZonesByName</code>,
 * 					and specify the value of <code>NextDNSName</code> and
 * 						<code>NextHostedZoneId</code> in the <code>dnsname</code> and
 * 						<code>hostedzoneid</code> parameters, respectively.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, ListHostedZonesByNameCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, ListHostedZonesByNameCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * // import type { Route53ClientConfig } from "@aws-sdk/client-route-53";
 * const config = {}; // type is Route53ClientConfig
 * const client = new Route53Client(config);
 * const input = { // ListHostedZonesByNameRequest
 *   DNSName: "STRING_VALUE",
 *   HostedZoneId: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListHostedZonesByNameCommand(input);
 * const response = await client.send(command);
 * // { // ListHostedZonesByNameResponse
 * //   HostedZones: [ // HostedZones // required
 * //     { // HostedZone
 * //       Id: "STRING_VALUE", // required
 * //       Name: "STRING_VALUE", // required
 * //       CallerReference: "STRING_VALUE", // required
 * //       Config: { // HostedZoneConfig
 * //         Comment: "STRING_VALUE",
 * //         PrivateZone: true || false,
 * //       },
 * //       ResourceRecordSetCount: Number("long"),
 * //       LinkedService: { // LinkedService
 * //         ServicePrincipal: "STRING_VALUE",
 * //         Description: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   DNSName: "STRING_VALUE",
 * //   HostedZoneId: "STRING_VALUE",
 * //   IsTruncated: true || false, // required
 * //   NextDNSName: "STRING_VALUE",
 * //   NextHostedZoneId: "STRING_VALUE",
 * //   MaxItems: Number("int"), // required
 * // };
 *
 * ```
 *
 * @param ListHostedZonesByNameCommandInput - {@link ListHostedZonesByNameCommandInput}
 * @returns {@link ListHostedZonesByNameCommandOutput}
 * @see {@link ListHostedZonesByNameCommandInput} for command's `input` shape.
 * @see {@link ListHostedZonesByNameCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link InvalidDomainName} (client fault)
 *  <p>The specified domain name is not valid.</p>
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
 *
 * @throws {@link Route53ServiceException}
 * <p>Base exception class for all service exceptions from Route53 service.</p>
 *
 *
 * @public
 */
export class ListHostedZonesByNameCommand extends $Command
  .classBuilder<
    ListHostedZonesByNameCommandInput,
    ListHostedZonesByNameCommandOutput,
    Route53ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions()), getIdNormalizerPlugin(config)];
  })
  .s("AWSDnsV20130401", "ListHostedZonesByName", {})
  .n("Route53Client", "ListHostedZonesByNameCommand")
  .sc(ListHostedZonesByName)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListHostedZonesByNameRequest;
      output: ListHostedZonesByNameResponse;
    };
    sdk: {
      input: ListHostedZonesByNameCommandInput;
      output: ListHostedZonesByNameCommandOutput;
    };
  };
}
